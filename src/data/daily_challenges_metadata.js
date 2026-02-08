export const dailyChallengesMetadata = {
    pt: {
        js: {
            "Soma Simples": {
                instructions: "Crie uma função chamada 'soma' que receba dois números como parâmetros e retorne a soma deles.",
                initialCode: "function soma(a, b) {\n  // seu código aqui\n}",
                solution: "function soma(a, b) {\n  return a + b;\n}",
                test: "typeof soma === 'function' && soma(2, 3) === 5 && soma(-1, 4) === 3"
            },
            "Hello World Customizado": {
                instructions: "Crie uma função chamada 'ola' que recebe um nome e retorna 'Olá, [nome]!'",
                initialCode: "function ola(nome) {\n  // seu código aqui\n}",
                solution: "function ola(nome) {\n  return `Olá, ${nome}!`;\n}",
                test: "typeof ola === 'function' && ola('Next') === 'Olá, Next!'"
            }
        },
        py: {
            "Soma Simples": {
                instructions: "Crie uma função chamada 'soma' que receba dois números e retorne a soma.",
                initialCode: "def soma(a, b):\n    # seu código aqui\n    pass",
                solution: "def soma(a, b):\n    return a + b",
                test: "callable(soma) and soma(2, 3) == 5"
            }
        }
    },
    en: {
        js: {
            "Simple Sum": {
                instructions: "Create a function named 'sum' that receives two numbers as parameters and returns their sum.",
                initialCode: "function sum(a, b) {\n  // your code here\n}",
                solution: "function sum(a, b) {\n  return a + b;\n}",
                test: "typeof sum === 'function' && sum(2, 3) === 5 && sum(-1, 4) === 3"
            },
            "Customized Hello World": {
                instructions: "Create a function named 'hello' that receives a name and returns 'Hello, [name]!'",
                initialCode: "function hello(name) {\n  // your code here\n}",
                solution: "function hello(name) {\n  return `Hello, ${name}!`;\n}",
                test: "typeof hello === 'function' && hello('Next') === 'Hello, Next!'"
            }
        },
        py: {
            "Simple Sum": {
                instructions: "Create a function named 'sum' that receives two numbers and returns the sum.",
                initialCode: "def sum(a, b):\n    # your code here\n    pass",
                solution: "def sum(a, b):\n    return a + b",
                test: "callable(sum) and sum(2, 3) == 5"
            }
        }
    }
};
