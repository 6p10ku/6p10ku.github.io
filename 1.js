// v 1.10
// Р вЂ”Р С’Р СџР С›Р вЂєР СњР Р‡Р вЂўР СћР РЋР Р‡ Р С’Р вЂ™Р СћР С›Р СљР С’Р СћР ВР В§Р вЂўР РЋР С™Р В
// Media Source Р С‘Р В· Appsflyer
var af_pid = 'pid=' + af_media_source;
// Campaign Р С‘Р В· AppsFlyer
if (typeof af_c == "undefined") { var af_c = '&c=' + af_media_source;}
// Р С›РЎвЂљР В»Р С‘РЎвЂЎР Р…РЎвЂ№Р в„– Campaign
//var af_c = '&c='+ 'XXX';
// Android Deeplink Р Т‘Р В»РЎРЏ AppsFlyer
var android_af_dp = encodeURIComponent(android_dp);
// iOS Deeplink Р Т‘Р В»РЎРЏ AppsFlyer
var ios_af_dp = encodeURIComponent(ios_dp);
// Р вЂўРЎРѓР В»Р С‘ Р Р…РЎС“Р В¶Р ВµР Р… РЎР‚Р ВµР Т‘Р С‘РЎР‚Р ВµР С”РЎвЂљ Р Р† WEB Р С—РЎР‚Р С‘ Р С•РЎвЂљРЎРѓРЎС“РЎвЂљРЎРѓРЎвЂљР Р†Р С‘Р С‘ РЎС“РЎРѓРЎвЂљР В°Р Р…Р С•Р Р†Р В»Р ВµР Р…Р Р…Р С•Р С–Р С• Р С—РЎР‚Р С‘Р В»Р С•Р В¶Р ВµР Р…Р С‘РЎРЏ
var af_web_url = '';
need_web == true ? af_web_url = web_link : need_web;
// Р вЂєР С•Р С–Р С‘Р С”Р В° Р С—Р С•Р В»РЎС“РЎвЂЎР ВµР Р…Р С‘РЎРЏ Р С‘ Р С—Р ВµРЎР‚Р ВµР Т‘Р В°РЎвЂЎР С‘ Р СР ВµРЎвЂљР С•Р С” Р С‘ Р С—Р В°РЎР‚Р В°Р СР ВµРЎвЂљРЎР‚Р С•Р Р†
var utm_source_sm='', utm_medium_sm='', utm_campaign_sm='', utm_content_sm='', utm_term_sm='', ga_uid_sm='', other_param = '', other_param_app = '', other_param_web = '', other_param_web_url='';
var getCookie = function(name) {
var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
if (match) { return match[2] } else { return ''}; };
// Р РЋР СР С•РЎвЂљРЎР‚Р С‘Р С Р СР ВµРЎвЂљР С”РЎС“ Р Р† URL Р С‘Р В»Р С‘ Р С—Р С•Р В»РЎС“РЎвЂЎР В°Р ВµР С Р ВµРЎвЂ Р С‘Р В· Cookie
var utm_cookie_arr = [getCookie('utm_source'), getCookie('utm_medium'), getCookie('utm_campaign'), getCookie('utm_content'), getCookie('utm_term')]
var utm_arr = [];
if (document.location.href.search(/=/) > 0) {
var UTM = decodeURIComponent(document.location.href.split('?').pop());
var utm_arr = UTM.split('&');
var count_utm_arr = -1;
// Р Р€Р Т‘Р В°Р В»РЎРЏР ВµР С Р Р†РЎРѓР Вµ Р С—Р В°РЎР‚Р В°Р СР ВµРЎвЂљРЎР‚РЎвЂ№ Р С—Р С•РЎРѓР В»Р Вµ utm_
for (i = 0; i < utm_arr.length; i++) { if (utm_arr[i].search('utm_') >= 0) { var count_utm_arr = ++i } }
(count_utm_arr >= 0) ? utm_arr = utm_arr.slice(0, count_utm_arr) : count_utm_arr = 0;
for (i = 0; i < utm_arr.length; i++) {
//utm_arr[i] = utm_arr[i].replace(/[^a-zA-Z0-9_=-]/g, '');
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
var other_param_web = '?' + replaceAll(decodeURIComponent(utm_arr.filter(v => v ).join('&')).replace(/[\+\s]/ig, '__'), '&', '%26') // Р Р…РЎС“Р В¶Р Р…Р С• Р Т‘Р С•Р В±Р В°Р Р†Р С‘РЎвЂљРЎРЉ separator
var other_param_web_url = '&' + replaceAll(decodeURIComponent(utm_arr.filter(v => v ).join('&')).replace(/[\+\s]/ig, '__'), '&', '%26') // Р Р…РЎС“Р В¶Р Р…Р С• Р Т‘Р С•Р В±Р В°Р Р†Р С‘РЎвЂљРЎРЉ separator
};
// Р СџР С•Р В»РЎС“РЎвЂЎР В°Р ВµР С Р С”РЎС“Р С”РЎС“ GA
var ga_uid_fc = getCookie('_ga');
if (ga_uid_fc && ga_uid_fc != '') {
var ga_uid_arr = ga_uid_fc.split(/\./);
var ga_uid_sm = ga_uid_arr[2]+'.'+ga_uid_arr[3];
};
// Р РЋР С•Р В±Р С‘РЎР‚Р В°Р ВµР С utm_content_plus - content + term
var utm_content_plus = utm_content_sm.slice(0,100)+utm_term_sm.slice(0,100);
// Р В¤Р С•РЎР‚Р СР С‘РЎР‚РЎС“Р ВµР С Р С—Р ВµРЎР‚Р ВµР СР ВµР Р…Р Р…РЎвЂ№Р Вµ Р Т‘Р В»РЎРЏ AppMetrica
var external_source = 'external_source%3D'+af_media_source+'-_-'+utm_source_sm+'-_-'+utm_medium_sm+'-_-'+utm_campaign_sm+'-_-'+utm_content_plus;
external_source = external_source.length > 221 ? external_source.slice(0,221)+'-_-'+ga_uid_sm : external_source+'-_-'+ga_uid_sm;
if (android_af_dp.search(/\?|%3F/) > 0){
var is_q_and = '%26';
} else
{ var is_q_and = '%3F'};
if (ios_af_dp.search(/\?|%3F/) > 0){
var is_q_ios = '%26';
} else
{ var is_q_ios = '%3F'};
// Р В¤Р С•РЎР‚Р СР С‘РЎР‚РЎС“Р ВµР С Р С—Р ВµРЎР‚Р ВµР СР ВµР Р…Р Р…РЎвЂ№Р Вµ Р Т‘Р В»РЎРЏ AppsFlyer
var af_utm_source = utm_source_sm ? '&af_sub1='+utm_source_sm : '';
var af_utm_medium = utm_medium_sm ? '&af_sub2='+utm_medium_sm : '';
var af_utm_campaign = utm_campaign_sm ? '&af_sub3='+utm_campaign_sm : '';
var af_utm_content_plus = utm_content_plus ? '&af_sub4='+utm_content_plus : ''; 
var af_ga_uid_sm = ga_uid_sm ? '&af_sub5='+ga_uid_sm : '';
// Р В¤Р С•РЎР‚Р СР С‘РЎР‚РЎС“Р ВµР С Р С—Р ВµРЎР‚Р ВµР СР ВµР Р…Р Р…РЎвЂ№Р Вµ Р Т‘Р В»РЎРЏ WEB
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
if (web_link.toLowerCase().search('sberbank.ru')<0){
var utm_all=separator_web+web_utm_source+web_utm_medium+web_utm_campaign+web_utm_content+web_utm_term;}
else {var utm_all = '';}
if (af_web_url !=''){
var af_android_url = '&af_android_url=' + encodeURIComponent(af_web_url+other_param_web_url+utm_all)+'&af_param_forwarding=false';
var af_ios_url = '&af_ios_url=' + encodeURIComponent(af_web_url+other_param_web_url+utm_all)+'&af_param_forwarding=false';
} else {
var af_android_url = '';
var af_ios_url = '';
}




if ((af_utm_medium.search("organic")>=0) || (af_utm_medium.search("referral")>=0) || (af_utm_medium.search("free")>=0) || (af_utm_medium.search("email")>=0) || (af_utm_medium.search("none")>=0)){

// Android 
var redirect_android = 'https://app.appsflyer.com/ru.sberbankmobile'+'?'+af_pid+af_c+'&af_dp='+android_af_dp+is_q_and+other_param_app+external_source+af_utm_source+af_utm_medium+af_utm_campaign+af_utm_content_plus+af_ga_uid_sm+af_android_url;
// iOS
var redirect_iphone = 'https://sberbankonline.onelink.me/46WQ'+'?'+'af_force_deeplink=true&'+af_pid+af_c+'&af_dp='+ios_af_dp+is_q_ios+other_param_app+external_source+af_utm_source+af_utm_medium+af_utm_campaign+af_utm_content_plus+af_ga_uid_sm+af_ios_url;
// WEB
var redirect_unknown=web_link+other_param_web+utm_all;

} else {

// Android 
var redirect_android = 'https://app.appsflyer.com/ru.sberbankmobile'+'?'+af_pid+af_c+'&is_retargeting=true'+'&af_dp='+android_af_dp+is_q_and+other_param_app+external_source+af_utm_source+af_utm_medium+af_utm_campaign+af_utm_content_plus+af_ga_uid_sm+af_android_url;
// iOS
var redirect_iphone = 'https://sberbankonline.onelink.me/46WQ'+'?'+'af_force_deeplink=true&'+af_pid+af_c+'&is_retargeting=true'+'&af_dp='+ios_af_dp+is_q_ios+other_param_app+external_source+af_utm_source+af_utm_medium+af_utm_campaign+af_utm_content_plus+af_ga_uid_sm+af_ios_url;
// WEB
var redirect_unknown = web_link+other_param_web+utm_all;

}




// Р С—РЎР‚Р С•Р Р†Р ВµРЎР‚Р С”Р В° Р С—Р В»Р В°РЎвЂљРЎвЂћР С•РЎР‚Р СРЎвЂ№
function check_platform(ua) {if(/android/gi.test(ua)){return 'android';}if(/iphone|ipod/gi.test(ua)){return 'iPhone';}return  'unknown';}
// Р С—Р ВµРЎР‚Р ВµР В°Р Т‘РЎР‚Р ВµРЎРѓР В°РЎвЂ Р С‘РЎРЏ
function redirect_user (address) {setTimeout(function(){window.location.href=address}, 2100);return true;}
// РЎРѓР С•Р С•Р В±РЎвЂ°Р ВµР Р…Р С‘Р Вµ Р С—Р С•Р В»РЎРЉР В·Р С•Р Р†Р В°РЎвЂљР ВµР В»РЎР‹
function inform_user (msg) {document.write(msg);return true;}
// Р Р…Р В°РЎвЂЎР В°Р В»Р С•
var platform=check_platform(navigator.userAgent);
if (platform=="android") {redirect_user(redirect_android);}
else if (platform=="iPhone") {redirect_user (redirect_iphone);}
else { redirect_user(redirect_unknown);}
