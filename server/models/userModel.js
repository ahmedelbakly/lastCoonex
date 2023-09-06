import { Schema, model } from "mongoose";

const userBusSchema = Schema({
  companyName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  image:String,
});

export const UserCompany = model("UserCompany", userBusSchema);

/*
Company Name *
City *
Job Title *
First Name *
Last Name *
Email *
Phone *

*/
const userSchema = Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

export const User = model("User", userSchema);
