function handleNum(number, evenCallback, oddCallback) {
   if (number %2 ===0) {
    evenCallback();
   } else {
    oddCallback();
   }
}
function handleEven() {
    console.log ('number is even');
}
function handleOdd() {
    console.log('number is Odd');
}
handleNum(5, handleEven,handleOdd);
handleNum(10,handleEven, handleOdd)
