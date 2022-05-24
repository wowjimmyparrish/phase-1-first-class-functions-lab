const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = (drivers) => {
    return ['Antonia', 'Nuru'];
  }
  const returnLastTwoDrivers = (drivers) => {
    return [drivers[2],drivers[3]]
 }
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
  
function createFareMultiplier(n){
    return function(num){
        return n * num

    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
function selectDifferentDrivers(drivers, callBack){
    return callBack(drivers)
}