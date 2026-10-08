/* =====================================================
   NIDO
   TUS DATOS Y PRIVACIDAD
===================================================== */


/* =====================================================
   ELEMENTOS
===================================================== */

const dataUserName =
    document.getElementById(
        "dataUserName"
    );


const dataUserEmail =
    document.getElementById(
        "dataUserEmail"
    );


const dataNidosCount =
    document.getElementById(
        "dataNidosCount"
    );


const dataActiveNido =
    document.getElementById(
        "dataActiveNido"
    );


const backDataPrivacyButton =
    document.getElementById(
        "backDataPrivacyButton"
    );


/* =====================================================
   MOSTRAR DATOS DE LA CUENTA
===================================================== */

function renderAccountData() {

    const userName =
        localStorage.getItem(
            "nidoUserName"
        );


    const userEmail =
        localStorage.getItem(
            "nidoUserEmail"
        );


    dataUserName.textContent =
        userName ||
        "No disponible";


    dataUserEmail.textContent =
        userEmail ||
        "No disponible";

}


/* =====================================================
   MOSTRAR NIDOS
===================================================== */

function renderNidoData() {

    const nidos =
        getNidos();


    const activeNido =
        getActiveNido();


    dataNidosCount.textContent =
        nidos.length;


    if (activeNido) {

        dataActiveNido.textContent =
            activeNido.name;

    } else {

        dataActiveNido.textContent =
            "Ninguno";

    }

}


/* =====================================================
   BOTÓN VOLVER
===================================================== */

backDataPrivacyButton.addEventListener(
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

renderAccountData();

renderNidoData();