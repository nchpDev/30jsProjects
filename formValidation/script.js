var paisError = document.getElementById('pais-error');
var nombreError = document.getElementById('nombre-error');
var edadError = document.getElementById('edad-error');
var igError = document.getElementById('ig-error');
var sexoError = document.getElementById('sexo-error');
var emailError = document.getElementById('email-error');
var celularError = document.getElementById('celular-error');
var pesoError = document.getElementById('peso-error');
var alturaError = document.getElementById('altura-error');
var objetivoError = document.getElementById('objetivo-error');
var otrosObjError = document.getElementById('otrosObj-error');
var experienciaError = document.getElementById('experiencia-error');
var diasEntrenamientoError = document.getElementById('diasEntrenamiento-error');
var trackError = document.getElementById('track-error');
var activoError = document.getElementById('activo-error');
var incomeError = document.getElementById('income-error');


function validatePais() {
    var paisField = document.getElementById('pais').value;

    if(paisField.length == 0) {
        paisError.innerHTML = 'Field is required';
        return false;
    }
    paisError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateNombre() {
    var nombreField = document.getElementById('nombre').value;

    if(nombreField.length == 0) {
        nombreError.innerHTML = 'Field is required';
        return false;
    }
    if(!nombreField.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nombreError.innerHTML = 'Escribir Nombre y Apellido completo'
        return false;
    }
    nombreError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEdad() {
    var edadField = document.getElementById('edad').value;

    if(edadField.length == 0) {
        edadError.innerHTML = 'Field is required';
        return false;
    }
    if(edadField.value <= 15) {
        edadError.innerHTML = ''
    }
}

function validateIg() {
    var igField = document.getElementById('ig').value;

}

function validateSexo() {
    var sexoField = document.getElementById('sexo').value;

}

function validateEmail() {
    var emailField = document.getElementById('email').value;

}

function validateCelular() {
    var celularField = document.getElementById('celular').value;

}

function validatePeso() {
    var pesoField = document.getElementById('peso').value;

}

function validateAltura() {
    var alturaField = document.getElementById('altura').value;

}

function validateObjetivo() {
    var objetivoField = document.getElementById('objetivo').value;

}

function validateOtrosObj() {
    var otrosObjField = document.getElementById('otrosObj').value;

}

function validateExperiencia() {
    var experienciaField = document.getElementById('experiencia').value;

}

function validateDiasEntrenamiento() {
    var diasEntrenamientoField = document.getElementById('diasEntrenamiento').value;

}

function validateTrack() {
    var trackField = document.getElementById('track').value;

}

function validateActivo() {
    var activoField = document.getElementById('activo').value;
}

function validateIncome() {
    var incomeField = document.getElementById('income').value;
}

