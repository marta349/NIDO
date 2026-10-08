/* =====================================================
   NIDO
   MI PERFIL
===================================================== */


/* =====================================================
   DATOS DEL USUARIO
===================================================== */

let userName =
    localStorage.getItem(
        "nidoUserName"
    ) || "Usuario";


let userEmail =
    localStorage.getItem(
        "nidoUserEmail"
    ) || "Sin email";


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
   OBTENER NIDO ACTIVO
===================================================== */

const nidos =
    JSON.parse(
        localStorage.getItem(
            "nidoNidos"
        )
    ) || [];


const activeNidoId =
    localStorage.getItem(
        "nidoActiveId"
    );


const activeNido =
    nidos.find(
        function (nido) {

            return nido.id ===
                activeNidoId;

        }
    ) || null;


/* =====================================================
   DATOS DEL NIDO
===================================================== */

const nidoName =
    activeNido
        ? activeNido.name
        : "Sin NIDO";


const nidoCode =
    activeNido
        ? activeNido.code
        : "Sin código";


const nidoType =
    activeNido
        ? activeNido.type
        : "otro";


/* =====================================================
   ELEMENTOS
===================================================== */

const profileInitial =
    document.getElementById(
        "profileInitial"
    );


const profileName =
    document.getElementById(
        "profileName"
    );


const profileEmail =
    document.getElementById(
        "profileEmail"
    );


const profileNameInfo =
    document.getElementById(
        "profileNameInfo"
    );


const profileEmailInfo =
    document.getElementById(
        "profileEmailInfo"
    );


const profileNidoName =
    document.getElementById(
        "profileNidoName"
    );


const profileNidoType =
    document.getElementById(
        "profileNidoType"
    );


const profileNidoCode =
    document.getElementById(
        "profileNidoCode"
    );


const editProfileButton =
    document.getElementById(
        "editProfileButton"
    );


const editProfileSection =
    document.getElementById(
        "editProfileSection"
    );


const editProfileForm =
    document.getElementById(
        "editProfileForm"
    );


const editProfileName =
    document.getElementById(
        "editProfileName"
    );


const editProfileEmail =
    document.getElementById(
        "editProfileEmail"
    );


const cancelEditProfile =
    document.getElementById(
        "cancelEditProfile"
    );


/* =====================================================
   MOSTRAR DATOS
===================================================== */

function renderProfile() {

    profileName.textContent =
        userName;


    profileEmail.textContent =
        userEmail;


    profileNameInfo.textContent =
        userName;


    profileEmailInfo.textContent =
        userEmail;


    profileNidoName.textContent =
        nidoName;


    profileNidoType.textContent =
        nidoTypeNames[nidoType] ||
        nidoType;


    profileNidoCode.textContent =
        nidoCode;


    profileInitial.textContent =
        userName
            .trim()
            .charAt(0)
            .toUpperCase();

}


/* =====================================================
   ABRIR EDICIÓN
===================================================== */

editProfileButton.addEventListener(
    "click",
    function () {

        editProfileName.value =
            userName;


        editProfileEmail.value =
            userEmail === "Sin email"
                ? ""
                : userEmail;


        editProfileSection.hidden =
            false;


        editProfileButton.style.display =
            "none";


        editProfileName.focus();

    }
);


/* =====================================================
   CANCELAR EDICIÓN
===================================================== */

cancelEditProfile.addEventListener(
    "click",
    function () {

        editProfileSection.hidden =
            true;


        editProfileButton.style.display =
            "";

    }
);


/* =====================================================
   GUARDAR CAMBIOS
===================================================== */

editProfileForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const newName =
            editProfileName.value.trim();


        const newEmail =
            editProfileEmail.value.trim();


        if (!newName) {

            alert(
                "Introduce tu nombre."
            );

            editProfileName.focus();

            return;

        }


        if (!newEmail) {

            alert(
                "Introduce tu email."
            );

            editProfileEmail.focus();

            return;

        }


        /* ---------------------------------------------
           GUARDAR
        --------------------------------------------- */

        userName =
            newName;


        userEmail =
            newEmail;


        localStorage.setItem(
            "nidoUserName",
            userName
        );


        localStorage.setItem(
            "nidoUserEmail",
            userEmail
        );


        /* ---------------------------------------------
           ACTUALIZAR PANTALLA
        --------------------------------------------- */

        renderProfile();


        /* ---------------------------------------------
           CERRAR EDICIÓN
        --------------------------------------------- */

        editProfileSection.hidden =
            true;


        editProfileButton.style.display =
            "";


        alert(
            "Perfil actualizado correctamente."
        );

    }
);


/* =====================================================
   BOTÓN VOLVER
===================================================== */

document
    .getElementById(
        "backProfileButton"
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

renderProfile();