const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobSchema = new Schema({
  jobCode: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  name: {type: String},
  description: {type: String},
  knowsReact: {type: Boolean},
  knowsAngular: {type: Boolean},
  knowsMongo: {type: Boolean},
  knowsExpress: {type: Boolean}
}, {
  timestamps: true,
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;