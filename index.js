// Code your solution in this file! 
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; 
    return Math.abs(pickupLocation - hqLocation); 
  }
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}
 
function distanceTravelledInFeet(startBlock, endBlock) {
    const feetPerBlock = 264;
    const blocksTravelled = Math.abs(endBlock - startBlock); 
    return blocksTravelled * feetPerBlock;
  }

  function calculatesFarePrice(start, destination) {
    const distance = Math.abs(destination - start);
    const feetPerBlock = 264;
    let farePrice;
  }
  function calculatesFarePrice(start, destination) {
    const distance = Math.abs(destination - start);
    const feetPerBlock = 264;
    let farePrice;
  
  }
  function calculatesFarePrice(start,destination){
    let distance = distanceTravelledInFeet(start,destination);
    if (distance<= 400){
      return 0;
    }
    if (distance>=400 && distance<=2000){
      return (distance-400)* 0.02;
    }
    else if(distance>=2000&& distance<=2500){
      return 25;
    }
    else if (distance > 2500){
      return "cannot travel that far";
    }
  }
  