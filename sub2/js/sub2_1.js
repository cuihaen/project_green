  $.ajax({
    url: './js/sub2_1.json',
    dataType : 'json',
    success : function(data){
        var chemical = data.memo;
        var ind = 0;  
        var txt ='';
        function popchange(i){
            txt='';
            txt+= '<div class= "top">';
            txt+='<img src="./images/content1/affiliate_0'+(Number(i)+1)+'_1.jpg" alt="'+chemical[i].title+'"></img>';
            txt+= '<dl>';
                txt+= '<dt>'+chemical[i].title+'</dt>';
                txt+= '<dd>'+chemical[i].subTitle+'</dd>';
                txt+= '</dd>';
                    txt+= '<table>';
                        txt+= '<tr>';
                            txt+= '<th scope="col">대표이사</th>';
                            txt+= '<td>'+chemical[i].ceo+'</td>';
                        txt+= '</tr>';
                        txt+= '<tr>';
                            txt+= '<th scope="col">창립일</th>';
                            txt+= '<td>'+chemical[i].anniversary+'</td>';
                        txt+= '</tr>';
                        txt+= '<tr>';
                            txt+= '<th scope="col">주소</th>';
                            txt+= '<td>'+chemical[i].comAdress+'</td>';
                        txt+= '</tr>';
                        txt+= '<tr>';
                            txt+= '<th scope="col">대표전화</th>';
                            txt+= '<td>'+chemical[i].tel+'</td>';
                        txt+= '</tr>';
                        txt+= '<tr>';
                            txt+= '<th scope="col">홈페이지</th>';
                            txt+= '<td>'+chemical[i].site+'</td>';
            
                        txt+= '</tr>';
                txt+= '</table>';
            txt+= '</div>';    
            txt+= '<div class="textBox">'+chemical[i].explain+'</div>'; 
            $('.subPop .subPopup .txt').html(txt);
        };

        // popOpen
        $('.subPop .subPopMenu .openPop').click(function(e){
            e.preventDefault();
            
            ind = $(this).index('.subPop .subPopMenu .openPop');  // 0 1 2 3
      
            $('.subPopBtn').fadeIn('slow');
            $('.subPop .subModalBox').fadeIn('fast');
            $('.subPop .subPopup').fadeIn('slow');
      
            popchange(ind);
      
        });
       // popClose
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
                if(ind==0)ind=chemical.length;
                ind--;
                popchange(ind);
            }else if($(this).hasClass('next')){
                if(ind==chemical.length-1)ind=-1;
                ind++;
                popchange(ind);
            };
      
        });
    }
});


  


  
