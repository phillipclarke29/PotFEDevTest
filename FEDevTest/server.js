var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.get ('/api/posts', function(req,res){
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
