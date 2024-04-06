// const {
const measureRain = (num) => {
    if (num === 0) {
        return "drought"
    } else if (num < 2) {
        return "dry"
    } else if (num < 4) {
        return "average"
    } else if (num < 6) {
        return "rainy"
    } else {
        return "flood"
    }
};
//   measureRain,
//   happyBirthdayPet,
//   funTypes,
//   rounder,
//   fizzBuzzish,
// } = require('./from-scratch');
// const {
//   getRandomIntInRange,
//   coolnessGauge,
//   funkoPopAddictionLevel,
//   getWeatherReport,
//   returnPositiveNegativeZero,
// } = require('./debug');
// const { wildlyBiasedReview } = require('./modify');
