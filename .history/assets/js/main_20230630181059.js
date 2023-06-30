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
    const giftCodes = giftCodeElement.value;
    console.log(giftCodes);
    // const listGiftCodes = giftCodes.trim().split(/\n| /i);
    // console.log(listGiftCodes);
    // if (listGiftCodes.length > 0) {
    //     listGiftCodes.array.forEach((giftCode) => {
    //         console.log(request(url, giftCode));
    //     });
    // }
});
