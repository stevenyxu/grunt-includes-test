'use strict';
module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-includes');
  grunt.initConfig({
    /* copied from readme */
    includes: {
      js: {
        options: {
          includeRegexp: /^\/\/\s*import\s+['"]?([^'"]+)['"]?\s*$/,
          duplicates: false,
          debug: true
        },
        files: {
          cwd: 'assets/js/',
          src: '**/*.js',
          dest: 'assets/dist/js/',
        },
      },
    }
  });
};
