// Variables
$ = document.querySelector.bind(document);

const urlElement = $('#url');
const giftCodeElement = $('#giftCode');
const resultElement = $('#result');
const btnElement = $('#btn');

// Method
function request(url, giftCode) {
    const newURL = url + giftCode;

    setTimeout(function () {
        fetch(newURL)
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((data) => {
                if (data.ok) {
                    return;
                }
                return data;
            })
            .catch((error) => {
                console.log(error);
            });
    }, 5000);
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

    window.open(url + 'gift');

    if (listGiftCodes.length > 0) {
        var script = document.createElement('script');
        script.innerHTML = 'alert(123);';
        win.document.head.appendChild(script);

        listGiftCodes.forEach((giftCode) => {
            setTimeout(() => {
                request(url, giftCode);
            }, 1400);
        });
    }
});
