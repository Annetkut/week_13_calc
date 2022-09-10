// let name = "Anna";
// alert( `hello ${1}` );
// alert( `hello ${"name"}` );
// alert( `hello ${name}` );

// // let a = 2
// // let b = 6

// // alert(a + b)

// let my_name = "Иван";

// // Вставим переменную
// alert( `Привет, ${my_name}!` ); // Привет, Иван!

// // Вставим выражение
// alert( `результат: ${1 + 2}` ); // результат: 3

// let a = prompt ("Первое число?", (1));
// let b = prompt ("Второе число?", (2));

// alert(a + b);
// function sum(x, y) {
//     return x+y;
//   } 
//   alert(sum(5, 3));
function askName(){
    let user_name = prompt('Как тебя зовут?');
    alert(`Привет, ${user_name}`);
}


function calcSum(){
    let a = prompt('число a');
    let b = prompt('число b');
    alert(`Результат сложения: ${(Number(a) + Number(b))}`);
}

function calcMinus(){
    let a = prompt('число a');
    let b = prompt('число b');
    alert(`Результат вычисления: ${a - b}`);
}

function calcDiv(){
    let a = prompt('число a');
    let b = prompt('число b');
    alert(`Результат деления: ${a / b}`);
}

function calcMult(){
    let a = prompt('число a');
    let b = prompt('число b');
    alert(`Результат умножения: ${a * b}`);
}