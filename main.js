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
    let calcularDeNuevo = false;

    do {
        legajoAlumno = parseInt(prompt("Ingrese el legajo del alumno: "+'\n\n'+listaAlumnos.join('\n')));
        
        const alumno = alumnos.find(alumno => alumno.legajo === legajoAlumno)

        if (alumno) {
            calcularCondicion(alumno, legajoAlumno)
        } else {
            alert('Legajo inexistente')
        }

        

        calcularDeNuevo = confirm("Quiere calcular de nuevo?");
    } while (calcularDeNuevo);



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

const calcularCondicion = (alumno, legajoAlumno) => {
    notaPromedio = calcularPromedio(alumno.notaPrimerParcial, alumno.notaSegundoParcial);
        if (notaPromedio >= 7){
            const alumnoRepetido = promovidos.some(repetido => repetido.legajo === legajoAlumno)
            if (!alumnoRepetido){
                promovidos.push(alumno)
            }
        }else if (notaPromedio>=4 & notaPromedio<7){
            const alumnoRepetido = regulares.some(repetido => repetido.legajo === legajoAlumno)
            if (!alumnoRepetido){
                regulares.push(alumno)
            }
        }else{
            const alumnoRepetido = recursantes.some(repetido => repetido.legajo === legajoAlumno)
            if (!alumnoRepetido){
                recursantes.push(alumno)
            }
        }
};

const mostrarResultados = () => {
    const alumnosPromovidos = promovidos.map(alumno => {
        return "Nombre: " + alumno.nombre
    })
    const alumnosRegulares = regulares.map(alumno => {
        return "Nombre: " + alumno.nombre
    })
    const alumnosRecursantes = recursantes.map(alumno => {
        return "Nombre: " + alumno.nombre
    })

    alert('PROMOVIDOS: '+'\n\n'+alumnosPromovidos.join('\n')+'.\n\n REGULARES: '+'\n\n'+alumnosRegulares.join('\n')+'.\n\n RECURSANTES: '+'\n\n'+alumnosRecursantes.join('\n')+'.')
};

mostrarAlumnos();
mostrarResultados()
