
<h1 align="center">TypeScript @2023</h1>


>  Projeto em Constante construção
<hr>

# Índice


- [Índice](#índice)
- [Funcionalidades do projeto](#funcionalidades-do-projeto)
- [Estrutura do porjeto](#estrutura-do-porjeto)
- [📁 Acesso ao projeto](#-acesso-ao-projeto)
- [🛠️ Abrir e rodar o projeto](#️-abrir-e-rodar-o-projeto)
  - [Instalando o TypeScript](#instalando-o-typescript)
- [Inicio](#inicio)
  - [tsconfig.json](#tsconfigjson)
    - [Exemplo 1](#exemplo-1)
    - [Exemplo 2](#exemplo-2)
    - [Configurações `Básicas`](#configurações-básicas)
- [Construindo um arquivo `Typescript`](#construindo-um-arquivo-typescript)
- [Interfaces](#interfaces)
  - [exemplo](#exemplo)
- [Classes](#classes)
  - [exemplo](#exemplo-1)

<hr>

# Funcionalidades do projeto

- `Funcionalidade 1`: descrição da funcionalidade 1
- `Funcionalidade 2`: descrição da funcionalidade 2
- `Funcionalidade 2`: descrição da funcionalidade 3
- `Funcionalidade 3`: descrição da funcionalidade 4

<hr>

# Estrutura do porjeto
```
src
│   app.js             # Classe app
│   server.js          # Server para iniciar o app
└───api
  └───controllers      # Funções da controllers do express route
    └───database
      └───migrations   # Utilizado migrations
      └───seeds        # Utilizado seeds
  └───models           # Modelos do banco de dados -sequelize - orm
  └───repositories     # Query builders
  └───services         # Regras de negócio
└───config             # Configuração das variaveis de ambiente / banco /email/chave secret
└───utils              # Trechos de código pequeno
└───helpers            # Trechos de arquitetura de código
└───routes             # Definição de rotas express
└───interface          # Tipagem (d.ts) para Typescript
└───constants          # Definição de strings Error
└───test
  └───unit             # Testes unitarios
  └───integartion      # Teste de integracao
```

# 📁 Acesso ao projeto

**baixar ou acessar o código fonte do projeto,**

# 🛠️ Abrir e rodar o projeto

**Apresente as instruções necessárias para abrir e executar o projeto**
## Instalando o TypeScript
npm install typescript --save-dev
npx tsc

A presenca de um arquivo `tsconfig.json` em um diretorio, indica que esse diretorio e a raiz do projeto Typescript
O  arquivo `tsconfig.json` especifica os arquivo raiz e as configuracoes de compilacao necessaria para o projeto

<hr>

# Inicio
## tsconfig.json
### Exemplo 1
Exemplo de arquivos tsconfig.json:

Usando a propriedade "files"
```
{
  "compilerOptions": {
    "module": "commonjs",
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "sourceMap": true
  },
  "files": [
    "core.ts",
    "sys.ts",
    "types.ts",
    "scanner.ts",
    "parser.ts",
    "utilities.ts",
    "binder.ts",
    "checker.ts",
    "emitter.ts",
    "program.ts",
    "commandLineParser.ts",
    "tsc.ts",
    "diagnosticInformationMap.generated.ts"
  ]
}
```
### Exemplo 2

Usando as propriedades "include" e "exclude"
```
{
  "compilerOptions": {
    "module": "system",
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "outFile": "../../built/local/tsc.js",
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

### Configurações `Básicas`

  Por exemplo, se você está desenvolvendo um projeto que usa Node.js na versão 12 ou mais recente,
então você pode usar o módulo npm @tsconfig/node12
```
  "extends": "@tsconfig/node12/tsconfig.json",
  "compilerOptions": {
    "preserveConstEnums": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
```
<hr>

# Construindo um arquivo `Typescript`
```
function greeter(person) {
  return "Hello, " + person;
}

let user = "Jane User";

document.body.textContent = greeter(user);

## Compilando seu código
tsc greeter.ts

O resultado será um arquivo greeter.jsque contém o mesmo JavaScript que você inseriu. Estamos usando TypeScript em nosso aplicativo JavaScript!
```
<hr>

# Interfaces
  Aqui usamos interface que descreve objetos que possuem os campos e refenciado aos type. Isso mos permite implementar uma unica inteface tendo a formma que a inteface requer, sem clasula implements explicita

## exemplo
```
interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

document.body.textContent = greeter(user);

<hr>
```

# Classes
  Typescript oferece suporte a novos recursos em javascript, como suporte para  programacao orientada a objetos em classes.

  Tambem digno de nota, o uso de public em argumentos 'args' para o construtor e uma forma abreviada que nos permite criar propiuedades automaticamente com aque nome.

## exemplo
```
class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.textContent = greeter(user);
```