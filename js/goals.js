/* =====================================================
   NIDO
   OBJETIVOS
===================================================== */


const addGoalButton =
    document.getElementById(
        "addGoalButton"
    );


const goalsList =
    document.getElementById(
        "goalsList"
    );


/* =====================================================
   OBTENER OBJETIVOS DEL NIDO ACTIVO
===================================================== */

function getGoalsFromActiveNido() {

    return getNidoGoals();

}


/* =====================================================
   GUARDAR OBJETIVOS DEL NIDO ACTIVO
===================================================== */

function saveGoalsToActiveNido(goals) {

    saveNidoGoals(
        goals
    );

}


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
   CARGAR OBJETIVOS
===================================================== */

function loadGoals() {

    const goals =
        getGoalsFromActiveNido();


    if (goals.length === 0) {

        goalsList.innerHTML = `

            <div class="empty-state">

                <div class="empty-state-icon">
                    🎯
                </div>

                <h3>
                    Aún no tenéis objetivos
                </h3>

                <p>
                    Cread vuestro primer objetivo de ahorro.
                </p>

            </div>

        `;

        return;

    }


    goalsList.innerHTML =
        goals.map(
            function (goal) {

                const target =
                    Number(
                        goal.target
                    );


                const saved =
                    Number(
                        goal.saved
                    );


                const percentage =
                    target > 0
                        ? Math.min(
                            (
                                saved /
                                target
                            ) * 100,
                            100
                        )
                        : 0;


                const remaining =
                    Math.max(
                        target -
                        saved,
                        0
                    );


                return `

                    <article class="goal-card">

                        <div class="goal-card-header">

                            <div class="goal-card-title">

                                <div class="goal-icon">
                                    🎯
                                </div>

                                <div>

                                    <h3>
                                        ${goal.name}
                                    </h3>

                                    <p>
                                        Objetivo de ahorro
                                    </p>

                                </div>

                            </div>

                        </div>


                        <div class="goal-amounts">

                            <div>

                                <span>
                                    Ahorrado
                                </span>

                                <strong>
                                    ${formatMoney(saved)}
                                </strong>

                            </div>


                            <div>

                                <span>
                                    Objetivo
                                </span>

                                <strong>
                                    ${formatMoney(target)}
                                </strong>

                            </div>

                        </div>


                        <div class="goal-progress">

                            <div
                                class="goal-progress-bar"
                                style="width: ${percentage}%"
                            ></div>

                        </div>


                        <div class="goal-progress-info">

                            <span>
                                ${Math.round(
                                    percentage
                                )}%
                            </span>

                            <span>
                                ${
                                    remaining > 0
                                        ? "Faltan " +
                                          formatMoney(
                                              remaining
                                          )
                                        : "¡Objetivo conseguido!"
                                }
                            </span>

                        </div>


                        <div class="goal-actions">

                            <button
                                type="button"
                                class="secondary-button goal-add-money"
                                data-id="${goal.id}"
                            >
                                Añadir ahorro
                            </button>


                            <button
                                type="button"
                                class="goal-delete"
                                data-id="${goal.id}"
                            >
                                🗑️ Eliminar
                            </button>

                        </div>

                    </article>

                `;

            }
        ).join("");


    setupGoalButtons();

}


/* =====================================================
   BOTONES DE LOS OBJETIVOS
===================================================== */

function setupGoalButtons() {


    /* -----------------------------------------
       AÑADIR AHORRO
    ----------------------------------------- */

    document
        .querySelectorAll(
            ".goal-add-money"
        )
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const goalId =
                            Number(
                                button.dataset.id
                            );


                        const goals =
                            getGoalsFromActiveNido();


                        const goal =
                            goals.find(
                                function (item) {

                                    return Number(
                                        item.id
                                    ) ===
                                        goalId;

                                }
                            );


                        if (!goal) {

                            return;

                        }


                        const amount =
                            Number(
                                prompt(
                                    "¿Cuánto dinero quieres añadir a este objetivo?"
                                )
                            );


                        if (
                            !amount ||
                            amount <= 0
                        ) {

                            return;

                        }


                        goal.saved =
                            Number(
                                goal.saved
                            ) +
                            amount;


                        if (
                            goal.saved >
                            Number(
                                goal.target
                            )
                        ) {

                            goal.saved =
                                Number(
                                    goal.target
                                );

                        }


                        saveGoalsToActiveNido(
                            goals
                        );


                        loadGoals();

                    }
                );

            }
        );


    /* -----------------------------------------
       ELIMINAR OBJETIVO
    ----------------------------------------- */

    document
        .querySelectorAll(
            ".goal-delete"
        )
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const goalId =
                            Number(
                                button.dataset.id
                            );


                        const confirmed =
                            confirm(
                                "¿Quieres eliminar este objetivo?"
                            );


                        if (!confirmed) {

                            return;

                        }


                        const goals =
                            getGoalsFromActiveNido();


                        const updatedGoals =
                            goals.filter(
                                function (goal) {

                                    return Number(
                                        goal.id
                                    ) !==
                                        goalId;

                                }
                            );


                        saveGoalsToActiveNido(
                            updatedGoals
                        );


                        loadGoals();

                    }
                );

            }
        );

}


/* =====================================================
   CREAR OBJETIVO
===================================================== */

addGoalButton.addEventListener(
    "click",
    function () {

        window.location.href =
            "add-goal.html";

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

loadGoals();