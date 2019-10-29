// note_routes.js
/*module.exports = function(app, db) {
    app.post('/notes', (req, res) => {
      console.log(req.body)
      res.send('Hello')
    });
  };*/



var ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db) {
  app.get('/notes/:id', (req, res) => { //read
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('notes').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });
app.post('/notes', (req, res) => { //post
    const note = { login: req.body.login, password: req.body.password };
    db.collection('notes').insert(note, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });
  app.delete('/notes/:id', (req, res) => { //del
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('notes').deleteOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Note ' + id + ' deleted');
      }
    });
  });
};



//UPDATE
/*var ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db) {
  app.put('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('notes').update(details, note, (err, result) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(note);
      }
    });
  });
app.post('/notes', (req, res) => {
    const note = { text: req.body.body, title: req.body.title };
    db.collection('notes').insert(note, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};*/
