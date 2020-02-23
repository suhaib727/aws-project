var aws = require("aws-sdk");
aws.config.update({
    region: 'us-east-2'
});

// get configuration defaults from config file.
var tableName = 'wifi_gdansk';
var dbClient = new aws.DynamoDB({ apiVersion: '2012-08-10' });


exports.handler = function (event, context, callback) {
    var params = {
        TableName: tableName
    };

    var locations = null;
    var hotspots = [];
    var resp = dbClient.scan(params, function (err, data) {
        if (err) {
            return err;
        } else {
            data.Items.map((itemMain, index) => {
                // console.log('itemMain--->>',itemMain)
                var tempItems = [];
                data.Items.map((compareItem) => {
                    var dist = calcCrow({ lng: parseFloat(compareItem.x.N), lat: parseFloat(compareItem.y.N) }, { lng: parseFloat(itemMain.x.N), lat: parseFloat(itemMain.y.N) })
                    console.log('==>>>>dist==>>>', dist)
                    if (dist < 3) { //bcz of 3km radius
                        tempItems.push(compareItem)
                        console.log('came here');
                    }
                })
                if (tempItems.length != 0) {
                    // console.log('came here');

                    hotspots.push(tempItems);
                }

            })
            callback(null, {
                statusCode: 201,
                body: JSON.stringify(hotspots),
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            });
        }
    });
    //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
    function calcCrow(coords1, coords2) {
        // console.log('===>>',coords2);
        // var R = 6.371; // km
        var R = 6371000;
        var dLat = toRad(coords2.lat - coords1.lat);
        //   console.log('dlat---->>>>',dLat)
        var dLon = toRad(coords2.lng - coords1.lng);
        var lat1 = toRad(coords1.lat);
        var lat2 = toRad(coords2.lat);

        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        //   console.log()
        return d;
    }

    // Converts numeric degrees to radians
    function toRad(Value) {
        return Value * Math.PI / 180;
    }

};
