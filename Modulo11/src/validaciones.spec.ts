import { validarExtensionDeFichero, estaBienFormadaLaIP,estaBienFormadoElNIF, validarIban } from "./validaciones";

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

describe("estaBienFormadaLaIP", () => {
 test.each([
 ["127.0.0.1", true],
 ["A.0.0.1", false],
 ["0.0.0.0", true],
 ["-1.-1.0.0", false],
 ["10.98.199.1", true],
 ["10.98.199", false],
 ["10.98.199.1.2", false],
 ])(
 "Deberia devolver para la IP %s el valor %s",
 (valor: string, expected: boolean) => {
 expect(estaBienFormadaLaIP(valor)).toBe(expected);
 }
 );
});



describe("estaBienFormadoElNIF", () => {
 test.each([
 ["12345678Q", true],
 ["12345678-Q", true],
 ["12345678 Q", true],
 ["12345678_Q", true],
 ["12.345.678 Q", true],
 ["12345678Q", true],
 ["12345678-Q", true],
 ["12345678 Q", true],
 ["12345678_Q", true],
 ["12345678 q", true],
 ["12.345.678 Q", true],
 ])(
 "Deberia devolver para el NIF %s el valor %s",
 (valor: string, expected: boolean) => {
 expect(estaBienFormadoElNIF(valor)).toBe(expected);
 }
 );
});


describe("validarIban", () => {
 test.each([
 ["ES21 1465 0100 72 2030876293", true],
 ["ES2114650100722030876293", true],
 ["ES21-1465-0100-72-2030876293", true],
 ["ES6621000418401234567891", true],
 ["6621000418401234567891", false],
 ["1234567890", false],
 ["ABCDEFG", false],
 ["ES21_1465_0100_72_2030876293", false]
 ])(
 "Deberia devolver para el NIF %s el valor %s",
 (valor: string, expected: boolean) => {
 expect(validarIban(valor)).toBe(expected);
 }
 );
});