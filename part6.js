// Solve the following equation:

// (2p + 3) – 4 = p


function solution() {
    let p = 10;
    let eqnOne = p;
    let z = 4.9;
    let eqnTwo = (2 * (eqnOne) + 3) - z;

    console.log(eqnTwo)//18.1
    console.log(Math.round(eqnTwo))//18

}
solution()


const p = 10;
const eqnOne = p;
const z = 4.5;
const eqnTwo = (2 * (eqnOne) + 3) - z;

document.write(eqnTwo)//18.5

console.log(Math.ceil(eqnTwo))//19
console.log(Math.floor(eqnTwo))//18