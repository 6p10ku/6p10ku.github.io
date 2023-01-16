var date = new Date; date.setDate(date.getDate() + 30);
//var cookie_path = ";domain=." + location.hostname.split('.').reverse()[1] + '.' + location.hostname.split('.').reverse()[0] + "; path=/; expires=" + date.toUTCString();
var cookie_path = ";domain=." + '6p10ku.github.io' + '.' + location.hostname.split('.').reverse()[0] + "; path=/; expires=" + date.toUTCString();
var custom_uid = Date.now().toString() + Math.floor(Math.random() * (600000000 - 100000000 + 1) + 100000000).toString();
var url__1 = document.location;
var title__1 = document.title || '';
var description__1 = 'smartlink_code/2.js';
//var description__1 = document.querySelector('meta[name="description"]').content || '';
var referrer__1 = document.referrer || '';
var agent__1 = window.navigator.userAgent || '';
var url_params = (url__1.href.split('?').length > 1 ? url__1.href.split('?')[1].split('&') : '') || [];
var utm_params_arr = url_params.filter(v => v.toLowerCase().search('utm_') !== -1) || [];

// Cookie
function getCookie(name) {var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)')); if (match) { return match[2] } else { return '' };};
function createCookie(name, value) {document.cookie = name + "=" + value + cookie_path;}
if (getCookie("_ym_uid") === '') {createCookie("_ym_uid",custom_uid)}
if (getCookie("___dmpkit___") === '') {createCookie("___dmpkit___",custom_uid)}
if (getCookie("top100_id") === '') {createCookie("top100_id",custom_uid)}
if (getCookie("_sv") === '') {createCookie("_sv",custom_uid)}
if (getCookie("_sa") === '') {createCookie("_sa",custom_uid)}
if (getCookie("_ga") === '') {createCookie("_ga", custom_uid)}

// UTM
if ((typeof(referrer__1) != "undefined") && (referrer__1.search('google')>=0 && referrer__1.search('google')<=15)) {var gtmOrgEngn = 'google'};
if ((typeof(referrer__1) != "undefined") && (referrer__1.search('yandex')>=0 && referrer__1.search('yandex')<=15)) {var gtmOrgEngn = 'yandex'};
if (url__1.href.search('utm_source') < 0 && (gtmOrgEngn)) {
    createCookie("utm_source",gtmOrgEngn); createCookie("utm_medium","organic"); createCookie("utm_campaign",""); createCookie("utm_content","");
} else {
    utm_params_arr.forEach(v =>
    (v.search('utm_source') != -1 ? createCookie("utm_source",v.split('=')[1]) : '') || (v.search('utm_medium') != -1 ? createCookie("utm_medium",v.split('=')[1]) : '') || (v.search('utm_campaign') != -1 ? createCookie("utm_campaign",v.split('=')[1]) : '') || (v.search('utm_content') != -1 ? createCookie("utm_content",v.split('=')[1]) : '') || (v.search('utm_term') != -1 ? createCookie("utm_term", v.split('=')[1]) : ''))
}
//channelName + categoryName + productName
if (url__1.hostname == 'www.sberbank.ru' || 'sberbank.ru') { var channelName = 'SITE_' } else { var channelName = '' }
if (url__1.href.search('legal|s_m_business|onlinecredit|start|corporateclients|mybestfriend|svoedelo') > 0) { var categoryName = 'categoryName' } else if (url__1.href.search('person|common/img/uploaded|sberbank.ru/promo') > 0) { var categoryName = 'Person_' } else if (url__1.href.search('legal|s_m_business|person|start|common/img/uploaded|onlinecredit|corporateclients|mybestfriend|svoedelo|sberbank.ru/promo') < 0) { var categoryName = 'Other_' } else { var categoryName = 'Other_' }
if (url__1.host == "www.sberbank.ru") { var productName = url__1.pathname.split('/').join('.').replace(/.ru.person.|.ru.s_m_business.|.ru.legal.|.common.img.uploaded.redirected.|.common.img.uploaded./, '').split('?')[0].split('#')[0] } else { var productName =  url__1.hostname.replace(/https:\/\/|http:\/\/|www./, '') + url__1.pathname.split('/').join('.').split('?')[0].split('#')[0] }
var category__1 = channelName + categoryName + productName;

// json
// var json = JSON.stringify({
// "uids": [[10008, 10033, getCookie("_ga")], [10008, 10041, getCookie("_sv")], [10008, 10037, getCookie("top100_id")], [10008, 10031, getCookie("___dmpkit___")], [10008, 10060, getCookie("_ym_uid")], [10008, 10055, getCookie("adriver_uid")]],
// "eventAttrs": [[301, category__1], [302, "pageview"], [303, "pageview"],
// [10059, getCookie('utm_source')], [10060, getCookie('utm_medium')], [10061, getCookie('utm_campaign')], [10062, getCookie('utm_content')], [10063, getCookie('utm_term')],
// [10006, agent__1],[10067, title__1], [10069, description__1], [10070, referrer__1], [10071, url__1.href]]
// });

// request DMP
setTimeout(function () {
var request_dmp = new XMLHttpRequest();
//request_dmp.open('POST', 'http://dmp.sbermarketing.ru/?dmpkit_cid=9064fc6c-76fe-4a6d-aea6-92ef3f343257&dmpkit_tgt=2js&dmpkit_ctid=f940199e-3e2e-4fac-a636-01f1f5bf88e9', true);
request_dmp.open('POST', 'https://dmp.sbermarketing.ru/?dmpkit_cid=9064fc6c-76fe-4a6d-aea6-92ef3f343257&dmpkit_tgt=2js&dmpkit_ctid=f940199e-3e2e-4fac-a636-01f1f5bf88e9&dmpkit_evn=sber_event&dmpkit_p=tm', true);

var _ga__1 = getCookie("_ga"), _sv__1 = getCookie("_sv"), top100_id__1 = getCookie("top100_id"), ___dmpkit_____1 = getCookie("___dmpkit___"), _ym_uid__1 = getCookie("_ym_uid"), adriver_uid__1 = getCookie("adriver_uid");

var json = JSON.stringify({
    "uids": [[10008, 10033, _ga__1], [10008, 10031, ___dmpkit_____1], [10008, 10037, top100_id__1], [10008, 10041, _sv__1],  [10008, 10055, adriver_uid__1], [10008, 10060, _ym_uid__1]], 
    "eventAttrs": [[301, category__1], [302, "pageview"], [303, "pageview"],
    [10006, agent__1],
    [10059, getCookie('utm_source')], [10060, getCookie('utm_medium')], [10061, getCookie('utm_campaign')], [10062, getCookie('utm_content')], [10063, getCookie('utm_term')],
    [10067, title__1], [10069, description__1], [10070, referrer__1], [10071, url__1.href]]
    });
    request_dmp.send(json);
}, 0)

// var request_ym = new XMLHttpRequest();
// request_ym.open('GET', 'https://mc.yandex.ru/watch/89867636/1?wmode=7&page-url=' + encodeURIComponent(url__1.href) + '&site-info=' + ym_sessions + '&browser-info=' + encodeURIComponent('t:' + title__1), false);
// request_ym.send();
// request_ym.open('GET', 'https://mc.yandex.ru/watch/89867636/1?wmode=7&page-url=' + encodeURIComponent(url__1.href) + '&browser-info=' + encodeURIComponent('pv:1:t:' + title__1), false);
// request_ym.send();




