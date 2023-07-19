require("dotenv").config();

const ServerPort = process.env.SERVER_PORT||6000
const mongoDB=process.env.MongoDB_URL || "mongodb://localhost:27017/blogwebsite"

module.exports = {ServerPort,mongoDB}