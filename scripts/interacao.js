document.addEventListener("DOMContentLoaded", function () {
    let factos = document.querySelectorAll(".facto");
    let imagensFactos = document.querySelectorAll(".image-facto");

    // ADICIONA FACTOS
    document.addEventListener("click", function (event) {
        // Verifica se o clique não ocorreu dentro de um elemento com as classes .facto ou .topo
        let isOutsideFactoTopo = event.target.closest('.facto, .player>img, .texto') === null;

        if (isOutsideFactoTopo) {
            let factosArray = Array.from(factos);
            factosArray.sort(function () {
                return 0.7 - Math.random();
            });

            let randomFacto = factosArray.find(function (facto) {
                return facto.style.display !== "block";
            });

            if (randomFacto) {
                randomFacto.style.left = event.clientX + "px";
                randomFacto.style.top = event.clientY + "px";
                randomFacto.style.display = "block";
            }
        }
    });


  

    //MUDA O ESTILO
    let index = 0;
    let videos = document.querySelectorAll('.fundo video');
    let clickCount = 0;

    let movimentosSexy = ["batida", "rodar", "balada"];

    let botaoMudarVideo = document.getElementById("trocar");

    botaoMudarVideo.addEventListener("click", function () {

        clickCount++;

        imagensFactos.forEach(function (imagensFactos) {
            imagensFactos.classList.add(movimentosSexy[clickCount - 1])
            imagensFactos.classList.remove(movimentosSexy[clickCount - 2])
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
            index = (index + 1) % videos.length;

            // Mostra o próximo vídeo
            videos[index].style.display = 'block';

            // Ativa o som e reproduz o vídeo
            videos[index].muted = false;
            videos[index].play();
        }
    })




});


let isMuted = false;
let currentSource = "src/som.svg";
const videos = document.querySelectorAll('video');

// Função para alternar entre tirar e colocar o volume e trocar a origem da imagem
function toggleVolume() {
    // Alterna o estado do volume
    isMuted = !isMuted;

    videos.forEach(video => {
        video.muted = isMuted;
    });


    if (isMuted) {
        currentSource = "src/semsom.svg";
    } else {
        currentSource = "src/som.svg";
    }

    // Atualiza a origem da imagem
    document.getElementById("volumeControl").src = currentSource;


}