// <-- Переменные -->
// перемення const не может быть переопределена и должна быть иницилизирована.
// const dateOfBirth = 1988;
// console.log() иницилизация переменной 
// console.log(dateOfBirth);

// Переменным объявленным через let не обязательно сразу присваивать значение.
// let age;
// console.log(age);
// Если переменная объявлена как let, её значение можно перезаписать.
// age = 14;
// console.log(age);

// Используйте const по умолчанию, большинство переменных будут объявлены именно так.
// Используйте let, если потребуется присвоить переменной другое значение во время выполнения скрипта.


// <-- Оператор typeof -->
// Используется для получения типа значения переменной.
// Возвращает на место своего вызова тип значения переменной указанного после него - строку в которой указан тип.
// let username;
// console.log(typeof username); 

// let inputValue = null;
// console.log(typeof inputValue); 

// const quantity = 17;
// console.log(typeof quantity); 

// const message = "JavaScript is awesome!";
// console.log(typeof message); 

// const isSidebarOpen = false;
// console.log(typeof isSidebarOpen);

// <-- Вывод даных -->
// const message = "JavaScript is awesome!";
// console.log(message);
 // JavaScript is awesome!
// описательная строка 
// const username = "Mango";
// console.log("Username is ", username); 
// Username is Mango

// метод вывода модельного окна 
// const message = "JavaScript is awesome!";
// alert(message);

// <-- Получение даных -->
// confirm выводит модальное окно
// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

// prompt выводит модальное окно с полем заполнения 
// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);
// всегда возвращаеться строка "string"

// <-- Основные операторы -->
// математические операторы 
// const x = 10;
// const y = 5;

// // Сложение
// console.log(x + y); // 15

// // Вычитание
// console.log(x - y); // 5

// // Умножение
// console.log(x * y); // 50

// // Деление
// console.log(x / y); // 2

// // Остаток от деления
// console.log(x % y); // 0

// // Сложение с заменой (также есть для всех других операторов)
// let value = 5;

// // Аналогично записи value = value + 10;
// value += 10;
// console.log(value); // 15

// операторы сравнения 
// возвращают true или false
// const x = 5;
// const y = 10;
// const z = 5;

// console.log("x > y:", x > y); // false
// console.log("x < y:", x < y); // true
// console.log("x < z:", x < z); // false
// console.log("x <= z:", x <= z); // true
// console.log("x === y:", x === y); // false
// console.log("x === z:", x === z); // true
// console.log("x !== y:", x !== y); // true
// console.log("x !== z:", x !== z); // false

