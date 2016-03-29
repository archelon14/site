var main = function () {
    $('.plus').show();
    $('.minus').hide();
//    $('.foot').hide();
    
  /* Push the body and the nav over by 205px over */
    $('.plus').click(function () {
        $('.menu').animate({
            left: "0px"
        }, 200);

        $('body').animate({
            left: "205px"
        }, 200);
        $('.plus').hide();
        $('.minus').show();
//        $('.foot').fadeIn(200);
    });

  /* Then push them back */
    $('.minus').click(function () {
        $('.menu').animate({
            left: "-205px"
        }, 200);

        $('body').animate({
            left: "0px"
        }, 200);
        $('.minus').hide();
        $('.plus').show();
//        $('.foot').fadeOut(300);
    });
    
    /* This is to test animating the circle resizing */
//    $('.itm').hover(function () {
//        $('.menu').animate({
//            left: "-205px"
//        }, 200);
//
//        $('body').animate({
//            left: "0px"
//        }, 200);
//
//    });

};

$(document).ready(main);

// This supposedly will make the mobile safari menu bar and stuff disappear
// When ready...
//window.addEventListener("load",function() {
	// Set a timeout...
//	setTimeout(function(){
		// Hide the address bar!
//		window.scrollTo(0, 1);
//	}, 0);
//});
