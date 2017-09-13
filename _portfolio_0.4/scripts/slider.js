$(function (){
   // $('div.slider div').addClass('infinite shake animated');
         

$(window).scroll($.debounce( 100, true, function(){
    $('.menu').css('opacity', '0.6'); 
}));
$(window).scroll($.debounce( 2000, false, function(){
    $('.menu').fadeTo(2000,1 );
}));

//**************    
//**************
//**************
//**************
//**************
//**************
//**************
//**************
});