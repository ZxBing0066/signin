const axios = require('axios');
const FormData = require('form-data');
const cheerio = require('cheerio');

process.env.PUSH_DEER_KEY = 'PDU19099TCUq4HLNzTQLNdkezGRPPqNJWQto9eoFc';

process.env.LNF_COOKIE =
    'wordpress_bb63394c230f0cb38c40baead8ff58d1=mail_98821871|1678148532|s1YgnKfEmqKKGZZHspWkVx99NznrgXvWbCqP06Hc8UT|879657a3730043ea0882164645809a2f967aa52e3a44819b7590ad573c5dbb99; wordpress_sec_bb63394c230f0cb38c40baead8ff58d1=mail_98821871|1678148532|iyM092sfDjcrlUAl1rwE89bpwCVPMOwERpXn20i70rT|4f25f0f2e3b578f12596c08e127331843c680212bf0e1cb6687cababa98b374e; __51vcke__JdHuARxBAksBz0yo=a98e95eb-15a3-5507-825a-a75647fd1ca5; __51vuft__JdHuARxBAksBz0yo=1674226807640; PHPSESSID=ups83cfutbic7pbn226fsmdufv; ripro_notice_cookie=1; wordpress_logged_in_bb63394c230f0cb38c40baead8ff58d1=mail_98821871|1678148532|iyM092sfDjcrlUAl1rwE89bpwCVPMOwERpXn20i70rT|3d831e54d4c573342e9fc79b8fc810476b833e2422552af21135aca743d7b724; Hm_lvt_0136372591a51fc936d13ba1e03aeef7=1676938936; __vtins__JdHuARxBAksBz0yo={"sid": "a3b268b2-d08e-5855-844f-e92315421610", "vd": 1, "stt": 0, "dr": 0, "expires": 1677546813317, "ct": 1677545013317}; __51uvsct__JdHuARxBAksBz0yo=24; Hm_lpvt_0136372591a51fc936d13ba1e03aeef7=1677545014';

const pushDeerKey = process.env.PUSH_DEER_KEY;

(async () => {
    let result = { fail: true, message: 'fail' };
    try {
        // get user page info
        const userPage = await axios('https://xmtup.com/user', {
            headers: {
                accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,ko;q=0.6',
                'cache-control': 'max-age=0',
                'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"macOS"',
                'sec-fetch-dest': 'document',
                'sec-fetch-mode': 'navigate',
                'sec-fetch-site': 'cross-site',
                'sec-fetch-user': '?1',
                'upgrade-insecure-requests': '1',
                cookie: '__51vcke__JdHuARxBAksBz0yo=d37213df-d714-54f3-9491-d244a96343ea; __51vuft__JdHuARxBAksBz0yo=1677682338856; Hm_lvt_0136372591a51fc936d13ba1e03aeef7=1677682339; ripro_notice_cookie=1; PHPSESSID=cf1tfp456tuneq87324ksr3l6g; wordpress_logged_in_bb63394c230f0cb38c40baead8ff58d1=mail_98821871%7C1678891965%7C9y7t18y10Wu0nrtMBmAXidSvtorwaM4thOHY2Fye28D%7C48e9015af3bb941c12779bdf5078daf82851fce62880987d239d53a9312b643c; __vtins__JdHuARxBAksBz0yo=%7B%22sid%22%3A%20%22259aa62f-e990-5084-98c2-2a49fdb8b114%22%2C%20%22vd%22%3A%201%2C%20%22stt%22%3A%200%2C%20%22dr%22%3A%200%2C%20%22expires%22%3A%201678148267098%2C%20%22ct%22%3A%201678146467098%7D; __51uvsct__JdHuARxBAksBz0yo=14; Hm_lpvt_0136372591a51fc936d13ba1e03aeef7=1678146467'
            },
            referrerPolicy: 'strict-origin-when-cross-origin',
            method: 'GET'
        });

        // const userPageContent = await userPage.text();
        const userPageContent = await userPage.data;

        // get nonce
        const $ = cheerio.load(userPageContent);
        const nonce = $('.go-user-qiandao').data('nonce');

        // call sign in
        const res = await axios({
            url: 'https://xmtup.com/wp-admin/admin-ajax.php',
            headers: {
                accept: 'application/json, text/javascript, */*; q=0.01',
                'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,ko;q=0.6',
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"macOS"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin',
                'x-requested-with': 'XMLHttpRequest',
                cookie: 'wordpress_bb63394c230f0cb38c40baead8ff58d1=mail_98821871%7C1678891965%7CeksKJLqzmblbiQqS0xHg6zBFFe0YKS63iR81GUD2NGb%7C9cabc3e0315dd8ec68e3ff0e5c32290db8e0fc4953517fe1da182fc01a6405e6; wordpress_sec_bb63394c230f0cb38c40baead8ff58d1=mail_98821871%7C1678891965%7C9y7t18y10Wu0nrtMBmAXidSvtorwaM4thOHY2Fye28D%7C41bf173f725f03e7208253bb463a62d2ba06b13277b347ca449d3699b25069b5; __51vcke__JdHuARxBAksBz0yo=d37213df-d714-54f3-9491-d244a96343ea; __51vuft__JdHuARxBAksBz0yo=1677682338856; Hm_lvt_0136372591a51fc936d13ba1e03aeef7=1677682339; ripro_notice_cookie=1; PHPSESSID=cf1tfp456tuneq87324ksr3l6g; wordpress_logged_in_bb63394c230f0cb38c40baead8ff58d1=mail_98821871%7C1678891965%7C9y7t18y10Wu0nrtMBmAXidSvtorwaM4thOHY2Fye28D%7C48e9015af3bb941c12779bdf5078daf82851fce62880987d239d53a9312b643c; __51uvsct__JdHuARxBAksBz0yo=7; __vtins__JdHuARxBAksBz0yo=%7B%22sid%22%3A%20%22d21a59c3-124b-50b1-baea-151fe1696527%22%2C%20%22vd%22%3A%203%2C%20%22stt%22%3A%20704073%2C%20%22dr%22%3A%203615%2C%20%22expires%22%3A%201677849917186%2C%20%22ct%22%3A%201677848117186%7D; Hm_lpvt_0136372591a51fc936d13ba1e03aeef7=1677848117',
                Referer: 'https://xmtup.com/user',
                'Referrer-Policy': 'strict-origin-when-cross-origin'
            },
            data: `action=user_qiandao&nonce=${nonce}`,
            method: 'POST',
            mode: 'cors',
            withCredentials: true,
            credentials: 'include'
        });
        // generate result
        if (res.data.status == '1') {
            result = {
                message: res.data.msg
            };
        } else {
            result = {
                fail: true,
                message: JSON.stringify(res.data)
            };
        }
    } catch (error) {
        result = {
            fail: true,
            message: error + ''
        };
    }

    if (pushDeerKey) {
        try {
            const res = await axios.post('https://api2.pushdeer.com/message/push', null, {
                params: {
                    pushkey: pushDeerKey,
                    text: `灵鸟赋签到 - ${result.fail ? '失败' : '成功'}`,
                    desp: result.message,
                    type: 'text'
                }
            });
            if (res.data.code !== 0) {
                console.error(JSON.stringify(res.data));
            }
        } catch (error) {
            console.log(result);
            console.error(error);
        }
    } else {
        console.log(result);
    }
})();
