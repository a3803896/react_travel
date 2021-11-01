import jsSHA from 'jssha';

function getAuthorizationHeader() {
  var AppID = '9f089beb4f3c4195adae8c846bc33cbc';
  var AppKey = '5vNPe1Li-X804pPfJ6o4cs8Oxd0';

  var GMTString = new Date().toGMTString();
  var ShaObj = new jsSHA('SHA-1', 'TEXT');
  ShaObj.setHMACKey(AppKey, 'TEXT');
  ShaObj.update('x-date: ' + GMTString);
  var HMAC = ShaObj.getHMAC('B64');
  var Authorization = 'hmac username="' + AppID + '", algorithm="hmac-sha1", headers="x-date", signature="' + HMAC + '"';

  return { Authorization: Authorization, 'X-Date': GMTString };
}

export default getAuthorizationHeader;
