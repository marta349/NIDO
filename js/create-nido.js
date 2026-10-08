/* =====================================================
   NIDO
   CREAR NIDO
===================================================== */


const nidoType =
    localStorage.getItem(
        "nidoType"
    ) || "pareja";


const createNidoForm =
    document.getElementById(
        "createNidoForm"
    );


const nidoNameInput =
    document.getElementById(
        "nidoName"
    );


const backButton =
    document.getElementById(
        "backButton"
    );


/* =====================================================
   GENERAR CÓDIGO DEL NIDO
===================================================== */

function generateNidoCode() {

    const characters =
        "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    let code =
        "NIDO-";


    for (
        let i = 0;
        i < 5;
        i++
    ) {

        const randomIndex =
            Math.floor(
                Math.random() *
                characters.length
            );

        code +=
            characters[
                randomIndex
            ];

    }


    return code;

}


/* =====================================================
   CREAR NIDO
===================================================== */

createNidoForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            nidoNameInput.value.trim();


        if (!name) {

            alert(
                "Escribe un nombre para tu NIDO."
            );

            nidoNameInput.focus();

            return;

        }


        /* -----------------------------------------
           OBTENER NIDOS ACTUALES
        ----------------------------------------- */

        const nidos =
            getNidos();


        /* -----------------------------------------
           CREAR NUEVO NIDO
        ----------------------------------------- */

        const newNido = {

            id:
                "nido-" +
                Date.now(),

            name:
                name,

            code:
                generateNidoCode(),

            type:
                nidoType

        };


        /* -----------------------------------------
           GUARDAR NIDO
        ----------------------------------------- */

        nidos.push(
            newNido
        );


        saveNidos(
            nidos
        );


        /* -----------------------------------------
           HACERLO NIDO ACTIVO
        ----------------------------------------- */

        setActiveNidoId(
            newNido.id
        );


        /* -----------------------------------------
           CREAR SUS DATOS
        ----------------------------------------- */

        createNidoData(
            newNido.id
        );


        /* -----------------------------------------
           COMPATIBILIDAD ACTUAL
        ----------------------------------------- */

        localStorage.setItem(
            "nidoName",
            newNido.name
        );


        localStorage.setItem(
            "nidoCode",
            newNido.code
        );


        localStorage.setItem(
            "nidoType",
            newNido.type
        );


        /* -----------------------------------------
           IR AL DASHBOARD
        ----------------------------------------- */

        window.location.href =
            "dashboard.html";

    }
);


/* =====================================================
   VOLVER
===================================================== */

backButton.addEventListener(
    "click",
    function () {

        window.location.href =
            "nido-action.html";

    }
);