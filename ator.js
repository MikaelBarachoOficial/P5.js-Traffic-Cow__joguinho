//Pontuação
let pontos = 0;
let podeMover = true;

//código do ator
let xAtor = 100;
let yAtor = 366;
let colidiu = false;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
 if(podeMover == true){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 2;
  }
  if (keyIsDown(DOWN_ARROW) && yAtor < 367){
    yAtor += 2;
  }
  if (keyIsDown(LEFT_ARROW) && xAtor > 0){
    xAtor -= 2;
  }
  if (keyIsDown(RIGHT_ARROW) && xAtor < 470){
    xAtor += 2;
 }
 } 
}



function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xAtor, yAtor, 15)
    if (colisao){
      print("Colidiu")
      somDaColisao.play();
      xAtor = 100;
      yAtor = 366;
      pontos = 0;
    }
  } 
}

function pontuacao(){
  textSize(32);
  fill(255);
  text(pontos, 350, 29);
  
  if(yAtor < 0){
    pontos++
    somDoPonto.play();
    xAtor = 100;
    yAtor = 366;
  //Impedir rapidamente o ator de mover pra não avançar e perder os pontos  
    podeMover = false; // impede o ator de se mover
  setTimeout(function() {
    podeMover = true; // permite que o ator se mova novamente após 1 segundo
  }, 400);
  }
}
