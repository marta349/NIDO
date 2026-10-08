/* =====================================================
   NIDO
   PARTICIPANTES
===================================================== */


/* =====================================================
   ELEMENTOS
===================================================== */

const participantsNidoName =
    document.getElementById(
        "participantsNidoName"
    );


const participantsNidoType =
    document.getElementById(
        "participantsNidoType"
    );


const participantsNidoIcon =
    document.getElementById(
        "participantsNidoIcon"
    );


const participantsList =
    document.getElementById(
        "participantsList"
    );


const nidoInviteCode =
    document.getElementById(
        "nidoInviteCode"
    );


const copyInviteCode =
    document.getElementById(
        "copyInviteCode"
    );


const copyMessage =
    document.getElementById(
        "copyMessage"
    );


const backButton =
    document.getElementById(
        "backButton"
    );


/* =====================================================
   TIPOS DE NIDO
===================================================== */

const nidoTypeNames = {

    pareja:
        "Pareja",

    familia:
        "Familia",

    empresa:
        "Empresa",

    equipo:
        "Equipo / Proyecto"

};


const nidoTypeIcons = {

    pareja:
        "❤️",

    familia:
        "🏠",

    empresa:
        "💼",

    equipo:
        "👥"

};


/* =====================================================
   OBTENER NIDO ACTIVO
===================================================== */

const activeNido =
    getActiveNido();


/* =====================================================
   COMPROBAR NIDO
===================================================== */

if (!activeNido) {

    participantsNidoName.textContent =
        "Sin NIDO";


    participantsNidoType.textContent =
        "No hay ningún NIDO activo";


    participantsNidoIcon.textContent =
        "🏠";


    participantsList.innerHTML = `

        <div class="empty-state">

            <div class="empty-state-icon">
                🏠
            </div>

            <h3>
                No hay ningún NIDO activo
            </h3>

            <p>
                Selecciona un NIDO para continuar.
            </p>

        </div>

    `;

} else {


    /* =================================================
       INFORMACIÓN DEL NIDO
    ================================================= */

    const typeName =
        nidoTypeNames[
            activeNido.type
        ] || "NIDO";


    const typeIcon =
        nidoTypeIcons[
            activeNido.type
        ] || "🏠";


    participantsNidoName.textContent =
        activeNido.name;


    participantsNidoType.textContent =
        typeName;


    participantsNidoIcon.textContent =
        typeIcon;


    /* =================================================
       CÓDIGO DE INVITACIÓN
    ================================================= */

    nidoInviteCode.textContent =
        activeNido.code;


    /* =================================================
       PARTICIPANTE ACTUAL
    ================================================= */

    const userName =
        localStorage.getItem(
            "nidoUserName"
        ) || "Usuario";


    participantsList.innerHTML = `

        <div class="participant-card">

            <div class="participant-avatar">
                ${userName.charAt(0).toUpperCase()}
            </div>

            <div class="participant-info">

                <strong>
                    ${userName}
                </strong>

                <span>
                    Tú
                </span>

            </div>

        </div>

    `;

}


/* =====================================================
   COPIAR CÓDIGO
===================================================== */

copyInviteCode.addEventListener(
    "click",
    async function () {

        if (!activeNido) {

            return;

        }


        try {

            await navigator.clipboard.writeText(
                activeNido.code
            );


            copyMessage.textContent =
                "Código copiado correctamente.";

        } catch (error) {

            copyMessage.textContent =
                "No se ha podido copiar el código.";

        }


        setTimeout(
            function () {

                copyMessage.textContent =
                    "";

            },
            2500
        );

    }
);


/* =====================================================
   VOLVER
===================================================== */

backButton.addEventListener(
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