// ESECUZIONE LOGICA
let containerElem = document.querySelector(".container");

for (let i = 1; i <= 100; i++) {
    let textElem = i;

    const boxElem = document.createElement('div');
    containerElem.appendChild(boxElem);
    boxElem.classList = "box";

    const innerBoxElem = document.createElement("div");
    boxElem.appendChild(innerBoxElem);
    innerBoxElem.classList.add('inner-box');

    if (i % 3 === 0 && i % 5 === 0) {
        innerBoxElem.classList.add('fizzbuzz');
        textElem = "FizzBuzz";
    } else if (i % 3 === 0) {
        innerBoxElem.classList.add('fizz');
        textElem = "Fizz";
    } else if (i % 5 === 0) {
        innerBoxElem.classList.add('buzz');
        textElem = "Buzz";
    } else {
        textElem = i;
    }

    innerBoxElem.innerHTML += `${textElem}`;
    boxElem.appendChild(innerBoxElem);
}