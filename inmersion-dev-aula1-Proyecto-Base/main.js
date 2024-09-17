// declarando las variables
//let cantidad= 1;
let cantidad = document.getElementById("cantidad");
let texto ="texto";
// boton generar
let boton = document.getElementById("generar");
// tipo de dato
console.log(typeof cantidad);
console.log(typeof texto);  
// constantes
const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// contraseña
let contrasena = document.getElementById("contrasena");
function generar(){
    // en la clase usan: pasrseint(cantidad.value);
    let numeroDigitado=parseInt(cantidad.value);
    console.log(numeroDigitado);
    if (numeroDigitado < 6 ){
        console.log("La cantidad es menor a 6");
        alert("error la cantidad debe ser mayor que 6");
    }
    else if (numeroDigitado >= 6 ){
        console.log("La cantidad es mayor o igual a 6");
        alert("Muy bien cantidad acepata!!");
    }
    let password = '';
    for (let index = 0; index < numeroDigitado; index++) {
        
        let caracterAleatorio= cadenaCaracteres[ Math.floor(Math.random() * cadenaCaracteres.length)];

        password+= caracterAleatorio;
        console.log(caracterAleatorio);
        console.log(password);
    }
    contrasena.value=password;
}
console.log("fin del programa");