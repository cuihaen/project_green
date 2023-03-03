$('#content .subPopMenu .openPop').click(function(e){
    e.preventDefault();

    var ind = $(this).index('#content .subPopMenu .openPop');  // 0 1 2 3
    
    $('#content .modalBox').fadeIn('fast');
    $('#content .subPopup').fadeIn('slow');
    
});

$('.subCloseBtn,#content .modalBox').click(function(e){
    e.preventDefault();
    $('#content .modalBox').hide();
    $('#content .subPopup').hide();
});






