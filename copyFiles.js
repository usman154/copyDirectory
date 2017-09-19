/*
A very basic example to copy files from one location to an other location
*/
const path = require('path');
var fs = require('fs');
var copyFiles = function(src , dest){
fs.mkdir(dest, function(){
  fs.readdir(src, function(error, file){
    if(error)
    throw error;
    for(var i = 0; i < file.length; i++){
      console.log(file);
      var th = fs.lstatSync(path.join(src,file[i]));
      if(th.isDirectory()){
        copyFiles(path.join(src, file[i]), path.join(dest, file[i]));
      }
      else{
        var readStream = fs.createReadStream(path.join(src, file[i]) , 'utf8');
        var writeStream = fs.createWriteStream(path.join(dest, file[i]));
        readStream.pipe(writeStream);
      }
    }
  })
});
}
module.exports.copyFiles = copyFiles;
