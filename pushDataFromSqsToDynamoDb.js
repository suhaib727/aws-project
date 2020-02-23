var aws = require("aws-sdk");
aws.config.update({
    region: 'us-east-2'
});

// get configuration defaults from config file.
var tableName = 'wifiGdansk';
var queueUrl = 'https://sqs.us-east-1.amazonaws.com/133819516923/wifiGdansk';

var dbClient = new aws.DynamoDB({ apiVersion: '2012-08-10' });
var sqsClient = new aws.SQS();
exports.handler = function (event, context) {
    for (var i = 0; i < 20; i++) {
        var params = {
            QueueUrl: queueUrl,
            VisibilityTimeout: 600, // 10 min wait time for anyone else to process.
            MaxNumberOfMessages: 1
        };

        sqsClient.receiveMessage(params, function (err, data) {
            if (err) {
                console.log(err)
            }
            else {
                // console.log(data.Messages);
                data.Messages.map((msg) => {
                    // console.log(msg)
                    var body = JSON.parse(msg.Body);
                    // console.log('====>>>',typeof(body.x.toString()))
                    // console.log('===>>',body.identyfikator);
                    var params = {
                        TableName: 'wifi_gdansk',
                        Item: {
                            'identyfikator': { S: body.identyfikator },
                            'lokalizacja': { S: body.lokalizacja },
                            'x': { N: body.x.toString() },
                            'y': { N: body.y.toString() }
                        }
                    };

                    dbClient.putItem(params, function (err, data) {
                        if (err) {
                            console.log("Error=====>>>>>>,,,,,,", err);
                        } else {
                            console.log("Success===>>>>>>>", data);
                        }
                    });

                })

            }


        });
    }
}