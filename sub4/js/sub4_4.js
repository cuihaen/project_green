  //객체배열(json)
  var news = [
        {
            title:'삼양사 여자사이클팀, ‘2023 창녕투어전국도로사이클대회 종합 1위', 
            date:'2023-02-21', 
            explain:'<p>삼양사 여자사이클팀(단장 : 양재만 PU장)은 2월 14일부터 17일까지 경상남도 창녕군에서 개최된 ‘2023 창녕투어 전국도로사이클대회’에 참가해 종합 1위를 차지했다. 삼양사 여자사이클팀은 이번 대회에서 금메달 7개, 은메달 5개, 동메달 2개를 차지했으며, 김용미 감독은 최우수감독상, 이영화 코치는 최우수지도자상, 나아름 선수는 최우수선수상, 천윤영 선수는 최우수신인상을 수상했다.</p>', 
            link:'https://www.samyang.com/kr/media/newsroom/view?idx=5959&page=7&gubun=news&scrollpos=691.8181762695312'
        },
        {
            title:'삼양사 여자사이클팀, ‘제39회 대통령기 전국사이클대회’ 종합 3위', 
            date:'2022-05-04', 
            explain:'<p>삼양사 여자사이클팀(단장 : 양재만 PU장)은 4월 16일부터 21일까지 전라남도 나주시에서 개최된 ‘제39회 대통령기 전국사이클대회’에 참가해 종합 3위를 차지했다. 삼양사 여자사이클팀은 이번 대회에서 금메달 2개, 은메달 1개, 동메달 5개를 획득했다.</p>', 
            link:'https://www.samyang.com/kr/media/newsroom/view?idx=3900'
        },
        {
            title:'삼양사 여자사이클팀, ‘2022 창녕투어 전국도로사이클대회’ 종합 우승', 
            date:'2022-02-08', 
            explain:'<p>삼양사 여자사이클팀(단장 : 양재만 PU장)은 2월 8일부터 11일까지 경상남도 창녕군에서 개최된 ‘2022 창녕투어 전국도로사이클대회’에 참가해 종합 우승을 차지했다. 삼양사 여자사이클팀은 이번 대회에서 금메달 7개, 은메달 1개, 동메달 3개를 차지했으며, 김용미 감독은 최우수 감독상, 이영화 코치는 최우수 지도자상, 나아름 선수는 최우수 선수상을 수상했다.</p>', 
            link:'https://www.samyang.com/kr/media/newsroom/view?idx=3899&page=9&gubun=news&scrollpos=8339.0908203125'
        },
        {
            title:'삼양사 여자사이클팀, ‘2021 8.15 경축 양양 전국사이클대회’ 종합 2위 차지', 
            date:'2021-08-15', 
            explain:'<p>삼양사 여자사이클팀(단장 : 양재만 PU장)은 8월 27일부터 31일까지 강원도 양양군에서 개최된 ‘2021 8.15경축 양양 전국사이클대회’에 참가해 종합 2위를 차지했다. 삼양사 여자사이클팀은 이번 대회에서 금메달 6개, 은메달 2개, 동메달 3개를 획득했으며, 이영화 코치는 최우수 지도자상을 수상했다.</p>', 
            link:'https://www.samyang.com/kr/media/newsroom/view?idx=3899&page=9&gubun=news&scrollpos=8339.0908203125'
        },
        {
            title:'삼양사 여자사이클팀, 2021 KBS 양양 전국사이클대회 종합 3위', 
            date:'2021-06-26', 
            explain:'<p>삼양사 여자사이클팀(단장 : 양재만 PU장)은 6월 26일부터 7월 7일까지 강원도 양양군에서 개최된 ‘2021 KBS 양양 전국사이클대회’에 참가해 종합 3위를 차지했다. 삼양사 여자사이클팀은 이번 대회에서 금메달 4개, 은메달 2개, 동메달 4개를 획득했다.</p>', 
            link:'https://www.samyang.com/kr/media/newsroom/view?idx=3897'
        },
        {
            title:'삼양사 여자사이클팀, ‘제68회 3.1절 기념 강진투어 전국도로사이클대회’ 종합 우승', 
            date:'2021-03-01', 
            explain:'<p>삼양사 여자사이클팀(단장 : 양재만 PU장)은 3월 3일부터 6일까지 전라남도 강진군에서 개최된 ‘제68회 3.1절 기념 강진투어 전국도로사이클대회’에 참가해 종합 우승을 차지했다. 삼양사 여자사이클팀은 이번 대회에서 금메달 6개를 차지했으며, 김용미 감독은 최우수 감독상, 이영화 코치는 최우수 지도자상, 나아름 선수는 최우수 선수상을 수상했다.</p>', 
            link:'https://www.samyang.com/kr/media/newsroom/view?idx=3896'
        },
        {
            title:'삼양사 여자사이클팀, ‘제100회 전국체육대회’ 금1·동1 수상', 
            date:'2019-10-14', 
            explain:'<p>삼양사 여자사이클팀(단장 : 이희정 PU장)은 10월 4일부터 10일까지 강원도 양양에서 개최된 ‘제100회 전국체육대회’에 참가했다. 삼양사 여자사이클팀은 이번 대회 도로단체 종목에서 117.5km, 3시간 40분으로 금메달과 개인추발에서 동메달을 수상했다.</p>', 
            link:'https://www.samyang.com/kr/media/newsroom/view?idx=3895'
        },
        {
            title:'삼양사 여자사이클팀, ‘2019 KBS 양양 전국사이클선수권대회’ 종합 3위', 
            date:'2019-06-22', 
            explain:'<p>삼양사 여자사이클팀(단장 : 이희정 PU장)은 6월22일부터 28일까지 강원도 양양에서 개최된 ‘2019 KBS 양양 전국사이클선수권대회’에서 종합 3위를 차지했다. 삼양사 여자사이클팀은 이번 대회에서 금메달 2개, 은메달 4개, 동메달 3개를 획득했다. 삼양사 여자사이클팀(단장 : 이희정 PU장)은 6월22일부터 28일까지 강원도 양양에서 개최된 ‘2019 KBS 양양 전국사이클선수권대회’에서 종합 3위를 차지했다. 삼양사 여자사이클팀은 이번 대회에서 금메달 2개, 은메달 4개, 동메달 3개를 획득했다.</p>', 
            link:'https://www.samyang.com/kr/media/newsroom/view?idx=3894'
        },
      ];
  var ind = 0;  
  var txt ='';

  function popchange(){
    txt='';
        txt+= '<dl>';
        txt+= '<dt>'+news[ind].title+'</dt>';
        txt+= '<dd>'+news[ind].date+'</dd>';
        txt+= '</dl>';
        txt+='<img src="./images/content4/news0'+(ind+1)+'.jpg" alt="'+news[ind].title+'"></img>';
        txt+= '<div class="textBox">'+news[ind].explain+'</div>';  
        txt+= '<a href="'+news[ind].link+'" class="newsLink" target="_blank">뉴스페이지 : '+news[ind].link+'</a>';  
        $('.subPop .subPopup .txt').html(txt);
    };


  $('.subPop .subPopMenu .openPop').click(function(e){
      e.preventDefault();
      
      ind = $(this).index('.subPop .subPopMenu .openPop');  // 0 1 2 3

      $('.subPopBtn').fadeIn('slow');
      $('.subPop .subModalBox').fadeIn('fast');
      $('.subPop .subPopup').fadeIn('slow');

      popchange();

  });

  $('.subCloseBtn,.subPop .subModalBox').click(function(e){
      e.preventDefault();
      $('.subPop .subModalBox').fadeOut('fast');
      $('.subPop .subPopup').fadeOut('fast');
      $('.subPopBtn').fadeOut('fast');
  });

  
  $('.subPopBtn a').click(function(e){
       e.preventDefault();

       $('.subPop .subPopup').hide().fadeIn('slow'); 
      
      if($(this).hasClass('pre')){
          if(ind==0)ind=news.length;
          ind--;
          popchange();
      }else if($(this).hasClass('next')){
          if(ind==news.length-1)ind=-1;
          ind++;
          popchange();
      };

  });
