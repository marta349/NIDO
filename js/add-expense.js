/* =====================================================
   NIDO
   AÑADIR GASTO
===================================================== */


const expenseForm =
    document.getElementById(
        "expenseForm"
    );


const expenseConceptInput =
    document.getElementById(
        "expenseConcept"
    );


const expenseAmountInput =
    document.getElementById(
        "expenseAmount"
    );


const expenseDateInput =
    document.getElementById(
        "expenseDate"
    );


const backExpenseButton =
    document.getElementById(
        "backExpenseButton"
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


expenseDateInput.value =
    getTodayDate();


/* =====================================================
   CREAR GASTO
===================================================== */

expenseForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const concept =
            expenseConceptInput.value.trim();


        const amount =
            Number(
                expenseAmountInput.value
            );


        const date =
            expenseDateInput.value;


        /* -----------------------------------------
           VALIDAR CONCEPTO
        ----------------------------------------- */

        if (!concept) {

            alert(
                "Escribe el concepto del gasto."
            );

            expenseConceptInput.focus();

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

            expenseAmountInput.focus();

            return;

        }


        /* -----------------------------------------
           VALIDAR FECHA
        ----------------------------------------- */

        if (!date) {

            alert(
                "Selecciona una fecha."
            );

            expenseDateInput.focus();

            return;

        }


        /* -----------------------------------------
           OBTENER GASTOS
        ----------------------------------------- */

        const expenses =
            getNidoExpenses();


        /* -----------------------------------------
           CREAR GASTO
        ----------------------------------------- */

        const newExpense = {

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

        expenses.push(
            newExpense
        );


        saveNidoExpenses(
            expenses
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

backExpenseButton.addEventListener(
    "click",
    function () {

        window.location.href =
            "dashboard.html";

    }
);