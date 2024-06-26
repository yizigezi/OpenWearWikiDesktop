exports.SettingsWindow = function() {
    const { BrowserWindow } = require('electron');
    const path = require('node:path')
    const win = new BrowserWindow({
        width: 747,
        height: 535,
        icon: '../resource/icon.ico',
        webPreferences: {
          preload: path.join(__dirname, 'settings/res/preload.js')
        }
      });
      win.setResizable(false);
      win.setMenuBarVisibility(false);
      win.loadFile('./pages/settings/settings-page-1.html');
      win.setTitle('设置')
};