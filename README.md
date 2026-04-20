# Calculadora - Atividade Prática com TDD + Jest

## 📋 Sobre o Projeto

Este projeto é uma atividade prática que demonstra a aplicação de **Test-Driven Development (TDD)** utilizando JavaScript e **Jest** como framework de testes. O objetivo é implementar uma calculadora simples com cobertura completa de testes, seguindo os princípios do TDD.

## 🎯 Objetivo da Atividade

- Entender e aplicar os princípios do **Test-Driven Development**
- Implementar testes unitários com **Jest**
- Criar uma calculadora funcional com operações básicas
- Garantir qualidade de código através de testes
- Aprender boas práticas de desenvolvimento com testes

## 🏗️ Estrutura do Projeto

```
Atividade prática/
├── src/
│   ├── js/
│   │   ├── calculadora.js          # Implementação das operações
│   │   ├── validadorDeCPF.js       # Validador de CPF
│   │   └── validadorDeEmail.js     # Validador de Email
│   ├── tests/
│   │   ├── calculadora.test.js     # Testes da calculadora
│   │   ├── cpf.test.js             # Testes do validador de CPF
│   │   └── email.test.js           # Testes do validador de Email
│   └── package.json                # Dependências do projeto
```

## 📦 Pré-requisitos

- **Node.js** (v14 ou superior)
- **npm** (gerenciador de pacotes)

## 🚀 Instalação

1. Navegue até o diretório do projeto:
```bash
cd "Atividade prática/src"
```

2. Instale as dependências:
```bash
npm install
```

## ✅ Executando os Testes

Para rodar os testes:
```bash
npm test
```

Para rodar os testes com cobertura:
```bash
npm test -- --coverage
```

## 📝 Funcionalidades

### Calculadora

A calculadora implementa as seguintes operações básicas:

| Função | Descrição | Exemplo |
|--------|-----------|---------|
| `somar(a, b)` | Realiza a soma de dois números | `somar(2, 3)` → `5` |
| `subtrair(a, b)` | Realiza a subtração de dois números | `subtrair(5, 3)` → `2` |
| `multiplicar(a, b)` | Realiza a multiplicação de dois números | `multiplicar(8, 8)` → `64` |
| `dividir(a, b)` | Realiza a divisão de dois números | `dividir(12, 3)` → `4` |

## 💻 Como Usar

Exemplo de uso da calculadora:

```javascript
const { somar, subtrair, multiplicar, dividir } = require('./js/calculadora');

console.log(somar(10, 5));           // 15
console.log(subtrair(10, 5));        // 5
console.log(multiplicar(10, 5));     // 50
console.log(dividir(10, 5));         // 2
```

## 🧪 Testes Implementados

Os testes cobrem as seguintes operações:

✅ **Soma**: Valida se dois números são somados corretamente  
✅ **Subtração**: Valida se dois números são subtraídos corretamente  
✅ **Multiplicação**: Valida se dois números são multiplicados corretamente  
✅ **Divisão**: Valida se dois números são divididos corretamente  

### Exemplo de Teste

```javascript
const { somar } = require('../js/calculadora');

describe('Calculadora', () => {
    test('Deve somar dois números corretamente', () => {
        expect(somar(2, 3)).toBe(5);
    });
});
```

## 📚 Conceitos TDD Aplicados

### 1. **Red-Green-Refactor**
- 🔴 **Red**: Escrever testes que falham
- 🟢 **Green**: Implementar o mínimo necessário para passar
- 🔵 **Refactor**: Melhorar o código mantendo os testes passando

### 2. **Testes Unitários**
- Cada teste valida uma única funcionalidade
- Testes são independentes e isolados
- Uso de `describe()` para agrupar testes relacionados

### 3. **Assertions com Jest**
- `expect()`: Define a expectativa do teste
- `toBe()`: Compara valores com igualdade estrita

## 📖 Dependências

- **jest**: Framework de testes para JavaScript

```json
"devDependencies": {
    "jest": "^30.3.0"
}
```

## 🔗 Recursos Adicionais

- [Documentação do Jest](https://jestjs.io/pt-BR/)
- [Test-Driven Development](https://pt.wikipedia.org/wiki/Test-driven_development)
- [JavaScript MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

## 📄 Licença

ISC

## Autor
- **Arlen Freitas** - [GitHub](https://github.com/arlendfs)

---

**Desenvolvido como atividade prática de TDD com Jest**
