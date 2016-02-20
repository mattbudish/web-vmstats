module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    copy: {
      main: {
	files: [
	  {
	    expand: true,
	    flatten: true,
	    cwd: 'node_modules/',
	    dest: 'web/js/',
	    src: [ 
	      'chroma-js/chroma.min.js',
	      'jquery/dist/jquery.min.js', 
	      'ReconnectingWebSocket/reconnecting-websocket.min.js',
	      'smoothie/smoothie.js',
	      'sugar/release/sugar-full.development.js'
	    ]
	  }
	]
      }
    }	
  });

  grunt.loadNpmTasks('grunt-contrib-copy');

  // Install task
  grunt.registerTask('install', ['copy']);
  // Default task(s).
  grunt.registerTask('default', ['install']);

};
