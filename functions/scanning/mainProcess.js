import createDatabase from "./../db/createDatabase";
import askForPath from "./../electron/askForPath";
import sendDataToFront from "./../electron/sendDataToFront";
import exploreDirList from "./../folder/exploreDirList";
import addFileToDb from "./../db/addFileToDb";
import getFilename from "./../folder/getFilename";
import getAllNames from "../db/getAllNames";
import getAllPureFilename from "../db/getAllPureFilename";
import cleaning from "../preprocessing/cleaning";
import rooting from "../preprocessing/rooting";
import addPureFilename from "../db/addPureFilename";
import addSemantique from "../db/addSemantique";
import getSignature from "../semantique/getSignature";
import getAllDbData from "../db/getAllDbData";

export default async function(win, db) {
  db = await createDatabase();

  const pathToParse = await askForPath();

  const allFiles = await exploreDirList(pathToParse);

  await Promise.all(
    allFiles.map(async filepath => {
      await addFileToDb(filepath, db);
    })
  );

  const allFilenames = (await getAllNames(db))[0].values;

  await Promise.all(
    allFilenames.map(async ([rowid, filename]) => {
      const cleaned = cleaning(filename);
      const pureFilename = rooting(cleaned);
      await addPureFilename(rowid, pureFilename, db);
    })
  );

  const allPureFilenames = (await getAllPureFilename(db))[0].values;

  await Promise.all(
    allPureFilenames.map(async ([rowid, pureFilename]) => {
      const sematiqueSignature = await getSignature(pureFilename);
      await addSemantique(rowid, sematiqueSignature, db);
    })
  );

  await sendDataToFront(win, db);
}

function process() {
  //charger derniere db (pas du tout prio)
  //ok demande dossier a scanner
  //ok scanne le dossier
  //ok pour chaque fichidr trouvé
  //ok mettre son nom extension, et emplacement dans la db
  //ok pour chaque nom de la db
  // nettoyage :
  // abréviation, fautes, etc... (CSV remplacement)
  // racinisation
  // algorithme de porter, qui renvoie un nom épuré, qu'on rajoute à la db
  // pour porter, essayer ca https://github.com/MarkKahn/stem
  // db complete
  // analyse sémantique
  // pour chaque nom epuré
  // lancer la fonction de signature sémantiquz
  // cette fonction :
  // prend un nom épuré (potentiellement plusieurs mots)
  // pour chaque mot, aller chercher son contenu semantique dans la hash table dedié à ca (array d'id)
  // classer les mots par ordre de priorité
  // faire une liste (avec unicité) des signatures sémantiques
  // renvoyé ca
  //Remplir la colonne de signature sémantique
  // Créer un champ de recherche
  // Quand l'utiulisateur rentre des mots
  // créer la signature sémantique (voir plus haut)
  // chercher dns la db les memes signatures
  // si dans l'analyse semantique un mot n'a pas de contenu sémantique, alors inclure dans le resultat de la recherche les noms conteantn le meme mot
  //renvoyer les noms de fichiers
}
