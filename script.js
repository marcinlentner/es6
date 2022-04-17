function print(firstName) {
  console.log(`Hello ${firstName}`);
}
print("Foo");

function createEmail(firstName, price) {
  let shipping = 7.99;
  console.log(`Hi ${firstName}! Thanks for your order.
    Total: $${price}
    Shipping: $${shipping}
    Grand Total: $${price + shipping}
  `);
}

createEmail("Foo", 10);
