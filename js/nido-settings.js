/* =====================================================
   NIDO
   CONFIGURACIÓN DEL NIDO
===================================================== */


/* =====================================================
   OBTENER NIDO ACTIVO
===================================================== */

let activeNido =
    getActiveNido();


/* =====================================================
   ELEMENTOS
===================================================== */

const settingsNidoName =
    document.getElementById(
        "settingsNidoName"
    );


const settingsNidoType =
    document.getElementById(
        "settingsNidoType"
    );


const editNidoNameButton =
    document.getElementById(
        "editNidoNameButton"
    );


const editNidoNameSection =
    document.getElementById(
        "editNidoNameSection"
    );


const editNidoNameForm =
    document.getElementById(
        "editNidoNameForm"
    );


const editNidoName =
    document.getElementById(
        "editNidoName"
    );


const cancelEditNidoName =
    document.getElementById(
        "cancelEditNidoName"
    );


/* =====================================================
   MODAL — SALIR DEL NIDO
===================================================== */

const leaveNidoModal =
    document.getElementById(
        "leaveNidoModal"
    );


const cancelLeaveNido =
    document.getElementById(
        "cancelLeaveNido"
    );


const confirmLeaveNido =
    document.getElementById(
        "confirmLeaveNido"
    );


/* =====================================================
   MODAL — ELIMINAR NIDO
===================================================== */

const deleteNidoModal =
    document.getElementById(
        "deleteNidoModal"
    );


const cancelDeleteNido =
    document.getElementById(
        "cancelDeleteNido"
    );


const confirmDeleteNido =
    document.getElementById(
        "confirmDeleteNido"
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


/* =====================================================
   MOSTRAR NIDO ACTIVO
===================================================== */

function renderNidoSettings() {

    if (!activeNido) {

        settingsNidoName.textContent =
            "Sin NIDO";

        settingsNidoType.textContent =
            "No hay ningún NIDO activo";

        return;

    }


    settingsNidoName.textContent =
        activeNido.name;


    settingsNidoType.textContent =
        nidoTypeNames[
            activeNido.type
        ] || activeNido.type;

}


/* =====================================================
   ABRIR EDICIÓN DEL NOMBRE
===================================================== */

editNidoNameButton.addEventListener(
    "click",
    function () {

        if (!activeNido) {

            alert(
                "No hay ningún NIDO activo."
            );

            return;

        }


        editNidoName.value =
            activeNido.name;


        editNidoNameSection.hidden =
            false;


        editNidoNameButton.style.display =
            "none";


        editNidoName.focus();

    }
);


/* =====================================================
   CANCELAR EDICIÓN
===================================================== */

cancelEditNidoName.addEventListener(
    "click",
    function () {

        editNidoNameSection.hidden =
            true;


        editNidoNameButton.style.display =
            "";

    }
);


/* =====================================================
   GUARDAR NUEVO NOMBRE
===================================================== */

editNidoNameForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const newName =
            editNidoName.value.trim();


        if (!newName) {

            alert(
                "Introduce un nombre para el NIDO."
            );

            editNidoName.focus();

            return;

        }


        if (!activeNido) {

            alert(
                "No hay ningún NIDO activo."
            );

            return;

        }


        const nidos =
            getNidos();


        const nidoIndex =
            nidos.findIndex(
                function (nido) {

                    return nido.id ===
                        activeNido.id;

                }
            );


        if (nidoIndex === -1) {

            alert(
                "No se ha encontrado el NIDO."
            );

            return;

        }


        nidos[nidoIndex].name =
            newName;


        saveNidos(
            nidos
        );


        activeNido =
            nidos[nidoIndex];


        renderNidoSettings();


        editNidoNameSection.hidden =
            true;


        editNidoNameButton.style.display =
            "";


        alert(
            "Nombre del NIDO actualizado correctamente."
        );

    }
);


/* =====================================================
   PARTICIPANTES
===================================================== */

document
    .getElementById(
        "participantsSettingsButton"
    )
    .addEventListener(
        "click",
        function () {

            window.location.href =
                "participants.html";

        }
    );


/* =====================================================
   CÓDIGO DE INVITACIÓN
===================================================== */

document
    .getElementById(
        "inviteSettingsButton"
    )
    .addEventListener(
        "click",
        function () {

            window.location.href =
                "participants.html";

        }
    );


/* =====================================================
   SALIR DEL NIDO — ABRIR MODAL
===================================================== */

document
    .getElementById(
        "leaveNidoButton"
    )
    .addEventListener(
        "click",
        function () {

            if (!activeNido) {

                alert(
                    "No hay ningún NIDO activo."
                );

                return;

            }


            leaveNidoModal.hidden =
                false;

        }
    );


/* =====================================================
   CANCELAR SALIR DEL NIDO
===================================================== */

cancelLeaveNido.addEventListener(
    "click",
    function () {

        leaveNidoModal.hidden =
            true;

    }
);


/* =====================================================
   CONFIRMAR SALIR DEL NIDO
===================================================== */

confirmLeaveNido.addEventListener(
    "click",
    function () {

        if (!activeNido) {

            leaveNidoModal.hidden =
                true;

            return;

        }


        const nidoId =
            activeNido.id;


        /* =============================================
           ELIMINAR NIDO DE LA LISTA
        ============================================== */

        const nidos =
            getNidos();


        const remainingNidos =
            nidos.filter(
                function (nido) {

                    return nido.id !==
                        nidoId;

                }
            );


        saveNidos(
            remainingNidos
        );


        /* =============================================
           ELIMINAR DATOS LOCALES DEL NIDO
        ============================================== */

        const allData =
            getNidoData();


        delete allData[nidoId];


        saveNidoData(
            allData
        );


        /* =============================================
           SELECCIONAR OTRO NIDO
        ============================================== */

        if (
            remainingNidos.length >
            0
        ) {

            setActiveNidoId(
                remainingNidos[0].id
            );

        } else {

            localStorage.removeItem(
                "nidoActiveId"
            );

        }


        /* =============================================
           CERRAR MODAL
        ============================================== */

        leaveNidoModal.hidden =
            true;


        /* =============================================
           VOLVER A MIS NIDOS
        ============================================== */

        window.location.href =
            "my-nidos.html";

    }
);


/* =====================================================
   ELIMINAR NIDO — ABRIR MODAL
===================================================== */

document
    .getElementById(
        "deleteNidoButton"
    )
    .addEventListener(
        "click",
        function () {

            if (!activeNido) {

                alert(
                    "No hay ningún NIDO activo."
                );

                return;

            }


            deleteNidoModal.hidden =
                false;

        }
    );


/* =====================================================
   CANCELAR ELIMINACIÓN
===================================================== */

cancelDeleteNido.addEventListener(
    "click",
    function () {

        deleteNidoModal.hidden =
            true;

    }
);


/* =====================================================
   CONFIRMAR ELIMINACIÓN
===================================================== */

confirmDeleteNido.addEventListener(
    "click",
    function () {

        if (!activeNido) {

            deleteNidoModal.hidden =
                true;

            return;

        }


        const nidoId =
            activeNido.id;


        /* =============================================
           ELIMINAR NIDO DE LA LISTA
        ============================================== */

        const nidos =
            getNidos();


        const remainingNidos =
            nidos.filter(
                function (nido) {

                    return nido.id !==
                        nidoId;

                }
            );


        saveNidos(
            remainingNidos
        );


        /* =============================================
           ELIMINAR TODOS LOS DATOS DEL NIDO
        ============================================== */

        const allData =
            getNidoData();


        delete allData[nidoId];


        saveNidoData(
            allData
        );


        /* =============================================
           SELECCIONAR OTRO NIDO
        ============================================== */

        if (
            remainingNidos.length >
            0
        ) {

            setActiveNidoId(
                remainingNidos[0].id
            );

        } else {

            localStorage.removeItem(
                "nidoActiveId"
            );

        }


        /* =============================================
           CERRAR MODAL
        ============================================== */

        deleteNidoModal.hidden =
            true;


        /* =============================================
           VOLVER A MIS NIDOS
        ============================================== */

        window.location.href =
            "my-nidos.html";

    }
);


/* =====================================================
   BOTÓN VOLVER
===================================================== */

document
    .getElementById(
        "backNidoSettingsButton"
    )
    .addEventListener(
        "click",
        function () {

            window.location.href =
                "more.html";

        }
    );


/* =====================================================
   NAVEGACIÓN
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

renderNidoSettings();