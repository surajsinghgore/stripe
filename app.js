import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
//   app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
// Routes import
import onetimePaymentRouter from "./routes/onetimepayment.router.js"



app.use("/api/v1/onetimepayment", onetimePaymentRouter);

export { app };