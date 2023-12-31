// mongodb connection
const mongoose = require("mongoose");
async function db() {
  mongoose.set("strictQuery", true);
  await mongoose.connect(
    "mongodb://127.0.0.1:27017/placement_cell_db"
  );
  console.log("connection Successfull !! ");
}
db().catch((error) => console.log("connection not successfull !!"));
