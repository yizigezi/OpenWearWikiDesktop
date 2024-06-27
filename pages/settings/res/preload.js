const { contextBridge } = require('electron')
const os = require('node:os')
const path = require('node:path')
const config = require(path.join(__dirname, '../config/config.json'))


contextBridge.exposeInMainWorld('configs', {
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  systemm: () => os.release(),
  color_config: () => config.document.color
})