const { validarCPF } = require('../js/validadorDeCPF');

describe('validarCPF', () => {
    test('Deve retornar true para um CPF válido', () => {
        expect(validarCPF('123.456.789-09')).toBe(true);
    });
    test('Deve retornar false para um CPF inválido', () => {
        expect(validarCPF('123.456.789-00')).toBe(false);
    });
});
