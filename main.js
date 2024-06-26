const { app, BrowserWindow, Menu } = require('electron')
const config = require('./config/config.json')
const FeedbackWindow = require('./pages/feedback.js').FeedbackWindow
const LicenseWindow = require('./pages/license.js').LicenseWindow
const SettingsWindow = require('./pages/settings.js').SettingsWindow

const template = [
  {
    label: "编辑",
    submenu: [
        {
            label: "复制",
            role: "copy",
        },
        {
            label: "粘贴",
            role: "paste",
        }
    ]

  },
  {
      label: '工具',
      submenu: [
          {
              label: '反馈',
              accelerator: 'Ctrl+F',
              click() {
                FeedbackWindow(config.feedback_url)
              }
          },
          {
              label: '在浏览器中打开',
              accelerator: 'Ctrl+O'
          }
      ]
  },
  {
      label: '更多',
      submenu: [
          {
              label: '设置',
              accelerator: 'Ctrl+S',
              click() {
                SettingsWindow()
              }
          },
          {
              label: '许可证',
              click() {
                LicenseWindow('./resource/LICENSE.txt')
              }
          },
          {
            type: 'separator'
          },
          {
              label: '退出',
              accelerator: 'Ctrl+Q',
              role: 'quit'
          }
      ]
  }
];


if (process.platform === 'darwin') {
  template.unshift({
      label: app.getName(),
      submenu: [
          {
              label: 'Quit',
              accelerator: 'CmdOrCtrl+Q',
              role: 'quit'
          }
      ]
  });
}


const createWindow = () => {
    const win = new BrowserWindow({
      width: 1600,
      height: 900,
      icon: 'resource/icon.ico'
    })
    const appMenu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(appMenu);
    win.loadFile('src/readme-new.html');
  }
app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
