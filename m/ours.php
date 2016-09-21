<?php



define('IN_ECS', true);

require(dirname(__FILE__) . '/includes/init.php');
require(dirname(__FILE__) . '/common.php');
if ((DEBUG_MODE & 2) != 2)
{
    $smarty->caching = true;
}








if (!$smarty->is_cached('ours.dwt', $cache_id))
{
   
   

    assign_dynamic('ours');
}

   

 $smarty->display('ours.dwt', $cache_id);








?>