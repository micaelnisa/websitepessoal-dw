document.addEventListener("DOMContentLoaded", function () {
    let factos = document.querySelectorAll(".facto");
    let imagensFactos = document.querySelectorAll(".image-facto");

    //console.log(factos)

    //ADICIONA FACTOS
    document.querySelector(".factos").addEventListener("click", function (event) {
     
        let factosArray = Array.from(factos);
        factosArray.sort(function () {
            return 0.5 - Math.random();
        });

       
        let randomFacto = factosArray.find(function (facto) {
            return facto.style.display !== "block";
        });

        if (randomFacto) {
          
            randomFacto.style.left = event.clientX + "px";
            randomFacto.style.top = event.clientY + "px";
           
            randomFacto.style.display = "block";
        }
    });

    //MUDA O ESTILO
    let index = 0;
    let videos = document.querySelectorAll('.fundo video');
    let clickCount = 0;

    let movimentosSexy = ["movendo", "rodar-e-mover", "imagem-facto"];

    let botaoMudarVideo = document.getElementById("trocar");

    botaoMudarVideo.addEventListener("click", function(){

        clickCount++;

        imagensFactos.forEach(function(imagensFactos){
            imagensFactos.classList.add(movimentosSexy[clickCount-1])
            imagensFactos.classList.remove(movimentosSexy[clickCount-2])
        })
        

        if (clickCount > 3) {
            // Oculta todos os vídeos
            videos.forEach(function (video) {
                video.pause();
                video.currentTime = 0;
                video.style.display = 'none';
            });

            
            clickCount = 0;
        } else {
            // Pausa e reinicia todos os vídeos
            videos.forEach(function (video) {
                video.pause();
                video.currentTime = 0;
                video.style.display = 'none';
            });

            // Atualiza o índice para o próximo vídeo
            index  = (index  + 1) % videos.length;

            // Mostra o próximo vídeo
            videos[index].style.display = 'block';

            // Ativa o som e reproduz o vídeo
            videos[index].muted = false;
            videos[index] .play();
        }
    })


    //MUDA O VIDEO A TOCAR
    function playNextVideo() {

    }

});