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
// Adriver
setTimeout(function() {
    var script = document.createElement('script');
    script.src = 'https://content.adriver.ru/AdRiverFPS.js';
    script.type ='text/javascript';
    script.defer = true;
    document.getElementsByTagName('head').item(0).appendChild(script);

    !function(e,t){function r(e,t,r){t=t||"&",r=r||"=";var o=[];for(var n in e)e.hasOwnProperty(n)&&o.push(n+r+encodeURIComponent(e[n]));return o.join(t)}function o(e){var t={};if(e){var r=e.split("&");for(var o in r)if(r.hasOwnProperty(o)){var n=r[o].split("=");void 0!==n[0]&&void 0!==n[1]&&(t[n[0]]=decodeURIComponent(n[1]))}}return t}function n(e){return(/^\/\//.test(e)?"https:":"")+e}function i(e,t){var r=e.cookie.match("(^|;) ?"+t+"=([^;]*)(;|$)");return r?decodeURIComponent(r[2]):null}var d,a=document;"undefined"==typeof AdriverCounter&&(AdriverCounter=((d=function(e,t,r){var o=document.domain;if(!(this instanceof AdriverCounter))return d.items[e];d.urlParams=d.getUrlParameters(window.location.search.substring(1)),void 0!==d.urlParams.adrclid&&(t.fsid=d.urlParams.adrclid),null!==d.getCookie(document,"adrcid")&&(t.cid=d.getCookie(document,"adrcid")),r&&r.id&&null!==d.getCookie(document,r.id)&&(t.suid=o+"_"+encodeURIComponent(d.getCookie(document,r.id))),r&&r.gid1?t.gid1=r.gid1:null!==d.getCookie(document,"_ga")&&(t.gid1=encodeURIComponent(d.getCookie(document,"_ga"))),r&&r.yid1?t.yid1=r.yid1:null!==d.getCookie(document,"_ym_uid")&&(t.yid1=encodeURIComponent(d.getCookie(document,"_ym_uid"))),t.loc=encodeURIComponent(window.location.href),e=d.items.length||1,d.items[e]=this,t.ph=e,t.custom&&(t.custom=d.toQueryString(t.custom,";")),d.request(d.toQueryString(t))}).httplize=n,d.loadScript=function(e){try{var t=a.getElementsByTagName("head")[0],r=a.createElement("script");r.setAttribute("type","text/javascript"),r.setAttribute("referrerpolicy","no-referrer-when-downgrade"),r.setAttribute("charset","windows-1251"),r.setAttribute("src",e.split("![rnd]").join(Math.round(1e6*Math.random()))),r.onreadystatechange=function(){/loaded|complete/.test(this.readyState)&&(r.onload=null,t.removeChild(r))},r.onload=function(){t.removeChild(r)},t.insertBefore(r,t.firstChild)}catch(e){}},d.toQueryString=r,d.request=function(e){var t=d.toQueryString(d.defaults);d.loadScript(d.redirectHost+"/cgi-bin/erle.cgi?"+e+"&rnd=![rnd]"+(t?"&"+t:""))},d.getUrlParameters=o,d.getCookie=i,d.items=[],d.defaults={tail256:document.referrer||"unknown"},d.redirectHost="https://ad.adriver.ru",d.urlParams={},d)),new AdriverCounter(0,e,t)}
    ({ sid: 223989, bt: 62 }, { id: "", gid1: "", yid1: "" });
}(),0)
// SberVisor
setTimeout(function() {
    var script = document.createElement('script');
    script.src = 'https://www.sberbank.com/portalserver/static/features/%5BBBHOST%5D/Gtm/sv152.js';
    script.type ='text/javascript';
    script.defer = true;
    document.getElementsByTagName('head').item(0).appendChild(script);
    script.onload = function(){
    window.RetailRtdm = new SberVisor({ url: 'https://svi.online.sberbank.ru/metrics/400c6d7e0a', buffer: 1, apiKey: '400c6d7e0acb128da4b10d1579c034f9f92e48f43b4973374e86feb025d9408a' })
    window.CorpRtdm = new SberVisor({ url: 'https://svi.online.sberbank.ru/metrics/141f772ec0', buffer: 1, apiKey: '400c6d7e0acb128da4b10d1579c034f9f92e48f43b4973374e86feb025d9408a' })
}}(),0)
// Rambler
setTimeout((function (w, d, c) {
    (w[c] = w[c] || []).push(function () { var options = { project: 7625476, }; try { w.top100Counter = new top100(options); } catch (e) { } });
    var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; 
    s.src = "https://www.sberbank.com/portalserver/static/features/%5BBBHOST%5D/Gtm/top100.js";
    if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
})(window, document, "_top100q"),0)
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

    RetailRtdm.push({ eventCategory: category, eventAction: 'event', eventType: 'pageview', properties: user_params })
    CorpRtdm.push({ eventCategory: category, eventAction: 'event', eventType: 'pageview', properties: user_params })
    dmpkitdl.push(Object.assign(eventData, user_params))
    if (typeof Ya != "undefined") { var yaCounter_ID = []; if (Ya._metrika) { var keys = Object.keys(Ya._metrika.counters); for (i = 0; i < Object.keys(Ya._metrika.counters).length; i++) { yaCounter_ID.push("yaCounter" + Object.keys(Ya._metrika.counters)[i].split(":")[0]) } yaCounter_ID.forEach(function (key) { window[key].params((category), user_params); }) }}
}, 1500);
// DataLayer
dataLayer = [];
(dataLayer.push = function (cat, action, label) {
    if (label != undefined) {
    if (typeof CorpRtdm != "undefined") { CorpRtdm.push({ eventCategory: category, eventAction: (category + "-_-" + action + "-_-" + label).slice(0, 1024), value: label.slice(0, 254), eventType: ('event_' + action), properties: { hitPageHostName: window.location.href, eventPageName: document.title, }, }) }
    if (typeof RetailRtdm != "undefined") { RetailRtdm.push({ eventCategory: category, eventAction: (category + "-_-" + action + "-_-" + label).slice(0, 1024), value: label.slice(0, 254), eventType: ('event_' + action), properties: { hitPageHostName: window.location.href, eventPageName: document.title, }, }) }
    if (typeof dmpkitdl != "undefined") { dmpkitdl.push({ 'event': "sber_event", 'category': category, 'action': action, 'label': label, 'container_id': '2js', }) }
    if (typeof t3122244 != "undefined") { t3122244.sendCustomVars({ 'category': category, 'action': action, 'label': label, }); }
    var yaParams = {}; yaParams[category] = {}; yaParams[category][action] = label; if (typeof Ya != "undefined") { var yaCounter_ID = []; if (Ya._metrika) { for (i = 0; i < Object.keys(Ya._metrika.counters).length; i++) { yaCounter_ID.push("yaCounter" + Object.keys(Ya._metrika.counters)[i].split(":")[0]) } yaCounter_ID.forEach(function (key) { window[key].reachGoal((category + "_" + action + "_" + label), yaParams); }) }}}
})()
