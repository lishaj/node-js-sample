var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', callName)
function callName(req, res) {
  let spawn = require("child_process").spawn;
  let process = spawn('python', ["./hello.py", req.query.firstName, req.query.lastName]);

  process.stdout.on('data', function(data) {
    res.send(data.toString());
  })
}

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
