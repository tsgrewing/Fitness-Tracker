const mongoose =require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Please, choose an excercise type."
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Please, enter an excercise name."
                },
                duration: {
                    type: Number,
                    required: "Please enter an excercise duration."
                },
                weight: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    }
);

const Workout = mongoose.model("workout", workoutSchema);
module.exports = Workout;