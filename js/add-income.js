/* =====================================================
   NIDO
   AÑADIR INGRESO
===================================================== */


const incomeForm =
    document.getElementById(
        "incomeForm"
    );


const incomeConceptInput =
    document.getElementById(
        "incomeConcept"
    );


const incomeAmountInput =
    document.getElementById(
        "incomeAmount"
    );


const incomeDateInput =
    document.getElementById(
        "incomeDate"
    );


const backIncomeButton =
    document.getElementById(
        "backIncomeButton"
    );


/* =====================================================
   FECHA ACTUAL
===================================================== */

function getTodayDate() {

    const today =
        new Date();

    const year =
        today.getFullYear();

    const month =
        String(
            today.getMonth() + 1
        ).padStart(
            2,
            "0"
        );

    const day =
        String(
            today.getDate()
        ).padStart(
            2,
            "0"
        );

    return (
        year +
        "-" +
        month +
        "-" +
        day
    );

}


incomeDateInput.value =
    getTodayDate();


/* =====================================================
   CREAR INGRESO
===================================================== */

incomeForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const concept =
            incomeConceptInput.value.trim();


        const amount =
            Number(
                incomeAmountInput.value
            );


        const date =
            incomeDateInput.value;


        /* -----------------------------------------
           VALIDAR CONCEPTO
        ----------------------------------------- */

        if (!concept) {

            alert(
                "Escribe el concepto del ingreso."
            );

            incomeConceptInput.focus();

            return;

        }


        /* -----------------------------------------
           VALIDAR CANTIDAD
        ----------------------------------------- */

        if (
            !amount ||
            amount <= 0
        ) {

            alert(
                "Introduce una cantidad válida."
            );

            incomeAmountInput.focus();

            return;

        }


        /* -----------------------------------------
           VALIDAR FECHA
        ----------------------------------------- */

        if (!date) {

            alert(
                "Selecciona una fecha."
            );

            incomeDateInput.focus();

            return;

        }


        /* -----------------------------------------
           OBTENER INGRESOS
        ----------------------------------------- */

        const incomes =
            getNidoIncomes();


        /* -----------------------------------------
           CREAR INGRESO
        ----------------------------------------- */

        const newIncome = {

            id:
                Date.now(),

            concept:
                concept,

            amount:
                amount,

            date:
                date

        };


        /* -----------------------------------------
           GUARDAR
        ----------------------------------------- */

        incomes.push(
            newIncome
        );


        saveNidoIncomes(
            incomes
        );


        /* -----------------------------------------
           VOLVER
        ----------------------------------------- */

        window.location.href =
            "dashboard.html";

    }
);


/* =====================================================
   VOLVER
===================================================== */

backIncomeButton.addEventListener(
    "click",
    function () {

        window.location.href =
            "dashboard.html";

    }
);