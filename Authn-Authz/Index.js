const express = require("express");
const app = express();
const { connectDB } = require("./Config/Dbconnect");
const routes = require("./Routes/routes");
require("dotenv").config();

app.use(express.json());
app.use("/api", routes);
const PORT = process.env.PORT || 4000;
connectDB()

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
