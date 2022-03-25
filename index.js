// Code your solution in this file!

const hq = 42, block = 264 


function distanceFromHqInBlocks(someValue) {
    if (someValue >= hq) {
        return someValue - hq
    }
    if (someValue <= hq) {
        return hq - someValue
    }
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * block
}

function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        return (destination - start) * block
    } 
    else {
        return (start - destination)* block
    }
}


function calculatesFarePrice(start, destination) {
    let n = distanceFromHqInFeet(start, destination)
   if ( n <= 400){
       return 0 
   } 
    else if (n > 400 && n < 2000){
       return ((n) - 400) *.02
   }
     else  if (n > 2000 && n <2499){
       return 25
   }
     else if (n > 2500) {
       return "cannot travel that far"
   }

}


