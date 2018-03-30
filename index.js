const {
  app,
  BrowserWindow
} = require('electron')
const path = require('path')
const url = require('url')
var SQL = require('sql.js')
var fs = require('fs')

let win
let db

function addFileToDb(filePath, thedb) {
  const fileExt = path.extname(filePath).substring(1)
  const fileName = path.basename(filePath, '.' + fileExt)
  var queryString = "INSERT INTO `files` VALUES ('";
  queryString += fileName
  queryString += "', '"
  queryString += fileExt
  queryString += "', '"
  queryString += filePath
  queryString += "');"
  thedb.run(queryString)
}

function exploreDirRec(dirpath, fileCallback) {
  // console.log(dirpath);
  const currentDirList = fs.readdirSync(dirpath)
  for (var i in currentDirList) {
    var currentCompletePath = path.join(dirpath, currentDirList[i])
    var isDir = fs.lstatSync(currentCompletePath).isDirectory()
    if (isDir) { //is dir
      exploreDirRec(currentCompletePath, fileCallback);
    } else {
      fileCallback(currentCompletePath);
    }
  }
}

function exploreDirList(dirpath, fileCallback) {
  var foldersToExplore = [dirpath]
  while (foldersToExplore.length > 0) {
    // console.log(foldersToExplore[0]);
    var currentDirList = fs.readdirSync(foldersToExplore[0])
    for (var i in currentDirList) {
      var currentCompletePath = path.join(foldersToExplore[0], currentDirList[i])
      var isDir = fs.lstatSync(currentCompletePath).isDirectory()
      if (isDir) { //is dir
        foldersToExplore.push(currentCompletePath)
      } else {
        fileCallback(currentCompletePath)
      }
    }
    foldersToExplore.shift()
  }
}

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
