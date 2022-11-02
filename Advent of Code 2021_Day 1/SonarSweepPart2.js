import {readFileSync} from 'fs';

// get the raw data from input file
const data = readFileSync('./input1.txt', 'utf8');

// convert the raw data into an array and compare each sum of three measurements to find the total numbers of increasing sums
const SonarSweepPart2 = () => {
    const seaFloorDepthsArr = data.split('\n').map((ln) => Number(ln))
    let count = 0

    for (let i = 0; i < seaFloorDepthsArr.length - 2; i++) {
        if (seaFloorDepthsArr[i + 3] - seaFloorDepthsArr[i] > 0) {
            count += 1
        }
    }
    return count
}
let puzzleNum = SonarSweepPart2();
console.log('Day 1 Part 2 Puzzle number is: ', puzzleNum)