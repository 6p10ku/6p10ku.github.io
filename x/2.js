var date = new Date; date.setDate(date.getDate() + 30);
var cookie_path = ";domain=." + location.hostname.split('.').reverse()[1] + '.' + location.hostname.split('.').reverse()[0] + "; path=/; expires=" + date.toUTCString();
var custom_uid = Date.now().toString() + Math.floor(Math.random() * (600000000 - 100000000 + 1) + 100000000).toString();

var HREF = document.location;
var title = document.title || '';
var referrer = document.referrer || '';
var useragent = window.navigator.userAgent || '';

//channelName + categoryName + productName
if (HREF.hostname == 'www.sberbank.ru' || HREF.hostname == 'sberbank.ru') { 
    var channelName = 'SITE_' 
} else { 
    var channelName = '' 
}

if (HREF.href.search('legal|s_m_business|onlinecredit|start|corporateclients|mybestfriend|svoedelo') > 0) { 
    var categoryName = 'categoryName'  /// ??????
} else if (HREF.href.search('person|common/img/uploaded|sberbank.ru/promo') > 0) { 
    var categoryName = 'Person_' 
} else if (HREF.href.search('legal|s_m_business|person|start|common/img/uploaded|onlinecredit|corporateclients|mybestfriend|svoedelo|sberbank.ru/promo') < 0) { 
    var categoryName = 'Other_' // лишний этап
} else { 
    var categoryName = 'Other_' 
}

if (HREF.hostname == 'www.sberbank.ru' || HREF.hostname == 'sberbank.ru') { // com ???
    var productName = HREF.pathname.split('/').join('.').replace(/.ru.person.|.ru.s_m_business.|.ru.legal.|.common.img.uploaded.redirected.|.common.img.uploaded./, '').split('?')[0].split('#')[0] 
} else { 
    var productName =  HREF.hostname + HREF.pathname.split('/').join('.').split('?')[0].split('#')[0] 
}

var category = channelName + categoryName + productName;
var href_params = (HREF.href.split('?').length > 1 ? HREF.href.split('?')[1].split('&') : '') || [];
var utm_params_arr = href_params.filter(v => v.toLowerCase().search('^utm_source=|^utm_medium=|^utm_campaign=|^utm_content=|^utm_term=') !== -1) || [];

function getCookie(name) {var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)')); if (match) { return match[2] } else { return '' };};
function createCookie(name) {document.cookie = name + cookie_path;}

// UTM
if ((typeof(referrer) != "undefined") && (referrer.search('google')>=0 && referrer.search('google')<=15)) {var srch = 'google'};
if ((typeof(referrer) != "undefined") && (referrer.search('yandex')>=0 && referrer.search('yandex')<=15)) {var srch = 'yandex'};

if (utm_params_arr.length == 0 && (srch)) {
    createCookie("utm_source=" + srch)
    createCookie("utm_medium=" + 'organic')
    createCookie("utm_campaign=" + '')
    createCookie("utm_content=" + '')
} else if (utm_params_arr.length > 0) {
    utm_params_arr.forEach(v =>
        ((v.search('^utm_source=') !== -1) ? createCookie(v) : v) &&
        ((v.search('^utm_medium=') !== -1) ? createCookie(v) : v) &&
        ((v.search('^utm_campaign=') !== -1) ? createCookie(v) : v) &&
        ((v.search('^utm_content=') !== -1) ? createCookie(v) : v) &&
        ((v.search('^utm_term=') !== -1) ? createCookie(v) : v) 
    )
}

// если куки нет - устанавливаем сгенерированное значение
var user_id = ["_ym_uid", "___dmpkit___", "top100_id", "_sv", "_sa", "_ga"].map(v => (getCookie(v) === '') ? createCookie(v + "=" + custom_uid) : '');

// таймер для сбора всех аналитических данных
setTimeout(function() {
var user_uid = [getCookie("_ym_uid"), getCookie("_sv"), getCookie("___dmpkit___"), getCookie("top100_id"), getCookie("adriver_uid")]

// DataLayer
var dataLayer = [];
(dataLayer.push = function (cat, action, label) {
        var request = new XMLHttpRequest();
        request.open('POST', 'https://dmp.sbermarketing.ru/?dmpkit_cid=9064fc6c-76fe-4a6d-aea6-92ef3f343257&dmpkit_tgt=2js&dmpkit_ctid=f940199e-3e2e-4fac-a636-01f1f5bf88e9&dmpkit_evn=sber_event&dmpkit_p=tm', true);
        var json = JSON.stringify({
            "uids": [[10008, 10031, user_uid[2]], [10008, 10037, user_uid[3]], [10008, 10041, user_uid[1]],  [10008, 10055, user_uid[5]], [10008, 10060, user_uid[0]]], 
            "eventAttrs": [[301, cat], [302, action], [303, label],
            [10006, useragent],
            [10059, getCookie('utm_source')], [10060, getCookie('utm_medium')], [10061, getCookie('utm_campaign')], [10062, getCookie('utm_content')], [10063, getCookie('utm_term')],
            [10067, title], [10070, referrer], [10071, HREF.href]]
            });
            request.send(json);
})(category, 'pageview', 'pageview')
},100)
