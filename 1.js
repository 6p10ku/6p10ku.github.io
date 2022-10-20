// v 2.0 06.10.2022
setTimeout(() => {
    var web_link_web = web_link;
    if (typeof af_c == "undefined") { var af_c = '&c=' + af_media_source;}
    
    var android_af_dp = encodeURIComponent(android_dp);
    var ios_af_dp = encodeURIComponent(ios_dp);
    var web_url = '';
    need_web == true ? web_url = web_link : need_web;
    var utm_source_sm='', utm_medium_sm='', utm_campaign_sm='', utm_content_sm='', utm_term_sm='', ga_uid_sm='', other_param = '', other_param_app = '', other_param_web = '';
    var getCookie = function(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) { return match[2] } else { return '' };
    };
    var utm_cookie_arr = [getCookie('utm_source'), getCookie('utm_medium'), getCookie('utm_campaign'), getCookie('utm_content'), getCookie('utm_term')]
    var utm_arr = [];
    if (document.location.href.search(/=/) > 0) {
    var UTM = decodeURIComponent(document.location.href.split('?').pop());
    var utm_arr = UTM.split('&');
        var count_utm_arr = -1;
        
    for (i = 0; i < utm_arr.length; i++) { if (utm_arr[i].search('utm_') >= 0) { var count_utm_arr = ++i } }
    (count_utm_arr >= 0) ? utm_arr = utm_arr.slice(0, count_utm_arr) : count_utm_arr = 0;
    for (i = 0; i < utm_arr.length; i++) {
    if (utm_arr[i].toLowerCase().search('utm_source') >= 0) { var utm_source_sm = (utm_arr[i].split('=').pop()).replace(/[^a-zA-Z0-9_=-]/g, ''); utm_arr[i] = '' };
    if (utm_arr[i].toLowerCase().search('utm_medium') >= 0) { var utm_medium_sm = (utm_arr[i].split('=').pop()).replace(/[^a-zA-Z0-9_=-]/g, ''); utm_arr[i] = '' };
    if (utm_arr[i].toLowerCase().search('utm_campaign') >= 0) { var utm_campaign_sm = (utm_arr[i].split('=').pop()).replace(/[^a-zA-Z0-9_=-]/g, ''); utm_arr[i] = '' };
    if (utm_arr[i].toLowerCase().search('utm_content') >= 0) { var utm_content_sm = (utm_arr[i].split('=').pop()).replace(/[^a-zA-Z0-9_=-]/g, ''); utm_arr[i] = '' };
    if (utm_arr[i].toLowerCase().search('utm_term') >= 0) { var utm_term_sm = '-_-' + (utm_arr[i].split('=').pop()).replace(/[^a-zA-Z0-9_=-]/g, ''); utm_arr[i] = '' };
    if (utm_arr[i].toLowerCase().search('need_web') >= 0) { utm_arr[i] = '' };
    if (utm_arr[i].length > 200) { utm_arr[i] = utm_arr[i].slice(0, 200) }
    }
    }
    if (utm_source_sm == '') { utm_source_sm = utm_cookie_arr[0].replace(/[^a-zA-Z0-9_=-]/g, '').slice(0,200)};
    if (utm_medium_sm == '') { utm_medium_sm = utm_cookie_arr[1].replace(/[^a-zA-Z0-9_=-]/g, '').slice(0,200)};
    if (utm_campaign_sm == '') { utm_campaign_sm = utm_cookie_arr[2].replace(/[^a-zA-Z0-9_=-]/g, '').slice(0,200)};
    if (utm_content_sm == '') { utm_content_sm = utm_cookie_arr[3].replace(/[^a-zA-Z0-9_=-]/g, '').slice(0,200)};
    if (utm_term_sm == '') { utm_term_sm = '-_-'+utm_cookie_arr[4].replace(/[^a-zA-Z0-9_=-]/g, '').slice(0,200)};
    var other_param = encodeURIComponent(utm_arr.filter(v => v ).join('&'));
    function replaceAll(string, search, replace) {
    return string.split(search).join(replace);
    }
    if (other_param != '') {
    var other_param_app = other_param + '%26';
        var other_param_web = '?' + replaceAll(decodeURIComponent(utm_arr.filter(v => v).join('&')).replace(/[\+\s]/ig, '__'), '&', '%26') 
    };
    var ga_uid_fc = getCookie('_ga') || '0.0.0.0';
    var ga_uid_arr = ga_uid_fc.split(/\./);
    var ga_uid_sm = ("_y_" + getCookie('_ym_uid') + "_d_" + getCookie('___dmpkit___') + "_g_" + ga_uid_arr[2] + '.' + ga_uid_arr[3]).slice(0, 90);
    var utm_content_plus = utm_content_sm.slice(0, 100) + utm_term_sm.slice(0, 100);
    var external_source = 'external_source%3D'+af_media_source+'-_-'+utm_source_sm+'-_-'+utm_medium_sm+'-_-'+utm_campaign_sm+'-_-'+utm_content_plus;
    external_source = external_source.length > 165 ? external_source.slice(0,165)+'-_-'+ga_uid_sm : external_source+'-_-'+ga_uid_sm;
    if (android_af_dp.search(/\?|%3F/) > 0){
    var is_q_and = '%26';
    } else
    { var is_q_and = '%3F'};
    if (ios_af_dp.search(/\?|%3F/) > 0){
    var is_q_ios = '%26';
    } else
    { var is_q_ios = '%3F' };
    
    var web_utm_source = utm_source_sm ? 'utm_source='+utm_source_sm : '';
    var web_utm_medium = utm_medium_sm ? '&utm_medium='+utm_medium_sm : '';
    var web_utm_campaign = utm_campaign_sm ? '&utm_campaign='+utm_campaign_sm : '';
    var web_utm_content = utm_content_sm ? '&utm_content='+utm_content_sm : '';
    var web_utm_term = utm_content_sm ? '&utm_term='+utm_term_sm : '';
    var web_link_other_param_web = web_link+other_param_web
    if (web_link_other_param_web.toLowerCase().search(/\?/)>0)
    { var separator_web = '&';}
    if (web_link_other_param_web.toLowerCase().search(/\?/)<0)
    { var separator_web = '?';}
    if ((web_link.toLowerCase().search('sberbank.ru')<0) || (web_link.toLowerCase().search('sberbank.com')<0)){
    var utm_all=separator_web+web_utm_source+web_utm_medium+web_utm_campaign+web_utm_content+web_utm_term;}
    else {var utm_all = '';}
    if (!af_media_source.includes('greetingpacks')){
    if (web_link.search("person/dist_services/inner_apps")>=0) { var web_link_web = 'https://online.sberbank.ru/CSAFront/index.do'}
    }
    function check_platform(ua) { if (/android/gi.test(ua)) { return 'android'; } if (/iphone|ipod/gi.test(ua)) { return 'iPhone'; } return 'unknown'; }
    var platform = check_platform(navigator.userAgent);
    function redirect(href){return window.location.href=href}
    
    var dp_and = decodeURIComponent(android_af_dp + is_q_and + other_param_app + external_source).replace(new RegExp("^android-app:\/\/", "gm"), "intent://");
    var dp_ios = decodeURIComponent(ios_af_dp + is_q_ios + other_param_app + external_source).replace(new RegExp("^sberbankonline:\/\/", "gm"), "sbolonline1://");
    var dp_web = web_link_web + other_param_web + utm_all;
    var dp_opr_web = decodeURIComponent(web_link_web + other_param_web + utm_all).replace(new RegExp("#.*", ""), "");
    if (typeof dataLayer == "undefined") {function push(){}} else {function push(event) {dataLayer.push('sl', af_media_source, event) }}

    if (platform == "android") {
        function check_brand(ua) { if (/SAMSUNG|SM-\w*|SCH-I545/g.test(ua)) { return 'samsung'; } if (/NTH-NX9|NTN-LX1|ELZ-AN00|ELZ-AN20|TFY-LX\d|CMA-LX2|ANY-NX1/g.test(ua)) { return 'other'; } if (/[A-Z]{3}-\w*/g.test(ua)) { return 'huawei'; } if (/\sM2|Redmi|POCO\w*|\sMi|\sMI|RMX/g.test(ua)) { return 'xiaomi'; } return 'other' }
    function getBrowser() {const userAgent = navigator.userAgent; var browser = 'unkown'; browser = /ucbrowser/i.test(userAgent) ? 'UCBrowser' : browser; browser = /edg/i.test(userAgent) ? 'Edge' : browser; browser = /googlebot/i.test(userAgent) ? 'GoogleBot' : browser; browser = /chromium/i.test(userAgent) ? 'Chromium' : browser; browser = /firefox|fxios/i.test(userAgent) && !/seamonkey/i.test(userAgent) ? 'Firefox' : browser; browser = /; msie|trident/i.test(userAgent) && !/ucbrowser/i.test(userAgent) ? 'IE' : browser; browser = /chrome|crios/i.test(userAgent) && !/opr|opera|chromium|edg|ucbrowser|googlebot/i.test(userAgent) ? 'Chrome' : browser; browser = /safari/i.test(userAgent) && !/chromium|edg|ucbrowser|chrome|crios|opr|opera|fxios|firefox/i.test(userAgent) ? 'Safari' : browser; browser = /opr|opera/i.test(userAgent) ? 'Opera' : browser; browser = /ya/i.test(userAgent) ? 'YaBrowser' : browser; browser = /miuibrowser/i.test(userAgent) ? 'Miui' : browser; browser = /yasearchbrowser/i.test(userAgent) ? 'YaStart' : browser; return browser};
        var browser = getBrowser();
        var brand = check_brand(navigator.userAgent);
        if ((need_web == false) || (web_link.search("person/dist_services/inner_apps") >= 0)) {
            push('go_to_0')
            if (browser == 'Chrome' || browser == 'YaBrowser') {
                if (brand == "samsung") {
                    var store_samsung = "https://redirect.appmetrica.yandex.com/serve/676454744423725227" + '?external_source=' + external_source + '&sl=' + af_media_source;
                    setTimeout(function () { push('go_to_0_app_samsung'); redirect(dp_and) }, 100);
                    setTimeout(function () { push('go_to_0_store_samsung'); redirect(store_samsung) }, 900);
                } else if (brand == "huawei") {
                    var store_huawei = "https://redirect.appmetrica.yandex.com/serve/172051586997049535" + '?external_source=' + external_source + '&sl=' + af_media_source;
                    setTimeout(function () { push('go_to_0_app_huawei'); redirect(dp_and) }, 100);
                    setTimeout(function () { push('go_to_0_store_huawei'); redirect(store_huawei) }, 900);
                } else if (brand == "xiaomi") {
                    var store_xiaomi = "https://redirect.appmetrica.yandex.com/serve/892627527963531253" + '?external_source=' + external_source + '&sl=' + af_media_source;
                    setTimeout(function () { push('go_to_0_app_xiaomi'); redirect(dp_and) }, 100);
                    setTimeout(function () { push('go_to_0_store_xiaomi'); redirect(store_xiaomi) }, 900);
                } else {
                    var store_chr_ym_inner = "https://redirect.appmetrica.yandex.com/serve/1108800310496767271" + '?external_source=' + external_source  + '&sl=' + af_media_source;
                    setTimeout(function () { push('go_to_0_app_chr_ym_inner'); redirect(dp_and) }, 100);
                    setTimeout(function () { push('go_to_0_store_chr_ym_inner'); redirect(store_chr_ym_inner) }, 900);
                }
            } else if (browser == 'Opera') {
                var store_opera_inner = "https://redirect.appmetrica.yandex.com/serve/172051588960015075" + '?external_source=' + external_source  + '&sl=' + af_media_source;
                var dp_and_opr = dp_and.replace(new RegExp("^android-app:\/\/|^sberbankonline:\/\/", "gm"), "intent://") + "#Intent;scheme=android-app;package=ru.sberbankmobile;S.browser_fallback_url=" + store_opera_inner + ";end";
                setTimeout(function () { push('go_to_0_opera_inner'); redirect(dp_and_opr) }, 100);
            } else if (browser == 'YaStart') {
                var store_yastart_inner = "https://redirect.appmetrica.yandex.com/serve/1036742717834563572" + '?external_source=' + external_source  + '&sl=' + af_media_source;
                var dp_and_opr = dp_and.replace(new RegExp("^android-app:\/\/|^sberbankonline:\/\/", "gm"), "intent://") + "#Intent;scheme=android-app;package=ru.sberbankmobile;S.browser_fallback_url=" + store_yastart_inner + ";end";
                setTimeout(function () { push('go_to_0_yastart_inner'); redirect(dp_and_opr) }, 100);
            } else {
                var store_other_inner = "https://redirect.appmetrica.yandex.com/serve/1036742718119761590" + '?external_source=' + external_source  + '&sl=' + af_media_source;
                setTimeout(function () { push('go_to_0_app_other_inner'); redirect(dp_and) }, 100);
                setTimeout(function () { push('go_to_0_store_other_inner'); redirect(store_other_inner) }, 900);
            }
        } else {
            push('go_to_1')
            if (browser == 'Chrome' || browser == 'YaBrowser') {
                if (brand == "samsung") {
                    setTimeout(function () { push('go_to_1_app_samsung'); redirect(dp_and) }, 100);
                    setTimeout(function () { push('go_to_1_web_samsung'); redirect(dp_web) }, 900);
                } else if (brand == "huawei") {
                    setTimeout(function () { push('go_to_1_app_huawei'); redirect(dp_and) }, 100);
                    setTimeout(function () { push('go_to_1_web_huawei'); redirect(dp_web) }, 900);
                } else if (brand == "xiaomi") {
                    setTimeout(function () { push('go_to_1_app_xiaomi'); redirect(dp_and) }, 100);
                    setTimeout(function () { push('go_to_1_web_xiaomi'); redirect(dp_web) }, 900);
                } else {
                    setTimeout(function () { push('go_to_1_app_chr_ym_inner'); redirect(dp_and) }, 100);
                    setTimeout(function () { push('go_to_1_web_chr_ym_inner'); redirect(dp_web) }, 900);
                }
            } else if (browser == 'Opera') {
                var dp_and_opr = dp_and.replace(new RegExp("^android-app:\/\/|^sberbankonline:\/\/", "gm"), "intent://") + "#Intent;scheme=android-app;package=ru.sberbankmobile;S.browser_fallback_url=" + dp_opr_web + ";end";
                setTimeout(function () { push('go_to_1_opera_inner'); redirect(dp_and_opr) }, 100);
            } else if (browser == 'YaStart') {
                var dp_and_opr = dp_and.replace(new RegExp("^android-app:\/\/|^sberbankonline:\/\/", "gm"), "intent://") + "#Intent;scheme=android-app;package=ru.sberbankmobile;S.browser_fallback_url=" + dp_opr_web + ";end";
                setTimeout(function () { push('go_to_1_yastart_inner'); redirect(dp_and_opr) }, 100);
            } else {
                setTimeout(function () { push('go_to_1_app_other_inner'); redirect(dp_and) }, 100);
                setTimeout(function () { push('go_to_1_web_other_inner'); redirect(dp_web) }, 900);
            }
        }
    } else if (platform == "iPhone") {
        setTimeout(function () { push('go_to_ios_sbol'); window.location.href = dp_ios; }, 100);
        setTimeout(function () { push('go_to_ios_sberbankonline'); window.location.href = "https://6p10ku.github.io/sl_ios_dp_old.html?URL_START=" + encodeURIComponent(document.location.href) + "&SL_iOS_DP_OLD=" + ios_af_dp + is_q_ios + other_param_app + external_source + "&SL_WEB_LINK_iOS=" + dp_web; }, 300);
        setTimeout(function () { push('go_to_ios_web'); window.location.href = dp_web; }, 800);
    } else {
        setTimeout(function () { push('go_to_desk_web'); window.location.href = dp_web; }, 100);
    }
}, 18000)
