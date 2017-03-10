module.exports = grunt => {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    grunt.initConfig({
        connect: {
            target: {
                options: {
                    port: 8000,
                    hostname: '0.0.0.0',
                    open: true,
                    keepalive: true,
                    base: 'app'
                }
            }
        }
    });

    grunt.registerTask('serve', ['connect']);
}
