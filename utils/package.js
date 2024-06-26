const asar = require('@electron/asar');

const src = './resources';
const dest = 'resources.asar';

asar.createPackage(src, dest);
console.log('done');