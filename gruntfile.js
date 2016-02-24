module.exports = function(grunt) {

  grunt.initConfig({    
    sass: {
      dist: {
        files: {
          'css_min/style.css': 'scss/style.scss'
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'js_min/script.js': ['js/plugins/**/*.js', 'js/*.js'],
        }
      }
    },
    watch: {
      files: ['js/**/*.js', 'scss/**/*.scss'],
      tasks: ['uglify','sass']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);

};