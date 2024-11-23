import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    clerKDd: {
      type: String,
      required: true,
      unique: true,
    },
    creditBalance: {
      type: Number,
      default: 5,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    photo: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
    },
    LastName: {
      type: String,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('users',schema)