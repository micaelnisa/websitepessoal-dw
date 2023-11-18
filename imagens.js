document.addEventListener("DOMContentLoaded", function () {
    var factos = document.querySelectorAll(".facto");

    document.addEventListener("click", function (event) {
        // Embaralhe as divs "facto" aleatoriamente
        var factosArray = Array.from(factos);
        factosArray.sort(function () {
            return 0.5 - Math.random();
        });

        // Encontre a primeira div "facto" que não está sendo exibida
        var randomFacto = factosArray.find(function (facto) {
            return facto.style.display !== "block";
        });

        if (randomFacto) {
            // Centralize a posição da div "facto" no ponto do clique
            randomFacto.style.left = event.clientX + "px";
            randomFacto.style.top = event.clientY + "px";
            // Exiba a div "facto"
            randomFacto.style.display = "block";
        }
    });
});


