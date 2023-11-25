// let colorText = "red,blue,green,yellow ";
// let color1 = colorText.split(",");
// let color2 = colorText.split(",", 2);
// console.log(color1);
// console.log(color2)
// let value = "yellow";
// let newVALUE = value.localeCompare("blue");
// console.log(newVALUE)
// let mes = "Hello Anil";
// eval("console.log(mes)");
// // console.log(mes.eval());//Uncaught TypeError: mes.eval is not a function
// eval("document.write(mes)")//Hello Anil
// let color = "red";
// function sayColor() {
//     console.log(window.color);
// }
// window.sayColor();



let global = function () {
    return this;
}();

