/* =====================================================
   NIDO
   MOVIMIENTOS
===================================================== */


/* =====================================================
   ELEMENTOS
===================================================== */

const movementsList =
    document.getElementById(
        "movementsList"
    );


const movementFilter =
    document.getElementById(
        "movementFilter"
    );


/* =====================================================
   FORMATEAR DINERO
===================================================== */

function formatMoney(amount) {

    return Number(
        amount
    ).toLocaleString(
        "es-ES",
        {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }
    ) + " €";

}


/* =====================================================
   FORMATEAR FECHA
===================================================== */

function formatDate(dateString) {

    if (!dateString) {

        return "";

    }


    const parts =
        dateString.split(
            "-"
        );


    if (
        parts.length !==
        3
    ) {

        return dateString;

    }


    return (
        parts[2] +
        "/" +
        parts[1] +
        "/" +
        parts[0]
    );

}


/* =====================================================
   OBTENER MOVIMIENTOS
===================================================== */

function getAllMovements() {

    const incomes =
        getNidoIncomes();


    const expenses =
        getNidoExpenses();


    const incomeMovements =
        incomes.map(
            function (income) {

                return {

                    id:
                        income.id,

                    type:
                        "income",

                    concept:
                        income.concept,

                    amount:
                        Number(
                            income.amount
                        ),

                    date:
                        income.date

                };

            }
        );


    const expenseMovements =
        expenses.map(
            function (expense) {

                return {

                    id:
                        expense.id,

                    type:
                        "expense",

                    concept:
                        expense.concept,

                    amount:
                        Number(
                            expense.amount
                        ),

                    date:
                        expense.date

                };

            }
        );


    return [
        ...incomeMovements,
        ...expenseMovements
    ].sort(
        function (a, b) {

            return (
                new Date(
                    b.date
                ) -
                new Date(
                    a.date
                )
            );

        }
    );

}


/* =====================================================
   MOSTRAR MOVIMIENTOS
===================================================== */

function renderMovements() {

    const filter =
        movementFilter.value;


    const movements =
        getAllMovements();


    const filteredMovements =
        movements.filter(
            function (movement) {

                if (
                    filter ===
                    "all"
                ) {

                    return true;

                }


                return (
                    movement.type ===
                    filter
                );

            }
        );


    if (
        filteredMovements.length ===
        0
    ) {

        movementsList.innerHTML = `

            <div class="empty-state">

                <div class="empty-state-icon">
                    ↕
                </div>

                <h3>
                    No hay movimientos
                </h3>

                <p>
                    Aquí aparecerán vuestros ingresos y gastos.
                </p>

            </div>

        `;

        return;

    }


    movementsList.innerHTML =
        filteredMovements.map(
            function (movement) {

                const isIncome =
                    movement.type ===
                    "income";


                return `

                    <article class="movement-card">

                        <div class="movement-icon ${
                            isIncome
                                ? "movement-income"
                                : "movement-expense"
                        }">

                            ${
                                isIncome
                                    ? "↑"
                                    : "↓"
                            }

                        </div>


                        <div class="movement-info">

                            <strong>
                                ${movement.concept}
                            </strong>

                            <span>
                                ${formatDate(
                                    movement.date
                                )}
                            </span>

                        </div>


                        <div class="movement-amount ${
                            isIncome
                                ? "amount-income"
                                : "amount-expense"
                        }">

                            ${
                                isIncome
                                    ? "+"
                                    : "-"
                            }${formatMoney(
                                movement.amount
                            )}

                        </div>

                    </article>

                `;

            }
        ).join("");

}


/* =====================================================
   FILTRO
===================================================== */

movementFilter.addEventListener(
    "change",
    function () {

        renderMovements();

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


/* =====================================================
   INICIAR
===================================================== */

renderMovements();