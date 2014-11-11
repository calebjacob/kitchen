var path = require('path');

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: ['public/_dist'],

    concat: {
      options: {
        stripBanners: true
      },
      dist: {
        src: ['public/js/config.js', 'public/js/lib/*.js', 'public/js/helpers/*.js', 'public/js/factories/*.js', 'public/js/directives/*.js', 'public/js/index.js'],
        dest: 'public/_dist/scripts.<%= pkg.version %>.js'
      }
    },

    concurrent: {
      dev: {
        options: {
          logConcurrentOutput: true
        },
        tasks: ['watch', 'nodemon']
      }
    },

    nodemon: {
      dev: {
        script: 'app.js',
        options: {
          ext: 'js, swig',
          ignore: ['node_modules/**', 'public/**', 'styles/**', 'package.json', '.gitignore', '.git/**', 'bower_components/**', 'npm_debug.log', 'README.md']
        }
      }
    },

    stylus: {
      compile: {
        options: {
          define: {
            importAll: require('stylus-import-tree')
          }
        },
        files: {
          'public/_dist/styles.<%= pkg.version %>.css': 'styles/main.styl'
        }
      }
    },

    uglify: {
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: '<%= concat.dist.dest %>'
      }
    },

    watch: {
      stylus: {
        files: ['styles/*.styl', 'styles/**/*.styl'],
        tasks: ['stylus']
      },

      js: {
        files: '<%= concat.dist.src %>',
        tasks: ['concat']
      },

      icons: {
        files: '<%= webfont.icons.src %>',
        tasks: ['icons']
      }
    },

    webfont: {
      icons: {
        src: 'public/images/icons/*.svg',
        dest: 'public/fonts',
        destCss: 'styles/vendors',
        options: {
          stylesheet: 'styl',
          relativeFontPath: '../fonts/',
          htmlDemo: false,
          ligatures: true,
          templateOptions: {
            classPrefix: 'icon-'
          }
        }
      }
    }
  });
  
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);
  
  // Default
  grunt.registerTask('default', ['development', 'concurrent']);

  // Icons
  grunt.registerTask('icons', ['webfont', 'stylus']);

  // Development
  grunt.registerTask('development', ['clean', 'concat', 'stylus']);
  
  // Production
  grunt.registerTask('production', ['clean', 'concat', 'uglify', 'stylus']);
};
