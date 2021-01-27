const Applicant = require('./../models/applicantModel');
const APIFeatures = require('./../utils/apiFeatures');

exports.getAllApplicants = async (req, res) => {
    try {
        // Execute Query
        const features = new APIFeatures(Applicant.find(), req.query)
            .filter()
            .sort();
        const applicants = await features.query;

        // Send Response
        res.status(200).json({
            status: "success",
            results: applicants.length,
            data: {
                applicants
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        })
    }
};

exports.getApplicant = async (req, res) => {
    try {
        const applicant = await Applicant.findById(req.params.id);

        res.status(200).json({
            status: "success",
            data: {
                applicant: applicant
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
}

exports.createApplicant = async (req, res) => {
    try {
        const newApplicant = await Applicant.create(req.body);

        res.status(201).json({
            status: "success",
            data: {
                Applicant: newApplicant
            }
        });
    } catch(err) {
        res.status(400).json({
            status: "fail",
            message: err
        });
    }
}

exports.updateApplicant = async (req, res) => {
    try {
        const applicant = await Applicant.findByIdAndUpdate(req.params.id, req.body, {
           new: true,
           runValidators: true 
        });

        res.status(200).json({
            status: "success",
            data: {
                applicant: applicant
            }
        })
    } catch (err) {
        res.status(404).res({
            status: "fail",
            message: err
        })
    }
}

exports.deleteApplicant = async (req, res) => {
    try {
      await Applicant.findByIdAndDelete(req.params.id);
  
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