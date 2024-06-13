function everySecondOutput(num1, num2) {
    let counter = num1;
    let intervalId = setInterval(() => {
        if (counter <= num2) {
            console.log(counter);
            counter++;
        } else clearInterval(intervalId);
    }, 1000);
}

everySecondOutput(5, 15);