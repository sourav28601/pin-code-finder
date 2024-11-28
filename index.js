const express = require("express");
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View Engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/src/views");

const apiRoutes = require("./src/routes/index.routes");
const errorHandler = require("./src/utils/error.handler");
app.use(errorHandler);
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
