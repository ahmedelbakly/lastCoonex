import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
const app = express();
const port = process.env.PORT || 5000;
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./db.js"
import multer from "multer";
import userRouter from "./routes/usersRoute.js";




////////////////////////////////////////////////////////////////////////////
connectDB();
////////////////////////////////////////////////////////////////////////////
app.use(cors({
    origin:"http://localhost:3000/"
}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
/// multer 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/tmp/my-uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })
////////////////////////////////////////////////////////////////////////////
// userRouts
app.use("/",userRouter)

///////////////////////////////////////////////////////////////////////////
app.get("/", (req, res) => {
  res.send("Hello World!");
});
////////////////////////////////////////////////////////////////////////////
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
