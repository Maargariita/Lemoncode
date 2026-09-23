//import { isValidIBAN } from 'ibantools';
import { devolverNombreDelBanco } from './ibantools';

/*interface Validador {
    codigoPais: string;
    digitoControl1: string;
    codigoBanco: string;
    codigoSucursal: string;
    digitoControl2: string;
    numeroCuenta: string;
}

const fragmentarIban = (value: string): Validador => {
    // const patron = /^[A-Z]{2}\d{2}(\s?|-)\d{4}(\s?|-)\d{4}(\s?|-)\d{2}(\s?|-)\d{10}$/;

    // return patron.test(value);
    const patron =
        /^((?<codigoPais>ES)(?<digitoControl1>\d{2}))(?<codigoBanco>\d{4})(?<codigoSucursal>\d{4})(?<digitoControl2>\d{2})(?<numeroCuenta>\d{10})$/gim;

    const coincidencias = patron.exec(value);

    if (coincidencias) {
        const {
            codigoPais,
            digitoControl1,
            codigoBanco,
            codigoSucursal,
            digitoControl2,
            numeroCuenta,
        } = coincidencias.groups as any;
        const validador: Validador = {
            codigoPais,
            digitoControl1,
            codigoBanco,
            codigoSucursal,
            digitoControl2,
            numeroCuenta,
        };
        return validador;
    } else {

        const validador: Validador = {
            codigoPais: "",
            digitoControl1: "",
            codigoBanco: "",
            codigoSucursal: "",
            digitoControl2: "",
            numeroCuenta: "",
        };
        return validador;
    }
};

const botonValidar = document.getElementById("button");

if (botonValidar && botonValidar instanceof HTMLButtonElement) {
    botonValidar.addEventListener("click", () => {
        console.log("Botón de validar clicado");
        const inputValorIntroducido = document.getElementById('input');

        if (inputValorIntroducido && inputValorIntroducido instanceof HTMLInputElement) {
            const valorIban = inputValorIntroducido.value;

            const esValido = isValidIBAN(valorIban);

            if (esValido) {
                const ibanFragmentado = fragmentarIban(valorIban);

                console.log(devolverNombreDelBanco(ibanFragmentado.codigoBanco))

                alert("El IBAN es válido");
            } else {
                alert("El IBAN no es válido");
            }
        }
    });
}/*/