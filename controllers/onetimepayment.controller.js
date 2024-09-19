import Stripe from "stripe";
const stripe = new Stripe(process.env.Stripe_Secret_key);


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