window.onscroll =  setInterval(function(){scrollfunction();}, 2000)  ;

function scrollfunction () {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        $("video").addClass('videoAnimate');
        
        
    }
    else {
        $("video").removeClass('videoAnimate');
          }
}
