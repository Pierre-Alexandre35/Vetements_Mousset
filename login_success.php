<?php  
 //login_success.php  
 session_start();  
 echo '<h1>dsdssd</h1>';
 if(isset($_SESSION["username"]))  
 {  
      echo '<h3>Login Success, Welcome - '.$_SESSION["username"].'</h3>';  
      echo '<br /><br /><a href="logout.php">Logout</a>';  
      echo '<br /><br /><a href="new_product.php">Add new product</a>';  

 }  
 else  
 {  
      header("location:pdo_login.php");  
 }  
 ?>  