const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const newWorkoutSchema = new Schema ({
    type: String,
    name: { 
        type: String,
        trim: true,
        required: "Enter a name for exercise"
    },
    duration: {
        type: Number,
        required: "Enter a duration"
    },
    weight: {
        type: Number,
        required: "Enter a weight"
    },
    reps: {
        type: Number,
        required: "Enter an amount of reps"
    },
    sets: {
        type: Number,
        required: "Enter an amount of sets"}

});

const newWorkout = mongoose.model("newWorkout", newWorkoutSchema);

module.exports = newWorkout;