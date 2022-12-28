"use strict";

const express = require('express');
const app = express();

app.get("/api", (req,res) => {
    res.json({"users": ["userONe", "userTwo", "UserThree"]});
})

app.listen(5000 || process.env.PORT, () => console.log('server started'));