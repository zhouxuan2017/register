/*global module :true*/
module.exports=function(grunt){
  grunt.initConfig({
    htmlmin:{
      options:{
        collapseWhitespace:true,
        preserveLineBreaks:false
      },
  files:{
    src:'./index.html',
    dest:'./index.html'
  }
  },
  cssmin:{
    'layout.css':'layout.css'
  },
  uglify:{
     'main.js':'main.js'
  },
  imagemin:{
    files:{
      expand:true,
      src:['img/*.{png.jpg,gif}'],
      dest:'img/'
    }
  }
  });
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');


   grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin','imagemin']);
};
