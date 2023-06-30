// Variables
$ = document.querySelector.bind(document);

const urlElement = $('#url');
const giftCodeElement = $('#giftCode');
const resultElement = $('#result');
const btnElement = $('#btn');

// Method

// Submit
btnElement.addEventListener('click', () => {
    console.log(urlElement.value);
});
