const date = new Date();
const news = date.toString();
console.log(news);

const friend = date.toDateString();
console.log(friend);

console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

console.log(date.toUTCString());
// //Data types for all
// function value() {
//     let x = 120;
//     function newValue() {
//         let y = 200;
//         let z = 250;
//         console.log(y);
//         console.log(x);
//         console.log(z);
//     }
//     newValue();
//     let yx = document.getElementById("y")
//     let xy = document.createElement('li');
//     yx.textContent = "Hello anil"
//     yx.appendChild(xy);
//     console.log(x); //120
//     console.log(y);
//     console.log(z);// ReferenceError: z is not defined
// }
// value();
