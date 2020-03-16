// let a = 9;

// if (a !== 9) {
//     //true
//     console.log('Yes');
// }
// else {
//     console.log('No')
// };

const button = document.querySelector('button');
const input = document.querySelector('.age');

button.onclick = () => {
    let num = +input.value;
    if (num >= 16 && num < 60) {
        console.log('Welcome!!!');
    }
    else if (num > 60) {
        console.log('Are you shure?');
    }
    else {
        console.log('Access denied');
    }
}