

// проверка старых переменных, создание новых
// необходимо для поддержки старого шаблона
if (typeof(web_link) != "undefined") {var web_link_and = web_link, web_link_ios = web_link, web_link_desk = web_link}//, store_link_and = web_link, store_link_ios = web_link;}
if (typeof(af_media_source) != "undefined") {var sl_name = af_media_source}
if (typeof(android_app) != "undefined") {var android_app = ['ru.sberbankmobile']}
if (typeof(ios_apps_dp) == "undefined") {var ios_apps_dp = ['sberbankonline://','sbolonline://']}
if (typeof(custom_params) == "undefined") {var custom_params = false}
if (typeof(ext) == "undefined") {var ext = true}

// заполнение шаблона стандартными параметрами 
if (typeof(web_link_desk) != "undefined" && web_link_desk == '') {web_link_desk = 'http://www.sberbank.ru/ru/person/dist_services/inner_apps'}
if (typeof(web_link_and) != "undefined" && web_link_and == '') {web_link_and = web_link_desk}
if (typeof(web_link_ios) != "undefined" && web_link_ios == '') {web_link_ios = web_link_desk}

if (typeof(store_link_and) != "undefined" && store_link_and == '') {store_link_and = 'https://sberbank.com/sms/obnovy'}
if (typeof(store_link_ios) != "undefined" && store_link_ios == '') {store_link_ios = 'https://online.sberbank.ru/CSAFront/index.do'}
if (typeof(ios_dp) != "undefined" && ios_dp.search('^sberbankonline:|^sbolonline:') == 0 && ios_apps_dp[0] == '') {var ios_apps_dp = ['sberbankonline://'+ios_dp.split('://')[1], 'sbolonline://'+ios_dp.split('://')[1]]}


// проверка параметра маршрутизации в URL
if (document.location.href.search('need_web=true')>0) {var need_web = true};
if (document.location.href.search('need_web=false')>0) {var need_web = false};
if (document.location.href.search('external_source=true')>0) {var ext = true};
if (document.location.href.search('external_source=false')>0) {var ext = false};

function getCookie(name) { var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));if (match) { return match[2].replace(/[^a-zA-Z0-9_=-]/g, '') } else { return '' }};
function check_platform() { if (/android/gi.test(navigator.userAgent)) { return 'android'; } else if (/iphone|ipod/gi.test(navigator.userAgent)) { return 'iPhone'; } else {return 'unknown'; }};
var platform = check_platform();

// hostname URL
var host_href = new URL(location).hostname.match('[[a-z0-9-_]+.[a-z]+$')[0];
var utm_name = ['utm_source=', 'utm_medium=', 'utm_campaign=', 'utm_content=', 'utm_term='];

//setTimeout(() => {
   function push(action__1,label__1) {
        if (typeof dataLayer2 == "undefined") {dataLayerSL.push(category__1, action__1, label__1)};
        setTimeout(() => {window.location.href = label__1},0)
    }

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

// часть финальных переменных для ios
var web_data =  get_final_web(web_link_ios)
var param_for_pad = get_final_app(ios_apps_dp[0]).split(ios_apps_dp[0])[1];
var link_for_pad = document.location.origin + '/x/redirect_pad.html?URL_START=' +  (document.location.href) + '&SL_iOS_DP_OLD=' + encodeURIComponent(ios_apps_dp[1] + param_for_pad) + '&SL_WEB_LINK_iOS=' + encodeURIComponent(web_data)



// маршрутизация
if (platform == "android") {
function getBrowser() {const userAgent = navigator.userAgent; var browser = 'unkown'; browser = /ucbrowser/i.test(userAgent) ? 'UCBrowser' : browser; browser = /edg/i.test(userAgent) ? 'Edge' : browser; browser = /googlebot/i.test(userAgent) ? 'GoogleBot' : browser; browser = /chromium/i.test(userAgent) ? 'Chromium' : browser; browser = /firefox|fxios/i.test(userAgent) && !/seamonkey/i.test(userAgent) ? 'Firefox' : browser; browser = /; msie|trident/i.test(userAgent) && !/ucbrowser/i.test(userAgent) ? 'IE' : browser; browser = /chrome|crios/i.test(userAgent) && !/opr|opera|chromium|edg|ucbrowser|googlebot/i.test(userAgent) ? 'Chrome' : browser; browser = /safari/i.test(userAgent) && !/chromium|edg|ucbrowser|chrome|crios|opr|opera|fxios|firefox/i.test(userAgent) ? 'Safari' : browser; browser = /opr|opera/i.test(userAgent) ? 'Opera' : browser; browser = /ya/i.test(userAgent) ? 'YaBrowser' : browser; browser = /miuibrowser/i.test(userAgent) ? 'Miui' : browser; browser = /yasearchbrowser/i.test(userAgent) ? 'YaStart' : browser; return browser};
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
} else if (platform == "iPhone") {
    
    setTimeout(function() {
        setTimeout(function() {
            setTimeout(function() {
                push('ios_go_to_web', get_final_web(web_link_ios));
            }, 800);
                    push('ios_go_to_'+ios_apps_dp[1].split('://')[0], link_for_pad ); 
              }, 640);
                        push('ios_go_to_'+ios_apps_dp[0].split('://')[0], ios_apps_dp[0] + param_for_pad);
                 }, 560);
} else {
    // Desktop
    setTimeout(function () {
        push('web', get_final_web(web_link_desk));
    }, 640);
}

//}, 500)

