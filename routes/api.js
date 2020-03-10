const router = require("express").Router();
const workout = require("../models/newWorkout.js");

///Creating new workout in database
router.post("/api/workouts/", ({ body }, res) => {
  console.log("Posted!");
    workout.create({})
    .then(dbWorkout => {
      console.log(dbWorkout)
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
//Updtes the fields
router.put("/api/workouts/:id", ({ body, params}, res) => {
  console.log("putt!!!")
  /// Takes in times from all exercises and adds to total duration
  workout.findByIdAndUpdate(params.id, { $inc: {totalDuration: body.duration}, $push: { exercises: body }}, { new: true })
    .then(dbWorkout => {
      console.log("puuuttt????");
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});


// This recieves in the response from workouts
router.get("/api/workouts/", (req, res) => {
  workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});



  router.get("/api/workouts/range", (req, res) => {
    workout.find({}).limit(7)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

module.exports = router;
