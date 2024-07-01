import mongoose, { connect } from "mongoose";

console.log(process.env.MONGODB_URL);

export const dbConnect = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Db Connected Successfully"))
    .catch((error) => console.error(error.message));
};

