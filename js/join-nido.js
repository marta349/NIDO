/* =====================================================
   NIDO
   UNIRSE A UN NIDO
===================================================== */


/* =====================================================
   ELEMENTOS
===================================================== */

const joinNidoForm =
    document.getElementById(
        "joinNidoForm"
    );


const nidoCodeInput =
    document.getElementById(
        "nidoCode"
    );


const backButton =
    document.getElementById(
        "backButton"
    );


/* =====================================================
   FORMULARIO
===================================================== */

joinNidoForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        /* ---------------------------------------------
           OBTENER CÓDIGO
        --------------------------------------------- */

        const enteredCode =
            nidoCodeInput.value
                .trim()
                .toUpperCase();


        if (!enteredCode) {

            alert(
                "Introduce el código de invitación."
            );

            return;

        }


        /* ---------------------------------------------
           OBTENER NIDOS
        --------------------------------------------- */

        const nidos =
            getNidos();


        /* ---------------------------------------------
           BUSCAR NIDO
        --------------------------------------------- */

        const nido =
            nidos.find(
                function (item) {

                    return (
                        item.code
                            .toUpperCase() ===
                        enteredCode
                    );

                }
            );


        /* ---------------------------------------------
           CÓDIGO NO ENCONTRADO
        --------------------------------------------- */

        if (!nido) {

            alert(
                "No hemos encontrado ningún NIDO con ese código."
            );

            return;

        }


        /* ---------------------------------------------
           COMPROBAR SI YA ESTÁ EN MIS NIDOS
        --------------------------------------------- */

        const alreadyJoined =
            nidos.some(
                function (item) {

                    return item.id ===
                        nido.id;

                }
            );


        /*
           En el prototipo local, los NIDOS disponibles
           pertenecen a esta misma cuenta.

           Más adelante, con el backend, aquí se
           comprobará realmente si el usuario pertenece
           al NIDO.
        */


        if (alreadyJoined) {

            setActiveNidoId(
                nido.id
            );


            alert(
                "Ya formas parte de este NIDO."
            );


            window.location.href =
                "dashboard.html";


            return;

        }


        /* ---------------------------------------------
           AÑADIR NIDO
        --------------------------------------------- */

        nidos.push(
            nido
        );


        saveNidos(
            nidos
        );


        /* ---------------------------------------------
           CREAR DATOS DEL NIDO
        --------------------------------------------- */

        createNidoData(
            nido.id
        );


        /* ---------------------------------------------
           ACTIVAR NIDO
        --------------------------------------------- */

        setActiveNidoId(
            nido.id
        );


        /* ---------------------------------------------
           ENTRAR
        --------------------------------------------- */

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
            "my-nidos.html";

    }
);