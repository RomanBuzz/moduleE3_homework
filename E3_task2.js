function primeNumbers(num) {
    if (!Number.isInteger(num)) return "Значение не является целым числом!";
    else if (num > 1000) return "Значение больше 1000!";
    else if (num >= 1 && num % num == 0) return "Число является простым!";
    else return "Число не является простым!";
}

console.log(primeNumbers("str"));
console.log(primeNumbers(1.5));
console.log(primeNumbers(-1));
console.log(primeNumbers(0));
console.log(primeNumbers(1));
console.log(primeNumbers(3));