var main = function () {
    $('.plus').show();
    $('.minus').hide();
    
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