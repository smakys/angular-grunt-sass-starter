'use strict';
module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'app/assets/app.css': 'app/assets/css/app.scss',
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.registerTask('default', ['sass', 'watch']);
};