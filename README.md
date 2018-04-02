# ElectronSQL
Playing with Electron, MySQL and WAV metadata

# TODO
- ~~Add basic structure for an Electron application~~
- ~~Adding support and connexion to a MySQL Database~~
- ~~Create a simple UI~~
- ~~Create a model for the DB and implement it~~
- ~~Search through file system at startup~~
- ~~Add files from parsing to db at startup~~
- Add feature to UI page to search through DB
- Be able to keep database after having closed the app
- Create loading screen during parsing time

# Installation guide
This is a simple Electron app so you simply need to ```npm install``` everything.

If anything goes wrong, please raise an issue.

# Usage
For now, when the app start, just select a folder when asked to. It will be parsed and all the metadata from iXML chunk that can be found in all the files in the folder will be added to a simple database, and displayed on the main window.
