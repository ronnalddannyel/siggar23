
function removeAllLayer(id, id2, id4, id3, el, li, li1){

    // remover todos os mapas e camadas

    map.eachLayer(function (layer) {
      map.removeLayer(layer);
    });

    // adicionar mapa e camada inicial

    map.addLayer(googleTerrain);
    map.addLayer(limitesMunic);
    map.addLayer(estadosLimites);


    // desmarcar os checkboxs das camadas

    while (id<37){
    var status = document.getElementById(id);
      if (status.checked) {
        status.checked = false;
      }
      id++;
      console.log(id);
    }

    // Marcar os checkboxs camada limites municipais

    var status1 = document.getElementById(id2);

    if (status1.checked) {
      status.checked = false;
    } else {
      status1.checked = true;
    }

    // Marcar os checkboxs camada limites dos estados

    var status1 = document.getElementById(id4);

    if (status1.checked) {
      status.checked = false;
    } else {
      status1.checked = true;
    }

    // Marcar radio do mapa Google Terrain

    var status2 = document.getElementsByName(id3);

    for (var i = 0; i < status2.length; i++) {
    if (status2[i].id === "coor2") {
      status2[i].checked = true;
    }
    }

    // Mostrar Limites municipais na legenda
    
    var teste = document.getElementById(li).style.display;
    if(teste == "none"){
      document.getElementById(li).style.display = 'block';
    }

    // Mostrar Limites dos Estados na legenda

    var teste1 = document.getElementById(li1).style.display;
    if(teste1 == "none"){
      document.getElementById(li1).style.display = 'block';
    }

    // Tirar da legenda as demais camadas

    var cont = 1;

    while(cont<44) {
    
      var res = el + cont;
      console.log(res);
      var display = document.getElementById(res).style.display;
      if(display == "block"){
        document.getElementById(res).style.display = 'none';
      }
      cont++;
    }

  }