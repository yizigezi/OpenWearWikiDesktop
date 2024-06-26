exports.unzip = function(file, path) {
    const unzip = require('unzip');
    var fs = require('fs');
    fs.createReadStream(file).pipe(unzip.Extract({ path: path }));
}
