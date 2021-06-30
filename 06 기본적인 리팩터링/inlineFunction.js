function getRating(driveer) {
  return moreTanFiveLateDeliveries(driver) ? 2 : 1;
}

function moreTanFiveLateDeliveries(driver) {
  return driver.numberOfLateDeliveries > 5;
}
