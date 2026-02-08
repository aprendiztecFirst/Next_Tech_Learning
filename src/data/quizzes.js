export const quizzes = {
    pt: {
        js: {
            "js-ch1": [
                {
                    id: "js-q1",
                    type: "code-selection",
                    question: "Encontre a linha que NÃO será executada (está comentada)",
                    code: "1  let name = \"Alice\"\n2  // let age = 25\n3  console.log(name)\n4  let city = \"Paris\"",
                    answer: "2"
                },
                {
                    id: "js-q2",
                    type: "boolean",
                    question: "O código a seguir imprimirá \"Hello\" na tela em JavaScript?\n\n// console.log(\"Hello\")",
                    options: ["Verdadeiro", "Falso também"],
                    answer: 1,
                    explanation: "O código está comentado com '//', portanto o comando `console.log` não é executado e nada é impresso."
                },
                {
                    id: "js-q3",
                    type: "multiple-choice",
                    question: "Qual é o propósito de um comentário TODO?",
                    options: [
                        "Para importar bibliotecas externas",
                        "Para definir uma nova variável",
                        "Para fazer o código executar mais rápido",
                        "Para marcar tarefas que precisam ser concluídas posteriormente"
                    ],
                    answer: 3
                },
                {
                    id: "js-q4",
                    type: "fill-in-the-gaps",
                    question: "Complete a sintaxe de comentário multi-linha em JavaScript",
                    code: "1  __\n2  Isso explica o programa.\n3  Ele se estende por múltiplas linhas.\n4  __\n5  console.log(\"Start\")",
                    gaps: [
                        { label: "Lacuna #1", options: ["#", "/*", "\"\"\""], answer: 1 },
                        { label: "Lacuna #2", options: ["*/", "#", "\"\"\""], answer: 0 }
                    ],
                    explanation: "Comentários multi-linha (bloco) em JavaScript começam com '/*' e terminam com '*/'."
                },
                {
                    id: "js-q5",
                    type: "multiple-choice",
                    question: "Qual corretamente cria um comentário de uma linha em JavaScript?",
                    options: [
                        "-- Comentário",
                        "/* Comentário */",
                        "# Comentário",
                        "// Comentário"
                    ],
                    answer: 3,
                    explanation: "O operador '//' é o padrão para comentários de linha única em JavaScript. As outras opções são usadas em outras linguagens (como Python ou HTML)."
                },
                {
                    id: "js-q6",
                    type: "multiple-choice",
                    question: "Como você escreve 'Hello World' em um alerta?",
                    options: ["alertBox('Hello World')", "msg('Hello World')", "alert('Hello World')", "console.log('Hello World')"],
                    answer: 2,
                    explanation: "A função `alert()` é um método do objeto window que exibe uma caixa de diálogo com uma mensagem e um botão OK."
                },
                {
                    id: "js-q7",
                    type: "multiple-choice",
                    question: "Qual símbolo é usado para comentários de bloco em JS?",
                    options: ["//", "#", "/* */", "<!-- -->"],
                    answer: 2,
                    explanation: "Comentários de bloco em JavaScript começam com '/*' e terminam com '*/', permitindo comentar várias linhas de uma vez."
                },
                {
                    id: "js-q8",
                    type: "boolean",
                    question: "JavaScript é a mesma coisa que Java?",
                    options: ["Verdadeiro", "Falso"],
                    answer: 1
                },
                {
                    id: "js-q9",
                    type: "multiple-choice",
                    question: "Onde é o lugar correto para inserir o JavaScript no HTML?",
                    options: ["<head>", "<body>", "Tanto <head> quanto <body>", "<footer>"],
                    answer: 2
                },
                {
                    id: "js-q10",
                    type: "fill-in-the-gaps",
                    question: "Complete o comando para exibir algo no console",
                    code: "____.log(\"Olá\")",
                    gaps: [
                        { label: "Lacuna", options: ["window", "console", "document"], answer: 1 }
                    ],
                    explanation: "O objeto `console` fornece acesso ao console de depuração do navegador, e o método `.log()` é usado para imprimir mensagens nele."
                },
            ],
            "js-ch2": [
                {
                    id: "js-ch2-q1",
                    type: "multiple-choice",
                    question: "Qual palavra-chave é usada para declarar uma variável que pode ser alterada?",
                    options: ["const", "let", "fixed", "static"],
                    answer: 1
                },
                {
                    id: "js-ch2-q2",
                    type: "multiple-choice",
                    question: "Qual o valor de x? const x = 5 + '5'",
                    options: ["10", "55", "undefined", "Erro"],
                    answer: 1
                },
                {
                    id: "js-ch2-q3",
                    type: "boolean",
                    question: "A variável 'const' pode ter seu valor reatribuído?",
                    options: ["Verdadeiro", "Falso"],
                    answer: 1
                }
            ]
        },
        py: {
            "py-ch1": [
                {
                    id: "py-q1",
                    type: "code-selection",
                    question: "Encontre a linha que NÃO será executada (está comentada)",
                    code: "1  name = \"Alice\"\n2  # age = 25\n3  print(name)\n4  city = \"Paris\"",
                    answer: "2"
                },
                {
                    id: "py-q2",
                    type: "boolean",
                    question: "O código a seguir imprimirá \"Hello\" na tela em Python?\n\n# print(\"Hello\")",
                    options: ["Verdadeiro", "Falso também"],
                    answer: 1,
                    explanation: "The code is preceded by '#', making it a comment. Thus, the print function is never called."
                },
                {
                    id: "py-q3",
                    type: "multiple-choice",
                    question: "Qual é o propósito de um comentário TODO?",
                    options: [
                        "Para importar bibliotecas externas",
                        "Para definir uma nova variável",
                        "Para fazer o código executar mais rápido",
                        "Para marcar tarefas que precisam ser concluídas posteriormente"
                    ],
                    answer: 3
                },
                {
                    id: "py-q4",
                    type: "fill-in-the-gaps",
                    question: "Complete a sintaxe de comentário multi-linha em Python",
                    code: "1  __\n2  Isso explica o programa.\n3  Ele se estende por múltiplas linhas.\n4  __\n5  print(\"Start\")",
                    gaps: [
                        { label: "Lacuna #1", options: ["#", "/*", "\"\"\""], answer: 2 },
                        { label: "Lacuna #2", options: ["*/", "#", "\"\"\""], answer: 2 }
                    ],
                    explanation: "Python uses triple quotes (\"\"\" or ''') to create multi-line strings, which are often used as multi-line comments."
                },
                {
                    id: "py-q5",
                    type: "multiple-choice",
                    question: "Qual corretamente cria um comentário de uma linha em Python?",
                    options: [
                        "-- Comentário",
                        "/* Comentário */",
                        "# Comentário",
                        "// Comentário"
                    ],
                    answer: 2
                },
                {
                    id: "py-q6",
                    type: "multiple-choice",
                    question: "Como você exibe texto no console em Python?",
                    options: ["console.log()", "echo()", "print()", "printf()"],
                    answer: 2
                },
                {
                    id: "py-q7",
                    type: "multiple-choice",
                    question: "Qual a extensão de um arquivo Python?",
                    options: [".pt", ".py", ".pyt", ".python"],
                    answer: 1
                },
                {
                    id: "py-q8",
                    type: "boolean",
                    question: "Python usa identação para definir blocos de código?",
                    options: ["Verdadeiro", "Falso"],
                    answer: 0
                },
                {
                    id: "py-q9",
                    type: "multiple-choice",
                    question: "Qual destas NÃO é uma palavra-chave em Python?",
                    options: ["if", "then", "while", "else"],
                    answer: 1
                },
                {
                    id: "py-q10",
                    type: "fill-in-the-gaps",
                    question: "Complete o comando para exibir 'Oi'",
                    code: "____('Oi')",
                    gaps: [
                        { label: "Lacuna", options: ["show", "print", "display"], answer: 1 }
                    ]
                }
            ],
            "py-ch2": [
                {
                    id: "py-ch2-q1",
                    type: "multiple-choice",
                    question: "Como você cria uma variável com o valor numérico 5?",
                    options: ["x = int(5)", "x = 5", "both of above", "x : 5"],
                    answer: 2
                },
                {
                    id: "py-ch2-q2",
                    type: "multiple-choice",
                    question: "Qual o tipo de dado de x = 2.8?",
                    options: ["int", "float", "complex", "number"],
                    answer: 1
                },
                {
                    id: "py-ch2-q3",
                    type: "boolean",
                    question: "Strings em Python podem ser delimitadas por aspas simples ou duplas?",
                    options: ["Verdadeiro", "Falso"],
                    answer: 0
                }
            ]
        }
    },
    en: {
        js: {
            "js-ch1": [
                {
                    id: "js-q1",
                    type: "code-selection",
                    question: "Find the line that will NOT be executed (it is commented)",
                    code: "1  let name = \"Alice\"\n2  // let age = 25\n3  console.log(name)\n4  let city = \"Paris\"",
                    answer: "2"
                },
                {
                    id: "js-q2",
                    type: "boolean",
                    question: "Will the following code print \"Hello\" on the screen in JavaScript?\n\n// console.log(\"Hello\")",
                    options: ["True", "False too"],
                    answer: 1
                },
                {
                    id: "js-q3",
                    type: "multiple-choice",
                    question: "What is the purpose of a TODO comment?",
                    options: [
                        "To import external libraries",
                        "To define a new variable",
                        "To make the code run faster",
                        "To mark tasks that need to be completed later"
                    ],
                    answer: 3
                },
                {
                    id: "js-q4",
                    type: "fill-in-the-gaps",
                    question: "Complete the multi-line comment syntax in JavaScript",
                    code: "1  __\n2  This explains the program.\n3  It extends over multiple lines.\n4  __\n5  console.log(\"Start\")",
                    gaps: [
                        { label: "Gap #1", options: ["#", "/*", "\"\"\""], answer: 1 },
                        { label: "Gap #2", options: ["*/", "#", "\"\"\""], answer: 0 }
                    ]
                },
                {
                    id: "js-q5",
                    type: "multiple-choice",
                    question: "Which correctly creates a one-line comment in JavaScript?",
                    options: [
                        "-- Comment",
                        "/* Comment */",
                        "# Comment",
                        "// Comment"
                    ],
                    answer: 3
                },
                {
                    id: "js-q6",
                    type: "multiple-choice",
                    question: "How do you write 'Hello World' in an alert?",
                    options: ["alertBox('Hello World')", "msg('Hello World')", "alert('Hello World')", "console.log('Hello World')"],
                    answer: 2
                },
                {
                    id: "js-q7",
                    type: "multiple-choice",
                    question: "Which symbol is used for block comments in JS?",
                    options: ["//", "#", "/* */", "<!-- -->"],
                    answer: 2
                },
                {
                    id: "js-q8",
                    type: "boolean",
                    question: "Is JavaScript the same as Java?",
                    options: ["True", "False"],
                    answer: 1
                },
                {
                    id: "js-q9",
                    type: "multiple-choice",
                    question: "Where is the correct place to insert JavaScript in HTML?",
                    options: ["<head>", "<body>", "Both <head> and <body>", "<footer>"],
                    answer: 2
                },
                {
                    id: "js-q10",
                    type: "fill-in-the-gaps",
                    question: "Complete the command to display something in the console",
                    code: "____.log(\"Hello\")",
                    gaps: [
                        { label: "Gap", options: ["window", "console", "document"], answer: 1 }
                    ]
                }
            ],
            "js-ch2": [
                {
                    id: "js-ch2-q1",
                    type: "multiple-choice",
                    question: "Which keyword is used to declare a variable that can be changed?",
                    options: ["const", "let", "fixed", "static"],
                    answer: 1
                },
                {
                    id: "js-ch2-q2",
                    type: "multiple-choice",
                    question: "What is the value of x? const x = 5 + '5'",
                    options: ["10", "55", "undefined", "Error"],
                    answer: 1
                },
                {
                    id: "js-ch2-q3",
                    type: "boolean",
                    question: "Can 'const' variable have its value reassigned?",
                    options: ["True", "False"],
                    answer: 1
                }
            ]
        },
        py: {
            "py-ch1": [
                {
                    id: "py-q1",
                    type: "code-selection",
                    question: "Find the line that will NOT be executed (it is commented)",
                    code: "1  name = \"Alice\"\n2  # age = 25\n3  print(name)\n4  city = \"Paris\"",
                    answer: "2"
                },
                {
                    id: "py-q2",
                    type: "boolean",
                    question: "Will the following code print \"Hello\" on the screen in Python?\n\n# print(\"Hello\")",
                    options: ["True", "False too"],
                    answer: 1
                },
                {
                    id: "py-q3",
                    type: "multiple-choice",
                    question: "What is the purpose of a TODO comment?",
                    options: [
                        "To import external libraries",
                        "To define a new variable",
                        "To make the code run faster",
                        "To mark tasks that need to be completed later"
                    ],
                    answer: 3
                },
                {
                    id: "py-q4",
                    type: "fill-in-the-gaps",
                    question: "Complete the multi-line comment syntax in Python",
                    code: "1  __\n2  This explains the program.\n3  It extends over multiple lines.\n4  __\n5  print(\"Start\")",
                    gaps: [
                        { label: "Gap #1", options: ["#", "/*", "\"\"\""], answer: 2 },
                        { label: "Gap #2", options: ["*/", "#", "\"\"\""], answer: 2 }
                    ]
                },
                {
                    id: "py-q5",
                    type: "multiple-choice",
                    question: "Which correctly creates a one-line comment in Python?",
                    options: [
                        "-- Comment",
                        "/* Comment */",
                        "# Comment",
                        "// Comment"
                    ],
                    answer: 2
                },
                {
                    id: "py-q6",
                    type: "multiple-choice",
                    question: "How do you display text in the console in Python?",
                    options: ["console.log()", "echo()", "print()", "printf()"],
                    answer: 2
                },
                {
                    id: "py-q7",
                    type: "multiple-choice",
                    question: "What is the extension of a Python file?",
                    options: [".pt", ".py", ".pyt", ".python"],
                    answer: 1
                },
                {
                    id: "py-q8",
                    type: "boolean",
                    question: "Does Python use indentation to define code blocks?",
                    options: ["True", "False"],
                    answer: 0
                },
                {
                    id: "py-q9",
                    type: "multiple-choice",
                    question: "Which of these is NOT a keyword in Python?",
                    options: ["if", "then", "while", "else"],
                    answer: 1
                },
                {
                    id: "py-q10",
                    type: "fill-in-the-gaps",
                    question: "Complete the command to display 'Hi'",
                    code: "____('Hi')",
                    gaps: [
                        { label: "Gap", options: ["show", "print", "display"], answer: 1 }
                    ]
                }
            ],
            "py-ch2": [
                {
                    id: "py-ch2-q1",
                    type: "multiple-choice",
                    question: "How do you create a variable with the numeric value 5?",
                    options: ["x = int(5)", "x = 5", "both of above", "x : 5"],
                    answer: 2
                },
                {
                    id: "py-ch2-q2",
                    type: "multiple-choice",
                    question: "What is the data type of x = 2.8?",
                    options: ["int", "float", "complex", "number"],
                    answer: 1
                },
                {
                    id: "py-ch2-q3",
                    type: "boolean",
                    question: "Can strings in Python be delimited by single or double quotes?",
                    options: ["True", "False"],
                    answer: 0
                }
            ]
        }
    }
};
