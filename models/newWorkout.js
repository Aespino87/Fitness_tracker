const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const workoutSchema = new Schema ({
    day: {
        type: Date,
        default: () => new Date()
    },
    totalDuration: {
        type: Number,
        default: 0
    },
    exercises: 
    [
    {
    type: {
        type: String,
        trim: true
    },

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
        required: "Enter an amount of sets"
    },
    distance: {
        type: Number,
        required: "Enter a distance"
    }
    }]
}
);

const workout = mongoose.model("Workout", workoutSchema);

module.exports = workout;