const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    date: {
        type: Date,
        default: Date.now
      },
      exercise: [
          {
              name: {
                  type: String,
                  trim: true,
                  required: "Enter a name for this workout"
                },
                type: {
                    type: String,
                    trim: true,
                    required: "The type of workout is required"
                },
                weight: {
                    type: Number,
                    required: "Entering an amount for weight is required"
                },
                sets: {
                    type: Number,
                    required: "Entering the set is required"
                },
                reps: {
                    type: Number,
                    required: "Entering how many reps is required"
                },
                duration: {
                    type: Number,
                    required: "Entering the length of durantion is required"
                },
                distance: {
                    type: Number,
                }
            }
        ]
    });


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;


