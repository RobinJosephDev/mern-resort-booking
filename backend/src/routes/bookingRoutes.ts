import express from "express";
import { createBooking, getBookings } from "../controllers/bookingController";
import { body } from "express-validator";

const router = express.Router();

// Validation & sanitization
const bookingValidation = [
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Invalid email").normalizeEmail(),
  body("phone").optional().trim().escape(),
  body("checkIn").isISO8601().toDate().withMessage("Invalid check-in date"),
  body("checkOut").isISO8601().toDate().withMessage("Invalid check-out date"),
  body("guests").isInt({ min: 1 }).withMessage("Guests must be at least 1"),
  body("serviceType")
    .isIn(["Accommodation", "Adventure", "Wellness"])
    .withMessage("Invalid service type"),
];

router.post("/", bookingValidation, createBooking);
router.get("/", getBookings);

export default router;
