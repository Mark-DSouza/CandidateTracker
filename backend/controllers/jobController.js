const Job = require('./../models/jobModel');
const APIFeatures = require('./../utils/apiFeatures');

exports.getAllJobs = async (req, res) => {
    try {
      // EXECUTE QUERY
      const features = new APIFeatures(Job.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
      const jobs = await features.query;
  
      // SEND RESPONSE
      res.status(200).json({
        status: 'success',
        results: jobs.length,
        data: {
          jobs: jobs
        }
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
  };
  
  exports.getJob = async (req, res) => {
    try {
      const job = await Job.findById(req.params.id);
      // Tour.findOne({ _id: req.params.id })
  
      // SEND RESPONSE
      res.status(200).json({
        status: 'success',
        data: {
          job: job
        }
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
  };
  
  exports.createJob = async (req, res) => {
    try {
      // const newTour = new Tour({})
      // newTour.save()
  
      const newJob = await Job.create(req.body);
  
      // SEND RESPONSE
      res.status(201).json({
        status: 'success',
        data: {
          job: newJob
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err
      });
    }
  };
  
  exports.updateJob = async (req, res) => {
    try {
      const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
  
      // SEND RESPONSE
      res.status(200).json({
        status: 'success',
        data: {
          job: job
        }
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
  };
  
  exports.deleteJob = async (req, res) => {
    try {
      await Job.findByIdAndDelete(req.params.id);
  
      // SEND RESPONSE
      res.status(204).json({
        status: 'success',
        data: null
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
  };