var paisError = document.getElementById('pais-error');
var nombreError = document.getElementById('nombre-error');
var edadError = document.getElementById('edad-error');
var igError = document.getElementById('ig-error');
var sexoError = document.getElementById('sexo-error');
var emailError = document.getElementById('email-error');
var celularError = document.getElementById('celular-error');
var pesoError = document.getElementById('peso-error');
var alturaError = document.getElementById('altura-error');
// var objetivoError = document.getElementById('objetivo-error');
// var otrosObjError = document.getElementById('otrosObj-error');
// var experienciaError = document.getElementById('experiencia-error');
// var diasEntrenamientoError = document.getElementById('diasEntrenamiento-error');
// var trackError = document.getElementById('track-error');
// var activoError = document.getElementById('activo-error');
// var incomeError = document.getElementById('income-error');
var submitError = document.getElementById('submit-error');


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

    if (nombreField.length == 0) {
        nombreError.innerHTML = 'Field is required';
        return false;

    } else if (!nombreField.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
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

    } else if (edadField.value < 18) {
        edadError.innerHTML = 'You need to be older';
    }
    edadError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateIg() {
    var igField = document.getElementById('ig').value;

    if (igField.length == 0) {
        igError.innerHTML = 'Field is required';
        return false;
    }
    igError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateSexo() {
    var sexoField = document.getElementById('sexo').value;

    if (sexoField.length == 0) {
        sexoError.innerHTML = 'Field is required';
    }
    sexoError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    var emailField = document.getElementById('email').value;

    if(emailField.length == 0){
        emailError.innerHTML = 'Field is required';
        return false;
    } else if (!emailField.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email Invalido';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateCelular() {
    var celularField = document.getElementById('celular').value;

    if(celularField.length == 0) {
        celularError.innerHTML = 'Field is required';
        return false;
    } else if (celularField.length <= 10) {
        celularError.innerHTML = 'Celular Invalido';
        return false;
    }
    celularError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePeso() {
    var pesoField = document.getElementById('peso').value;

    if(pesoField.length == 0) {
        pesoError.innerHTML = 'Field is required';
        return false;

    } else if (pesoField.length >= 4) {
        pesoError.innerHTML = 'Peso Invalido';
        return false;
    }
    pesoError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateAltura() {
    var alturaField = document.getElementById('altura').value;

    if(alturaField.length == 0) {
        alturaError.innerHTML = 'Field is required';
        return false;

    } else if (alturaField.length >= 4) {
        alturaError.innerHTML = 'Altura Invalida';
        return false;
    }
    alturaError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

// function validateObjetivo() {
//     var objetivoField = document.getElementById('objetivo').value;

// }

// function validateOtrosObj() {
//     var otrosObjField = document.getElementById('otrosObj').value;

// }

// function validateExperiencia() {
//     var experienciaField = document.getElementById('experiencia').value;

// }

// function validateDiasEntrenamiento() {
//     var diasEntrenamientoField = document.getElementById('diasEntrenamiento').value;

// }

// function validateTrack() {
//     var trackField = document.getElementById('track').value;

// }

// function validateActivo() {
//     var activoField = document.getElementById('activo').value;
// }

// function validateIncome() {
//     var incomeField = document.getElementById('income').value;
// }

function validateForm() {
    if(!!validatePais() || !validateNombre || !validateEdad() || !validateIg() || /*!validateSexo()*/ !validateEmail() || !validateCelular() || !validatePeso() || validateAltura()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix errors before submission';
        setTimeout(function(){
            submitError.style.display = 'none';
        }, 3000)
        return false;
    }
    
}