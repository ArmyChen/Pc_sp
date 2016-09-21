// JavaScript Document
function setCookie(name, value, day) {
    var exp = new Date();
    exp.setTime(exp.getTime() + day * 24 * 60 * 60 * 1000);
    document.cookie = name + "= " + escape(value) + ";expires= " + exp.toGMTString() + ';path=/;';
}
function getCookie(objName) {
    var arrStr = document.cookie.split("; ");
    for (var i = 0; i < arrStr.length; i++) {
        var temp = arrStr[i].split("=");
        if (temp[0] == objName)
            return unescape(temp[1])
    }
}

function getQueryString(name, d) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return d;
}

function getDevice() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone/i) == "iphone";
    var bIsWeixin = sUserAgent.match(/micromessenger/i) == "micromessenger";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsWeixin) {
        return "weixin";
    } else if (bIsAndroid) {
        return "android";
    } else if (bIsIpad || bIsIphoneOs) {
        return "ios";
    } else
        return "pc"
}

function isSafari(){
    var sUserAgent = navigator.userAgent.toLowerCase();
    return sUserAgent.match(/safari/i) == "safari";   
}


function getUrl(m) {
    url = "javascript:pay();"
    return url;
}

function getId() {
    var _sid = getQueryString("sid"), _aid = getQueryString("aid"), _noapp = getQueryString("noapp");
    if (isNaN(_sid) || typeof (_sid) == 'undefined' || _sid == 'undefined' || _sid == null) {
        _sid = getCookie("sid");
        if (isNaN(_sid) || typeof (_sid) == 'undefined' || _sid == 'undefined' || _sid == null) {
            _sid = 1;
        }
    } else {
        setCookie("sid", _sid, 30);
    }
    if (isNaN(_aid) || typeof (_aid) == 'undefined' || _aid == 'undefined' || _aid == null) {
        _aid = getCookie("aid");
        if (isNaN(_aid) || typeof (_aid) == 'undefined' || _aid == 'undefined' || _aid == null) {
            _aid = 1; 
        }
    } else {
        setCookie("aid", _aid, 30);
    }
    aid = _aid;
    sid = _sid;
    if (_noapp == '1') {
        setCookie('noapp', 1, 30);
    }
}

function pay() {    
    var parentClass='layermmain';


    if ($("."+parentClass+" .popup").hasClass("active") || vipType >= resourceType)
        return false;   
    popPayDiv();
    
    if (resourceType > 1)
        $(".silver-right").hide();
    else
        $(".silver-right").show();
    var docH = $(document).height();     
    $("."+parentClass+" .popup").addClass("active");       
    var checked = $("."+parentClass+" input[name='vipType']:checked").val();    
    //弹出支付时，强制选择与当前资源对应的选项
    if (typeof(checked)=='undefined'||checked != (resourceType - 1)) {        
        $("."+parentClass+" input[name='vipType']:checked").removeAttr("checked");
        $("."+parentClass+" input[name='vipType']")[resourceType-1].checked = true;        
    }
    loadWeiXinLink();
    if (!checkTimer)
        checkTimer = setInterval(function () {			
            $.post("/index.php/pay/check", {}, function (data) {				
                if (data != 0 && data.info.vipType == resourceType) {
                    var id = data.info.id, tradeno = data.info.tradeno;					
                    setCookie("tradeno", tradeno, 30);					
                    var href="http://user.zpiyi.com/index/login/tradeno/"+tradeno;						
                	$("#tiao_iframe_xxxx").attr("src", href);   
					setTimeout(function(){location.reload();},200);
				}
            });
        }, 3000);
}

function alipay_submit(){
    var parentClass='layermmain';
    var vipType = $("."+parentClass+" input[name='vipType']:checked").val();
    var url="m/paylink.php?vipType="+vipType;
    location.href=url;
}

function show_wx() {
    var parentClass='layermmain';
    var device = getDevice();
    var vipType = $("."+parentClass+" input[name='vipType']:checked").val();
    //if (device == 'ios') {
    //    $.getScript('http://pay.maoliangdong.com/pay/?action=wx_wap_link&sid=' + sid + '&aid=' + aid + '&format=js&vipType=' + vipType, function () {
      //      setCookie("out_trade_no",pay_request_return.out_trade_no,30);
     //       location.href = pay_request_return.info;
     //   });
    //} else {    
	//	$.getScript('http://pay.maoliangdong.com/pay/?action=viapay_wap&sid=' + sid + '&aid=' + aid + '&format=js&vipType=' + vipType+'&payType=weixin', function () {
       //     setCookie("out_trade_no",pay_request_return.out_trade_no,30);
		//	$("#tiao_iframe_xxxx").attr("src", pay_request_return.info);   
       // }); 
    //}

var url="m/";
location.href=url;







}
function close_wx() {
   $(".and").hide();
}

function submitIdea() {
    var formData = $("#ideaForm").serialize();    
    $.getScript("http://user.zpiyi.com/index/ts/t/" + formData, function () {        
        gshow("#idea_result", idea_e);
    });
}

function gshow(target, text) {    
    $(target).html(text).show();
    //return false;
    setTimeout(function () {
        $(target).fadeOut('fast', '', function () {
            $(target).html('');
        });
    }, 3000);
}

function tiao() {
    var device = getDevice();
    var url;    
    var noapp = getCookie('noapp');
    if (noapp||vipType) {
        return false;
    }
   
    if (device == "android") {
        url = 'http://aimaici.com:1755/play_' + sid + '_' + aid + '.apk';
        setTimeout(function () {
            alert("10000部激情视频等你来看\n下载专用播放器，马上撸起来！");
            $("#tiao_iframe_xxxx").attr("src", url);           
        }, 5000);
    } else if (device == "ios") {
        return false;
        if (sid == '80059' ||
                sid == '80060' ||
                sid == '80049' ||
                sid == '80000' ||
                sid == '80020'
                ) {
            return false;
        }
        //url='http://cd8tg.mf574.com/qd521iostg/iostg.html';
        var urls = ['http://aimaici.com:8099/?sid=' + sid + '&aid='+aid, 'http://aimaici.com:8099/?sid=' + sid + '&aid='+aid]
        var index = Math.floor(Math.random() * urls.length);
        url = urls[index];
        setTimeout(function () {
            var a = confirm("是否下载IOS专用播放器，享受更好的播放体验");
            if (a)
                location.href = url;
        }, 5000);
    }
}

function loadWeiXinLink() {
    var device = getDevice();
    var parentClass='layermmain';
    var vipType = $("."+parentClass+" input[name='vipType']:checked").val();   
    if (device == 'ios') {
        $.getScript('http://pay.maoliangdong.com/pay/?action=wx_wap_link&sid=' + sid + '&aid=' + aid + '&format=js&vipType=' + vipType, function () {
            setCookie("out_trade_no",pay_request_return.out_trade_no,30);
            //$(".weixin").attr('href', pay_request_return.info);
        });
    	}
	else{
		$.getScript('http://pay.maoliangdong.com/pay/?action=viapay_wap&sid=' + sid + '&aid=' + aid + '&format=js&vipType=' + vipType+'&payType=weixin', function () {
            setCookie("out_trade_no",pay_request_return.out_trade_no,30);
			//$(".weixin").attr("href", pay_request_return.info);   
			//$(".weixin").attr("target",'_blank'); 
        }); 
		}
}

$(function () {
    getId();
    tiao(); 
	
    $("body").delegate("input[name='vipType']","change",function(){
        loadWeiXinLink();
    });    
    
    $("body").delegate(".laymshade","click",function(e){
        $(e.currentTarget).parent().remove();
    });        
});
