window.onload = function() {

    // create the stylesheet

    var styleSheet = (function () {

        var styleEl = document.createElement('style'),
            styleSheet

        document.head.appendChild(styleEl);

        return styleEl.sheet
    })()

    // add each style

    var addStyling = function(selector, styleArray) {
        for (let i = 0; i < styleArray.length; i++) {
            console.log(styleSheet + selector + "{" + styleArray[i] + "}" + i)
            styleSheet.insertRule(selector + "{" + styleArray[i] + "}", i)
        }
    }

    addStyling(
        ".modal-outside",
        [
            'display:               none',
            'position:              fixed',
            'z-index:               1',
            'padding-top:           100px',
            'left:                  0',
            'top:                   0',
            'width:                 100%',
            'height:                100%',
            'overflow:              auto',
            'background-color:      rgb(0,0,0)',
            'background-color:      rgba(0,0,0,0.4)'
        ]
    )

    addStyling(
        ".modal-box",
        [
            'background-color:       #534c48',
            'margin:                 auto',
            'padding:                1%',
            'border:                 1px solid #888',
            'width:                  80%',
            'max-width:              20em',
            'border-radius:          2px',
            'border-bottom:          5px solid #606060',
            'opacity:                .9'
        ]
    )

    addStyling(
        ".modal-content",
        [
            'padding:       10%'
        ]
    )

    addStyling(
        ".modal-close",
        [
            'font-family:       Arial, san-serif',
            'color:             #aaaaaa',
            'float:             right',
            'font-size:         28px',
            'font-weight:       bold'
        ]
    )

    addStyling(
        ".modal-close:hover",
        [
            'text-decoration:       none',
            'cursor:                pointer'
        ]
    )

    addStyling(
        ".modal-close:focus",
        [
            'text-decoration:       none',
            'cursor:                pointer'
        ]
    )

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
