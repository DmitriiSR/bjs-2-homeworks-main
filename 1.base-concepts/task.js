"use strict"

function solveEquation(a, b, c) {
  const arr = [];
  let discriminant = Math.pow(b, 2)-4*a*c;
  let x1 = 0;
  let x2 = 0;

  if(a !== 0) {
    if(discriminant > 0) {
      x1 = (-b + Math.sqrt(discriminant) )/(2*a);
      x2 = (-b - Math.sqrt(discriminant) )/(2*a);
      arr.push(x1, x2);
    } else {
      if(discriminant < 0) {
        console.log('Корней нет')
      } else if(discriminant === 0) {
        x1 = -b/(2*a);
        arr.push(x1);
      }
    }
  } else {
    alert('a не может быть 0')
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let p = percent / 100 / 12;
  let creditBody = amount - contribution;
  let currentDate = new Date();
  let diff = (date.getDate() - currentDate.getDate()) / 30 + date.getMonth() - currentDate.getMonth() + (12 * (date.getFullYear() - currentDate.getFullYear()));
  let payPerMonth = creditBody * (p + (p / (((1 + p) ** diff) - 1)));
  let totalAmount = +(payPerMonth * diff).toFixed(2);
  const args = [];
  
  for(let i = 0; i < arguments.length; i++) {
    args[i] = +arguments[i];
    
    if(isNaN(args[i])) {
      [i].toString();
      if([i] == 3) {
        return(`Параметр "Срок ипотеки" содержит неправильное значение "${date}"`);
      } 
      
      if ([i] == 2) {
        return(`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
      }
  
      if([i] == 1) {
        return(`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
      }

      if([i] == 0) {
        return(`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
      }
    }   
  }


  
  console.log(totalAmount);

  return totalAmount;
}
