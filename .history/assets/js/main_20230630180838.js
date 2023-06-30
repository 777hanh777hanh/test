// Variables
$ = document.querySelector.bind(document);

const urlElement = $('#url');
const giftCodeElement = $('#giftCode');
const resultElement = $('#result');
const btnElement = $('#btn');

// Method
function request(url, giftCode) {
    const newURL = url + giftCode;
    return newURL;
    fetch(url, {
        credentials: 'same-origin',
    });
}

// Submit
btnElement.addEventListener('click', () => {
    const url = urlElement.value;
    const giftCodes = giftCodeElement.innerText;
    const listGiftCode = giftCodes.trim().split(/\n| /i);
    if (listGiftCode.length > 0) {
        listGiftCode.array.forEach((giftCode) => {
            console.log(request(url, giftCode));
        });
    }
});
