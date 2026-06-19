export interface PartesDelIban {
    ibanCompleto: string;
    codigoPais: string;
    digitoControl: string;
    codigoBanco: string;
    codigoSucursal: string;
    digitoControlCuenta: string;
    numeroCuenta: string;
    nombreBanco: string;
}

export interface ResultadoValidacion {
    formatoValido: boolean;
    ibanValido: boolean;
    errores: string[];
}