const Workout = require("../models/workout")

module.exports = app => {

    app.get("/api/workouts", (req, res) => {
        Workout.find({})
          .then(data => res.json(data))
          .catch(err => res.json(err));
    });
    
    app.post("/api/workouts", (req, res) => {
        Workout.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    });

    app.put("/api/workouts/:id", (req, res) => {
        Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body} }, {new: true})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    });

    app.post("/api/workouts/range", (req, res) => {
        Workout.create({})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    });

    app.get("/api/workouts/range", (req, res) => {
        Workout.find({})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    });
    
}