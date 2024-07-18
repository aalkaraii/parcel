const mongoose = require("mongoose");

const { Schema } = mongoose;

const parcelSchema = new Schema({
  parcelItem: String,
  ParcelWeight: String,
  Parcelpickup: String,
  ParcelDestination: String,
  ParcelCharge: String,
  ParcelStatus: {
    type: String,
    enum: ["Pending", "Approved", "Delivered"],
  },
});
const Parcel = mongoose.model("Parcel", parcelSchema);
module.exports = Parcel;
