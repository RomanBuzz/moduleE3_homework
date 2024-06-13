const arr = [0, null, NaN, 0, 1, 2, 4, "str", 3, 5];

function elementType() {
    let zero = 0, even = 0, odd = 0;
    arr.map(item => {
        if (typeof item === 'number' && !isNaN(item)) {
            if (item === 0) zero += 1;
            else if (item % 2 === 0) even += 1;
            else odd += 1;
        }
    });
    console.log('Четных элементов: ', even);
    console.log('Нечетных элементов: ', odd);
    console.log('Нулей: ', zero);
}

elementType();