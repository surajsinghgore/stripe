import express from 'express'
const app = express();


// Middlewares
//   app.use(cookieParser());




// Routes import
import onetimePaymentRouter from "./routes/onetimepayment.router.js"



app.use("/api/v1/onetimepayment", onetimePaymentRouter);

export { app };