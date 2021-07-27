const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Database connection
connectDB();

app.get("/", (req, res) => res.send("GET API working"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
