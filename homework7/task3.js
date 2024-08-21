function divide (numerator,denominator) {
  if (typeof numerator !== 'number' ||
  typeof denominator !== 'number')  {
    throw new Error ('Помилка: Обидва аргументи повинні бути числами');
  }
  if (denominator ===0) {
    throw new Error ('Помилка: На нуль ділити не можна.');
  }
  return numerator / denominator;
}
const testCases = [
    { numerator:10, denominator:2} ,
    { numerator:10, denominator:0},
    { numerator:'10', denominator:2},
    { numerator:10, denominator:'2'}
];

testCases.forEach (({numerator, denominator}) =>{
    try{
        const result = divide(numerator,denominator);
        console.log(`Результат ділення ${numerator} на ${denominator}
            дорівнює ${result}.`);
    } catch(error) {
        console.log(error.message);
    } finally {
        console.log('Робота завершена.');

    }
    }
);