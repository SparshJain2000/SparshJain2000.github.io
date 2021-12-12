$(function () {
    // $(document).ready shorthand
    $(".monster").fadeIn("slow");
    $("#front").hide();
    $("#back").hide();
    $("#comp").hide();
});

$(document).ready(function () {
    /* Every time the window is scrolled ... */
    $(window).scroll(function () {
        /* Check the location of each desired element */
        $(".hideme").each(function (i) {
            var bottom_of_object = $(this).position().top;
            // $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            console.log(bottom_of_window, bottom_of_object);
            if (bottom_of_window > bottom_of_object + 60) {
                // $(this).animate({ opacity: "1", right: "0" }, 100);
                // $(this).show("slide", { direction: "left" }, 1000);
                $(this).addClass("is-visible");
            }
        });
    });
});
