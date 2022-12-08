// // Code your solution in this file!
// const returnFirstTwoDrivers = function(dirver1, driver2, driver3, returnDrivers){
//     return returnDrivers()
// }

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (arr) => {
    return arr.slice(0,2)
}
console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers = (arr) => {
    return arr.slice(-2)
}
console.log(returnLastTwoDrivers(drivers));

let selectingDrivers;
selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
console.log(selectingDrivers)

const createFareMultiplier = function(fare){
    const fareMultiplier = function (fare) {
        return fare * fare
    }
   return fareMultiplier;
   
}
console.log(createFareMultiplier(4));

const fareDoubler = (fare) =>{
    createFareMultiplier(fare) / fare;
    let results = fare * 2; 
    return results
} 
console.log(fareDoubler(4));

const fareTripler = (fare) =>{
    createFareMultiplier(fare) / fare;
    let results = fare * 3; 
    return results
} 
console.log(fareTripler(4));

function selectDifferentDrivers(drivers, returnFirstTwoDrivers){

    return returnFirstTwoDrivers(drivers);
}
console.log(selectDifferentDrivers(drivers,returnFirstTwoDrivers));