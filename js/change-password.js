/* =====================================================
   NIDO
   CAMBIAR CONTRASEÑA
===================================================== */


/* =====================================================
   ELEMENTOS
===================================================== */

const changePasswordForm =
    document.getElementById(
        "changePasswordForm"
    );


const currentPassword =
    document.getElementById(
        "currentPassword"
    );


const newPassword =
    document.getElementById(
        "newPassword"
    );


const confirmPassword =
    document.getElementById(
        "confirmPassword"
    );


const changePasswordMessage =
    document.getElementById(
        "changePasswordMessage"
    );


const cancelChangePassword =
    document.getElementById(
        "cancelChangePassword"
    );


/* =====================================================
   MOSTRAR / OCULTAR CONTRASEÑA
===================================================== */

document
    .querySelectorAll(
        ".password-toggle"
    )
    .forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const targetId =
                        button.dataset.target;


                    const input =
                        document.getElementById(
                            targetId
                        );


                    if (
                        input.type ===
                        "password"
                    ) {

                        input.type =
                            "text";

                        button.textContent =
                            "🙈";

                        button.setAttribute(
                            "aria-label",
                            "Ocultar contraseña"
                        );

                    } else {

                        input.type =
                            "password";

                        button.textContent =
                            "👁️";

                        button.setAttribute(
                            "aria-label",
                            "Mostrar contraseña"
                        );

                    }

                }
            );

        }
    );


/* =====================================================
   MOSTRAR MENSAJE
===================================================== */

function showPasswordMessage(
    message,
    type
) {

    changePasswordMessage.textContent =
        message;

    changePasswordMessage.className =
        "change-password-message " +
        type;

    changePasswordMessage.hidden =
        false;

}


/* =====================================================
   FORMULARIO
===================================================== */

changePasswordForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const current =
            currentPassword.value;


        const newPasswordValue =
            newPassword.value;


        const confirmPasswordValue =
            confirmPassword.value;


        /* =============================================
           COMPROBAR CONTRASEÑA ACTUAL
        ============================================== */

        if (!current) {

            showPasswordMessage(
                "Introduce tu contraseña actual.",
                "error"
            );

            currentPassword.focus();

            return;

        }


        /* =============================================
           COMPROBAR LONGITUD
        ============================================== */

        if (
            newPasswordValue.length <
            8
        ) {

            showPasswordMessage(
                "La nueva contraseña debe tener al menos 8 caracteres.",
                "error"
            );

            newPassword.focus();

            return;

        }


        /* =============================================
           COMPROBAR CONTRASEÑAS
        ============================================== */

        if (
            newPasswordValue !==
            confirmPasswordValue
        ) {

            showPasswordMessage(
                "Las nuevas contraseñas no coinciden.",
                "error"
            );

            confirmPassword.focus();

            return;

        }


        /* =============================================
           EVITAR MISMA CONTRASEÑA
        ============================================== */

        if (
            current ===
            newPasswordValue
        ) {

            showPasswordMessage(
                "La nueva contraseña debe ser diferente de la actual.",
                "error"
            );

            newPassword.focus();

            return;

        }


        /* =============================================
           GUARDAR CONTRASEÑA
        ============================================== */

        localStorage.setItem(
            "nidoPassword",
            newPasswordValue
        );


        /* =============================================
           LIMPIAR FORMULARIO
        ============================================== */

        changePasswordForm.reset();


        /* =============================================
           MOSTRAR ÉXITO
        ============================================== */

        showPasswordMessage(
            "Contraseña actualizada correctamente.",
            "success"
        );

    }
);


/* =====================================================
   CANCELAR
===================================================== */

cancelChangePassword.addEventListener(
    "click",
    function () {

        window.location.href =
            "security.html";

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