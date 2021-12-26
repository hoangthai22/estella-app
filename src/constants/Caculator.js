export const caculatorSale = (salePercent, price) => {
  return price - (salePercent / 100) * price;
};
