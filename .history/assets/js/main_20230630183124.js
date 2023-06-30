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
        mode: 'same-origin',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        });
}

// Submit
btnElement.addEventListener('click', () => {
    const url =
        urlElement.value.trim() ||
        'https://sg-hkrpg-api.hoyoverse.com/' +
            'common/apicdkey/api/' +
            'webExchangeCdkey?t=1688100564621' +
            '&lang=vi&game_biz=hkrpg_global' +
            '&uid=800271421' +
            '&region=prod_official_asia' +
            '&cdkey=';
    const giftCodes = giftCodeElement.value;
    const listGiftCodes = giftCodes.trim().split(/\n| /i);
    console.log(listGiftCodes);
    if (listGiftCodes.length > 0) {
        listGiftCodes.forEach((giftCode) => {
            request(url, giftCode);
        });
    }
});
