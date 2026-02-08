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
                    answer: 1,
                    explanation: "`let` é a forma moderna e segura de declarar variáveis mutáveis no JavaScript."
                },
                {
                    id: "js-ch2-q2",
                    type: "multiple-choice",
                    question: "Qual o valor de x? const x = 5 + '5'",
                    options: ["10", "55", "undefined", "Erro"],
                    answer: 1,
                    explanation: "Quando você soma um número com uma string, o JavaScript converte o número para string e os concatena."
                },
                {
                    id: "js-ch2-q3",
                    type: "boolean",
                    question: "A variável 'const' pode ter seu valor reatribuído?",
                    options: ["Verdadeiro", "Falso"],
                    answer: 1,
                    explanation: "Variáveis `const` são constantes e não permitem reatribuição após o valor inicial."
                },
                {
                    id: "js-ch2-q4",
                    type: "multiple-choice",
                    question: "Qual o resultado de: typeof true?",
                    options: ["string", "number", "boolean", "undefined"],
                    answer: 2,
                    explanation: "`true` e `false` pertencem ao tipo primitivo boolean."
                },
                {
                    id: "js-ch2-q5",
                    type: "multiple-choice",
                    question: "Qual destes NÃO é um tipo primitivo?",
                    options: ["String", "Boolean", "Object", "Number"],
                    answer: 2,
                    explanation: "Object é um tipo estrutural, não primitivo. Tipos primitivos incluem String, Number, Boolean, Null, Undefined, Symbol e BigInt."
                },
                {
                    id: "js-ch2-q6",
                    type: "multiple-choice",
                    question: "Qual o valor padrão de uma variável declarada sem atribuição?",
                    options: ["null", "undefined", "0", "NaN"],
                    answer: 1,
                    explanation: "No JavaScript, se você declara `let x;`, o valor inicial é definido como `undefined`."
                },
                {
                    id: "js-ch2-q7",
                    type: "multiple-choice",
                    question: "Qual símbolo define uma Template Literal?",
                    options: ["' '", "\" \"", "` `", "| |"],
                    answer: 2,
                    explanation: "Usamos crases (backticks) para criar templates que aceitam variáveis dentro de `${}`."
                },
                {
                    id: "js-ch2-q8",
                    type: "multiple-choice",
                    question: "Qual o tipo de: const y = Symbol('id')?",
                    options: ["string", "object", "symbol", "id"],
                    answer: 2,
                    explanation: "Symbol é um tipo primitivo introduzido no ES6 para criar identificadores únicos."
                },
                {
                    id: "js-ch2-q9",
                    type: "boolean",
                    question: "JavaScript diferencia letras maiúsculas de minúsculas (case-sensitive)?",
                    options: ["Verdadeiro", "Falso"],
                    answer: 0,
                    explanation: "Sim, `minhaVariavel` e `minhavariavel` são consideradas variáveis diferentes."
                },
                {
                    id: "js-ch2-q10",
                    type: "multiple-choice",
                    question: "Qual destes nomes de variável é VÁLIDO?",
                    options: ["2nome", "const", "nome_completo", "nome-completo"],
                    answer: 2,
                    explanation: "Nomes de variáveis podem conter letras, números, _ ou $, mas não podem começar com números nem usar hífens ou palavras reservadas."
                }
            ],
            "js-ch3": [
                {
                    id: "js-ch3-q1",
                    type: "multiple-choice",
                    question: "Como você escreve uma estrutura IF em JavaScript?",
                    options: ["if i = 5 then", "if (i == 5)", "if i == 5", "if i = 5"],
                    answer: 1,
                    explanation: "Em JavaScript, a condição do `if` deve estar obrigatoriamente entre parênteses."
                },
                {
                    id: "js-ch3-q2",
                    type: "multiple-choice",
                    question: "Como escrever uma estrutura IF para executar código se 'i' NÃO for igual a 5?",
                    options: ["if i <> 5", "if (i != 5)", "if i =! 5 then", "if (i <> 5)"],
                    answer: 1,
                    explanation: "O operador lógico de 'não igual' é o `!=`."
                },
                {
                    id: "js-ch3-q3",
                    type: "boolean",
                    question: "O comando 'else' pode ser usado sem um 'if' anterior?",
                    options: ["Verdadeiro", "Falso"],
                    answer: 1,
                    explanation: "O `else` define o caminho alternativo de um `if`, não fazendo sentido sozinho."
                },
                {
                    id: "js-ch3-q4",
                    type: "multiple-choice",
                    question: "Qual operador lógico representa o 'E' (AND)?",
                    options: ["&", "&&", "and", "||"],
                    answer: 1,
                    explanation: "Usamos `&&` para verificar se duas ou mais condições são verdadeiras simultaneamente."
                },
                {
                    id: "js-ch3-q5",
                    type: "multiple-choice",
                    question: "Qual operador representa o 'OU' (OR)?",
                    options: ["|", "or", "||", "&&"],
                    answer: 2,
                    explanation: "O operador `||` retorna verdadeiro se pelo menos uma das condições for verdadeira."
                },
                {
                    id: "js-ch3-q6",
                    type: "multiple-choice",
                    question: "Qual a sintaxe correta do operador ternário?",
                    options: ["condicao ? valor1 : valor2", "condicao : valor1 ? valor2", "if condicao then valor1 else valor2", "condicao ? valor1 | valor2"],
                    answer: 0,
                    explanation: "O operador ternário é um atalho para `if/else`: `teste ? se_verdade : se_falso`."
                },
                {
                    id: "js-ch3-q7",
                    type: "multiple-choice",
                    question: "Qual a diferença entre '==' e '==='?",
                    options: ["Nenhuma", "== compara valor e tipo, === apenas valor", "== compara apenas valor, === compara valor e tipo", "== é para números, === para strings"],
                    answer: 2,
                    explanation: "O operador `===` (estritamente igual) é mais seguro pois evita conversões automáticas de tipo."
                },
                {
                    id: "js-ch3-q8",
                    type: "multiple-choice",
                    question: "Qual palavra-chave encerra a execução de um bloco 'switch'?",
                    options: ["stop", "exit", "break", "end"],
                    answer: 2,
                    explanation: "Sem o `break`, o switch continuaria executando todos os casos seguintes (fall-through)."
                },
                {
                    id: "js-ch3-q9",
                    type: "multiple-choice",
                    question: "Qual valor é considerado 'falsy' em JavaScript?",
                    options: ["'false' (string)", "[] (array vazio)", "0 (zero)", "{} (objeto vazio)"],
                    answer: 2,
                    explanation: "Valores como `0`, `\"\"`, `null`, `undefined`, `NaN` e `false` são convertidos para falso em contextos booleanos."
                },
                {
                    id: "js-ch3-q10",
                    type: "multiple-choice",
                    question: "Como você escreve um comentário de UMA linha para explicar seu código?",
                    options: ["/* Comentário */", "// Comentário", "# Comentário", "<!-- Comentário -->"],
                    answer: 1,
                    explanation: "Comentários de linha única começam com `//`."
                }
            ],
            "js-ch4": [
                {
                    id: "js-ch4-q1",
                    type: "multiple-choice",
                    question: "Como você cria uma função em JavaScript?",
                    options: ["function myFunction()", "function:myFunction()", "function = myFunction()", "create function()"],
                    answer: 0,
                    explanation: "A sintaxe padrão é a palavra-chave `function` seguida pelo nome e parênteses."
                },
                {
                    id: "js-ch4-q2",
                    type: "multiple-choice",
                    question: "Como você chama uma função chamada 'myFunction'?",
                    options: ["call myFunction()", "myFunction()", "call function myFunction()", "execute myFunction()"],
                    answer: 1,
                    explanation: "Para executar uma função, basta usar o nome dela seguido de parênteses."
                },
                {
                    id: "js-ch4-q3",
                    type: "multiple-choice",
                    question: "Qual a sintaxe correta de uma Arrow Function?",
                    options: ["const f = function() => {}", "const f = () => {}", "const f = => {}", "const f = () -> {}"],
                    answer: 1,
                    explanation: "Arrow functions usam a seta `=>` e são uma forma concisa de escrever funções."
                },
                {
                    id: "js-ch4-q4",
                    type: "multiple-choice",
                    question: "O que acontece se uma função não tiver um comando 'return'?",
                    options: ["Ela retorna 0", "Ela retorna null", "Ela retorna undefined", "Ela gera um erro"],
                    answer: 2,
                    explanation: "Por padrão, funções que não especificam um retorno devolvem `undefined`."
                },
                {
                    id: "js-ch4-q5",
                    type: "multiple-choice",
                    question: "Os valores passados para uma função na sua CHAMADA são chamados de:",
                    options: ["Parâmetros", "Argumentos", "Variáveis", "Atributos"],
                    answer: 1,
                    explanation: "Chamamos de parâmetros os nomes na definição da função, e argumentos os valores reais passados na chamada."
                },
                {
                    id: "js-ch4-q6",
                    type: "multiple-choice",
                    question: "Como definir um valor padrão (default) para um parâmetro 'x'?",
                    options: ["function f(x = 10) {}", "function f(x : 10) {}", "function f(x == 10) {}", "function f(default x = 10) {}"],
                    answer: 0,
                    explanation: "No ES6+, podemos atribuir valores padrão diretamente nos parênteses da definição."
                },
                {
                    id: "js-ch4-q7",
                    type: "boolean",
                    question: "Uma função pode ser passada como argumento para outra função?",
                    options: ["Verdadeiro", "Falso"],
                    answer: 0,
                    explanation: "Sim, essas são chamadas de 'Callback Functions'. No JS, funções são cidadãos de primeira classe."
                },
                {
                    id: "js-ch4-q8",
                    type: "multiple-choice",
                    question: "Qual o nome de uma função que não possui nome?",
                    options: ["Função fantasma", "Função secreta", "Função anônima", "Função vazia"],
                    answer: 2,
                    explanation: "Funções anônimas são comuns em callbacks e expressões de função."
                },
                {
                    id: "js-ch4-q9",
                    type: "multiple-choice",
                    question: "Variáveis declaradas DENTRO de uma função:",
                    options: ["São globais", "São locais à função", "Podem ser acessadas em qualquer lugar", "Limpam o computador"],
                    answer: 1,
                    explanation: "Isso é chamado de escopo de função: elas só existem enquanto a função executa."
                },
                {
                    id: "js-ch4-q10",
                    type: "multiple-choice",
                    question: "O que é 'Hoisting' em relação a funções?",
                    options: ["É deletar a função", "É permitir chamar a função antes dela ser declarada no código", "É esconder a função", "É mudar o tipo da função"],
                    answer: 1,
                    explanation: "Declarações de função (não expressões) são 'içadas' para o topo do seu escopo pelo motor JS."
                }
            ],
            "js-ch5": [
                {
                    id: "js-ch5-q1",
                    type: "multiple-choice",
                    question: "Qual a forma correta de criar um Array em JavaScript?",
                    options: ["const colors = 'red', 'green', 'blue'", "const colors = (1:'red', 2:'green', 3:'blue')", "const colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "const colors = ['red', 'green', 'blue']"],
                    answer: 3,
                    explanation: "Arrays em JavaScript são definidos usando colchetes `[]`."
                },
                {
                    id: "js-ch5-q2",
                    type: "multiple-choice",
                    question: "Como você acessa o primeiro elemento de um array chamado 'cars'?",
                    options: ["cars[1]", "cars(0)", "cars[0]", "cars.first"],
                    answer: 2,
                    explanation: "Arrays em JavaScript têm indexação baseada em zero, então o primeiro elemento é o índice 0."
                },
                {
                    id: "js-ch5-q3",
                    type: "multiple-choice",
                    question: "Como você descobre o número de elementos em um array?",
                    options: ["list.count()", "list.size", "list.length", "list.index"],
                    answer: 2,
                    explanation: "A propriedade `.length` retorna a quantidade total de itens em um array."
                },
                {
                    id: "js-ch5-q4",
                    type: "multiple-choice",
                    question: "Qual método adiciona um novo elemento ao FINAL de um array?",
                    options: ["push()", "pop()", "unshift()", "shift()"],
                    answer: 0,
                    explanation: "O método `push()` insere um ou mais elementos no fim do array."
                },
                {
                    id: "js-ch5-q5",
                    type: "multiple-choice",
                    question: "Qual método remove o ÚLTIMO elemento de um array?",
                    options: ["push()", "pop()", "unshift()", "shift()"],
                    answer: 1,
                    explanation: "O método `pop()` remove o elemento final e o retorna."
                },
                {
                    id: "js-ch5-q6",
                    type: "multiple-choice",
                    question: "Dada a variável 'person', como acessamos a propriedade 'name'?",
                    options: ["person.name", "person['name']", "Ambas as opções", "person->name"],
                    answer: 2,
                    explanation: "Podemos usar tanto a notação de ponto quanto a de colchetes (útil quando o nome da propriedade é dinâmico)."
                },
                {
                    id: "js-ch5-q7",
                    type: "multiple-choice",
                    question: "Como você cria um objeto vazio?",
                    options: ["const obj = []", "const obj = {}", "const obj = ()", "const obj = empty"],
                    answer: 1,
                    explanation: "Objetos literais são criados usando chaves `{}`."
                },
                {
                    id: "js-ch5-q8",
                    type: "multiple-choice",
                    question: "Qual operador é usado para desestruturar um array (Spread Operator)?",
                    options: ["...", "::", ">>>", "&&&"],
                    answer: 0,
                    explanation: "O operador de espalhamento `...` permite expandir elementos de um array ou objeto."
                },
                {
                    id: "js-ch5-q9",
                    type: "multiple-choice",
                    question: "Como declarar um objeto com propriedades?",
                    options: ["{ name = 'Ana' }", "{ 'name' ; 'Ana' }", "{ name: 'Ana' }", "{ name -> 'Ana' }"],
                    answer: 2,
                    explanation: "Em objetos, usamos o formato `chave: valor` separado por vírgulas."
                },
                {
                    id: "js-ch5-q10",
                    type: "multiple-choice",
                    question: "Qual método de iteração não retorna nada (apenas executa uma função)?",
                    options: ["map()", "filter()", "forEach()", "reduce()"],
                    answer: 2,
                    explanation: "`forEach()` é focado apenas em iterar, enquanto `map()` cria um novo array."
                }
            ],
            "js-ch6": [
                {
                    id: "js-ch6-q1",
                    type: "multiple-choice",
                    question: "Qual método exibe uma caixa de diálogo com uma mensagem que solicita a entrada do usuário?",
                    options: ["alert()", "confirm()", "prompt()", "input()"],
                    answer: 2,
                    explanation: "O método `prompt()` é usado para receber uma entrada de texto do usuário via navegador."
                },
                {
                    id: "js-ch6-q2",
                    type: "multiple-choice",
                    question: "Qual função exibe uma mensagem simples de aviso ao usuário?",
                    options: ["warn()", "alert()", "msg()", "show()"],
                    answer: 1,
                    explanation: "`alert()` trava a execução do script até que o usuário clique em OK."
                },
                {
                    id: "js-ch6-q3",
                    type: "multiple-choice",
                    question: "Como pedir uma confirmação (OK ou Cancelar) ao usuário?",
                    options: ["confirm()", "prompt()", "check()", "ask()"],
                    answer: 0,
                    explanation: "`confirm()` retorna `true` se clicar em OK e `false` se clicar em Cancelar."
                },
                {
                    id: "js-ch6-q4",
                    type: "multiple-choice",
                    question: "Ao receber um número via prompt(), ele vem como string. Como converter para número real?",
                    options: ["Number(valor)", "toInt(valor)", "parse(valor)", "valor.toNumber()"],
                    answer: 0,
                    explanation: "O construtor `Number()` ou `parseInt()` são usados para converter strings em números."
                },
                {
                    id: "js-ch6-q5",
                    type: "multiple-choice",
                    question: "Onde as mensagens de 'console.log()' são exibidas?",
                    options: ["Na tela do usuário", "Nas ferramentas do desenvolvedor (Console)", "No código fonte", "No servidor"],
                    answer: 1,
                    explanation: "O terminal do navegador (F12) é o local padrão para logs de depuração."
                },
                {
                    id: "js-ch6-q6",
                    type: "multiple-choice",
                    question: "Qual método escreve DIRETAMENTE no documento HTML (não recomendado hoje)?",
                    options: ["document.print()", "document.write()", "document.show()", "document.add()"],
                    answer: 1,
                    explanation: "`document.write()` pode sobrescrever todo o conteúdo se usado após a página carregar."
                },
                {
                    id: "js-ch6-q7",
                    type: "multiple-choice",
                    question: "Como evitar que um formulário recarregue a página ao ser enviado?",
                    options: ["event.stop()", "event.preventDefault()", "form.pause()", "window.freeze()"],
                    answer: 1,
                    explanation: "`preventDefault()` cancela o comportamento padrão do evento, como o reload no submit."
                },
                {
                    id: "js-ch6-q8",
                    type: "multiple-choice",
                    question: "Qual propriedade de um input de texto contém o que o usuário digitou?",
                    options: ["text", "content", "value", "data"],
                    answer: 2,
                    explanation: "A propriedade `.value` acessa o conteúdo atual de campos de formulário."
                },
                {
                    id: "js-ch6-q9",
                    type: "multiple-choice",
                    question: "Como você redireciona o usuário para outra página via JS?",
                    options: ["window.go('url')", "window.location.href = 'url'", "document.redirect('url')", "browser.open('url')"],
                    answer: 1,
                    explanation: "Alterar `window.location.href` dispara a navegação para uma nova URL."
                },
                {
                    id: "js-ch6-q10",
                    type: "boolean",
                    question: "O método alert() permite que o usuário digite texto?",
                    options: ["Verdadeiro", "Falso"],
                    answer: 1,
                    explanation: "Apenas o `prompt()` permite entrada de texto. O `alert()` apenas exibe informação."
                }
            ],
            "js-ch7": [
                {
                    id: "js-ch7-q1",
                    type: "multiple-choice",
                    question: "Qual método você usaria para selecionar um elemento HTML pelo seu ID?",
                    options: ["document.querySelector('.id')", "document.getElementById()", "document.getElementsById()", "window.getId()"],
                    answer: 1,
                    explanation: "`document.getElementById()` é o método mais direto para selecionar um único elemento pelo atributo ID."
                },
                {
                    id: "js-ch7-q2",
                    type: "multiple-choice",
                    question: "Como selecionar o primeiro elemento que possui a classe 'btn'?",
                    options: ["document.select('.btn')", "document.querySelector('.btn')", "document.getElementByClass('btn')", "document.find('.btn')"],
                    answer: 1,
                    explanation: "`querySelector` usa seletores CSS para encontrar elementos no DOM."
                },
                {
                    id: "js-ch7-q3",
                    type: "multiple-choice",
                    question: "Qual o retorno de document.querySelectorAll()?",
                    options: ["Um único elemento", "Uma Array real", "Uma NodeList", "Um arquivo HTML"],
                    answer: 2,
                    explanation: "Retorna uma coleção estática de nós (NodeList), que pode ser percorrida mas não é exatamente um Array nativo."
                },
                {
                    id: "js-ch7-q4",
                    type: "multiple-choice",
                    question: "Como alterar apenas o TEXTO de um parágrafo (sem processar HTML)?",
                    options: ["p.innerHTML = 'v'", "p.content = 'v'", "p.innerText = 'v'", "p.value = 'v'"],
                    answer: 2,
                    explanation: "`innerText` (ou `textContent`) define o conteúdo textual, tratando tags como texto puro."
                },
                {
                    id: "js-ch7-q5",
                    type: "multiple-choice",
                    question: "Como mudar a cor do texto de um elemento via JS?",
                    options: ["el.color = 'red'", "el.style.color = 'red'", "el.css('color', 'red')", "el.format({color: 'red'})"],
                    answer: 1,
                    explanation: "Acessamos o objeto `.style` seguido da propriedade CSS em camelCase (quando aplicável)."
                },
                {
                    id: "js-ch7-q6",
                    type: "multiple-choice",
                    question: "Como criar uma nova tag 'div' na memória?",
                    options: ["document.newElement('div')", "document.createElement('div')", "new Div()", "document.build('div')"],
                    answer: 1,
                    explanation: "`createElement` cria o elemento, mas ele só aparece na tela após ser anexado ao DOM."
                },
                {
                    id: "js-ch7-q7",
                    type: "multiple-choice",
                    question: "Qual método insere um elemento como ÚLTIMO filho de outro?",
                    options: ["appendChild()", "prepend()", "insertAfter()", "addEnd()"],
                    answer: 0,
                    explanation: "`appendChild()` coloca o novo nó no final da lista de filhos do elemento pai."
                },
                {
                    id: "js-ch7-q8",
                    type: "multiple-choice",
                    question: "Como remover um elemento 'el' do DOM?",
                    options: ["el.delete()", "el.remove()", "el.clear()", "el.hide()"],
                    answer: 1,
                    explanation: "O método `.remove()` exclui o elemento e seus descendentes da árvore do documento."
                },
                {
                    id: "js-ch7-q9",
                    type: "multiple-choice",
                    question: "Como subir um nível na árvore do DOM a partir de um filho?",
                    options: ["el.up()", "el.parent", "el.parentElement", "el.root"],
                    answer: 2,
                    explanation: "A propriedade `parentElement` retorna o nó pai direto do elemento atual."
                },
                {
                    id: "js-ch7-q10",
                    type: "multiple-choice",
                    question: "Como adicionar uma nova classe CSS a um elemento sem sobrescrever as existentes?",
                    options: ["el.class = 'nova'", "el.className += 'nova'", "el.classList.add('nova')", "el.addClass('nova')"],
                    answer: 2,
                    explanation: "`classList.add()` é a forma moderna e segura de manipular classes individualmente."
                }
            ],
            "js-ch8": [
                {
                    id: "js-ch8-q1",
                    type: "multiple-choice",
                    question: "Como você adiciona um evento de clique a um botão?",
                    options: ["button.onclick = () => {}", "button.addEventListener('click', () => {})", "button.addEvent('click')", "Ambas as primeiras opções estão corretas"],
                    answer: 3,
                    explanation: "Tanto o `addEventListener` quanto a propriedade `onclick` podem ser usados, embora o `addEventListener` seja preferível por permitir múltiplos ouvintes."
                },
                {
                    id: "js-ch8-q2",
                    type: "multiple-choice",
                    question: "Qual propriedade do objeto 'event' identifica o elemento que disparou o evento?",
                    options: ["event.sender", "event.target", "event.origin", "event.source"],
                    answer: 1,
                    explanation: "`event.target` é fundamental para delegação de eventos, pois aponta para o elemento exato clicado."
                },
                {
                    id: "js-ch8-q3",
                    type: "multiple-choice",
                    question: "Qual evento é disparado quando um formulário é enviado?",
                    options: ["click", "send", "submit", "finish"],
                    answer: 2,
                    explanation: "O evento `submit` deve ser ouvido no elemento `<form>`, não no botão de envio."
                },
                {
                    id: "js-ch8-q4",
                    type: "multiple-choice",
                    question: "Diferença entre mouseover e mouseenter?",
                    options: ["Nenhuma", "mouseover dispara ao entrar em filhos, mouseenter não", "mouseenter é apenas para mobile", "mouseover é mais lento"],
                    answer: 1,
                    explanation: "`mouseenter` não borbulha, tornando-o mais limpo para efeitos em elementos específicos."
                },
                {
                    id: "js-ch8-q5",
                    type: "multiple-choice",
                    question: "Para detectar qual tecla foi pressionada, qual evento usamos?",
                    options: ["keypress", "keydown", "keytouch", "onclick"],
                    answer: 1,
                    explanation: "`keydown` capta todas as teclas, incluindo shift e setas, diferente do antigo keypress."
                },
                {
                    id: "js-ch8-q6",
                    type: "multiple-choice",
                    question: "O que acontece na 'Propagação de Eventos' (Bubbling)?",
                    options: ["O evento some", "O evento sobe do filho para os pais", "O evento desce do pai para os filhos", "O computador reinicia"],
                    answer: 1,
                    explanation: "Por padrão, a maioria dos eventos 'borbulha' de dentro para fora na árvore do DOM."
                },
                {
                    id: "js-ch8-q7",
                    type: "multiple-choice",
                    question: "Qual comando impede que um evento continue subindo para os pais (bubbles)?",
                    options: ["event.stop()", "event.stopPropagation()", "event.end()", "event.freeze()"],
                    answer: 1,
                    explanation: "`stopPropagation()` interrompe a viagem do evento para os elementos superiores."
                },
                {
                    id: "js-ch8-q8",
                    type: "multiple-choice",
                    question: "Como garantir que o código rode apenas após TODA a página (incluindo imagens) carregar?",
                    options: ["DOMContentLoaded", "window.onload", "script.start", "document.finish"],
                    answer: 1,
                    explanation: "`onload` espera tudo, enquanto `DOMContentLoaded` espera apenas o HTML ser processado."
                },
                {
                    id: "js-ch8-q9",
                    type: "multiple-choice",
                    question: "Para desativar um ouvinte de evento adicionado com addEventListener, usamos:",
                    options: ["stopEventListener", "removeEventListener", "off()", "deleteListener"],
                    answer: 1,
                    explanation: "É necessário passar o mesmo nome de evento e a mesma referência de função para remover."
                },
                {
                    id: "js-ch8-q10",
                    type: "multiple-choice",
                    question: "Qual evento dispara quando o valor de um <select> ou <input> é alterado?",
                    options: ["update", "modify", "change", "click"],
                    answer: 2,
                    explanation: "O evento `change` é disparado após a conclusão da alteração pelo usuário."
                }
            ],
            "js-ch9": [
                {
                    id: "js-ch9-q1",
                    type: "multiple-choice",
                    question: "Qual função de array cria um novo array com os resultados da chamada de uma função para cada elemento?",
                    options: ["filter()", "map()", "reduce()", "forEach()"],
                    answer: 1,
                    explanation: "O método `map()` percorre o array original e retorna um novo array transformado pela função fornecida."
                },
                {
                    id: "js-ch9-q2",
                    type: "multiple-choice",
                    question: "Como você filtraria um array para manter apenas números maiores que 10?",
                    options: ["arr.find(x => x > 10)", "arr.filter(x => x > 10)", "arr.map(x => x > 10)", "arr.some(x => x > 10)"],
                    answer: 1,
                    explanation: "`filter()` cria um novo array contendo apenas os elementos que passam no teste da função."
                },
                {
                    id: "js-ch9-q3",
                    type: "multiple-choice",
                    question: "Qual método é ideal para calcular a SOMA de todos os itens de um array numérico?",
                    options: ["reduce()", "map()", "filter()", "sum()"],
                    answer: 0,
                    explanation: "`reduce()` executa uma função redutora sobre cada elemento, resultando em um único valor de retorno."
                },
                {
                    id: "js-ch9-q4",
                    type: "multiple-choice",
                    question: "Diferença entre find() e filter()?",
                    options: ["Nenhuma", "find retorna o primeiro item, filter retorna um array com todos", "filter é mais rápido", "find remove o item do array"],
                    answer: 1,
                    explanation: "`find()` para quando encontra a primeira ocorrência, enquanto `filter()` continua até o fim."
                },
                {
                    id: "js-ch9-q5",
                    type: "multiple-choice",
                    question: "Qual método verifica se TODOS os elementos de um array passam em um teste?",
                    options: ["some()", "any()", "every()", "all()"],
                    answer: 2,
                    explanation: "`every()` retorna true apenas se a função retornar true para cada um dos itens."
                },
                {
                    id: "js-ch9-q6",
                    type: "multiple-choice",
                    question: "Como verificar se existe ao menos um número par em um array?",
                    options: ["arr.some(x => x % 2 === 0)", "arr.every(x => x % 2 === 0)", "arr.find(x => x % 2 === 0)", "arr.filter(x => x % 2 === 0)"],
                    answer: 0,
                    explanation: "`some()` retorna true se ao menos uma condição for satisfeita."
                },
                {
                    id: "js-ch9-q7",
                    type: "multiple-choice",
                    question: "Por que '[1, 10, 2].sort()' resulta em '[1, 10, 2]' e não '[1, 2, 10]'?",
                    options: [
                        "Porque sort() converte para string por padrão",
                        "Porque o computador está com erro",
                        "Porque o array é muito pequeno",
                        "Porque faltam parênteses"
                    ],
                    answer: 0,
                    explanation: "Sem uma função de comparação, o `sort()` ordena lexicograficamente (como texto)."
                },
                {
                    id: "js-ch9-q8",
                    type: "multiple-choice",
                    question: "Qual método verifica se um array possui um determinado valor (retornando true ou false)?",
                    options: ["has()", "contains()", "includes()", "exists()"],
                    answer: 2,
                    explanation: "`includes()` é a forma moderna e simples de checar a existência de um valor."
                },
                {
                    id: "js-ch9-q9",
                    type: "multiple-choice",
                    question: "O que é 'Method Chaining' (Encadeamento)?",
                    options: ["Usar apenas um método", "Chamar um método logo após o outro (ex: .filter().map())", "Deletar métodos", "Proteger métodos"],
                    answer: 1,
                    explanation: "Como map/filter retornam novos arrays, podemos encadeá-los para realizar transformações complexas."
                },
                {
                    id: "js-ch9-q10",
                    type: "multiple-choice",
                    question: "Diferença principal entre map() e forEach()?",
                    options: ["Nenhuma", "map() retorna um novo array, forEach() retorna undefined", "forEach() é mais novo", "map() apaga o array original"],
                    answer: 1,
                    explanation: "Use `map()` quando precisar transformar dados; `forEach()` quando quiser apenas causar efeitos colaterais."
                }
            ],
            "js-ch10": [
                {
                    id: "js-ch10-q1",
                    type: "multiple-choice",
                    question: "Como você armazena um item no localStorage?",
                    options: ["localStorage.save('key', 'value')", "localStorage.add('key', 'value')", "localStorage.setItem('key', 'value')", "localStorage.store('key', 'value')"],
                    answer: 2,
                    explanation: "O método correto para salvar dados no armazenamento local do navegador é o `setItem()`."
                },
                {
                    id: "js-ch10-q2",
                    type: "multiple-choice",
                    question: "Qual método recupera um valor do localStorage?",
                    options: ["getItem()", "fetch()", "pull()", "readValue()"],
                    answer: 0,
                    explanation: "`getItem('chave')` retorna o valor associado àquela chave ou `null` se não existir."
                },
                {
                    id: "js-ch10-q3",
                    type: "multiple-choice",
                    question: "Diferença entre removeItem() e clear()?",
                    options: ["Nenhuma", "removeItem remove uma chave específica, clear remove TUDO", "clear remove o browser", "removeItem é mais lento"],
                    answer: 1,
                    explanation: "Use `removeItem()` para manipulação pontual e `clear()` quando quiser resetar todos os dados do seu domínio."
                },
                {
                    id: "js-ch10-q4",
                    type: "multiple-choice",
                    question: "localStorage só aceita Strings. Como salvar um objeto JS?",
                    options: ["localStorage.setObject()", "Convertendo com JSON.stringify()", "Usando aspas duplas", "Não é possível"],
                    answer: 1,
                    explanation: "Devemos serializar o objeto para String usando `JSON.stringify(obj)` antes de salvar."
                },
                {
                    id: "js-ch10-q5",
                    type: "multiple-choice",
                    question: "Como transformar a string do localStorage de volta em um objeto JS?",
                    options: ["JSON.parse()", "JSON.toObject()", "Object.create()", "String.unbox()"],
                    answer: 0,
                    explanation: "`JSON.parse(string)` reconstrói a estrutura do objeto original."
                },
                {
                    id: "js-ch10-q6",
                    type: "multiple-choice",
                    question: "Diferença entre localStorage e sessionStorage?",
                    options: ["localStorage é infinito", "sessionStorage expira ao fechar a aba/janela", "localStorage é apenas para senhas", "Não há diferença"],
                    answer: 1,
                    explanation: "O `sessionStorage` mantém os dados apenas enquanto a sessão da aba durar."
                },
                {
                    id: "js-ch10-q7",
                    type: "multiple-choice",
                    question: "Qual o limite aproximado de armazenamento do localStorage por domínio?",
                    options: ["100 KB", "5 MB", "1 GB", "Ilimitado"],
                    answer: 1,
                    explanation: "A maioria dos navegadores modernos limita em torno de 5MB por origem."
                },
                {
                    id: "js-ch10-q8",
                    type: "boolean",
                    question: "Os dados do localStorage são enviados ao servidor em cada requisição HTTP?",
                    options: ["Verdadeiro", "Falso"],
                    answer: 1,
                    explanation: "Diferente dos Cookies, o localStorage é puramente local e nunca sai do navegador automaticamente."
                },
                {
                    id: "js-ch10-q9",
                    type: "multiple-choice",
                    question: "Se você fechar o navegador e abrir no dia seguinte, os dados do localStorage ainda estarão lá?",
                    options: ["Sim", "Não", "Apenas se o PC ficar ligado", "Depende do Wi-Fi"],
                    answer: 0,
                    explanation: "Dados no localStorage são persistentes até serem deletados via código ou pelo usuário."
                },
                {
                    id: "js-ch10-q10",
                    type: "multiple-choice",
                    question: "Onde os dados do localStorage ficam fisicamente?",
                    options: ["Na nuvem", "No servidor", "No disco rígido do usuário (pelo navegador)", "Na memória RAM"],
                    answer: 2,
                    explanation: "O navegador gerencia um arquivo local no sistema operacional para persistir essas informações."
                }
            ],
            "js-ch11": [
                {
                    id: "js-ch11-q1",
                    type: "multiple-choice",
                    question: "Qual palavra-chave é usada para disponibilizar uma função em outro arquivo?",
                    options: ["require", "import", "export", "share"],
                    answer: 2,
                    explanation: "Usamos `export` para expor variáveis, funções ou classes de um módulo."
                },
                {
                    id: "js-ch11-q2",
                    type: "multiple-choice",
                    question: "Como você traz apenas a função 'calculo' de um arquivo 'math.js'?",
                    options: ["import calculo from './math.js'", "import { calculo } from './math.js'", "require('./math.js').calculo", "get calculo from './math.js'"],
                    answer: 1,
                    explanation: "Para exportações nomeadas (named exports), usamos as chaves `{}` no import."
                },
                {
                    id: "js-ch11-q3",
                    type: "multiple-choice",
                    question: "Regra principal sobre 'export default'?",
                    options: ["Sempre deve ser uma string", "Pode haver apenas um por arquivo", "Não pode ser usado com funções", "É obrigatório em todos os arquivos"],
                    answer: 1,
                    explanation: "Cada módulo pode ter múltiplos 'named exports', mas apenas um único 'export default'."
                },
                {
                    id: "js-ch11-q4",
                    type: "multiple-choice",
                    question: "Como renomear 'soma' para 'adicao' durante o import?",
                    options: ["import { soma as adicao }", "import { soma to adicao }", "import { soma rename adicao }", "import { adicao from soma }"],
                    answer: 0,
                    explanation: "A palavra-chave `as` permite evitar conflitos de nomes renomeando itens no ato da importação."
                },
                {
                    id: "js-ch11-q5",
                    type: "multiple-choice",
                    question: "Para usar módulos ES no navegador, o que deve constar na tag <script>?",
                    options: ["type='text/javascript'", "mode='module'", "type='module'", "async='true'"],
                    answer: 2,
                    explanation: "O atributo `type='module'` indica ao navegador que ele deve processar o script como um módulo ES6."
                },
                {
                    id: "js-ch11-q6",
                    type: "multiple-choice",
                    question: "Como importar TUDO de um arquivo como um objeto chamado 'utils'?",
                    options: ["import all as utils from '...'", "import * as utils from '...'", "import { * } as utils from '...'", "utils = require('...')"],
                    answer: 1,
                    explanation: "O seletor `*` (asterisco) captura todos os exports e os coloca sob o namespace definido."
                },
                {
                    id: "js-ch11-q7",
                    type: "boolean",
                    question: "Módulos JavaScript executam em 'Strict Mode' por padrão?",
                    options: ["Verdadeiro", "Falso"],
                    answer: 0,
                    explanation: "Sim, módulos são sempre rigorosos, o que ajuda a evitar erros comuns de lógica e sintaxe."
                },
                {
                    id: "js-ch11-q8",
                    type: "multiple-choice",
                    question: "O que acontece com variáveis declaradas no topo de um módulo?",
                    options: ["Viram variáveis globais", "Ficam restritas ao escopo do módulo", "São apagadas imediatamente", "Podem ser usadas em qualquer <script>"],
                    answer: 1,
                    explanation: "Módulos têm seu próprio escopo. Nada 'vaza' para o global a menos que você exporte explicitamente."
                },
                {
                    id: "js-ch11-q9",
                    type: "multiple-choice",
                    question: "Qual o formato de arquivo padrão para módulos em ambientes Node.js modernos?",
                    options: [".jsm", ".mjs", ".module", ".es"],
                    answer: 1,
                    explanation: "A extensão `.mjs` é frequentemente usada para diferenciar módulos ES de scripts CommonJS (.cjs)."
                },
                {
                    id: "js-ch11-q10",
                    type: "multiple-choice",
                    question: "Como importar um módulo de forma assíncrona (apenas quando necessário)?",
                    options: ["await import('...')", "import.async('...')", "load('...')", "fetch.module('...')"],
                    answer: 0,
                    explanation: "O `import()` dinâmico retorna uma Promise e é ideal para 'Code Splitting' e carregar recursos sob demanda."
                }
            ],
            "js-ch12": [
                {
                    id: "js-ch12-q1",
                    type: "multiple-choice",
                    question: "Qual palavra-chave permite criar uma classe que herda de outra?",
                    options: ["inherits", "extends", "from", "super"],
                    answer: 1,
                    explanation: "A palavra-chave `extends` é usada na declaração de uma classe para criar uma classe filha de outra."
                },
                {
                    id: "js-ch12-q2",
                    type: "multiple-choice",
                    question: "Como criar uma nova instância (objeto) a partir de uma classe?",
                    options: ["let obj = new MyClass()", "let obj = create MyClass()", "let obj = instance MyClass()", "let obj = MyClass.new()"],
                    answer: 0,
                    explanation: "O operador `new` instancia a classe, alocando memória e chamando o construtor."
                },
                {
                    id: "js-ch12-q3",
                    type: "multiple-choice",
                    question: "Qual a função do método 'constructor'?",
                    options: ["Destruir o objeto", "Inicializar as propriedades do objeto", "Fazer um loop interno", "Apenas para estética"],
                    answer: 1,
                    explanation: "O `constructor` é um método especial executado automaticamente no momento da criação do objeto."
                },
                {
                    id: "js-ch12-q4",
                    type: "multiple-choice",
                    question: "Ao usar 'extends', o que o 'super()' faz dentro do constructor?",
                    options: ["Chama o construtor da classe pai", "Cancela a herança", "Acelera a classe", "Exclui a classe filha"],
                    answer: 0,
                    explanation: "Em classes filhas, você deve chamar `super()` antes de usar `this` ou retornar do construtor."
                },
                {
                    id: "js-ch12-q5",
                    type: "multiple-choice",
                    question: "Qual palavra-chave define um método que pertence à CLASSE e não às instâncias?",
                    options: ["fixed", "global", "static", "shared"],
                    answer: 2,
                    explanation: "Métodos `static` são chamados diretamente na classe (ex: `Math.random()`), sem precisar de `new`."
                },
                {
                    id: "js-ch12-q6",
                    type: "multiple-choice",
                    question: "Como declarar um campo de classe PRIVADO (que não pode ser acessado de fora)?",
                    options: ["_nome", "private nome", "hidden nome", "#nome"],
                    answer: 3,
                    explanation: "A sintaxe moderna de JS usa o prefixo `#` para definir propriedades verdadeiramente privadas."
                },
                {
                    id: "js-ch12-q7",
                    type: "boolean",
                    question: "Diferente de 'function', as declarações 'class' NÃO sofrem hoisting?",
                    options: ["Verdadeiro", "Falso"],
                    answer: 0,
                    explanation: "Verdadeiro. Você não pode usar uma classe antes de ela ser declarada no código."
                },
                {
                    id: "js-ch12-q8",
                    type: "multiple-choice",
                    question: "O que o 'this' representa dentro de um método de instância?",
                    options: ["A classe pai", "O objeto atual", "A janela do navegador", "Uma variável global"],
                    answer: 1,
                    explanation: "`this` refere-se à instância específica que está executando o método naquele momento."
                },
                {
                    id: "js-ch12-q9",
                    type: "multiple-choice",
                    question: "Qual sintaxe define um método para LER uma propriedade como se fosse um campo?",
                    options: ["read nome()", "get nome()", "fetch nome()", "value nome()"],
                    answer: 1,
                    explanation: "O `get` permite executar uma lógica ao ler uma propriedade, mantendo a interface limpa."
                },
                {
                    id: "js-ch12-q10",
                    type: "multiple-choice",
                    question: "Classes em JavaScript são essencialmente açúcar sintático para qual sistema?",
                    options: ["Arrays", "Objetos Globais", "Protótipos (Prototypal Inheritance)", "Lógica de Bit"],
                    answer: 2,
                    explanation: "Por baixo do capô, o JS continua usando o sistema de protótipos, a sintaxe `class` apenas o torna mais amigável."
                }
            ],
            "js-ch13": [
                {
                    id: "js-ch13-q1",
                    type: "multiple-choice",
                    question: "Como você espera o resultado de uma Promise dentro de uma função async?",
                    options: ["stay", "wait", "await", "yield"],
                    answer: 2,
                    explanation: "A palavra-chave `await` faz a execução da função assíncrona pausar até que a Promise seja resolvida."
                },
                {
                    id: "js-ch13-q2",
                    type: "multiple-choice",
                    question: "O que una função 'async' sempre retorna?",
                    options: ["Um número", "Uma Promise", "null", "undefined"],
                    answer: 1,
                    explanation: "Mesmo que você retorne um valor simples, o JS o envelopa em uma Promise resolvida automaticamente."
                },
                {
                    id: "js-ch13-q3",
                    type: "multiple-choice",
                    question: "Como tratar erros em operações assíncronas usando await?",
                    options: ["if (error) {}", "try...catch", "Promise.onError()", "await.catch()"],
                    answer: 1,
                    explanation: "O bloco `try...catch` é a forma padrão e mais limpa de lidar com rejeições de Promises em funções async."
                },
                {
                    id: "js-ch13-q4",
                    type: "multiple-choice",
                    question: "Qual método espera que TODAS as Promises de uma lista sejam resolvidas?",
                    options: ["Promise.waitAll()", "Promise.all()", "Promise.sync()", "Promise.every()"],
                    answer: 1,
                    explanation: "`Promise.all()` falha se qualquer uma das Promises fornecidas for rejeitada."
                },
                {
                    id: "js-ch13-q5",
                    type: "multiple-choice",
                    question: "Como se chama o estado inicial de uma Promise?",
                    options: ["pending", "resolved", "rejected", "waiting"],
                    answer: 0,
                    explanation: "Uma Promise começa como `pending` (pendente) até ser resolvida ou rejeitada."
                },
                {
                    id: "js-ch13-q6",
                    type: "multiple-choice",
                    question: "Como criar uma Promise manualmente que resolva após 1 segundo?",
                    options: ["new Promise((resolve) => setTimeout(resolve, 1000))", "Promise.wait(1000)", "async(1000) => {}", "setTimeout(Promise, 1000)"],
                    answer: 0,
                    explanation: "Usamos o construtor `new Promise` que recebe uma função executora com os argumentos `resolve` e `reject`."
                },
                {
                    id: "js-ch13-q7",
                    type: "multiple-choice",
                    question: "Qual o propósito do método '.finally()'?",
                    options: ["Terminar o programa", "Executar código independente do sucesso ou erro da Promise", "Apenas para erros", "Para mudar o resultado final"],
                    answer: 1,
                    explanation: "`.finally()` é ideal para limpeza de recursos, como fechar carregamentos (loading), sempre executando ao final."
                },
                {
                    id: "js-ch13-q8",
                    type: "multiple-choice",
                    question: "O que o 'Promise.race()' faz?",
                    options: ["Espera a mais rápida ser concluída", "Sorteia uma Promise", "Executa todas em fila", "Cancela todas as Promises"],
                    answer: 0,
                    explanation: "`Promise.race()` resolve ou rejeita assim que a primeira Promise da lista terminar."
                },
                {
                    id: "js-ch13-q9",
                    type: "multiple-choice",
                    question: "O que acontece se você der 'await' em um valor que NÃO é uma Promise (ex: await 5)?",
                    options: ["Dá erro de sintaxe", "O programa trava", "O valor é retornado normalmente", "Retorna null"],
                    answer: 2,
                    explanation: "O JS trata valores não-Promise como se fossem uma Promise resolvida com aquele valor imediatamente."
                },
                {
                    id: "js-ch13-q10",
                    type: "multiple-choice",
                    question: "O que é 'Top-level await'?",
                    options: ["Usar await no topo de um módulo", "O await mais rápido", "Uma função global", "Não existe"],
                    answer: 0,
                    explanation: "Permite usar `await` fora de funções `async` em módulos ES (.mjs), facilitando carregamentos iniciais."
                }
            ],
            "js-ch14": [
                {
                    id: "js-ch14-q1",
                    type: "multiple-choice",
                    question: "Qual API você usaria para observar mudanças na árvore do DOM?",
                    options: ["DOMObserver", "MutationObserver", "TreeWatcher", "ChangeHandler"],
                    answer: 1,
                    explanation: "O `MutationObserver` é projetado especificamente para reagir a alterações em elementos do DOM."
                },
                {
                    id: "js-ch14-q2",
                    type: "multiple-choice",
                    question: "Para que serve o 'IntersectionObserver'?",
                    options: ["Detectar quando um elemento aparece na tela (viewport)", "Mudar a cor de fundo", "Calcular a distância entre dois cliques", "Observar mudanças de cookies"],
                    answer: 0,
                    explanation: "É ideal para 'lazy loading' de imagens ou animações que ativam conforme você rola a página."
                },
                {
                    id: "js-ch14-q3",
                    type: "multiple-choice",
                    question: "Como executar scripts pesados em segundo plano, sem travar a interface do usuário?",
                    options: ["Web Workers", "Service Workers", "Task Manager", "Background Threading"],
                    answer: 0,
                    explanation: "Web Workers criam uma thread separada para processamento intensivo."
                },
                {
                    id: "js-ch14-q4",
                    type: "multiple-choice",
                    question: "Qual o método moderno para fazer requisições HTTP (substituto do XMLHttpRequest)?",
                    options: ["http.get()", "axios()", "fetch()", "request()"],
                    answer: 2,
                    explanation: "A API `fetch()` é nativa, baseada em Promises e muito mais limpa que o antigo AJAX."
                },
                {
                    id: "js-ch14-q5",
                    type: "multiple-choice",
                    question: "Como mudar a URL do navegador sem recarregar a página inteira?",
                    options: ["history.pushState()", "window.replaceURL()", "location.set()", "navigator.go()"],
                    answer: 0,
                    explanation: "Parte da History API, o `pushState` permite criar rotas no lado do cliente (Single Page Applications)."
                },
                {
                    id: "js-ch14-q6",
                    type: "multiple-choice",
                    question: "O que o 'Shadow DOM' permite fazer?",
                    options: ["Encapsular CSS e HTML para não vazar estilos", "Proteger o código de hackers", "Criar elementos invisíveis", "Aumentar a performance de renderização"],
                    answer: 0,
                    explanation: "É a base dos Web Components, permitindo estilos privados que não afetam o resto do site."
                },
                {
                    id: "js-ch14-q7",
                    type: "multiple-choice",
                    question: "Qual API permite armazenar grandes volumes de dados estruturados no navegador?",
                    options: ["localStorage", "sessionStorage", "IndexedDB", "Cookies"],
                    answer: 2,
                    explanation: "Diferente do localStorage, o IndexedDB é assíncrono e suporta índices e transações complexas."
                },
                {
                    id: "js-ch14-q8",
                    type: "multiple-choice",
                    question: "Como obter as coordenadas de latitude e longitude do dispositivo?",
                    options: ["navigator.geolocation.getCurrentPosition()", "window.getMap()", "navigator.locate()", "location.getPosition()"],
                    answer: 0,
                    explanation: "A Geolocation API fornece acesso à localização, solicitando permissão ao usuário."
                },
                {
                    id: "js-ch14-q9",
                    type: "multiple-choice",
                    question: "Qual o método recomendado para criar animações fluidas sincronizadas com o monitor?",
                    options: ["setTimeout()", "setInterval()", "requestAnimationFrame()", "animate()"],
                    answer: 2,
                    explanation: "`requestAnimationFrame` avisa o navegador que você quer realizar uma animação, otimizando o ciclo de pintura."
                },
                {
                    id: "js-ch14-q10",
                    type: "multiple-choice",
                    question: "Para definir seu próprio elemento HTML customizado (ex: <meu-botao>), você usa:",
                    options: ["customElements.define()", "new HTMLTag()", "document.createTag()", "window.setElement()"],
                    answer: 0,
                    explanation: "É o pilar principal dos Web Components para criar tags reutilizáveis e nativas."
                }
            ],
            "js-ch15": [
                {
                    id: "js-ch15-q1",
                    type: "multiple-choice",
                    question: "Qual padrão de projeto garante que uma classe tenha apenas uma instância?",
                    options: ["Factory", "Observer", "Singleton", "Prototype"],
                    answer: 2,
                    explanation: "O padrão Singleton restringe a instanciação de uma classe para um único objeto."
                },
                {
                    id: "js-ch15-q2",
                    type: "multiple-choice",
                    question: "O que o padrão 'Factory' (Fábrica) faz?",
                    options: ["Cria objetos sem especificar a classe exata", "Destrói objetos inúteis", "Inverte a lógica do loop", "Apenas renomeia classes"],
                    answer: 0,
                    explanation: "Ele fornece uma interface para criar objetos, permitindo que as subclasses decidam qual classe instanciar."
                },
                {
                    id: "js-ch15-q3",
                    type: "multiple-choice",
                    question: "Para que serve o padrão 'Observer'?",
                    options: ["Para esconder variáveis", "Para notificar múltiplos objetos sobre mudanças de estado", "Para acelerar o banco de dados", "Para criar animações CSS"],
                    answer: 1,
                    explanation: "É a base da programação reativa e de sistemas de eventos (ex: click handlers)."
                },
                {
                    id: "js-ch15-q4",
                    type: "multiple-choice",
                    question: "Qual o objetivo principal do padrão 'Module' em JS?",
                    options: ["Transformar o código em Java", "Encapsular dados e métodos privados", "Diminuir o tamanho das imagens", "Remover comentários"],
                    answer: 1,
                    explanation: "Usado para manter a privacidade e evitar poluição do escopo global."
                },
                {
                    id: "js-ch15-q5",
                    type: "multiple-choice",
                    question: "O que o padrão 'Proxy' permite fazer?",
                    options: ["Acessar a internet", "Interceptar e customizar operações em um objeto", "Deletar o objeto pai", "Mudar a cor da IDE"],
                    answer: 1,
                    explanation: "O Proxy age como um intermediário para operações como leitura de propriedades e validações."
                },
                {
                    id: "js-ch15-q6",
                    type: "multiple-choice",
                    question: "Como o padrão 'Decorator' adiciona funcionalidades?",
                    options: ["Substituindo a classe original", "Envolvendo o objeto original sem alterar sua estrutura", "Usando apenas CSS", "Através de herança múltipla"],
                    answer: 1,
                    explanation: "Ele permite adicionar comportamentos a objetos de forma dinâmica, favorecendo a composição sobre a herança."
                },
                {
                    id: "js-ch15-q7",
                    type: "multiple-choice",
                    question: "O que o padrão 'State' (Estado) resolve?",
                    options: ["Permite que um objeto altere seu comportamento quando seu estado interno muda", "Aumenta a velocidade de conexão", "Cria um novo servidor", "Apenas para salvar logs"],
                    answer: 0,
                    explanation: "Elimina condicionais complexas (`if/else`) ao delegar a lógica para classes de estado específicas."
                },
                {
                    id: "js-ch15-q8",
                    type: "multiple-choice",
                    question: "O que é 'Dependency Injection' (Injeção de Dependência)?",
                    options: ["Escrever o código todo em um arquivo", "Passar objetos externos como argumentos em vez de criá-los internamente", "Usar apenas variáveis globais", "Um tipo de vírus"],
                    answer: 1,
                    explanation: "Promove o desacoplamento, facilitando testes e manutenção do sistema."
                },
                {
                    id: "js-ch15-q9",
                    type: "multiple-choice",
                    question: "O que o padrão 'Mediator' faz?",
                    options: ["Centraliza a comunicação entre objetos complexos", "Apaga o cache", "Traduz o código para Inglês", "Cria um novo banco de dados"],
                    answer: 0,
                    explanation: "Evita que objetos se refiram uns aos outros explicitamente, reduzindo o acoplamento."
                },
                {
                    id: "js-ch15-q10",
                    type: "multiple-choice",
                    question: "O que é o padrão 'Adapter'?",
                    options: ["Converter a interface de uma classe para outra esperada pelo cliente", "Um plugin do navegador", "Um cabo físico", "Acelerar o processamento"],
                    answer: 0,
                    explanation: "Permite que classes com interfaces incompatíveis trabalhem juntas."
                }
            ],
            "js-ch16": [
                {
                    id: "js-ch16-q1",
                    type: "multiple-choice",
                    question: "Qual o nome da técnica onde você escreve os testes ANTES do código funcional?",
                    options: ["TDD (Test Driven Development)", "BDD (Behavior Driven Development)", "CI/CD", "Testing First"],
                    answer: 0,
                    explanation: "TDD é um ciclo de desenvolvimento que foca em escrever o teste, vê-lo falhar, e então escrever o código para fazê-lo passar."
                },
                {
                    id: "js-ch16-q2",
                    type: "multiple-choice",
                    question: "O que é um 'Teste Unitário'?",
                    options: ["Testar o sistema inteiro de uma vez", "Testar a menor parte possível do código isoladamente", "Testar a conexão com o banco de dados", "Testar a velocidade da rede"],
                    answer: 1,
                    explanation: "Testes unitários focam em funções ou componentes individuais, garantindo que cada peça funcione logicamente."
                },
                {
                    id: "js-ch16-q3",
                    type: "multiple-choice",
                    question: "Qual a diferença entre testes de Integração e E2E (Ponta a Ponta)?",
                    options: ["Nenhuma", "E2E testa o fluxo completo do usuário no navegador; Integração testa como módulos trabalham juntos", "Integração é mais lento que E2E", "E2E serve apenas para CSS"],
                    answer: 1,
                    explanation: "Testes E2E (End-to-End) simulam um usuário real clicando na tela, enquanto Integração foca no contrato entre APIs/módulos."
                },
                {
                    id: "js-ch16-q4",
                    type: "multiple-choice",
                    question: "Em frameworks de teste, para que serve a função 'expect()'?",
                    options: ["Para esperar um segundo", "Para definir o resultado esperado (asserção)", "Para importar uma biblioteca", "Para deletar o teste"],
                    answer: 1,
                    explanation: "É o coração do teste, comparando o valor real obtido com o que você 'espera' que seja verdade."
                },
                {
                    id: "js-ch16-q5",
                    type: "multiple-choice",
                    question: "O que são 'Mocks' ou 'Dublês de Teste'?",
                    options: ["Objetos falsos que simulam dependências reais (ex: uma API)", "Comentários no código", "Funções de erro", "Plugins do Chrome"],
                    answer: 0,
                    explanation: "Mocks permitem testar lógica sem depender de sistemas externos lentos ou instáveis."
                },
                {
                    id: "js-ch16-q6",
                    type: "multiple-choice",
                    question: "O que o 'Code Coverage' (Cobertura de Código) mede?",
                    options: ["A quantidade de linhas de código escritas", "A porcentagem de código que é executada durante os testes", "O tamanho do arquivo final", "Quantos bugs existem"],
                    answer: 1,
                    explanation: "Ajuda a identificar partes do sistema que ainda não foram testadas."
                },
                {
                    id: "js-ch16-q7",
                    type: "multiple-choice",
                    question: "Qual destas é uma ferramenta de teste popular no ecossistema JavaScript?",
                    options: ["Jest", "Photoshop", "Excel", "Spotify"],
                    answer: 0,
                    explanation: "Jest é um dos frameworks de teste mais completos e usados, desenvolvido pelo Facebook/Meta."
                },
                {
                    id: "js-ch16-q8",
                    type: "multiple-choice",
                    question: "O que é 'Snapshot Testing'?",
                    options: ["Tirar uma foto do desenvolvedor", "Comparar a estrutura do componente com uma versão salva anteriormente", "Testar apenas no Instagram", "Um teste que expira rápido"],
                    answer: 1,
                    explanation: "Garante que mudanças acidentais na interface (UI) sejam detectadas imediatamente."
                },
                {
                    id: "js-ch16-q9",
                    type: "multiple-choice",
                    question: "Como você testa código assíncrono (ex: fetch) em Jest?",
                    options: ["Usando setTimeOut", "Usando async/await no próprio teste", "Ignorando a parte assíncrona", "Não é possível"],
                    answer: 1,
                    explanation: "Testes modernos suportam `async/await`, permitindo esperar a Promise resolver antes de validar."
                },
                {
                    id: "js-ch16-q10",
                    type: "multiple-choice",
                    question: "O que significa o termo 'Refatoração' no contexto do TDD?",
                    options: ["Reescrever o código para melhorar a estrutura sem mudar o comportamento", "Adicionar novas funcionalidades", "Deletar o banco de dados", "Mudar o nome do projeto"],
                    answer: 0,
                    explanation: "É a fase onde você limpa o código após o teste passar (fase Verde)."
                }
            ],
            "js-ch17": [
                {
                    id: "js-ch17-q1",
                    type: "multiple-choice",
                    question: "Qual técnica limita a frequência com que uma função é executada, disparando-a apenas após um período de inatividade?",
                    options: ["Debounce", "Throttle", "Memoization", "Lazy Loading"],
                    answer: 0,
                    explanation: "Debouncing atrasa a execução de uma função até que um certo tempo tenha se passado desde a última vez que ela foi invocada (ideal para barras de busca)."
                },
                {
                    id: "js-ch17-q2",
                    type: "multiple-choice",
                    question: "Qual a principal diferença entre Debounce e Throttle?",
                    options: ["Nenhuma", "Throttle garante a execução em intervalos regulares; Debounce só executa após o usuário parar", "Debounce é mais rápido", "Throttle serve apenas para imagens"],
                    answer: 1,
                    explanation: "Throttle limita a execução a uma vez a cada X milissegundos (ideal para scroll ou redimensionamento de janela)."
                },
                {
                    id: "js-ch17-q3",
                    type: "multiple-choice",
                    question: "O que é 'Memoization'?",
                    options: ["Apagar a memória do navegador", "Armazenar o resultado de funções custosas para reutilizá-los com as mesmas entradas", "Compactar o código", "Um tipo de loop"],
                    answer: 1,
                    explanation: "É uma técnica de cache que evita reprocessar cálculos complexos repetidamente."
                },
                {
                    id: "js-ch17-q4",
                    type: "multiple-choice",
                    question: "O que o termo 'Lazy Loading' (Carregamento Preguiçoso) significa?",
                    options: ["Carregar todos os arquivos no início", "Atrasar o carregamento de recursos não essenciais até que sejam necessários", "Um código que roda devagar", "Scripts que não funcionam"],
                    answer: 1,
                    explanation: "Melhora o tempo de carregamento inicial (LCP) ao não baixar imagens ou scripts que estão fora da tela."
                },
                {
                    id: "js-ch17-q5",
                    type: "multiple-choice",
                    question: "Como o 'Tree Shaking' ajuda na performance?",
                    options: ["Removendo código morto/não utilizado do bundle final", "Organizando as pastas do projeto", "Aumentando a velocidade do processador", "Limpando o cache do Git"],
                    answer: 0,
                    explanation: "Bundlers modernos como Webpack e Vite usam isso para garantir que apenas o código realmente importado chegue ao usuário."
                },
                {
                    id: "js-ch17-q6",
                    type: "multiple-choice",
                    question: "Qual a vantagem do 'Code Splitting'?",
                    options: ["Dividir o código em arquivos menores que podem ser carregados sob demanda", "Escrever menos código", "Facilitar a leitura do programador", "Permitir herança múltipla"],
                    answer: 0,
                    explanation: "Permite que o usuário baixe apenas o que precisa para a página atual, em vez de um arquivo gigante de 5MB."
                },
                {
                    id: "js-ch17-q7",
                    type: "multiple-choice",
                    question: "O que é o 'Critical Rendering Path'?",
                    options: ["O caminho mais longo para o servidor", "A sequência de passos que o navegador segue para converter HTML/CSS/JS em pixels", "Uma rota de API perigosa", "O diretório principal do projeto"],
                    answer: 1,
                    explanation: "Otimizar esse caminho reduz o tempo até que o usuário veja algo útil na tela (First Contentful Paint)."
                },
                {
                    id: "js-ch17-q8",
                    type: "multiple-choice",
                    question: "Como evitar o 'Layout Thrashing'?",
                    options: ["Lendo e escrevendo no DOM de forma alternada", "Agrupando leituras e depois agrupando escritas no DOM", "Não usando CSS", "Usando apenas tabelas"],
                    answer: 1,
                    explanation: "Evita que o navegador tenha que recalcular o layout múltiplas vezes seguidas no mesmo frame."
                },
                {
                    id: "js-ch17-q9",
                    type: "multiple-choice",
                    question: "Para que serve o recurso <link rel='prefetch'>?",
                    options: ["Para deletar a página", "Para baixar recursos de baixa prioridade que o usuário pode precisar no futuro", "Para forçar o carregamento imediato", "Para bloquear o acesso"],
                    answer: 1,
                    explanation: "Ajuda a acelerar a navegação para a próxima página que o usuário provavelmente visitará."
                },
                {
                    id: "js-ch17-q10",
                    type: "multiple-choice",
                    question: "O que é 'Minificação'?",
                    options: ["Reduzir o tamanho dos arquivos removendo espaços e renomeando variáveis para letras curtas", "Escrever código em letras minúsculas", "Criar componentes pequenos", "Ocultar o código"],
                    answer: 0,
                    explanation: "Reduz o peso do arquivo para download sem alterar a lógica de execução."
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
                    options: ["x = int(5)", "x = 5", "ambas as acima", "x : 5"],
                    answer: 2,
                    explanation: "Python é dinamicamente tipado, então `x = 5` é o padrão, mas `int(5)` também funciona para conversão explícita."
                },
                {
                    id: "py-ch2-q2",
                    type: "multiple-choice",
                    question: "Qual o tipo de dado de x = 2.8?",
                    options: ["int", "float", "complex", "number"],
                    answer: 1,
                    explanation: "Números com casas decimais são do tipo `float` (ponto flutuante) em Python."
                },
                {
                    id: "py-ch2-q3",
                    type: "boolean",
                    question: "Strings em Python podem ser delimitadas por aspas simples ou duplas?",
                    options: ["Verdadeiro", "Falso"],
                    answer: 0,
                    explanation: "Diferente de algumas linguagens, Python trata `'texto'` e `\"texto\"` de forma idêntica."
                },
                {
                    id: "py-ch2-q4",
                    type: "multiple-choice",
                    question: "Qual o resultado de bool([]) ?",
                    options: ["True", "False", "Error", "None"],
                    answer: 1,
                    explanation: "Listas vazias, strings vazias e o número 0 são considerados `False` em contextos booleanos."
                },
                {
                    id: "py-ch2-q5",
                    type: "multiple-choice",
                    question: "Como converter um número para uma string?",
                    options: ["str(x)", "toString(x)", "(string)x", "x.text()"],
                    answer: 0,
                    explanation: "A função `str()` é usada para converter objetos em sua representação textual."
                },
                {
                    id: "py-ch2-q6",
                    type: "multiple-choice",
                    question: "O que representa o valor 'None' em Python?",
                    options: ["Zero", "Uma string vazia", "A ausência de valor (nulo)", "Um erro de sintaxe"],
                    answer: 2,
                    explanation: "`None` é um objeto especial usado para indicar que uma variável não possui um valor definido."
                },
                {
                    id: "py-ch2-q7",
                    type: "multiple-choice",
                    question: "Como inserir o valor de uma variável 'nome' dentro de uma string de forma moderna (f-string)?",
                    options: ["f'Olá {nome}'", "'Olá ' + nome", "'Olá %s' % nome", "string(nome)"],
                    answer: 0,
                    explanation: "As f-strings (prefixo 'f') são a maneira mais legível e eficiente de formatar strings no Python 3.6+."
                },
                {
                    id: "py-ch2-q8",
                    type: "multiple-choice",
                    question: "Qual o tipo de dado de x = True?",
                    options: ["str", "bool", "int", "logic"],
                    answer: 1,
                    explanation: "Booleanos em Python (`True` e `False`) devem sempre começar com letra maiúscula."
                },
                {
                    id: "py-ch2-q9",
                    type: "multiple-choice",
                    question: "Como atribuir o mesmo valor para três variáveis em uma única linha?",
                    options: ["x = y = z = 10", "x, y, z = 10", "x = 10; y = 10; z = 10", "set(x,y,z,10)"],
                    answer: 0,
                    explanation: "Python permite atribuições encadeadas, o que torna o código mais conciso."
                },
                {
                    id: "py-ch2-q10",
                    type: "multiple-choice",
                    question: "O que acontece se você tentar somar uma string com um número: '5' + 5 ?",
                    options: ["Retorna '55'", "Retorna 10", "Gera um TypeError", "Retorna '5 5'"],
                    answer: 2,
                    explanation: "Python não faz conversão automática (coerção) de tipos diferentes em operações aritméticas."
                }
            ],
            "py-ch3": [
                {
                    id: "py-ch3-q1",
                    type: "multiple-choice",
                    question: "Qual operador é usado para a exponenciação (potência) em Python?",
                    options: ["^", "**", "//", "%"],
                    answer: 1,
                    explanation: "Em Python, o operador `**` eleva o número à esquerda à potência do número à direita."
                },
                {
                    id: "py-ch3-q2",
                    type: "multiple-choice",
                    question: "O que o operador '//' faz em Python?",
                    options: ["Divisão comum", "Divisão inteira (descarta o resto)", "Módulo (resto da divisão)", "Comentário"],
                    answer: 1,
                    explanation: "O operador `//` realiza a divisão inteira, retornando apenas a parte inteira do quociente."
                },
                {
                    id: "py-ch3-q3",
                    type: "multiple-choice",
                    question: "Qual operador retorna o RESTO de uma divisão?",
                    options: ["rem", "rest", "//", "%"],
                    answer: 3,
                    explanation: "O operador de módulo `%` é útil para verificar se um número é par ou ímpar."
                },
                {
                    id: "py-ch3-q4",
                    type: "multiple-choice",
                    question: "Como você escreve 'E' lógico em Python?",
                    options: ["&&", "and", "E", "&"],
                    answer: 1,
                    explanation: "Diferente de C++ ou JS, Python usa palavras em inglês (`and`, `or`, `not`) para lógica booleana."
                },
                {
                    id: "py-ch3-q5",
                    type: "multiple-choice",
                    question: "Qual o resultado de: 10 > 5 and 3 == 3 ?",
                    options: ["True", "False", "None", "Error"],
                    answer: 0,
                    explanation: "Ambas as condições são verdadeiras, logo o resultado do `and` é `True`."
                },
                {
                    id: "py-ch3-q6",
                    type: "multiple-choice",
                    question: "Qual operador verifica se dois objetos ocupam o mesmo espaço na memória (identidade)?",
                    options: ["==", "is", "equal", "same"],
                    answer: 1,
                    explanation: "`==` compara os valores, enquanto `is` compara se são o exato mesmo objeto na memória."
                },
                {
                    id: "py-ch3-q7",
                    type: "multiple-choice",
                    question: "Como verificar se o valor 'Morango' está dentro da lista 'frutas'?",
                    options: ["frutas.has('Morango')", "'Morango' in frutas", "exists('Morango', frutas)", "frutas.contains('Morango')"],
                    answer: 1,
                    explanation: "O operador `in` é muito poderoso no Python para verificar presença em coleções."
                },
                {
                    id: "py-ch3-q8",
                    type: "multiple-choice",
                    question: "O que o operador 'not' faz?",
                    options: ["Nada", "Inverte o valor booleano (True vira False)", "Deleta a variável", "Para o programa"],
                    answer: 1,
                    explanation: "`not` é o operador de negação lógica."
                },
                {
                    id: "py-ch3-q9",
                    type: "multiple-choice",
                    question: "Qual a forma curta de escrever 'x = x + 5'?",
                    options: ["x += 5", "x =+ 5", "x.add(5)", "x++ 5"],
                    answer: 0,
                    explanation: "Operadores de atribuição composta como `+=`, `-=`, `*=` tornam o código mais enxuto."
                },
                {
                    id: "py-ch3-q10",
                    type: "multiple-choice",
                    question: "Qual o resultado de: 2 + 3 * 4 ?",
                    options: ["20", "14", "24", "9"],
                    answer: 1,
                    explanation: "Assim como na matemática, a multiplicação tem precedência sobre a adição."
                }
            ],
            "py-ch4": [
                {
                    id: "py-ch4-q1",
                    type: "multiple-choice",
                    question: "Como você importa o módulo 'math' em Python?",
                    options: ["using math", "import math", "include math", "require(math)"],
                    answer: 1,
                    explanation: "A palavra-chave `import` é usada para carregar módulos externos ou bibliotecas padrão."
                },
                {
                    id: "py-ch4-q2",
                    type: "multiple-choice",
                    question: "Como você importa apenas a função 'sqrt' do módulo 'math'?",
                    options: ["import math(sqrt)", "from math import sqrt", "get sqrt from math", "import sqrt"],
                    answer: 1,
                    explanation: "Usar `from ... import ...` permite usar a função diretamente sem o prefixo do módulo."
                },
                {
                    id: "py-ch4-q3",
                    type: "multiple-choice",
                    question: "Como você importa um módulo com um 'apelido' (alias)?",
                    options: ["import math as m", "import math like m", "set m = math", "alias math=m"],
                    answer: 0,
                    explanation: "O `as` é útil para encurtar nomes de módulos longos (comum com `numpy as np`)."
                },
                {
                    id: "py-ch4-q4",
                    type: "multiple-choice",
                    question: "Qual módulo padrão é usado para gerar números aleatórios?",
                    options: ["math", "random", "os", "sys"],
                    answer: 1,
                    explanation: "O módulo `random` fornece funções para gerar inteiros, escolher itens de listas, etc."
                },
                {
                    id: "py-ch4-q5",
                    type: "multiple-choice",
                    question: "Para que serve a função dir() aplicada a um módulo?",
                    options: ["Deletar o módulo", "Listar todos os nomes (funções, variáveis) definidos no módulo", "Procurar o módulo na internet", "Criar um diretório"],
                    answer: 1,
                    explanation: "`dir()` é excelente para explorar o conteúdo de uma biblioteca que você acabou de importar."
                },
                {
                    id: "py-ch4-q6",
                    type: "multiple-choice",
                    question: "Qual o comando usado no terminal para instalar novos pacotes em Python?",
                    options: ["npm install", "get-package", "pip install", "python add"],
                    answer: 2,
                    explanation: "O `pip` é o gerenciador de pacotes padrão do Python (Python Package Index)."
                },
                {
                    id: "py-ch4-q7",
                    type: "multiple-choice",
                    question: "Qual o propósito de 'if __name__ == \"__main__\":' ?",
                    options: ["Garantir que o código só rode se o script for executado diretamente", "Definir o nome do autor", "Conectar ao banco de dados", "Tratar erros de importação"],
                    answer: 0,
                    explanation: "Isso evita que códigos de teste rodem quando o arquivo for apenas importado como um módulo por outro script."
                },
                {
                    id: "py-ch4-q8",
                    type: "multiple-choice",
                    question: "Qual módulo padrão você usaria para trabalhar com datas e horários?",
                    options: ["time", "date", "datetime", "calendar"],
                    answer: 2,
                    explanation: "`datetime` é a biblioteca mais completa para manipulação de datas e horas."
                },
                {
                    id: "py-ch4-q9",
                    type: "multiple-choice",
                    question: "Como você importa todas as funções de um módulo de uma vez (não recomendado)?",
                    options: ["import math all", "from math import *", "import * from math", "include math.*"],
                    answer: 1,
                    explanation: "O `*` importa tudo, mas pode causar conflitos de nomes (poluição do namespace)."
                },
                {
                    id: "py-ch4-q10",
                    type: "multiple-choice",
                    question: "Onde o Python procura por módulos quando você usa 'import'?",
                    options: ["Apenas na pasta atual", "Em uma lista de diretórios chamada sys.path", "Apenas no Google", "No Desktop"],
                    answer: 1,
                    explanation: "`sys.path` inclui o diretório do script, variáveis de ambiente e pastas da biblioteca padrão."
                }
            ],
            "py-ch5": [
                {
                    id: "py-ch5-q1",
                    type: "multiple-choice",
                    question: "Como você transforma uma string em letras maiúsculas em Python?",
                    options: ["upper()", "toUpperCase()", "capitalize()", "big()"],
                    answer: 0,
                    explanation: "O método `.upper()` retorna uma cópia da string com todos os caracteres em maiúsculo."
                },
                {
                    id: "py-ch5-q2",
                    type: "multiple-choice",
                    question: "O que o método '.strip()' faz?",
                    options: ["Deleta a string", "Remove espaços em branco no início e no fim da string", "Inverte a string", "Transforma em minúsculo"],
                    answer: 1,
                    explanation: "Útil para limpar entradas de usuário que podem vir com espaços acidentais."
                },
                {
                    id: "py-ch5-q3",
                    type: "multiple-choice",
                    question: "Como você obtém o primeiro caractere de uma string 's'?",
                    options: ["s(0)", "s[1]", "s[0]", "s.first()"],
                    answer: 2,
                    explanation: "Python usa indexação baseada em zero para acessar caracteres em uma sequência."
                },
                {
                    id: "py-ch5-q4",
                    type: "multiple-choice",
                    question: "Qual o resultado de 'Python'[1:4] ?",
                    options: ["Pyth", "yth", "ytho", "ytho"],
                    answer: 1,
                    explanation: "O 'slicing' (fatiamento) `[1:4]` pega do índice 1 até o 3 (o final é exclusivo)."
                },
                {
                    id: "py-ch5-q5",
                    type: "multiple-choice",
                    question: "Qual função retorna o tamanho (quantidade de caracteres) de uma string?",
                    options: ["length()", "size()", "count()", "len()"],
                    answer: 3,
                    explanation: "A função integrada `len()` funciona para strings, listas, dicionários e mais."
                },
                {
                    id: "py-ch5-q6",
                    type: "multiple-choice",
                    question: "Como substituir todas as ocorrências de 'A' por 'B' em uma string?",
                    options: ["s.replace('A', 'B')", "s.change('A', 'B')", "s.swap('A', 'B')", "update(s, 'A', 'B')"],
                    answer: 0,
                    explanation: "Strings em Python são imutáveis, então `.replace()` retorna uma NOVA string com as mudanças."
                },
                {
                    id: "py-ch5-q7",
                    type: "multiple-choice",
                    question: "Qual método divide uma string em uma LISTA com base em um separador?",
                    options: ["divide()", "break()", "split()", "partition()"],
                    answer: 2,
                    explanation: "Por padrão, `.split()` divide a string por espaços em branco."
                },
                {
                    id: "py-ch5-q8",
                    type: "multiple-choice",
                    question: "Como verificar se uma string contém apenas números?",
                    options: ["isnumber()", "isdigit()", "isnumeric", "check_int()"],
                    answer: 1,
                    explanation: "`.isdigit()` retorna True se todos os caracteres forem numéricos."
                },
                {
                    id: "py-ch5-q9",
                    type: "multiple-choice",
                    question: "O que acontece se você tentar acessar um índice que não existe (ex: 'Oi'[10])?",
                    options: ["Retorna None", "Retorna uma string vazia", "Gera um IndexError", "Retorna o último caractere"],
                    answer: 2,
                    explanation: "Acessar índices fora do limite causa um erro de execução (exception)."
                },
                {
                    id: "py-ch5-q10",
                    type: "multiple-choice",
                    question: "Como você cria uma string que ocupa múltiplas linhas sem usar '\\n'?",
                    options: ["Usando aspas triplas (\"\"\" ou ''')", "Usando parênteses", "Usando colchetes", "Não é possível"],
                    answer: 0,
                    explanation: "Aspas triplas preservam as quebras de linha exatamente como digitadas."
                }
            ],
            "py-ch6": [
                {
                    id: "py-ch6-q1",
                    type: "multiple-choice",
                    question: "Como você escreve o 'senão se' em Python?",
                    options: ["else if", "elseif", "elif", "if else"],
                    answer: 2,
                    explanation: "`elif` é a forma abreviada de `else if` no Python, usada para verificar múltiplas condições."
                },
                {
                    id: "py-ch6-q2",
                    type: "multiple-choice",
                    question: "O que é obrigatório em Python para indicar o bloco de código de um 'if'?",
                    options: ["Chaves {}", "Parênteses ()", "Indentação (espaços/tab)", "Ponto e vírgula ;"],
                    answer: 2,
                    explanation: "Python usa a indentação para definir escopo, tornando o código mais limpo e legível."
                },
                {
                    id: "py-ch6-q3",
                    type: "multiple-choice",
                    question: "Qual o resultado de: if 0: print('A') else: print('B') ?",
                    options: ["A", "B", "Error", "None"],
                    answer: 1,
                    explanation: "Em Python, o número 0 é avaliado como False, então o bloco 'else' é executado."
                },
                {
                    id: "py-ch6-q4",
                    type: "multiple-choice",
                    question: "Como escrever uma condição 'se x estiver entre 1 e 10' de forma simplificada no Python?",
                    options: ["if 1 < x < 10:", "if x > 1 and x < 10:", "ambas as acima", "if x in range(1, 10):"],
                    answer: 2,
                    explanation: "Python permite encadear comparações como `1 < x < 10`, o que é muito intuitivo."
                },
                {
                    id: "py-ch6-q5",
                    type: "multiple-choice",
                    question: "Como verificar se uma variável é 'None'?",
                    options: ["if x == None:", "if x is None:", "ambas as acima", "if None(x):"],
                    answer: 1,
                    explanation: "Embora `==` funcione, a convenção do Python (PEP 8) recomenda usar `is None` para identidade."
                },
                {
                    id: "py-ch6-q6",
                    type: "multiple-choice",
                    question: "Qual o operador ternário em Python para: status = 'Maior' se idade >= 18 senão 'Menor'?",
                    options: ["status = idade >= 18 ? 'Maior' : 'Menor'", "status = 'Maior' if idade >= 18 else 'Menor'", "if idade >= 18: status = 'Maior' else 'Menor'", "status = (idade >= 18) 'Maior', 'Menor'"],
                    answer: 1,
                    explanation: "O Python usa uma sintaxe de expressão condicional clara: `valor_se_verdadeiro if condição else valor_se_falso`."
                },
                {
                    id: "py-ch6-q7",
                    type: "multiple-choice",
                    question: "O que acontece se você deixar um bloco 'if' vazio sem nenhuma linha de código?",
                    options: ["O programa pula", "Gera um IndentationError", "Retorna None", "O computador explode"],
                    answer: 1,
                    explanation: "Blocos vazios não são permitidos. Você deve usar a palavra-chave `pass` se não quiser fazer nada."
                },
                {
                    id: "py-ch6-q8",
                    type: "multiple-choice",
                    question: "Como verificar se uma lista 'itens' NÃO está vazia?",
                    options: ["if itens:", "if len(itens) > 0:", "ambas as acima", "if not itens.empty():"],
                    answer: 2,
                    explanation: "Listas com elementos são avaliadas como True. `if itens:` é a forma mais 'pythônica'."
                },
                {
                    id: "py-ch6-q9",
                    type: "multiple-choice",
                    question: "Qual o resultado de: if 'a' in 'banana': print('Sim') ?",
                    options: ["Sim", "Nada acontece", "Error", "False"],
                    answer: 0,
                    explanation: "O operador `in` verifica se uma substring existe dentro de outra string."
                },
                {
                    id: "py-ch6-q10",
                    type: "multiple-choice",
                    question: "Qual palavra-chave foi introduzida no Python 3.10 para controle de fluxo similar ao switch/case?",
                    options: ["switch", "case", "match", "select"],
                    answer: 2,
                    explanation: "`match` permite realizar o Structural Pattern Matching, uma adição poderosa à linguagem."
                }
            ],
            "py-ch7": [
                {
                    id: "py-ch7-q1",
                    type: "multiple-choice",
                    question: "Qual função você usaria para converter uma entrada de texto em um número decimal?",
                    options: ["int()", "str()", "float()", "decimal()"],
                    answer: 2,
                    explanation: "A função `float()` converte uma string ou número em um ponto flutuante (número com decimais)."
                },
                {
                    id: "py-ch7-q2",
                    type: "multiple-choice",
                    question: "O que a função 'input()' sempre retorna por padrão?",
                    options: ["Um número inteiro", "Uma string", "Um booleano", "Depende do que o usuário digitar"],
                    answer: 1,
                    explanation: "Mesmo que o usuário digite um número, o `input()` o captura como texto (string)."
                },
                {
                    id: "py-ch7-q3",
                    type: "multiple-choice",
                    question: "Como você imprime 'A' e 'B' na mesma linha separados por um hífen?",
                    options: ["print('A', 'B', sep='-')", "print('A' + '-' + 'B')", "ambas as acima", "print('A', '-', 'B')"],
                    answer: 2,
                    explanation: "Você pode usar o parâmetro `sep` ou concatenar strings manualmente."
                },
                {
                    id: "py-ch7-q4",
                    type: "multiple-choice",
                    question: "Para que serve o parâmetro 'end' na função print?",
                    options: ["Para terminar o programa", "Para definir o que será impresso ao final (por padrão é uma nova linha \\n)", "Para fechar um arquivo", "Para inverter a string"],
                    answer: 1,
                    explanation: "Usar `end=' '` permite que o próximo `print` continue na mesma linha."
                },
                {
                    id: "py-ch7-q5",
                    type: "multiple-choice",
                    question: "Qual o modo correto de abrir um arquivo apenas para LEITURA?",
                    options: ["open('file.txt', 'w')", "open('file.txt', 'r')", "open('file.txt', 'a')", "open('file.txt', 'x')"],
                    answer: 1,
                    explanation: "O modo 'r' significa 'read' (leitura)."
                },
                {
                    id: "py-ch7-q6",
                    type: "multiple-choice",
                    question: "Qual a vantagem de usar o bloco 'with open(...) as f:' ?",
                    options: ["O código roda mais rápido", "O arquivo é fechado automaticamente mesmo se ocorrer um erro", "Permite ler arquivos protegidos", "Não precisa de aspas"],
                    answer: 1,
                    explanation: "É uma boa prática (gerenciador de contexto) para evitar vazamento de recursos."
                },
                {
                    id: "py-ch7-q7",
                    type: "multiple-choice",
                    question: "Qual método lê TODO o conteúdo de um arquivo de uma vez como uma única string?",
                    options: ["f.read()", "f.readline()", "f.readlines()", "f.all()"],
                    answer: 0,
                    explanation: "`.read()` lê o arquivo inteiro, enquanto `.readline()` lê apenas uma linha por vez."
                },
                {
                    id: "py-ch7-q8",
                    type: "multiple-choice",
                    question: "O que o modo 'a' faz ao abrir um arquivo?",
                    options: ["Apaga o conteúdo e escreve do zero", "Abre o arquivo e adiciona conteúdo ao final (append)", "Abre para leitura", "Gera um alerta"],
                    answer: 1,
                    explanation: "O modo 'append' (anexar) preserva o conteúdo existente."
                },
                {
                    id: "py-ch7-q9",
                    type: "multiple-choice",
                    question: "Como você escreve o texto 'Olá' dentro de um arquivo aberto como 'f'?",
                    options: ["f.print('Olá')", "f.write('Olá')", "f.add('Olá')", "f.save('Olá')"],
                    answer: 1,
                    explanation: "O método `.write()` é usado para inserir strings no arquivo."
                },
                {
                    id: "py-ch7-q10",
                    type: "multiple-choice",
                    question: "Por que é importante usar 'f.close()' se você NÃO usar o bloco 'with'?",
                    options: ["Para economizar eletricidade", "Para garantir que os dados sejam salvos e liberar memória do sistema", "Para o Python não travar", "Não é importante"],
                    answer: 1,
                    explanation: "Arquivos abertos consomem recursos do sistema e podem não salvar mudanças se não forem fechados."
                }
            ],
            "py-ch8": [
                {
                    id: "py-ch8-q1",
                    type: "multiple-choice",
                    question: "Qual função gera uma sequência de números para usar em um laço FOR?",
                    options: ["sequence()", "list()", "range()", "generate()"],
                    answer: 2,
                    explanation: "A função `range()` é comumente usada para iterar um número específico de vezes em loops FOR."
                },
                {
                    id: "py-ch8-q2",
                    type: "multiple-choice",
                    question: "Qual a principal diferença entre 'for' e 'while'?",
                    options: ["'for' é mais rápido", "'while' é usado quando não sabemos o número exato de repetições", "'for' só funciona com números", "Não há diferença"],
                    answer: 1,
                    explanation: "O `for` geralmente percorre sequências conhecidas, enquanto o `while` depende de uma condição lógica."
                },
                {
                    id: "py-ch8-q3",
                    type: "multiple-choice",
                    question: "Para que serve a palavra-chave 'break'?",
                    options: ["Para pausar o programa por 1 segundo", "Para sair imediatamente do laço de repetição", "Para pular apenas a iteração atual", "Para reiniciar o loop"],
                    answer: 1,
                    explanation: "O `break` interrompe a execução do loop e passa para a próxima linha fora dele."
                },
                {
                    id: "py-ch8-q4",
                    type: "multiple-choice",
                    question: "Para que serve a palavra-chave 'continue'?",
                    options: ["Para sair do loop", "Para ignorar o resto do código no loop e pular para a próxima iteração", "Para parar o programa", "Para repetir a mesma iteração"],
                    answer: 1,
                    explanation: "O `continue` encerra a iteração atual e volta para o topo do loop para a próxima."
                },
                {
                    id: "py-ch8-q5",
                    type: "multiple-choice",
                    question: "Como você obtém o índice e o valor simultaneamente ao percorrer uma lista?",
                    options: ["enumerate(lista)", "index(lista)", "zip(lista)", "list(lista)"],
                    answer: 0,
                    explanation: "A função `enumerate()` retorna tuplas contendo `(índice, valor)`."
                },
                {
                    id: "py-ch8-q6",
                    type: "multiple-choice",
                    question: "Qual o resultado de 'range(2, 10, 2)'?",
                    options: ["[2, 3, 4, 5, 6, 7, 8, 9]", "[2, 4, 6, 8]", "[2, 4, 6, 8, 10]", "[0, 2, 4, 6, 8]"],
                    answer: 1,
                    explanation: "Começa em 2, para antes de 10, com passo de 2 em 2."
                },
                {
                    id: "py-ch8-q7",
                    type: "multiple-choice",
                    question: "O que acontece se a condição do 'while' for sempre True e não houver 'break'?",
                    options: ["O programa termina normalmente", "Ocorre um erro de sintaxe", "Cria um loop infinito", "O Python fecha sozinho"],
                    answer: 2,
                    explanation: "Loops infinitos consomem processamento e podem travar a aplicação."
                },
                {
                    id: "py-ch8-q8",
                    type: "multiple-choice",
                    question: "Como você faria um loop percorrer uma lista de trás para frente?",
                    options: ["for x in reversed(lista):", "for x in lista.back():", "for x in lista.reverse():", "for x in flip(lista):"],
                    answer: 0,
                    explanation: "A função `reversed()` retorna um iterador que percorre a sequência na ordem inversa."
                },
                {
                    id: "py-ch8-q9",
                    type: "multiple-choice",
                    question: "Qual a sintaxe básica de uma 'List Comprehension' para criar uma lista de quadrados?",
                    options: ["[x*x for x in range(5)]", "[for x in range(5): x*x]", "list(x*x for x in range(5))", "{x*x for x in range(5)}"],
                    answer: 0,
                    explanation: "List comprehensions oferecem uma sintaxe concisa para criar listas baseadas em iteráveis."
                },
                {
                    id: "py-ch8-q10",
                    type: "multiple-choice",
                    question: "Para que serve o 'else' em um laço de repetição?",
                    options: ["Executa se o loop terminar normalmente (sem interrupção por break)", "Executa se o loop encontrar um erro", "É obrigatório em todos os loops", "Substitui o while"],
                    answer: 0,
                    explanation: "O bloco `else` no loop é útil para cenários de busca onde você quer saber se nada foi encontrado."
                }
            ],
            "py-ch9": [
                {
                    id: "py-ch9-q1",
                    type: "multiple-choice",
                    question: "Qual método você usaria para adicionar um elemento ao final de uma LISTA em Python?",
                    options: ["add()", "push()", "append()", "insert()"],
                    answer: 2,
                    explanation: "O método `.append()` adiciona um único item ao final de uma lista existente."
                },
                {
                    id: "py-ch9-q2",
                    type: "multiple-choice",
                    question: "Como você obtém o ÚLTIMO elemento de uma lista sem saber o seu tamanho?",
                    options: ["lista[last]", "lista[-1]", "lista.end()", "lista[len(lista)]"],
                    answer: 1,
                    explanation: "O Python suporta indexação negativa; `-1` refere-se ao último item, `-2` ao penúltimo, e assim por diante."
                },
                {
                    id: "py-ch9-q3",
                    type: "multiple-choice",
                    question: "Qual a principal diferença entre uma Lista e uma Tupla?",
                    options: ["Listas são mais rápidas", "Tuplas são mutáveis e Listas são imutáveis", "Listas são mutáveis e Tuplas são imutáveis", "Não há diferença"],
                    answer: 2,
                    explanation: "Uma vez criada, você não pode alterar os elementos de uma tupla (imutável), enquanto listas podem ser modificadas livremente."
                },
                {
                    id: "py-ch9-q4",
                    type: "multiple-choice",
                    question: "Como você remove um elemento de uma lista pelo seu VALOR (ex: remover a string 'Maçã')?",
                    options: ["lista.delete('Maçã')", "lista.remove('Maçã')", "lista.pop('Maçã')", "del lista['Maçã']"],
                    answer: 1,
                    explanation: "O método `.remove()` busca o valor e o remove. Se houver duplicatas, apenas a primeira é removida."
                },
                {
                    id: "py-ch9-q5",
                    type: "multiple-choice",
                    question: "O que o método '.pop()' faz?",
                    options: ["Remove e retorna o último item da lista", "Limpa a lista inteira", "Adiciona um item no início", "Inverte a ordem dos itens"],
                    answer: 0,
                    explanation: "`.pop()` é útil quando você precisa usar o valor removido logo em seguida."
                },
                {
                    id: "py-ch9-q6",
                    type: "multiple-choice",
                    question: "Como você insere um elemento em uma posição específica (ex: no índice 0)?",
                    options: ["lista.append(0, 'item')", "lista.insert(0, 'item')", "lista[0] = 'item'", "lista.add(0, 'item')"],
                    answer: 1,
                    explanation: "Diferente do `append`, o `insert` permite escolher onde o novo elemento deve ficar."
                },
                {
                    id: "py-ch9-q7",
                    type: "multiple-choice",
                    question: "Como você criaria uma tupla com apenas um elemento?",
                    options: ["item = (5)", "item = [5]", "item = (5,)", "item = tuple(5)"],
                    answer: 2,
                    explanation: "Sem a vírgula, o Python interpreta os parênteses apenas como precedência matemática (um simples inteiro)."
                },
                {
                    id: "py-ch9-q8",
                    type: "multiple-choice",
                    question: "Qual função retorna a soma de todos os números de uma lista?",
                    options: ["total()", "count()", "add()", "sum()"],
                    answer: 3,
                    explanation: "A função integrada `sum()` é muito eficiente para somar iteráveis numéricos."
                },
                {
                    id: "py-ch9-q9",
                    type: "multiple-choice",
                    question: "Qual a diferença entre 'lista.sort()' e 'sorted(lista)'?",
                    options: ["Nenhuma", "'sort()' altera a lista original, 'sorted()' retorna uma nova lista ordenada", "'sorted()' altera a original, 'sort()' retorna nova", "'sort()' só funciona com números"],
                    answer: 1,
                    explanation: "`.sort()` é um método 'in-place', enquanto `sorted()` é uma função que preserva o original."
                },
                {
                    id: "py-ch9-q10",
                    type: "multiple-choice",
                    question: "O que acontece ao usar o operador '+' entre duas listas?",
                    options: ["Soma os valores matematicamente", "Gera um erro", "Concatena as duas listas em uma nova", "Retorna um booleano"],
                    answer: 2,
                    explanation: "O operador `+` para listas funciona como a concatenação de strings."
                }
            ],
            "py-ch10": [
                {
                    id: "py-ch10-q1",
                    type: "multiple-choice",
                    question: "Qual palavra-chave é usada para definir uma função em Python?",
                    options: ["function", "def", "func", "define"],
                    answer: 1,
                    explanation: "Em Python, usamos `def` (abreviação de define) para declarar uma nova função."
                },
                {
                    id: "py-ch10-q2",
                    type: "multiple-choice",
                    question: "Para que serve a palavra-chave 'return'?",
                    options: ["Para parar a execução da função e enviar um valor de volta", "Para imprimir um valor", "Para repetir a função", "Para definir o nome da função"],
                    answer: 0,
                    explanation: "`return` finaliza a função e devolve o resultado para quem a chamou."
                },
                {
                    id: "py-ch10-q3",
                    type: "multiple-choice",
                    question: "O que acontece se uma função não tiver a palavra-chave 'return'?",
                    options: ["Gera um erro", "Não retorna nada", "Retorna 'None'", "Retorna 0"],
                    answer: 2,
                    explanation: "Em Python, toda função retorna implicitamente `None` se nenhum outro valor for especificado."
                },
                {
                    id: "py-ch10-q4",
                    type: "multiple-choice",
                    question: "Como você define um valor padrão para um parâmetro (ex: 'nome' padrão é 'Visitante')?",
                    options: ["def ola(nome='Visitante'):", "def ola(nome : 'Visitante'):", "def ola(set nome='Visitante'):", "def ola(default nome='Visitante'):"],
                    answer: 0,
                    explanation: "Parâmetros padrão tornam os argumentos opcionais na chamada da função."
                },
                {
                    id: "py-ch10-q5",
                    type: "multiple-choice",
                    question: "Para que servem os 'docstrings' em uma função?",
                    options: ["Para decorar o código", "Para documentar o que a função faz (acessível via help())", "Para proteger o código contra hackers", "Para definir variáveis globais"],
                    answer: 1,
                    explanation: "Docstrings são strings literais escritas logo após a definição da função usando aspas triplas."
                },
                {
                    id: "py-ch10-q6",
                    type: "multiple-choice",
                    question: "O que significa o parâmetro '*args' na definição de uma função?",
                    options: ["Que a função aceita apenas argumentos obrigatórios", "Que a função pode receber um número variável de argumentos posicionais", "Que os argumentos serão multiplicados", "Que é um erro de sintaxe"],
                    answer: 1,
                    explanation: "O `*` empacota os argumentos extras em uma tupla."
                },
                {
                    id: "py-ch10-q7",
                    type: "multiple-choice",
                    question: "O que significa o parâmetro '**kwargs'?",
                    options: ["Recebe argumentos nomeados (keywords) como um dicionário", "Recebe dois argumentos obrigatoriamente", "Multiplica o valor por 100", "Define uma classe"],
                    answer: 0,
                    explanation: "O `**` permite capturar argumentos do tipo `chave=valor`."
                },
                {
                    id: "py-ch10-q8",
                    type: "multiple-choice",
                    question: "Uma variável criada dentro de uma função pode ser acessada fora dela?",
                    options: ["Sim, sempre", "Sim, se usarmos global", "Não, por padrão o escopo é local", "Apenas se for uma lista"],
                    answer: 2,
                    explanation: "Variáveis locais 'nascem' e 'morrem' dentro da função."
                },
                {
                    id: "py-ch10-q9",
                    type: "multiple-choice",
                    question: "O que é uma função 'lambda'?",
                    options: ["Uma função muito longa", "Uma função anônima de uma única linha", "Uma função que gera erros de propósito", "Um tipo de dado numérico"],
                    answer: 1,
                    explanation: "Lambdas são úteis para operações simples e rápidas, geralmente usadas com `map` ou `filter`."
                },
                {
                    id: "py-ch10-q10",
                    type: "multiple-choice",
                    question: "Em Python, as funções são tratadas como objetos de 'primeira classe'. O que isso significa?",
                    options: ["Que são mais importantes que variáveis", "Que podem ser passadas como argumentos para outras funções", "Que só funcionam na classe principal", "Que rodam sempre primeiro"],
                    answer: 1,
                    explanation: "Isso permite programação funcional potente, permitindo funções que criam ou operam sobre outras funções."
                }
            ],
            "py-ch11": [
                {
                    id: "py-ch11-q1",
                    type: "multiple-choice",
                    question: "Como você importa apenas uma função específica (ex: 'sqrt') de um módulo (ex: 'math')?",
                    options: ["import math.sqrt", "from math import sqrt", "fetch sqrt from math", "using math (sqrt)"],
                    answer: 1,
                    explanation: "A sintaxe `from modulo import componente` permite importar partes específicas de um módulo sem carregar tudo."
                },
                {
                    id: "py-ch11-q2",
                    type: "multiple-choice",
                    question: "O que é um 'pacote' (package) em Python?",
                    options: ["Um arquivo .zip", "Um diretório contendo um arquivo __init__.py", "Um script com mais de 1000 linhas", "Uma biblioteca instalada via pip"],
                    answer: 1,
                    explanation: "O arquivo `__init__.py` indica ao Python que aquele diretório deve ser tratado como um pacote."
                },
                {
                    id: "py-ch11-q3",
                    type: "multiple-choice",
                    question: "Como você importa um módulo chamado 'utilidades' que está dentro de um pacote chamado 'meu_projeto'?",
                    options: ["import meu_projeto.utilidades", "from meu_projeto import utilidades", "ambas as acima", "load meu_projeto/utilidades"],
                    answer: 2,
                    explanation: "Ambas as formas são válidas para acessar módulos dentro de pacotes."
                },
                {
                    id: "py-ch11-q4",
                    type: "multiple-choice",
                    question: "Para que serve a palavra-chave 'as' na importação?",
                    options: ["Para definir o caminho do arquivo", "Para dar um apelido (alias) ao módulo ou função", "Para importar como string", "Para esconder o módulo"],
                    answer: 1,
                    explanation: "Ex: `import pandas as pd` economiza tempo de digitação e evita conflitos de nomes."
                },
                {
                    id: "py-ch11-q5",
                    type: "multiple-choice",
                    question: "Qual o propósito do arquivo '__init__.py' (mesmo que vazio)?",
                    options: ["Inicializar o sistema operacional", "Executar o código principal", "Marcar o diretório como um pacote Python", "Configurar o banco de dados"],
                    answer: 2,
                    explanation: "Nas versões modernas do Python ele pode ser opcional, mas ainda é a forma padrão de marcar pacotes."
                },
                {
                    id: "py-ch11-q6",
                    type: "multiple-choice",
                    question: "O que acontece se você importar o mesmo módulo duas vezes no mesmo script?",
                    options: ["Gera um erro de 'DuplicatedImport'", "O Python importa o módulo novamente do disco", "O Python usa a versão já carregada na memória (sys.modules)", "O computador trava"],
                    answer: 2,
                    explanation: "O Python é eficiente e carrega o módulo apenas uma vez, não importa quantas vezes o `import` apareça."
                },
                {
                    id: "py-ch11-q7",
                    type: "multiple-choice",
                    question: "Como realizar uma importação relativa do módulo 'config' no mesmo diretório?",
                    options: ["from . import config", "import .config", "from current import config", "import self.config"],
                    answer: 0,
                    explanation: "O ponto `.` refere-se ao pacote atual em importações relativas."
                },
                {
                    id: "py-ch11-q8",
                    type: "multiple-choice",
                    question: "Qual variável de sistema contém a lista de diretórios onde o Python procura por módulos?",
                    options: ["sys.path", "os.directories", "python.lib", "env.path"],
                    answer: 0,
                    explanation: "Você pode até adicionar novos caminhos manualmente à lista `sys.path`."
                },
                {
                    id: "py-ch11-q9",
                    type: "multiple-choice",
                    question: "Como recarregar um módulo que foi alterado sem fechar o console Python?",
                    options: ["importlib.reload(modulo)", "reload modulo", "refresh(modulo)", "import modulo again"],
                    answer: 0,
                    explanation: "A função `reload` do módulo `importlib` é essencial para desenvolvimento em REPL."
                },
                {
                    id: "py-ch11-q10",
                    type: "multiple-choice",
                    question: "O que é a 'Standard Library' (Biblioteca Padrão) do Python?",
                    options: ["Uma biblioteca paga", "O conjunto de módulos que já vem instalados com o Python", "Livros sobre Python", "O manual oficial"],
                    answer: 1,
                    explanation: "Python é conhecido por ter 'baterias incluídas', oferecendo módulos para quase tudo por padrão."
                }
            ],
            "py-ch12": [
                {
                    id: "py-ch12-q1",
                    type: "multiple-choice",
                    question: "Como você captura uma exceção em Python para evitar que o programa pare?",
                    options: ["try...catch", "try...except", "attempt...catch", "if error:"],
                    answer: 1,
                    explanation: "O Python utiliza o bloco `try...except` para gerenciar exceções e erros durante a execução."
                },
                {
                    id: "py-ch12-q2",
                    type: "multiple-choice",
                    question: "Qual bloco de código SEMPRE é executado, ocorrendo erro ou não?",
                    options: ["except", "else", "finally", "always"],
                    answer: 2,
                    explanation: "O `finally` é ideal para fechar arquivos ou liberar recursos, independentemente de falhas."
                },
                {
                    id: "py-ch12-q3",
                    type: "multiple-choice",
                    question: "Para que serve o bloco 'else' em um conjunto try/except?",
                    options: ["Executa se ocorrer um erro", "Executa se NÃO ocorrer nenhuma exceção no try", "É igual ao finally", "Define o erro padrão"],
                    answer: 1,
                    explanation: "O `else` ajuda a separar o código que pode falhar da lógica que deve seguir o sucesso."
                },
                {
                    id: "py-ch12-q4",
                    type: "multiple-choice",
                    question: "Como capturar o objeto da exceção para ler a mensagem de erro?",
                    options: ["except Exception as e:", "except e as Exception:", "catch(e):", "if error(e):"],
                    answer: 0,
                    explanation: "Usar `as e` permite acessar detalhes do erro, como a mensagem técnica."
                },
                {
                    id: "py-ch12-q5",
                    type: "multiple-choice",
                    question: "Qual palavra-chave é usada para FORÇAR a ocorrência de uma exceção?",
                    options: ["error", "throw", "raise", "stop"],
                    answer: 2,
                    explanation: "Em Python usamos `raise`, enquanto em linguagens como JS ou Java usa-se `throw`."
                },
                {
                    id: "py-ch12-q6",
                    type: "multiple-choice",
                    question: "O que acontece se você usar um 'except:' sem especificar o tipo de erro?",
                    options: ["Gera um erro de compilação", "Captura absolutamente qualquer erro (não recomendado)", "Captura apenas erros de sintaxe", "Não faz nada"],
                    answer: 1,
                    explanation: "Isso é desencorajado porque pode esconder bugs inesperados que você não pretendia tratar."
                },
                {
                    id: "py-ch12-q7",
                    type: "multiple-choice",
                    question: "Como você captura múltiplos erros específicos de formas diferentes?",
                    options: ["Usando vários blocos 'except'", "Usando vírgulas no try", "Não é possível", "Usando if/else dentro do except"],
                    answer: 0,
                    explanation: "Você pode ter um `except ValueError:` seguido de um `except ZeroDivisionError:`, etc."
                },
                {
                    id: "py-ch12-q8",
                    type: "multiple-choice",
                    question: "Qual erro ocorre ao tentar dividir um número por zero?",
                    options: ["DivideError", "ZeroDivisionError", "MathError", "NullError"],
                    answer: 1,
                    explanation: "O Python interrompe a execução se você tentar dividir por 0 sem tratamento."
                },
                {
                    id: "py-ch12-q9",
                    type: "multiple-choice",
                    question: "Qual o erro comum ao tentar acessar uma chave que não existe em um dicionário?",
                    options: ["KeyError", "NotFoundError", "DictError", "IndexError"],
                    answer: 0,
                    explanation: "Diferente de listas (IndexError), dicionários lançam um `KeyError`."
                },
                {
                    id: "py-ch12-q10",
                    type: "multiple-choice",
                    question: "Para que serve a palavra-chave 'assert'?",
                    options: ["Para definir uma variável", "Para testar se uma condição é verdadeira e disparar um erro se for falsa", "Para acelerar o código", "Para comentar várias linhas"],
                    answer: 1,
                    explanation: "Asserções são usadas principalmente para depuração e testes internos durante o desenvolvimento."
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
                    answer: 1,
                    explanation: "`let` is the modern and safe way to declare mutable variables in JavaScript."
                },
                {
                    id: "js-ch2-q2",
                    type: "multiple-choice",
                    question: "What is the value of x? const x = 5 + '5'",
                    options: ["10", "55", "undefined", "Error"],
                    answer: 1,
                    explanation: "When you add a number to a string, JavaScript converts the number to a string and concatenates them."
                },
                {
                    id: "js-ch2-q3",
                    type: "boolean",
                    question: "Can 'const' variable have its value reassigned?",
                    options: ["True", "False"],
                    answer: 1,
                    explanation: "`const` variables are constants and do not allow reassignment after the initial value."
                },
                {
                    id: "js-ch2-q4",
                    type: "multiple-choice",
                    question: "What is the result of: typeof true?",
                    options: ["string", "number", "boolean", "undefined"],
                    answer: 2,
                    explanation: "`true` and `false` belong to the boolean primitive type."
                },
                {
                    id: "js-ch2-q5",
                    type: "multiple-choice",
                    question: "Which of these is NOT a primitive type?",
                    options: ["String", "Boolean", "Object", "Number"],
                    answer: 2,
                    explanation: "Object is a structural type, not primitive. Primitive types include String, Number, Boolean, Null, Undefined, Symbol, and BigInt."
                },
                {
                    id: "js-ch2-q6",
                    type: "multiple-choice",
                    question: "What is the default value of a variable declared without assignment?",
                    options: ["null", "undefined", "0", "NaN"],
                    answer: 1,
                    explanation: "In JavaScript, if you declare `let x;`, the initial value is set to `undefined`."
                },
                {
                    id: "js-ch2-q7",
                    type: "multiple-choice",
                    question: "Which symbol defines a Template Literal?",
                    options: ["' '", "\" \"", "` `", "| |"],
                    answer: 2,
                    explanation: "We use backticks to create templates that accept variables inside `${}`."
                },
                {
                    id: "js-ch2-q8",
                    type: "multiple-choice",
                    question: "What is the type of: const y = Symbol('id')?",
                    options: ["string", "object", "symbol", "id"],
                    answer: 2,
                    explanation: "Symbol is a primitive type introduced in ES6 to create unique identifiers."
                },
                {
                    id: "js-ch2-q9",
                    type: "boolean",
                    question: "Does JavaScript distinguish between uppercase and lowercase letters (case-sensitive)?",
                    options: ["True", "False"],
                    answer: 0,
                    explanation: "Yes, `myVariable` and `myvariable` are considered different variables."
                },
                {
                    id: "js-ch2-q10",
                    type: "multiple-choice",
                    question: "Which of these variable names is VALID?",
                    options: ["2name", "const", "full_name", "full-name"],
                    answer: 2,
                    explanation: "Variable names can contain letters, numbers, _ or $, but cannot start with numbers nor use hyphens or reserved words."
                }
            ],
            "js-ch3": [
                {
                    id: "js-ch3-q1",
                    type: "multiple-choice",
                    question: "How do you write an IF statement in JavaScript?",
                    options: ["if i = 5 then", "if (i == 5)", "if i == 5", "if i = 5"],
                    answer: 1,
                    explanation: "In JavaScript, the condition of an `if` must be enclosed in parentheses."
                },
                {
                    id: "js-ch3-q2",
                    type: "multiple-choice",
                    question: "How do you write an IF statement to execute code if 'i' is NOT equal to 5?",
                    options: ["if i <> 5", "if (i != 5)", "if i =! 5 then", "if (i <> 5)"],
                    answer: 1,
                    explanation: "The logical operator for 'not equal' is `!=`."
                },
                {
                    id: "js-ch3-q3",
                    type: "boolean",
                    question: "Can the 'else' command be used without a previous 'if'?",
                    options: ["True", "False"],
                    answer: 1,
                    explanation: "The `else` defines the alternative path of an `if`, it has no meaning on its own."
                },
                {
                    id: "js-ch3-q4",
                    type: "multiple-choice",
                    question: "Which logical operator represents 'AND'?",
                    options: ["&", "&&", "and", "||"],
                    answer: 1,
                    explanation: "We use `&&` to check if two or more conditions are true simultaneously."
                },
                {
                    id: "js-ch3-q5",
                    type: "multiple-choice",
                    question: "Which operator represents 'OR'?",
                    options: ["|", "or", "||", "&&"],
                    answer: 2,
                    explanation: "The `||` operator returns true if at least one of the conditions is true."
                },
                {
                    id: "js-ch3-q6",
                    type: "multiple-choice",
                    question: "What is the correct syntax for the ternary operator?",
                    options: ["condition ? value1 : value2", "condition : value1 ? value2", "if condition then value1 else value2", "condition ? value1 | value2"],
                    answer: 0,
                    explanation: "The ternary operator is a shortcut for `if/else`: `test ? if_true : if_false`."
                },
                {
                    id: "js-ch3-q7",
                    type: "multiple-choice",
                    question: "What is the difference between '==' and '=== '?",
                    options: ["None", "== compares value and type, === only value", "== compares only value, === compares value and type", "== is for numbers, === for strings"],
                    answer: 2,
                    explanation: "The `===` operator (strict equal) is safer as it avoids automatic type conversions."
                },
                {
                    id: "js-ch3-q8",
                    type: "multiple-choice",
                    question: "Which keyword ends the execution of a 'switch' block?",
                    options: ["stop", "exit", "break", "end"],
                    answer: 2,
                    explanation: "Without the `break`, the switch would continue executing all following cases (fall-through)."
                },
                {
                    id: "js-ch3-q9",
                    type: "multiple-choice",
                    question: "Which value is considered 'falsy' in JavaScript?",
                    options: ["'false' (string)", "[] (empty array)", "0 (zero)", "{} (empty object)"],
                    answer: 2,
                    explanation: "Values like `0`, `\"\"`, `null`, `undefined`, `NaN`, and `false` are converted to false in boolean contexts."
                },
                {
                    id: "js-ch3-q10",
                    type: "multiple-choice",
                    question: "How do you write a ONE line comment to explain your code?",
                    options: ["/* Comment */", "// Comment", "# Comment", "<!-- Comment -->"],
                    answer: 1,
                    explanation: "Single line comments start with `//`."
                }
            ],
            "js-ch4": [
                {
                    id: "js-ch4-q1",
                    type: "multiple-choice",
                    question: "How do you create a function in JavaScript?",
                    options: ["function myFunction()", "function:myFunction()", "function = myFunction()", "create function()"],
                    answer: 0,
                    explanation: "The standard syntax is the `function` keyword followed by the name and parentheses."
                },
                {
                    id: "js-ch4-q2",
                    type: "multiple-choice",
                    question: "How do you call a function named 'myFunction'?",
                    options: ["call myFunction()", "myFunction()", "call function myFunction()", "execute myFunction()"],
                    answer: 1,
                    explanation: "To execute a function, simply use its name followed by parentheses."
                },
                {
                    id: "js-ch4-q3",
                    type: "multiple-choice",
                    question: "What is the correct syntax for an Arrow Function?",
                    options: ["const f = function() => {}", "const f = () => {}", "const f = => {}", "const f = () -> {}"],
                    answer: 1,
                    explanation: "Arrow functions use the `=>` arrow and are a concise way to write functions."
                },
                {
                    id: "js-ch4-q4",
                    type: "multiple-choice",
                    question: "What happens if a function does not have a 'return' command?",
                    options: ["It returns 0", "It returns null", "It returns undefined", "It throws an error"],
                    answer: 2,
                    explanation: "By default, functions that don't specify a return value return `undefined`."
                },
                {
                    id: "js-ch4-q5",
                    type: "multiple-choice",
                    question: "The values passed to a function during its CALL are called:",
                    options: ["Parameters", "Arguments", "Variables", "Attributes"],
                    answer: 1,
                    explanation: "We call 'parameters' the names in the function definition, and 'arguments' the actual values passed during the call."
                },
                {
                    id: "js-ch4-q6",
                    type: "multiple-choice",
                    question: "How to define a default value for a parameter 'x'?",
                    options: ["function f(x = 10) {}", "function f(x : 10) {}", "function f(x == 10) {}", "function f(default x = 10) {}"],
                    answer: 0,
                    explanation: "In ES6+, we can assign default values directly within the parentheses of the definition."
                },
                {
                    id: "js-ch4-q7",
                    type: "boolean",
                    question: "Can a function be passed as an argument to another function?",
                    options: ["True", "False"],
                    answer: 0,
                    explanation: "Yes, these are called 'Callback Functions'. Functions are first-class citizens in JS."
                },
                {
                    id: "js-ch4-q8",
                    type: "multiple-choice",
                    question: "What is the name of a function that has no name?",
                    options: ["Ghost function", "Secret function", "Anonymous function", "Empty function"],
                    answer: 2,
                    explanation: "Anonymous functions are common in callbacks and function expressions."
                },
                {
                    id: "js-ch4-q9",
                    type: "multiple-choice",
                    question: "Variables declared INSIDE a function:",
                    options: ["Are global", "Are local to the function", "Can be accessed anywhere", "Clear the computer"],
                    answer: 1,
                    explanation: "This is called function scope: they only exist while the function is executing."
                },
                {
                    id: "js-ch4-q10",
                    type: "multiple-choice",
                    question: "What is 'Hoisting' in relation to functions?",
                    options: ["It is deleting the function", "It is allowing the function to be called before its declaration", "It is hiding the function", "It is changing the function type"],
                    answer: 1,
                    explanation: "Function declarations (not expressions) are 'hoisted' to the top of their scope by the JS engine."
                }
            ],
            "js-ch5": [
                {
                    id: "js-ch5-q1",
                    type: "multiple-choice",
                    question: "What is the correct way to create an Array in JavaScript?",
                    options: ["const colors = 'red', 'green', 'blue'", "const colors = (1:'red', 2:'green', 3:'blue')", "const colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "const colors = ['red', 'green', 'blue']"],
                    answer: 3,
                    explanation: "Arrays in JavaScript are defined using square brackets `[]`."
                },
                {
                    id: "js-ch5-q2",
                    type: "multiple-choice",
                    question: "How do you access the first element of an array named 'cars'?",
                    options: ["cars[1]", "cars(0)", "cars[0]", "cars.first"],
                    answer: 2,
                    explanation: "Arrays in JavaScript have zero-based indexing, so the first element is at index 0."
                },
                {
                    id: "js-ch5-q3",
                    type: "multiple-choice",
                    question: "How do you find the number of elements in an array?",
                    options: ["list.count()", "list.size", "list.length", "list.index"],
                    answer: 2,
                    explanation: "The `.length` property returns the total number of items in an array."
                },
                {
                    id: "js-ch5-q4",
                    type: "multiple-choice",
                    question: "Which method adds a new element to the END of an array?",
                    options: ["push()", "pop()", "unshift()", "shift()"],
                    answer: 0,
                    explanation: "The `push()` method inserts one or more elements at the end of the array."
                },
                {
                    id: "js-ch5-q5",
                    type: "multiple-choice",
                    question: "Which method removes the LAST element of an array?",
                    options: ["push()", "pop()", "unshift()", "shift()"],
                    answer: 1,
                    explanation: "The `pop()` method removes the final element and returns it."
                },
                {
                    id: "js-ch5-q6",
                    type: "multiple-choice",
                    question: "Given the variable 'person', how do we access the 'name' property?",
                    options: ["person.name", "person['name']", "Both options", "person->name"],
                    answer: 2,
                    explanation: "We can use both dot notation and bracket notation (useful when the property name is dynamic)."
                },
                {
                    id: "js-ch5-q7",
                    type: "multiple-choice",
                    question: "How do you create an empty object?",
                    options: ["const obj = []", "const obj = {}", "const obj = ()", "const obj = empty"],
                    answer: 1,
                    explanation: "Literal objects are created using curly braces `{}`."
                },
                {
                    id: "js-ch5-q8",
                    type: "multiple-choice",
                    question: "Which operator is used to destructure an array (Spread Operator)?",
                    options: ["...", "::", ">>>", "&&&"],
                    answer: 0,
                    explanation: "The spread operator `...` allows expanding elements of an array or object."
                },
                {
                    id: "js-ch5-q9",
                    type: "multiple-choice",
                    question: "How to declare an object with properties?",
                    options: ["{ name = 'Ana' }", "{ 'name' ; 'Ana' }", "{ name: 'Ana' }", "{ name -> 'Ana' }"],
                    answer: 2,
                    explanation: "In objects, we use the `key: value` format separated by commas."
                },
                {
                    id: "js-ch5-q10",
                    type: "multiple-choice",
                    question: "Which iteration method does not return anything (just executes a function)?",
                    options: ["map()", "filter()", "forEach()", "reduce()"],
                    answer: 2,
                    explanation: "`forEach()` is focused only on iterating, while `map()` creates a new array."
                }
            ],
            "js-ch6": [
                {
                    id: "js-ch6-q1",
                    type: "multiple-choice",
                    question: "Which method displays a dialog box with a message that prompts for user input?",
                    options: ["alert()", "confirm()", "prompt()", "input()"],
                    answer: 2,
                    explanation: "The `prompt()` method is used to receive text input from the user via the browser."
                },
                {
                    id: "js-ch6-q2",
                    type: "multiple-choice",
                    question: "Which function displays a simple warning message to the user?",
                    options: ["warn()", "alert()", "msg()", "show()"],
                    answer: 1,
                    explanation: "`alert()` freezes script execution until the user clicks OK."
                },
                {
                    id: "js-ch6-q3",
                    type: "multiple-choice",
                    question: "How to ge a confirmation (OK or Cancel) from the user?",
                    options: ["confirm()", "prompt()", "check()", "ask()"],
                    answer: 0,
                    explanation: "`confirm()` returns `true` if OK is clicked and `false` if Cancel is clicked."
                },
                {
                    id: "js-ch6-q4",
                    type: "multiple-choice",
                    question: "When receiving a number via prompt(), it comes as a string. How to convert it to a real number?",
                    options: ["Number(value)", "toInt(value)", "parse(value)", "value.toNumber()"],
                    answer: 0,
                    explanation: "The `Number()` constructor or `parseInt()` are used to convert strings into numbers."
                },
                {
                    id: "js-ch6-q5",
                    type: "multiple-choice",
                    question: "Where are 'console.log()' messages displayed?",
                    options: ["On the user's screen", "In the developer tools (Console)", "In the source code", "On the server"],
                    answer: 1,
                    explanation: "The browser's developer console (F12) is the standard place for debugging logs."
                },
                {
                    id: "js-ch6-q6",
                    type: "multiple-choice",
                    question: "Which method writes DIRECTLY into the HTML document (not recommended today)?",
                    options: ["document.print()", "document.write()", "document.show()", "document.add()"],
                    answer: 1,
                    explanation: "`document.write()` can overwrite all content if used after the page has loaded."
                },
                {
                    id: "js-ch6-q7",
                    type: "multiple-choice",
                    question: "How to prevent a form from reloading the page when submitted?",
                    options: ["event.stop()", "event.preventDefault()", "form.pause()", "window.freeze()"],
                    answer: 1,
                    explanation: "`preventDefault()` cancels the default behavior of the event, such as the reload on submit."
                },
                {
                    id: "js-ch6-q8",
                    type: "multiple-choice",
                    question: "Which property of a text input contains what the user typed?",
                    options: ["text", "content", "value", "data"],
                    answer: 2,
                    explanation: "The `.value` property accesses the current content of form fields."
                },
                {
                    id: "js-ch6-q9",
                    type: "multiple-choice",
                    question: "How do you redirect the user to another page via JS?",
                    options: ["window.go('url')", "window.location.href = 'url'", "document.redirect('url')", "browser.open('url')"],
                    answer: 1,
                    explanation: "Changing `window.location.href` triggers navigation to a new URL."
                },
                {
                    id: "js-ch6-q10",
                    type: "boolean",
                    question: "Does the alert() method allow the user to type text?",
                    options: ["True", "False"],
                    answer: 1,
                    explanation: "Only `prompt()` allows text input. `alert()` only displays information."
                }
            ],
            "js-ch7": [
                {
                    id: "js-ch7-q1",
                    type: "multiple-choice",
                    question: "Which method would you use to select an HTML element by its ID?",
                    options: ["document.querySelector('.id')", "document.getElementById()", "document.getElementsById()", "window.getId()"],
                    answer: 1,
                    explanation: "`document.getElementById()` is the most direct method to select a single element by its ID attribute."
                },
                {
                    id: "js-ch7-q2",
                    type: "multiple-choice",
                    question: "How to select the first element that has the class 'btn'?",
                    options: ["document.select('.btn')", "document.querySelector('.btn')", "document.getElementByClass('btn')", "document.find('.btn')"],
                    answer: 1,
                    explanation: "`querySelector` uses CSS selectors to find elements in the DOM."
                },
                {
                    id: "js-ch7-q3",
                    type: "multiple-choice",
                    question: "What does document.querySelectorAll() return?",
                    options: ["A single element", "A real Array", "A NodeList", "An HTML file"],
                    answer: 2,
                    explanation: "It returns a static collection of nodes (NodeList), which can be iterated but is not exactly a native Array."
                },
                {
                    id: "js-ch7-q4",
                    type: "multiple-choice",
                    question: "How to change only the TEXT of a paragraph (without processing HTML)?",
                    options: ["p.innerHTML = 'v'", "p.content = 'v'", "p.innerText = 'v'", "p.value = 'v'"],
                    answer: 2,
                    explanation: "`innerText` (or `textContent`) sets the textual content, treating tags as plain text."
                },
                {
                    id: "js-ch7-q5",
                    type: "multiple-choice",
                    question: "How to change an element's text color via JS?",
                    options: ["el.color = 'red'", "el.style.color = 'red'", "el.css('color', 'red')", "el.format({color: 'red'})"],
                    answer: 1,
                    explanation: "We access the `.style` object followed by the CSS property in camelCase (where applicable)."
                },
                {
                    id: "js-ch7-q6",
                    type: "multiple-choice",
                    question: "How to create a new 'div' tag in memory?",
                    options: ["document.newElement('div')", "document.createElement('div')", "new Div()", "document.build('div')"],
                    answer: 1,
                    explanation: "`createElement` creates the element, but it only appears on the screen after being attached to the DOM."
                },
                {
                    id: "js-ch7-q7",
                    type: "multiple-choice",
                    question: "Which method inserts an element as the LAST child of another?",
                    options: ["appendChild()", "prepend()", "insertAfter()", "addEnd()"],
                    answer: 0,
                    explanation: "`appendChild()` places the new node at the end of the parent element's child list."
                },
                {
                    id: "js-ch7-q8",
                    type: "multiple-choice",
                    question: "How to remove an element 'el' from the DOM?",
                    options: ["el.delete()", "el.remove()", "el.clear()", "el.hide()"],
                    answer: 1,
                    explanation: "The `.remove()` method deletes the element and its descendants from the document tree."
                },
                {
                    id: "js-ch7-q9",
                    type: "multiple-choice",
                    question: "How to go up one level in the DOM tree from a child?",
                    options: ["el.up()", "el.parent", "el.parentElement", "el.root"],
                    answer: 2,
                    explanation: "The `parentElement` property returns the direct parent node of the current element."
                },
                {
                    id: "js-ch7-q10",
                    type: "multiple-choice",
                    question: "How to add a new CSS class to an element without overwriting existing ones?",
                    options: ["el.class = 'new'", "el.className += 'new'", "el.classList.add('new')", "el.addClass('new')"],
                    answer: 2,
                    explanation: "`classList.add()` is the modern and safe way to handle classes individually."
                }
            ],
            "js-ch8": [
                {
                    id: "js-ch8-q1",
                    type: "multiple-choice",
                    question: "How do you add a click event to a button?",
                    options: ["button.onclick = () => {}", "button.addEventListener('click', () => {})", "button.addEvent('click')", "Both first options are correct"],
                    answer: 3,
                    explanation: "Both `addEventListener` and the `onclick` property can be used, though `addEventListener` is preferred for multiple listeners."
                },
                {
                    id: "js-ch8-q2",
                    type: "multiple-choice",
                    question: "Which property of the 'event' object identifies the element that triggered the event?",
                    options: ["event.sender", "event.target", "event.origin", "event.source"],
                    answer: 1,
                    explanation: "`event.target` is fundamental for event delegation as it points to the exact element clicked."
                },
                {
                    id: "js-ch8-q3",
                    type: "multiple-choice",
                    question: "Which event is triggered when a form is submitted?",
                    options: ["click", "send", "submit", "finish"],
                    answer: 2,
                    explanation: "The `submit` event should be listened to on the `<form>` element, not on the submit button."
                },
                {
                    id: "js-ch8-q4",
                    type: "multiple-choice",
                    question: "Difference between mouseover and mouseenter?",
                    options: ["None", "mouseover triggers when entering children, mouseenter does not", "mouseenter is only for mobile", "mouseover is slower"],
                    answer: 1,
                    explanation: "`mouseenter` does not bubble, making it cleaner for effects on specific elements."
                },
                {
                    id: "js-ch8-q5",
                    type: "multiple-choice",
                    question: "To detect which key was pressed, which event do we use?",
                    options: ["keypress", "keydown", "keytouch", "onclick"],
                    answer: 1,
                    explanation: "`keydown` captures all keys, including shift and arrows, unlike the old keypress."
                },
                {
                    id: "js-ch8-q6",
                    type: "multiple-choice",
                    question: "What happens in 'Event Propagation' (Bubbling)?",
                    options: ["The event disappears", "The event goes up from the child to the parents", "The event goes down from the parent to the children", "The computer restarts"],
                    answer: 1,
                    explanation: "By default, most events 'bubble' from the inside out in the DOM tree."
                },
                {
                    id: "js-ch8-q7",
                    type: "multiple-choice",
                    question: "Which command prevents an event from continuing to bubble up to parents?",
                    options: ["event.stop()", "event.stopPropagation()", "event.end()", "event.freeze()"],
                    answer: 1,
                    explanation: "`stopPropagation()` stops the event's journey to higher elements."
                },
                {
                    id: "js-ch8-q8",
                    type: "multiple-choice",
                    question: "How to ensure code runs only after the ENTIRE page (including images) has loaded?",
                    options: ["DOMContentLoaded", "window.onload", "script.start", "document.finish"],
                    answer: 1,
                    explanation: "`onload` waits for everything, while `DOMContentLoaded` only waits for the HTML to be processed."
                },
                {
                    id: "js-ch8-q9",
                    type: "multiple-choice",
                    question: "To deactivate an event listener added with addEventListener, we use:",
                    options: ["stopEventListener", "removeEventListener", "off()", "deleteListener"],
                    answer: 1,
                    explanation: "You must pass the same event name and the same function reference to remove it."
                },
                {
                    id: "js-ch8-q10",
                    type: "multiple-choice",
                    question: "Which event fires when the value of a <select> or <input> is changed?",
                    options: ["update", "modify", "change", "click"],
                    answer: 2,
                    explanation: "The `change` event is triggered after the user completes the change."
                }
            ],
            "js-ch9": [
                {
                    id: "js-ch9-q1",
                    type: "multiple-choice",
                    question: "Which array function creates a new array with the results of calling a function for every element?",
                    options: ["filter()", "map()", "reduce()", "forEach()"],
                    answer: 1,
                    explanation: "The `map()` method iterates through the original array and returns a new array transformed by the provided function."
                },
                {
                    id: "js-ch9-q2",
                    type: "multiple-choice",
                    question: "How would you filter an array to keep only numbers greater than 10?",
                    options: ["arr.find(x => x > 10)", "arr.filter(x => x > 10)", "arr.map(x => x > 10)", "arr.some(x => x > 10)"],
                    answer: 1,
                    explanation: "`filter()` creates a new array containing only the elements that pass the function's test."
                },
                {
                    id: "js-ch9-q3",
                    type: "multiple-choice",
                    question: "Which method is ideal for calculating the SUM of all items in a numeric array?",
                    options: ["reduce()", "map()", "filter()", "sum()"],
                    answer: 0,
                    explanation: "`reduce()` executes a reducer function on each element, resulting in a single return value."
                },
                {
                    id: "js-ch9-q4",
                    type: "multiple-choice",
                    question: "Difference between find() and filter()?",
                    options: ["None", "find returns the first item, filter returns an array with all matches", "filter is faster", "find removes the item from the array"],
                    answer: 1,
                    explanation: "`find()` stops when it finds the first occurrence, while `filter()` continues until the end."
                },
                {
                    id: "js-ch9-q5",
                    type: "multiple-choice",
                    question: "Which method checks if ALL elements of an array pass a test?",
                    options: ["some()", "any()", "every()", "all()"],
                    answer: 2,
                    explanation: "`every()` returns true only if the function returns true for each of the items."
                },
                {
                    id: "js-ch9-q6",
                    type: "multiple-choice",
                    question: "How to check if there is at least one even number in an array?",
                    options: ["arr.some(x => x % 2 === 0)", "arr.every(x => x % 2 === 0)", "arr.find(x => x % 2 === 0)", "arr.filter(x => x % 2 === 0)"],
                    answer: 0,
                    explanation: "`some()` returns true if at least one condition is met."
                },
                {
                    id: "js-ch9-q7",
                    type: "multiple-choice",
                    question: "Why does '[1, 10, 2].sort()' result in '[1, 10, 2]' and not '[1, 2, 10]'?",
                    options: [
                        "Because sort() converts to string by default",
                        "Because the computer has an error",
                        "Because the array is too small",
                        "Because it lacks parentheses"
                    ],
                    answer: 0,
                    explanation: "Without a compare function, `sort()` orders lexicographically (like text)."
                },
                {
                    id: "js-ch9-q8",
                    type: "multiple-choice",
                    question: "Which method checks if an array has a certain value (returning true or false)?",
                    options: ["has()", "contains()", "includes()", "exists()"],
                    answer: 2,
                    explanation: "`includes()` is the modern and simple way to check for the existence of a value."
                },
                {
                    id: "js-ch9-q9",
                    type: "multiple-choice",
                    question: "What is 'Method Chaining'?",
                    options: ["Using only one method", "Calling one method right after another (ex: .filter().map())", "Deleting methods", "Protecting methods"],
                    answer: 1,
                    explanation: "Since map/filter return new arrays, we can chain them to perform complex transformations."
                },
                {
                    id: "js-ch9-q10",
                    type: "multiple-choice",
                    question: "Main difference between map() and forEach()?",
                    options: ["None", "map() returns a new array, forEach() returns undefined", "forEach() is newer", "map() deletes the original array"],
                    answer: 1,
                    explanation: "Use `map()` when you need to transform data; `forEach()` when you just want to cause side effects."
                }
            ],
            "js-ch10": [
                {
                    id: "js-ch10-q1",
                    type: "multiple-choice",
                    question: "How do you store an item in localStorage?",
                    options: ["localStorage.save('key', 'value')", "localStorage.add('key', 'value')", "localStorage.setItem('key', 'value')", "localStorage.store('key', 'value')"],
                    answer: 2,
                    explanation: "The correct method to save data to the browser's local storage is `setItem()`."
                },
                {
                    id: "js-ch10-q2",
                    type: "multiple-choice",
                    question: "Which method retrieves a value from localStorage?",
                    options: ["getItem()", "fetch()", "pull()", "readValue()"],
                    answer: 0,
                    explanation: "`getItem('key')` returns the value associated with that key or `null` if it doesn't exist."
                },
                {
                    id: "js-ch10-q3",
                    type: "multiple-choice",
                    question: "Difference between removeItem() and clear()?",
                    options: ["None", "removeItem removes a specific key, clear removes EVERYTHING", "clear removes the browser", "removeItem is slower"],
                    answer: 1,
                    explanation: "Use `removeItem()` for specific manipulation and `clear()` when you want to reset all data for your domain."
                },
                {
                    id: "js-ch10-q4",
                    type: "multiple-choice",
                    question: "localStorage only accepts Strings. How to save a JS object?",
                    options: ["localStorage.setObject()", "By converting with JSON.stringify()", "Using double quotes", "It's not possible"],
                    answer: 1,
                    explanation: "We must serialize the object to a String using `JSON.stringify(obj)` before saving."
                },
                {
                    id: "js-ch10-q5",
                    type: "multiple-choice",
                    question: "How to turn a localStorage string back into a JS object?",
                    options: ["JSON.parse()", "JSON.toObject()", "Object.create()", "String.unbox()"],
                    answer: 0,
                    explanation: "`JSON.parse(string)` reconstructs the original object structure."
                },
                {
                    id: "js-ch10-q6",
                    type: "multiple-choice",
                    question: "Difference between localStorage and sessionStorage?",
                    options: ["localStorage is infinite", "sessionStorage expires when closing the tab/window", "localStorage is only for passwords", "There is no difference"],
                    answer: 1,
                    explanation: "`sessionStorage` keeps data only as long as the tab's session lasts."
                },
                {
                    id: "js-ch10-q7",
                    type: "multiple-choice",
                    question: "What is the approximate storage limit of localStorage per domain?",
                    options: ["100 KB", "5 MB", "1 GB", "Unlimited"],
                    answer: 1,
                    explanation: "Most modern browsers limit to around 5MB per origin."
                },
                {
                    id: "js-ch10-q8",
                    type: "boolean",
                    question: "Is localStorage data sent to the server on every HTTP request?",
                    options: ["True", "False"],
                    answer: 1,
                    explanation: "Unlike Cookies, localStorage is purely local and never leaves the browser automatically."
                },
                {
                    id: "js-ch10-q9",
                    type: "multiple-choice",
                    question: "If you close the browser and open it the next day, will localStorage data still be there?",
                    options: ["Yes", "No", "Only if the PC stays on", "Depends on Wi-Fi"],
                    answer: 0,
                    explanation: "Data in localStorage is persistent until deleted via code or by the user."
                },
                {
                    id: "js-ch10-q10",
                    type: "multiple-choice",
                    question: "Where is localStorage data physically located?",
                    options: ["In the cloud", "On the server", "On the user's hard drive (via the browser)", "In RAM memory"],
                    answer: 2,
                    explanation: "The browser manages a local file in the operating system to persist this information."
                }
            ],
            "js-ch11": [
                {
                    id: "js-ch11-q1",
                    type: "multiple-choice",
                    question: "Which keyword is used to make a function available in another file?",
                    options: ["require", "import", "export", "share"],
                    answer: 2,
                    explanation: "We use `export` to expose variables, functions, or classes from a module."
                },
                {
                    id: "js-ch11-q2",
                    type: "multiple-choice",
                    question: "How do you bring only the 'calculate' function from a 'math.js' file?",
                    options: ["import calculate from './math.js'", "import { calculate } from './math.js'", "require('./math.js').calculate", "get calculate from './math.js'"],
                    answer: 1,
                    explanation: "For named exports, we use curly braces `{}` in the import statement."
                },
                {
                    id: "js-ch11-q3",
                    type: "multiple-choice",
                    question: "Main rule about 'export default'?",
                    options: ["It must always be a string", "There can only be one per file", "It cannot be used with functions", "It is mandatory in every file"],
                    answer: 1,
                    explanation: "Each module can have multiple 'named exports', but only a single 'export default'."
                },
                {
                    id: "js-ch11-q4",
                    type: "multiple-choice",
                    question: "How to rename 'sum' to 'addition' during import?",
                    options: ["import { sum as addition }", "import { sum to addition }", "import { sum rename addition }", "import { addition from sum }"],
                    answer: 0,
                    explanation: "The `as` keyword allows avoiding name conflicts by renaming items at the time of importation."
                },
                {
                    id: "js-ch11-q5",
                    type: "multiple-choice",
                    question: "To use ES modules in the browser, what must be in the <script> tag?",
                    options: ["type='text/javascript'", "mode='module'", "type='module'", "async='true'"],
                    answer: 2,
                    explanation: "The `type='module'` attribute tells the browser to process the script as an ES6 module."
                },
                {
                    id: "js-ch11-q6",
                    type: "multiple-choice",
                    question: "How to import EVERYTHING from a file as an object named 'utils'?",
                    options: ["import all as utils from '...'", "import * as utils from '...'", "import { * } as utils from '...'", "utils = require('...')"],
                    answer: 1,
                    explanation: "The `*` (asterisk) selector captures all exports and places them under the defined namespace."
                },
                {
                    id: "js-ch11-q7",
                    type: "boolean",
                    question: "Do JavaScript modules execute in 'Strict Mode' by default?",
                    options: ["True", "False"],
                    answer: 0,
                    explanation: "Yes, modules are always strict, which helps avoid common logic and syntax errors."
                },
                {
                    id: "js-ch11-q8",
                    type: "multiple-choice",
                    question: "What happens to variables declared at the top of a module?",
                    options: ["They become global variables", "They are restricted to the module scope", "They are deleted immediately", "They can be used in any <script>"],
                    answer: 1,
                    explanation: "Modules have their own scope. Nothing 'leaks' to the global scope unless you explicitly export it."
                },
                {
                    id: "js-ch11-q9",
                    type: "multiple-choice",
                    question: "What is the standard file format for modules in modern Node.js environments?",
                    options: [".jsm", ".mjs", ".module", ".es"],
                    answer: 1,
                    explanation: "The `.mjs` extension is often used to differentiate ES modules from CommonJS scripts (.cjs)."
                },
                {
                    id: "js-ch11-q10",
                    type: "multiple-choice",
                    question: "How to import a module asynchronously (only when needed)?",
                    options: ["await import('...')", "import.async('...')", "load('...')", "fetch.module('...')"],
                    answer: 0,
                    explanation: "Dynamic `import()` returns a Promise and is ideal for code splitting and loading resources on demand."
                }
            ],
            "js-ch12": [
                {
                    id: "js-ch12-q1",
                    type: "multiple-choice",
                    question: "Which keyword allows you to create a class that inherits from another?",
                    options: ["inherits", "extends", "from", "super"],
                    answer: 1,
                    explanation: "The `extends` keyword is used in a class declaration to create a child class of another class."
                },
                {
                    id: "js-ch12-q2",
                    type: "multiple-choice",
                    question: "How to create a new instance (object) from a class?",
                    options: ["let obj = new MyClass()", "let obj = create MyClass()", "let obj = instance MyClass()", "let obj = MyClass.new()"],
                    answer: 0,
                    explanation: "The `new` operator instantiates the class, allocating memory and calling the constructor."
                },
                {
                    id: "js-ch12-q3",
                    type: "multiple-choice",
                    question: "What is the purpose of the 'constructor' method?",
                    options: ["To destroy the object", "To initialize the object's properties", "To perform an internal loop", "Just for aesthetics"],
                    answer: 1,
                    explanation: "The `constructor` is a special method executed automatically at the time of object creation."
                },
                {
                    id: "js-ch12-q4",
                    type: "multiple-choice",
                    question: "When using 'extends', what does 'super()' do inside the constructor?",
                    options: ["Calls the parent class constructor", "Cancels inheritance", "Speeds up the class", "Deletes the child class"],
                    answer: 0,
                    explanation: "In child classes, you must call `super()` before using `this` or returning from the constructor."
                },
                {
                    id: "js-ch12-q5",
                    type: "multiple-choice",
                    question: "Which keyword defines a method that belongs to the CLASS and not the instances?",
                    options: ["fixed", "global", "static", "shared"],
                    answer: 2,
                    explanation: "Static methods are called directly on the class (e.g., `Math.random()`), without needing `new`."
                },
                {
                    id: "js-ch12-q6",
                    type: "multiple-choice",
                    question: "How to declare a PRIVATE class field (that cannot be accessed from outside)?",
                    options: ["_name", "private name", "hidden name", "#name"],
                    answer: 3,
                    explanation: "Modern JS syntax uses the `#` prefix to define truly private properties."
                },
                {
                    id: "js-ch12-q7",
                    type: "boolean",
                    question: "Unlike 'function', 'class' declarations do NOT undergo hoisting?",
                    options: ["True", "False"],
                    answer: 0,
                    explanation: "True. You cannot use a class before it is declared in the code."
                },
                {
                    id: "js-ch12-q8",
                    type: "multiple-choice",
                    question: "What does 'this' represent inside an instance method?",
                    options: ["The parent class", "The current object", "The browser window", "A global variable"],
                    answer: 1,
                    explanation: "`this` refers to the specific instance that is executing the method at that moment."
                },
                {
                    id: "js-ch12-q9",
                    type: "multiple-choice",
                    question: "Which syntax defines a method to READ a property as if it were a field?",
                    options: ["read name()", "get name()", "fetch name()", "value name()"],
                    answer: 1,
                    explanation: "The `get` keyword allows executing logic when reading a property, keeping the interface clean."
                },
                {
                    id: "js-ch12-q10",
                    type: "multiple-choice",
                    question: "JavaScript classes are essentially syntactic sugar for which system?",
                    options: ["Arrays", "Global Objects", "Prototypes (Prototypal Inheritance)", "Bit Logic"],
                    answer: 2,
                    explanation: "Under the hood, JS continues to use the prototype system; the `class` syntax just makes it more friendly."
                }
            ],
            "js-ch13": [
                {
                    id: "js-ch13-q1",
                    type: "multiple-choice",
                    question: "How do you wait for a Promise result inside an async function?",
                    options: ["stay", "wait", "await", "yield"],
                    answer: 2,
                    explanation: "The `await` keyword makes the execution of the asynchronous function pause until the Promise is resolved."
                },
                {
                    id: "js-ch13-q2",
                    type: "multiple-choice",
                    question: "What does an 'async' function always return?",
                    options: ["A number", "A Promise", "null", "undefined"],
                    answer: 1,
                    explanation: "Even if you return a simple value, JS wraps it in a Promise that is automatically resolved."
                },
                {
                    id: "js-ch13-q3",
                    type: "multiple-choice",
                    question: "How to handle errors in async operations using await?",
                    options: ["if (error) {}", "try...catch", "Promise.onError()", "await.catch()"],
                    answer: 1,
                    explanation: "The `try...catch` block is the standard and cleanest way to handle Promise rejections in async functions."
                },
                {
                    id: "js-ch13-q4",
                    type: "multiple-choice",
                    question: "Which method waits for ALL Promises in a list to resolve?",
                    options: ["Promise.waitAll()", "Promise.all()", "Promise.sync()", "Promise.every()"],
                    answer: 1,
                    explanation: "`Promise.all()` fails if any of the provided Promises is rejected."
                },
                {
                    id: "js-ch13-q5",
                    type: "multiple-choice",
                    question: "What is the initial state of a Promise?",
                    options: ["pending", "resolved", "rejected", "waiting"],
                    answer: 0,
                    explanation: "A Promise starts as `pending` until it is either fulfilled or rejected."
                },
                {
                    id: "js-ch13-q6",
                    type: "multiple-choice",
                    question: "How to manually create a Promise that resolves after 1 second?",
                    options: ["new Promise((resolve) => setTimeout(resolve, 1000))", "Promise.wait(1000)", "async(1000) => {}", "setTimeout(Promise, 1000)"],
                    answer: 0,
                    explanation: "We use the `new Promise` constructor, which takes an executor function with `resolve` and `reject` arguments."
                },
                {
                    id: "js-ch13-q7",
                    type: "multiple-choice",
                    question: "What is the purpose of the '.finally()' method?",
                    options: ["To terminate the program", "To execute code regardless of Promise success or failure", "Only for errors", "To change the final result"],
                    answer: 1,
                    explanation: "`.finally()` is ideal for resource cleanup, such as closing loading states, always executing at the end."
                },
                {
                    id: "js-ch13-q8",
                    type: "multiple-choice",
                    question: "What does 'Promise.race()' do?",
                    options: ["Waits for the fastest one to complete", "Raffles a Promise", "Executes all in a row", "Cancels all Promises"],
                    answer: 0,
                    explanation: "`Promise.race()` resolves or rejects as soon as the first Promise in the list finishes."
                },
                {
                    id: "js-ch13-q9",
                    type: "multiple-choice",
                    question: "What happens if you 'await' a value that is NOT a Promise (e.g., await 5)?",
                    options: ["Syntax error", "Program crashes", "The value is returned normally", "Returns null"],
                    answer: 2,
                    explanation: "JS treats non-Promise values as if they were a Promise resolved with that value immediately."
                },
                {
                    id: "js-ch13-q10",
                    type: "multiple-choice",
                    question: "What is 'Top-level await'?",
                    options: ["Using await at the top of a module", "The fastest await", "A global function", "It doesn't exist"],
                    answer: 0,
                    explanation: "It allows using `await` outside of `async` functions in ES modules (.mjs), facilitating initial resource loading."
                }
            ],
            "js-ch14": [
                {
                    id: "js-ch14-q1",
                    type: "multiple-choice",
                    question: "Which API would you use to observe changes in the DOM tree?",
                    options: ["DOMObserver", "MutationObserver", "TreeWatcher", "ChangeHandler"],
                    answer: 1,
                    explanation: "`MutationObserver` is specifically designed to react to changes in DOM elements."
                },
                {
                    id: "js-ch14-q2",
                    type: "multiple-choice",
                    question: "What is the 'IntersectionObserver' used for?",
                    options: ["Detecting when an element appears on the screen (viewport)", "Changing the background color", "Calculating the distance between two clicks", "Observing cookie changes"],
                    answer: 0,
                    explanation: "It is ideal for 'lazy loading' images or animations that trigger as you scroll the page."
                },
                {
                    id: "js-ch14-q3",
                    type: "multiple-choice",
                    question: "How to execute heavy scripts in the background without freezing the user interface?",
                    options: ["Web Workers", "Service Workers", "Task Manager", "Background Threading"],
                    answer: 0,
                    explanation: "Web Workers create a separate thread for intensive processing."
                },
                {
                    id: "js-ch14-q4",
                    type: "multiple-choice",
                    question: "What is the modern method for making HTTP requests (replacement for XMLHttpRequest)?",
                    options: ["http.get()", "axios()", "fetch()", "request()"],
                    answer: 2,
                    explanation: "The `fetch()` API is native, Promise-based, and much cleaner than the old AJAX."
                },
                {
                    id: "js-ch14-q5",
                    type: "multiple-choice",
                    question: "How to change the browser URL without reloading the entire page?",
                    options: ["history.pushState()", "window.replaceURL()", "location.set()", "navigator.go()"],
                    answer: 0,
                    explanation: "Part of the History API, `pushState` allows creating client-side routes (Single Page Applications)."
                },
                {
                    id: "js-ch14-q6",
                    type: "multiple-choice",
                    question: "What does the 'Shadow DOM' allow you to do?",
                    options: ["Encapsulate CSS and HTML so styles don't leak", "Protect code from hackers", "Create invisible elements", "Increase rendering performance"],
                    answer: 0,
                    explanation: "It is the foundation of Web Components, allowing private styles that don't affect the rest of the site."
                },
                {
                    id: "js-ch14-q7",
                    type: "multiple-choice",
                    question: "Which API allows storing large volumes of structured data in the browser?",
                    options: ["localStorage", "sessionStorage", "IndexedDB", "Cookies"],
                    answer: 2,
                    explanation: "Unlike localStorage, IndexedDB is asynchronous and supports indexes and complex transactions."
                },
                {
                    id: "js-ch14-q8",
                    type: "multiple-choice",
                    question: "How to get the latitude and longitude coordinates of the device?",
                    options: ["navigator.geolocation.getCurrentPosition()", "window.getMap()", "navigator.locate()", "location.getPosition()"],
                    answer: 0,
                    explanation: "The Geolocation API provides access to the location, requesting permission from the user."
                },
                {
                    id: "js-ch14-q9",
                    type: "multiple-choice",
                    question: "What is the recommended method for creating fluid animations synchronized with the monitor?",
                    options: ["setTimeout()", "setInterval()", "requestAnimationFrame()", "animate()"],
                    answer: 2,
                    explanation: "`requestAnimationFrame` notifies the browser that you want to perform an animation, optimizing the paint cycle."
                },
                {
                    id: "js-ch14-q10",
                    type: "multiple-choice",
                    question: "To define your own custom HTML element (e.g., <my-button>), you use:",
                    options: ["customElements.define()", "new HTMLTag()", "document.createTag()", "window.setElement()"],
                    answer: 0,
                    explanation: "It is the main pillar of Web Components for creating reusable and native tags."
                }
            ],
            "js-ch15": [
                {
                    id: "js-ch15-q1",
                    type: "multiple-choice",
                    question: "Which design pattern ensures a class has only one instance?",
                    options: ["Factory", "Observer", "Singleton", "Prototype"],
                    answer: 2,
                    explanation: "The Singleton pattern restricts the instantiation of a class to a single object."
                },
                {
                    id: "js-ch15-q2",
                    type: "multiple-choice",
                    question: "What does the 'Factory' pattern do?",
                    options: ["Creates objects without specifying the exact class", "Destroys useless objects", "Reverses loop logic", "Just renames classes"],
                    answer: 0,
                    explanation: "It provides an interface for creating objects, letting subclasses decide which class to instantiate."
                },
                {
                    id: "js-ch15-q3",
                    type: "multiple-choice",
                    question: "What is the 'Observer' pattern used for?",
                    options: ["To hide variables", "To notify multiple objects about state changes", "To speed up the database", "To create CSS animations"],
                    answer: 1,
                    explanation: "It is the foundation of reactive programming and event-driven systems (e.g., click handlers)."
                },
                {
                    id: "js-ch15-q4",
                    type: "multiple-choice",
                    question: "What is the main goal of the 'Module' pattern in JS?",
                    options: ["Transform code into Java", "Encapsulate data and private methods", "Decrease image size", "Remove comments"],
                    answer: 1,
                    explanation: "Used to maintain privacy and avoid polluting the global scope."
                },
                {
                    id: "js-ch15-q5",
                    type: "multiple-choice",
                    question: "What does the 'Proxy' pattern allow you to do?",
                    options: ["Access the internet", "Intercept and customize operations on an object", "Delete the parent object", "Change IDE color"],
                    answer: 1,
                    explanation: "A Proxy acts as an intermediary for operations such as property reading and validation."
                },
                {
                    id: "js-ch15-q6",
                    type: "multiple-choice",
                    question: "How does the 'Decorator' pattern add functionality?",
                    options: ["Replacing the original class", "Wrapping the original object without changing its structure", "Using only CSS", "Through multiple inheritance"],
                    answer: 1,
                    explanation: "It allows adding behavior to objects dynamically, favoring composition over inheritance."
                },
                {
                    id: "js-ch15-q7",
                    type: "multiple-choice",
                    question: "What does the 'State' pattern solve?",
                    options: ["Allows an object to change its behavior when its internal state changes", "Increases connection speed", "Creates a new server", "Just for saving logs"],
                    answer: 0,
                    explanation: "Eliminates complex conditionals (`if/else`) by delegating logic to specific state classes."
                },
                {
                    id: "js-ch15-q8",
                    type: "multiple-choice",
                    question: "What is 'Dependency Injection'?",
                    options: ["Writing all code in one file", "Passing external objects as arguments instead of creating them internally", "Using only global variables", "A type of virus"],
                    answer: 1,
                    explanation: "Promotes decoupling, making system testing and maintenance easier."
                },
                {
                    id: "js-ch15-q9",
                    type: "multiple-choice",
                    question: "What does the 'Mediator' pattern do?",
                    options: ["Centralizes communication between complex objects", "Clears cache", "Translates code to English", "Creates a new database"],
                    answer: 0,
                    explanation: "Prevents objects from referring to each other explicitly, reducing coupling."
                },
                {
                    id: "js-ch15-q10",
                    type: "multiple-choice",
                    question: "What is the 'Adapter' pattern?",
                    options: ["Convert the interface of a class into another expected by the client", "A browser plugin", "A physical cable", "Speed up processing"],
                    answer: 0,
                    explanation: "Allows classes with incompatible interfaces to work together."
                }
            ],
            "js-ch16": [
                {
                    id: "js-ch16-q1",
                    type: "multiple-choice",
                    question: "What is the name of the technique where you write tests BEFORE the functional code?",
                    options: ["TDD (Test Driven Development)", "BDD (Behavior Driven Development)", "CI/CD", "Testing First"],
                    answer: 0,
                    explanation: "TDD is a development cycle focusing on writing the test, seeing it fail, and then writing the code to make it pass."
                },
                {
                    id: "js-ch16-q2",
                    type: "multiple-choice",
                    question: "What is a 'Unit Test'?",
                    options: ["Testing the entire system at once", "Testing the smallest possible piece of code in isolation", "Testing the database connection", "Testing network speed"],
                    answer: 1,
                    explanation: "Unit tests focus on individual functions or components, ensuring each piece works logically."
                },
                {
                    id: "js-ch16-q3",
                    type: "multiple-choice",
                    question: "What is the difference between Integration and E2E (End-to-End) tests?",
                    options: ["None", "E2E tests the complete user flow in the browser; Integration tests how modules work together", "Integration is slower than E2E", "E2E is only for CSS"],
                    answer: 1,
                    explanation: "E2E tests simulate a real user clicking on the screen, while Integration focuses on the contract between APIs/modules."
                },
                {
                    id: "js-ch16-q4",
                    type: "multiple-choice",
                    question: "In testing frameworks, what is the 'expect()' function for?",
                    options: ["To wait for a second", "To define the expected result (assertion)", "To import a library", "To delete the test"],
                    answer: 1,
                    explanation: "It is the heart of the test, comparing the actual value obtained with what you 'expect' to be true."
                },
                {
                    id: "js-ch16-q5",
                    type: "multiple-choice",
                    question: "What are 'Mocks' or 'Test Doubles'?",
                    options: ["Fake objects that simulate real dependencies (e.g., an API)", "Comments in code", "Error functions", "Chrome plugins"],
                    answer: 0,
                    explanation: "Mocks allow testing logic without depending on slow or unstable external systems."
                },
                {
                    id: "js-ch16-q6",
                    type: "multiple-choice",
                    question: "What does 'Code Coverage' measure?",
                    options: ["The amount of code lines written", "The percentage of code executed during tests", "The final file size", "How many bugs exist"],
                    answer: 1,
                    explanation: "It helps identify parts of the system that have not been tested yet."
                },
                {
                    id: "js-ch16-q7",
                    type: "multiple-choice",
                    question: "Which of these is a popular testing tool in the JavaScript ecosystem?",
                    options: ["Jest", "Photoshop", "Excel", "Spotify"],
                    answer: 0,
                    explanation: "Jest is one of the most complete and widely used testing frameworks, developed by Facebook/Meta."
                },
                {
                    id: "js-ch16-q8",
                    type: "multiple-choice",
                    question: "What is 'Snapshot Testing'?",
                    options: ["Taking a picture of the developer", "Comparing the component structure with a previously saved version", "Testing only on Instagram", "A test that expires fast"],
                    answer: 1,
                    explanation: "Ensures that accidental changes to the user interface (UI) are detected immediately."
                },
                {
                    id: "js-ch16-q9",
                    type: "multiple-choice",
                    question: "How do you test asynchronous code (e.g., fetch) in Jest?",
                    options: ["Using setTimeOut", "Using async/await in the test itself", "Ignoring the async part", "It's not possible"],
                    answer: 1,
                    explanation: "Modern tests support `async/await`, allowing you to wait for the Promise to resolve before validating."
                },
                {
                    id: "js-ch16-q10",
                    type: "multiple-choice",
                    question: "What does the term 'Refactoring' mean in the context of TDD?",
                    options: ["Rewriting code to improve structure without changing behavior", "Adding new features", "Deleting the database", "Changing the project name"],
                    answer: 0,
                    explanation: "It is the phase where you clean up code after the test passes (Green phase)."
                }
            ],
            "js-ch17": [
                {
                    id: "js-ch17-q1",
                    type: "multiple-choice",
                    question: "Which technique limits how often a function is executed, triggering it only after a period of inactivity?",
                    options: ["Debounce", "Throttle", "Memoization", "Lazy Loading"],
                    answer: 0,
                    explanation: "Debouncing delays the execution of a function until a certain amount of time has passed since it was last called (ideal for search bars)."
                },
                {
                    id: "js-ch17-q2",
                    type: "multiple-choice",
                    question: "What is the main difference between Debounce and Throttle?",
                    options: ["None", "Throttle guarantees execution at regular intervals; Debounce only executes after the user stops", "Debounce is faster", "Throttle is only for images"],
                    answer: 1,
                    explanation: "Throttle limits execution to once every X milliseconds (ideal for scrolling or window resizing)."
                },
                {
                    id: "js-ch17-q3",
                    type: "multiple-choice",
                    question: "What is 'Memoization'?",
                    options: ["Clearing browser memory", "Storing results of expensive functions to reuse them with the same inputs", "Compacting code", "A type of loop"],
                    answer: 1,
                    explanation: "It is a caching technique that avoids re-processing complex calculations repeatedly."
                },
                {
                    id: "js-ch17-q4",
                    type: "multiple-choice",
                    question: "What does 'Lazy Loading' mean?",
                    options: ["Loading all files at the beginning", "Delaying the loading of non-essential resources until they are needed", "Code that runs slowly", "Scripts that don't work"],
                    answer: 1,
                    explanation: "Improves initial load time (LCP) by not downloading images or scripts that are off-screen."
                },
                {
                    id: "js-ch17-q5",
                    type: "multiple-choice",
                    question: "How does 'Tree Shaking' help performance?",
                    options: ["Removing dead/unused code from the final bundle", "Organizing project folders", "Increasing processor speed", "Cleaning Git cache"],
                    answer: 0,
                    explanation: "Modern bundlers like Webpack and Vite use this to ensure only actually imported code reaches the user."
                },
                {
                    id: "js-ch17-q6",
                    type: "multiple-choice",
                    question: "What is the advantage of 'Code Splitting'?",
                    options: ["Splitting code into smaller files that can be loaded on demand", "Writing less code", "Making it easier for the programmer to read", "Allowing multiple inheritance"],
                    answer: 0,
                    explanation: "Allows the user to download only what is needed for the current page, instead of a giant 5MB file."
                },
                {
                    id: "js-ch17-q7",
                    type: "multiple-choice",
                    question: "What is the 'Critical Rendering Path'?",
                    options: ["The longest path to the server", "The sequence of steps the browser follows to convert HTML/CSS/JS into pixels", "A dangerous API route", "The main project directory"],
                    answer: 1,
                    explanation: "Optimizing this path reduces the time until the user sees something useful on the screen (First Contentful Paint)."
                },
                {
                    id: "js-ch17-q8",
                    type: "multiple-choice",
                    question: "How to avoid 'Layout Thrashing'?",
                    options: ["Reading and writing to the DOM alternately", "Grouping reads and then grouping writes to the DOM", "Not using CSS", "Using only tables"],
                    answer: 1,
                    explanation: "Prevents the browser from having to recalculate the layout multiple times in a row in the same frame."
                },
                {
                    id: "js-ch17-q9",
                    type: "multiple-choice",
                    question: "What is the <link rel='prefetch'> feature for?",
                    options: ["To delete the page", "To download low-priority resources that the user might need in the future", "To force immediate loading", "To block access"],
                    answer: 1,
                    explanation: "Helps speed up navigation to the next page the user is likely to visit."
                },
                {
                    id: "js-ch17-q10",
                    type: "multiple-choice",
                    question: "What is 'Minification'?",
                    options: ["Reducing file size by removing spaces and renaming variables to short letters", "Writing code in lowercase letters", "Creating small components", "Hiding the code"],
                    answer: 0,
                    explanation: "Reduces the file size for download without changing the execution logic."
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
                    answer: 2,
                    explanation: "Python is dynamically typed, so `x = 5` is the default, but `int(5)` also works for explicit conversion."
                },
                {
                    id: "py-ch2-q2",
                    type: "multiple-choice",
                    question: "What is the data type of x = 2.8?",
                    options: ["int", "float", "complex", "number"],
                    answer: 1,
                    explanation: "Numbers with decimal places are of type `float` (floating point) in Python."
                },
                {
                    id: "py-ch2-q3",
                    type: "boolean",
                    question: "Can strings in Python be delimited by single or double quotes?",
                    options: ["True", "False"],
                    answer: 0,
                    explanation: "Unlike some languages, Python treats `'text'` and `\"text\"` identically."
                },
                {
                    id: "py-ch2-q4",
                    type: "multiple-choice",
                    question: "What is the result of bool([])?",
                    options: ["True", "False", "Error", "None"],
                    answer: 1,
                    explanation: "Empty lists, empty strings, and the number 0 are considered `False` in boolean contexts."
                },
                {
                    id: "py-ch2-q5",
                    type: "multiple-choice",
                    question: "How to convert a number to a string?",
                    options: ["str(x)", "toString(x)", "(string)x", "x.text()"],
                    answer: 0,
                    explanation: "The `str()` function is used to convert objects into their textual representation."
                },
                {
                    id: "py-ch2-q6",
                    type: "multiple-choice",
                    question: "What does the 'None' value represent in Python?",
                    options: ["Zero", "An empty string", "The absence of value (null)", "A syntax error"],
                    answer: 2,
                    explanation: "`None` is a special object used to indicate that a variable does not have a defined value."
                },
                {
                    id: "py-ch2-q7",
                    type: "multiple-choice",
                    question: "How to insert the value of a 'name' variable into a string in a modern way (f-string)?",
                    options: ["f'Hello {name}'", "'Hello ' + name", "'Hello %s' % name", "string(name)"],
                    answer: 0,
                    explanation: "f-strings (prefix 'f') are the most readable and efficient way to format strings in Python 3.6+."
                },
                {
                    id: "py-ch2-q8",
                    type: "multiple-choice",
                    question: "What is the data type of x = True?",
                    options: ["str", "bool", "int", "logic"],
                    answer: 1,
                    explanation: "Booleans in Python (`True` and `False`) must always start with a capital letter."
                },
                {
                    id: "py-ch2-q9",
                    type: "multiple-choice",
                    question: "How to assign the same value to three variables in a single line?",
                    options: ["x = y = z = 10", "x, y, z = 10", "x = 10; y = 10; z = 10", "set(x,y,z,10)"],
                    answer: 0,
                    explanation: "Python allows chained assignments, which makes the code more concise."
                },
                {
                    id: "py-ch2-q10",
                    type: "multiple-choice",
                    question: "What happens if you try to add a string to a number: '5' + 5?",
                    options: ["Returns '55'", "Returns 10", "Generates a TypeError", "Returns '5 5'"],
                    answer: 2,
                    explanation: "Python does not do automatic type conversion (coercion) for different types in arithmetic operations."
                }
            ],
            "py-ch3": [
                {
                    id: "py-ch3-q1",
                    type: "multiple-choice",
                    question: "Which operator is used for exponentiation (power) in Python?",
                    options: ["^", "**", "//", "%"],
                    answer: 1,
                    explanation: "In Python, the `**` operator raises the number on the left to the power of the number on the right."
                },
                {
                    id: "py-ch3-q2",
                    type: "multiple-choice",
                    question: "What does the '//' operator do in Python?",
                    options: ["Common division", "Floor division (discards the remainder)", "Modulo (remainder of division)", "Comment"],
                    answer: 1,
                    explanation: "The `//` operator performs floor division, returning only the integer part of the quotient."
                },
                {
                    id: "py-ch3-q3",
                    type: "multiple-choice",
                    question: "Which operator returns the REMAINDER of a division?",
                    options: ["rem", "rest", "//", "%"],
                    answer: 3,
                    explanation: "The modulo operator `%` is useful for checking if a number is even or odd."
                },
                {
                    id: "py-ch3-q4",
                    type: "multiple-choice",
                    question: "How do you write logical 'AND' in Python?",
                    options: ["&&", "and", "AND", "&"],
                    answer: 1,
                    explanation: "Unlike C++ or JS, Python uses English words (`and`, `or`, `not`) for boolean logic."
                },
                {
                    id: "py-ch3-q5",
                    type: "multiple-choice",
                    question: "What is the result of: 10 > 5 and 3 == 3?",
                    options: ["True", "False", "None", "Error"],
                    answer: 0,
                    explanation: "Both conditions are true, so the result of the `and` is `True`."
                },
                {
                    id: "py-ch3-q6",
                    type: "multiple-choice",
                    question: "Which operator checks if two objects occupy the same space in memory (identity)?",
                    options: ["==", "is", "equal", "same"],
                    answer: 1,
                    explanation: "`==` compares values, while `is` compares if they are the exact same object in memory."
                },
                {
                    id: "py-ch3-q7",
                    type: "multiple-choice",
                    question: "How to check if the value 'Strawberry' is inside the list 'fruits'?",
                    options: ["fruits.has('Strawberry')", "'Strawberry' in fruits", "exists('Strawberry', fruits)", "fruits.contains('Strawberry')"],
                    answer: 1,
                    explanation: "The `in` operator is very powerful in Python for checking presence in collections."
                },
                {
                    id: "py-ch3-q8",
                    type: "multiple-choice",
                    question: "What does the 'not' operator do?",
                    options: ["Nothing", "Inverts the boolean value (True becomes False)", "Deletes the variable", "Stops the program"],
                    answer: 1,
                    explanation: "`not` is the logical negation operator."
                },
                {
                    id: "py-ch3-q9",
                    type: "multiple-choice",
                    question: "What is the short way to write 'x = x + 5'?",
                    options: ["x += 5", "x =+ 5", "x.add(5)", "x++ 5"],
                    answer: 0,
                    explanation: "Compound assignment operators like `+=`, `-=`, `*=` make the code more concise."
                },
                {
                    id: "py-ch3-q10",
                    type: "multiple-choice",
                    question: "What is the result of: 2 + 3 * 4?",
                    options: ["20", "14", "24", "9"],
                    answer: 1,
                    explanation: "Just like in mathematics, multiplication has precedence over addition."
                }
            ],
            "py-ch4": [
                {
                    id: "py-ch4-q1",
                    type: "multiple-choice",
                    question: "How do you import the 'math' module in Python?",
                    options: ["using math", "import math", "include math", "require(math)"],
                    answer: 1,
                    explanation: "The `import` keyword is used to load external modules or standard libraries."
                },
                {
                    id: "py-ch4-q2",
                    type: "multiple-choice",
                    question: "How do you import only the 'sqrt' function from the 'math' module?",
                    options: ["import math(sqrt)", "from math import sqrt", "get sqrt from math", "import sqrt"],
                    answer: 1,
                    explanation: "Using `from ... import ...` allows you to use the function directly without the module prefix."
                },
                {
                    id: "py-ch4-q3",
                    type: "multiple-choice",
                    question: "How do you import a module with an 'alias'?",
                    options: ["import math as m", "import math like m", "set m = math", "alias math=m"],
                    answer: 0,
                    explanation: "The `as` keyword is useful for shortening long module names (common with `numpy as np`)."
                },
                {
                    id: "py-ch4-q4",
                    type: "multiple-choice",
                    question: "Which standard module is used to generate random numbers?",
                    options: ["math", "random", "os", "sys"],
                    answer: 1,
                    explanation: "The `random` module provides functions for generating integers, choosing items from lists, etc."
                },
                {
                    id: "py-ch4-q5",
                    type: "multiple-choice",
                    question: "What is the dir() function used for when applied to a module?",
                    options: ["Delete the module", "List all names (functions, variables) defined in the module", "Search for the module online", "Create a directory"],
                    answer: 1,
                    explanation: "`dir()` is great for exploring the content of a library you just imported."
                },
                {
                    id: "py-ch4-q6",
                    type: "multiple-choice",
                    question: "Which command is used in the terminal to install new Python packages?",
                    options: ["npm install", "get-package", "pip install", "python add"],
                    answer: 2,
                    explanation: "`pip` is the standard package manager for Python (Python Package Index)."
                },
                {
                    id: "py-ch4-q7",
                    type: "multiple-choice",
                    question: "What is the purpose of 'if __name__ == \"__main__\":'?",
                    options: ["Ensure code only runs if the script is executed directly", "Set the author's name", "Connect to the database", "Handle import errors"],
                    answer: 0,
                    explanation: "This prevents test code from running when the file is only imported as a module by another script."
                },
                {
                    id: "py-ch4-q8",
                    type: "multiple-choice",
                    question: "Which standard module would you use to work with dates and times?",
                    options: ["time", "date", "datetime", "calendar"],
                    answer: 2,
                    explanation: "`datetime` is the most complete library for manipulating dates and times."
                },
                {
                    id: "py-ch4-q9",
                    type: "multiple-choice",
                    question: "How do you import all functions from a module at once (not recommended)?",
                    options: ["import math all", "from math import *", "import * from math", "include math.*"],
                    answer: 1,
                    explanation: "The `*` imports everything, but it can cause name conflicts (namespace pollution)."
                },
                {
                    id: "py-ch4-q10",
                    type: "multiple-choice",
                    question: "Where does Python look for modules when you use 'import'?",
                    options: ["Only in the current folder", "In a list of directories called sys.path", "Only on Google", "On the Desktop"],
                    answer: 1,
                    explanation: "`sys.path` includes the script directory, environment variables, and standard library folders."
                }
            ],
            "py-ch5": [
                {
                    id: "py-ch5-q1",
                    type: "multiple-choice",
                    question: "How do you transform a string to uppercase in Python?",
                    options: ["upper()", "toUpperCase()", "capitalize()", "big()"],
                    answer: 0,
                    explanation: "The `.upper()` method returns a copy of the string with all characters in uppercase."
                },
                {
                    id: "py-ch5-q2",
                    type: "multiple-choice",
                    question: "What does the '.strip()' method do?",
                    options: ["Deletes the string", "Removes whitespace at the beginning and end of the string", "Reverses the string", "Transforms to lowercase"],
                    answer: 1,
                    explanation: "Useful for cleaning user inputs that may have accidental spaces."
                },
                {
                    id: "py-ch5-q3",
                    type: "multiple-choice",
                    question: "How do you get the first character of a string 's'?",
                    options: ["s(0)", "s[1]", "s[0]", "s.first()"],
                    answer: 2,
                    explanation: "Python uses zero-based indexing to access characters in a sequence."
                },
                {
                    id: "py-ch5-q4",
                    type: "multiple-choice",
                    question: "What is the result of 'Python'[1:4]?",
                    options: ["Pyth", "yth", "ytho", "ytho"],
                    answer: 1,
                    explanation: "Slicing `[1:4]` takes from index 1 up to index 3 (the end is exclusive)."
                },
                {
                    id: "py-ch5-q5",
                    type: "multiple-choice",
                    question: "Which function returns the length (number of characters) of a string?",
                    options: ["length()", "size()", "count()", "len()"],
                    answer: 3,
                    explanation: "The built-in `len()` function works for strings, lists, dictionaries, and more."
                },
                {
                    id: "py-ch5-q6",
                    type: "multiple-choice",
                    question: "How to replace all occurrences of 'A' with 'B' in a string?",
                    options: ["s.replace('A', 'B')", "s.change('A', 'B')", "s.swap('A', 'B')", "update(s, 'A', 'B')"],
                    answer: 0,
                    explanation: "Strings in Python are immutable, so `.replace()` returns a NEW string with the changes."
                },
                {
                    id: "py-ch5-q7",
                    type: "multiple-choice",
                    question: "Which method splits a string into a LIST based on a separator?",
                    options: ["divide()", "break()", "split()", "partition()"],
                    answer: 2,
                    explanation: "By default, `.split()` divides the string by whitespace."
                },
                {
                    id: "py-ch5-q8",
                    type: "multiple-choice",
                    question: "How to check if a string contains only numbers?",
                    options: ["isnumber()", "isdigit()", "isnumeric", "check_int()"],
                    answer: 1,
                    explanation: "`.isdigit()` returns True if all characters are numeric."
                },
                {
                    id: "py-ch5-q9",
                    type: "multiple-choice",
                    question: "What happens if you try to access an index that doesn't exist (e.g., 'Hi'[10])?",
                    options: ["Returns None", "Returns an empty string", "Generates an IndexError", "Returns the last character"],
                    answer: 2,
                    explanation: "Accessing out-of-bounds indices causes a runtime error (exception)."
                },
                {
                    id: "py-ch5-q10",
                    type: "multiple-choice",
                    question: "How do you create a string that occupies multiple lines without using '\\n'?",
                    options: ["Using triple quotes (\"\"\" or ''')", "Using parentheses", "Using brackets", "Not possible"],
                    answer: 0,
                    explanation: "Triple quotes preserve line breaks exactly as typed."
                }
            ],
            "py-ch6": [
                {
                    id: "py-ch6-q1",
                    type: "multiple-choice",
                    question: "How do you write 'else if' in Python?",
                    options: ["else if", "elseif", "elif", "if else"],
                    answer: 2,
                    explanation: "`elif` is the shorthand for `else if` in Python, used to check multiple conditions."
                },
                {
                    id: "py-ch6-q2",
                    type: "multiple-choice",
                    question: "What is mandatory in Python to indicate a code block for an 'if' statement?",
                    options: ["Curly braces {}", "Parentheses ()", "Indentation (spaces/tabs)", "Semicolons ;"],
                    answer: 2,
                    explanation: "Python uses indentation to define scope, making the code cleaner and more readable."
                },
                {
                    id: "py-ch6-q3",
                    type: "multiple-choice",
                    question: "What is the result of: if 0: print('A') else: print('B')?",
                    options: ["A", "B", "Error", "None"],
                    answer: 1,
                    explanation: "In Python, the number 0 is evaluated as False, so the 'else' block is executed."
                },
                {
                    id: "py-ch6-q4",
                    type: "multiple-choice",
                    question: "How to write a condition 'if x is between 1 and 10' in a simplified way in Python?",
                    options: ["if 1 < x < 10:", "if x > 1 and x < 10:", "both of the above", "if x in range(1, 10):"],
                    answer: 2,
                    explanation: "Python allows chaining comparisons like `1 < x < 10`, which is very intuitive."
                },
                {
                    id: "py-ch6-q5",
                    type: "multiple-choice",
                    question: "How to check if a variable is 'None'?",
                    options: ["if x == None:", "if x is None:", "both of the above", "if None(x):"],
                    answer: 1,
                    explanation: "Although `==` works, Python convention (PEP 8) recommends using `is None` for identity."
                },
                {
                    id: "py-ch6-q6",
                    type: "multiple-choice",
                    question: "What is the ternary operator in Python for: status = 'Adult' if age >= 18 else 'Minor'?",
                    options: ["status = age >= 18 ? 'Adult' : 'Minor'", "status = 'Adult' if age >= 18 else 'Minor'", "if age >= 18: status = 'Adult' else 'Minor'", "status = (age >= 18) 'Adult', 'Minor'"],
                    answer: 1,
                    explanation: "Python uses a clear conditional expression syntax: `value_if_true if condition else value_if_false`."
                },
                {
                    id: "py-ch6-q7",
                    type: "multiple-choice",
                    question: "What happens if you leave an 'if' block empty with no code?",
                    options: ["The program skips it", "Generates an IndentationError", "Returns None", "Computer explodes"],
                    answer: 1,
                    explanation: "Empty blocks are not allowed. You must use the `pass` keyword if you don't want to do anything."
                },
                {
                    id: "py-ch6-q8",
                    type: "multiple-choice",
                    question: "How to check if a list 'items' is NOT empty?",
                    options: ["if items:", "if len(items) > 0:", "both of the above", "if not items.empty():"],
                    answer: 2,
                    explanation: "Lists with elements are evaluated as True. `if items:` is the most 'pythonic' way."
                },
                {
                    id: "py-ch6-q9",
                    type: "multiple-choice",
                    question: "What is the result of: if 'a' in 'banana': print('Yes')?",
                    options: ["Yes", "Nothing happens", "Error", "False"],
                    answer: 0,
                    explanation: "The `in` operator checks if a substring exists within another string."
                },
                {
                    id: "py-ch6-q10",
                    type: "multiple-choice",
                    question: "Which keyword was introduced in Python 3.10 for flow control similar to switch/case?",
                    options: ["switch", "case", "match", "select"],
                    answer: 2,
                    explanation: "`match` allows Structural Pattern Matching, a powerful addition to the language."
                }
            ],
            "py-ch7": [
                {
                    id: "py-ch7-q1",
                    type: "multiple-choice",
                    question: "Which function would you use to convert a text input into a decimal number?",
                    options: ["int()", "str()", "float()", "decimal()"],
                    answer: 2,
                    explanation: "The `float()` function converts a string or number into a floating point number (decimal)."
                },
                {
                    id: "py-ch7-q2",
                    type: "multiple-choice",
                    question: "What does the 'input()' function always return by default?",
                    options: ["An integer", "A string", "A boolean", "It depends on what the user types"],
                    answer: 1,
                    explanation: "Even if the user types a number, `input()` captures it as text (string)."
                },
                {
                    id: "py-ch7-q3",
                    type: "multiple-choice",
                    question: "How do you print 'A' and 'B' on the same line separated by a hyphen?",
                    options: ["print('A', 'B', sep='-')", "print('A' + '-' + 'B')", "both of the above", "print('A', '-', 'B')"],
                    answer: 2,
                    explanation: "You can use the `sep` parameter or concatenate strings manually."
                },
                {
                    id: "py-ch7-q4",
                    type: "multiple-choice",
                    question: "What is the 'end' parameter in the print function for?",
                    options: ["To terminate the program", "To define what will be printed at the end (defaults to a newline \\n)", "To close a file", "To reverse the string"],
                    answer: 1,
                    explanation: "Using `end=' '` allows the next `print` to continue on the same line."
                },
                {
                    id: "py-ch7-q5",
                    type: "multiple-choice",
                    question: "What is the correct mode to open a file for READING only?",
                    options: ["open('file.txt', 'w')", "open('file.txt', 'r')", "open('file.txt', 'a')", "open('file.txt', 'x')"],
                    answer: 1,
                    explanation: "The 'r' mode stands for 'read'."
                },
                {
                    id: "py-ch7-q6",
                    type: "multiple-choice",
                    question: "What is the advantage of using the 'with open(...) as f:' block?",
                    options: ["Code runs faster", "The file is automatically closed even if an error occurs", "Allows reading protected files", "No quotes needed"],
                    answer: 1,
                    explanation: "It is a best practice (context manager) to avoid resource leaks."
                },
                {
                    id: "py-ch7-q7",
                    type: "multiple-choice",
                    question: "Which method reads the ENTIRE content of a file at once as a single string?",
                    options: ["f.read()", "f.readline()", "f.readlines()", "f.all()"],
                    answer: 0,
                    explanation: "`.read()` reads the entire file, while `.readline()` reads only one line at a time."
                },
                {
                    id: "py-ch7-q8",
                    type: "multiple-choice",
                    question: "What does the 'a' mode do when opening a file?",
                    options: ["Erases content and writes from scratch", "Opens the file and adds content to the end (append)", "Opens for reading", "Generates an alert"],
                    answer: 1,
                    explanation: "The 'append' mode preserves existing content."
                },
                {
                    id: "py-ch7-q9",
                    type: "multiple-choice",
                    question: "How do you write the text 'Hello' into a file opened as 'f'?",
                    options: ["f.print('Hello')", "f.write('Hello')", "f.add('Hello')", "f.save('Hello')"],
                    answer: 1,
                    explanation: "The `.write()` method is used to insert strings into the file."
                },
                {
                    id: "py-ch7-q10",
                    type: "multiple-choice",
                    question: "Why is it important to use 'f.close()' if you do NOT use the 'with' block?",
                    options: ["To save electricity", "To ensure data is saved and free up system memory", "To keep Python from crashing", "It is not important"],
                    answer: 1,
                    explanation: "Open files consume system resources and may not save changes if not closed."
                }
            ],
            "py-ch8": [
                {
                    id: "py-ch8-q1",
                    type: "multiple-choice",
                    question: "Which function generates a sequence of numbers for use in a FOR loop?",
                    options: ["sequence()", "list()", "range()", "generate()"],
                    answer: 2,
                    explanation: "The `range()` function is commonly used to iterate a specific number of times in FOR loops."
                },
                {
                    id: "py-ch8-q2",
                    type: "multiple-choice",
                    question: "What is the main difference between 'for' and 'while'?",
                    options: ["'for' is faster", "'while' is used when we don't know the exact number of iterations", "'for' only works with numbers", "There is no difference"],
                    answer: 1,
                    explanation: "`for` usually iterates over known sequences, while `while` depends on a logical condition."
                },
                {
                    id: "py-ch8-q3",
                    type: "multiple-choice",
                    question: "What is the 'break' keyword used for?",
                    options: ["To pause the program for 1 second", "To exit the loop immediately", "To skip only the current iteration", "To restart the loop"],
                    answer: 1,
                    explanation: "`break` interrupts the loop execution and moves to the next line outside of it."
                },
                {
                    id: "py-ch8-q4",
                    type: "multiple-choice",
                    question: "What is the 'continue' keyword used for?",
                    options: ["To exit the loop", "To skip the rest of the code in the loop and jump to the next iteration", "To stop the program", "To repeat the same iteration"],
                    answer: 1,
                    explanation: "`continue` ends the current iteration and returns to the top of the loop for the next one."
                },
                {
                    id: "py-ch8-q5",
                    type: "multiple-choice",
                    question: "How do you get both the index and value simultaneously when iterating over a list?",
                    options: ["enumerate(list)", "index(list)", "zip(list)", "list(list)"],
                    answer: 0,
                    explanation: "The `enumerate()` function returns tuples containing `(index, value)`."
                },
                {
                    id: "py-ch8-q6",
                    type: "multiple-choice",
                    question: "What is the result of 'range(2, 10, 2)'?",
                    options: ["[2, 3, 4, 5, 6, 7, 8, 9]", "[2, 4, 6, 8]", "[2, 4, 6, 8, 10]", "[0, 2, 4, 6, 8]"],
                    answer: 1,
                    explanation: "It starts at 2, stops before 10, with a step of 2."
                },
                {
                    id: "py-ch8-q7",
                    type: "multiple-choice",
                    question: "What happens if the 'while' condition is always True and there is no 'break'?",
                    options: ["The program ends normally", "A syntax error occurs", "It creates an infinite loop", "Python closes itself"],
                    answer: 2,
                    explanation: "Infinite loops consume processing power and can hang the application."
                },
                {
                    id: "py-ch8-q8",
                    type: "multiple-choice",
                    question: "How would you make a loop iterate through a list backwards?",
                    options: ["for x in reversed(my_list):", "for x in my_list.back():", "for x in my_list.reverse():", "for x in flip(my_list):"],
                    answer: 0,
                    explanation: "The `reversed()` function returns an iterator that goes through the sequence in reverse order."
                },
                {
                    id: "py-ch8-q9",
                    type: "multiple-choice",
                    question: "What is the basic syntax of a 'List Comprehension' to create a list of squares?",
                    options: ["[x*x for x in range(5)]", "[for x in range(5): x*x]", "list(x*x for x in range(5))", "{x*x for x in range(5)}"],
                    answer: 0,
                    explanation: "List comprehensions offer a concise syntax for creating lists based on iterables."
                },
                {
                    id: "py-ch8-q10",
                    type: "multiple-choice",
                    question: "What is the purpose of 'else' in a loop?",
                    options: ["Executes if the loop finishes normally (no break)", "Executes if the loop finds an error", "It is mandatory in all loops", "Replaces the while"],
                    answer: 0,
                    explanation: "The `else` block in a loop is useful for search scenarios where you want to know if nothing was found."
                }
            ],
            "py-ch9": [
                {
                    id: "py-ch9-q1",
                    type: "multiple-choice",
                    question: "Which method would you use to add an element to the end of a LIST in Python?",
                    options: ["add()", "push()", "append()", "insert()"],
                    answer: 2,
                    explanation: "The `.append()` method adds a single item to the end of an existing list."
                },
                {
                    id: "py-ch9-q2",
                    type: "multiple-choice",
                    question: "How do you get the LAST element of a list without knowing its size?",
                    options: ["list[last]", "list[-1]", "list.end()", "list[len(list)]"],
                    answer: 1,
                    explanation: "Python supports negative indexing; `-1` refers to the last item, `-2` to the second to last, and so on."
                },
                {
                    id: "py-ch9-q3",
                    type: "multiple-choice",
                    question: "What is the main difference between a List and a Tuple?",
                    options: ["Lists are faster", "Tuples are mutable and Lists are immutable", "Lists are mutable and Tuples are immutable", "There is no difference"],
                    answer: 2,
                    explanation: "Once created, you cannot change the elements of a tuple (immutable), whereas lists can be modified freely."
                },
                {
                    id: "py-ch9-q4",
                    type: "multiple-choice",
                    question: "How do you remove an element from a list by its VALUE (e.g., removing the string 'Apple')?",
                    options: ["list.delete('Apple')", "list.remove('Apple')", "list.pop('Apple')", "del list['Apple']"],
                    answer: 1,
                    explanation: "The `.remove()` method searches for the value and removes it. If there are duplicates, only the first one is removed."
                },
                {
                    id: "py-ch9-q5",
                    type: "multiple-choice",
                    question: "What does the '.pop()' method do?",
                    options: ["Removes and returns the last item from the list", "Clears the entire list", "Adds an item at the beginning", "Reverses the order of items"],
                    answer: 0,
                    explanation: "`.pop()` is useful when you need to use the removed value immediately after."
                },
                {
                    id: "py-ch9-q6",
                    type: "multiple-choice",
                    question: "How do you insert an element at a specific position (e.g., at index 0)?",
                    options: ["list.append(0, 'item')", "list.insert(0, 'item')", "list[0] = 'item'", "list.add(0, 'item')"],
                    answer: 1,
                    explanation: "Unlike `append`, `insert` allows you to choose where the new element should be placed."
                },
                {
                    id: "py-ch9-q7",
                    type: "multiple-choice",
                    question: "How would you create a tuple with only one element?",
                    options: ["item = (5)", "item = [5]", "item = (5,)", "item = tuple(5)"],
                    answer: 2,
                    explanation: "Without the comma, Python interprets the parentheses only as mathematical precedence (a simple integer)."
                },
                {
                    id: "py-ch9-q8",
                    type: "multiple-choice",
                    question: "Which function returns the sum of all numbers in a list?",
                    options: ["total()", "count()", "add()", "sum()"],
                    answer: 3,
                    explanation: "The built-in `sum()` function is very efficient for summing numerical iterables."
                },
                {
                    id: "py-ch9-q9",
                    type: "multiple-choice",
                    question: "What is the difference between 'my_list.sort()' and 'sorted(my_list)'?",
                    options: ["None", "'sort()' changes the original list, 'sorted()' returns a new sorted list", "'sorted()' changes the original, 'sort()' returns new", "'sort()' only works with numbers"],
                    answer: 1,
                    explanation: "`.sort()` is an 'in-place' method, while `sorted()` is a function that preserves the original."
                },
                {
                    id: "py-ch9-q10",
                    type: "multiple-choice",
                    question: "What happens when using the '+' operator between two lists?",
                    options: ["Sums the values mathematically", "Generates an error", "Concatenates the two lists into a new one", "Returns a boolean"],
                    answer: 2,
                    explanation: "The `+` operator for lists works like string concatenation."
                }
            ],
            "py-ch10": [
                {
                    id: "py-ch10-q1",
                    type: "multiple-choice",
                    question: "Which keyword is used to define a function in Python?",
                    options: ["function", "def", "func", "define"],
                    answer: 1,
                    explanation: "In Python, we use `def` (short for define) to declare a new function."
                },
                {
                    id: "py-ch10-q2",
                    type: "multiple-choice",
                    question: "What is the 'return' keyword used for?",
                    options: ["To stop function execution and send a value back", "To print a value", "To repeat the function", "To define the function name"],
                    answer: 0,
                    explanation: "`return` exits the function and gives the result back to the caller."
                },
                {
                    id: "py-ch10-q3",
                    type: "multiple-choice",
                    question: "What happens if a function does not have a 'return' keyword?",
                    options: ["It generates an error", "It returns nothing", "It returns 'None'", "It returns 0"],
                    answer: 2,
                    explanation: "In Python, every function implicitly returns `None` if no other value is specified."
                },
                {
                    id: "py-ch10-q4",
                    type: "multiple-choice",
                    question: "How do you define a default value for a parameter (e.g., default 'name' is 'Guest')?",
                    options: ["def hello(name='Guest'):", "def hello(name : 'Guest'):", "def hello(set name='Guest'):", "def hello(default name='Guest'):"],
                    answer: 0,
                    explanation: "Default parameters make arguments optional when calling the function."
                },
                {
                    id: "py-ch10-q5",
                    type: "multiple-choice",
                    question: "What are 'docstrings' in a function used for?",
                    options: ["To decorate code", "To document what the function does (accessible via help())", "To protect code against hackers", "To define global variables"],
                    answer: 1,
                    explanation: "Docstrings are literal strings written right after the function definition using triple quotes."
                },
                {
                    id: "py-ch10-q6",
                    type: "multiple-choice",
                    question: "What does the '*args' parameter mean in a function definition?",
                    options: ["The function accepts only mandatory arguments", "The function can receive a variable number of positional arguments", "Arguments will be multiplied", "It is a syntax error"],
                    answer: 1,
                    explanation: "The `*` packs extra arguments into a tuple."
                },
                {
                    id: "py-ch10-q7",
                    type: "multiple-choice",
                    question: "What does the '**kwargs' parameter mean?",
                    options: ["Receives named arguments (keywords) as a dictionary", "Receives exactly two arguments", "Multiplies the value by 100", "Defines a class"],
                    answer: 0,
                    explanation: "The `**` allows capturing `key=value` type arguments."
                },
                {
                    id: "py-ch10-q8",
                    type: "multiple-choice",
                    question: "Can a variable created inside a function be accessed outside of it?",
                    options: ["Yes, always", "Yes, if we use global", "No, by default scope is local", "Only if it is a list"],
                    answer: 2,
                    explanation: "Local variables are 'born' and 'die' within the function."
                },
                {
                    id: "py-ch10-q9",
                    type: "multiple-choice",
                    question: "What is a 'lambda' function?",
                    options: ["A very long function", "A single-line anonymous function", "A function that generates errors on purpose", "A type of numeric data"],
                    answer: 1,
                    explanation: "Lambdas are useful for simple, quick operations, often used with `map` or `filter`."
                },
                {
                    id: "py-ch10-q10",
                    type: "multiple-choice",
                    question: "In Python, functions are treated as 'first-class objects'. What does this mean?",
                    options: ["They are more important than variables", "They can be passed as arguments to other functions", "They only work in the main class", "They always run first"],
                    answer: 1,
                    explanation: "This enables powerful functional programming, allowing functions that create or operate on other functions."
                }
            ],
            "py-ch11": [
                {
                    id: "py-ch11-q1",
                    type: "multiple-choice",
                    question: "How do you import only a specific function (e.g., 'sqrt') from a module (e.g., 'math')?",
                    options: ["import math.sqrt", "from math import sqrt", "fetch sqrt from math", "using math (sqrt)"],
                    answer: 1,
                    explanation: "The `from module import component` syntax allows importing specific parts of a module without loading everything."
                },
                {
                    id: "py-ch11-q2",
                    type: "multiple-choice",
                    question: "What is a 'package' in Python?",
                    options: ["A .zip file", "A directory containing an __init__.py file", "A script with more than 1000 lines", "A library installed via pip"],
                    answer: 1,
                    explanation: "The `__init__.py` file tells Python that the directory should be treated as a package."
                },
                {
                    id: "py-ch11-q3",
                    type: "multiple-choice",
                    question: "How do you import a module named 'utils' that is inside a package named 'my_app'?",
                    options: ["import my_app.utils", "from my_app import utils", "both of the above", "load my_app/utils"],
                    answer: 2,
                    explanation: "Both ways are valid for accessing modules within packages."
                },
                {
                    id: "py-ch11-q4",
                    type: "multiple-choice",
                    question: "What is the 'as' keyword used for in imports?",
                    options: ["To define the file path", "To give an alias to the module or function", "To import as a string", "To hide the module"],
                    answer: 1,
                    explanation: "E.g., `import pandas as pd` saves typing time and avoids name conflicts."
                },
                {
                    id: "py-ch11-q5",
                    type: "multiple-choice",
                    question: "What is the purpose of the '__init__.py' file (even if empty)?",
                    options: ["Initialize the operating system", "Execute the main code", "Mark the directory as a Python package", "Configure the database"],
                    answer: 2,
                    explanation: "In modern Python versions it can be optional, but it remains the standard way to mark packages."
                },
                {
                    id: "py-ch11-q6",
                    type: "multiple-choice",
                    question: "What happens if you import the same module twice in the same script?",
                    options: ["Generates a 'DuplicatedImport' error", "Python imports the module from disk again", "Python uses the version already loaded in memory (sys.modules)", "The computer freezes"],
                    answer: 2,
                    explanation: "Python is efficient and loads a module only once, no matter how many times the `import` statement appears."
                },
                {
                    id: "py-ch11-q7",
                    type: "multiple-choice",
                    question: "How do you perform a relative import of the 'config' module in the same directory?",
                    options: ["from . import config", "import .config", "from current import config", "import self.config"],
                    answer: 0,
                    explanation: "The dot `.` refers to the current package in relative imports."
                },
                {
                    id: "py-ch11-q8",
                    type: "multiple-choice",
                    question: "Which system variable contains the list of directories where Python looks for modules?",
                    options: ["sys.path", "os.directories", "python.lib", "env.path"],
                    answer: 0,
                    explanation: "You can even add new paths manually to the `sys.path` list."
                },
                {
                    id: "py-ch11-q9",
                    type: "multiple-choice",
                    question: "How do you reload a module that has been changed without closing the Python console?",
                    options: ["importlib.reload(module)", "reload module", "refresh(module)", "import module again"],
                    answer: 0,
                    explanation: "The `reload` function from the `importlib` module is essential for development in REPL."
                },
                {
                    id: "py-ch11-q10",
                    type: "multiple-choice",
                    question: "What is the Python 'Standard Library'?",
                    options: ["A paid library", "The set of modules that come pre-installed with Python", "Books about Python", "The official manual"],
                    answer: 1,
                    explanation: "Python is known for having 'batteries included', offering modules for almost everything by default."
                }
            ],
            "py-ch12": [
                {
                    id: "py-ch12-q1",
                    type: "multiple-choice",
                    question: "How do you catch an exception in Python to prevent the program from stopping?",
                    options: ["try...catch", "try...except", "attempt...catch", "if error:"],
                    answer: 1,
                    explanation: "Python uses the `try...except` block to manage exceptions and errors during execution."
                },
                {
                    id: "py-ch12-q2",
                    type: "multiple-choice",
                    question: "Which code block is ALWAYS executed, whether an error occurs or not?",
                    options: ["except", "else", "finally", "always"],
                    answer: 2,
                    explanation: "The `finally` block is ideal for closing files or releasing resources, regardless of failures."
                },
                {
                    id: "py-ch12-q3",
                    type: "multiple-choice",
                    question: "What is the 'else' block in a try/except set used for?",
                    options: ["Executes if an error occurs", "Executes if NO exception occurs in the try block", "It is same as finally", "Defines the default error"],
                    answer: 1,
                    explanation: "The `else` block helps separate code that might fail from the logic that should follow success."
                },
                {
                    id: "py-ch12-q4",
                    type: "multiple-choice",
                    question: "How do you capture an exception object to read the error message?",
                    options: ["except Exception as e:", "except e as Exception:", "catch(e):", "if error(e):"],
                    answer: 0,
                    explanation: "Using `as e` allows access to error details, such as the technical message."
                },
                {
                    id: "py-ch12-q5",
                    type: "multiple-choice",
                    question: "Which keyword is used to FORCE an exception to occur?",
                    options: ["error", "throw", "raise", "stop"],
                    answer: 2,
                    explanation: "In Python we use `raise`, while languages like JS or Java use `throw`."
                },
                {
                    id: "py-ch12-q6",
                    type: "multiple-choice",
                    question: "What happens if you use 'except:' without specifying the error type?",
                    options: ["Generates a compilation error", "Captures absolutely any error (not recommended)", "Captures only syntax errors", "Does nothing"],
                    answer: 1,
                    explanation: "This is discouraged because it can hide unexpected bugs that you did not intend to handle."
                },
                {
                    id: "py-ch12-q7",
                    type: "multiple-choice",
                    question: "How do you capture multiple specific errors in different ways?",
                    options: ["Using multiple 'except' blocks", "Using commas in the try block", "It is not possible", "Using if/else inside the except"],
                    answer: 0,
                    explanation: "You can have an `except ValueError:` followed by an `except ZeroDivisionError:`, etc."
                },
                {
                    id: "py-ch12-q8",
                    type: "multiple-choice",
                    question: "Which error occurs when trying to divide a number by zero?",
                    options: ["DivideError", "ZeroDivisionError", "MathError", "NullError"],
                    answer: 1,
                    explanation: "Python interrupts execution if you try to divide by 0 without handling it."
                },
                {
                    id: "py-ch12-q9",
                    type: "multiple-choice",
                    question: "What is the common error when trying to access a key that doesn't exist in a dictionary?",
                    options: ["KeyError", "NotFoundError", "DictError", "IndexError"],
                    answer: 0,
                    explanation: "Unlike lists (IndexError), dictionaries raise a `KeyError`."
                },
                {
                    id: "py-ch12-q10",
                    type: "multiple-choice",
                    question: "What is the 'assert' keyword used for?",
                    options: ["To define a variable", "To test if a condition is true and raise an error if false", "To speed up code", "To comment multiple lines"],
                    answer: 1,
                    explanation: "Assertions are mainly used for debugging and internal testing during development."
                }
            ]
        }
    }
};
