$(() => {
    let touchstartX = 0;
    let touchendX = 0;

    function checkDirection() {
        console.log(touchendX - touchstartX);
        const diff = touchendX - touchstartX;
        if (diff > 3) showSidebar();
        else if (diff < -3) closeSidebar();

        // if (touchendX < touchstartX) console.log("swiped left!");
        // if (touchendX > touchstartX) console.log("swiped right!");
    }

    document.addEventListener("touchstart", (e) => {
        touchstartX = e.changedTouches[0].screenX;
    });

    document.addEventListener("touchend", (e) => {
        touchendX = e.changedTouches[0].screenX;
        console.log(touchendX);
        checkDirection();
    });
});
closeSidebar = () => {
    document.querySelector(".sidebar").classList.remove("show");
    document.querySelector(".sidebar").classList.add("hidden");
    document.querySelector(".overlay").classList.add("display-none");
};
showSidebar = () => {
    document.querySelector(".overlay").classList.remove("display-none");
    document.querySelector(".sidebar").classList.add("show");
    document.querySelector(".sidebar").classList.remove("hidden");
};
