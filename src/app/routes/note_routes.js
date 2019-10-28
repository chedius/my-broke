// note_routes.js
/*module.exports = function(app, db) {
    app.post('/notes', (req, res) => {
      console.log(req.body)
      res.send('Hello')
    });
  };*/

  module.exports = function(app, db) {
    app.post('/notes', (req, res) => {
      const note = { text: req.body.body, title: req.body.title };
      db.collection('notes').insert(note, (err, result) => {
        if (err) { 
          res.send({ 'error': 'An error has occurred' }); //каменеь преткновения
        } else {
          res.send(result.ops[0]);
        }
      });
    });
  };