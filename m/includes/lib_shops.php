<?php


if (!defined('IN_ECS'))
{
    die('Hacking attempt');
}

function encrypt($plain_text) {  

	return $plain_text;
}

function decrypt($c_t) {

    return $c_t;
}

function gettbURL($code) {
     
	 $u = explode(':',$code);
     $goods_id = decrypt(trim($u[1]));
     $sql = 'SELECT click_url, shop_click_url FROM ' . $GLOBALS['ecs']->table('goods') . " WHERE goods_id = '" . $goods_id . "'";
	 
	 $row = $GLOBALS['db']->getRow($sql);

     if(trim($u[0]) == 1) {
	 	$url = $row['click_url'];
	 }
	 else {
	 	$url = $row['shop_click_url'];
	 }
    return $url;
}

?>
