const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const newWorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now()
    },
    totalDuration: {
        type: Number,
        default: 0
    },
    exercises: [{
    type: String,

    name: { 
        type: String,
        trim: true,
        required: "Enter a name for exercise"
    },
    duration: {
        type: Number,
        trim: true,
        required: "Enter a duration"
    },
    weight: {
        type: Number,
        trim: true,
        required: "Enter a weight"
    },
    reps: {
        type: Number,
        trim: true,
        required: "Enter an amount of reps"
    },
    sets: {
        type: Number,
        trim: true,
        required: "Enter an amount of sets"
    },
    distance: {
        type: Number,
        trim: true,
        required: "Enter a distance"
    }


}]
}
);

const newWorkout = mongoose.model("newWorkout", newWorkoutSchema);

module.exports = newWorkout;