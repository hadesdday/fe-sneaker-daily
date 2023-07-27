function getMoneyFormat(number) {
  return number.toLocaleString().replace(/,/g, ".") + " VND";
}

export { getMoneyFormat };
