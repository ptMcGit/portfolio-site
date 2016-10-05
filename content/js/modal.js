window.onload = function() {

    create_modal = function modal(modal_element, modal_button) {


        modal_element.classList.add(    "modal-content")

        // create elements for appropriate nesting

        var modalBox =              document.createElement("div")
        modalBox.id =               modal_element.id + "-modal-box"
        modalBox.classList.add(     "modal-box")

        var modalClose =            document.createElement("span")
        modalClose.id =             modal_element.id + "-modal-close"
        modalClose.classList.add(   "modal-close")

        xMark = document.createTextNode(    "\u2573")
        modalClose.appendChild(             xMark)

        var modalOutside =              document.createElement("div")
        modalOutside.id =               modal_element.id + "-modal-outside"
        modalOutside.classList.add(     "modal-outside")

        // nest elements relative to modal_element

        modalOutside.insertAdjacentElement(
            "afterbegin",
            modalBox
        )

        modalBox.insertAdjacentElement(
            "afterbegin",
            modalClose
        )

        modal_element.insertAdjacentElement(
            "beforebegin",
            modalOutside
        )

        modalClose.insertAdjacentElement(
            "afterend",
            modal_element
        )

        // add event listeners

        console.log("event listeners")
        modal_button.addEventListener(
            "click",
            function () { modalOutside.style.display = "block"; },
            false
        )

        modalClose.addEventListener(
            "click",
            function () { modalOutside.style.display = "none"; },
            false
        )

        window.addEventListener(
            "click",
            function (event) {
                if (event.target == modalOutside) {
                    modalOutside.style.display = "none";
                }
            },
            false
        )


        //var = inherit(modal.methods)

    };

    //(function create_styles() {

    //})()

};
