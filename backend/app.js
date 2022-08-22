const express = require("express");
const axios = require("axios");

app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.listen((port = 4000), () => {
  console.log("App listening to port 4000...");
});

// routes

app.get("/api/assets", (req, res) => {
  const options = {
    method: "GET",
    url: "https://api.coincap.io/v2/assets",
  };

  axios
    .request(options)
    .then(function (response) {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      res.status(400).json(error);
    });
});
