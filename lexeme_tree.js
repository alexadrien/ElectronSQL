/*
{ "id" : "object_name",
	"children" : [
		{ "id" : "child1", "values" : ["val1", "val2"] },
		{ "id" : "child2", "values" : ["val1", "val2"] },
	]
}
*/

{ "id" : "interieur",
	"children" : [
		{ "id" : "acoustique",
			"children" : [
				{ "id" : "taille", "values" : ["petit", "grand"] },
				{ "id" : "stereo", "values" : ["none", "large"]},
				{ "id" : "reverberation",
					"children" : [
						{ "id" : "TR60", "values" : ["mat", "reverberant"] },
						{ "id" : "couleur", "values" : ["clair", "sombre"] }
					]
				}
			]
		},
		{ "id" : "source_sonore",
			"children" : [
				{ "id" : "dans_le_lieu",
					"children" : [
//						{ "id" : "caractere", "values" : ["calme", "agite"] },
//						{ "id" : "voix", "values" : ["none", "voix"] },
//						{ "id" : "densite", "values" : ["vide", "foule"] },
						{ "id" : "humain",
							"children" : [
								{ "id" : "presence", "values" : ["none", "presence"] },
								{ "id" : "quantite", "values" : ["groupe", "foule"] },
								{ "id" : "voix", "values" : ["chuchotement", "voix", "cri"] },
								{ "id" : "caractere", "values" : ["calme", "activite", "agite"] },
							]
						},
						{ "id" : "non-humain",
							"children" : [
								{ "id" : "machine", "values" : ["machine", "moteur", "ventilateur"] },
								{ "id" : "electricite", "values" : ["hum", "buzz", "neon", "induction"] },
							]
						}

					]
				},
				{ "id" : "hors_du_lieu",
					"children" : [
						{ "id" : "avion", "values" : ["none", "avion"] },
						{ "id" : "circulation", "values" : ["none", "avion"] },
						{ "id" : "oiseaux", "values" : ["none", "oiseaux"] }
					]
				}
			]
		}
	]
}
