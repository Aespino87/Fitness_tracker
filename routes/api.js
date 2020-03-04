const router = require("express").Router();
const workout = require("../models/newWorkout.js");

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

router.put("/api/workouts/:id", ({ body, params}, res) => {
  console.log("putt!!!")
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
