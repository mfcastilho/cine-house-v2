//importanto classe CLassNovoFilme
let CLassNovoFilme = require("../classes/ClassNovoFilme.js");

//importando catalogo.json
let catalogo = require("../database/filmes.json");


//Objeto funcoes
let funcoes = {

  //Função que criar um novo filme
    criarNovoFilme: ()=>{
    let novoFilme = new CLassNovoFilme(11, "Central do Brasil", 1.55, ["Fernanda Montenegro", "Matheus Nachtergaele"], 1998, false);
    return novoFilme;
    },

    //Função de adicionar novo filme ao catalogo
    adicionarFilme: criarNovoFilme =>{
      console.log("-----MENU ADICIONAR FILME-----");
      catalogo.push(criarNovoFilme());
      console.log("Filme adicionado com sucesso!");
    },
  
    //Função que busca filme
      buscarFilme: codigo =>{
        console.log("-----MENU BUSCAR FILME-----");
      for(let filme of catalogo){
        if(filme.codigo == codigo){
          return filme;
        }
      }
    },
  
    //Função que altera o status do filme
      alterarStatusEmCartaz: codigo =>{
        console.log("-----MENU ALTERAR STATUS FILME-----");
      for(let filme of catalogo){
        if(filme.codigo == codigo){
          filme.emCartaz = !filme.emCartaz;
          console.log("Status fo filme alterdo com sucesso!");
        }
      }
    },
  
  
    //Funçãoq que lista os filmes
      listarTodosOsFilmes: catalogo =>{
        console.log("-----MENU LISTAR TODOS OS FILMES-----");
        console.table(catalogo);
    },
  
    //Função listar os filmes de longa duração
      listarFilmesDeLongaDuracao: () =>{
        console.log("-----MENU LISTAR FILMES DE LONGA DURAÇÃO-----");
      let filmesLongaDuracao = catalogo.filter(filme =>{
        return filme.duracao >= 2;
      })
    
      console.log(filmesLongaDuracao);
    },
  
  //Função remove filme do catálogo
    removerFilme: codigo =>{
      console.log("-----MENU REMOVER FILME-----");
    let posicao = 0;
    for(let i = 0; i< catalogo.length; i++){
      if(catalogo[i].codigo == codigo){
        posicao = i;
      }
    }
    catalogo.splice(posicao, 1);
    console.log("Filme removido com sucesso!");
  }
  
}


module.exports = funcoes;