
// Área do Imóvel

var areaImov = L.geoJSON(areaImovel, {
    color: "blue",
    fill: false,
    weight: "3",
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Área do Imóvel</b></h6><p><b>Imóvel:</b> '+geom.properties.nome_imov+'<br><b>Município:</b> '+geom.properties.municip+'<br><b>Gleba:</b> '+geom.properties.gleba+'<br><b>CAR:</b> '+geom.properties.car+'<br><b>SIGEF:</b> '+geom.properties.sigef+'<br><b>Área:</b> '+geom.properties.area+' ha.</p>');
    }
});

function arImov(el){
    if(map.hasLayer(areaImov)){
        map.removeLayer(areaImov);
    }
    else {
        map.addLayer(areaImov);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}

// Área do Projeto

  var areaProjeto = L.geoJSON(areaProjeto, {
    color: "black",
    onEachFeature: function (Feature, layer) {
    if(Feature.properties.fk_tipo_projeto == 1){
        var tipoProjeto = 'CRRA - Certificado Roraimense de Regularidade Ambiental';
    }else if(Feature.properties.fk_tipo_projeto == 2){
        var tipoProjeto = 'DRA - Declaração de Regularização Ambiental';
    }else if(Feature.properties.fk_tipo_projeto == 3){
        var tipoProjeto = 'AUAS - Autorização de Uso Alternativo do Solo';
    }else if(Feature.properties.fk_tipo_projeto == 4){
      var tipoProjeto = 'ASV - Autorização de Supressão Vegetal';
    }else if(Feature.properties.fk_tipo_projeto == 5){
      var tipoProjeto = 'PMFS - Plano de Manejo Florestal Sustentável';
    }else if(Feature.properties.fk_tipo_projeto == 6){
      var tipoProjeto = 'POA - Plano Operacional Anual';
    }else if(Feature.properties.fk_tipo_projeto == 7){
      var tipoProjeto = 'PRAD - Plano de Recuperação de Área Degradada';
    }else{
        var tipoProjeto = Feature.properties.fk_tipo_projeto;
    }
    layer.bindPopup('<h6><b>Área do Projeto</b></h6><b>Processo: </b>'+Feature.properties.n_processo+'<br><b>Código: </b>'+Feature.properties.fk_cod_femarh+'<br><b>Descrição: </b> '+Feature.properties.descr_ativ+'<br><b>Área: </b> '+Feature.properties.area+'<br><b>Tipo do Projeto: </b> '+tipoProjeto+'<br><br><button type="button" onclick="test()" id="aProj" value="'+Feature.id+'" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Detalhes</button>');
    }
  });

  function areaProj(el){
    if(map.hasLayer(areaProjeto)){
    map.removeLayer(areaProjeto);
    }
    else {
    map.addLayer(areaProjeto);
    }
    var display = document.getElementById(el).style.display;
    if(display == "block"){
      document.getElementById(el).style.display = 'none';
    }else{
      document.getElementById(el).style.display = 'block';
    } 
      }


    // Monitoramento

    var monitor = L.geoJSON(monitoramento, {
    style: function(geom) {
      switch (geom.properties.fk_tip_mon) {
          case 1: return {color: "#33fd38", weight: "2"};
          case 2: return {color: "#30ca9a", weight: "2"};
          case 3: return {color: "#ab9960", weight: "2"};
          case 4: return {color: "#a72266", weight: "2"};
          case 5: return {color: "#fffa36", weight: "2"};
          case 6: return {color: "#becc23", weight: "2"};
          case 7: return {color: "#4694b1", weight: "2"};
          case 8: return {color: "#a32ab2", weight: "2"};
          case 9: return {color: "#974c4c", weight: "2"};
          case 10: return {color: "#69a86d", weight: "2"};
          case 11: return {color: "#7251a7", weight: "2"};
          case 12: return {color: "#cd9649", weight: "2"};
          case 13: return {color: "#7cad44", weight: "2"};
          case 14: return {color: "#0c00ac", weight: "2"};
          case 15: return {color: "#8a0000", weight: "2"};
          case 16: return {color: "#36291e", weight: "2"};
          case 17: return {color: "#de6c04", weight: "2"};
          case 18: return {color: "#d0129a", weight: "2"};
          case 19: return {color: "#a9cc16", weight: "2"};
          case 20: return {color: "#592057", weight: "2"};
          case 21: return {color: "#f16f3b", weight: "2"};
          case 22: return {color: "#4b4947", weight: "2"};
          case 23: return {color: "#42f4f8", weight: "2"};
          case 24: return {color: "#3b6ec9", weight: "2"};
          case 25: return {color: "black", weight: "2"};
      }
    },
    onEachFeature: function (features, layer) {
      layer.bindPopup('<h6><b>Monitoramento</b></h6>'+'<b>Código da Área do Imóvel: </b>'+features.properties.fk_ati+'<br><b>Código da Área do Projeto: </b> '+features.properties.fk_ap+'<br><b>Nº do Processo: </b>'+features.properties.n_processo+'<br><b>Classificação: </b> '+features.properties.fk_corte_fora_proj+'<br><b>Área Monitorada:</b> '+features.properties.area+' ha.<br><b>Nº da Autorização: </b> '+features.properties.n_autoriza+'<br><b>Início da Vigência: </b> '+features.properties.vig_inicia+'<br><b>Fim da Vigênica:</b> '+features.properties.vig_fim+'<br><b>Intervalo da Vigência: </b>'+features.properties.vig_interv+'<br><b>Operador: </b> '+features.properties.fk_usuario+'<br><b>Data do Registro: </b> '+features.properties.data_reg+'<br><br><button type="button" onclick="test2()" id="mom" value="'+features.id+'" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Detalhes</button>');
    }
  });

  function monit(el){
    if(map.hasLayer(monitor)){
    map.removeLayer(monitor);
    }
    else {
    map.addLayer(monitor);
    }
    var display = document.getElementById(el).style.display;
    if(display == "block"){
      document.getElementById(el).style.display = 'none';
    }else{
      document.getElementById(el).style.display = 'block';
    } 
  }
