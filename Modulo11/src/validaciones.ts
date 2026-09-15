export const validarExtensionDeFichero = (value : string) : boolean => {
    const patron = /^\....$/;

    return patron.test(value);
};

export const estaBienFormadaLaIP = (value: string): boolean => {
    const patron = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;

    return patron.test(value);
};

export const estaBienFormadoElNIF = (value: string): boolean => {
    const patron = /^\d{2}\.?\d{3}\.?\d{3}\.?\-?\_?\s?[a-zA-Z]$/;


    return patron.test(value);
};

export const validarIban = (value: string) : boolean => {
    const patron = /^[A-Z]{2}\d{2}(\s?|-)\d{4}(\s?|-)\d{4}(\s?|-)\d{2}(\s?|-)\d{10}$/;

    return patron.test(value);
};