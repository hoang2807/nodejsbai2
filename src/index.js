const express = require("express");
const app = express();
const port = 8000;
const Router = require("./routes/index");
app.use("/nodemy", Router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});