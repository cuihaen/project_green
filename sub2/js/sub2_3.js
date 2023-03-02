$('#content .subPopMenu .openPop').click(function(e){
    e.preventDefault();

    var ind = $(this).index('#content .subPopMenu .openPop');  // 0 1 2 3
    
    $('#content .modal_box').fadeIn('fast');
    if(ind==0){
        $('#content .popup0').fadeIn('slow');
    }else if(ind==1){
        $('#content .popup1').fadeIn('slow');
    }
});

$('.subCloseBtn,#content .modalBox').click(function(e){
    e.preventDefault();
    $('#content .modalBox').hide();
    $('#content .subPopup').hide();
});