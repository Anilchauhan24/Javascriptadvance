
// let colors = ["red", "blue", "yellow", "pink"];

// console.log(colors.toString());//red,blue,yellow,pink
// console.log(colors.valueOf());// ['red', 'blue', 'yellow', 'pink']
// console.log(colors)// ['red', 'blue', 'yellow', 'pink']
// // console.log(colors.fill("blanket"))//['blanket', 'blanket', 'blanket', 'blanket']

// let remove3rdItem = colors.splice(3);
// console.log(remove3rdItem); //['pink']

// const updatedItems = colors;
// console.log(updatedItems)//part5.js:13 (3) ['red', 'blue', 'yellow']

// const a = [1, 2, 3, 4, 5];
// const a2 = Array.from(a, x => x ** 2);
// console.log(a2);//(5) [1, 4, 9, 16, 25]

// const fin = Math.pow(a, 2);
// console.log(fin)//NaN

// console.log(Array.of(a))//[Array(5)]


// const m = new Map().set(1, 2).set(3, 5);
// console.log(m)//Map(2) {1 => 2, 3 => 5}

// const s = new Set().add(1).add(2).add(3).add(4);
// console.log(Array.from(s))// [1, 2, 3, 4]
// console.log(s)//Set(4) {1, 2, 3, 4}


// let value = Array.from("matt");
// console.log(value)//(4) ['m', 'a', 't', 't']

// let oldValue = new Array("matt");
// console.log(oldValue)//['matt']

// let colors = new Array("red", "blue", "green");
// console.log(colors)//(3) ['red', 'blue', 'green'

// let newOps = ["red", "blue", "orange"];
// console.log(newOps)//(3) ['red', 'blue', 'orange']

// function value(args) {
//     let output = "";

//     if (typeof args.name == "string") {
//         output = "Name:" + args.name + "\n";
//     }
//     if (typeof args.age == "number") {
//         output = "Age" + args.age + "\n";
//     }
//     alert(output)
// }
// value({
//     name: "Anil hauhan",
//     age: 24
// })