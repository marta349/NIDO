/* =====================================================
   NIDO
   CREAR OBJETIVO
===================================================== */


const addGoalForm =
    document.getElementById(
        "addGoalForm"
    );


const goalNameInput =
    document.getElementById(
        "goalName"
    );


const goalTargetInput =
    document.getElementById(
        "goalTarget"
    );


const backGoalButton =
    document.getElementById(
        "backGoalButton"
    );


/* =====================================================
   CREAR OBJETIVO
===================================================== */

addGoalForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            goalNameInput.value.trim();


        const target =
            Number(
                goalTargetInput.value
            );


        /* -----------------------------------------
           VALIDAR NOMBRE
        ----------------------------------------- */

        if (!name) {

            alert(
                "Escribe un nombre para el objetivo."
            );

            goalNameInput.focus();

            return;

        }


        /* -----------------------------------------
           VALIDAR CANTIDAD
        ----------------------------------------- */

        if (
            !target ||
            target <= 0
        ) {

            alert(
                "Introduce una cantidad válida."
            );

            goalTargetInput.focus();

            return;

        }


        /* -----------------------------------------
           OBTENER OBJETIVOS DEL NIDO ACTIVO
        ----------------------------------------- */

        const goals =
            getNidoGoals();


        /* -----------------------------------------
           CREAR OBJETIVO
        ----------------------------------------- */

        const newGoal = {

            id:
                Date.now(),

            name:
                name,

            target:
                target,

            saved:
                0

        };


        /* -----------------------------------------
           GUARDAR OBJETIVO
        ----------------------------------------- */

        goals.push(
            newGoal
        );


        saveNidoGoals(
            goals
        );


        /* -----------------------------------------
           VOLVER A OBJETIVOS
        ----------------------------------------- */

        window.location.href =
            "goals.html";

    }
);


/* =====================================================
   VOLVER
===================================================== */

backGoalButton.addEventListener(
    "click",
    function () {

        window.location.href =
            "goals.html";

    }
);