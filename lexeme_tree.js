{
	"id" : "interieur",
	"children" : [
		{
			"id" : "acoustique",
			"children" : [
				{ "id" : "taille", "values" : ["petit", "grand"] },
				{ "id" : "stereo", "values" : ["none", "large"]},
				{
					"id" : "reverberation",
					"children" : [
						{ "id" : "TR60", "values" : ["mat", "reverberant"] },
						{ "id" : "couleur", "values" : ["clair", "sombre"] }
					]
				}
			]
		},
		{
			"id" : "source_sonore",
			"children" : [
				{
					"id" : "dans_le_lieu",
					"children" : [
						{ "id" : "caractere", "values" : ["calme", "agite"] },
						{ "id" : "voix", "values" : ["none", "voix"] },
						{ "id" : "densite", "values" : ["vide", "foule"] }
					]
				},
				{
					"id" : "hors_du_lieu",
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