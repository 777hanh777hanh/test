// // Variables
// $ = document.querySelector.bind(document);

// const urlElement = $('#url');
// const giftCodeElement = $('#giftCode');
// const resultElement = $('#result');
// const btnElement = $('#btn');

// // Method
// function request(url, giftCode) {
//     const newURL = url + giftCode;

//     setTimeout(function () {
//         fetch(newURL)
//             .then((res) => {
//                 console.log(res);
//                 return res.json();
//             })
//             .then((data) => {
//                 if (data.ok) {
//                     return;
//                 }
//                 return data;
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }, 5000);
// }

// // Submit
// btnElement.addEventListener('click', () => {
//     const url =
//         urlElement.value.trim() ||
//         'https://sg-hkrpg-api.hoyoverse.com/' +
//             'common/apicdkey/api/' +
//             'webExchangeCdkey?t=1688100564621' +
//             '&lang=vi&game_biz=hkrpg_global' +
//             '&uid=800271421' +
//             '&region=prod_official_asia' +
//             '&cdkey=';
//     const giftCodes = giftCodeElement.value;
//     const listGiftCodes = giftCodes.trim().split(/\n| /i);
//     if (listGiftCodes.length > 0) {
//         listGiftCodes.forEach((giftCode) => {
//             setTimeout(() => {
//                 request(url, giftCode);
//             }, 1400);
//         });
//     }
// });

let flagSuccess = false;
let flagRetry = false;

function delay(t) {
    return new Promise((resolve) => setTimeout(resolve, t));
}

async function fetchAPI(url, giftCode) {
    const api = url + giftCode;
    fetch(api)
        .then((res) => res.json())
        .then((data) => {
            console.log({ code: giftCode, ...data });
            if (data.message.includes(`CD`)) {
                flagRetry = true;
            } else {
                flagRetry = false;
            }
            if (data.ok) {
                flagSuccess = true;
                return data;
            }
        });
    await delay(5000);
}

async function run() {
    for (let i = 0; i < listGift.length; ) {
        if (!flagSuccess) {
            fetchAPI(url, listGift[i]);
            await delay(0);
        } else {
            return;
        }
        if (!flagRetry) {
            i++;
        }
    }
}

const url = `CopyAPIAndRemoveGiftCode`;

const gift = `CopyGiftCode`;

const listGift = gift.trim().split(/\n| /i);

run();
