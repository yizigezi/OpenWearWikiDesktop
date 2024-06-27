exports.LicenseWindow = function(file) {
    const { BrowserWindow } = require('electron');
    const path = require('node:path')
    const win = new BrowserWindow({
        width: 800,
        height: 900,
        icon: path.join(__dirname, '../resource/icon.ico')
      });
      win.setMenuBarVisibility(false);
      win.loadFile(file);
      win.setTitle('许可证');
}