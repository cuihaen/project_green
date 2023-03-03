var ind = 0;
$('.subPop .subPopMenu .openPop').click(function(e){
    e.preventDefault();

    ind= $(this).index('#content .subPopMenu .openPop');  // 0 1 2 3 4
    
    $('.subPopBtn').fadeIn('slow');
    $('#content .subModalBox').fadeIn('fast');
    if(ind==0 ||ind==1||ind==2||ind==3||ind==4){
        $('#content .popup'+ind).fadeIn('slow');
    }
});

$('.subPopBtn .pre').click(function(e){
    e.preventDefault();
    if(ind>-4){
        $('.subPop .subPopup:eq('+ind+')').hide();
        $('.subPop .subPopup:eq('+(ind-1)+')').fadeIn('slow');
        ind--;
    }else if(ind==-4){
        $('.subPop .subPopup:eq('+ind+')').hide();
        $('.subPop .subPopup:eq(0)').fadeIn('slow');
        ind=0;
    }
});

$('.subPopBtn .next').click(function(e){
    e.preventDefault();
    if(ind<=3){
        $('.subPop .subPopup:eq('+ind+')').hide();
        $('.subPop .subPopup:eq('+(ind+1)+')').fadeIn('slow');
        ind++;
    }else if(ind==4){
        $('.subPop .subPopup:eq(4)').hide();
        $('.subPop .subPopup:eq(0)').fadeIn('slow');
        ind=0;
    }
});

$('.subCloseBtn,.subPop .subModalBox').click(function(e){
    e.preventDefault();
    $('.subPop .subModalBox').fadeOut('fast');
    $('.subPop .subPopup').fadeOut('fast');
    $('.subPopBtn').fadeOut('fast');
});

