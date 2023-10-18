const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();

app.get("/", (req, res) =>{
    res.send("React Brand Shop Website is running!")
})

app.listen(port, () => {
    console.log(`React Brand Shop is running on PORT: ${port}`)
})