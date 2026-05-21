import { estaBienFormadaLaIp, estaBienFormadoNIF } from "./main";

describe("estaBienFormadoNIF", () => {
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
expect(estaBienFormadoNIF(valor)).toBe(expected);
}
);
});



describe("estaBienFormadaLaIp", () => {
    test.each([
        ["127.0.0.1", true],
        ["A.0.0.1", false],
        ["0.0.0.0", true],
        ["-1,-1.0.0", false],
        ["10.98.199.1", true],
        ["10.98.199", false],
        ["10.98.199.1.2", false],
    ]) ("deberia devolver para la IP %s el valor %s",
        (valor: string, expected: boolean) =>{
            expect(estaBienFormadaLaIp(valor)).toBe(expected);
        }
    );
});