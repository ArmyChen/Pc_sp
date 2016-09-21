window.pageConfig=window.pageConfig||{};
pageConfig.wideVersion=(function(){return(screen.width>=1210);})();
if(pageConfig.wideVersion&&pageConfig.compatible){
	document.getElementsByTagName("body")[0].className="root61";
	}
pageConfig.FN_GetUrl=function(a,b){
	if(typeof a=="string"){
		return a;
		}else{
			return pageConfig.FN_GetDomain(a)+b+".html";}};
			pageConfig.FN_StringFormat=function(){
				var e=arguments[0],f=arguments.length;
				if(f>0){
					for(var d=0;d<f;d++){
						e=e.replace(new RegExp("\\{"+d+"\\}","g"),arguments[d+1]);
						}}return e;};
						pageConfig.FN_GetDomain=function(b,c){
							var a="";
							switch(b){
								case 1:a=this.FN_StringFormat(a,"www","product/");break;
								case 2:a=this.FN_StringFormat(a,"book","");break;
								case 3:a=this.FN_StringFormat(a,"mvd","");break;
								default:break;}return a;};
								pageConfig.FN_GetImageDomain=function(d){
									var c,d=String(d);
									switch(d.match(/(\d)$/)[1]%5){
										case 0:c=10;break;
										case 1:c=11;break;
										case 2:c=12;break;
										case 3:c=13;break;
										case 4:c=14;break;
										default:c=10;}return"".replace("{0}",c);};
										pageConfig.FN_ImgError=function(b){var c=b.getElementsByTagName("img");for(var a=0;a<c.length;a++){c[a].onerror=function(){var d="",e=this.getAttribute("dataimg");this.src="/themes/360buy/images/misc/lib/img/e/blank.gif";this.className=d;};}};
pageConfig.FN_SetPromotion=function(b){
	if(b==0){return;}
	var e="限量,清仓,首发,满减,满赠,直降,新品,独家,人气,热卖",d=e.split(",")[parseInt(b)-1],c="<b class='pi{0}'>{1}</b>";
	switch(d.length){
		case 1:c=c.replace("{0}"," pix1 pif1");break;
		case 2:c=c.replace("{0}"," pix1");break;
		case 4:c=c.replace("{0}"," pix1 pif4");break;}
		return c.replace("{1}",d);};
		pageConfig.FN_GetRandomData=function(c){
			var b=0,f=0,a,e=[];
			for(var d=0;d<c.length;d++){
				a=c[d].weight?parseInt(c[d].weight):1;
				e[d]=[];
				e[d].push(b);
				b+=a;
				e[d].push(b);
				}
				f=Math.ceil(b*Math.random());
				for(var d=0;d<e.length;d++){
					if(f>e[d][0]&&f<=e[d][1]){return c[d];}}};
					pageConfig.FN_GetCompatibleData=function(b){
						var a=(screen.width<1210);
						if(a){
							b.width=b.widthB;b.height=b.heightB;b.src=b.srcB;}return b;};
pageConfig.FN_InitSlider=function(e,g){
	var d=function(n,i){
		return n.group-i.group;
		};
	g.sort(d);var j=g[0].data,h=[],b=(j.length==3)?"style2":"style1",k=(screen.width<1210),l,c,m,a;h.push('<div class="slide-itemswrap"><ul class="slide-items"><li class="');h.push(b);h.push('" data-tag="');h.push(g[0].aid);h.push('">');for(var f=0;f<j.length;f++){l=j[f];c=k?l.widthB:l.width;m=k?l.heightB:l.height;a=k?l.srcB:l.src;h.push('<div class="fore');h.push(f+1);h.push('"><a target="_blank" href="');h.push(l.href);h.push('"><img dataimg="2" src="');h.push(a);h.push('" width="');h.push(c);h.push('" height="');h.push(m);h.push('" alt="');h.push(l.alt);h.push('" /></a></div>');}h.push('</li></ul></div><div class="slide-controls"><span class="curr">1</span></div>');document.getElementById(e).innerHTML=h.join("");};
	function login(){
		location.href="https://passport.360buy.com/new/login.aspx?ReturnUrl="+escape(location.href);return false;
		}
		function regist(){location.href="https://passport.360buy.com/new/registpersonal.aspx?ReturnUrl="+escape(location.href);return false;}
		function createCookie(c,d,f,e){
			var e=(e)?e:"/";if(f){var b=new Date();b.setTime(b.getTime()+(f*24*60*60*1000));var a="; expires="+b.toGMTString();}else{var a="";}document.cookie=c+"="+d+a+"; path="+e;}function readCookie(b){var e=b+"=";var a=document.cookie.split(";");for(var d=0;d<a.length;d++){var f=a[d];while(f.charAt(0)==" "){f=f.substring(1,f.length);}if(f.indexOf(e)==0){return f.substring(e.length,f.length);}}return null;}
			function add_to_favorite(d, c){
				
				if(document.all){
					window.external.AddFavorite(d,c);
				}else{
					if(window.sidebar){
						window.sidebar.addPanel(c,d,"");
					}else{
						alert("对不起，您的浏览器不支持此操作!\n请您使用菜单栏或Ctrl+D收藏本站。");
					}
				}
			}
			function search(c){
				var d="";var b=search.cid;var f="";if("string"==typeof(b)&&""!=b){f+="&cid="+b;}var a=document.getElementById(c);var g=a.value;g=g.replace(/^\s*(.*?)\s*$/,"$1");if(g.length>38){g=g.substring(0,38);}if(""==g){window.location.href=window.location.href;return;}var e=0;if("undefined"!=typeof(window.pageConfig)&&"undefined"!=typeof(window.pageConfig.searchType)){e=window.pageConfig.searchType;}switch(e){case 0:break;case 1:f+="&book=y";break;case 2:f+="&mvd=music";break;case 3:f+="&mvd=movie";break;case 4:f+="&mvd=education";break;case 5:g=encodeURIComponent(g);d="";break;default:break;}g=g.replace(/#/g,"%23").replace(/\+/g,"%2b");d=d.replace(/\{keyword}/,g);d=d.replace(/\{additional}/,f);if("undefined"==typeof(search.isSubmitted)||false==search.isSubmitted){setTimeout(function(){window.location.href=d;},10);search.isSubmitted=true;}}
				
