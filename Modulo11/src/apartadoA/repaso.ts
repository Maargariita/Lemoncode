
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

//Patrones de repetición /^\d{nº de veces que se repite el patrón}\s(espacio)[A-Z]{Nº de letras que sean}$/

const matricula = /^\d{4}\s[A-Z]{3}$/;
resultado = matricula.test("1234 BKP");
console.log("1234 BKP", resultado);

// Decimales {nº con coma detrás}

const matriculaAntes = /^[A-Z]{1,2}\s\d{4,5}\s[A-Z]{0,2}$/;
resultado = matriculaAntes.test("BB 1234 BB");
console.log("BB 1234 BB", resultado);

// Validar espacios

const espacioOpcional = /^\d{8}\s?[A-Z]$/;
resultado = espacioOpcional.test("12345678A");
console.log("12345678A", resultado);

// validar extensión  * para cero o más

const extension = /^imagen\d*\.png$/;
resultado = extension.test("imagen123.png");
console.log("imagen123.png", resultado);

// si tiene que incluir algo más que imagen +

const añadir = /^imagen_\d+\.png$/;
resultado = añadir.test("imagen_01.png");
console.log("imagen_01.png", resultado);


// ? opciopnal . () | () 
// gm al final multiples líneas

const validarNIF = (value: string): boolean => {
 const patronNuevo = /^(?<parteNumerica>\d{8})(\s|-|_)?(?<letra>[A-Za-z])$/;

const coincidencia =patronNuevo.exec(value);
 
if(coincidencia) {
    const {parteNumerica, letra} = coincidencia.groups as any;
    const numeroLimpio = parteNumerica.replace(/\./g, "");
    console.log("La parte numérica es:", numeroLimpio);
    console.log("La letra es:", letra);
    return true;
} else {
    console.log("Algo ha fallado")
    return false;
}
}

validarNIF("12345678Q");

// si al final añades i pasa a ser insensitive; g global; m multilinea;


















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