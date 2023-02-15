// ? THE PERSON WHO PEDALS FASTER DICTATES THE SPEED OF THE BIKE
// ? PERSON A: SPEED = 5
// ? PERSON B: SPEED = 4
// ? TANDEM BIKE MOVES AT SPEED = 5
// ? tandemSpeed = max(speedA, speedB)  


const tandemBicycle = (
    redShirtSpeeds: Array<number>,
    blueShirtSpeeds: Array<number>,
    fastest: boolean
): number => {
    let total = 0
    const redShirtsSorted = redShirtSpeeds.sort((a, b) => a - b);
    const blueShirtsSorted = blueShirtSpeeds.sort((a, b) =>
        fastest ? b - a : a - b
    );

    for (let i = 0; i < redShirtsSorted.length; i++) {
        if (redShirtsSorted[i] > blueShirtsSorted[i]) {
            total += redShirtsSorted[i]
        } else {
            total += blueShirtsSorted[i]
        }
    }

    return total
}

console.log(tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], true)); // 32
console.log(tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], false)); // 25

// 9 5 5 3 2
// 1 2 3 6 7 

// 9 5 5 3 2
// 7 6 3 2 1

// 9