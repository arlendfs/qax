const { somar, subtrair, multiplicar, dividir } = require('../js/calculadora');

describe('Calculadora', () => {
    test('Deve somar dois números corretamente', () => {
        expect(somar(2, 3)).toBe(5);
    });
    test('Deve subtrair dois números corretamente', () => {
        expect(subtrair(5, 3)).toBe(2);
    });
    test('Deve multiplicar dois números corretamente', () => {
        expect(multiplicar(8, 8)).toBe(64);
    });
    test('Deve dividir dois números corretamente', () => {
        expect(dividir(12, 3)).toBe(4);
    });
});