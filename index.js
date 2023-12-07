// Создаем калькулятор:
// 1. Создать страницу, которая спрашивает(prompt) знак арифм. операции (+ , - и т.д.)
// 2. Запрашиваем ввод 2 чисел через prompt
// 3. Реализовать функцию - калькулятор и вывести результат на экран

// Если интересен JS, то учебник: https://learn.javascript.ru/
// Пример с переводом из строчки в формат целого числа:
// let number = parseInt(prompt("Введите число: "))

let numberA = parseInt(prompt("Введите число: "));
let numberB = parseInt(prompt("Введите число: "));
let action_sign = prompt("Введите знак операции (*, /, + либо -): ");
switch (action_sign) 
{
      case "+":
        alert(
          `${numberA} ${action_sign} ${numberB} = ${numberA + numberB}`
        );
        break;
      case "-":
        alert(
          `${numberA} ${action_sign} ${numberB} = ${numberA - numberB}`
        );
        break;
      case "*":
        alert(
          `${numberA} ${action_sign} ${numberB} = ${numberA * numberB}`
        );
        break;
      case "/":
        alert(
          `${numberA} ${action_sign} ${numberB} = ${numberA / numberB}`
        );
        break;
      default:
        alert(`Вы не ввели знак математической операции!`);
        break;
}

