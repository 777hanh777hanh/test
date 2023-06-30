// Variables
$ = document.querySelector.bind(document);

const urlElement = $('#url');
const giftCodeElement = $('#giftCode');
const resultElement = $('#result');
const btnElement = $('#btn');

// Method
function request(url, giftCode) {
    const newURL = url + giftCode;
    fetch(newURL, {
        credentials: 'same-origin',
    });
}

// Submit
btnElement.addEventListener('click', () => {
    const url = urlElement.value;
    const giftCodes = giftCodeElement.value;
    const listGiftCodes = giftCodes.trim().split(/\n| /i);
    console.log(listGiftCodes);
    if (listGiftCodes.length > 0) {
        listGiftCodes.forEach((giftCode) => {
            request(url, giftCode);
        });
    }
});
