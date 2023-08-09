const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 5000;
const DB = process.env.MONGODB_URL;

const app = express();
app.use(cors());
app.use(express.json());

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB Connection Successful");
    })
    .catch((err) => {
        console.log(err.message);
    });

// import routes
const authRoutes = require("./routes/auth");
const shopRoutes = require("./routes/product");

app.get('/', (req, res) => {
    res.send("<h3>Created by narengavli</h3>")
});

app.use("/api/auth", authRoutes);
app.use("/api/shop", shopRoutes);

app.listen(port, () =>
    console.log(`Server started on ${port}.`)
);