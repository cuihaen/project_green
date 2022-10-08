
//슬라이드 메뉴 클릭시 해당 콘텐츠로 스스륵~~~ 이동
$('h3 a').click(function(e){
   e.preventDefault(); //href="#" 속성을 막아주는..메소드

   var value=0; //이동할 스크롤의 거리

   if($(this).hasClass('link1')){   //첫번째 메뉴를 클릭했을때  if($(this).is('#link1')){
      value= -170 + $('#content .con1').offset().top;  // 해당 콘테츠의 상단의 거리~~
   }else if($(this).hasClass('link2')){
      value= -170 + $('#content .con2').offset().top; 
   }else if($(this).hasClass('link3')){
      value= -170 + $('#content .con3').offset().top; 
   }
   
   $("html,body").stop().animate({"scrollTop":value},1000);
});