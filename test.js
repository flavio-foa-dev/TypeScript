
// // Array de nomes para filtrar
// const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

// // Função de filtro
// const filterNames = (names, filter) => {
//   return names.filter((name) => name.startsWith(filter));
// };

// // Exemplo de uso
// const filteredNames = filterNames(names, /a/i);
// console.log(filteredNames); // ["Alice"]



// Array de nomes para filtrar
const names = ["Alice", "Bob", "Charlie", "David", "Eve", 'Bel'];

// Função de filtro
const filterNames = (names, filter) => {
    return names.filter((name) => name.toLowerCase().includes(filter.toLowerCase()));
};

// Exemplo de uso
let filter = "a";
let filteredNames = filterNames(names, filter);
console.log(filteredNames); // ["Alice", "Charlie"]

filter = "be";
filteredNames = filterNames(names, filter);
console.log(filteredNames); // ["Bob"]
