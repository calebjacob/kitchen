module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        stripBanners: true
      },
      dist: {
        src: ['public/js/**/*.js', 'public/js/*.js'],
        dest: 'public/_dist/<%= pkg.name %>.js'
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
        options: {
          ignoredFiles: ['node_modules/**', 'public/**', 'styles/**', 'package.json', '.gitignore', '.git/**', 'bower_components/**', 'npm_debug.log', 'README.md'],
          file: 'app.js'
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
          'public/_dist/<%= pkg.name %>.css': 'styles/main.styl'
        }
      }
    },

    uglify: {
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'public/_dist/<%= pkg.name %>.js'
      }
    },

    watch: {
      stylus: {
        files: ['styles/*.styl', 'styles/**/*.styl'],
        tasks: ['stylus'],
        options: {
          atBegin: true,
          livereload: {
            port: 35729
          }
        }
      },

      js: {
        files: '<%= concat.dist.src %>',
        tasks: ['concat'],
        options: {
          atBegin: true,
          livereload: {
            port: 35729
          }
        }
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
          htmlDemo: false
        }
      }
    }
  });
  
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);
  
  // Default task.
  grunt.registerTask('default', ['concurrent']);

  // Icons
  grunt.registerTask('icons', ['webfont', 'stylus']);
  
  // Production task.
  grunt.registerTask('production', ['concat', 'uglify', 'stylus']);
};
