// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
let numberOfBlocks = (((42 - pickupLocation))**2)**0.5;
return numberOfBlocks;
}
function distanceFromHqInFeet(pickupLocation){
    let numberOfBlocks = (((42 - pickupLocation))**2)**0.5;
    let feet = numberOfBlocks * 264;
    return feet;
}
function distanceTravelledInFeet(start, destination){
    let numberOfBlocks = (((start - destination))**2)**0.5;
    let feet = numberOfBlocks * 264;
    return feet;
}
function calculatesFarePrice(start, destination){
    let numberOfBlocks = (((start - destination))**2)**0.5;
    let feet = numberOfBlocks * 264;
    let cash;
    if (feet <= 400){
        return (0);
    } else if (feet > 400 && feet <=2000){
        cash = (2 * (feet - 400))/100;
        return cash;
    } else if (feet > 2000 && feet <= 2500){
        return (25);
    } else {
        return 'cannot travel that far';
    }
}