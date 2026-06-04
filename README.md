# Pokédex TypeScript Lite

## Sobre o projeto

O Pokédex TypeScript Lite é uma aplicação back-end simples em Node.js com TypeScript que consulta dados de Pokémon na PokeAPI e organiza os resultados em um catálogo local durante a execução do programa, exibindo tudo pelo terminal.

## Objetivo

Praticar os principais conceitos do Módulo 01:

- Node.js
- TypeScript
- Interfaces e tipagem
- Funções assíncronas
- Fetch e async/await
- Tratamento de erros
- Classes e POO
- Métodos de array
- GitHub e GitFlow
- Kanban

## Tecnologias utilizadas

- Node.js v24
- TypeScript
- TSX
- PokeAPI
- Git e GitHub

## Pré-requisitos

- Node.js instalado
- npm instalado
- Git instalado

## Como instalar

Clone o repositório:

```bash
git clone https://github.com/Guxtavodeoliveira/pokedex-typescript.git
```

Acesse a pasta:

```bash
cd pokedex-typescript
```

Instale as dependências:

```bash
npm install
```

## Como executar

```bash
npm run dev
```

## Estrutura do projeto
pokedex-typescript/
│
├── src/
│   ├── main.ts
│   ├── controllers/
│   │   └── TerminalController.ts
│   ├── services/
│   │   ├── PokeApiService.ts
│   │   └── BoxService.ts
│   ├── models/
│   │   ├── Pokemon.ts
│   │   └── CustomErrors.ts
│   └── utils/
│       └── formatadores.ts
│
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md

## Funcionalidades

- Buscar Pokémon por nome ou ID na PokeAPI
- Tratar erro de Pokémon inexistente sem quebrar o sistema
- Transformar resposta da API em objeto simplificado
- Adicionar Pokémon ao catálogo local
- Impedir Pokémon duplicado
- Listar catálogo formatado no terminal
- Remover Pokémon por ID
- Verificar se todos os Pokémon do catálogo têm nome

## Exemplos de execução

### Busca válida

Entrada testada:
pikachu

Saída obtida:
[OK] pikachu adicionado ao catálogo.
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60

### Busca inválida

Entrada testada:
pokemon-inexistente

Saída obtida:
[ERRO] Pokémon não encontrado: pokemon-inexistente

### Duplicidade

Entrada testada:
adicionar pikachu duas vezes

Saída obtida:
[AVISO] pikachu já está no catálogo.

### Remoção

Entrada testada:
remover ID 25

Saída obtida:
[OK] Pokémon removido do catálogo.

## Conceitos aplicados

### TypeScript
Todos os arquivos usam tipagem explícita em parâmetros, retornos e atributos de classe.

### Interfaces
`PokemonResumo` define a estrutura interna do Pokémon. `PokemonApiResponse` mapeia os campos usados da PokeAPI.

### Fetch e async/await
O `PokeApiService.ts` usa fetch nativo do Node.js com async/await para buscar dados externos.

### Tratamento de erros
O try/catch no `PokeApiService.ts` trata Pokémon inexistente e falhas de conexão sem quebrar o sistema.

### Métodos de array utilizados
- `map` — transforma os tipos da API em array de strings
- `some` — verifica duplicidade e existência antes de remover
- `filter` — remove Pokémon pelo ID
- `forEach` — lista o catálogo no terminal
- `find` — busca Pokémon por ID no catálogo
- `every` — verifica se todos os Pokémon têm nome

### Classe CatalogoPokemon
Atributo privado `pokemons` do tipo `PokemonResumo[]`. Métodos: `adicionar`, `listar`, `remover`, `buscarPorId` e `todosTemNome`.

## Organização do Kanban

Link do Kanban: https://trello.com/b/eQT5PmLm/pokedex-typescript-lite

## Branches utilizadas

- `main` — branch principal de entrega
- `develop` — branch de integração
- `feat/pokedex` — branch de desenvolvimento
- `docs/readme` — branch de documentação

## Melhorias futuras

- Criar menu interativo no terminal
- Salvar catálogo em arquivo JSON
- Exibir HP, ataque e defesa
- Criar filtros por tipo de Pokémon
- Criar uma API própria com Express