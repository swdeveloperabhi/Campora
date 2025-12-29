🏕️ Campora

Discover • Share • Explore Campgrounds Across India

🔗 Live Demo: https://campora-mamy.onrender.com

Campora is a full-stack web application that enables users to discover, create, and review campgrounds across India.
Inspired by platforms like YelpCamp, Campora is redesigned with Indian geography, modern security practices, and a production-oriented backend architecture.

This project was built to deeply understand how real-world web applications work end-to-end—from authentication and security to deployment and scalability—not just to showcase UI.

📌 Why Campora?

Finding reliable camping locations in India is challenging due to scattered, unauthenticated information.
Campora solves this by providing a community-driven platform where real users share real locations, enriched with maps, images, and reviews.

Core focus areas:

Backend correctness & structure

Security-first development

Authentication & authorization

Scalable project architecture

Real-world deployment & debugging

✨ Features
🔐 Authentication & Authorization

User registration, login, and logout

Secure password hashing with salt

Session-based authentication using Passport

Protected routes & ownership checks

Flash messages for user feedback

🏕️ Campgrounds

Create, edit, and delete campgrounds

Upload multiple images per campground

Secure image storage via Cloudinary

GeoJSON-based location storage

Owner-only edit & delete access

⭐ Reviews & Ratings

Add reviews with star ratings

Review ownership enforcement

Server-side validation using Joi

Secure deletion with authorization checks

🗺️ Maps & Geolocation

Interactive maps powered by MapTiler

Marker clustering for better UX

Exact campground coordinates

India-focused map experience

🛡️ Security

Input sanitization (NoSQL injection prevention)

Secure HTTP headers via Helmet

Strict Content Security Policy (CSP)

Environment variables for secrets

MongoDB-backed session storage

Note:
While not enterprise-grade security, Campora is definitely not a “101-level easy win” for attackers.
It follows solid defensive practices expected in real production apps.

🧠 Error Handling

Centralized error handling system

Custom Express error class

Graceful 404 and error pages

Safe handling of async errors

🧱 Tech Stack
Frontend

EJS (Server-Side Rendering)

Bootstrap 5

Custom CSS

Fully responsive design

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

Cloudinary – Image storage

MapTiler – Maps & geolocation

MongoDB Atlas – Cloud database

Render – Deployment

Campora/
│
├── controllers/        # Business logic
├── models/             # Mongoose schemas
├── routes/             # Express routes
├── views/              # EJS templates
├── public/             # CSS, JS, static assets
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

# Run the development server
npm run dev


The app runs at:
👉 http://localhost:3000

🧠 What This Project Taught Me

How authentication actually works (sessions, cookies, Passport)

Structuring scalable Express applications

Secure handling of user data & inputs

Debugging real production issues (CSP, env vars, deployment bugs)

Integrating third-party services (Cloudinary, MapTiler)

Deploying and maintaining a full-stack application

This project was challenging, frustrating, and extremely rewarding.

⚠️ Known Limitations

No search or filtering yet

No email verification

UI can be further refined

No role-based access control

These are planned improvements, not oversights.

🔮 Future Enhancements

🔍 Search & advanced filters

📧 Email verification (Nodemailer)

❤️ Favorites & likes

👤 User profiles

📱 Improved mobile UI

⚡ Performance optimizations

🔐 Role-based access control (RBAC)

👨‍💻 About the Developer

Built by Abhishek Kumar
Second-year Computer Science student focused on:

Backend engineering

System design

Security

Building real-world, production-oriented products

This project was built for learning deeply, not for shortcuts.

Finally!!

If you’re a developer or learner, feel free to:

Explore the app

Review the code

Suggest improvements

Campora is just the beginning 🚀
