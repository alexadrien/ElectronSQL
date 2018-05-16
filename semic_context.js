{ "priorite" : 1,
//Évidemment, on peut déduire ce premier groupe de 'lexeme_table.js' ;
//Il s'agit de la table inverse, à laquelle on a supprimé les "xxx-none".


//TO DO :
// - faire correspondre ces chaïnes avec la sortie du stemmer.
// - ...

	"petit" : [0],
	"grand" : [1],
	"large" : [3],
	"mat" : [4],
	"reverberant" : [5],
	"clair" : [6],
	"sombre" : [7],
	"presence" : [9],
	"groupe" : [10],
	"foule" : [11],
	"chuchotement" : [12],
	"voix" : [13],
	"cri" : [14],
	"calme" : [15],
	"activite" : [16],
	"agite" : [17],
	"machine" : [18],
	"moteur" : [19],
	"ventilateur" : [20],
	"hum" : [21],
	"buzz" : [22],
	"avion" : [25],
	"circulation" : [26],
	"oiseaux" : [27],
	"ecoulement" : [29],
	"tuyau" : [30]
},

{ "priorite" : 2,
//Le groupe des "méta-caractères".
//Il sont de priorité supérieure aux "lieux",
//mais inférieure aux "caractères" de 'lexeme_table.js'.
	"vide" : [8, 28, 15],
 	"neon" : [22],
	"induction" : [22],
	"Hall" : [1, 3, 5],
	"vie" : [16],
	"nuit" : [15],
	"soir" : [15],
	"brouhaha" : [10, 13, 16],
	"murmure" : [12],
	"bruit" : [16],
	"figuration" : [10],
	"gens" : [10],
	"canalisation" : [29, 30]

},

{ "priorite" : 3,
//Le groupe des lieux.
	"appartement" : [4],
	"salon" : [4],
	"bureau" : [9, 10, 13, 16],
	"chambre" : [4, 8, 28, 15],
	"couloir" : [4],
	"hotel" : [1, 5, 9, 13],

	"cuisine" : [0, 15, 28, 29],
	"toilettes" : [0, 15, 28, 29, 30],
	"salle de bain" : [0, 15, 28, 29, 30],
	
	"commissariat" : [9, 10, 13, 16],
	
	"usine" : [1, 3, 5, 16, 18, 19],
	"atelier" : [4, 16, 18],
	"imprimerie" : [16, 18, 19],
	"supermarche" : [1, 9, 10, 13, 16],
	
	"gare" : [1, 3, 5, 9, 11, 13, 16],
	"aeroport" : [1, 3, 5, 9, 11, 13, 16],

	"cafe" : [4, 9, 10, 13, 16],
	"bar" : [4, 9, 10, 13, 16],
	"brasserie" : [4, 9, 10, 13, 16],
 	"restaurant" : [4, 9, 10, 13, 16],
 	
 	"hopital" : [9, 10, 13, 16],

 	"eglise" : [1, 3, 5, 8, 15, 29],
 	"grotte" : [1, 3, 5, 8, 15, 29],
 	"hangar" : [1, 3, 5, 8, 15, 21, 22, 28],
 	"musee" : [1, 3, 5, 9, 10, 15],
 	"parking" : [1, 3, 5, 8, 15, 20, 22, 28]
}