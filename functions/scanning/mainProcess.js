import createDatabase from "./../db/createDatabase";
import askForPath from "./../electron/askForPath";
import sendDataToFront from "./../electron/sendDataToFront";
import addFileToDb from "./../db/addFileToDb";
import getAllNames from "../db/getAllNames";
import getAllPureFilename from "../db/getAllPureFilename";
import cleaning from "../preprocessing/cleaning";
import rooting from "../preprocessing/rooting";
import addPureFilename from "../db/addPureFilename";
import addSemantique from "../db/addSemantique";
import getSignature from "../semantique/getSignature";
import buildEquivalence from "../preprocessing/buildEquivalence";
import getSampleData from "../folder/getSampleData";
import declareMessager from '../messager/declareMessage';

export default async function(win, db, ipcMain) {
  db = await createDatabase();
  const equivalences = await buildEquivalence();

  const pathToParse = await askForPath();

  // const allFiles = await exploreDirList(pathToParse);

  const allFiles = await getSampleData();

  await Promise.all(
    allFiles.map(async filepath => {
      await addFileToDb(filepath, db);
    })
  );

  const allFilenames = (await getAllNames(db))[0].values;

  await Promise.all(
    allFilenames.map(async ([rowid, filename]) => {
      const cleaned = await cleaning(filename, equivalences);
      const pureFilename = await rooting(cleaned);
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

  declareMessager(ipcMain, db);
}

function process() {
  //charger derniere db (pas du tout prio)
  //ok demande dossier a scanner
  //ok scanne le dossier
  //ok pour chaque fichidr trouvé
  //ok mettre son nom extension, et emplacement dans la db
  //ok pour chaque nom de la db
  //ok nettoyage :
  //ok abréviation, fautes, etc... (CSV remplacement)
  //ok racinisation
  //ok algorithme de porter, qui renvoie un nom épuré, qu'on rajoute à la db
  //ok pour porter, essayer ca https://github.com/MarkKahn/stem
  //ok db complete
  //ok analyse sémantique
  //ok pour chaque nom epuré
  //ok lancer la fonction de signature sémantiquz
  //ok cette fonction :
  //ok prend un nom épuré (potentiellement plusieurs mots)
  //ok pour chaque mot, aller chercher son contenu semantique dans la hash table dedié à ca (array d'id)
  //ok classer les mots par ordre de priorité
  //ok faire une liste (avec unicité) des signatures sémantiques
  //ok renvoyer ca
  //ok Remplir la colonne de signature sémantique
  // Créer un champ de recherche
  // Quand l'utiulisateur rentre des mots
  // créer la signature sémantique (voir plus haut)
  // chercher dns la db les memes signatures
  // si dans l'analyse semantique un mot n'a pas de contenu sémantique, alors inclure dans le resultat de la recherche les noms conteantn le meme mot
  //renvoyer les noms de fichiers
}
