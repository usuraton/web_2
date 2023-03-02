if (0){
    console.log("i")
} else{
    console.log("l")
}


const sometext = "text"
const somevalue= "value"
//console.log('Строка ${sometext} \n и потом ${somevalue}')
// Задача 1
let kmPerHour = 36;
let mPerSecond = 20;

// Task 1
console.log("---Задача №1 Конвертация скоростей---");
console.log(`${kmPerHour} км/ч соответствует ${(kmPerHour * 1000) / 3600} м/с`);
console.log(
  `${mPerSecond} м/с соответствует ${(mPerSecond * 3600) / 1000} км/ч`
);

// Задача 2+
console.log("---Задача №2 Прямоугольник---");
let a = 6;
let b = 10;
let c = 15;

if ((a+b)>c && (a+c)>b && (b+c)>a) {
    console.log("Треугольник существует");

    let p = a + b + c;
    let s = Math.sqrt((a + b + c) * (b + c) * (a + c) * (a + b));
    let r = p / s;

    console.log(`периметр = ${p}`);
    console.log(`Площадь  = ${s}`);
    console.log(`Соотношение ${r}`);
} else {
    console.log("Треугольник не существует");
}
//Задача 3+-

console.log("---Задача №3 Fizz-Buzz---");

var fizzBuzz

while (fizzBuzz < 0 || fizzBuzz > 100 || isNaN(fizzBuzz)) {
    fizzBuzz = prompt("Fizz-Buzz: Введите число от 0 до 100");
    intFizz = Number(fizzBuzz);
}

for (let i = 0; i <= intFizz; i++) {
  if (i % 2 == 0) {
    if (i % 5 == 0 && i != 0) {
      console.log(`${i} fizz buzz`);
    } else {
      console.log(`${i} buzz`);
    }
  } else {
    if (i % 5 == 0) {
      console.log(`${i} fizz buzz`);
    } else if (i%5 !=0) {
      console.log(`${i} fizz`);
    } else{
      console.log(`${i} вы ввели не число`);
    }
  }
} 


//Задача 4+-

console.log("---Задача №4 Елка к новому году---");

let i = 1;
let str = ">"+"\n";
while (i <= 12) {
  if (i % 2 != 0) str += "*".repeat(i) + "\n";
  else str += "#".repeat(i) + "\n";
  i++;
}
str += "||";
console.log(str);

