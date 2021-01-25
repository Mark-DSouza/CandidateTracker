const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const applicantSchema = new Schema({
  jobCode: {type: String},
  name: { type: String, required: true },
  phone: { type: String },
  email: { type: String },
  location: {type: String},
  salary: {type: Number},
  noticePeriod: {type: Number},
  knowsReact: {type: Boolean},
  knowsAngular: {type: Boolean},
  knowsMongo: {type: Boolean},
  knowsExpress: {type: Boolean}
}, {
  timestamps: true,
});

const Applicant = mongoose.model('Applicant', applicantSchema);

module.exports = Applicant;