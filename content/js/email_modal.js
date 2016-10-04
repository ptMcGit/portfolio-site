window.onload = function () {
    var emailAddressModal = document.getElementById('email-address-modal');
    var btn = document.getElementById("button-email-address");
    var span = document.getElementsByClassName("close")[0];

    btn.addEventListener(
        "click",
        function () { emailAddressModal.style.display = "block"; },
        false
    )

    span.addEventListener(
        "click",
        function () { emailAddressModal.style.display = "none"; },
        false
    )

    window.addEventListener(
        "click",
        function (event) {
            console.log(event.target);
            if (event.target == emailAddressModal) {
               emailAddressModal.style.display = "none";
            }
        },
        false
    )

    function emailAddressModal() {
        window.alert("zdhadgraft@gmail.com");
    }
};
