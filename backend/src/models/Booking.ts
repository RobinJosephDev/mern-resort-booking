import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  guests: { type: Number, required: true },
  serviceType: { type: String, enum: ["Accommodation", "Adventure", "Wellness"], required: true },
}, { timestamps: true });

export default mongoose.model("Booking", BookingSchema);
