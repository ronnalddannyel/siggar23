
function removeAllLayer(id, id2, id3, el, li){

    // remover todos os mapas e camadas

    map.removeLayer(areaImov);
    map.removeLayer(areaProjeto);
    map.removeLayer(monitor);
    map.removeLayer(areaInalienaveis);
    map.removeLayer(areaMilit);
    map.removeLayer(limiteTerraIndigena);
    map.removeLayer(undConserEst);
    map.removeLayer(undConserFed);
    map.removeLayer(sedesMunic);
    map.removeLayer(markers1);
    map.removeLayer(rodovia);
    map.removeLayer(hidrografia);
    map.removeLayer(hidroMasDagua);
    map.removeLayer(projAssent);
    map.removeLayer(glebas);
    map.removeLayer(minerAtivos);
    map.removeLayer(iphanSitArq);
    map.removeLayer(markers);
    map.removeLayer(groupLayQueimada);
    map.removeLayer(embarg);
    map.removeLayer(markers3);
    map.removeLayer(markers4);
    map.removeLayer(markers5);
    map.removeLayer(areaImov_4mf);
    map.removeLayer(areaProjeto_4mf);
    map.removeLayer(monitor_4mf);
    map.removeLayer(basemap);
    map.removeLayer(satelite);
    map.removeLayer(NatGeo);
    map.removeLayer(googleSat);
    map.removeLayer(googleStreets);
    map.removeLayer(googleHybrid);
    map.removeLayer(planet);

    // adicionar mapa e camada inicial

    map.addLayer(googleTerrain);
    map.addLayer(limitesMunic);


    // desmarcar os checkboxs das camadas

    while (id<36){
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

    // Tirar da legenda as demais camadas

    var cont = 1;

    while(cont<43) {
    
      var res = el + cont;
      console.log(res);
      var display = document.getElementById(res).style.display;
      if(display == "block"){
        document.getElementById(res).style.display = 'none';
      }
      cont++;
    }

  }