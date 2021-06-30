function reportLines(aCustomer) {
  const lines = [];
  line.push(["name", aCustomer.name]);
  line.push(["location", aCustomer.location]);
  gatherCustomerData(lines, aCustomer);
  return lines;
}
