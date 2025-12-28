import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotenv.config({ path: path.join(__dirname, "../.env") });

import mongoose from "mongoose";
import Campground from "../Models/campground.js";
import { descriptors } from "./seedHelper.js";
import { places } from "./seedHelper.js";
import { campingCitiesIndia } from "./cities.js";
import User from "../Models/user.js";

const dbUrl = process.env.DB_URL;

console.log("dburl: ", dbUrl)

if (!dbUrl) {
  console.error("Error: DB_URL is not defined in .env");
  process.exit(1);
}


async function startDB() {
  try {
    await mongoose.connect(dbUrl);
    console.log("Database Connected");
  } catch (err) {
    console.error("Database connection error:", err);
  }
}

await startDB();

const author = await User.findOne(); 

const sample = array => array[Math.floor(Math.random()*array.length)];
const seedDB = async () => {
  
  await Campground.deleteMany({});
  await User.deleteMany({});


 
  for (let i = 0; i < 50; i++) {
    const p = Math.floor(Math.random() * 2000);
    const camp = new Campground({
      author: author._id, 
      location: `${campingCitiesIndia[i].city}, ${campingCitiesIndia[i].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      geometry: {
        type: "Point",
        coordinates: [
          campingCitiesIndia[i].longitude,
          campingCitiesIndia[i].latitude,
        ],
      },
      images: [
        {
          url: 'https://res.cloudinary.com/dxmll9q9t/image/upload/v1766640941/CAMPORA/iwmqpcakwxswd3iishue.jpg',
          filename: 'CAMPORA/iwmqpcakwxswd3iishue',
        },
        {
          url: 'https://res.cloudinary.com/dxmll9q9t/image/upload/v1766640958/CAMPORA/lxqnutdt1hhrc3ccyx2q.jpg',
          filename: 'CAMPORA/lxqnutdt1hhrc3ccyx2q',
        },
      ],
      price: p,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    });
    await camp.save();
  }

  console.log("Seed complete!");
};

seedDB().then(() => {
  mongoose.connection.close();
});




