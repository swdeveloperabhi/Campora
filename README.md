# Campora  
**Discover • Share • Explore Campgrounds Across India**

🔗 **Live Demo:** https://campora-mamy.onrender.com  

---

## Overview
- Full-stack web application to **discover, create, and review campgrounds across India**
- Inspired by YelpCamp, redesigned with:
  - India-focused geography  
  - Modern security practices  
  - Production-oriented backend architecture  
- Built to understand real-world web application development end-to-end

---

## Why Campora?
- Finding reliable camping locations in India is difficult due to:
  - Scattered information  
  - Lack of authenticity  

### Campora solves this by:
- Community-driven campground listings  
- Real user-generated content  
- Integrated maps, images, and reviews  

### Core Focus Areas
- Backend correctness & scalability  
- Security-first development  
- Authentication & authorization  
- Real-world deployment & debugging  

---

## Features

### Authentication & Authorization
- User registration, login, logout  
- Secure password hashing with salt  
- Session-based authentication (Passport.js)  
- Protected routes & ownership checks  
- Flash messages for user feedback  

---

### Campgrounds
- Create, edit, delete campgrounds  
- Upload multiple images  
- Cloudinary-based image storage  
- GeoJSON-based location storage  
- Owner-only access control  

---

### Reviews & Ratings
- Add reviews with star ratings  
- Review ownership enforcement  
- Server-side validation using Joi  
- Secure deletion with authorization checks  

---

### Maps & Geolocation
- Interactive maps powered by MapTiler  
- Marker clustering for better UX  
- Accurate campground coordinates  
- India-focused mapping experience  

---

### Security
- Input sanitization (NoSQL injection prevention)  
- Secure HTTP headers via Helmet  
- Strict Content Security Policy (CSP)  
- Environment variables for secrets  
- MongoDB-backed session storage  

> **Note:**  
> Not enterprise-grade, but follows strong real-world defensive practices.

---

### Error Handling
- Centralized error handling system  
- Custom Express error class  
- Graceful 404 and error pages  
- Safe async error handling  

---

## Tech Stack

### Frontend
- EJS (Server-Side Rendering)  
- Bootstrap 5  
- Custom CSS  
- Fully responsive design  

### Backend
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  

### Authentication & Security
- Passport.js  
- express-session  
- connect-mongo  
- Helmet  
- Joi  

### Cloud & Services
- Cloudinary – Image storage  
- MapTiler – Maps & geolocation  
- MongoDB Atlas – Cloud database  
- Render – Deployment  

---

## Environment Variables
Create a `.env` file in the root directory and add:
DB_URL=your_mongodb_url
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret
SECRET=session_secret
MAPTILER_API_KEY=your_key

# Clone the repository
git clone https://github.com/your-username/campora.git

# Navigate into the project
cd campora

# Install dependencies
npm install

# Run the development server
npm run dev

## What I Learned
- How authentication works (sessions, cookies, Passport)  
- Structuring scalable Express applications  
- Secure handling of user data & inputs  
- Debugging real production issues (CSP, env vars, deployment)  
- Integrating third-party services (Cloudinary, MapTiler)  
- Deploying and maintaining full-stack applications  

---

## Known Limitations
- No search or filtering  
- No email verification  
- UI can be improved  
- No role-based access control  

> These are planned improvements, not oversights.

---

## Future Enhancements
- Search & advanced filters  
- Email verification (Nodemailer)  
- Favorites & likes  
- User profiles  
- Improved mobile UI  
- Performance optimizations  
- Role-Based Access Control (RBAC)  

---

## About the Developer
**Abhishek Kumar**  
Second-year Computer Science student  

### Focus Areas
- Backend Engineering  
- System Design  
- Security  
- Building real-world production systems  

---

## Contributing
If you're a developer:
- Explore the app  
- Review the code  
- Suggest improvements  

---

## License
This project is open-source and available under the MIT License.
