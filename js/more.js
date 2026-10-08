/* =====================================================
   NIDO
   MÁS
===================================================== */


/* =====================================================
   OPCIONES DEL MENÚ
===================================================== */

const moreOptions =
    document.querySelectorAll(
        ".more-option"
    );


moreOptions.forEach(
    function (option) {

        option.addEventListener(
            "click",
            function () {

                const selectedOption =
                    option.dataset.option;


                /* -----------------------------------------
                   MI PERFIL
                ----------------------------------------- */

                if (
                    selectedOption ===
                    "profile"
                ) {

                    window.location.href =
                        "profile.html";

                    return;

                }


                /* -----------------------------------------
                   MIS NIDOS
                ----------------------------------------- */

                if (
                    selectedOption ===
                    "my-nidos"
                ) {

                    window.location.href =
                        "my-nidos.html";

                    return;

                }


                /* -----------------------------------------
                   PARTICIPANTES
                ----------------------------------------- */

                if (
                    selectedOption ===
                    "participants"
                ) {

                    window.location.href =
                        "participants.html";

                    return;

                }


                /* -----------------------------------------
                   CONFIGURACIÓN
                ----------------------------------------- */

                if (
                    selectedOption ===
                    "settings"
                ) {

                    window.location.href =
                        "nido-settings.html";

                    return;

                }


                /* -----------------------------------------
                   NOTIFICACIONES
                ----------------------------------------- */

                if (
                    selectedOption ===
                    "notifications"
                ) {

                    window.location.href =
                        "notifications.html";

                    return;

                }


                /* -----------------------------------------
                   SEGURIDAD
                ----------------------------------------- */

                if (
                    selectedOption ===
                    "security"
                ) {

                    window.location.href =
                        "security.html";

                    return;

                }

            }
        );

    }
);


/* =====================================================
   CERRAR SESIÓN
===================================================== */

const logoutButton =
    document.getElementById(
        "logoutButton"
    );


logoutButton.addEventListener(
    "click",
    function () {

        const confirmLogout =
            confirm(
                "¿Seguro que quieres cerrar sesión?"
            );


        if (!confirmLogout) {

            return;

        }


        localStorage.removeItem(
            "nidoUserName"
        );


        localStorage.removeItem(
            "nidoUserEmail"
        );


        window.location.href =
            "index.html";

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
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const page =
                        button.dataset.page;


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