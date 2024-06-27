exports.FeedbackWindow = function(feedback_url) {
    const path = require('node:path')
    const { BrowserWindow } = require('electron');
    const win = new BrowserWindow({
        width: 800,
        height: 900,
        icon: path.join(__dirname, '../resource/icon.ico')
      });
      win.setMenuBarVisibility(false);
      win.loadURL(feedback_url);
}