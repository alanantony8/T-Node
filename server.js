const ArraySchema = require('./app/models/wifi.model');
const http = require('http');

const dbConfig = require('./config/db.config.js');
const mongoose = require('mongoose');
const { db } = require('./app/models/wifi.model');
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://alan:alan123@cluster0.prwkk.mongodb.net/array_db";
mongoose.set('useFindAndModify', false);




http.createServer(function (req, res) {
    console.log(req.method);
    console.log(req.url);
    //console.log(req);

    let x = (req.url).split('/');
    if (x[1] == "elements") {

        if (req.method === 'GET') {
            let data = req.url.split("/")
            console.log(data[2]);
            index = data[2];


            ArraySchema.findById(index)
                .then(data => {
                    res.write(JSON.stringify(data.array));
                    res.end();
                }).catch(err => {
                    console.log(err)
                    res.write({
                        message: "Some error occurred while Displaying."
                    });
                    res.send();
                });

        }
        else if (req.method === 'POST') {
            // console.log(req);
            let body = '';

            req.on('data', function (chunk) {
                body += chunk;
            });
            req.on('end', function () {
                console.log(body)
                let arr = [];
                let dt = body.split("&")
                console.log(dt)
                let id = (dt[0].split("="))[1]
                for (let i = 1; i < dt.length; i++) {
                    let dp = dt[i].split("=")
                    arr.push(Number(dp[1]))
                }
                console.log(arr)
                const details = new ArraySchema({
                    _id: id,
                    array: arr
                });

                // Save ArraySchema details in the database
                details.save()
                    .then(data => {
                        res.write(JSON.stringify(data.array));
                        res.end();
                    }).catch(err => {
                        console.log(err)
                        res.write({
                            message: "Some error occurred while inserting."
                        });
                        res.end();
                    });

            });




        }

        else if (req.method === 'PUT') {

            let body = '', dt;
            req.on('data', function (chunk) {
                body += chunk;
            })

            var data = req.url.split("/")
            console.log(data[3]);
            console.log(data[2]);
            collectionId = data[2];
            index = data[3];
            console.log("------------");
            console.log(index);

            req.on('end', function () {
                let arr = [];
                console.log(body)
                console.log("***");
                dt = body.split("=")
                console.log(dt);
                value = Number(dt[1])
                console.log(value);
                // arr[index]=value;
                // console.log(arr);
                res.write(JSON.stringify(arr))
                res.end()



                // ArraySchema.findByIdAndUpdate(
                //     data[2], { $pull: { "array": data[3]} }, { safe: true, upsert: true },)
                //     .then(data => {
                //         res.write(JSON.stringify({"message":"Deleted Successfully"}));
                //         res.end();
                //     }).catch(err => {
                //         console.log(err)
                //         res.write({
                //             message: "Some error occurred while inserting."
                //         });
                //         res.end();
                //     });


                ArraySchema.findByIdAndUpdate({ _id: `${collectionId}` }, { [`array.${index}`]: value }, { safe: true, upsert: true },)

// `array.${index}`
            .then(data => {
                    res.write(JSON.stringify(data.array));
                    res.end();
                }).catch(err => {
                    console.log(err)
                    res.write({
                        message: "Some error occurred while inserting."
                    });
                    res.end();
                });


            });

        }
        else {

            let data = req.url.split("/")
            console.log(data[2]);
            index = data[2];
            ArraySchema.findByIdAndUpdate(
                data[2], { $pull: { "array": data[3] } }, { safe: true, upsert: true })
                .then(data => {
                    res.write(JSON.stringify({ "message": "Deleted Successfully" }));
                    res.end();
                }).catch(err => {
                    console.log(err)
                    res.write({
                        message: "Some error occurred while inserting."
                    });
                    res.end();
                });



            // DELETE          
        }

    }




}).listen(3000, function () {
    mongoose.Promise = global.Promise;

    // Connecting to the database
    mongoose.connect(dbConfig.url, {
        useNewUrlParser: true
    }).then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
        console.log('Could not connect to the database.', err);
        process.exit();
    });
    console.log("server start at port 3000");
});