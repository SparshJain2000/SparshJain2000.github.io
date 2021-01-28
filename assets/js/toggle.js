let openFields = {
    front: false,
    back: false,
    comp: false,
};
toggleField = (e, id) => {
    openFields[id] = !openFields[id];
    $(`#${id}-toggle`).attr(
        "class",
        `${openFields[id] ? "fa fa-lg fa-angle-up" : "fa fa-lg fa-angle-down"}`,
    );

    $(`#${id}`).slideToggle("slow");
};
