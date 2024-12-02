
function checkSpeed(speed) {
    const speedLimit = 70; // Speed limit in km/h
    const demeritPointThreshold = 12; // Threshold for license suspension

    // Check if the speed is less than the speed limit
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        // Calculate demerit points for speeding
        const excessSpeed = speed - speedLimit; // Calculate how much over the limit
        const demeritPoints = Math.floor(excessSpeed / 5); // Calculate demerit points

        console.log(`Points: ${demeritPoints}`); // Print total demerit points

        // Check if points exceed threshold for license suspension
        if (demeritPoints > demeritPointThreshold) {
            console.log("License suspended");
        }
    }
}

const carSpeed = 150; 
checkSpeed(carSpeed);