import {readFileSync} from 'fs';

// get the raw data from input file
const data = readFileSync('./input2.txt', 'utf8');

// convert the raw data into arrays and change the course based on each command by tracking aim value
const DiveCoursePart2 = () => {
    const diveActions = data.split('\n');
    let depth = 0;
    let horizPos = 0;
    let aim = 0;

    for (let i = 0; i < diveActions.length; i++) {
        const [action, X_String] = diveActions[i].split(' ');
        const unitNum= Number(X_String);

        switch (action) {
            case 'forward':
                horizPos += unitNum
                depth += aim * unitNum
                break
            case 'down':
                aim += unitNum
                break
            case 'up':
                aim -= unitNum
                break
            default:
                break
        }
    }
    return depth * horizPos
}
let puzzleNum = DiveCoursePart2();
console.log('Day 2 Part 2 Puzzle number is: ', puzzleNum)
