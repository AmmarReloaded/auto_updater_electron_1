const {app, BrowserWindow} = require('electron')
const {path} = require('path')
const {autoUpdater} = require('electron-updater')

let mainWindow = null;

app.on( 'ready', () => {
    mainWindow = new BrowserWindow();
    mainWindow.loadFile(path.join(__dirname, 
        "./public/index.html"));

    autoUpdater.checkForUpdatesAndNotify();
})


/*
1- update available
2- check-for-updates
3- download-progress
4- update-downloaded
*/



autoUpdater.on( 'update-available', () => {

})

autoUpdater.on( 'checking-for-update', () => {

})

autoUpdater.on( 'download-progress', () => {

})

autoUpdater.on( 'update-downloaded', () => {

})