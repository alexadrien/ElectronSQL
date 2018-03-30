const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
var SQL = require('sql.js')
var fs = require('fs')

  // Keep a global reference of the window object, if you don't, the window will
  // be closed automatically when the JavaScript object is garbage collected.
  let win
  let db

function exploreDirRec(dirpath, fileCallback){
  // console.log(dirpath);
  const currentDirList = fs.readdirSync(dirpath)
  for(var i in currentDirList){
    var currentCompletePath = path.join(dirpath, currentDirList[i])
    var isDir = fs.lstatSync(currentCompletePath).isDirectory()
    if(isDir){//is dir
      exploreDirRec(currentCompletePath, fileCallback);
    } else{
      fileCallback(currentCompletePath);
    }
  }
}

function exploreDirList(dirpath, fileCallback){
  var foldersToExplore = [dirpath]
  while(foldersToExplore.length>0){
    // console.log(foldersToExplore[0]);
    var currentDirList = fs.readdirSync(foldersToExplore[0])
    for(var i in currentDirList){
      var currentCompletePath = path.join(foldersToExplore[0], currentDirList[i])
      var isDir = fs.lstatSync(currentCompletePath).isDirectory()
      if(isDir){//is dir
        foldersToExplore.push(currentCompletePath)
      } else{
        fileCallback(currentCompletePath)
      }
    }
    foldersToExplore.shift()
  }
}

  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 800, height: 600})

    // and load the index.html of the app.
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }))

    // Open the DevTools.
    //win.webContents.openDevTools()

    const contentInitDb = fs.readFileSync('db_init.sql', 'utf8');
    console.log(contentInitDb)

    try{
      db = new SQL.Database()
      db.run(contentInitDb)
      console.log(db.export())
    }catch(err){
      console.log(err)
    }

    // Emitted when the window is closed.
    win.on('closed', () => {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      win = null
    })
  }

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', createWindow)

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow()
    }
  })

  // In this file you can include the rest of your app's specific main process
  // code. You can also put them in separate files and require them here.
