📚 BookNest

🚀 Live Demo:
https://booknest-app-beta.vercel.app/

BookNest is a full-stack MERN bookstore web application designed with a modern UI, secure authentication, and seamless user experience.
It allows users to explore books, view free collections, and interact with a responsive and dynamic interface.

--------------------------------------------------

✨ Features

- Secure User Authentication (Signup/Login with bcrypt hashing)
- Dynamic Book Listing from MongoDB
- Free Books Carousel (React Slick)
- Dark / Light Mode Toggle
- Fully Responsive Design (Mobile + Desktop)
- REST API Integration (Axios)
- Protected Backend Routes
- Fast Performance with Vite
- Clean & Modular Code Structure

--------------------------------------------------

🛠 Tech Stack

Frontend:
- React (Vite)
- Tailwind CSS
- DaisyUI
- React Router DOM
- Axios
- React Hook Form
- React Hot Toast
- React Slick

Backend:
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- bcryptjs

--------------------------------------------------

📁 Project Structure

BookNest/
│── frontend/         # React (Vite) Frontend
│── backend/          # Node + Express Backend
│── models/           # Mongoose Schemas
│── routes/           # API Routes
│── controllers/      # Business Logic
│── middleware/       # Auth Middleware
│── .env              # Environment Variables

--------------------------------------------------

⚡ Installation & Setup

1. Clone the Repository

git clone https://github.com/your-username/booknest.git
cd booknest

--------------------------------------------------

2. Setup Backend

cd backend
npm install

Create a .env file inside backend:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Run backend:
npm start

--------------------------------------------------

3. Setup Frontend

cd frontend
npm install
npm run dev

--------------------------------------------------

🌐 API Endpoints (Sample)

POST   /api/auth/signup   -> Register user
POST   /api/auth/login    -> Login user
GET    /api/books         -> Fetch all books
GET    /api/books/free    -> Free books list

--------------------------------------------------

🔐 Authentication Flow

- Passwords hashed using bcrypt
- JWT-based authentication
- Protected routes for authorized users only

--------------------------------------------------

🎯 Future Improvements

- Add to Cart & Checkout System
- Payment Gateway Integration
- Book Reviews & Ratings
- Category & Search Filters
- Order History

--------------------------------------------------

🤝 Contributing

Contributions are welcome!
Feel free to fork this repo and submit a pull request.

--------------------------------------------------

👨‍💻 Author

Agrim Mishra

- Passionate about Full Stack Development & AI
- Building impactful tech solutions

--------------------------------------------------

⭐ Support

If you like this project, give it a star on GitHub — it really helps!
