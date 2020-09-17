function escapeall(str) {
 var notescaped = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_.!~*'()".split("");
 var eversion = ["%61","%62","%63","%64","%65","%66","%67","%68","%69","%6A","%6B","%6C","%6D","%6E","%6F","%70","%71","%72","%73","%74","%75","%76","%77","%78","%79","%7A","%41","%42","%43","%44","%45","%46","%47","%48","%49","%4A","%4B","%4C","%4D","%4E","%4F","%50","%51","%52","%53","%54","%55","%56","%57","%58","%59","%5A","%30","%31","%32","%33","%34","%35","%36","%37","%38","%39","%2D","%5F","%2E","%21","%7E","%2A","%27","%28","%29"]
 var escapedtext = "";
 for(var v = 0; v < str.length; v++) {
  var issn = false;
  for(var c = 0; c < notescaped.length; c++) {
   if(str.charAt(v) === notescaped[c]) {
    issn = true;
   }
  }
  if(issn) {
   escapedtext += eversion[notescaped.indexOf(str.charAt(v))];
  }
  else {
   escapedtext += escape(str.charAt(v));
  }
 }
 return escapedtext;
}