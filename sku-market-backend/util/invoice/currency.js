const currency = [
  {
    label: 'SAR',
    value: 'Saudi Arabia Riyals (SAR)',
    rate:1,
  },
  {
    label: 'AED',
    value: 'United Arab Emirates Dirham (AED)',
    rate:0.98,
  },
  {
    label: 'EGP',
    value: 'Egyptian Pound (EGP)',
    rate:7.35,
  },
  {
    label: 'USD',
    value: 'United States Dollars (USD)',
    rate:0.27,
  },
  {
    label: 'CNY',
    value: 'Chinese Yuan (CNY)',
    rate:1.80,
  },
  {
    label: 'JOD',
    value: 'Jordanian Dinar (JOD)',
    rate:0.19,
  },
];

exports.formatCurrency = (amount, convertTo='SAR') => {
  const item = currency.find(a => a.label === convertTo);
  const value = `${convertTo} ${parseFloat(amount * item.rate).toFixed(2)}`;
  return value;
};

exports.convertCurrency = (amount, convertTo='SAR') => {
  const item = currency.find(a => a.label === convertTo);
  const value = parseFloat(amount * item?.rate).toFixed(2);
  return value;
};