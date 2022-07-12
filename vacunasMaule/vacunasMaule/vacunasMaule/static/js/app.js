function limpiarForm(form) {
    form.reset();
}

function ingresarPaciente() {
    var rut = document.formularioIngreso.rut.value;
    var nombre = document.formularioIngreso.nombre.value;
    var appaterno = document.formularioIngreso.appaterno.value;
    var apmaterno = document.formularioIngreso.apmaterno.value;
    var edad = document.formularioIngreso.edad.value;
    var vacuna = document.formularioIngreso.vacuna.value;
    var fecha = document.formularioIngreso.fecha.value;

    if (rut.length < 8 || rut.length > 11 || rut.indexOf('-') === -1) {
        alert('Debe ingresar un rut válido con guión.')
        document.formularioIngreso.rut.focus();
        return false;
    }

    if (nombre.length < 3) {
        alert('Debe ingresar un nombre.');
        document.formularioIngreso.nombre.focus();
        return false;
    }

    if (appaterno.length < 2) {
        alert('Debe ingresar un apellido paterno.');
        document.formularioIngreso.appaterno.focus();
        return false;
    }

    if (apmaterno.length < 2) {
        alert('Debe ingresar un apellido materno.');
        document.formularioIngreso.materno.focus();
        return false;
    }

    if (edad <= 0 || edad === '') {
        alert('Debe ingresar edad del paciente.');
        document.formularioIngreso.edad.focus();
        return false;
    }

    if (vacuna.length < 2) {
        alert('Debe ingresar el nombre de la vacuna.');
        document.formularioIngreso.vacuna.focus();
        return false;
    }

    if (fecha.length < 2) {
        alert('Debe ingresar una fecha válida.');
        document.formularioIngreso.fecha.focus();
        return false;
    }

    document.formularioIngreso.action = "/ingresar_registro";
    document.formularioIngreso.submit() = true;
}

function buscarPaciente() {
    var rut = document.formularioBusqueda.rut_paciente.value;
    
    if (rut.length < 8 || rut.length > 11 || rut.indexOf('-') === -1) {
        alert('Debe ingresar un rut válido con guión.')
        document.formularioBusqueda.rut_paciente.focus();
        return false;
    }
    
    document.formularioBusqueda.action = "/busca_pte";
    document.formularioBusqueda.submit() = true;
}

function eliminarPaciente() {
    var rut = document.formularioEliminacion.rut_paciente.value;
    
    if (rut.length < 8 || rut.length > 11 || rut.indexOf('-') === -1) {
        alert('Debe ingresar un rut válido con guión.')
        document.formularioEliminacion.rut_paciente.focus();
        return false;
    }
    
    document.formularioEliminacion.action = "/elimina_pte";
    document.formularioEliminacion.submit() = true;
}

function ingresarProfesional() {
    var rut = document.formularioIngresoPro.rut.value;
    var nombre = document.formularioIngresoPro.nombre.value;
    var appaterno = document.formularioIngresoPro.appaterno.value;
    var apmaterno = document.formularioIngresoPro.apmaterno.value;
    var fecha = document.formularioIngresoPro.fechanacto.value;
    var profesion = document.formularioIngresoPro.profesion.value;
    var email = document.formularioIngresoPro.email.value;


    if (rut.length < 8 || rut.length > 11 || rut.indexOf('-') === -1) {
        alert('Debe ingresar un rut válido con guión.')
        document.formularioIngresoPro.rut.focus();
        return false;
    }

    if (nombre.length < 3) {
        alert('Debe ingresar un nombre.');
        document.formularioIngresoPro.nombre.focus();
        return false;
    }

    if (appaterno.length < 2) {
        alert('Debe ingresar un apellido paterno.');
        document.formularioIngresoPro.appaterno.focus();
        return false;
    }

    if (apmaterno.length < 2) {
        alert('Debe ingresar un apellido materno.');
        document.formularioIngresoPro.materno.focus();
        return false;
    }

    if (fecha.length < 2) {
        alert('Debe ingresar una fecha válida.');
        document.formularioIngreso.fecha.focus();
        return false;
    }
    
    if (profesion.length < 3) {
        alert('Debe ingresar su profesión.');
        document.formularioIngresoPro.profesion.focus();
        return false;
    }

    if (email.indexOf('@') === -1 || email.indexOf('.') === -1 || email.length < 3) {
        document.formularioIngresoPro.email.focus();
        alert('Debe ingresar un email válido.');
        return false;
    }

    document.formularioIngresoPro.action = "/ingresar_registro_pro";
    document.formularioIngresoPro.submit() = true;
}

function buscarProfesional() {
    var rut = document.formularioBusquedaPro.rut_profesional.value;
    
    if (rut.length < 8 || rut.length > 11 || rut.indexOf('-') === -1) {
        alert('Debe ingresar un rut válido con guión.')
        document.formularioBusquedaPro.rut_profesional.focus();
        return false;
    }
    
    document.formularioBusquedaPro.action = "/busca_pro";
    document.formularioBusquedaPro.submit() = true;
}

function eliminarProfesional() {
    var rut = document.formularioEliminacionPro.rut_profesional.value;
    
    if (rut.length < 8 || rut.length > 11 || rut.indexOf('-') === -1) {
        alert('Debe ingresar un rut válido con guión.')
        document.formularioEliminacionPro.rut_profesional.focus();
        return false;
    }
    
    document.formularioEliminacionPro.action = "/elimina_pro";
    document.formularioEliminacionPro.submit() = true;
}

function editarProfesional() {
    var nombre = document.formularioEdicion.nombre.value;
    var appaterno = document.formularioEdicion.appaterno.value;
    var apmaterno = document.formularioEdicion.apmaterno.value;
    var fecha = document.formularioEdicion.fechanacto.value;
    var profesion = document.formularioEdicion.profesion.value;
    var email = document.formularioEdicion.email.value;

    if (nombre.length < 3) {
        alert('Debe ingresar un nombre.');
        document.formularioEdicion.nombre.focus();
        return false;
    }

    if (appaterno.length < 2) {
        alert('Debe ingresar un apellido paterno.');
        document.formularioEdicion.appaterno.focus();
        return false;
    }

    if (apmaterno.length < 2) {
        alert('Debe ingresar un apellido materno.');
        document.formularioEdicion.materno.focus();
        return false;
    }

    if (fecha.length < 2) {
        alert('Debe ingresar una fecha válida.');
        document.formularioEdicion.fecha.focus();
        return false;
    }
    
    if (profesion.length < 3) {
        alert('Debe ingresar su profesión.');
        document.formularioEdicion.profesion.focus();
        return false;
    }

    if (email.indexOf('@') === -1 || email.indexOf('.') === -1 || email.length < 3) {
        document.formularioEdicion.email.focus();
        alert('Debe ingresar un email válido.');
        return false;
    }

    document.formularioEdicion.action = "/edita_pro";
    document.formularioEdicion.submit() = true;
}