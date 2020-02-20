const mongoose = require("mongoose");

const DeviceSchema = mongoose.Schema({
  deviceId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Devices", DeviceSchema);
