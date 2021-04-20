<?php
if(isset($_POST) && !empty($_POST)) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $admin_good = '{ "success": true, "secret": "Access Granted: Level = Admin" }';
    $admin_bad = '{ "success": false, "message": "Access Denied: Invalid Credentials" }';

    if( $username == 'admin' && $password == "nimda" ) {
        echo( $admin_good );    
    } else {
        echo( $admin_bad );
    }
} else {
    $post_bad = '{ "success": false, "message": "Only POST access accepted" }';
    echo( $post_bad );

}
?>