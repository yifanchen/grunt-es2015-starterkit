module.exports = function(grunt) {

  grunt.initConfig({
    browserify: {
      dist: {
        options: {
          'transform': [['babelify', { 'stage': 0 }]]
        },
        files: {
          'build/bundle-main.js': ['src/main.js']
        }
      }
    },

    uglify: {
      options: {
        mangle: true
      },
      dist: {
        files: {
          'dist/main.min.js': ['build/bundle-main.js']
        }
      }
    },
  });

  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask("default", ['browserify', 'uglify']);
};
