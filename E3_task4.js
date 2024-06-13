function everySecondOutput(num1, num2) {
    let counter = num1;
    let timerId = setInterval(() => {
        if (counter <= num2) {
            console.log(counter);
            counter++;
        } else clearInterval(timerId);
    }, 1000);
}

everySecondOutput(5, 15);