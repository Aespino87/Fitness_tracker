const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const newWorkoutSchema = new Schema ({
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,

});

const newWorkout = mongoose.model("newWorkout", newWorkoutSchema);

module.exports = newWorkout;