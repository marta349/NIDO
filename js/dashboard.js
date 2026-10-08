/* =====================================================
   NIDO
   DASHBOARD
===================================================== */


/* =====================================================
   ELEMENTOS
===================================================== */

const userNameElement =
    document.getElementById(
        "userName"
    );


const nidoNameElement =
    document.getElementById(
        "nidoName"
    );


const nidoTypeElement =
    document.getElementById(
        "nidoType"
    );


const balanceElement =
    document.getElementById(
        "balance"
    );


const totalIncomeElement =
    document.getElementById(
        "totalIncome"
    );


const totalExpenseElement =
    document.getElementById(
        "totalExpense"
    );


const recentMovementsElement =
    document.getElementById(
        "recentMovements"
    );


const addIncomeButton =
    document.getElementById(
        "addIncomeButton"
    );


const addExpenseButton =
    document.getElementById(
        "addExpenseButton"
    );


const viewAllMovements =
    document.getElementById(
        "viewAllMovements"
    );


/* =====================================================
   USUARIO
===================================================== */

const userName =
    localStorage.getItem(
        "nidoUserName"
    ) || "Usuario";


userNameElement.textContent =
    userName;


/* =====================================================
   OBTENER NIDO ACTIVO
===================================================== */

const activeNido =
    getActiveNido();


/* =====================================================
   SI NO HAY NIDO ACTIVO
===================================================== */

if (!activeNido) {

    nidoNameElement.textContent =
        "Sin NIDO";

    nidoTypeElement.textContent =
        "";

    balanceElement.textContent =
        "0,00 €";

    totalIncomeElement.textContent =
        "0,00 €";

    totalExpenseElement.textContent =
        "0,00 €";


} else {


    /* =================================================
       INFORMACIÓN DEL NIDO
    ================================================= */

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


    nidoNameElement.textContent =
        activeNido.name;


    nidoTypeElement.textContent =
        nidoTypeNames[
            activeNido.type
        ] || "NIDO";


    /* =================================================
       DATOS DEL NIDO ACTIVO
    ================================================= */

    const incomes =
        getNidoIncomes();


    const expenses =
        getNidoExpenses();


    /* =================================================
       CALCULAR TOTALES
    ================================================= */

    const totalIncome =
        incomes.reduce(
            function (
                total,
                income
            ) {

                return total +
                    Number(
                        income.amount
                    );

            },
            0
        );


    const totalExpense =
        expenses.reduce(
            function (
                total,
                expense
            ) {

                return total +
                    Number(
                        expense.amount
                    );

            },
            0
        );


    const balance =
        totalIncome -
        totalExpense;


    /* =================================================
       FORMATEAR DINERO
    ================================================= */

    function formatMoney(
        amount
    ) {

        return amount.toLocaleString(
            "es-ES",
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }
        ) + " €";

    }


    /* =================================================
       MOSTRAR TOTALES
    ================================================= */

    balanceElement.textContent =
        formatMoney(
            balance
        );


    totalIncomeElement.textContent =
        formatMoney(
            totalIncome
        );


    totalExpenseElement.textContent =
        formatMoney(
            totalExpense
        );


    /* =================================================
       CREAR LISTA DE MOVIMIENTOS
    ================================================= */

    const movements = [

        ...incomes.map(
            function (income) {

                return {

                    ...income,

                    type:
                        "income"

                };

            }
        ),


        ...expenses.map(
            function (expense) {

                return {

                    ...expense,

                    type:
                        "expense"

                };

            }
        )

    ];


    /* =================================================
       ORDENAR POR FECHA
    ================================================= */

    movements.sort(
        function (
            a,
            b
        ) {

            return new Date(
                b.date
            ) -
            new Date(
                a.date
            );

        }
    );


    /* =================================================
       MOSTRAR SOLO LOS 3 MÁS RECIENTES
    ================================================= */

    const recentMovements =
        movements.slice(
            0,
            3
        );


    /* =================================================
       MOSTRAR MOVIMIENTOS
    ================================================= */

    if (
        recentMovements.length === 0
    ) {

        recentMovementsElement.innerHTML = `

            <div class="empty-state">

                <div class="empty-state-icon">
                    ↕
                </div>

                <h3>
                    Aún no hay movimientos
                </h3>

                <p>
                    Añade tu primer ingreso o gasto.
                </p>

            </div>

        `;


    } else {

        recentMovementsElement.innerHTML =
            recentMovements.map(
                function (
                    movement
                ) {

                    const isIncome =
                        movement.type ===
                        "income";


                    const sign =
                        isIncome
                            ? "+"
                            : "-";


                    const amountClass =
                        isIncome
                            ? "movement-income"
                            : "movement-expense";


                    const icon =
                        isIncome
                            ? "↑"
                            : "↓";


                    return `

                        <div class="movement-item">

                            <div class="movement-icon">

                                ${icon}

                            </div>


                            <div class="movement-info">

                                <strong>
                                    ${movement.concept}
                                </strong>

                                <span>
                                    ${movement.category || ""}
                                </span>

                            </div>


                            <div
                                class="
                                    movement-amount
                                    ${amountClass}
                                "
                            >

                                ${sign}
                                ${formatMoney(
                                    movement.amount
                                )}

                            </div>

                        </div>

                    `;

                }
            ).join("");

    }

}


/* =====================================================
   AÑADIR INGRESO
===================================================== */

addIncomeButton.addEventListener(
    "click",
    function () {

        window.location.href =
            "add-income.html";

    }
);


/* =====================================================
   AÑADIR GASTO
===================================================== */

addExpenseButton.addEventListener(
    "click",
    function () {

        window.location.href =
            "add-expense.html";

    }
);


/* =====================================================
   VER TODOS LOS MOVIMIENTOS
===================================================== */

viewAllMovements.addEventListener(
    "click",
    function () {

        window.location.href =
            "movements.html";

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