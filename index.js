// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(driversArray, selectionFunction) {
  return selectionFunction(driversArray);
};

const allDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo', 'Priya', 'David'];

console.log("--- Driver Selection Examples ---");
console.log("Selecting first two drivers:", selectDifferentDrivers(allDrivers, returnFirstTwoDrivers));
console.log("Selecting last two drivers:", selectDifferentDrivers(allDrivers, returnLastTwoDrivers));

console.log("\n--- Fare Multiplier Examples ---");
console.log("Doubling a fare of 10:", fareDoubler(10));
console.log("Tripling a fare of 10:", fareTripler(10));
console.log("Doubling a fare of 7.50:", fareDoubler(7.50));
