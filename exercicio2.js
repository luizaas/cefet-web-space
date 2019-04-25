// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

  let atual=0;
  document.getElementById("proximo").onclick = function () {
      let slide = document.getElementById("slide");
      let prox
      if (atual==4) prox=0;
      else prox=atual+1;
      atual=prox;
      slide.src=servidorDasImagens+todasAsImagens[prox];
      console.log(prox);
  }
  document.getElementById("anterior").onclick = function () {
      let slide = document.getElementById("slide");
      if (atual==0) var ante=4;
      else var ante=atual-1;
      atual=ante;
      slide.src=servidorDasImagens+todasAsImagens[ante];
      console.log(ante);
  }
