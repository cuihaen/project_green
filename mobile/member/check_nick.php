﻿<meta charset="utf-8">
<?
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);

   if(!$nick) 
   {
      echo("닉네임을 입력하세요.");
   }
   else
   {
      include "../lib/dbconn.php";
 
      $sql = "select * from member where nick='$nick' ";

      $result = mysql_query($sql, $connect);
      $num_record = mysql_num_rows($result);

      if ($num_record)
      {
       
         echo "<span style='color:#bd0202'>다른 닉네임을 사용하세요.</span>";
      }
      else
      {
         echo "<span style='color:#1b8ab3'>사용가능한 닉네입니다.</span>";
      }
		 
      mysql_close();
   }
?>

