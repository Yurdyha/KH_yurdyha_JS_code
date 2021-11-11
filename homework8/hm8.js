const number = prompt('Введіть число від 1 до 100')

let x = number;
if (x == 1) {
    console.log('1 стіл');
} else if (x >= 2 && x <=100) {
    console.log(x + 'столів')
} else {
    console.log('іди в дупу')
}


