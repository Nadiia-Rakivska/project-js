// Завдання 1:
// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().


// const number = Number(prompt("Введіть число:"));
// number === 10 ? alert("Вірно") : alert("Невірно");



// Завдання 2:
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"
// debugger;
// const min = Math.floor(Math.random() * (59 - 0) + 0);
// alert(min);

// if (min<15) {
//   alert(`${min} входить в першу чверть`);
// }
// else if (min>=15 && min<30) {
//   alert(`${min} входить в другу чверть`);
// }
// else if (min>=30 && min<45) {
//   alert(`${min} входить в третю чверть`);
// }
// else {
//   alert(`${min} входить в четверу чверть`);
// }


// Завдання 3:

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.
// const num = Number(prompt("Введіть число:"))
// switch (num) {
//   case 1:
//     console.log("зима");
//     break;
//     case 2:
//       console.log("весна");
//     break;
//     case 3:
//       console.log("літо");
//     break;
//     case 4:
//       console.log("осінь");
//       break;
//   default:
//     console.log("Вибачте, але ви маєте ввести значення від 1 до 4 включно");
//     break;
// }

// Завдання 4:
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// const userMinutes = Number(prompt("кількість хв:"));
// console.log(formatTime(userMinutes));


// function formatTime(totalMinutes) {
//   const hours = Math.floor(totalMinutes / 60);
//   const modifedHours = String(hours).padStart(2, "0");
//   const min = totalMinutes % 60;
//     const modifedMin = String(min).padStart(2, "0");
//   return `${modifedHours}:${modifedMin}`;
// }

// Завдання 5:
// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"
 
// const login = prompt("Введіть логін:");
// console.log(login);
// if (login ==="Адмін") {
//   const password = prompt("ВВедіть пароль:");
//   if (password ==="Я головний") {
//     alert("Добрий день!");
//   }
//   else {
//     alert("Невірний пароль!");
//   }
// }
// else if (!login) {
//   alert("Скасовано");
// }
// else {
//   alert("Я вас не знаю");
// }

// Завдання 6:
// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.
// debugger;
// let num = 0;
// while (num <= 20) {
//    console.log(num);
//   num+=1;
// }

// Завдання 7:
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.
// debugger;
// function getNumbers(min, max) {
//   let cnt=0;
//   for (let index = max; index >= min; index--) {
//     console.log(index);
//     if (index%2==0) {
//       cnt =cnt+ index;
//     }
//   }
//   return cnt;
// }
// console.log(getNumbers(5, 10));


// Завдання 8:
// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.
// function min(a, b) {
//   // typeof(Number(a))!==Number(a)&&typeof(Number(b))!==Number(b)
//   if (typeof a!=="number"||typeof b !=="number"){
//     return "Not a number!";
//   }
//     if (b<a) {
//       return b;
//     }
//     else {
//       return a;
//     }
//     }
// console.log(min(5, 6));

// function min(a, b) {
//  const res1= Boolean(Number(a));
//  const res2=Boolean(Number(b));
//   if (res1==false||res2==false){
//     return "Not a number!";
//   }
//     if (b<a) {
//       return b;
//     }
//     else {
//       return a;
//     }
//     }
// console.log(min("5kj", "6"));
// console.log(min("5", "6"));
// console.log(min(4, 2));
// Завдання 9:
// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

function isAdult(age) {
  if (age>=18) {
    return true;
  }
  return confirm("Вам є 18 років?");  
}
console.log(isAdult(24));

// Завдання 10:
// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.
// function fizzBuzz(num) {
//   for (let index = 1; index <= num; index++) {
//      if (index % 3===0 && index % 5 === 0) {
//       console.log("fizzbuzz");
//       console.log(index);
//     }
//     else if (index%3===0) {
//       console.log("fizz");
//       console.log(index);
//     }
//     else if (index % 5 === 0) {
//       console.log("buzz");
//       console.log(index);
//     }
//     }
// }
// fizzBuzz(15);
