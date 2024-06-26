exports.FeedbackWindow = function(feedback_url) {
    const { BrowserWindow } = require('electron');
    const win = new BrowserWindow({
        width: 800,
        height: 900,
        icon: '../resource/favicon@2x.ico'
      });
      win.setMenuBarVisibility(false);
      win.loadURL(feedback_url);
}