document.addEventListener('DOMContentLoaded', function () {
    let formularioRegistrado = document.getElementById("formulario_registrado");

    if (formularioRegistrado) {
        formularioRegistrado.style.display = 'none';
    }

    let registradoDiv = document.getElementById("registro");
    if (registradoDiv) {
        registradoDiv.addEventListener('click', function () {
            formularioRegistrado.style.display = 'block';
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {

    let formularioNoRegistro = document.getElementById("formulario_no_registrado");
    if (formularioNoRegistro) {
        formularioNoRegistro.style.display = 'none';
    }

    let noRegistradoDiv = document.getElementById("no_registrado");
    if (noRegistradoDiv) {
        noRegistradoDiv.addEventListener('click', function () {
            formularioNoRegistro.style.display = 'block';
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    let enviarBtn = document.getElementById('enviar');
    let envioBtn = document.getElementById('envio');

    if (enviarBtn) {
        enviarBtn.addEventListener('click', function () {
            alert("Enviando correo");
        });
    }

    if (envioBtn) {
        envioBtn.addEventListener('click', function () {
            alert("Enviando correo");
        });
    }
});