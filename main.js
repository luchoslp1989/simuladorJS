alert("Obtenga su nota final.")

const calcularNotafinal = () => {
    let nombreAlumno = '';
    let notaPrimerParcial= 0;
    let notaSegundoParcial = 0;
    let notaPromedio = 0;
    let calcularDeNuevo = false;

    do {
        nombreAlumno = prompt("Ingrese el nombre del alumno: ");
        notaPrimerParcial = parseInt(prompt("Ingrese la nota del primer parcial: "));
        notaSegundoParcial = parseInt(prompt("Ingrese la nota del segundo parcial: "));


        notaPrimerParcialValidada = validarNota(notaPrimerParcial);
        notaSegundoParcialValidada = validarNota(notaSegundoParcial);

        notaPromedio = calcularPromedio(notaPrimerParcialValidada, notaSegundoParcialValidada);
        if (notaPromedio >= 7){
            alert("El alumno "+nombreAlumno+" promociona la materia. Nota final :"+notaPromedio+".");
        }else if (notaPromedio>=4 & notaPromedio<7){
            alert("El alumno "+nombreAlumno+" regulariza la materia. Nota final de "+notaPromedio+". Debe rendir un examen final.");
        }else{
            alert("El alumno "+nombreAlumno+" no aprueba la materia. Nota final: "+notaPromedio+". Debe recursar.");
        }

        calcularDeNuevo = confirm("Quiere calcular de nuevo?");
    } while (calcularDeNuevo);

}

function validarNota(nota) {
    while (Number.isNaN(nota) || estaFueraDelRango(nota)) {
        alert("Debe ingresar notas validas");
        nota = parseInt(prompt("Ingrese la nota"));
    }
    notaValida = nota;
    return notaValida;
}

function calcularPromedio (notaPrimerParcial, notaSegundoParcial) {
    promedio = (notaPrimerParcial + notaSegundoParcial) / 2;
    return promedio;
}

function estaFueraDelRango(nota){
    if (nota <1 || nota>10){
        return true
    } else {
        return false
    }
}

calcularNotafinal();