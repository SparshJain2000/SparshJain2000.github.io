$(function () {
    // $(document).ready shorthand
    $(".monster").fadeIn("slow");
    $("#front").hide();
    $("#back").hide();
    $("#comp").hide();
});

$(document).ready(function () {
    /* Every time the window is scrolled ... */
    $("#one").addClass("hide");
    $("#two").addClass("hide");
    setTimeout(() => {
        $("#one").addClass("visible");
        $("#two").addClass("visible");
    }, 200);
    $(window).scroll(function () {
        /* Check the location of each desired element */
        $(".hideme").each(function (i) {
            var bottom_of_object = $(this).position().top;
            // $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */

            if (bottom_of_window > bottom_of_object + 60) {
                // $(this).animate({ opacity: "1", right: "0" }, 100);
                // $(this).show("slide", { direction: "left" }, 1000);
                $(this).addClass("is-visible");
            }
        });
    });
});

var textWrapper = document.querySelector(".ml10 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>",
);

anime
    .timeline({ loop: true })
    .add({
        targets: ".ml2 .letter",
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70 * i,
    })
    .add({
        targets: ".ml2",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
    });
anime
    .timeline({ loop: true })
    .add({
        targets: ".ml10 .letter",
        scale: [0, 1],
        duration: 1500,
        elasticity: 600,
        delay: (el, i) => 45 * (i + 1),
    })
    .add({
        targets: ".ml10",
        opacity: 0.8,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 200,
    });
