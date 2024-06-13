const naturalNumbersExponentiation = (x, n) => {
    if (Number.isInteger(parseInt(x)) && Number.isInteger(parseInt(n)) && x > 0 && n > 0) return x ** n;
    else return "Ошибка! Необходимо ввести 2 натуральных числа - т.е. целые положительные числа!";
}

let x = prompt("Введите натурально число 'x', которое будем возводить в степень:");
let n = prompt("Введите натурально число 'n' - степень, в которую возводим число 'x':");
console.log("Результат: ", naturalNumbersExponentiation(x, n));