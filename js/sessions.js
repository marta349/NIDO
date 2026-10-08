/* =====================================================
   NIDO
   SESIONES ACTIVAS
===================================================== */


/* =====================================================
   ELEMENTOS
===================================================== */

const sessionDevice =
    document.getElementById(
        "sessionDevice"
    );


const sessionDate =
    document.getElementById(
        "sessionDate"
    );


const backSessionsButton =
    document.getElementById(
        "backSessionsButton"
    );


/* =====================================================
   OBTENER INFORMACIÓN DEL DISPOSITIVO
===================================================== */

function getDeviceName() {

    const userAgent =
        navigator.userAgent;


    if (
        userAgent.includes(
            "Macintosh"
        )
    ) {

        return "Mac";

    }


    if (
        userAgent.includes(
            "iPhone"
        )
    ) {

        return "iPhone";

    }


    if (
        userAgent.includes(
            "iPad"
        )
    ) {

        return "iPad";

    }


    if (
        userAgent.includes(
            "Android"
        )
    ) {

        return "Dispositivo Android";

    }


    if (
        userAgent.includes(
            "Windows"
        )
    ) {

        return "PC Windows";

    }


    return "Dispositivo actual";

}


/* =====================================================
   FORMATEAR FECHA
===================================================== */

function formatSessionDate() {

    const now =
        new Date();


    return now.toLocaleString(
        "es-ES",
        {
            day:
                "2-digit",

            month:
                "2-digit",

            year:
                "numeric",

            hour:
                "2-digit",

            minute:
                "2-digit"
        }
    );

}


/* =====================================================
   MOSTRAR SESIÓN
===================================================== */

function renderSession() {

    sessionDevice.textContent =
        getDeviceName();


    sessionDate.textContent =
        "Sesión iniciada el " +
        formatSessionDate();

}


/* =====================================================
   BOTÓN VOLVER
===================================================== */

backSessionsButton.addEventListener(
    "click",
    function () {

        window.location.href =
            "security.html";

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


/* =====================================================
   INICIAR
===================================================== */

renderSession();