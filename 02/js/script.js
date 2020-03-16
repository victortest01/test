let inputIn = document.querySelector('.input-in');
let button = document.querySelector('button');
let div = document.querySelector('.out');

button.onclick = function () {
    // console.log("Done");
    let b = +inputIn.value;
    console.log(b + 10);
    div.innerHTML = b;
    inputIn.value = ' ';


}