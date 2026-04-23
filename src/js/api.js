const britoTasks = {
    javascript: [
        { level: "Iniciante", title: "Arrow Function Soma", task: "Crie uma arrow function que receba n1 e n2 e retorne a soma no console." },
        { leve:  "Iniciante", title: "Manipulação de Arrays", task: "No array ['React', 'Vue'], adicione 'Angular' ao final e exiba o novo tamanho do array." },
        { level: "Iniciante", title: "Criação de Objeto", task: "Crie um objeto 'aluno' com nome e curso, e exiba no console usando Template Strings." },
        { level: "Iniciante", title: "Remoção em Array", task: "No array ['Maçã', 'Banana', 'Uva'], remova o último item e exiba a lista atualizada." },
        { level: "Iniciante", title: "Condicional Simples", task: "Verifique se um número é maior que 10 e exiba 'Sim' ou 'Não' no console." },
        { level: "Média", title: "Filtro de Array", task: "Dado [10, 25, 30, 50], use .filter() para criar um novo array apenas com valores > 20." },
        { level: "Média", title: "Map de Preços", task: "Use .map() para triplicar os valores de um array de números [5, 10, 15]." },
        { level: "Avançada", title: "Reduce de Estoque", task: "Use .reduce() para somar o total de produtos de um array de objetos [{qtd: 5}, {qtd: 10}]." }
    ],

    python: [
        { level: "Iniciante", title: "Manipulação de Strings", task: "Crie um programa que receba o nome do usuário e exiba 'Olá [nome], seja bem-vindo!' usando f-strings." },
        { level: "Iniciante", title: "Estrutura Condicional", task: "Escreva um script que receba um número e verifique se ele é par ou ímpar." },
        { level: "Média", title: "List Comprehension", task: "Dada a lista [1, 2, 3, 4, 5, 6], use List Comprehension para criar uma nova lista apenas com os números pares." },
        { level: "Média", title: "Dicionários e Loops", task: "Crie um dicionário com 3 produtos e seus preços. Use um loop for para exibir o nome de cada produto e aplique 10% de desconto no preço." },
        { level: "Avançada", title: "Tratamento de Exceções", task: "Crie uma função que divida dois números, mas use try/except para capturar o erro de divisão por zero (ZeroDivisionError)." },
        { level: "Avançada", title: "Lambda e Map", task: "Use a função map() com uma expressão lambda para elevar ao quadrado todos os números de uma lista: [2, 4, 6, 8]." }
    ],

    react_ts: [
        { level: "Iniciante", title: "Componente & Props", task: "Crie um componente que receba uma prop 'titulo' e renderize em um H2." },
        { level: "Média", title: "Hook useState", task: "Implemente um botão que alterna um texto entre 'Ativo' e 'Inativo' via state." },
        { level: "Avançada", title: "Interface TS", task: "Crie uma interface 'User' com campos opcionais e tipagem para uma lista desse objeto." }
    ],
    html_css: [
        { level: "Iniciante", title: "Estrutura Base", task: "Crie um formulário com labels, inputs e um botão de submit." },
        { level: "Média", title: "Flexbox Center", task: "Alinhe 3 itens lado a lado com espaçamento igual usando justify-content." },
        { level: "Avançada", title: "Glassmorphism", task: "Crie um card que use backdrop-filter e transparência para o efeito de vidro." }
    ],
    styling: [
        { level: "Iniciante", title: "Botão Tailwind", task: "Crie um botão azul com bordas arredondadas e padding lateral maior que o vertical." },
        { level: "Média", title: "Grid Responsivo", task: "Crie um layout que seja 1 coluna em mobile e 3 colunas em telas largas." }
    ],
    sql: [
        { level: "Iniciante", title: "Select Simples", task: "Selecione apenas nome e email de todos os usuários ativos." },
        { level: "Média", title: "Where & Order", task: "Selecione produtos com preço entre 100 e 500, ordenados pelo nome." }
    ]
};
