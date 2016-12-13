window.onload = function() {

    // each modal consists of exactly
    //      - 1 button
    //      - 1 div

    // name the button with a suffix ending in '-modal-button'
    // name the div with a suffix prefix ending in '-modal-content'
    // use the same prefix for the div and button

    // e.g. "email-address-modal-button" and "email-address-modal-content"

    var MODAL_BOX       = 'modal-box';
    var MODAL_CLOSE     = 'modal-close';
    var MODAL_OUTSIDE   = 'modal-outside';
    var MODAL_CONTENT   = 'modal-content';
    var MODAL_BUTTON    = 'modal-button';
    var i;

    // create the stylesheet

    var styleSheet = (function () {

        var styleEl = document.createElement('style');
        document.head.appendChild(styleEl);

        return styleEl.sheet;
    })();

    // add each style

    var addStyling = function(selector, styleArray) {
        for (i = 0; i < styleArray.length; i++) {
            styleSheet.insertRule(selector + "{" + styleArray[i] + "}", i);
        }
    };

    addStyling(
        "." + MODAL_OUTSIDE,
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
    );

    addStyling(
        "." + MODAL_BOX,
        [
            'background-color:       #534c48',
            'margin:                 auto',
            'padding:                1%',
            'border:                 1px solid #888',
            'width:                  80%',
            'max-width:              500px',
            'border-radius:          2px',
            'border-bottom:          5px solid #606060',
            'opacity:                .9'
        ]
    );

    addStyling(
        "." + MODAL_CONTENT,
        [
            'padding:       10%'
        ]
    );

    addStyling(
        "." + MODAL_CLOSE,
        [
            'font-family:       Arial, san-serif',
            'color:             #aaaaaa',
            'float:             right',
            'font-size:         28px',
            'font-weight:       bold'
        ]
    );

    addStyling(
        "." + MODAL_CLOSE + ":hover",
        [
            'text-decoration:       none',
            'cursor:                pointer'
        ]
    );

    addStyling(
        "." + MODAL_CLOSE + ":focus",
        [
            'text-decoration:       none',
            'cursor:                pointer'
        ]
    );

    var create_modal = function modal(modal_element, modal_button) {
        if (! (modal_element && modal_button) ) return 1;
        modal_element.classList.add(MODAL_CONTENT);

        // create elements for appropriate nesting

        var modalBox =              document.createElement("div");
        modalBox.id =               modal_element.id + "-" + MODAL_BOX;
        modalBox.classList.add(     MODAL_BOX);

        var modalClose =            document.createElement("span");
        modalClose.id =             modal_element.id + "-" + MODAL_CLOSE;
        modalClose.classList.add(   MODAL_CLOSE);

        xMark = document.createTextNode(    "\u2573");
        modalClose.appendChild(             xMark);

        var modalOutside =              document.createElement("div");
        modalOutside.id =               modal_element.id + MODAL_OUTSIDE;
        modalOutside.classList.add(     MODAL_OUTSIDE);

        // nest elements relative to modal_element

        modalOutside.insertAdjacentElement(
            "afterbegin",
            modalBox
        );

        modalBox.insertAdjacentElement(
            "afterbegin",
            modalClose
        );

        modal_element.insertAdjacentElement(
            "beforebegin",
            modalOutside
        );

        modalClose.insertAdjacentElement(
            "afterend",
            modal_element
        );

        // add event listeners

        modal_button.addEventListener(
            "click",
            function () { modalOutside.style.display = "block"; },
            false
        );

        modalClose.addEventListener(
            "click",
            function () { modalOutside.style.display = "none"; },
            false
        );

        window.addEventListener(
            "click",
            function (event) {
                if (event.target == modalOutside) {
                    modalOutside.style.display = "none";
                }
            },
            false
        );

    };

    // match modal-content with modal-button

    var content = document.querySelectorAll("[id$='" + MODAL_CONTENT + "']");
    var modalPairs = [];

    for (i = 0; i < content.length; i++) {
        var buttonString = content[i].id.replace(/(.*)(content)$/, '$1' + 'button');
        var button = document.querySelector("[id$='" + buttonString + "']");
        if (button)
            modalPairs.push([
                content[i],
                button,
            ]);
    }

    // create the modals

    for (i = 0; i < modalPairs.length; i++) {
        create_modal(modalPairs[i][0],modalPairs[i][1]);
    }

};
