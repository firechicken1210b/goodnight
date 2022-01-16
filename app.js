console.log("myApp");

var mail_Path = "mail/";
var mail_Filename = ['1.我是尼克歐', '1_Takao@77mail.com'];
var mail_Filetype = ".svg";

// var mail_address = [
// 				'1.我是尼克歐', 
// 				'1_Takao@77mail.com',
// 				'2.我是湯沐',
// 				'2_summertime@77mail.com',
// 				'3.我是阿拉丁',
// 				'3_paris@77mail.com',
// 				'4.我是辛蒂',
// 				'4_sanpo@77mail.com',
// 				'5.我叫伯利',
// 				'5_dayoff@77mail.com',
// 				'6.我叫火機',
// 				'6_unique@77mail.com',
// 				'7.我是22565',
// 				'7_luck@77mail.com',
// 				'8.我是芬',
// 				'8_coulour@77mail.com',
// 				'9.我是第172次扇形車庫',
// 				'9_xiguan@77mail.com',
// 				'10.我是他最忠實的僕人',
// 				'10_1109@77mail.com',
// 				'11.我是傑克孫',
// 				'11_AA@77mail.com',
// 				'12.我是狄嘉',
// 				'13.我是缺點',
// 				'14.我是秋天才',
// 				'15.我是羅羅'
// 				];

var mail_address = [
	'我是尼克歐', 
	'Takao@77mail.com',
	'我是湯沐',
	'summertime@77mail.com',
	'我是阿拉丁',
	'paris@77mail.com',
	'我是辛蒂',
	'sanpo@77mail.com',
	'我叫伯利',
	'dayoff@77mail.com',
	'我叫火機',
	'unique@77mail.com',
	'我是22565',
	'luck@77mail.com',
	'我是芬',
	'coulour@77mail.com',
	'我是第172次扇形車庫',
	'xiguan@77mail.com',
	'我是他最忠實的僕人',
	'1109@77mail.com',
	'我是傑克孫',
	'AA@77mail.com',
	'我是狄嘉',
	'morning@77mail.com',
	'我是缺點',
	'我是秋天才',
	'我是羅羅'
	];

function addElementDiv(obj,i) {
	var parent = document.getElementById(obj);
	var a = document.createElement("a");
	//a.setAttribute("href", "page"+i+".html");
	a.setAttribute("href", "mail.html?_Thank_you_for_your_email="+mail_address[i]);
	a.setAttribute("class", "ic_a");
	var div = document.createElement("div");
	div.setAttribute("class", "index_container-mail_"+i%2);
	div.innerHTML = mail_address[i];
	a.appendChild(div);
	parent.appendChild(a);
	console.log("112ss3");
}

function addss() {
	for (i = 0; i < mail_address.length; i++) { 
		addElementDiv("index_container",i);
	}
}
addss();