<?
   session_start();
?>
    <meta charset="UTF-8">
<?
  @extract($_GET); 
  @extract($_POST); 
  @extract($_SESSION); 
  /*
    $id='green2'
    $name='홍길동'
    $hp1='010'
    $hp2='1111'
    $hp3='2222'
  */


   if(!$id) {  /* !='없으면'*/
     echo("
           <script>
             window.alert('아이디를 입력하세요');
             history.go(-1);
           </script>
         ");
         exit;
   }

   if(!$name) {  /* !='없으면'*/
     echo("
           <script>
             window.alert('이름을 입력하세요');
             history.go(-1);
           </script>
         ");
         exit;
   }

   if(!($hp2 && $hp3)) {
     echo("
           <script>
             window.alert('연락처를 입력하세요');
             history.go(-1);
           </script>
         ");
         exit;
   }


   include "../lib/dbconn.php";

   $sql = "select * from member where id='$id'";
   $result = mysql_query($sql, $connect); //있으면 1, 없으면 null

   $num_match = mysql_num_rows($result);  //1 null

   if(!$num_match) //검색 레코드가 없으면
   {
     echo(" 
           <script>
             window.alert('등록되지 않은 아이디 입니다');
             history.go(-1);
           </script>
         ");
    }
    else     //검색 레코드가 있으면
    {
         $hp = $hp1."-".$hp2."-".$hp3;
        
		     $row = mysql_fetch_array($result); 
          //$row[id] ,.... $row[level]
         $sql ="select * from member where id='$id' and name='$name' and hp='$hp'";
         $result = mysql_query($sql, $connect);
         $num_match = mysql_num_rows($result); //있으면 1, 없으면 null
     
  /* db에 이미 암호화 된 pass를 다시 암호화해서 기존의 pass로 알아낼수 없다,
  암호화된 pass가 입력된 pass의 암호화와 일치하는가를 확인해야함*/

        if(!$num_match) //null이면=입력된 pass가 암호화된 패스와 맞지 않다면
        {
           echo("
              <script>
                window.alert('등록된 정보가 없습니다');
                history.go(-1);
              </script>
           ");

           exit;
        }
        else  //1이면=아이디와 이름 전화번호가 모두 일치 한다면
        {
           $id = $row[id];
           $name = $row[name];
           $hp = $row[hp];
           $date = $row[regist_day];

        function generateRandomPassword($length=8, $strength=0) {
            $vowels = 'aeuy';
            $consonants = 'bdghjmnpqrstvz';  //랜덤으로 뽑아낼 기본 문자
            if ($strength & 1) {
                $consonants .= 'BDGHJLMNPQRSTVWXZ';  //추가할 문자
            }
            
            $password = '';
            $alt = time() % 2;
            for ($i = 0; $i < $length; $i++) {
                if ($alt == 1) {
                    $password .= $consonants[(rand() % strlen($consonants))];
                    $alt = 0;
                } else {
                    $password .= $vowels[(rand() % strlen($vowels))];
                    $alt = 1;
                }
            }
            return $password;
        }
        $ranpass = generateRandomPassword(8,1);  //랜덤으로 뽑은 8자의 문자

        //이메일함수를 활용해 메일로 보내줄 수도 있다!(응용해보기!)
            
        echo " 
          <script>
          $('.popup').fadeIn('slow');
          $('.modal_bg').fadeIn('fast'); // 팝업창띄우기
          </script>


          <strong> $name 님 가입정보</strong>
          <p>$name 님의 임시비밀번호는 <strong> $ranpass </strong> 입니다</p>
          <dl>
            <dt>아이디 :</dt> 
            <dd>$id</dd>
            <dt>이름 :</dt>
            <dd>$name</dd>
            <dt>연락처:</dt>
            <dd>$hp</dd>
            <dt>가입일자:</dt>
            <dd>$date</dd>
          </dl>
          <strong>* 로그인 후 반드시 비밀번호를 변경해주세요.</strong>";
        
        //업데이트(수정문!)변경된 비밀번호를 해당 아이디의 비밀번호란에 업데이트 해주어야한다!
        $sql = "update member set pass=password('$ranpass') where id='$id' and name='$name' and hp='$hp'";
        $result = mysql_query($sql, $connect);
        }
        
        
   }          
?>
