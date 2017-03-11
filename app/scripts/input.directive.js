(function () {
    'use strict';

    angular.module('inputApp')
        .directive('inputCurrency', function ($timeout) {
            return {
                restrict: 'A',
                require: '?ngModel',
                replace: true,
                scope: {
                    decimalNumbers: '=?',
                    disableCurrencySymbol: '=?',
                    currencySymbol: '=?'
                },
                link: function (scope, element, attrs, ngModel) {
                    if (!ngModel) return;
                    scope.input = ngModel;
debugger;
                    scope.decimalNumbers = angular.isDefined(scope.decimalNumbers) ? scope.decimalNumbers : 0;
                    scope.disableCurrencySymbol = angular.isDefined(scope.disableCurrencySymbol) ? scope.disableCurrencySymbol : true;
                    scope.currencySymbol = angular.isDefined(scope.currencySymbol) ? scope.currencySymbol : '$';
                    var timeToWait = undefined;

                    // view -> model
                    ngModel.$parsers.push(function (value) {
                        if (ngModel.$isEmpty(value)) return undefined;
                        return currencyToNumber(value, scope.decimalNumbers);
                    });

                    // model -> view
                    ngModel.$formatters.push(function (value) {
                        if (ngModel.$isEmpty(value)) return undefined;
                        else {
                            return numberToCurrency(value, scope.decimalNumbers, scope.currencySymbol, scope.disableCurrencySymbol);
                        }
                    });

                    function UpdateView() {
                        //disable timer
                        if (timeToWait) {
                            $timeout.cancel(timeToWait);
                        }
                        // setting timeout
                        timeToWait = $timeout(function () {
                            scope.$apply(function () {
                                element.val(numberToCurrency(element.val(), scope.decimalNumbers, scope.currencySymbol, scope.disableCurrencySymbol));
                            });
                        }, 500);
                    }
                    element.on('input', UpdateView);
                }
            };
            // currency => number
            function currencyToNumber(value, numAfterDecimal) {
                value = value.toString();
                if (numAfterDecimal > 0) {
                    value = value.replace(/[^0-9\.]+/g, "");
                    value = Number(value.match(/[^.]+[0-9]{0,}\.{0,1}[0-9]{0,}/));

                    return value.toFixed(numAfterDecimal);
                }
                value = Number(value.replace(/[^0-9]+/g, ""));
                return value;
            }

            // number => currency
            function numberToCurrency(value, numAfterDecimal, currencySymbol, disableCurrencySymbol) {
                if (!value) return;

                if (numAfterDecimal > 0) {
                    value = parseFloat(currencyToNumber(value, numAfterDecimal));
                    value = value.toFixed(numAfterDecimal).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                }
                else {
                    value = currencyToNumber(value.toString(), numAfterDecimal).toString();
                    value = value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                }

                return !disableCurrencySymbol ? currencySymbol + "" + value : value;
            }
        });
})();