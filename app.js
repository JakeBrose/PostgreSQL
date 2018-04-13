"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("models", require("./models"));
const models = app.get("models");
const { Beach, Castle, Lifeguard, Tool } = app.get("models");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Get all of a data type //
app.get("/beaches", (req, res) => {
  Beach.findAll({include: [{model:Lifeguard, attributes:["name"]}]})
    .then(beaches => {
      res.status(200).json(beaches);
    })
    .catch(err => {
      console.log("ooops", err);
      res.status(500).json({ error: err });
    });
});

app.get("/castles", (req, res) => {
  Castle.findAll()
    .then(castles => {
      res.status(200).json(castles);
    })
    .catch(err => {
      console.log("ooops", err);
      res.status(500).json({ error: err });
    });
});

app.get("/lifeguards", (req, res) => {
  Lifeguard.findAll()
    .then(lifeguards => {
      res.status(200).json(lifeguards);
    })
    .catch(err => {
      console.log("ooops", err);
      res.status(500).json({ error: err });
    });
});

app.get("/tools", (req, res) => {
  Tool.findAll()
    .then(tools => {
      res.status(200).json(tools);
    })
    .catch(err => {
      console.log("ooops", err);
      res.status(500).json({ error: err });
    });
});

// get one //
app.get("/beaches/:id", (req, res, next) => {
  Beach.findOne({
    raw: true,
    where: { id: req.params.id },
    include: [{model:Lifeguard, attributes:["name"]}]
  })
    .then( (beach) => {
      res.status(200).json(beach);
    })
    .catch( (err) => {
    })
});

app.get("/castles/:id", (req, res, next) => {
  Castle.findOne({
    raw: true,
    where: { id: req.params.id },
  })
    .then( (castle) => {
      res.status(200).json(castle);
    })
    .catch( (err) => {
    })
});

app.get("/lifeguards/:id", (req, res, next) => {
  Lifeguard.findOne({
    raw: true,
    where: { id: req.params.id },
  })
    .then( (lifeguard) => {
      res.status(200).json(lifeguard);
    })
    .catch( (err) => {
    })
});

app.get("/tools/:id", (req, res, next) => {
  Tool.findOne({
    raw: true,
    where: { id: req.params.id },
  })
    .then( (tool) => {
      res.status(200).json(tool);
    })
    .catch( (err) => {
    })
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;