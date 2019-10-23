//Install express server
const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Vadim:123@mybroke-4ojdc.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/'));

app.get('/', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/index.html'));
});
 
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
console.log(`server is listening on ${port}`);

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
