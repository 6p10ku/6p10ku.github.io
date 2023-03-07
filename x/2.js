// DMP
setTimeout((function (w, d, s, l, h, m) {
    w[l] = w[l] || []
    w[l].push({ 'tm.start': new Date().getTime(), event: 'tm.js' })
    var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dmpkitdl' ? '&l=' + l : ''
    j.async = true
    j.src = 'https://www.sberbank.com/portalserver/static/features/%5BBBHOST%5D/Gtm/tm.js'
f.parentNode.insertBefore(j, f)})(window, document, 'script', 'dmpkitdl', 'f940199e-3e2e-4fac-a636-01f1f5bf88e9', 'dmp.sbermarketing.ru'),0)
// YM
setTimeout((function (d, w, c) {
    (w[c] = w[c] || []).push(function () {
    try {
    w.yaCounter1175048 = new Ya.Metrika({ id: 1175048, triggerEvent: true, clickmap: false, trackLinks: false, trackHash: true, accurateTrackBounce: true });
    w.yaCounter89867636 = new Ya.Metrika({ id: 89867636 });
    w.yaCounter31643078 = new Ya.Metrika({ id: 31643078 });
    w.yaCounter34972370 = new Ya.Metrika({ id: 34972370, clickmap: false, trackLinks: false, accurateTrackBounce: true, trackHash: true, ut: "noindex" });
    } catch (e) { }
    }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
})(document, window, "yandex_metrika_callbacks"),0)
// Function
    function channelNameAS() { if (document.location.hostname == 'www.sberbank.ru' || 'sberbank.ru') { return "SITE_" } };
    function categoryNameAS() { if (document.location.href.search('legal|s_m_business|onlinecredit|start|corporateclients|mybestfriend|svoedelo') > 0) { var categoryNameAS = 'Corporate_' }; if (document.location.href.search('person|common/img/uploaded|sberbank.ru/promo') > 0) { var categoryNameAS = 'Person_' }; if (document.location.href.search('legal|s_m_business|person|start|common/img/uploaded|onlinecredit|corporateclients|mybestfriend|svoedelo|sberbank.ru/promo') < 0) { var categoryNameAS = 'Other_' }; return categoryNameAS; };
    function productNameAS() { if (document.location.host == "www.sberbank.ru") { return document.location.pathname.split('/').join('.').replace(/.ru.person.|.ru.s_m_business.|.ru.legal.|.common.img.uploaded.redirected.|.common.img.uploaded./, '').split('?')[0].split('#')[0] } else { return document.location.hostname.replace(/https:\/\/|http:\/\/|www./, '') + document.location.pathname.split('/').join('.').split('?')[0].split('#')[0] }};
    function getCookie(name) { var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)')); if (match) { return match[2] } else { return '' }; };
    var date = new Date; date.setDate(date.getDate() + 30);
    var category = channelNameAS() + categoryNameAS() + productNameAS(), hitPageHostName = window.location.href, eventPageName = document.title, gtmRefer = document.referrer, window_navigator_userAgent = window.navigator.userAgent;
// UTM
    var url_params = (document.location.href.split('?').length > 1 ? document.location.href.split('?')[1].split('&') : '') || [];
    var utm_params_arr = url_params.filter(v => v.toLowerCase().search('utm_') !== -1) || [];
    if ((typeof(gtmRefer) != "undefined") && (gtmRefer.search('google')>=0 && gtmRefer.search('google')<=15)) {var gtmOrgEngn = 'google'};
    if ((typeof(gtmRefer) != "undefined") && (gtmRefer.search('yandex')>=0 && gtmRefer.search('yandex')<=15)) {var gtmOrgEngn = 'yandex'};
    if (document.location.href.search('utm_source') < 0 && (gtmOrgEngn)) {
    document.cookie = "utm_source=" + gtmOrgEngn + ";domain=." + location.hostname.split('.').reverse()[1] + '.' + location.hostname.split('.').reverse()[0] + "; path=/; expires=" + date.toUTCString();
    document.cookie = "utm_medium=" + 'organic' + ";domain=." + location.hostname.split('.').reverse()[1] + '.' + location.hostname.split('.').reverse()[0] + "; path=/; expires=" + date.toUTCString();
    document.cookie = "utm_campaign=" + '' + ";domain=." + location.hostname.split('.').reverse()[1] + '.' + location.hostname.split('.').reverse()[0] + "; path=/; expires=" + date.toUTCString();
    document.cookie = "utm_content=" + '' + ";domain=." + location.hostname.split('.').reverse()[1] + '.' + location.hostname.split('.').reverse()[0] + "; path=/; expires=" + date.toUTCString();
    } else {
    utm_params_arr.forEach(v =>
    (v.search('utm_source') != -1 ? document.cookie = "utm_source=" + v.split('=')[1] + ";domain=." + location.hostname.split('.').reverse()[1] + '.' + location.hostname.split('.').reverse()[0] + "; path=/; expires=" + date.toUTCString() : '') ||
    (v.search('utm_medium') != -1 ? document.cookie = "utm_medium=" + v.split('=')[1] + ";domain=." + location.hostname.split('.').reverse()[1] + '.' + location.hostname.split('.').reverse()[0] + "; path=/; expires=" + date.toUTCString() : '') ||
    (v.search('utm_campaign') != -1 ? document.cookie = "utm_campaign=" + v.split('=')[1] + ";domain=." + location.hostname.split('.').reverse()[1] + '.' + location.hostname.split('.').reverse()[0] + "; path=/; expires=" + date.toUTCString() : '') ||
    (v.search('utm_content') != -1 ? document.cookie = "utm_content=" + v.split('=')[1] + ";domain=." + location.hostname.split('.').reverse()[1] + '.' + location.hostname.split('.').reverse()[0] + "; path=/; expires=" + date.toUTCString() : '') ||
    (v.search('utm_term') != -1 ? document.cookie = "utm_term=" + v.split('=')[1] + "; path=/; expires=" + date.toUTCString() : '')
    )}
// Params
setTimeout(function () {
    var user_params = new Object({ hitPageHostName: hitPageHostName, eventPageName: eventPageName, referrer: gtmRefer, ymUID: getCookie('_ym_uid'), dmpkit: getCookie('___dmpkit___'), Cookie_sa: getCookie('_sa'), Cookie_sv: getCookie('_sv'), tmr_lvid: getCookie('top100_id'), adrcid: getCookie('adrcid'),window_navigator_userAgent: window_navigator_userAgent })
    var eventData = { 'event': 'tm.js', 'category': 'pageview', 'action': 'pageview', 'label': 'pageview', 'container_id': 'GTM-NRDXVQ', }
    dmpkitdl.push(Object.assign(eventData, user_params))
    if (typeof Ya != "undefined") { var yaCounter_ID = []; if (Ya._metrika) { var keys = Object.keys(Ya._metrika.counters); for (i = 0; i < Object.keys(Ya._metrika.counters).length; i++) { yaCounter_ID.push("yaCounter" + Object.keys(Ya._metrika.counters)[i].split(":")[0]) } yaCounter_ID.forEach(function (key) { window[key].params((category), user_params); }) }}
}, 1500);
// DataLayer
dataLayer = [];
(dataLayer.push = function (cat, action, label) {
    if (label != undefined) {
    if (typeof dmpkitdl != "undefined") { dmpkitdl.push({ 'event': "sber_event", 'category': category, 'action': action, 'label': label, 'container_id': '2js', }) }
    var yaParams = {}; yaParams[category] = {}; yaParams[category][action] = label; if (typeof Ya != "undefined") { var yaCounter_ID = []; if (Ya._metrika) { for (i = 0; i < Object.keys(Ya._metrika.counters).length; i++) { yaCounter_ID.push("yaCounter" + Object.keys(Ya._metrika.counters)[i].split(":")[0]) } yaCounter_ID.forEach(function (key) { window[key].reachGoal((category + "_" + action + "_" + label), yaParams); }) }}}
})()
