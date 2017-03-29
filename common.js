var dateFormat = require('dateformat');

//해당 상수 정의되지 않을 경우 개별 페이지 실행 불가
const FOLIO = true;
var TIME_YMDHIS = dateFormat(new Date(),"isoDateTime");

//접속 기기 체크
var MOBILE = "";
const mobileKeyWords = new Array('iPhone', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson');
for (var word in mobileKeyWords){
if (navigator.userAgent.match(mobileKeyWords[word]) != null){
MOBILE = true;
break;
}
}

//토큰 여부(로그인)
