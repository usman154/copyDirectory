var copyFiles = require('./copyFiles');
var prompt = require('prompt');
prompt.start();

prompt.get(['sourcePath', 'destPath'], function (err, result) {
  if (err) { return onErr(err); }
  console.log('Command-line input received:');
  console.log('  Source Path is : ' + result.sourcePath);
  console.log('  Destination Path is: ' + result.destPath);
  copyFiles.copyFiles(result.sourcePath,result.destPath);
});

function onErr(err) {
  console.log(err);
  return 1;
}
