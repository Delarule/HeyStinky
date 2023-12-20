function VAR() {
if (arguments.length == 1) {
console.log("У нас есть " + arguments[0]);
} else if (arguments.length == 2) {
console.log("А так же есть" + arguments[0] + " , " + arguments[1]);
} else if (arguments.length == 3) {
console.log("И конечно-же есть" + arguments[0] + " " + arguments[1] + " " + arguments[2]);
}
}

VAR("2");
VAR( 2 , "один");
VAR(true, "один", 1);