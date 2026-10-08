/* =====================================================
   NIDO
   SEGURIDAD
===================================================== */


/* =====================================================
   ELEMENTOS
===================================================== */

const changePasswordButton =
    document.getElementById(
        "changePasswordButton"
    );


const sessionsButton =
    document.getElementById(
        "sessionsButton"
    );


const dataButton =
    document.getElementById(
        "dataButton"
    );


const backSecurityButton =
    document.getElementById(
        "backSecurityButton"
    );


/* =====================================================
   CAMBIAR CONTRASEÑA
===================================================== */

changePasswordButton.addEventListener(
    "click",
    function () {

        window.location.href =
            "change-password.html";

    }
);


/* =====================================================
   SESIONES ACTIVAS
===================================================== */

sessionsButton.addEventListener(
    "click",
    function () {

        window.location.href =
            "sessions.html";

    }
);


/* =====================================================
   TUS DATOS
===================================================== */

dataButton.addEventListener(
    "click",
    function () {

        window.location.href =
            "data-privacy.html";

    }
);

/* =====================================================
   BOTÓN VOLVER
===================================================== */

backSecurityButton.addEventListener(
    "click",
    function () {

        window.location.href =
            "more.html";

    }
);


/* =====================================================
   NAVEGACIÓN INFERIOR
===================================================== */

document
    .querySelectorAll(
        ".nav-item"
    )
    .forEach(
        function (item) {

            item.addEventListener(
                "click",
                function () {

                    const page =
                        item.dataset.page;


                    if (
                        page ===
                        "dashboard"
                    ) {

                        window.location.href =
                            "dashboard.html";

                    }


                    if (
                        page ===
                        "movements"
                    ) {

                        window.location.href =
                            "movements.html";

                    }


                    if (
                        page ===
                        "goals"
                    ) {

                        window.location.href =
                            "goals.html";

                    }


                    if (
                        page ===
                        "more"
                    ) {

                        window.location.href =
                            "more.html";

                    }

                }
            );

        }
    );