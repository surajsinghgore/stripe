import { Router } from "express";
import { createCustomer } from "../controllers/onetimepayment.controller.js";
const router = Router();


// create customer [1]
router.route("/createcustomer").post(createCustomer);

export default router;