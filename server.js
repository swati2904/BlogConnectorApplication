const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const app = express();

//Database connection
connectDB();

// Init middleware
app.use(express.json());

// Define routes

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

//serve static assests in production
if (process.env.NODE_ENV === "production") {
  //setstatic folder
  app.use(express.static("client-weblog/build"));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "client-weblog", "build", "index.html")
    );
  });
}

const PORT = process.env.PORT || 4200;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
