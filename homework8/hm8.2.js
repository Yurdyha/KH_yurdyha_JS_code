const name = prompt('як Вас звати?');

const name = 'Ігор';

switch (name) {
    case 'Ігор':
    case 'Сергій': {
        alert('Привіт адміне');
        break;
    }
    case 'Паша': {
        alert('Привіт хворий');
        break;
    }
    case 'Оля':
    case 'Оксанв': {
        alert('Вітання вам');
        break;
    }  
    default: {
        alert('Посторонім вхід заборонено, коронавірус!')
    }  
}