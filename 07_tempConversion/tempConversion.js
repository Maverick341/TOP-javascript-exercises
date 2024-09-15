const convertToCelsius = function (F) {
  let value = (F - 32) / 1.8;
  return Math.round(value*10)/10;
};

const convertToFahrenheit = function (C) {
  let value = 1.8*C + 32;
  return Math.round(value*10)/10;
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
