const express = require('express');
const userModel = require('../models/userModel');
const app = express();

app.get('/api/exercise/users', async (req, res) => {
  const users = await userModel.find({});

  try {
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/api/exercise/new-user', async (req, res) => {
    const user = new userModel(req.body);
  
    try {
      await user.save();
      res.send(food);
    } catch (err) {
      res.status(500).send(err);
    }
});

// app.delete('/food/:id', async (req, res) => {
//     try {
//       const food = await foodModel.findByIdAndDelete(req.params.id)
  
//       if (!food) res.status(404).send("No item found")
//       res.status(200).send()
//     } catch (err) {
//       res.status(500).send(err)
//     }
// });

// app.put('/food/:id', async (req, res) => {
//     try {
//       await foodModel.findByIdAndUpdate(req.params.id, req.body)
//       res.status(200).send(req.body)
//     } catch (err) {
//       res.status(500).send(req.body)
//       console.log(err)
//     }
// });

module.exports = app