
function removeAllLayer(id, id2, id4, id3, el, li, li1){

    // remover todos os mapas e camadas

    map.eachLayer(function (layer) {
      map.removeLayer(layer);
    });

    // adicionar mapa e camadas iniciais

    map.addLayer(googleTerrain);
    map.addLayer(limitesMunic);
    map.addLayer(estadosLimites);
    map.addLayer(drawnItems);


    // desmarcar os checkboxs das camadas

    while (id<56){
    var status = document.getElementById(id);
      if (status.checked) {
        status.checked = false;
      }
      id++;
      console.log(id);
    }

    // desmarcar os checkboxs do Embargos e Autuações Femarh

    if(document.getElementById('embAut').checked === true){
      document.getElementById('embAut').checked = false;
    }

    // desmarcar os checkboxs de Localidades

    if(document.getElementById('local').checked === true){
      document.getElementById('local').checked = false;
    }

    // desmarcar os checkboxs do Iphan pto

    if(document.getElementById('iphanPto').checked === true){
      document.getElementById('iphanPto').checked = false;
    }

    // desmarcar os checkboxs da ANA

    if(document.getElementById('ana').checked === true){
      document.getElementById('ana').checked = false;
    }

    // desmarcar os checkboxs da Outorgas Superficiais

    if(document.getElementById('outSup').checked === true){
      document.getElementById('outSup').checked = false;
    }

    // desmarcar os checkboxs da Outorgas Subterrâneas

    if(document.getElementById('outSub').checked === true){
      document.getElementById('outSub').checked = false;
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

    // Queimadas

    document.getElementById("teste25").innerHTML = "";

    // PROPOSTAS DE AMPLIAÇÃO ICMBIO

    document.getElementById("teste57").innerHTML = "";

    document.getElementById("teste58").innerHTML = "";

    document.getElementById("teste59").innerHTML = "";

    document.getElementById("teste60").innerHTML = "";

    document.getElementById("teste61").innerHTML = "";

    document.getElementById("teste62").innerHTML = "";

    // Zee

    document.getElementById("aptAgri").innerHTML = "";

    document.getElementById("bioDivSis").innerHTML = "";

    document.getElementById("teste46").innerHTML = "";

    document.getElementById("teste47").innerHTML = "";

    document.getElementById("teste48").innerHTML = "";

    document.getElementById("teste49").innerHTML = "";

    document.getElementById("geoDomMor").innerHTML = "";

    document.getElementById("geoEros").innerHTML = "";

    document.getElementById("geoGeo").innerHTML = "";

    document.getElementById("geoPotMin").innerHTML = "";

    document.getElementById("geomor").innerHTML = "";

    document.getElementById("teste55").innerHTML = "";

    document.getElementById("hidOtt").innerHTML = "";

    document.getElementById("potSocAmb").innerHTML = "";

    document.getElementById("potSocHum").innerHTML = "";

    document.getElementById("potSocInst").innerHTML = "";

    document.getElementById("potSocProd").innerHTML = "";

    document.getElementById("potSoc").innerHTML = "";

    document.getElementById("solo").innerHTML = "";

    document.getElementById("veg").innerHTML = "";

    document.getElementById("vulNatPerSolo").innerHTML = "";

    document.getElementById("vulNatPerSoloGeo").innerHTML = "";

    document.getElementById("vulNatPerSoloGeom").innerHTML = "";

    document.getElementById("vulNatPerSoloVeg").innerHTML = "";

    document.getElementById("vulNatPerSoloZona").innerHTML = "";

    document.getElementById("zonaClimClimZee").innerHTML = "";

    document.getElementById("zonaClimConcChuva").innerHTML = "";

    document.getElementById("zonaClimIsolChuva").innerHTML = "";

    document.getElementById("zonaClimKop").innerHTML = "";

    document.getElementById("zonaSubZup").innerHTML = "";

    document.getElementById("zonaSubZue").innerHTML = "";

    document.getElementById("zonaZonaZup").innerHTML = "";

    document.getElementById("zonaZonaZue").innerHTML = "";

    document.getElementById("zonaZonaZu").innerHTML = "";

    // Demais camadas

    var cont = 1;

    while(cont<62) {
    
      var res = el + cont;
      console.log(res);
      var display = document.getElementById(res).style.display;
      if(display === "block"){
        document.getElementById(res).style.display = 'none';
      }
      cont++;
    }

    clickMap ();

  }