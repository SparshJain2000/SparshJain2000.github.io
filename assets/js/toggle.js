toggleField = (e, id) => {
    // if (id === "front") {
    //     $(`#${id}`).slideToggle("slow");
    //     $(`#back`).slideUp("slow");
    //     $(`#comp`).slideUp("slow");
    // }
    // if (id === "back") {
    //     $(`#${id}`).slideToggle("slow");
    //     $(`#front`).slideUp("slow");
    //     $(`#comp`).slideUp("slow");
    // }
    // if (id === "comp") {
    //     $(`#${id}`).slideToggle("slow");
    //     $(`#back`).slideUp("slow");
    //     $(`#front`).slideUp("slow");
    // }
    const classes = $(e.target).attr("class");

    $(e.target).attr(
        "class",
        `${
            classes === "fa fa-lg fa-angle-down"
                ? "fa fa-lg fa-angle-up"
                : "fa fa-lg fa-angle-down"
        }`,
    );
    // $(e.target).attr("class", "fa fa-lg fa-angle-up");
    $(`#${id}`).slideToggle("slow");
};
