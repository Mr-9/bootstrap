$(function(){
    // #tes
    $("#tes .row div").hover(function() {
        /* Stuff to do when the mouse enters the element */
        $(this).find(".readmore").slideDown();
    }, function() {
        /* Stuff to do when the mouse leaves the element */
        $(this).find(".readmore").slideUp();
    });
    //des

    $("#pro .row div").hover(function() {
        /* Stuff to do when the mouse enters the element */
        $(this).find(".pro-text span").slideDown();
    }, function() {
        /* Stuff to do when the mouse leaves the element */
        $(this).find(".pro-text span").slideUp();
    });

})
