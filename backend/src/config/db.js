const mongoose = require("mongoose");
require("dotenv").config();

function connect() {
  return mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
module.exports = connect;