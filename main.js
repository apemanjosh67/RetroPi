const electron = require("electron")
const { app, BrowserWindow } = require('electron')
const path = require('path')


const createWindow = () => {

  let width = electron.screen.getPrimaryDisplay().size.width;
  let height = electron.screen.getPrimaryDisplay().size.height;

  const win = new BrowserWindow({
    width: width,
    height: height,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    },
    fullscreen: true
  })

  win.setBackgroundColor("#2b2b2b")
  win.setMenu(null)
  win.loadFile('app/index.html')
  win.webContents.openDevTools() //for debugging
}
app.disableHardwareAcceleration()

app.whenReady().then(() => {
  createWindow()
})
