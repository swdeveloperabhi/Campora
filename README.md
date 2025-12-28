🏕️ Campora

Discover. Share. Explore Campgrounds Across India

🔗 Live Website: https://campora-mamy.onrender.com

Campora is a full-stack web application that allows users to discover, create, and review campgrounds across India.
It is inspired by real-world platforms like YelpCamp, but redesigned with Indian geography, modern security practices, and production-grade backend architecture in mind.

This project was built to deeply understand how real web applications work end-to-end, not just to showcase UI.



📌 Why Campora?

Finding reliable camping locations in India is difficult due to scattered information and lack of authenticity.
Campora solves this by providing a platform where real users share real locations, backed by maps, images, and reviews.

This project focuses on:

Backend correctness

Security

Authentication

Scalable project structure

Real-world deployment

✨ Features
🔐 Authentication & Authorization

User registration, login, and logout

Password hashing with salt

Session-based authentication

Protected routes

Flash messages for feedback

🏕️ Campgrounds

Create, edit, and delete campgrounds

Upload multiple images

Images stored securely using Cloudinary

Location stored using GeoJSON

Owner-only edit/delete access

⭐ Reviews & Ratings

Add reviews with star ratings

Review ownership enforced

Server-side validation using Joi

🗺️ Maps & Geolocation

Interactive maps using MapTiler

Marker clustering

Exact campground coordinates

India-focused map experience

🛡️ Security

Input sanitization (NoSQL injection prevention)

Secure HTTP headers using Helmet

Content Security Policy (CSP)

Environment variables for secrets

MongoDB-backed session storage

🧠 Error Handling

Centralized error handling

Custom Express error class

Graceful 404 and error pages

🧱 Tech Stack
Frontend

EJS (Server-Side Rendering)

Bootstrap 5

Custom CSS

Responsive design

Backend

Node.js

Express.js

MongoDB

Mongoose

Authentication & Security

Passport.js

express-session

connect-mongo

Helmet

Joi

Cloud & Services

Cloudinary (Image storage)

MapTiler (Maps & geolocation)

MongoDB Atlas (Database)

Render (Deployment)

🗂️ Project Structure
Campora/
│
├── controllers/        # Business logic
├── models/             # Mongoose schemas
├── routes/             # Express routes
├── views/              # EJS templates
├── public/             # CSS, JS, assets
├── middleware.js       # Auth & validation middleware
├── utils/              # Custom error handling
├── app.js              # Application entry point
└── .env                # Environment variables

⚙️ Environment Variables

Create a .env file in the root directory:

PORT=3000
MONGO_URL=your_mongodb_url
SESSION_SECRET=your_session_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_cloud_key
CLOUDINARY_SECRET=your_cloud_secret
MAPTILER_API_KEY=your_maptiler_key


⚠️ Never commit .env to GitHub

🛠️ Local Setup
# Clone the repository
git clone https://github.com/your-username/campora.git

# Navigate into the project
cd campora

# Install dependencies
npm install

# Run the server
npm run dev


App runs at:

http://localhost:3000

🧠 What This Project Taught Me

How authentication actually works (sessions, cookies, Passport)

How to structure scalable Express applications

Secure handling of user data and inputs

Real-world debugging (CSP, env issues, deployment bugs)

Integrating third-party services (Cloudinary, MapTiler)

Deploying a full-stack application

This project was challenging, frustrating, and extremely rewarding.

⚠️Known Limitations

No search or filtering yet

No email verification (planned)

UI can be further refined

No role-based access control

These are planned improvements, not oversights.

🔮 Future Enhancements

🔍 Search and filters

📧 Email verification (Nodemailer)

❤️ Favorites & likes

👤 User profiles

📱 Improved mobile UI

⚡ Performance optimizations

👨‍💻 About the Developer

Built by Abhishek Kumar
Second-year Computer Science student focused on:

Backend engineering

System design

Security

Building real-world products

This project was built for learning, not shortcuts.

finally!!!

If you’re a developer, recruiter, or learner — feel free to explore the app, review the code, or suggest improvements.

Campora is just the beginning 🚀
