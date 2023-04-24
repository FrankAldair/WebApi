// Referencia al boton "buscar"
var boton = document.getElementById("buscar");
// Obtenemos una referencia al botón "limpiar"
var botonLimpiar = document.getElementById("limpiar");

//Funcion para consultar DNI
function traer(){
var dni = document.getElementById("dni").value;
fetch(
    "https://dniruc.apisperu.com/api/v1/dni/" + dni + "?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFsZDRndXJ0b3J1aXpmcmFua0BnbWFpbC5jb20ifQ.T2Uo3jb5PmYo86Pjs6N8zzOPbIRkPmC2J2J0JUYtujQ"
)
     .then((res) => res.json())
     .then((data) => {
        document.getElementById("doc").value=data.dni;
        document.getElementById("nombre").value=data.nombres;
        document.getElementById("apellido").value=data.apellidoPaterno +
            " " + data.apellidoMaterno;
     });
}

// Función para limpiar el formulario
function limpiarFormulario() {
    //Obtenemos las referencias a los campos del formulario
    var doc = document.getElementById("doc");
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    //Limpiamos los valores de los campos del formulario
    doc.value = "";
    nombre.value = "";
    apellido.value = "";
  }
  

//Agregamos el evento click al botón "buscar"
boton.addEventListener("click", traer);
//Agregamos el evento click al botón "limpiar"
botonLimpiar.addEventListener("click", limpiarFormulario);