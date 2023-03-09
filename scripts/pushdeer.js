const axios = require('axios');
const pushDeerKey = 'PDU19099TCUq4HLNzTQLNdkezGRPPqNJWQto9eoFc';

(async () => {
    const res = await axios.post('https://api2.pushdeer.com/message/push', null, {
        params: {
            pushkey: pushDeerKey,
            text: ['xxx', 'yyy', 'zzz'].join('\n'),
            desp: ['xxx', 'yyy', 'zzz'].join('\n'),
            type: 'text'
        }
    });
    console.log(res);
})();
