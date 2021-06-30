function getRating(aDriver) {
  return moreTanFiveLateDeliveries(aDriver) ? 2 : 1;
}

function moreTanFiveLateDeliveries(dvr) {
  return dvr.numberOfLateDeliveries > 5;
}
