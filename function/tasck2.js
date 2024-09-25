function checkAge(age) {
  return age >= 18;
}

console.log("Особа доросла: " + checkAge(25));
console.log("Особа доросла: " + checkAge(15));

function checkAge2(age) {
  if (age >= 18) return true;
  else return false;
}
console.log("Особа доросла: " + checkAge2(25));
console.log("Особа доросла: " + checkAge2(15));
