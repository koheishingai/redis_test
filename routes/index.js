var redis = require("redis"),
    client = redis.createClient();

    client.on("error", function (err) {
        console.log("Error " + err);
    });


client.get('/', function(err, val){
console.log(val);

});

exports.index = function(req, res){
  console.log(req.url);
  client.get('/', function(err, val){
  res.writeHead(200, {"Content-Type": "text/html"}); 
  res.write(val);
  res.end();
  });
};