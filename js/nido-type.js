/* =====================================================
   NIDO
   ELECCIÓN DEL TIPO
===================================================== */


/* =====================================================
   OPCIONES
===================================================== */

const options =
    document.querySelectorAll(
        ".nido-option"
    );


/* =====================================================
   GUARDAR ELECCIÓN
===================================================== */

options.forEach(
    function (option) {

        option.addEventListener(
            "click",
            function () {

                const type =
                    option.dataset.type;


                localStorage.setItem(
                    "nidoType",
                    type
                );


                /* -------------------------
                   CONTINUAR
                ------------------------- */

                window.location.href =
                    "nido-action.html";

            }
        );

    }
);


/* =====================================================
   VOLVER
===================================================== */

const backButton =
    document.getElementById(
        "backToRegister"
    );


backButton.addEventListener(
    "click",
    function () {

        window.location.href =
            "register.html";

    }
);