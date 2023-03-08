// 2.js vars
var date = new Date; date.setDate(date.getDate() + 30);
//var cookie_path = ';domain=.' + location.hostname.split('.').reverse()[1] + '.' + location.hostname.split('.').reverse()[0] + '; path=/; expires=' + date.toUTCString();
var cookie_path = ';domain=.' + '6p10ku.github.io' +'; path=/; expires=' + date.toUTCString();
var custom_uid = Date.now().toString() + Math.floor(Math.random() * (600000000 - 100000000 + 1) + 100000000).toString();

//проверка на utm в web_link -- если есть, то используем их как основу

if (web_link_desk.search('utm_source=')>0){
    var url_params = (web_link_desk.split('?').length > 1 ? web_link_desk.split('?')[1].split('&') : '') || []
} else {var url_params = (document.location.href.split('?').length > 1 ? document.location.href.split('?')[1].split('&') : '') || []}



var utm_params_arr = url_params.filter(v => v.toLowerCase().search('utm_') !== -1) || [];


// global func
function getCookie(name) {var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)')); if (match) { return match[2] } else { return '' };};
function createCookie(name, value) {document.cookie = name + '=' + value + cookie_path;}
function check_platform() { if (/android/gi.test(navigator.userAgent)) { return 'android'; } else if (/iphone|ipod/gi.test(navigator.userAgent)) { return 'iPhone'; } else {return 'unknown'; }};
var platform = check_platform();


// проверяем и ставим куки систем

var cid = [getCookie('_ym_uid'), getCookie('_sv'), getCookie('___dmpkit___'), getCookie('top100_id')]// getCookie('adriver_uid')

if (cid[0] === '') {createCookie('_ym_uid',custom_uid); cid[0]=custom_uid};
if (cid[1] === '') {createCookie('_sv',custom_uid); cid[1]=custom_uid};
if (cid[2] === '') {createCookie('___dmpkit___',custom_uid); cid[2]=custom_uid};
if (cid[3] === '') {createCookie('top100_id',custom_uid); cid[3]=custom_uid};
//if (cid[0] === '') {createCookie('adriver_uid',custom_uid); cid[0]=custom_uid};


// проверяем и ставим utm в куки
if ((typeof(document.referrer) != 'undefined') && (document.referrer.search('google')>=0 && document.referrer.search('google')<=15)) {var gtmOrgEngn = 'google'};
if ((typeof(document.referrer) != 'undefined') && (document.referrer.search('yandex')>=0 && document.referrer.search('yandex')<=15)) {var gtmOrgEngn = 'yandex'};

if (document.location.href.search('utm_source') < 0 && (gtmOrgEngn)) {
    createCookie('utm_source',gtmOrgEngn); createCookie('utm_medium','organic'); createCookie('utm_campaign',''); createCookie('utm_content','');
} else {
    utm_params_arr.forEach(v =>
    (v.search('utm_source') != -1 ? createCookie('utm_source',v.split('=')[1]) : '') || (v.search('utm_medium') != -1 ? createCookie('utm_medium',v.split('=')[1]) : '') || (v.search('utm_campaign') != -1 ? createCookie('utm_campaign',v.split('=')[1]) : '') || (v.search('utm_content') != -1 ? createCookie('utm_content',v.split('=')[1]) : '') || (v.search('utm_term') != -1 ? createCookie('utm_term', v.split('=')[1]) : ''))
}

//1.js
// проверка старых переменных, создание новых
// необходимо для поддержки старого шаблона
if (typeof(web_link) != 'undefined') {var web_link_and = web_link, web_link_ios = web_link, web_link_desk = web_link}

//, store_link_and = web_link, store_link_ios = web_link;}


if (typeof(af_media_source) != 'undefined') {var sl_name = af_media_source}
if (typeof(android_app) != 'undefined') {var android_app = ['ru.sberbankmobile']}
if (typeof(ios_apps_dp) == 'undefined') {var ios_apps_dp = ['sberbankonline://','sbolonline://']}
if (typeof(custom_params) == 'undefined') {var custom_params = false}
if (typeof(ext) == 'undefined') {var ext = true}

// заполнение шаблона стандартными параметрами
if (typeof(web_link_desk) != 'undefined' && web_link_desk == '') {web_link_desk = 'http://www.sberbank.ru/ru/person/dist_services/inner_apps'}
if (typeof(web_link_and) != 'undefined' && web_link_and == '') {web_link_and = web_link_desk}
if (typeof(web_link_ios) != 'undefined' && web_link_ios == '') {web_link_ios = web_link_desk}

if (typeof(store_link_and) != 'undefined' && store_link_and == '') {store_link_and = 'https://sberbank.com/sms/obnovy'}
if (typeof(store_link_ios) != 'undefined' && store_link_ios == '') {store_link_ios = 'https://online.sberbank.ru/CSAFront/index.do'}
if (typeof(ios_dp) != 'undefined' && ios_dp.search('^sberbankonline:|^sbolonline:') == 0 && ios_apps_dp[0] == '') {var ios_apps_dp = ['sberbankonline://'+ios_dp.split('://')[1], 'sbolonline://'+ios_dp.split('://')[1]]}


// проверка параметра маршрутизации в URL
if (document.location.href.search('need_web=true')>0) {var need_web = true};
if (document.location.href.search('need_web=false')>0) {var need_web = false};
if (document.location.href.search('external_source=true')>0) {var ext = true};
if (document.location.href.search('external_source=false')>0) {var ext = false};

// переменные ios
var afi1  = 'ios_go_to_'+ios_apps_dp[0].split('://')[0];
var afi2  = 'ios_go_to_'+ios_apps_dp[1].split('://')[0];

// hostname URL
var host_href = new URL(location).hostname.match('[[a-z0-9-_]+.[a-z]+$')[0];
var utm_name = ['utm_source=', 'utm_medium=', 'utm_campaign=', 'utm_content=', 'utm_term='];

setTimeout(() => {

    // Куки в переменную через таймер
var utm_cookie_arr = [getCookie('utm_source'), getCookie('utm_medium'), getCookie('utm_campaign'), getCookie('utm_content'), getCookie('utm_term')];

// Функция формирования финальной WEB ссылки 
function get_final_web(href) {
    // hostname weblink
    var host_weblink = new URL(href).hostname.match('[[a-z0-9-_]+.[a-z]+$')[0], params_other = [], web_data = [];
        if (document.location.href.search(/\?/) > 0) {  
            // все параметры из URL
            var href_params = document.location.href.split('?')[1].split('&');
            // массив с доп параметры из URL
            var params_other = href_params.filter(v => v.toLowerCase().search('^utm_|need_web|external_source') == -1);
            // изменение key параметров (shpa / pos / carloan)
            if (custom_params == true) {var params_other = params_other.map(v => (v.split('=')[0] == params_URL[0]) ? v = params_WEB[0] + '=' + v.split('=')[1] : v)}
        }
        // проверка домена для определения передачи utm меток
        if(host_href !== host_weblink) {
            var web_data = params_other.concat(utm_cookie_arr.map((v,i) => (v !== '') ? v = utm_name[i] + v : v).filter(v => v)).join('&');
        } else {
            var web_data = params_other.join('&');
        }
        // ликвидация решетки + определение сепаратора
        if (href.split('#')[0].search(/\?/) > 0) {
            web_data.length > 1 ? web_final = href.split('#')[0] + '&' + web_data : web_final = href.split('#')[0]; 
        } else {
            web_data.length > 1 ? web_final = href.split('#')[0] + '?' + web_data : web_final = href.split('#')[0];
        }
    return web_final
}

// добавить возможность отключения external_source из шаблона
function get_final_app(dp) {
    var app_data = [];
// формирование external_source
    if (ext == true) {
    app_data = ['external_source=' + sl_name,
        utm_cookie_arr[0], utm_cookie_arr[1], utm_cookie_arr[2], utm_cookie_arr[3], utm_cookie_arr[4],
        getCookie('_ym_uid'), getCookie('___dmpkit___'), getCookie('_sa')].join('-_-').slice(0, 270);
    }
    if (document.location.href.search(/\?/) > 0) {
        // все параметры из URL
        var href_params = document.location.href.split('?')[1].split('&');
        // массив с доп параметры из URL
        var params_other = href_params.filter(v => v.toLowerCase().search('^utm_|need_web|external_source') == -1);
        // изменение key параметров (shpa / pos / carloan)
        if (custom_params == true) {var params_other = params_other.map(v => (v.split('=')[0] == params_URL[0]) ? v = params_APP[0] + '=' + v.split('=')[1] : v)}
        // склейка доп параметров и external_source
        app_data = params_other.concat(app_data).join('&')
    } 

    if (dp.search(/\?/) > 0) {
        app_data.length > 1 ? app_final = dp + '&' + app_data : app_final = dp; 
    } else {
        app_data.length > 1 ? app_final = dp + '?' + app_data : app_final = dp; 
    }
    return app_final

}



// маршрутизация
if (platform == 'android') {
    function getBrowser() {var browser = 'unkown'; browser = /ucbrowser/i.test(navigator.userAgent) ? 'UCBrowser' : browser; browser = /edg/i.test(navigator.userAgent) ? 'Edge' : browser; browser = /googlebot/i.test(navigator.userAgent) ? 'GoogleBot' : browser; browser = /chromium/i.test(navigator.userAgent) ? 'Chromium' : browser; browser = /firefox|fxios/i.test(navigator.userAgent) && !/seamonkey/i.test(navigator.userAgent) ? 'Firefox' : browser; browser = /; msie|trident/i.test(navigator.userAgent) && !/ucbrowser/i.test(navigator.userAgent) ? 'IE' : browser; browser = /chrome|crios/i.test(navigator.userAgent) && !/opr|opera|chromium|edg|ucbrowser|googlebot/i.test(navigator.userAgent) ? 'Chrome' : browser; browser = /safari/i.test(navigator.userAgent) && !/chromium|edg|ucbrowser|chrome|crios|opr|opera|fxios|firefox/i.test(navigator.userAgent) ? 'Safari' : browser; browser = /opr|opera/i.test(navigator.userAgent) ? 'Opera' : browser; browser = /ya/i.test(navigator.userAgent) ? 'YaBrowser' : browser; browser = /miuibrowser/i.test(navigator.userAgent) ? 'Miui' : browser; browser = /yasearchbrowser/i.test(navigator.userAgent) ? 'YaStart' : browser; return browser};
    var browser = getBrowser();
        if (browser == 'Chrome' || browser == 'YaBrowser' || browser == 'Opera' || browser == 'YaStart') {
            var app_data = get_final_app(android_dp);
            var dp = app_data.split('://');
            if (need_web == false) { var web_data = get_final_web(store_link_and) } else { var web_data = get_final_web(web_link_and)};
            setTimeout(function () {window.location.href = 'intent://' + dp[1] + '#Intent;scheme=' + dp[0] + ';package=' + android_app[0] + ';end'}, 100);
        } else {
            var app_data = get_final_app(android_dp);
            var dp = app_data.split('://');
            if (need_web == false) { var web_data = get_final_web(web_link_and) } else { var web_data = get_final_web(web_link_and)};
            setTimeout(function () {window.location.href = 'intent://' + dp[1]}, 100);
            setTimeout(function () {window.location.href = web_data}, 2000);;
        }
    } else if (platform == 'iPhone') {
        
        setTimeout(function() {
            setTimeout(function() {
                setTimeout(function() {
                    dataLayerSL.push(category__1,'ios_go_to_web','');
                    window.location.href = get_final_web(web_link_ios);
                }, 800);
                        var web_data = get_final_web(web_link_ios);
                        var param_for_pad = get_final_app(ios_apps_dp[0]).split(ios_apps_dp[0])[1];
                        dataLayerSL.push(category__1, afi2,'');
                        window.location.href = document.location.origin + '/x/redirect_pad.html?URL_START=' +  (document.location.href) + '&SL_iOS_DP_OLD=' + encodeURIComponent(ios_apps_dp[1] + param_for_pad) + '&SL_WEB_LINK_iOS=' + encodeURIComponent(web_data)
                  }, 600);
                        dataLayerSL.push(category__1, afi1,'');
                        window.location.href = ios_apps_dp[0] + get_final_app(ios_apps_dp[0]).split(ios_apps_dp[0])[1];
                     }, 300);
    } else {
        // Desktop
        setTimeout(function () {
            dataLayerSL.push(category__1,'web','');
            window.location.href = get_final_web(web_link_desk);
        }, 100);
    }

    var category__1 = 'SMARTLINK_'+sl_name;

dataLayer = [];
dataLayerSL = [];


dataLayerSL.push = function (category__1, action__1) {

    var rds = new XMLHttpRequest();
        rds.open('POST', document.location.protocol+'//dmp.sbermarketing.ru/?dmpkit_cid=9064fc6c-76fe-4a6d-aea6-92ef3f343257&dmpkit_tgt=2js&dmpkit_ctid=f940199e-3e2e-4fac-a636-01f1f5bf88e9&dmpkit_evn=sber_event&dmpkit_p=tm', true);
        
        var json = JSON.stringify({

            'uids': [[10008, 10031, cid[2]]],
            'eventAttrs': [[301, category__1], [302, action__1]]
            });
            rds.send(json);

    
        var ym_sessions = encodeURIComponent(JSON.stringify({ 
            'sessions_params': { 
            '_ym_uid': cid[0], 
            //'adriver_uid': adriver_uid__1,  
            'category__1': category__1,  
            'action__1': action__1,  
           //'label__1': label__1,  
          // 'window_navigator_userAgent': navigator.userAgent,  
            } 
        })) 

        // var rys1 = new XMLHttpRequest(); 
        // rys1.open('GET', document.location.protocol+'//mc.yandex.ru/watch/89867636?wmode=7&page-url='+encodeURIComponent(document.location.href)+'&charset=utf-8'+'&browser-info='+encodeURIComponent('pv:1:utf-8:u:'+cid[0]), false); 
        // rys1.send(); 
        var rys2 = new XMLHttpRequest(); 
        rys2.open('POST', document.location.protocol+'//mc.yandex.ru/watch/89867636/1?page-url='+encodeURIComponent(document.location.href)+'&charset=utf-8'+'&browser-info='+encodeURIComponent('pv:1:utf-8:u:'+cid[0]+ym_sessions), false); 
        rys2.send();

    }



 dataLayer.push = function (category__1, action__1, label__1) {

    
        var rdm = new XMLHttpRequest();
        rdm.open('POST', document.location.protocol+'//dmp.sbermarketing.ru/?dmpkit_cid=9064fc6c-76fe-4a6d-aea6-92ef3f343257&dmpkit_tgt=2js&dmpkit_ctid=f940199e-3e2e-4fac-a636-01f1f5bf88e9&dmpkit_evn=sber_event&dmpkit_p=tm', true);
        
        var json = JSON.stringify({

            'uids': [[10008, 10031, cid[2]], [10008, 10037, cid[3]], [10008, 10041, cid[1]], [10008, 10060, cid[0]]], //[10008, 10055, cid[5]],
            'eventAttrs': [[301, category__1], [302, action__1], [303, label__1],
            [10006, navigator.userAgent],
            [10059, utm_cookie_arr[0]], [10060, utm_cookie_arr[1]], [10061, utm_cookie_arr[2]], [10062, utm_cookie_arr[3]], [10063, utm_cookie_arr[4]],
            [10067, document.title], [10070, document.referrer], [10071, document.location.href]]
            });
            rdm.send(json);

        var ym_sessions = encodeURIComponent(JSON.stringify({ 
            'sessions_params': { 
            '_sv': cid[1],  
            'top100_id': cid[3],  
            '___dmpkit___': cid[2],  
            '_ym_uid': cid[0], 
            //'adriver_uid': adriver_uid__1,  
            'category__1': category__1,  
            'action__1': action__1,  
            'label__1': label__1,  
            'window_navigator_userAgent': navigator.userAgent,  
            } 
        })) 

        var rym1 = new XMLHttpRequest(); 
        rym1.open('GET', document.location.protocol+'//mc.yandex.ru/watch/89867636?wmode=7&page-url='+encodeURIComponent(document.location.href)+'&charset=utf-8'+'&browser-info='+encodeURIComponent('pv:1:en:utf-8:u:'+cid[0]+':ns:'+Date.now().toString()+':t:' + document.title), false); 
        rym1.send(); 
        var rym2 = new XMLHttpRequest(); 
        rym2.open('POST', document.location.protocol+'//mc.yandex.ru/watch/89867636/1?page-url='+encodeURIComponent(document.location.href)+'&charset=utf-8'+'&browser-info='+encodeURIComponent('pv:1:en:utf-8:u:'+cid[0]+':ns:'+Date.now().toString()+':t:' + document.title+'&site-info='+ym_sessions), false); 
        rym2.send();

    }

    dataLayer.push(category__1,'pageview','pageview')
    
    }, 300)
    
