const express = require("express");

const app = express();
const routes = require("./src/routes");
app.use(express.json());

app.use(routes);

app.listen(process.env.PORT || 3000);