const router = require('express').Router();
const applicantController = require('./../controllers/applicantController');
let Applicant = require('./../models/applicantModel');

// router.route('/').get((req, res) => {
//     Applicant.find()
//       .then(exercises => res.json(exercises))
//       .catch(err => res.status(400).json('Error: ' + err));
//   });

//   router.route('/').post((req, res) => {
//     const newApplicant = new Applicant({
//         name: req.body.name,
//         email: req.body.email,
//         phone: req.body.phone,
//         location: req.body.location,
//         salary: req.body.salary,
//         notice: req.body.notice,
//         knowsAngular: req.body.knowsAngular,
//         knowsReact: req.body.knowsReact,
//         knowsExpress: req.body.knowsExpress,
//         knowsMongo: req.body.knowsMongo
//     });
  
//     newApplicant.save()
//     .then(() => res.json('Applicant added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
//   });

// router.route('/:id').get((req, res) => {
//   Applicant.findById(req.params.id)
//       .then(applicant => res.json(applicant))
//       .catch(err => res.status(400).json('Error: ' + err));
//   });
  
//   router.route('/:id').delete((req, res) => {
//       Applicant.findByIdAndDelete(req.params.id)
//         .then(() => res.json('Applicant deleted.'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     });

router
  .route('/')
  .get(applicantController.getAllApplicants)
  .post(applicantController.createApplicant)

  
router
  .route('/:id')
  .get(applicantController.getApplicant)
  .patch(applicantController.updateApplicant)
  .delete(applicantController.deleteApplicant)



module.exports = router;