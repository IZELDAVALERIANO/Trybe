// Agora inverta o lado do triângulo. Por exemplo:
 let n = 5;
 let aster = "*";
 let linha = "";
 let posicao = n;
 let coluna;

  for (let index = 0; index < n ; index++) {
      for(coluna = 0; coluna <= n; coluna ++)
      if( coluna < posicao){
            linha += " "
      } else {
          linha += aster
      }
  
  console.log(linha)
  linha = "";
  posicao -= 1
    }