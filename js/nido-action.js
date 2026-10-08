/* =====================================================
   NIDO
   CREAR O UNIRSE
===================================================== */


/* =====================================================
   DATOS
===================================================== */

const type =
    localStorage.getItem(
        "nidoType"
    );


/* =====================================================
   ELEMENTOS
===================================================== */

const selectedTypeIcon =
    document.getElementById(
        "selectedTypeIcon"
    );


const selectedTypeTitle =
    document.getElementById(
        "selectedTypeTitle"
    );


const createNidoButton =
    document.getElementById(
        "createNidoButton"
    );


const joinNidoButton =
    document.getElementById(
        "joinNidoButton"
    );


const backButton =
    document.getElementById(
        "backButton"
    );


/* =====================================================
   TIPOS
===================================================== */

const nidoTypes = {

    pareja: {

        title: "Pareja",

        icon: "❤️"

    },

    familia: {

        title: "Familia",

        icon: "👨‍👩‍👧"

    },

    empresa: {

        title: "Empresa",

        icon: "🏢"

    },

    equipo: {

        title: "Equipo / Proyecto",

        icon: "👥"

    }

};


/* =====================================================
   MOSTRAR TIPO
===================================================== */

if (
    nidoTypes[type]
) {

    selectedTypeIcon.textContent =
        nidoTypes[type].icon;


    selectedTypeTitle.textContent =
        nidoTypes[type].title;

}


/* =====================================================
   CREAR NIDO
===================================================== */

createNidoButton.addEventListener(
    "click",
    function () {

        window.location.href =
            "create-nido.html";

    }
);


/* =====================================================
   UNIRSE A UN NIDO
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

backButton.addEventListener(
    "click",
    function () {

        window.location.href =
            "nido-type.html";

    }
);