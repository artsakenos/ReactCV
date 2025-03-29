const { ensureDirSync, copySync } = require('fs-extra');
const { join } = require('path');

// I path sono relativi allo script!
const scriptRelativePath = '../..'; // Questo mi fa puntare alla root.
const buildPath = join(__dirname, scriptRelativePath, 'build');
const destinationPath = join(__dirname, scriptRelativePath, '..', 'SuperBoot', 'src', 'main', 'resources', 'static');

ensureDirSync(destinationPath); // Create the destination folder if it doesn't exist
copySync(buildPath, destinationPath, { overwrite: true }); // Copy build files
console.log('[UltraReact::UltraBuild] Build copied to Destination folder.');

const destinationTemplatePath = join(__dirname, scriptRelativePath, '..', 'SuperBoot', 'src', 'main', 'resources', 'templates');
const indexSource = buildPath+"/index.html";
const indexDestination = destinationTemplatePath+"/react.html";
copySync(indexSource, indexDestination, { overwrite: true }); // Copy Index in Template
console.log('[UltraReact::UltraBuild] Index copied to Destination folder.');
