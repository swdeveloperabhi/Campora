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

<img width="452" height="285" alt="image" src="https://github.com/user-attachments/assets/1ec49d9e-7417-4d8c-a3db-4f6aaf957cda" />


⚙️ Environment Variables

Create a .env file in the root directory:

<img width="368" height="193" alt="image" src="https://github.com/user-attachments/assets/6443c5f2-65b8-4bb4-8d70-7e2c1034898f" />



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
