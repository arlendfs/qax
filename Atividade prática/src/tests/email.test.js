const { validarEmail } = require('../js/validadorDeEmail');

describe('validarEmail', () => {
    test('Deve retornar true para um email válido', () => {
        expect(validarEmail('teste@email.com')).toBe(true);
    });

    test('Deve retornar false para um email inválido', () => {
        expect(validarEmail('testeemail.com')).toBe(false);
    });
});