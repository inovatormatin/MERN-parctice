const mongoose = require('mongoose');
require('dotenv').config();

connectdb().then(() => console.log("Database Connected")).catch(err => console.log(err));

async function connectdb() {
  await mongoose.connect(process.env.MONGO_URL);
}

module.exports = {connectdb};