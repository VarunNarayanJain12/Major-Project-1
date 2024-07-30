const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main()
.then(()=>{
    console.log("Connected to DB");
})
.catch(err=>{
    console.log(err);
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
};

const initDB = async() => {
    await Listing.deleteMany({});

    const modifiedData = initData.data.map(item => ({
        ...item,
        image: item.image.url // Convert the image field to the URL string
      }));

    await Listing.insertMany(modifiedData);
    console.log("Data was initialized");
};

initDB();