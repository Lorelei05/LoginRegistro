//declarar variables para vincular los objetos de formulario
const nombre =  document.getElementById('name');
const email =  document.getElementById('email');
const user =  document.getElementById('user');
const pass = document.getElementById('pass');
const formulario = document.getElementById('formRegistro');

//Genereando eventos
formulario.addEventListener('submit', registro);

//funciones a ejecutar
function login(e){
    e.preventDefault();

    let nombreVal = nombre.value;
    let emailVal = email.value;
    let userVal = user.value;
    let passwordVal = password.value;

    if(nombreVal == '' || emailVal == '' || userVal == '' || passwordVal == ''){
        return;
    } 

    console.log('valindando datos!');
}