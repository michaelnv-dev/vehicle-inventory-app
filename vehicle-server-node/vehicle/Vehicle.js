const mongoose = require('mongoose');
const uuid = require('node-uuid');

const VehicleSchema = new mongoose.Schema({  
  _id: { type: String, default: uuid.v1 },
  name: String,
  timestamp: Number,
  type:{ type: String, enum : ['SUV','Truck','Hybrid'] },
  last_successful_connection: Number
});
mongoose.model('Vehicle', VehicleSchema);

module.exports = mongoose.model('Vehicle');