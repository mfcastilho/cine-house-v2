
//importações
const catalogo = require("./database/filmes.json");
const funcoes = require("./funcoes/funcoes.js");
const ClassNovoFilme = require("./classes/ClassNovoFilme.js")



//invocando as funções
funcoes.listarTodosOsFilmes(catalogo);
console.log(funcoes.buscarFilme(1));
funcoes.adicionarFilme(funcoes.criarNovoFilme);
funcoes.alterarStatusEmCartaz(4);
funcoes.listarFilmesDeLongaDuracao();
funcoes.removerFilme(5);
funcoes.listarTodosOsFilmes(catalogo);