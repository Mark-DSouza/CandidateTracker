const router = require('express').Router();
let Job = require('./../models/jobModel');

router.route('/').get((req, res) => {
  Job.find()
    .then(jobs => res.json(jobs))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
  const username = req.body.username;

  const newUser = new Job({
    jobCode: req.body.jobCode,
    name: req.body.name,
    description: req.body.description,
    knowsReact: req.body.knowsReact,
    knowsAngular: req.body.knowsAngular,
    knowsMongo: req.body.knowsMongo,
    knowsExpress: req.body.knowsExpress
    });

  newUser.save()
    .then(() => res.json('Job added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;