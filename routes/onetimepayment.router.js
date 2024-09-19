import { Router } from "express";
import { checkCustomerByEmail, createCustomer, generateToken, retrieveCustomer } from "../controllers/onetimepayment.controller.js";
const router = Router();


// create customer [1]
router.route("/checkcustomerbyemail").post(checkCustomerByEmail);
router.route("/createcustomer").post(createCustomer);
router.route("/retrievecustomer/:customer_id").get(retrieveCustomer);
router.route("/generatetoken").get(generateToken);

export default router;