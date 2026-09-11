export const validarExtensionDeFichero = (value : string) : boolean => {
    const patron = /^\....$/;

    return patron.test(value);
}