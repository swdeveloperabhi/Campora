import Campground from "../Models/campground.js";
import cloudinary from "../cloudinary/index.js";
import * as maptilerClient from "@maptiler/client";

maptilerClient.config.apiKey = process.env.MAPTILER_API_KEY;


export const home = async (req, res) => {
  res.render("campgrounds/home");
}

export const index = async (req, res) => {
  const campgrounds = await Campground.find({});
  res.render("campgrounds/Index", { campgrounds });
}

export const newCampgroundForm = (req, res) => {
  res.render("campgrounds/new");
}

export const createCampground = async (req, res, next) => {
     const geoData = await maptilerClient.geocoding.forward(req.body.campgrounds.location, { limit: 1 });
    if (!geoData.features?.length) {
        req.flash('error', 'Could not geocode that location. Please try again and enter a valid location.');
        return res.redirect('/campgrounds/new');
    }
    const camp = new Campground(req.body.campgrounds);
    camp.geometry = geoData.features[0].geometry;
    camp.location = geoData.features[0].place_name;
    camp.images = req.files.map(f => ({ url: f.path, filename: f.filename }));
    camp.author = req.user._id;
    await camp.save();
    req.flash('success', 'Created a new campground successfully!');
    res.redirect(`/campgrounds/${camp._id}`); 
};

export const showCampground = async (req, res) => {
  const { id } = req.params;
  const c = await Campground.findById(id).populate({
    path: 'reviews',
    populate: {
    path: "author"
    }
  }).populate('author');
  if (!c) {
    req.flash('error', 'Campground does not exist!');
    return res.redirect("/campgrounds")
  }
  res.render("campgrounds/show", { c });
}

export const renderEditForm = async (req, res) => {
  const { id } = req.params;
   const camp = await Campground.findById(id);
  if(!camp){
    req.flash('error','Campground does not exist!');
    return res.redirect("/campgrounds")
  }
  res.render("campgrounds/edit", { camp });
}

export const updateCampground = async (req, res) => {
  const { id } = req.params;
      const geoData = await maptilerClient.geocoding.forward(req.body.campgrounds.location, { limit: 1 });
    if (!geoData.features?.length) {
        req.flash('error', 'Could not geocode that location. Please try again and enter a valid location.');
        return res.redirect(`/campgrounds/${id}/edit`);
    }
  const camp = await Campground.findByIdAndUpdate(id, req.body.campgrounds);
   camp.geometry = geoData.features[0].geometry;
    camp.location = geoData.features[0].place_name;
  const imgs = req.files.map(f => ({ url: f.path, filename: f.filename }));
  camp.images.push(...imgs);
  await camp.save();
  if( req.body.deleteImages){
    for(let filename of req.body.deleteImages){
      await cloudinary.uploader.destroy(filename);
    }
    await camp.updateOne({
  $pull: {
    images: { filename: { $in: req.body.deleteImages } }
  }
});
  }
  req.flash('success',"Updated Successfully!")
  res.redirect(`/campgrounds/${id}`);
}

export const deleteCampground = async (req, res) => {
  const { id } = req.params;
  await Campground.findByIdAndDelete(id);
  req.flash('success','Deleted campground successfully!')
  res.redirect("/campgrounds");
}
