
// imagenA
// imagenB
// imagenC
// imagen9


// imagen
// imagenAA

const myregex = /^imagen\..$/;


let resultado = myregex.test("imagenA");
console.log("imagenA", resultado);

resultado = myregex.test("imag");
console.log("imag", resultado);

resultado = myregex.test("holaimagen0");
console.log("holaimagen0", resultado);


const myregexx = /^\.txt\.$/;


const validarWeb =/^https:\/\//;

const validarDominio = /\....$/;
resultado = validarDominio.test("elmundo.es");
console.log("elmundo.es", resultado);

resultado = validarDominio.test("elmundo.com");
console.log("elmundo.com", resultado);


const validarNumero = /^[^@$&]$/;
resultado = validarNumero.test("1");
console.log("1", resultado);


const caracteres = /^...$/;
const letras = /^\w$/;
// Para que contenga /^\w$/ en minúscula y que no contega /^\W$/ en mayúscula;
resultado = letras.test("&1");
console.log("&1", resultado);
const noContiene = /^\W$/;
resultado = noContiene.test("@");
console.log("@", resultado);

const digitos = /^\d$/;
resultado = digitos.test("1");
console.log("1", resultado);
//Para que no incluya D en mayus.

// /s espacio en blanco y con S mayus sin espacio.

const validarDNI = /^\d\d\d\d\d\d\d\d\s[A-Z]$/;
resultado = validarDNI.test("12345678 Y");
console.log("12345678 Y", resultado);




















/*export const estaBienFormadaLaIp = (value: string): boolean => {
    const patron = /^(\d{1,3}\.){3}\d$/ ;

    return patron.test(value)

}

export const estaBienFormadoNIF = (value: string): boolean => {
    const patron =/^\d{2}\.?\d{3}\.?\d{3}(\s|-|_)?[A-Za-z]$/ ;

    return patron.test(value);
};


const validarNIF = (value: string): boolean => {
    const patron = /^(?<parteNumerica>\d{2}\.?\d{3}\.?\d{3})(\s|-|_)?(?<letra>[A-Za-z])$/;
    const coincidencias = patron.exec(value);

    if(coincidencias) {
        const {parteNumerica, letra}  = coincidencias.groups as any;
        const numeroLimpio =  parteNumerica.replace(/\./g, "");
        console.log("Parte númerica es:", parteNumerica);
        console.log("Letra es:", letra);

        return true;
    } else {
        console.log("FALLO");
        return false
    }
};

validarNIF("12345678B");*/