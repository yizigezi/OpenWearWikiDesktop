exports.LicenseWindow = function(file) {
    const { BrowserWindow } = require('electron');
    const win = new BrowserWindow({
        width: 800,
        height: 900,
        icon: '../resource/favicon@2x.ico'
      });
      win.setMenuBarVisibility(false);
      win.loadFile(file);
      win.setTitle('许可证');
}