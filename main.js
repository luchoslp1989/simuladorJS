alert("Obtenga su nota final.")

const promovidos = []
const regulares = []
const recursantes = []

const mostrarAlumnos = () => {
    const listaAlumnos = alumnos.map(alumno => {
        return 'Legajo: ' + alumno.legajo+', nombre: ' +alumno.nombre+'.'
    })
    calcularNotafinal(listaAlumnos)
};

const calcularNotafinal = (listaAlumnos) => {
    // let nombreAlumno = '';
    // let notaPrimerParcial= 0;
    // let notaSegundoParcial = 0;
    let calcularDeNuevo = false;

    do {
        legajoAlumno = parseInt(prompt("Ingrese el legajo del alumno: "+'\n\n'+listaAlumnos.join('\n')));
        
        const alumno = alumnos.find(alumno => alumno.legajo === legajoAlumno)

        if (alumno) {
            calcularCondicion(alumno)
        } else {
            alert('Legajo inexistente')
        }

        

        calcularDeNuevo = confirm("Quiere calcular de nuevo?");
    } while (calcularDeNuevo);

}

// function validarNota(nota) {
//     while (Number.isNaN(nota) || estaFueraDelRango(nota)) {
//         alert("Debe ingresar notas validas");
//         nota = parseInt(prompt("Ingrese la nota"));
//     }
//     notaValida = nota;
//     return notaValida;
// }

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

const calcularCondicion = (alumno) => {
    notaPromedio = calcularPromedio(alumno.notaPrimerParcial, alumno.notaSegundoParcial);
        if (notaPromedio >= 7){
            promovidos.push(alumno)
        }else if (notaPromedio>=4 & notaPromedio<7){
            regulares.push(alumno);
        }else{
            recursantes.push(alumno);
        }
};

mostrarAlumnos();
console.log(promovidos);
console.log(regulares);
console.log(recursantes);