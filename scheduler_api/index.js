import express from "express";
const app = express();

app.use(function (req, res, next) {
  /*

  // Use this code block to check for JWTs

  let auth_token = req.headers.authorization;
  if (!auth_token) {
    res.status(401).send("Unauthorized");
  }
  */
  return next();
});


app.get("/api/list", (req, res) => {  
  let resObj = {"items":{"item":[{"id":"0001","type":"donut","name":"Apple Pie","ppu":0.55,"batters":{"batter":[{"id":"1001","type":"Regular"},{"id":"1002","type":"Chocolate"},{"id":"1003","type":"Blueberry"},{"id":"1004","type":"Devil's Food"}]},"topping":[{"id":"5001","type":"None"},{"id":"5002","type":"Glazed"},{"id":"5005","type":"Sugar"},{"id":"5007","type":"Powdered Sugar"},{"id":"5006","type":"Chocolate with Sprinkles"},{"id":"5003","type":"Chocolate"},{"id":"5004","type":"Maple"}]},{"id":"0002","type":"donut","name":"Raised","ppu":0.55,"batters":{"batter":[{"id":"1001","type":"Regular"}]},"topping":[{"id":"5001","type":"None"},{"id":"5002","type":"Glazed"},{"id":"5005","type":"Sugar"},{"id":"5003","type":"Chocolate"},{"id":"5004","type":"Maple"}]},{"id":"0003","type":"donut","name":"Old Fashioned","ppu":0.55,"batters":{"batter":[{"id":"1001","type":"Regular"},{"id":"1002","type":"Chocolate"}]},"topping":[{"id":"5001","type":"None"},{"id":"5002","type":"Glazed"},{"id":"5003","type":"Chocolate"},{"id":"5004","type":"Maple"}]},{"id":"0004","type":"bar","name":"Bar","ppu":0.75,"batters":{"batter":[{"id":"1001","type":"Regular"},]},"topping":[{"id":"5003","type":"Chocolate"},{"id":"5004","type":"Maple"}],"fillings":{"filling":[{"id":"7001","name":"None","addcost":0},{"id":"7002","name":"Custard","addcost":0.25},{"id":"7003","name":"Whipped Cream","addcost":0.25}]}},{"id":"0005","type":"twist","name":"Twist","ppu":0.65,"batters":{"batter":[{"id":"1001","type":"Regular"},]},"topping":[{"id":"5002","type":"Glazed"},{"id":"5005","type":"Sugar"},]},{"id":"0006","type":"filled","name":"Filled","ppu":0.75,"batters":{"batter":[{"id":"1001","type":"Regular"},]},"topping":[{"id":"5002","type":"Glazed"},{"id":"5007","type":"Powdered Sugar"},{"id":"5003","type":"Chocolate"},{"id":"5004","type":"Maple"}],"fillings":{"filling":[{"id":"7002","name":"Custard","addcost":0},{"id":"7003","name":"Whipped Cream","addcost":0},{"id":"7004","name":"Strawberry Jelly","addcost":0},{"id":"7005","name":"Rasberry Jelly","addcost":0}]}}]}};
  const allowedOrigins = ['http://127.0.0.1:8080', 'http://localhost:8080'];
  const origin = req.headers.origin;
  
  if (allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  
  //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  
  res.json(resObj);
});


app.post("/api/update", (req, res) => {
  
  console.log(req);
  res.send('post');
  
});


app.put("/api/crate", (req, res) => {
  
  console.log(req.body);
  res.send('put');
  
});


app.delete("/api/delete", (req, res) => {
  
  console.log(req);
  res.send('delete');
  
});

app.listen(process.env.PORT, function(err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", process.env.PORT);
});