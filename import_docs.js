const asar = require('@electron/asar');
const fs = require('fs');
const colors = require('colors-console');
const tmp = require('tmp');
const unzip = require('./utils/unzip').unzip;
const unzip_gh = require('./utils/unzip-gh').unzip_gh;

console.log(colors('blue', 'Writerside离线文档修补实用程序'));
console.log('(C)2024, CoraTech Workspace')
console.log('resource.asar中resources/jetbrains内容归Jetbrains s.r.o所有')

const args = process.argv.slice(2)

const mode = args[0];
const file = args[1];

const tmpd = tmp.dirSync().name;

if (mode == 'gh') {
    unzip_gh(tmpd, file)
}