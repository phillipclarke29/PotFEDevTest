var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.get ('https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json', function(req,res){
  res.json([
    {
      posttitle: "Post 1",
      body: "This is a post"
    }
  ]);
});

app.listen(3000, function(){
  console.log('Server Listening on', 3000)

})
