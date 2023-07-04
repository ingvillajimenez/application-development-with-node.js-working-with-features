var express = require("express");
var app = express();
var fs = require("fs");

app.get("/listCustomers", function (req, res) {
  fs.readFile(
    __dirname + "/" + "customers.json",
    "utf-8",
    function (err, data) {
      console.log(data);
      res.end(data);
    }
  );
});

var server = app.listen(5555, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
