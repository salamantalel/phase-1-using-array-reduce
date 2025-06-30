
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Use .reduce() to sum the batteries
const totalBatteries = batteryBatches.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

// Export the variable so tests can see it
module.exports = {
  totalBatteries,
};