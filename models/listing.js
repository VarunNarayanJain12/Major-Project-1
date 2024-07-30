const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: 
        "https://unsplash.com/photos/landscape-of-seashore-near-mountain-YmKuM2WLI20",
        set: (v) => v === ""
         ? "https://unsplash.com/photos/landscape-of-seashore-near-mountain-YmKuM2WLI20" : v,  
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;