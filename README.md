# Angular 1 - Currency-Number Convertor

Angular 1 directive who's able to format a user input to currency style
but to keep a number in the model (for Backend and calculations).

## Motivation

The idea behind the project was to show the user's a beutiful currency style

but to keep the user's input as Number for the model and for the Backend.

### Input Example:

Directive: `input-currency`

`decimal-numbers` = How many numbers wolud you like to have after the decimal point - default = 0.

`disable-currency-symbol` = Would you like to have a currency symbol - default = false.

`currency-symbol` = The currency symbol you'll like to use - default = $.

```
<input type="text" input-currency decimal-numbers="2" currency-symbol="'$'" disable-currency-symbol="false" ng-model="input">
```

## Getting Started

To get you started you can simply clone the repository and install the dependencies:

### Prerequisites

You need git to clone the repository. You can get git from [here](https://git-scm.com/). 

I also use a number of Node.js tools to initialize and install. You must have Node.js and its package manager (npm) installed.

You can get them from [here](https://nodejs.org/en/).

### Install Dependencies and Task Manager

I have two kinds of dependencies:
1. We get the tools we depend upon via npm, the [Node package manager](https://www.npmjs.com/).
2. We get the Angular code via bower, a [client-side code package manager](https://bower.io/).
3. To run the project use [Grunt js task runner](http://gruntjs.com/). 

Go with cmd to the project directory and run:

`npm install`

`bower install`

After installations complete make sure 'bower_components' folder is inside the 'app' folder

### Run the Application

I have preconfigured the project with a simple development web server. The simplest way to start this server is:
 
 `grunt serve`

 Now browse to the app at <http://localhost:8000/index.html>


## Have Fun