for (let i = 1; i <= 100; i++) {
  const divisionResultThree = i / 3;
  const divisionResultFive = i / 5;

  let stringResult = '';

  if (isDecimal(divisionResultThree) === 0) stringResult += 'Fizz';
  if (isDecimal(divisionResultFive) === 0) stringResult += 'Buzz';
  if (stringResult === '') {
    console.log(i);
    continue;
  }

  console.log(stringResult);
  console.log('Esta es otra prueba')
  tringResult = '';
}

function isDecimal(number) {
  return number - Math.floor(number);
}
