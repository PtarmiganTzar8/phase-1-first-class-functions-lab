const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers){
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = x => y => x*y

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, input){
    if (input === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(arrayOfDrivers)
    }
    else if (input === returnLastTwoDrivers){
        return returnLastTwoDrivers(arrayOfDrivers)
    }
}

// function selectDifferentDrivers(arrayOfDrivers, input){
//         return input(arrayOfDrivers)
// }

// function selectDifferentDrivers(arrayOfDrivers, input){}
//console.log(selectDifferentDrivers(['1', '2', '3', '4', '5', '6', '7', '8'], returnFirstTwoDrivers))

// have function be dynamic