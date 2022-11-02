import {readFileSync} from 'fs';

// get the raw data from input file
const data = readFileSync('./input2.txt', 'utf8');

// convert the raw data into arrays and change the course based on each command
const DiveCoursePart1 = () => {
    const diveActions = data.split('\n');
    let depth = 0;
    let horizPos = 0;

    for (let i = 0; i < diveActions.length; i++) {
        const [action, X_String] = diveActions[i].split(' ');
        const unitNum = Number(X_String);

        switch (action) {
            case 'forward':
                horizPos += unitNum
                break
            case 'down':
                depth += unitNum
                break
            case 'up':
                depth -= unitNum
                break
            default:
                break
        }
    }
    return depth * horizPos
}
let puzzleNum = DiveCoursePart1();
console.log('Day 2 Part 1 Puzzle number is: ', puzzleNum)