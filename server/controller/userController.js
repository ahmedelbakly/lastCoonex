import { User, UserCompany } from "../models/userModel.js";
import bcrypt from "bcrypt";
const salt = bcrypt.genSaltSync(10);

export const createUser = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (username && email && password) {
    console.log(username, email, password);
    console.log("yes");
    const hash = bcrypt.hashSync(password, salt);
    const user = await User.create({
      username: username,
      email: email,
      password: hash,
      type:"user",
    });
    res.json(user);
  } else {
    res.json(req.body);
  }
};
export const createUserBus = async (req, res, next) => {
  const { companyName, email, password, firstName, lastName, phone } = req.body;

  if (companyName && email && password && firstName && lastName && phone) {
   
    console.log("yes");
    const hash = bcrypt.hashSync(password, salt);
    const user = await UserCompany.create({
        companyName: companyName,
      email: email,
      password: hash,
      type:"company",
      firstName:firstName,
      lastName:lastName,
      phone:phone
    });
    res.json(user);
  } else {
    res.json(req.body);
  }
};
