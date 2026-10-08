/* =====================================================
   NIDO
   CONFIGURACIÓN DE NOTIFICACIONES
===================================================== */


/* =====================================================
   ELEMENTOS
===================================================== */

const notificationsMovements =
    document.getElementById(
        "notificationsMovements"
    );


const notificationsGoals =
    document.getElementById(
        "notificationsGoals"
    );


const notificationsParticipants =
    document.getElementById(
        "notificationsParticipants"
    );


const notificationsWeekly =
    document.getElementById(
        "notificationsWeekly"
    );


const backNotificationsButton =
    document.getElementById(
        "backNotificationsButton"
    );


/* =====================================================
   CONFIGURACIÓN POR DEFECTO
===================================================== */

const defaultNotifications = {

    movements:
        true,

    goals:
        true,

    participants:
        true,

    weekly:
        false

};


/* =====================================================
   OBTENER CONFIGURACIÓN
===================================================== */

function getNotificationSettings() {

    const savedSettings =
        JSON.parse(
            localStorage.getItem(
                "nidoNotifications"
            )
        );


    if (!savedSettings) {

        return defaultNotifications;

    }


    return {

        movements:
            savedSettings.movements ??
            defaultNotifications.movements,

        goals:
            savedSettings.goals ??
            defaultNotifications.goals,

        participants:
            savedSettings.participants ??
            defaultNotifications.participants,

        weekly:
            savedSettings.weekly ??
            defaultNotifications.weekly

    };

}


/* =====================================================
   GUARDAR CONFIGURACIÓN
===================================================== */

function saveNotificationSettings() {

    const settings = {

        movements:
            notificationsMovements.checked,

        goals:
            notificationsGoals.checked,

        participants:
            notificationsParticipants.checked,

        weekly:
            notificationsWeekly.checked

    };


    localStorage.setItem(
        "nidoNotifications",
        JSON.stringify(
            settings
        )
    );

}


/* =====================================================
   MOSTRAR CONFIGURACIÓN
===================================================== */

function renderNotificationSettings() {

    const settings =
        getNotificationSettings();


    notificationsMovements.checked =
        settings.movements;


    notificationsGoals.checked =
        settings.goals;


    notificationsParticipants.checked =
        settings.participants;


    notificationsWeekly.checked =
        settings.weekly;

}


/* =====================================================
   CAMBIAR NOTIFICACIONES
===================================================== */

notificationsMovements.addEventListener(
    "change",
    saveNotificationSettings
);


notificationsGoals.addEventListener(
    "change",
    saveNotificationSettings
);


notificationsParticipants.addEventListener(
    "change",
    saveNotificationSettings
);


notificationsWeekly.addEventListener(
    "change",
    saveNotificationSettings
);


/* =====================================================
   BOTÓN VOLVER
===================================================== */

backNotificationsButton.addEventListener(
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

renderNotificationSettings();