var http = require('http');

// Database access files
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://best-visitor-db:27017/stats';

MongoClient.connect(url, function(err, db) {
      if(err) {
        //console.log("Failed to connect to database. \nDetails : " + err);
      }

      //console.log("Database connected. \nDetails :");
      //console.log(db);
      database = db;
    }
  );

var server = http.createServer(function(req, res) {
  if (typeof database === 'undefined' || database == null)
  {
    res.writeHead(200);
    res.end('Database not available yet :(');
  }
  else {
    database.collection('Visitors', function(err, collection) {
      collection.insert( {'time': JSON.stringify(new Date())} );
      collection.find().toArray(function(err, items) {
        console.log(items);
        res.writeHead(200);
        res.end('Your visit has been noted, visitor #' + items.length + '!');
      });

    });
  }
});

server.listen(8080);
