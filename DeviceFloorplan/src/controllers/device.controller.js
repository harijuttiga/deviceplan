const Devices = require("../models/devices.model.js");

// Create and Save a new Course.
exports.create = (req, res) => {
  // Validate request
  if (!req.body.deviceId && !req.body.name) {
    return res.status(400).send({
      message: "Course id, name and topics can not be empty."
    });
  }

  // Create a Device
  const device = new Devices({
    deviceId: req.body.deviceId,
    name: req.body.name
  });

  // Save Course in the database
  device
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Course."
      });
    });
};

// Retrieve and return all Device from the database.
exports.findAll = (req, res) => {
  Devices.find()
    .then(devices => {
      res.send(devices);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Courses."
      });
    });
};

// Find a single Device with a deviceId
exports.findOne = (req, res) => {
  Devices.findOne({ courseId: req.params.deviceId })
    .then(course => {
      if (!course) {
        return res.status(404).send({
          message: "Course not found with id " + req.params.courseId
        });
      }
      res.send(course);
    })
    .catch(err => {
      console.log(err);
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Course not found with id " + req.params.courseId
        });
      }
      return res.status(500).send({
        message: "Error retrieving Course with id " + req.params.courseId
      });
    });
};

// Update a Device identified by the deviceId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.deviceId && !req.body.name) {
    return res.status(400).send({
      message: "Course content can not be empty"
    });
  }

  // Find Course and update it with the request body
  Devices.findByIdAndUpdate(
    req.params.deviceId,
    {
      courseId: req.body.deviceId,
      courseName: req.body.name
    },
    { new: true }
  )
    .then(course => {
      if (!course) {
        return res.status(404).send({
          message: "Course not found with id " + req.params.courseId
        });
      }
      res.send(course);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Course not found with id " + req.params.courseId
        });
      }
      return res.status(500).send({
        message: "Error updating Course with id " + req.params.courseId
      });
    });
};

// Delete a Device with the specified DeviceId in the request
exports.delete = (req, res) => {
  Devices.findByIdAndRemove(req.params.courseId)
    .then(course => {
      if (!course) {
        return res.status(404).send({
          message: "Course not found with id " + req.params.courseId
        });
      }
      res.send({ message: "Course deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Course not found with id " + req.params.courseId
        });
      }
      return res.status(500).send({
        message: "Could not delete Course with id " + req.params.courseId
      });
    });
};
