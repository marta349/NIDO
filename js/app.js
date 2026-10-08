/* =====================================================
   NIDO
   PANTALLA DE INICIO
===================================================== */


/* =====================================================
   ELEMENTOS
===================================================== */

const startButton =
    document.getElementById(
        "startButton"
    );


const loginButton =
    document.getElementById(
        "loginButton"
    );


/* =====================================================
   EMPEZAR
===================================================== */

startButton.addEventListener(
    "click",
    function () {

        window.location.href =
            "register.html";

    }
);


/* =====================================================
   INICIAR SESIÓN
===================================================== */

loginButton.addEventListener(
    "click",
    function () {

        alert(
            "La pantalla de inicio de sesión llegará después."
        );

    }
);