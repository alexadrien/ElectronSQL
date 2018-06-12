# ElectronSQL
Playing with Electron, MySQL and WAV metadata

# Switching version for dev and for demo
To get the version with all the columns : 
```shell
git pull && git checkout master
```
To get the version with only the filename and the filepath : 
```shell
git pull && git checkout moldus
```

# Testing
```shell
npm install
npm run start
```

# Installation guide
This is a simple Electron app so you simply need to ```npm install``` everything.

If anything goes wrong, please raise an issue.

# Usage
For now, when the app start, just select a folder when asked to. It will be parsed and all the metadata from iXML chunk that can be found in all the files in the folder will be added to a simple database, and displayed on the main window.

# To start the app
launch `yarn start` in the directory

# Tout doux

Doit être prêt pour la soutenance (entre le 11 et le 22 juin) :
  - Lexèmes "négatifs" (pour forcer l'absence/faire la négation d'un élément dans la signature sémantique).
  - Ajout du _player_ audio (avec _waveform_).
  - Support du scan de ficher audio.
  - Équivalences complexes (_i.e._ certaines chaînes ne sont que des débuts de mots, _etc._).
  - Faire la version _Analyse Sémantique Latente_ (:BIG: :Low-prio:).

Optimisations supplémentaires (les fameux "si on a le temps") : _UI_ & _UX_...
