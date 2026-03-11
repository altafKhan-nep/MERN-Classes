const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => {
    console.log("Connection form successfully!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

//PRE SCHEMA
// customerSchema.pre("findOneAndDelete", async () => {
//   console.log("PRE MIDDLEWARES");
// });

//POST SCHEMA

customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
    let res = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log(res);
  }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

//adding a customer

const addCust = async () => {
  let newCust = new Customer({
    name: "Karan ",
  });

  let newOrder = new Order({
    item: "Biryani",
    price: 200,
  });

  newCust.orders.push(newOrder);
  await newOrder.save();
  await newCust.save();

  console.log("You added new customer succesfully!");
};

// addCust();

// Deleting a customers

const delCust = async () => {
  let data = await Customer.findByIdAndDelete("6810a7714d5b910bae3c9f97");
  console.log(data);
};

delCust();
