import {readFileSync} from 'fs';

// get the raw data from input file
const data = readFileSync('./input1.txt', 'utf8');

// convert the raw data into an array and compare the sea floor depths to find the total numbers of increasing measurements
const SonarSweepPart1 = () => {
    const seaFloorDepthsArr = data.split('\n').map((ln) => Number(ln))
    let count = 0

    for (let i = 0; i < seaFloorDepthsArr.length; i++) {
        if (seaFloorDepthsArr[i + 1] - seaFloorDepthsArr[i] > 0) {
            count += 1
        }
    }
    return count
}
let puzzleNum = SonarSweepPart1();
console.log('Day 1 Part 1 Puzzle number is: ', puzzleNum)