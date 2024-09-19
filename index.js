import "dotenv/config";
import { app } from "./app.js";
import http from "http";

const server = http.createServer(app);

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`⚙️ Server is running at port : ${PORT}`);
});





// import "dotenv/config";
// import connectDB from "./db/index.js";
// import { app } from "./app.js";
// import http from "http";

// const server = http.createServer(app);

// connectDB()
//   .then(() => {
//     server.listen(process.env.PORT || 8000, () => {
//       console.log(`⚙️ Server is running at port : ${process.env.PORT || 8000}`);
//     });
//   })
//   .catch((err) => {
//     console.log("MONGO db connection failed !!! ", err);
//   });
