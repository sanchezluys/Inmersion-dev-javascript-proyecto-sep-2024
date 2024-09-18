// declarando las variables
let cantidadMinima=6;
let cantidad = document.getElementById("cantidad");
//
// boton generar
let boton = document.getElementById("generar");
// tipo de dato
console.log(typeof cantidad);
console.log(typeof texto);  
// constantes
const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]+";
// contraseña
let contrasena = document.getElementById("contrasena");
function generar()
{

    // en la clase usan: pasrseint(cantidad.value);
    let numeroDigitado=parseInt(cantidad.value);
    console.log(numeroDigitado);
    if (numeroDigitado < cantidadMinima ){
        // console.log("Advertencia:\nLa cantidad es menor a 6");
        alert("Advertencia:\nLa cantidad no puede ser menor a "
            +cantidadMinima+" por ser muy insegura");
    }
    else if (numeroDigitado >= cantidadMinima ){
        // console.log("La cantidad es mayor o igual a 6");
        // alert("Muy bien cantidad acepata!!\nAceptar para generar la clave");
        crearClave(numeroDigitado);
    }
    else{
        alert(" !!ERROR!! \nLa cantidad no puede estar vacia");
    }
    
}

function crearClave(numeroDigitado)
{
    let password = '';
    for (let index = 0; index < numeroDigitado; index++) 
        {
            let caracterAleatorio= cadenaCaracteres[ Math.floor(Math.random() * cadenaCaracteres.length)];
            password+= caracterAleatorio;
            //console.log(caracterAleatorio);
            //console.log(password);
        }
    contrasena.value=password;
    calculatePasswordStrength(password)
}

function limpiar()
{
    alert("Limpiando...");
    cantidad.value='';
    contrasena.value='';
}


function calculatePasswordStrength(password) {
        let strength = 0;

        if (password.match(/[a-z]+/)) {
            strength += 20;
        }
        if (password.match(/[A-Z]+/)) {
            strength += 20;
        }
        if (password.match(/[0-9]+/)) {
            strength += 20;
        }
        if (password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/)) 
        {
            strength += 20;
        }
        // ⚠️❌✅
        if (strength < 33) {
            passwordStrength.classList.remove('medium', 'strong');
            passwordStrength.classList.add('weak');
            passwordStrength.textContent = ' ❌ Debil ❌';
            passwordStrength.style.textAlign = 'center';
        } else if (strength < 66) {
            passwordStrength.classList.remove('weak', 'strong');
            passwordStrength.classList.add('medium');
            passwordStrength.textContent = ' ⚠️ Media ⚠️';
            passwordStrength.style.textAlign = 'center';
        } else {
            passwordStrength.classList.remove('weak', 'medium');
            passwordStrength.classList.add('strong');
            passwordStrength.textContent = ' ✅ Fuerte ✅';
            passwordStrength.style.textAlign = 'center';
        }

        return strength;
    }
console.log("fin del programa");