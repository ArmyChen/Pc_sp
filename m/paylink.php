<?php



define('IN_ECS', true);

require(dirname(__FILE__) . '/includes/init.php');
require(dirname(__FILE__) . '/common.php');
if ((DEBUG_MODE & 2) != 2)
{
    $smarty->caching = true;
}




$vipType_id = isset($_REQUEST['vipType'])  ? intval($_REQUEST['vipType']) : 0;




if (!$smarty->is_cached('paylink.dwt', $cache_id))
{
   
   
 $smarty->assign('vipType_id',      $vipType_id);//╢ыоЗпео╒

    assign_dynamic('paylink');
}

   

 $smarty->display('paylink.dwt', $cache_id);








?>