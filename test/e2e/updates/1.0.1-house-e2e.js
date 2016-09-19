/*
 This updates finds the e2e User and sets its properties, including setting the isAdmin property to true.  
 e2e will check that setting in the admin UI.  
 */
exports.options = {
	verbose: true,
	strict: true
};

exports.create = {
	House: [{
  "createdAt": new Date("2016-08-01T13:00:02+0200"),
  "updatedAt": new Date(1470051831425),
  "fmId": "11120",
  "name": "Blume AA",
  "category": 3,
  "pets": 0,
  "agentRef": "4.177 AA",
  "region": "Ardeche",
  "deposit": 150,
  "capacity": 5,
  "calcCapacity": 2,
  "bedroomCount": 1,
  "memo": "\n\n\n>>> 2007-09-09 =-=-=-=-=-=-=-=-=-=-=-=\n\nSleutel : ter plaatse\nSchoonmaak : - inclusive\nLasten : inclusive\nAfstanden :\n\n\n>>> 2007-10-24 =-=-=-=-=-=-=-=-=-=-=-=\n\nHistoriek :\n25296 (2/3/2005) : Dhr. Arnold Cobbaert Vanillestraat 11 9041  Oostakker Belgie -4p.- van 2-7-2005 tot 16-7-2005, huurprijs : €1354,24\n24270 (11/2/2004) : fam.  Goddaert Zwaantje 24 9130  Verrebroek Belgie -3p.- van 31-7-2004 tot 14-8-2004, huurprijs : €1341,44\n23526 (13/6/2003) : Dhr. Carl  Geens Jules Moretuslei 204  2610  Wilrijk Belgie -5p.- van 5-7-2003 tot 12-7-2003, huurprijs : €561\n23195 (21/1/2003) : Dhr. Dirk Vuylsteke Poekestraat 55B 8755  Ruiselede Belgie -4p.- van 12-7-2003 tot 19-7-2003, huurprijs : €623,75\n23005 (5/9/2002) : Dhr. GEERT DEMEULEMEESTER-DEFREYNE  Kattebelweg 11 8520   KUURNE Belgie -4p.- van 19/7/2003 tot 2/8/2003, huurprijs : €1300\n",
  "prices": [

  ],
  "distancePlaces": [

  ],
  "distanceTypes": [

  ],
  "accessTime": {
    "in": "16:00:00",
    "out": "09:30:00"
  },
  "route": {
    "nl": "\n\n\n\n\n\n\n\n\n\n\t\t\tTECHNISCHE FICHE BLUME\n\t\t\t========================\nAC.4.117AA + AB + AC\t\t\tCAPACITEIT : 4/5 personen\nWaardering : 3 sleutels\n\nAdres eigenaar : Mr. BLUME CLAUDE\n\t\t   Notre Dame\n\t\t   07230  LABLACHERE\t\tTél. : 4.75.36.63.83\n\t\t\t\t\t\t\t\n\nOntvangst ter plaatse : Door de eigenaar Mr. Blume Claude\n\nAdres van vakantiewoning BLUME : Notre Dame\n\t\t\t\t\t07230  LABLACHERE\nAfstand naar stad of dorp :\nHoogte :\nDichtst bijzijnde stad :\n\nOmschrijving van vakantiewoning : 3 aanpalende woningen, telkens op 2 niveau’s\n\nVerblijftaxen te betalen : NEE\nDieren toegelaten         : NEE\n___________________________________________________________\nHoe rijdt U naar BLUME : In LABLACHERE neemt U richting ALES.  Voor de Baseliek Notre Dame aan het kruispunt met het hotel “La Couronne”neemt U rechts.  Blume bevindt zich op 100 m aan de linkerkant.  De woning van de eigenaar ligt iets hoger op hetzelfde terrein.\n___________________________________________________________\n                               DIENSTEN EN WINKELS\n___________________________________________________________\n\nDokter : LABLACHERE 1.5 km\tRestaurant : ter plaatse\nApotheek :       “          “\t\tP.T.T.\t      : LABLACHERE1.5 km\nBeenhouwer :    “        “             \tDiskotheek : MAISONNEUVE 3 km\nBakker\t        :     “        “\t\tCinema      : ROSIERE 3 km                                                                                            \nVoeding       :      “        “\n___________________________________________________________\n\nVoor verdere inlichtingen of details, gelieve contact op te nemen met de eigenaar of CAP.  De bovenvermelde informaties kunnen steeds gewijzigd worden, wegens uitzonderlijke omstandigheden.  In dit geval kan CAP niet verantwoordelijk gesteld worden.\n===========================================\n"
  },
  "description": {
    "nl": "Blume bestaat uit 3 zeer  mooi gerenoveerde, typische gîtes, die gelegen zijn op ongeveer 1 km van het mooie stadje Lablachère ten zuiden van de Ardèche.  De gîtes hebben een mooi interieur en omvatten een woonkamer met open keuken en 2 éénpersoonsbedden.  Er is 1 slaapkamer (1x2p. + 1x1p.), een mooie ingerichte badkamer en apart toilet.  Wasmachine.  Elke gîte heeft een gezellig terras met privé tuin.  Er is een prachtig privé zwembad met een overgetelijk panorama op Lablachère en zijn Nôtre-Dame.  Blume is heel centraal gelegen voor tal van excursies.  Tennis, paardrijden kan men op 1 km.  Zwemmen in de rivier en kanovaren op 3 km.  ",
    "en": "Blume is made up of 3 beautifully renovated typical lodgings, situated around 1km from the pretty town called LABLACHÈRE, south of the Ardèche. Each lodging has a charming terrace and a private garden. There is a beautiful private swimming-pool with an overwhelming panorama of Lablachère and Notre-Dame.\n\nThe lodgings offer a pretty interior and are made up of a living-room with and open kitchen and 2 single beds. There is 1 bedroom (1x2p + 1x1p), a nicely fitted bathroom with a separate toilet. Washing-machine. It is a central location for many outings.\n\nBlume is a precious, beautiful residence offering the necessary privacy. \n",
    "fr": "Blume se compose de 3 logements typiques, merveilleusement rénovés, se situant à 1km du joli village de LABLACHERE, au sud de l'Ardèche. Chaque logement offre une charmante terrasse et un jardin privé. Très belle piscine privée avec une vue fantastique sur le panorama de Lablachère et Notre-Dame.\n\nLes logements proposent un bel intérieur et chacun se compose d'un séjour avec une cuisine ouverte et 2 lits simples. 1 chambre (1x2p + 1x1p), une salle de bains agréablement aménagée, wc séparé. Lave-linge. Situation centrale pour entreprendre de nombreuses excursions.\n\nBlume est une résidence superbe et précieuse, offrant l'intimité nécessaire. \n\n\n"
  },
  "slogan": {
    "nl": "Blume is een lieftallige, gezellige residentie met de nodige privacy.",
    "en": "Everyone enjoys their stay at Blume and it is good value for money!",
    "fr": "Pour un séjour formidable et un bon rapport qualité-prix !"
  },
  "switchDay": 6,
  "extras": [
    "Lasten E-G-W|included|0",
    "Lakens|bringOwn|0",
    "Handdoeken|bringOwn|0",
    "schoonmaak|payThere|0",
    "verbruik tot 8Kw/dag|included|0",
    "Lakens|bringOwn|0",
    "Handdoeken|bringOwn|0",
    "schoonmaak|included|0"
  ],
  "localTax": false,
  "payThere": true,
  "extraImageUrls": [
    "http://files.cap.be/images/11138.jpeg",
    "http://files.cap.be/images/11139.jpeg",
    "http://files.cap.be/images/11140.jpeg",
    "http://files.cap.be/images/11141.jpeg",
    "http://files.cap.be/images/11142.jpeg",
    "http://files.cap.be/images/11143.jpeg"
  ],
  "equipmentCount": [

  ],
  "equipment": [

  ],
  "spacesCount": [

  ],
  "rooms": {
    "cots": 0,
    "desc": [
      "full 2p"
    ]
  },
  "ownerConfirm": false,
  "owner": {
    "comm": [

    ]
  },
  "specials": [

  ],
  "promo": false,
  "online": false,
  "address": {
    "country": "France"
  },
  "bewerkt": false,
}],
};
