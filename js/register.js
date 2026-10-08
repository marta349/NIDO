/* =====================================================
   NIDO
   REGISTRO
===================================================== */


/* =====================================================
   ELEMENTOS
===================================================== */

const registerForm =
    document.getElementById(
        "registerForm"
    );


const backButton =
    document.getElementById(
        "backButton"
    );


const loginLink =
    document.getElementById(
        "loginLink"
    );


/* =====================================================
   VOLVER
===================================================== */

backButton.addEventListener(
    "click",
    function () {

        window.location.href =
            "index.html";

    }
);


/* =====================================================
   INICIAR SESIÓN
===================================================== */

loginLink.addEventListener(
    "click",
    function () {

        alert(
            "La pantalla de inicio de sesión llegará después."
        );

    }
);


/* =====================================================
   CREAR CUENTA
===================================================== */

registerForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        /* -------------------------
           OBTENER DATOS
        ------------------------- */

        const name =
            document
                .getElementById("name")
                .value
                .trim();


        const email =
            document
                .getElementById("email")
                .value
                .trim();


        const password =
            document
                .getElementById("password")
                .value;


        const confirmPassword =
            document
                .getElementById("confirmPassword")
                .value;


        /* -------------------------
           COMPROBAR CONTRASEÑAS
        ------------------------- */

        if (
            password !==
            confirmPassword
        ) {

            alert(
                "Las contraseñas no coinciden."
            );

            return;

        }


        /* -------------------------
           GUARDAR DATOS
        ------------------------- */

        localStorage.setItem(
            "nidoUserName",
            name
        );


        localStorage.setItem(
            "nidoUserEmail",
            email
        );


        /* -------------------------
           CONFIRMACIÓN
        ------------------------- */

        alert(
            "Cuenta preparada correctamente, " +
            name +
            " ❤️"
        );


        /* -------------------------
           CONTINUAR
        ------------------------- */

        window.location.href =
            "nido-type.html";

    }
);