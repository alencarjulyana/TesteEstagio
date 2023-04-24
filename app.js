function abrirmenu(){
    let BarraMenuAberto = document.getElementById ('barra-menu');
    
    if (BarraMenuAberto.style.width == "0px"){
        BarraMenuAberto.style.width = "300px";
    }else{
        BarraMenuAberto.style.width = "0px";
    }
}

function loopLogomarcas() {
    var lista = document.getElementById("lista-logomarcas");
    var primeiraLogomarca = lista.children[0];
    var larguraLogomarca = primeiraLogomarca.offsetWidth;
    lista.style.transition = "all 0.2s ease-in-out";
    lista.style.transform = "translateX(-" + larguraLogomarca + "px)";
    setTimeout(function() {
      lista.appendChild(primeiraLogomarca);
      lista.style.transition = "none";
      lista.style.transform = "translateX(0)";
      setTimeout(loopLogomarcas, 900);
    }, 900);
  }
  loopLogomarcas();



