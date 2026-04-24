# BRITO.TASKS | Core Technical Tasks

O BRITO.TASKS é um ecossistema dinâmico de geração de exercícios técnicos, projetado para elevar o nível de aprendizado em lógica de programação e arquitetura de software. Este projeto foca na entrega de desafios práticos e personalizados, unindo uma interface de alta fidelidade visual com uma estrutura de código robusta e escalável.

# 🛠️ Pilares Tecnológicos

O desenvolvimento foi guiado por princípios modernos de engenharia de software, garantindo que a plataforma seja modular e de fácil expansão:

- Interface: Design Industrial Minimalist com foco em Dark Mode, Glassmorphism e usabilidade mobile-first.

- Core: Engine em JavaScript (ES6+) focada na manipulação eficiente de estados e filtragem dinâmica de dados.

- Arquitetura: Organização baseada em Atomic Design, separando componentes de interface da lógica de negócio.

- Clean Code & SOLID: Código escrito para ser legível, testável e de fácil manutenção.

## 🚀 Funcionalidades 

| Funcionalidade | Descrição |
| :--- | :--- |
| **Gerador Dinâmico** | Criação de tarefas baseadas em tecnologia e nível de dificuldade (Média, Alta, etc). |
| **Copy to Clipboard** | Fluxo de trabalho otimizado com a função "Copiar Enunciado" instantânea. |
| **Filtro de Stack** | Suporte a múltiplas tecnologias: JavaScript, React, SQL, HTML/CSS e mais. |
| **Mobile-First** | Interface totalmente responsiva, ideal para consulta rápida em qualquer dispositivo. |

## 📐 Padrões de Qualidade (QA)
Para garantir que o BRITO.TASKS entregue uma experiência livre de bugs:

- Clean Code: Nomenclatura de variáveis semânticas e funções de responsabilidade única.

- DRY (Don't Repeat Yourself): Centralização da lógica de filtragem para evitar redundância entre diferentes stacks.

- Performance: Carregamento otimizado de assets e manipulação eficiente do DOM para garantir 60fps em dispositivos móveis.

⚙️ Core Engine: A API de Dados com JavaScript
O diferencial técnico do projeto reside na sua Engine de Distribuição de Tarefas. Em vez de uma estrutura estática, criamos uma "API interna" organizada em um objeto literal que simula um serviço de backend, permitindo consultas rápidas e filtragem dinâmica sem latência de rede.

## 🧠 Lógica de Filtragem e Acesso

A API interna permite que a interface se comunique com os dados através de chaves dinâmicas, garantindo escalabilidade infinita.

Destaques técnicos:

- Acesso por Chave Dinâmica: Utilização de britoTasks[selectedTech] para acesso performático.

- Filtragem de Complexidade: Uso do método .filter() para realizar o match exato com o campo level.

- Algoritmo de Randomização: Sistema que seleciona índices aleatórios para garantir que o usuário receba desafios variados.

```javascript
// Exemplo da estrutura de resposta da nossa API interna
{ 
  level: "Média", 
  title: "Filtro de Array", 
  task: "Dado [10, 25, 30, 50], use .filter() para criar um novo array apenas com valores > 20." 
}
```

## ⚙️ Compilador Integrado

O **Compilador Integrado** é o núcleo do BRITO.TASKS, transformando a plataforma em um ambiente de codificação responsivo e multilíngue diretamente no navegador.

- **Editor Monaco**: fornece realce de sintaxe dinâmico, layout automático, fontes maiores e quebra automática de texto para legibilidade móvel.
- **Execução em vários idiomas**: 
- **JavaScript**: Executado nativamente via `Function` com interceptação do console. 
- **Python**: Desenvolvido por **Pyodide**, um tempo de execução Python baseado em WebAssembly. 
- **TypeScript**: Transpilado em tempo real usando o compilador TypeScript oficial (`ts.transpile`). 
- **HTML/CSS**: Renderizado instantaneamente através de `iframe.srcdoc`. 
- **Tailwind CSS**: injetado dinamicamente via CDN (`https://cdn.tailwindcss.com`).
- **Terminal interativo**: estilizado com Tailwind, simulando um console real para feedback imediato.
- **Visualização responsiva**: área dedicada para renderização de saídas HTML, CSS e Tailwind, otimizada para dispositivos móveis e desktop.
- **Navegação**: botão Voltar com ícone SVG integrado ao cabeçalho para fluxo intuitivo do usuário.

# 🚀 Como Executar o Projeto

```bash
# Clone o repositório
git clone https://github.com/FelipeBritoSP10/brito-task-engine

# Acesse a pasta do projeto
cd brito-task-engine

```

## 🚀 Roadmap de Evolução
O que está por vir no ecossistema:

[ ] Persistência Local: Salvar histórico de desafios concluídos via localStorage.

[ ] Modo Offline: Implementação de PWA para acesso aos exercícios sem conexão.

[ ] Cypress Integration: Testes automatizados para validar a geração de cada stack.

[ ] Timer de Performance: Cronômetro integrado para desafios de tempo (Code Katas).

## 🤝 Contribuição e Mentoria

Este projeto é a base técnica para as sessões de minha mentoria.

Mentoria: Projetado para simular o ambiente real de trabalho, o uso desta ferramenta auxilia na transição de desenvolvedores para o nível profissional.**
