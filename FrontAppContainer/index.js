require("dotenv").config();
const express = require("express");
const request = require("request");
const app = express();
//  this  is to accept  data in json format
app.use(express.json());
// this is basically to decode the data
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/Public/index.html`);
});
app.post("/post", (req, res) => {
  var todo = req.body;

  request.post('http://container_parser:27017/post', { form: todo }, (err, resp, body) => {
    
    if (err) {
      res.send(err);
    } else {
      console.log(body);
      res.send(body);
    }
  });
});
app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at http://localhost:${process.env.PORT}`);
});
