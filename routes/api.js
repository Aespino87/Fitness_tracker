const router = require("express").Router();
const newWorkout = require("../models/newWorkout.js");

router.post("/api/workouts/", ({ body }, res) => {
  newWorkout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body }, res) => {
  newWorkout.insertMany(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/", (req, res) => {
  newWorkout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.delete("/api/workouts/", ({ body }, res) => {
    newWorkout.findByIdAndDelete(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

module.exports = router;
