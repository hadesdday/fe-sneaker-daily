function getMoneyFormat(number) {
  return number.toLocaleString().replace(/,/g, ".");
}

export { getMoneyFormat };
