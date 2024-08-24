require('dotenv').config()
const express = require("express");
const app = express();

const port = process.env.PORT;
const cors = require("cors");

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  optionsSuccessStatus: 200 
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require("./connections/connection")();

const indexRoute = require("./routes/index");

app.use("/",indexRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});