document.addEventListener("DOMContentLoaded", function(){
//este console.log imprime un mensaje de bienvenida en la consola.
console.log("Sistema EBAC de Registro de Alumnos");

var form = document.getElementById("registration-form");
var addButton = document.getElementById("add-button");
var consultButton = document.getElementById("consult-button");
var deleteButton = document.getElementById("delete-button");

form.addEventListener("submit",agregarAlumno);

form.style.display= "none";
//Esto es para que aparezca el formulario cuando se le dé en el botón de agregar, y que cuando llenemos los inputs se envíe la información
addButton.addEventListener ("click", function(event){
    form.style.display= "flex"; 
})

consultButton.addEventListener("click", consultarRegistros);

deleteButton.addEventListener("click", eliminarAlumno);

//se define en este var, un arreglo de registro, con datos de alumnos de la EBAC.
//variable de tipo arreglo. En un arreglo se tiene la particularidad de guardar diferentes elementos.
//tiene objetos, que vemos aqui por ejemplo propiedades (como el nombre:) y valores (como: Jessica Vianney Chávez Romero).

var registro = [

    {nombre: "Jessica Vianney Chávez Romero", edad: "32", zonaResidencia: "CDMX", nombrePrograma: "Start IT", email: "happypunkj@gmail.com"},
    {nombre: "Maria Antonieta Romero Rodríguez", edad: "55", zonaResidencia: "CDMX", nombrePrograma: "Backend", email: "mariantonieta@gmail.com"},
    {nombre: "Eduardo Romero Rodríguez", edad: "26", zonaResidencia: "CDMX", nombrePrograma: "Frontend", email: "laloromero@gmail.com"},
    {nombre: "David Chávez Romero", edad: "14", zonaResidencia: "CDMX", nombrePrograma: "Ciencia de Datos", email: "davidchavez@gmail.com"},
    {nombre: "Rene Chávez Díaz", edad: "56", zonaResidencia: "CDMX", nombrePrograma: "Análisis de Datos", email: "renechavez@gmail.com"},
];

//función que permite agregar un nuevo alumno al arreglo de registro
function agregarAlumno(event){
    event.preventDefault();
// Aquí se le solicita información al usuario para el registro de un nuevo alumno. 
//El prompt(), es una función de Javascript que se utiliza para mostrar un cuadro de dialogo en el navegador que le permite al usuario ingresar datos.

    var nombre = document.getElementById("name-input").value;
    var zonaResidencia = document.getElementById("locality-input").value;
    var edad = document.getElementById("age-input").value;
    var nombrePrograma = document.getElementById("course-input").value;
    var email = document.getElementById("email-input").value;

//Aquí abajo hay una variable que trabaja de una manera distinta a las anteriores variables.
//Crea un nuevo objeto que se llama nuevo alumno con los datos ingresados.
    var nuevoAlumno = {nombre: nombre, edad: edad, zonaResidencia: zonaResidencia, nombrePrograma: nombrePrograma, email: email};

//Agrega la información nuevoAlumno al arreglo.
//El método .push en Javascript se utiliza para agregar uno o más elementos al final de un arreglo.
//Ahi en nuevoAlumno va a agregar el usuario lo que le preguntamos en el prompt(), que es el nombre, la edad, la zona de residencia, el nombre del programa y la edad.
    registro.push(nuevoAlumno);
//Estas lineas de codigo se copiaron de las de arriba para modificar los valores de tal forma que cuando queramos agregar un nuevo alumno aparezcan los campos vacíos.
    var nombre = document.getElementById("name-input").value = "";
    var zonaResidencia = document.getElementById("locality-input").value = "";
    var edad = document.getElementById("age-input").value = "";
    var nombrePrograma = document.getElementById("course-input").value = "";
    var email = document.getElementById("email-input").value = "";

    form.style.display= "none";
};


//Es una función para consultar los registros de los alumnos.
function consultarRegistros(){

//Este ciclo for itera sobre cada uno de los registros del arreglo.
//Mediante este ciclo for, los programadores pueden repetir una instrucción varias veces, pidiendola una vez a nuestra computadora.


    /*for(var i =0; i < registro.length; i++){
        console.log("Nombre: " + registro[i].nombre);
        console.log("Edad: " + registro[i].edad);
        console.log("Zona de Residencia: " + registro[i].zonaResidencia);
        console.log("Nombre del Programa: " + registro[i].nombrePrograma);
        console.log("Correo electrónico: " + registro[i].email);
        console.log("");
//Cada uno de estos console.log se mostrarán la pantalla.
//Esta lista de console.log permite ver al usuario este nombre en la consola.
    };*/
    console.table(registro);
};

//Esta funcion permite generar un nuevo arreglo que no contenga la información del alumno deseado.
function eliminarAlumno (){

//ésta variable solicita al usuario el nombre del nuevo alumno a eliminar
    var nombreAeliminar = prompt("Ingresa el nombre del alumno a eliminar");//aqui el nombre a eliminar equivale a lo que el usuario te diga que debes eliminar.
   
    //Utiliza el método filter para crear un nuevo arreglo, sin el alumno a eliminar.
    registro=registro.filter (alumno=> alumno.nombre !== nombreAeliminar); //la variable alumno es una variable nueva que demuestra que puede tener cualquier nombre dentro de la función
    //filter Crea un nuevo arreglo con todos los elementos que no cumplen la condición especificada (en este caso, que el nombre del alumno no sea el que queremos eliminar).
    /*console.log("Registro actualizado:", registro);

//Esto que viene a continuación es algo que sugirió Diego que se integrara.
        /*if (alumnoExistente) {
        // Filtra el arreglo para eliminar al alumno
        registro = registro.filter(alumno => alumno.nombre !== nombreAeliminar);
        console.log("Alumno eliminado. Registro actualizado:", registro);
    } else {
        console.log("El alumno no fue encontrado en el registro.");
    };*/
};


function incluir(){ 
// aqui en esta funcion vamos a vincularla a una variable que deberiamos crear previamente y podemos mostrarla al usuario mediante una estructura de control como if else lo que creamos en esta función.

};

function consultar(){
//realizaremos lo mismo que dije en el comentario de arriba
};

function edadMasDe50(){

};

function salirSistema(){

};



//Aqui viene la columna vertebral, el menú.
//Ciclo do while permite repetir el menú cuando es indicado hasta que no se cumpla la condición.
//Este ciclo do al igual que el ciclo for, mientras no se cumpla cierta condición se va a seguir ejecutando.

//do{ 
   
//Variable que toma la elección del usuario para ejecutar la función indicada.
//Aquí se encuentra \n en el menú "Seleccione una opción" y significa un caracter de escape que representa un salto de linea o nueva linea.
var opcion = prompt ("Seleccione una opción: \n1. Agregar registro \n2. Consultar registro de alumnos \n3. Eliminar registro \n4. Salir");

/*if(opcion === "1") {
    agregarAlumno();
} else if(opcion === "2"){
    consultarRegistros();
} else if(opcion === "3"){
    eliminarAlumno ();
} else if(opcion === "4"){
    alert("Salir del sistema");
} else{
    alert("Opción inválida, elige otra");
} 
//Esta variable nos permite elegir si hacemos otra acción o cerramos el ciclo. 
//Le solicitamos a el usuario si quiere hacer otra acción en el menú, si si que ponga si, si no que ponga no.
  var continuar = prompt ("¿Deseas hacer otra acción? (si/no)");

  //While se encarga de cerrar el ciclo
  //Si el usuario escribe una si entonces va a seguir el ciclo, cuando ya no quieras hacer algo más me escribes otro símbolo, por ejemplo le decimos que no y ya cerramos. 
} while (continuar === "si");
*/
})