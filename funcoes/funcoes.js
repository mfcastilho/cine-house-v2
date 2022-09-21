
//importanto classe CLassNovoFilme
let CLassNovoFilme = require("../classes/ClassNovoFilme.js");

//importando catalogo.json
let catalogo = require("../database/filmes.json");


//Função que criar um novo filme
let criarNovoFilme = ()=>{
  let novoFilme = new CLassNovoFilme(11, "Central do Brasil", 1.55, ["Fernanda Montenegro", "Matheus Nachtergaele"], 1998, false);
  return novoFilme;
}


//Função de adicionar novo filme ao catalogo
let adicionarFilme = criarNovoFilme =>{
  catalogo.push(criarNovoFilme());
  console.log("Filme adicionado com sucesso!");
}

//Função que busca filme
let buscarFilme = codigo =>{
  for(let filme of catalogo){
    if(filme.codigo == codigo){
      //console.log(filme);
      return filme;
    }
  }
}

//Função que altera o status do filme
let alterarStatusEmCartaz = codigo =>{
  for(let filme of catalogo){
    if(filme.codigo == codigo){
      filme.emCartaz = !filme.emCartaz;
      console.log("Status fo filme alterdo com sucesso!");
    }
  }
}


//Funçãoq que lista os filmes
let listarTodosOsFilmes = catalogo =>{

  console.table(catalogo);
}

let listarFilmesDeLongaDuracao = () =>{
  // for(let filme of catalogo){
  //   if(filme.duracao >= 2){
  //     console.log(filme);
  //   }
  // }

  let filmesLongaDuracao = catalogo.filter(filme =>{
    return filme.duracao >= 2;
  })

  console.log(filmesLongaDuracao);
}

//Função remove filme do catálogo
let removerFilme = codigo =>{
  // for(let i = 0; i< catalogo.length; i++){
  //   if(catalogo[i].codigo == codigo){
  //     catalogo.splice(i,1);
  //   }
  // }

  let filmePraRemover = catalogo.filter(filme =>{
    if(filme.codigo == codigo){
      return catalogo.indexOf(filme);
    }
  });

  catalogo.splice(filmePraRemover);
  console.log("Filme removido com sucesso!");
}


listarTodosOsFilmes(catalogo);
console.log(buscarFilme(1));
adicionarFilme(criarNovoFilme);
alterarStatusEmCartaz(4);
listarFilmesDeLongaDuracao();
removerFilme(5);