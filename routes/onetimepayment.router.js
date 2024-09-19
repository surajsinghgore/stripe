import { Router } from "express";
import { checkCustomerByEmail, createCustomer, retrieveCustomer } from "../controllers/onetimepayment.controller.js";
const router = Router();


// create customer [1]
router.route("/checkcustomerbyemail").post(checkCustomerByEmail);
router.route("/createcustomer").post(createCustomer);
router.route("/retrievecustomer/:customer_id").get(retrieveCustomer);

export default router;