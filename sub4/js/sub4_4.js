  //객체배열(json)
  var memo = [
        {
            title:'삼양사(화학)', 
            subTitle:'산업을 받쳐 주는 기초, 산업을 키워 주는 힘', 
            explain:'<p>화학부문은 성장성이 높은 고부가가치 소재분야에 집중하고 있으며, 지속 가능한 성장 플랫폼 및 글로벌 제조기반을 확보하여 품질 및 생산성 향상을 통하여 고객가치를 창출하는 것을 목표로 하고 있습니다.</p><p>주력제품인 엔지니어링 플라스틱(EP)과 계열회사에서 생산하고 있는 폴리카보네이트, BPA, 고순도테레프탈산(TPA)를 통해 사업부분을 확대하고, 신소재 개발도 적극 추진하고 있습니다. 정보전자소재부문은 액정 디스플레이의 핵심소재인 포토레지스트(Photoresist) 및 유기절연막 등 디스플레이용 유기화학소재 제품을 국내 및 해외 업체에 공급하고 있습니다.</p>', 
            ceo:'최낙현, 강호성',
            anniversary:'2011년 10월',
            comAdress:'서울특별시 종로구 종로33길 31',
            tel:'02-740-7114',
            site:'https://www.samyangcorp.com'
        },
        {
            title:'삼남석유화학', 
            subTitle:'연간 180만톤 생산의 TPA 전문회사', 
            explain:'<p>삼남석유화학은 국내에서 유일하게 QTA(Qualified Terephthalic Acid) 신공법을 도입하여, 원가 경쟁력이 우수하고 품질 좋은 제품을 공급함으로써 국내 화학섬유업계의 경쟁력 강화와 국가경제발전에 기여하고 있습니다.</p><p>삼남석유화학은 지금까지 이뤄낸 성과에 만족하지 않고, 내부적으로는 생산성 향상과 부단한 기술개발 노력을 통해 경쟁우위를 확고히 하고, 대외적으로는 TPA의 최대 해외시장인 중국 뿐 아니라 다른 국가에도 진출, 신규수요를 창출함으로써 TPA업계의 글로벌 리더로서 도약할 것입니다.</p>', 
            ceo:'채승우',
            anniversary:'1988년 01월',
            comAdress:'서울특별시 종로구 종로33길 31(본사)',
            tel:'02-740-7450(본사)',
            site:'https://www.samnam.co.kr'
        },
        {
            title:'삼양화성', 
            subTitle:'폴리카보네이트의 모든 것', 
            explain:'<p>1989년 설립된 삼양화성은 가격 경쟁력과 품질 경쟁력을 통한 기업가치 향상을 위해 노력하고 있습니다.</p><p>삼양화성은 경쟁사와 차별화된 제품과 서비스를 제공하여 글로벌 경쟁의 승리자가 될 수 있도록 변화를 주도하고 최고를 위한 열정과 실행력을 갖춘 인재 양성, 혁신하는 조직문화를 구축함은 물론 환경/안전 분야에도 기업의 책임을 다하여 세계 TOP경쟁력을 확보해 나갈 것 입니다.</p>', 
            ceo:'김종필',
            anniversary:'1989년 03월',
            comAdress:'전라북도 전주시 덕진구 온고을로 376(팔복로 3가)',
            tel:'063-210-1114',
            site:'https://www.samyangkasei.com'
        },
        {
            title:'삼양이노켐', 
            subTitle:'세계시장을 향한 BPA(비스페놀-A) 생산의 발걸음', 
            explain:'<p>삼양이노켐은 2009년 설립된 회사로서 연간 15만톤 이상의 BPA(비스페놀-A)를 생산하고 있습니다. </p><p>삼양이노템은 최고 품질의 BPA를 생산하고 있으며, 고객에게는 더 큰 만족과 서비스를 제공하는 것은 물론, 생산성 향상으로 회사의 경쟁력을 강화하여 세계 최고의 글로벌 기업을 목표로 성장하고 있습니다.', 
            ceo:'강호성',
            anniversary:'2009년 10월',
            comAdress:'전북 군산시 자유무역1길 133번지(오식도동)',
            tel:'063-440-7114',
            site:'https://www.samyanginnochem.com'
        },
        {
            title:'삼양공정소료(상해)유한공사', 
            subTitle:'엔지니어링 플라스틱의 Global Supplier', 
            explain:'<p>중국 상해시 청포공업원구 소재 삼양공정소료(상해)유한공사는 삼양사가 100% 지분 투자하여 설립한 엔지니어링 플라스틱 컴파운드 회사로 연간 2만 5천톤 규모의 PC 및 PBT Compound 생산능력을 갖추고 있으며 고내열성, 내마모성, 난연성 등을 요하는 전기전자제품, 자동차 부품, 사무용품용 엔지니어링 플라스틱을 생산, 판매하고 있습니다. </p>', 
            ceo:'이준희',
            anniversary:'2004년 05월',
            comAdress:'131, Shuangying Road, Qingpu Industrial Area, <br>Qingpu County, Shanghai,China',
            tel:'(86-21)6922-2270)',
            site:'https://www.samyangepsh.com'
        },
        {
            title:'삼양EP헝가리', 
            subTitle:'유럽시장을 향한 도전의 시작', 
            explain:'<p>삼양EP헝가리는 성장 가능성이 큰 유럽시장에서 Global Supplier로서의 발판을 마련하기 위해 2010년 2월 헝가리 야스베레니시에 설립되었습니다.</p><p>삼양EP헝가리는 연간 1.5만톤 규모의 폴리카보네이트(PC)와 폴리뷰틸렌테레프탈레이트(PBT) 컴퍼운드 생산 능력을 갖추고 있으며, 전기전자제품, 자동차부품, 사무용품에 쓰이는 고내열성, 내마모성, 난연성 등이 뛰어난 엔지니어링 플라스틱을 생산, 판매하고 있습니다.</p>', 
            ceo:'이희종',
            anniversary:'2011년 03월',
            comAdress:'H-5100 Jaszbereny,Necso Telep 1, Hungary',
            tel:'(36-21)311-1263',
            site:'https://www.samyangcorp.co.kr'
        },
        {
            title:'삼양화인테크놀로지', 
            subTitle:'차세대 이온교환수지 생산', 
            explain:'<p><차세대>삼양화인테크놀로지는 2014년 설립된 차세대 이온교환수지 전문 제조회사입니다.차세대 이온교환수지는 직경 0.5~0.6mm 정도로 입자의 크기가 균일한 수지로서 입자가 불규칙한 기존 이온교환수지보다 성능이 우수하여 반도체/LCD 생산에 필요한 초순수 생산, 각종 화학공정의 촉매, 원자력발전용 수처리 등 용도 및 수요가 급증하고 있는 소재입니다. </p><p>차세대 이온교환수지를 생산하려면 고도의 기술력이 필요하며 현재 삼양화인테크놀로지, 미국의 다우케미칼, 독일의 란세스(Lanxess), 일본의 미쓰비시화학만이 이 기술을 보유하고 있습니다.</p>', 
            ceo:'이혁',
            anniversary:'2014년 01월',
            comAdress:'전북 군산시 자유무역1길 63',
            tel:'063-440-0808',
            site:'https://www.samyangfinetechnology.com'
        },
        {
            title:'KCI', 
            subTitle:'산업을 받쳐 주는 기초, 산업을 키워 주는 힘', 
            explain:'<p>삼양사는 2017년 글로벌 스페셜티 기업인 ㈜KCI를 인수했습니다.</p><p>또한㈜KCI는 특수 화학 제품 제조업체로, 자체 연구·개발로 얻은 광범위한 노하우를 바탕으로 화장품 및 필수 생활용품용 고품질·고안정 원료를 생산하고 있습니다. 또한 ㈜KCI는 비즈니스 환경 및 고객의 니즈 변화에 발맞춰 기존 제품의 우수성은 높이고 혁신적인 원료를 개발하며, 환경·사회적 책임을 다하는 기업으로 성장할 것입니다.</p>',
            ceo:'이진용',
            anniversary:'1985년(설립) 2017년 12월(인수)',
            comAdress:'서울특별시 금천구 가산디지털1로 137(서울)',
            tel:'02-784-1480',
            site:'https://www.kciltd.com/'
        }
      ];
  var ind = 0;  
  var txt ='';

  function popchange(){
    txt='';
        txt+= '<div class= "top">';
        txt+='<img src="./images/content1/affiliate_0'+(ind+1)+'_1.jpg" alt="'+memo[ind].title+'"></img>';
        txt+= '<dl>';
            txt+= '<dt>'+memo[ind].title+'</dt>';
            txt+= '<dd>'+memo[ind].subTitle+'</dd>';
            txt+= '</dd>';
            
                txt+= '<table>';
                    txt+= '<tr>';
                        txt+= '<th scope="col">대표이사</th>';
                        txt+= '<td>'+memo[ind].ceo+'</td>';
                    txt+= '</tr>';
                    txt+= '<tr>';
                        txt+= '<th scope="col">창립일</th>';
                        txt+= '<td>'+memo[ind].anniversary+'</td>';
                    txt+= '</tr>';
                    txt+= '<tr>';
                        txt+= '<th scope="col">주소</th>';
                        txt+= '<td>'+memo[ind].comAdress+'</td>';
                    txt+= '</tr>';
                    txt+= '<tr>';
                        txt+= '<th scope="col">대표전화</th>';
                        txt+= '<td>'+memo[ind].tel+'</td>';
                    txt+= '</tr>';
                    txt+= '<tr>';
                        txt+= '<th scope="col">홈페이지</th>';
                        txt+= '<td>'+memo[ind].site+'</td>';
                    txt+= '</tr>';
            txt+= '</table>';
           
       
        txt+= '</div>';    
        txt+= '<div class="textBox">'+memo[ind].explain+'</div>'; 
        $('.subPop .sub_popup .txt').html(txt);
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
      $('.sub_popBtn').fadeOut('fast');
  });

  
  $('.subPopBtn a').click(function(e){
       e.preventDefault();

       $('.subPop .subPopup').hide().fadeIn('slow'); 
      
      if($(this).hasClass('pre')){
          if(ind==0)ind=memo.length;
          ind--;
          popchange();
      }else if($(this).hasClass('next')){
          if(ind==memo.length-1)ind=-1;
          ind++;
          popchange();
      };

  });
