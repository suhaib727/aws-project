// PUT YOUR AWS ACCOUNT NUMBER HERE
var AWS_ACCOUNT_ID = '133819516923';

// PUT YOUR SQS QUEUE NAME HERE
var AWS_SQS_QUEUE_NAME = 'wifiGdansk';

var QUEUE_URL = 'https://sqs.us-east-1.amazonaws.com/133819516923/wifiGdansk';
var AWS = require('aws-sdk');
var sqs = new AWS.SQS({ region: 'us-east-1' });

exports.handler = function (event, context) {
    var jsonData = `[
  {
    "identyfikator": "LOK001",
    "lokalizacja": "Park Kuzniczki",
    "x": 54.382059,
    "y": 18.607072
  },
  {
    "identyfikator": "LOK002",
    "lokalizacja": "Plac Wybickiego",
    "x": 54.384332,
    "y": 18.609666
  },
  {
    "identyfikator": "LOK003",
    "lokalizacja": "Stacja SKM Wrzeszcz - Plac Ko¬àodziejskiego",
    "x": 54.381246,
    "y": 18.6048
  },
  {
    "identyfikator": "LOK004",
    "lokalizacja": "Park Grodzisko",
    "x": 54.351781,
    "y": 18.637527
  },
  {
    "identyfikator": "LOK005",
    "lokalizacja": "Stacja SKM Oliwa",
    "x": 54.410291,
    "y": 18.571996
  },
  {
    "identyfikator": "LOK006",
    "lokalizacja": "Plac Dwoch Miast",
    "x": 54.425453,
    "y": 18.580939
  },
  {
    "identyfikator": "LOK007",
    "lokalizacja": "Dworzec PKS",
    "x": 54.356219,
    "y": 18.642615
  },
  {
    "identyfikator": "LOK008",
    "lokalizacja": "Stacja PKP Gdansk G¬àlowny",
    "x": 54.355741,
    "y": 18.645152
  },
  {
    "identyfikator": "LOK009",
    "lokalizacja": "Park im. Reagana lok. III",
    "x": 54.412251,
    "y": 18.614494
  },
  {
    "identyfikator": "LOK010",
    "lokalizacja": "Przystan Zabi Kruk",
    "x": 54.341718,
    "y": 18.649283
  },
  {
    "identyfikator": "LOK011",
    "lokalizacja": "Przystan Sienna Grobla",
    "x": 54.353616,
    "y": 18.662718
  },
  {
    "identyfikator": "LOK012",
    "lokalizacja": "Przystan Tamka",
    "x": 54.357325,
    "y": 18.71263
  },
  {
    "identyfikator": "LOK013",
    "lokalizacja": "Przystan Nadwi¬òlanska",
    "x": 54.343788,
    "y": 18.825445
  },
  {
    "identyfikator": "LOK014",
    "lokalizacja": "Nowy Port CAE Laznia 2",
    "x": 54.399175,
    "y": 18.670942
  },
  {
    "identyfikator": "LOK015",
    "lokalizacja": "Skwer ul. Marynarki Polskiej",
    "x": 54.399307,
    "y": 18.668656
  },
  {
    "identyfikator": "LOK016",
    "lokalizacja": "Reduta Wilk",
    "x": 54.339134,
    "y": 18.654492
  },
  {
    "identyfikator": "LOK017",
    "lokalizacja": "Zieleniec przy ul. Ja¬àmuzniczej",
    "x": 54.341496,
    "y": 18.656241
  },
  {
    "identyfikator": "LOK018",
    "lokalizacja": "Park de Gaulle'a",
    "x": 54.379566,
    "y": 18.602758
  },
  {
    "identyfikator": "LOK019",
    "lokalizacja": "Park ks. Kanonika Orkusza",
    "x": 54.391454,
    "y": 18.647193
  },
  {
    "identyfikator": "LOK020",
    "lokalizacja": "Brzezno Molo",
    "x": 54.413412,
    "y": 18.624443
  },
  {
    "identyfikator": "LOK021",
    "lokalizacja": "Targ Weglowy",
    "x": 54.350781,
    "y": 18.647564
  },
  {
    "identyfikator": "LOK022",
    "lokalizacja": "Plac Zebran Ludowych",
    "x": 54.361623,
    "y": 18.641134
  },
  {
    "identyfikator": "LOK023",
    "lokalizacja": "Plaza Jelitkowo",
    "x": 54.423563,
    "y": 18.601619
  },
  {
    "identyfikator": "LOK024",
    "lokalizacja": "Plaza Brzezno I",
    "x": 54.411005,
    "y": 18.630143
  },
  {
    "identyfikator": "LOK025",
    "lokalizacja": "Park Brzeznienski im. Haffnera",
    "x": 54.407297,
    "y": 18.646727
  },
  {
    "identyfikator": "LOK026",
    "lokalizacja": "Plaza Stogi",
    "x": 54.374663,
    "y": 18.731097
  },
  {
    "identyfikator": "LOK027",
    "lokalizacja": "Plaza Wyspa Sobieszewska",
    "x": 54.347626,
    "y": 18.875126
  },
  {
    "identyfikator": "LOK028",
    "lokalizacja": "Park Oliwski",
    "x": 54.410937,
    "y": 18.561474
  },
  {
    "identyfikator": "LOK029",
    "lokalizacja": "Park im. Reagana lok. I",
    "x": 54.418374,
    "y": 18.611536
  },
  {
    "identyfikator": "LOK030",
    "lokalizacja": "Park im. Jana Paw¬àa II",
    "x": 54.400374,
    "y": 18.605942
  },
  {
    "identyfikator": "LOK031",
    "lokalizacja": "Park Millenium Gdanska",
    "x": 54.397047,
    "y": 18.613233
  },
  {
    "identyfikator": "LOK032",
    "lokalizacja": "Park Akademicki",
    "x": 54.371423,
    "y": 18.623579
  },
  {
    "identyfikator": "LOK033",
    "lokalizacja": "Park im. Steffena",
    "x": 54.364161,
    "y": 18.639622
  },
  {
    "identyfikator": "LOK034",
    "lokalizacja": "Park Opl¬àywu Mot¬àawy",
    "x": 54.339056,
    "y": 18.65432
  },
  {
    "identyfikator": "LOK035",
    "lokalizacja": "Park Orunski",
    "x": 54.321974,
    "y": 18.628748
  },
  {
    "identyfikator": "LOK036",
    "lokalizacja": "Akademia Wychowania Fizycznego i Sportu",
    "x": 54.41962,
    "y": 18.562336
  },
  {
    "identyfikator": "LOK037",
    "lokalizacja": "Piwna",
    "x": 54.349951,
    "y": 18.6515
  },
  {
    "identyfikator": "LOK038",
    "lokalizacja": "UMG Medyk",
    "x": 54.360654,
    "y": 18.629263
  },
  {
    "identyfikator": "LOK039",
    "lokalizacja": "ZOO Oliwa",
    "x": 54.413334,
    "y": 18.533657
  },
  {
    "identyfikator": "LOK040",
    "lokalizacja": "Twierdza Wis¬àlouj¬òcie",
    "x": 54.395883,
    "y": 18.679132
  },
  {
    "identyfikator": "LOK041",
    "lokalizacja": "Pomnik Poleg¬àych Stoczniowcow",
    "x": 54.36025,
    "y": 18.649674
  },
  {
    "identyfikator": "LOK042",
    "lokalizacja": "Gora Gradowa",
    "x": 54.35698,
    "y": 18.640007
  },
  {
    "identyfikator": "LOK043",
    "lokalizacja": "Skwer przed Krewetka",
    "x": 54.355902,
    "y": 18.646453
  },
  {
    "identyfikator": "LOK044",
    "lokalizacja": "Zieleniec Heweliusza",
    "x": 54.354097,
    "y": 18.649797
  },
  {
    "identyfikator": "LOK045",
    "lokalizacja": "Skwer Czes¬àawa Niemena",
    "x": 54.352332,
    "y": 18.644734
  },
  {
    "identyfikator": "LOK046",
    "lokalizacja": "Park Hucisko",
    "x": 54.351473,
    "y": 18.644714
  },
  {
    "identyfikator": "LOK047",
    "lokalizacja": "Targ Drzewny",
    "x": 54.352481,
    "y": 18.648756
  },
  {
    "identyfikator": "LOK048",
    "lokalizacja": "Brama Wyzynna",
    "x": 54.350115,
    "y": 18.646873
  },
  {
    "identyfikator": "LOK049",
    "lokalizacja": "Dom Harcerza",
    "x": 54.348691,
    "y": 18.647359
  },
  {
    "identyfikator": "LOK050",
    "lokalizacja": "Dl¬àuga i Dl¬àugi Targ",
    "x": 54.348493,
    "y": 18.653586
  },
  {
    "identyfikator": "LOK051",
    "lokalizacja": "Szeroka I",
    "x": 54.351176,
    "y": 18.653806
  },
  {
    "identyfikator": "LOK052",
    "lokalizacja": "Park im. Reagana lok. II",
    "x": 54.415142,
    "y": 18.601591
  },
  {
    "identyfikator": "LOK053",
    "lokalizacja": "Grobla",
    "x": 54.351176,
    "y": 18.653806
  },
  {
    "identyfikator": "LOK054",
    "lokalizacja": "Bazylika Mariacka",
    "x": 54.350319,
    "y": 18.65352
  },
  {
    "identyfikator": "LOK055",
    "lokalizacja": "Szeroka II",
    "x": 54.351176,
    "y": 18.653806
  },
  {
    "identyfikator": "LOK056",
    "lokalizacja": "Mariacka",
    "x": 54.349512,
    "y": 18.656231
  },
  {
    "identyfikator": "LOK057",
    "lokalizacja": "Sw. Ducha",
    "x": 54.350084,
    "y": 18.655732
  },
  {
    "identyfikator": "LOK058",
    "lokalizacja": "Stagiewna",
    "x": 54.347811,
    "y": 18.655881
  },
  {
    "identyfikator": "LOK059",
    "lokalizacja": "D¬àlugie Pobrzeze",
    "x": 54.347811,
    "y": 18.655881
  },
  {
    "identyfikator": "LOK060",
    "lokalizacja": "Rybackie Pobrzeze",
    "x": 54.35255,
    "y": 18.659291
  },
  {
    "identyfikator": "LOK061",
    "lokalizacja": "Skwer przy Polskiej Filharmonii Ba¬àtyckiej",
    "x": 54.35255,
    "y": 18.659291
  },
  {
    "identyfikator": "LOK062",
    "lokalizacja": "Skwer przy Muzeum Narodowym",
    "x": 54.345712,
    "y": 18.646582
  },
  {
    "identyfikator": "LOK063",
    "lokalizacja": "Deptak - Zabianka",
    "x": 54.420797,
    "y": 18.573642
  },
  {
    "identyfikator": "LOK064",
    "lokalizacja": "Westerplatte",
    "x": 54.406652,
    "y": 18.675614
  },
  {
    "identyfikator": "LOK065",
    "lokalizacja": "Skwer przy PGE-ARENA",
    "x": 54.391244,
    "y": 18.642033
  },
  {
    "identyfikator": "LOK066",
    "lokalizacja": "Skwer przy ul. Go¬òcinnej",
    "x": 54.323216,
    "y": 18.631922
  },
  {
    "identyfikator": "LOK067",
    "lokalizacja": "Skwer przy ul. Wodopoj",
    "x": 54.355481,
    "y": 18.65164
  },
  {
    "identyfikator": "LOK068",
    "lokalizacja": "Dl¬àugie Pobrzeze - Brama Sw. Ducha",
    "x": 54.34986109,
    "y": 18.65720231
  },
  {
    "identyfikator": "LOK069",
    "lokalizacja": "Marina Szafarnia",
    "x": 54.34973595,
    "y": 18.66017811
  },
  {
    "identyfikator": "LOK070",
    "lokalizacja": "Park Przymorze",
    "x": 54.41965785,
    "y": 18.58918772
  },
  {
    "identyfikator": "LOK071",
    "lokalizacja": "Plaza Brzezno II",
    "x": 54.40847089,
    "y": 18.64201595
  },
  {
    "identyfikator": "LOK072",
    "lokalizacja": "Stacja SKM - Gdansk Politechnika",
    "x": 54.37428687,
    "y": 18.62734208
  },
  {
    "identyfikator": "LOK073",
    "lokalizacja": "Zieleniec przy al. Hallera",
    "x": 54.37905753,
    "y": 18.62289476
  },
  {
    "identyfikator": "LOK074",
    "lokalizacja": "Zieleniec przy ul. Bohomolca",
    "x": 54.38903073,
    "y": 18.62550154
  },
  {
    "identyfikator": "LOK075",
    "lokalizacja": "Zieleniec przy ul. Buczka",
    "x": 54.342154,
    "y": 18.627483
  },
  {
    "identyfikator": "LOK076",
    "lokalizacja": "Zieleniec przy ul. Pomorskiej",
    "x": 54.42320352,
    "y": 18.59471018
  },
  {
    "identyfikator": "LOK077",
    "lokalizacja": "Zieleniec przy ul. Wilanowskiej",
    "x": 54.33324467,
    "y": 18.60175213
  },
  {
    "identyfikator": "LOK078",
    "lokalizacja": "Zieleniec Piecki-Migowo",
    "x": 54.34808416,
    "y": 18.56971947
  },
  {
    "identyfikator": "LOK079",
    "lokalizacja": "Skwer przy al. Zo¬ànierzy Wykletych",
    "x": 54.383064,
    "y": 18.597873
  },
  {
    "identyfikator": "LOK080",
    "lokalizacja": "Skwer przy ul. Siennickiej",
    "x": 54.356698,
    "y": 18.679578
  },
  {
    "identyfikator": "LOK081",
    "lokalizacja": "Skwer przy ul. Zeromskiego",
    "x": 54.40656727,
    "y": 18.56243792
  },
  {
    "identyfikator": "LOK082",
    "lokalizacja": "Latarnia Morska w Nowym Porcie",
    "x": 54.407896,
    "y": 18.660477
  },
  {
    "identyfikator": "LOK083",
    "lokalizacja": "Aktiv Park Przymorze",
    "x": 54.413791,
    "y": 18.591734
  },
  {
    "identyfikator": "LOK084",
    "lokalizacja": "Skatepark Osowa",
    "x": 54.421246,
    "y": 18.481016
  },
  {
    "identyfikator": "LOK085",
    "lokalizacja": "Plac Biskupa O'Rourke.",
    "x": 54.383005,
    "y": 18.626097
  },
  {
    "identyfikator": "LOK086",
    "lokalizacja": "Plac gen. Maczka",
    "x": 54.38673116,
    "y": 18.58265766
  },
  {
    "identyfikator": "LOK087",
    "lokalizacja": "Plac Pi¬àsudzkiego",
    "x": 54.38625939,
    "y": 18.59138416
  },
  {
    "identyfikator": "LOK088",
    "lokalizacja": "Park w Jasieniu",
    "x": 54.3430761,
    "y": 18.55458317
  },
  {
    "identyfikator": "LOK089",
    "lokalizacja": "Park przy ul. Chirona",
    "x": 54.42584611,
    "y": 18.46747141
  },
  {
    "identyfikator": "LOK090",
    "lokalizacja": "Park przy ul. Blizniat",
    "x": 54.42715739,
    "y": 18.48223478
  },
  {
    "identyfikator": "LOK091",
    "lokalizacja": "Park nad Strzyza",
    "x": 54.38050662,
    "y": 18.6183004
  },
  {
    "identyfikator": "LOK092",
    "lokalizacja": "Park Zielony",
    "x": 54.36747954,
    "y": 18.63010273
  },
  {
    "identyfikator": "LOK093",
    "lokalizacja": "Park Siennicki",
    "x": 54.3497659,
    "y": 18.67082749
  },
  {
    "identyfikator": "LOK094",
    "lokalizacja": "Park Bema",
    "x": 54.35133779,
    "y": 18.63200589
  },
  {
    "identyfikator": "LOK095",
    "lokalizacja": "Park w Krolewskiej Dolinie",
    "x": 54.36663927,
    "y": 18.61072867
  },
  {
    "identyfikator": "LOK096",
    "lokalizacja": "Park Uphagena",
    "x": 54.37589185,
    "y": 18.61742597
  },
  {
    "identyfikator": "LOK097",
    "lokalizacja": "Park Ja¬òkowej Doliny",
    "x": 54.36974441,
    "y": 18.59616891
  },
  {
    "identyfikator": "LOK098",
    "lokalizacja": "Wzgorze Pacho¬àlek",
    "x": 54.41123678,
    "y": 18.55229255
  },
  {
    "identyfikator": "LOK099",
    "lokalizacja": "Stacja Strzyza",
    "x": 54.39120167,å
    "y": 18.57835904
  },
  {
    "identyfikator": "LOK100",
    "lokalizacja": "Stacja SKM Zabianka-AWFiS",
    "x": 54.42090174,
    "y": 18.56815286
  }
]`;
    var jsonDataInJson = JSON.parse(jsonData)
    for (var i = 0; i < jsonDataInJson.length; i++) {
        var params = {
            MessageBody: JSON.stringify(jsonDataInJson[i]),
            QueueUrl: QUEUE_URL,
            DelaySeconds: 0
        };

        sqs.sendMessage(params, function (err, data) {
            if (err) {
                console.log('error:', "Fail Send Message" + err);
                context.done('error', "ERROR Put SQS");  // ERROR with message
            } else {
                console.log('data:', data.MessageId);
                context.done(null, '');  // SUCCESS
            }
        });
    }

}