$(document).ready(function(){
    // Фикмированная шапка при скролле
    $("#header").removeClass("default");
    $(window).scroll(function(){
        if ($(this).scrollTop() > 400) {
            $("#header").addClass("default").fadeIn('fast');
        } else {
            $("#header").removeClass("default").fadeIn('fast');
        };
    });
});
$(document).ready(function(){
    // Фикмированная шапка при скролле
    $("#li li a").removeClass("default-li");
    $(window).scroll(function(){
        if ($(this).scrollTop() > 400) {
            $("#li li a").addClass("default-li").fadeIn('fast');
        } else {
            $("#li li a").removeClass("default-li").fadeIn('fast');
        };
    });
});



function show(state){
document.getElementById('window').style.display = state;	
document.getElementById('gray').style.display = state; 		
}	
