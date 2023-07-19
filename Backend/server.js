
const connectDB = require('./Config/db');
const app = require('./app');
const { ServerPort } = require('./secret');


app.listen(ServerPort,async()=>{
  console.log(`Server is running on ${ServerPort}`);
  await connectDB()
})