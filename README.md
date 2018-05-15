# ElectronSQL
Playing with Electron, MySQL and WAV metadata

# Installation guide
This is a simple Electron app so you simply need to ```npm install``` everything.

If anything goes wrong, please raise an issue.

# Usage
For now, when the app start, just select a folder when asked to. It will be parsed and all the metadata from iXML chunk that can be found in all the files in the folder will be added to a simple database, and displayed on the main window.

# Tout doux
Avant le 19/05 :
 - *UI* simple : affichage de la _database_ (avec _scrollbar_) et _placeholder_ pour le _player_ audio.
 - Implémentation des équivalences (CSV).
 - Implémentation du _stemmer_.
 - #V1# Ajout de la colonne "contenu sémantique" et remplissage de cette colonne. #V1# = à partir de _lexeme_table.js_
 - Implémentation de la recherche littérale (_i.e._ renvoyer les sons contenant tous les mots-clefs _après_ nettoyage et _stemmer_).
 - #V1# Implémentation de la recherche par contenu sémantique.
 
Doit être prêt pour la soutenance (entre le 11 et le 22 juin) :
  - Implémentation de _lexeme_tree.js_ et de la recherche par similitude.
  - Équivalences complexes (_i.e._ certaines chaînes ne sont que des débuts de mots, _etc._).
  - Ajout du _player_ audio (avec _waveform_).
  - Faire la version _Analyse Sémantique Latente_ (:BIG: :Low-prio:).

Optimisations supplémentaires (les fameux "si on a le temps") : _UI_ & _UX_...
