const currencyFormatter = (amount, currency = "USD", discount) => {

  const options = {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  };

  const formatter = new Intl.NumberFormat("en-US", options);

  const moneyDiscount = formatter.format(amount - discount);
  const moneyWithoutDiscount = formatter.format(amount);

  return {
    moneyDiscount,
    moneyWithoutDiscount,
  };
};

export default currencyFormatter;
