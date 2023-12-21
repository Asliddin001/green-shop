const currencyFormatter = (cost, currency, discount) => {
  const price = cost - (cost * discount) / 100;
  const moneyDiscount = price.toLocaleString("en-En", {
    style: "currency",
    currency,
  });
  const moneyWithoutDiscount = cost.toLocaleString("en-En", {
    style: "currency",
    currency,
  });

  return {
    moneyDiscount,
    moneyWithoutDiscount,
  };
};

export default currencyFormatter;
