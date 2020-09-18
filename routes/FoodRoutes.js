const express = require('express');
const foodModel = require('../models/FoodModel');
const app = express();

app.get('/foods', async (req, res) => {
  const foods = await foodModel.find({});

  try {
    res.send(foods);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/food', async (req, res) => {
    const food = new foodModel(req.body);
  
    try {
      await food.save();
      res.send(food);
    } catch (err) {
      res.status(500).send(err);
    }
});

app.delete('/food/:id', async (req, res) => {
    try {
      const food = await foodModel.findByIdAndDelete(req.params.id)
  
      if (!food) res.status(404).send("No item found")
      res.status(200).send()
    } catch (err) {
      res.status(500).send(err)
    }
});

app.put('/food/:id', async (req, res) => {
    try {
      await foodModel.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).send(req.body)
    } catch (err) {
      res.status(500).send(req.body)
      console.log(err)
    }
});

module.exports = app