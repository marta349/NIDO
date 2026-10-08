/* =====================================================
   NIDO
   CAPA CENTRAL DE DATOS
===================================================== */


/* =====================================================
   NIDOS
===================================================== */

function getNidos() {

    return JSON.parse(
        localStorage.getItem(
            "nidoNidos"
        )
    ) || [];

}


function saveNidos(nidos) {

    localStorage.setItem(
        "nidoNidos",
        JSON.stringify(nidos)
    );

}


/* =====================================================
   NIDO ACTIVO
===================================================== */

function getActiveNidoId() {

    return localStorage.getItem(
        "nidoActiveId"
    );

}


function setActiveNidoId(id) {

    localStorage.setItem(
        "nidoActiveId",
        id
    );

}


function getActiveNido() {

    const nidos =
        getNidos();

    const activeId =
        getActiveNidoId();

    return nidos.find(
        function (nido) {

            return nido.id ===
                activeId;

        }
    ) || null;

}


/* =====================================================
   DATOS DE TODOS LOS NIDOS
===================================================== */

function getNidoData() {

    return JSON.parse(
        localStorage.getItem(
            "nidoData"
        )
    ) || {};

}


function saveNidoData(data) {

    localStorage.setItem(
        "nidoData",
        JSON.stringify(data)
    );

}


/* =====================================================
   CREAR ESTRUCTURA DE UN NIDO
===================================================== */

function createNidoData(nidoId) {

    const allData =
        getNidoData();

    if (!allData[nidoId]) {

        allData[nidoId] = {

            incomes: [],

            expenses: [],

            goals: []

        };

        saveNidoData(
            allData
        );

    }

    return allData[nidoId];

}


/* =====================================================
   OBTENER DATOS DE UN NIDO
===================================================== */

function getNidoDataById(nidoId) {

    const allData =
        getNidoData();

    if (!allData[nidoId]) {

        return createNidoData(
            nidoId
        );

    }

    return allData[nidoId];

}


/* =====================================================
   DATOS DEL NIDO ACTIVO
===================================================== */

function getActiveNidoData() {

    const activeNido =
        getActiveNido();

    if (!activeNido) {

        return null;

    }

    return getNidoDataById(
        activeNido.id
    );

}


/* =====================================================
   INGRESOS
===================================================== */

function getNidoIncomes() {

    const data =
        getActiveNidoData();

    if (!data) {

        return [];

    }

    return data.incomes || [];

}


function saveNidoIncomes(incomes) {

    const activeNido =
        getActiveNido();

    if (!activeNido) {

        return;

    }

    const allData =
        getNidoData();

    if (!allData[activeNido.id]) {

        allData[activeNido.id] = {

            incomes: [],

            expenses: [],

            goals: []

        };

    }

    allData[activeNido.id].incomes =
        incomes;

    saveNidoData(
        allData
    );

}


/* =====================================================
   GASTOS
===================================================== */

function getNidoExpenses() {

    const data =
        getActiveNidoData();

    if (!data) {

        return [];

    }

    return data.expenses || [];

}


function saveNidoExpenses(expenses) {

    const activeNido =
        getActiveNido();

    if (!activeNido) {

        return;

    }

    const allData =
        getNidoData();

    if (!allData[activeNido.id]) {

        allData[activeNido.id] = {

            incomes: [],

            expenses: [],

            goals: []

        };

    }

    allData[activeNido.id].expenses =
        expenses;

    saveNidoData(
        allData
    );

}


/* =====================================================
   OBJETIVOS
===================================================== */

function getNidoGoals() {

    const data =
        getActiveNidoData();

    if (!data) {

        return [];

    }

    return data.goals || [];

}


function saveNidoGoals(goals) {

    const activeNido =
        getActiveNido();

    if (!activeNido) {

        return;

    }

    const allData =
        getNidoData();

    if (!allData[activeNido.id]) {

        allData[activeNido.id] = {

            incomes: [],

            expenses: [],

            goals: []

        };

    }

    allData[activeNido.id].goals =
        goals;

    saveNidoData(
        allData
    );

}