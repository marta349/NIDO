/* =====================================================
   NIDO
   MIS NIDOS
===================================================== */


/* =====================================================
   DATOS DEL USUARIO
===================================================== */

const userName =
    localStorage.getItem(
        "nidoUserName"
    ) || "Usuario";


/* =====================================================
   ELEMENTOS
===================================================== */

const userNameElement =
    document.getElementById(
        "myNidosUserName"
    );


const myNidosList =
    document.getElementById(
        "myNidosList"
    );


const createNidoButton =
    document.getElementById(
        "createNidoButton"
    );


const joinNidoButton =
    document.getElementById(
        "joinNidoButton"
    );


const backMyNidosButton =
    document.getElementById(
        "backMyNidosButton"
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
   MOSTRAR NOMBRE DE USUARIO
===================================================== */

userNameElement.textContent =
    userName;


/* =====================================================
   MOSTRAR NIDOS
===================================================== */

function renderNidos() {

    const nidos =
        getNidos();


    const activeNidoId =
        getActiveNidoId();


    if (
        nidos.length ===
        0
    ) {

        myNidosList.innerHTML = `

            <div class="empty-state">

                <div class="empty-state-icon">
                    🏠
                </div>

                <h3>
                    Aún no tienes NIDOS
                </h3>

                <p>
                    Crea tu primer NIDO para empezar.
                </p>

            </div>

        `;

        return;

    }


    myNidosList.innerHTML =
        nidos.map(
            function (nido) {

                const icon =
                    nidoTypeIcons[
                        nido.type
                    ] || "🏠";


                const typeName =
                    nidoTypeNames[
                        nido.type
                    ] || "NIDO";


                const isActive =
                    nido.id ===
                    activeNidoId;


                return `

                    <article
                        class="
                            my-nido-card
                            ${isActive
                                ? "my-nido-active"
                                : ""}
                        "
                    >

                        <div class="my-nido-icon">
                            ${icon}
                        </div>


                        <div class="my-nido-info">

                            <h3>
                                ${nido.name}
                            </h3>


                            <p>
                                ${typeName}
                            </p>


                            ${
                                isActive
                                    ? `
                                        <span class="my-nido-current">
                                            NIDO actual
                                        </span>
                                    `
                                    : ""
                            }

                        </div>


                        <button
                            type="button"
                            class="my-nido-enter"
                            data-id="${nido.id}"
                        >

                            ${
                                isActive
                                    ? "Entrando →"
                                    : "Entrar →"
                            }

                        </button>

                    </article>

                `;

            }
        ).join("");


    setupNidoButtons();

}


/* =====================================================
   ENTRAR EN UN NIDO
===================================================== */

function setupNidoButtons() {

    document
        .querySelectorAll(
            ".my-nido-enter"
        )
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const nidoId =
                            button.dataset.id;


                        setActiveNidoId(
                            nidoId
                        );


                        window.location.href =
                            "dashboard.html";

                    }
                );

            }
        );

}


/* =====================================================
   CREAR NIDO
===================================================== */

createNidoButton.addEventListener(
    "click",
    function () {

        window.location.href =
            "nido-type.html";

    }
);


/* =====================================================
   UNIRSE A NIDO
===================================================== */

joinNidoButton.addEventListener(
    "click",
    function () {

        window.location.href =
            "join-nido.html";

    }
);


/* =====================================================
   VOLVER
===================================================== */

backMyNidosButton.addEventListener(
    "click",
    function () {

        window.location.href =
            "more.html";

    }
);


/* =====================================================
   INICIAR
===================================================== */

renderNidos();