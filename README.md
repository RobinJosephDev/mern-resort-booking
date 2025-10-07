Resort Booking App

A full-stack MERN + TypeScript resort booking system with a modern React + Tailwind CSS frontend and a secure Express + MongoDB backend.

Features
Frontend (React + Vite + TypeScript)

•	Responsive and modern UI built with Tailwind CSS
•	Hero section with background overlay and call-to-action
•	Service listings, gallery, and booking form
•	Admin dashboard with pagination to view all bookings
•	Environment-based API configuration

Backend (Node.js + Express + MongoDB)

•	RESTful API endpoints for managing bookings
•	Input validation and sanitization
•	MongoDB Atlas integration via Mongoose
•	CORS & dotenv configuration
•	Scalable architecture (controllers, routes, models)

Tech Stack
•	Frontend	React 19, TypeScript, Tailwind CSS, Vite
•	Backend	Node.js, Express.js, TypeScript
•	Database	MongoDB Atlas
•	Deployment	Vercel (Frontend), Render / Railway (Backend)


Project Structure
resort-booking/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── bookingController.ts
│   │   ├── models/
│   │   │   └── Booking.ts
│   │   ├── routes/
│   │   │   └── bookingRoutes.ts
│   │   ├── app.ts
│   │   └── server.ts
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── BookingForm.tsx
│   │   │   └── AdminBookings.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── styles/
│   │       ├── index.css
│   │       └── globals.css
│   ├── package.json
│   └── vite.config.ts

Environment Variables
Backend (backend/.env)
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority

Frontend (frontend/.env)
VITE_API_URL=http://localhost:5000
When deployed:
VITE_API_URL=https://your-backend-url.onrender.com

Available Scripts
Frontend
cd frontend
npm install
npm run dev
Runs React app at http://localhost:5173

Backend
cd backend
npm install
npx ts-node-dev src/server.ts
Starts backend API at http://localhost:5000

API Endpoints
Method	Endpoint	Description
POST	/api/bookings	Create a new booking
GET	/api/bookings	Fetch all bookings

Example request:

POST /api/bookings
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "checkIn": "2025-10-15",
  "checkOut": "2025-10-20",
  "guests": 2,
  "serviceType": "Accommodation"
}

Validation & Sanitization
All inputs are validated (required fields, email format, enum for service type)
Data is sanitized using Mongoose before saving to the database

Screenshots
Hero Section	Booking Form	Admin Dashboard

	
	

Deployment Tips
Frontend (Vercel)
•	Go to vercel.com
•	Connect your GitHub repo → select frontend directory
•	Add VITE_API_URL env variable in Vercel dashboard

Backend (Render)
•	Go to render.com
•	Deploy from GitHub → choose backend folder
•	Add your .env variables in Render dashboard

Author

Robin Joseph
robinjo1776@gmail.com
