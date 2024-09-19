import Stripe from "stripe";
const stripe = new Stripe(process.env.Stripe_Secret_key);
// check weather stripe account is exist using email
export const checkCustomerByEmail = async (req, res) => {
  const { email } = req.body; 
  
  try {
    // Search for customers by email
    const customers = await stripe.customers.list({
      email: email,
      limit: 1 // Limit the number of customers returned to 1
    });

    if (customers.data.length > 0) {
      // Customer with the given email exists
      return res.status(200).json({
        message: "Customer exists",
        customer: customers.data[0], // Return the found customer
      });
    } else {
      // Customer with the given email doesn't exist
      return res.status(404).json({
        message: "No customer found with this email",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Error checking customer by email",
      error: error.message,
    });
  }
};


// create customer
export const createCustomer = async (req, res) => {
  try {
    const customer = await stripe.customers.create({
      name: "John Doe",
      email: "john.doe@example.com",
      description: "Customer for John Doe",

      // Billing Details
      address: {
        line1: "123 Main St",
        line2: "Apt 4B",
        city: "New York",
        state: "NY",
        postal_code: "10001",
        country: "US",
      },

      // Shipping Details
      shipping: {
        name: "John Doe",
        address: {
          line1: "123 Main St",
          line2: "Apt 4B",
          city: "New York",
          state: "NY",
          postal_code: "10001",
          country: "US",
        },
        phone: "+11234567890",
      },

      // Preferred Locales (optional)
      preferred_locales: ["en-US"], // You can adjust locales as needed
    });

    return res.status(200).json({ message: "Customer created successfully", data: customer });
  } catch (error) {
    return res.status(500).json({ message: "Error creating customer", error: error.message });
  }
};




// retrieve customer 
export const retrieveCustomer = async (req, res) => {
  let {customer_id}=req.params;
  try {
    // Retrieve customer by ID
    const customer = await stripe.customers.retrieve(customer_id);

    if (customer) {
      return res.status(200).json({
        message: "Customer retrieved successfully",
        data: customer,
      });
    } else {
      return res.status(404).json({
        message: "Customer not found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Error retrieving customer",
      error: error.message,
    });
  }
};