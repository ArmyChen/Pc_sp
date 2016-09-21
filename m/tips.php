<?php



define('IN_ECS', true);

require(dirname(__FILE__) . '/includes/init.php');
require(dirname(__FILE__) . '/common.php');
if ((DEBUG_MODE & 2) != 2)
{
    $smarty->caching = true;
}








if (!$smarty->is_cached('tips.dwt', $cache_id))
{
   
   

    assign_dynamic('tips');
}

   

 $smarty->display('tips.dwt', $cache_id);








?>