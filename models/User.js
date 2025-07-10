import mongoose from "mongoose";

// Define a Mongoose schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Make the name field required
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
    unique: true, // Email should be unique
    required: true,
  },
});

// Create the User model
const User = mongoose.model("User", userSchema);

// Export it
export default User;
