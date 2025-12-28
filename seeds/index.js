import mongoose from "mongoose";
import Campground from "../Models/Campground.js";
import { descriptors } from "./seedHelper.js";
import { places } from "./seedHelper.js";
import { campingCitiesIndia } from "./cities.js";

async function startDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/campora');
    console.log("Database Connected");
  } catch (err) {
    console.error("Database connection error:", err);
  }
}

await startDB();

const sample = array => array[Math.floor(Math.random()*array.length)];
const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const p = Math.floor(Math.random()*2000)
    const camp = new Campground({
      author : '69498e58d69c977dab6445e4',
      location: `${campingCitiesIndia[i].city}, ${campingCitiesIndia[i].state}`,
      title : `${sample(descriptors)} ${sample(places)}`,
           geometry: {
                type: "Point",
                coordinates: [
                    campingCitiesIndia[i].longitude,
                    campingCitiesIndia[i].latitude,
                ]
            },
      images : [
        {
      url: 'https://res.cloudinary.com/dxmll9q9t/image/upload/v1766640941/CAMPORA/iwmqpcakwxswd3iishue.jpg',
      filename: 'CAMPORA/iwmqpcakwxswd3iishue',
      },
      {
        url: 'https://res.cloudinary.com/dxmll9q9t/image/upload/v1766640958/CAMPORA/lxqnutdt1hhrc3ccyx2q.jpg',
      filename: 'CAMPORA/lxqnutdt1hhrc3ccyx2q',
      }
    ],
      price : p,
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsam maiores, ullam officia vero, doloribus officiis, consequuntur dolore a dolorem omnis quasi doloremque dolores eveniet. Cupiditate veniam ad laudantium beatae?"
    })
    await camp.save()
  }
}

seedDB().then(() => {
  mongoose.connection.close();
});




