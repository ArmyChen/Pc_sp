<?php
define('IN_ECTOUCH', true);
require (dirname(__FILE__) . '/../../mobile/include/init.php');
$oid = $_GET['oid'];
$_SESSION['wxch_oid'] = $oid; //1?
$getoid = 'oid=' . $oid;
$appid = $db -> getOne("SELECT appid FROM `site_config` WHERE `id` = 1");//
$cfg_baseurl = $db -> getOne("SELECT cfg_value FROM site_cfg WHERE cfg_name = 'baseurl'");  //http://www.mall93.cn/
$back_url = $cfg_baseurl . 'wechat/oauth/wxch_back.php?' . $getoid;//http://www.mall93.cn/wechat/oauth/wxch_back.php?oid=1
$redirect_uri = urlencode($back_url);//将字符串以URL编码 返回值
$state = 'wechat';
$scope = 'snsapi_userinfo';//应用授权作用域，snsapi_base （不弹出授权页面，直接跳转，只能获取用户openid），snsapi_userinfo （弹出授权页面，可通过openid拿到昵称、性别、所在地。并且//，即使在未关注的情况下，只要用户授权，也能获取其信息） 
$oauth_url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' . $appid . '&redirect_uri=' . $redirect_uri . '&response_type=code&scope=' . $scope . '&state=' . $state . '#wechat_redirect';
header('Expires: 0');
header('Last-Modified: ' . gmdate('D, d M Y H:i:s') . ' GMT');
header('Cache-Control: no-store, no-cahe, must-revalidate');
header('Cache-Control: post-chedk=0, pre-check=0', false);
header('Pragma: no-cache');
header("HTTP/1.1 301 Moved Permanently");
header("Location: $oauth_url");
exit;
