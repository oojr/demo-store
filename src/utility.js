export function createDollarString(dollarNumber) {
  return dollarNumber.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
