import { validarExtensionDeFichero } from "./validaciones";

describe('validarExtensionDeFichero', () => {
    test.each([
        ['.txt', true],
        ['.jpg', true],
        ['.png', true],
        ['.csv', true],
        ["", false],
        [".jpg.", false],
        [".csvv", false]
    ]) (
"Debería devolver para la extensión %p el valor %p", (extension : string, expected : boolean) => {
    expect(validarExtensionDeFichero(extension)).toBe(expected);
}
);
});