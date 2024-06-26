const { contextBridge } = require('electron')
const os = require('node:os')
const config = require('../../../config/config.json')


contextBridge.exposeInMainWorld('configs', {
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  systemm: () => os.release(),
  color_config: () => config.document.color
})