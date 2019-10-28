//Install express server
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db = require('./config/db');
const path = require('path');
const app = express();
const port = 8080;
const dbport = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
                      
  // Make sure you add the database name and not the collection name
  const db = database.db("my-broke")
  require('./src/app/routes/')(app, db);
  app.listen(dbport, () => {
    console.log('We are live on ' + dbport);
  });               
})


/*const uri = "mongodb+srv://egor:123@my-broke-qld1g.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
app.use(bodyParser.urlencoded({ extended: true }));
MongoClient.connect(db.url, (err, database) => {
  const myAwesomeDB = database.db('my-broke')
  myAwesomeDB.collection('notes')
  if (err) return console.log(err)
  //const collection = client.db("test").collection("devices");
  require('./src/app/routes/')(app, database);
  app.listen(dbport, () => {
    console.log('We are live on ' + dbport);
  });               
})*/
        //НУЖНО ЛИ УКАЗЫВАТЬ К КАКОЙ БД ПОДКЛЮЧАТЬСЯ?


/*client.connect(err => {
  const collection = client.db("my-broke").collection("devices");
 // perform actions on the collection object
  client.close();
});*/
  //require('./src/app/routes/')(app, {});
 /* app.listen(port, () => {
    console.log('We are live on ' + port);
  });*/

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/'));

app.get('/', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/index.html'));
});
 
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
console.log(`server is listening on ${port}`);