//código do carro
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 260, 310];
let velocidadeCarros = [4.9, 6, 5.5, 4.5, 5, 3.8];
let comprimentoCarros = 60;
let alturaCarros = 40;


function mostraCarro(){
 
  for(let i = 0; i < imagemCarros.length; i += 1){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
  
 }

}

function movimentaCarro(){
 for(let i = 0; i < imagemCarros.length; i += 1){
  xCarros[i] -= velocidadeCarros[i];
  
 }
}

function voltaPosicaoInicialDoCarro(){
 for(let i = 0; i < imagemCarros.length; i += 1){
  if (passouTodaATela(xCarros[i])){
    xCarros[i] = 550
  }
  
 }
}

function passouTodaATela(x){
  return x < -50;
  
}

