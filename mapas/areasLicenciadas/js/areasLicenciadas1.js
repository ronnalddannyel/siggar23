
// Área do Imóvel

/*var areaImov1 = L.geoJSON(areaImovel, {
    color: "blue",
    fillOpacity: "0",
    weight: "2.5",
  });*/
  
  var areaImov = L.geoJSON(areaImovel, {
      color: "blue",
      fillOpacity: "0",
      weight: 2.5,
      /*onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>Área do Imóvel</b></h6><p><b>Imóvel:</b> '+geom.properties.nome_imov+'<br><b>Município:</b> '+geom.properties.municip+'<br><b>Gleba:</b> '+geom.properties.gleba+'<br><b>CAR:</b> '+geom.properties.car+'<br><b>SIGEF:</b> '+geom.properties.sigef+'<br><b>Área:</b> '+geom.properties.area+' ha.</p>');
      }*/
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
      clickMap();
  }
  
  // Área do Projeto
  
  
   /* var areaProjeto2 = L.geoJSON(areaProjeto1, {
      color: "black",
    });*/
  
    var areaProjeto = L.geoJSON(areaProjeto, {
      color: "black",
      fillOpacity: "0",
      weight: 2.5,
      /*onEachFeature: function (features, layer) {
  
        if(features.properties.fk_tipo_projeto == 1){
          var tipoProjeto = 'CRRA - Certificado Roraimense de Regularidade Ambiental';
        }else if(features.properties.fk_tipo_projeto == 2){
          var tipoProjeto = 'DRA - Declaração de Regularização Ambiental';
        }else if(features.properties.fk_tipo_projeto == 3){
          var tipoProjeto = 'AUAS - Autorização de Uso Alternativo do Solo';
        }else if(features.properties.fk_tipo_projeto == 4){
          var tipoProjeto = 'ASV - Autorização de Supressão Vegetal';
        }else if(features.properties.fk_tipo_projeto == 5){
          var tipoProjeto = 'PMFS - Plano de Manejo Florestal Sustentável';
        }else if(features.properties.fk_tipo_projeto == 6){
          var tipoProjeto = 'POA - Plano Operacional Anual';
        }else if(features.properties.fk_tipo_projeto == 7){
          var tipoProjeto = 'PRAD - Plano de Recuperação de Área Degradada';
        }else{
            var tipoProjeto = features.properties.fk_tipo_projeto;
        }
    
        if(features.properties.fk_cod_femarh == 1){
          var codFemarh = 'G-01-01 - ATIVIDADES AGRÍCOLAS - Olericultura (floricultura, cultivo de hortaliças, legumes, especiarias hortícolas e curcubitáceas)';
        }else if(features.properties.fk_cod_femarh == 2){
          var codFemarh = 'G-01-02 - ATIVIDADES AGRÍCOLAS - Horticultura Orgânica, tenha certificação reconhecida pela FEMARH/SEAPA/ADERR/MAPA';
        }else if(features.properties.fk_cod_femarh == 3){
          var codFemarh = 'G-01-03 - ATIVIDADES AGRÍCOLAS - Culturas anuais, excluindo a olericultura';
        }else if(features.properties.fk_cod_femarh == 4){
          var codFemarh = 'G-01-04 - ATIVIDADES AGRÍCOLAS - Cultivo orgânico, tenha certificação reconhecida pela FEMARH/SEAPA/ADER/MAPA';
        }else if(features.properties.fk_cod_femarh == 5){
          var codFemarh = 'G-01-05 - ATIVIDADES AGRÍCOLAS - Culturas perenes e cultivos classificados no programa de manejo integrado de pragas, conforme normas do Ministério da Agricultura, exceto cafeicultura e citricultura';
        }else if(features.properties.fk_cod_femarh == 6){
          var codFemarh = 'G-01-06 - ATIVIDADES AGRÍCOLAS - Cafeicultura e citricultura';
        }else if(features.properties.fk_cod_femarh == 7){
          var codFemarh = 'G-01-07 - ATIVIDADES AGRÍCOLAS - Cultura de cana-de-açúcar com queima';
        }else if(features.properties.fk_cod_femarh == 8){
          var codFemarh = 'G-01-08 - ATIVIDADES AGRÍCOLAS - Cultura de cana-de-açúcar sem queima';
        }else if(features.properties.fk_cod_femarh == 9){
          var codFemarh = 'G-01-09 - ATIVIDADES AGRÍCOLAS - Viveiro de produção de mudas de espécies agrícolas, florestais e ornamentais';
        }else if(features.properties.fk_cod_femarh == 10){
          var codFemarh = 'G-01-10 - ATIVIDADES AGRÍCOLAS - Cultivos agroflorestais com espécies florestais nativas diversificada';
        }else if(features.properties.fk_cod_femarh == 11){
          var codFemarh = 'G-01-11 - ATIVIDADES AGRÍCOLAS - Cultivos agroflorestais com espécies florestais exóticas';
        }else if(features.properties.fk_cod_femarh == 12){
          var codFemarh = 'G-01-12 - ATIVIDADES AGRÍCOLAS - Área de pesquisa agrícola';
        }else if(features.properties.fk_cod_femarh == 13){
          var codFemarh = 'G-01-13 - ATIVIDADES AGRÍCOLAS - Área de pesquisa agrícola com cultivares transgênicos';
        }else if(features.properties.fk_cod_femarh == 14){
          var codFemarh = 'G-02-01 - ATIVIDADES PECUÁRIAS - Avicultura de corte e reprodução';
        }else if(features.properties.fk_cod_femarh == 15){
          var codFemarh = 'G-02-02 - ATIVIDADES PECUÁRIAS - Avicultura de postura';
        }else if(features.properties.fk_cod_femarh == 16){
          var codFemarh = 'G-02-03 - ATIVIDADES PECUÁRIAS - Incubatório';
        }else if(features.properties.fk_cod_femarh == 17){
          var codFemarh = 'G-02-04 - ATIVIDADES PECUÁRIAS - Suinocultura (ciclo completo)';
        }else if(features.properties.fk_cod_femarh == 18){
          var codFemarh = 'G-02-05 - ATIVIDADES PECUÁRIAS - Suinocultura (crescimento e terminação)';
        }else if(features.properties.fk_cod_femarh == 19){
          var codFemarh = 'G-02-06 - ATIVIDADES PECUÁRIAS - Suinocultura (unidade de produção de leitões)';
        }else if(features.properties.fk_cod_femarh == 20){
          var codFemarh = 'G-02-07 - ATIVIDADES PECUÁRIAS - Bovinocultura de leite, bubalinocultura de leite e caprinocultura de leite';
        }else if(features.properties.fk_cod_femarh == 21){
          var codFemarh = 'G-02-08 - ATIVIDADES PECUÁRIAS - Criação de eqüinos, muares, ovinos, caprinos, bovinos de corte e búfalos de corte (confinados)';
        }else if(features.properties.fk_cod_femarh == 22){
          var codFemarh = 'G-02-09 - ATIVIDADES PECUÁRIAS - Criação de ovinos, caprinos, bovinos de corte e búfalos de corte (extensivo)';
        }else if(features.properties.fk_cod_femarh == 23){
          var codFemarh = 'G-02-10 - ATIVIDADES PECUÁRIAS - Piscicultura convencional com sistemas extensivo e semi-intensivo com cultivo de espécie nativa não carnívora';
        }else if(features.properties.fk_cod_femarh == 24){
          var codFemarh = 'G-02-11 - ATIVIDADES PECUÁRIAS - Piscicultura em tanque-rede com cultivo de espécie nativa não carnívora';
        }else if(features.properties.fk_cod_femarh == 25){
          var codFemarh = 'G-02-12 - ATIVIDADES PECUÁRIAS - Carcinicultura de água doce com cultivo de espécie nativa com densidade de até 20 pós-larvas/m²';
        }else if(features.properties.fk_cod_femarh == 26){
          var codFemarh = 'G-02-13 - ATIVIDADES PECUÁRIAS - Beneficiamento do Pescado associada à pesca ou à criação.';
        }else if(features.properties.fk_cod_femarh == 27){
          var codFemarh = 'G-02-14 - ATIVIDADES PECUÁRIAS - Resfriamento e distribuição do leite associados à atividade rural de produção de leite';
        }else if(features.properties.fk_cod_femarh == 28){
          var codFemarh = 'G-03-01 - ATIVIDADES FLORESTAIS E PROCESSAMENTO DE MADEIRA - Manejo Sustentável de Florestas Nativas';
        }else if(features.properties.fk_cod_femarh == 29){
          var codFemarh = 'G-03-02 - ATIVIDADES FLORESTAIS E PROCESSAMENTO DE MADEIRA - Silvicultura G-03-03 Produção de carvão vegetal oriunda de floresta plantada';
        }else if(features.properties.fk_cod_femarh == 30){
          var codFemarh = 'G-03-04 - ATIVIDADES FLORESTAIS E PROCESSAMENTO DE MADEIRA - Produção de carvão vegetal de origem nativa/aproveitamento do rendimento lenhoso';
        }else if(features.properties.fk_cod_femarh == 31){
          var codFemarh = 'G-03-05 - ATIVIDADES FLORESTAIS E PROCESSAMENTO DE MADEIRA - Desdobramento da madeira';
        }else if(features.properties.fk_cod_femarh == 32){
          var codFemarh = 'G-03-06 - ATIVIDADES FLORESTAIS E PROCESSAMENTO DE MADEIRA - Fabricação de madeira laminada ou chapas de madeira aglomerada, prensada ou compensada, revestida ou não revestida';
        }else if(features.properties.fk_cod_femarh == 33){
          var codFemarh = 'G-03-07 - ATIVIDADES FLORESTAIS E PROCESSAMENTO DE MADEIRA - Tratamento químico para preservação de madeira';
        }else if(features.properties.fk_cod_femarh == 34){
          var codFemarh = 'G-03-08 - ATIVIDADES FLORESTAIS E PROCESSAMENTO DE MADEIRA - Corte raso em área de floresta para implantação de outra atividade agropecuária';
        }else if(features.properties.fk_cod_femarh == 35){
          var codFemarh = 'G-03-09 - ATIVIDADES FLORESTAIS E PROCESSAMENTO DE MADEIRA - Corte em floresta plantada';
        }else if(features.properties.fk_cod_femarh == 36){
          var codFemarh = 'G-04-01 - ATIVIDADES DE BENEFICIAMENTO E ARMAZENAMENTO - Beneficiamento primário de produtos agrícolas: limpeza, lavagem, secagem, descascamento ou classificação';
        }else if(features.properties.fk_cod_femarh == 37){
          var codFemarh = 'G-04-02 - ATIVIDADES DE BENEFICIAMENTO E ARMAZENAMENTO - Beneficiamento de sementes';
        }else if(features.properties.fk_cod_femarh == 38){
          var codFemarh = 'G-04-03 - ATIVIDADES DE BENEFICIAMENTO E ARMAZENAMENTO - Armazenagem de grãos ou sementes não-associada a outras atividades listadas';
        }else if(features.properties.fk_cod_femarh == 39){
          var codFemarh = 'G-05-01 - PROJETOS DE IRRIGAÇÃO E DE ASSENTAMENTO - Projeto agropecuário irrigado, público ou privado, com infra-estrutura coletiva.';
        }else if(features.properties.fk_cod_femarh == 40){
          var codFemarh = 'G-05-02 - PROJETOS DE IRRIGAÇÃO E DE ASSENTAMENTO - Barragem de irrigação ou de perenização para agricultura sem deslocamento de população atingida';
        }else if(features.properties.fk_cod_femarh == 41){
          var codFemarh = 'G-05-03 - PROJETOS DE IRRIGAÇÃO E DE ASSENTAMENTO - Barragem de irrigação ou de perenização para agricultura com deslocamento população atingida';
        }else if(features.properties.fk_cod_femarh == 42){
          var codFemarh = 'G-05-04 - PROJETOS DE IRRIGAÇÃO E DE ASSENTAMENTO - Projeto de assentamento para fins de reforma agrária.';
        }else if(features.properties.fk_cod_femarh == 43){
          var codFemarh = 'G-06-01 - OUTRAS ATIVIDADES - Centrais e postos de recolhimento de embalagens de agrotóxicos e seus componentes';
        }else if(features.properties.fk_cod_femarh == 44){
          var codFemarh = 'G-06-02 - OUTRAS ATIVIDADES - Comércio e/ou armazenamento de produtos agrotóxicos, veterinários e a fins';
        }else if(features.properties.fk_cod_femarh == 45){
          var codFemarh = 'G-06-03 - OUTRAS ATIVIDADES - Prestadora de serviço na aplicação terrestre de agrotóxicos e afins';
        }else if(features.properties.fk_cod_femarh == 46){
          var codFemarh = 'G-06-04 - OUTRAS ATIVIDADES - Prestadora de serviço na aplicação aérea de agrotóxicos e afins';
        }else{
            var codFemarh = features.properties.fk_cod_femarh;
        }
    
          layer.bindPopup('<h6><b>Área do Projeto</b></h6><b>GID: </b>'+features.id+'<br><b>Processo:</b> '+features.properties.n_processo+'<br><b>Código da Atividade: </b>'+codFemarh+'<br><b>Descrição: </b> '+features.properties.descr_ativ+'<br><b>Área: </b> '+features.properties.area+'<br><b>Código Imóvel: </b> '+features.properties.fk_ati+'<br><b>Tipo do Projeto: </b> '+tipoProjeto+'<br><br><button type="button" onclick="test()" id="aProj" value="'+features.id+'" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Detalhes</button>');
        }*/
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
      clickMap();
    }
  
  
  
      // Área de Uso e Ocupação do Solo
  
      
      /*var areaUos2 = L.geoJSON(areaUos1, {
        color: "#325f5f",
        weight: "2",
      });*/
  
      var areaUos = L.geoJSON(areaUos1, {
        color: "#325f5f",
        fillOpacity: "0",
        weight: 2.5,
        /*onEachFeature: function (geom, layer) {
          layer.bindPopup('<h6><b>Área de Uso e Ocupação do Solo</b></h6><b>Tipo do Solo: </b>'+geom.properties.fk_tipo+'<br><b>Área:</b> '+geom.properties.area.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.');
        }*/
      });
  
      function arUos(el){
        if(map.hasLayer(areaUos)){
        map.removeLayer(areaUos);
        }
        else {
        map.addLayer(areaUos);
        }
        var display = document.getElementById(el).style.display;
        if(display == "block"){
          document.getElementById(el).style.display = 'none';
        }else{
          document.getElementById(el).style.display = 'block';
        } 
        clickMap();
      }
  
  
      // Monitoramento
  
      /*var monitor1 = L.geoJSON(monitoramento, {
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
      });*/
  
  
  
      var monitor = L.geoJSON(monitoramento, {
      style: function(geom) {
        switch (geom.properties.fk_tip_mon) {
            case 1: return {color: "#33fd38", weight: 2};
            case 2: return {color: "#30ca9a", weight: 2};
            case 3: return {color: "#ab9960", weight: 2};
            case 4: return {color: "#a72266", weight: 2};
            case 5: return {color: "#fffa36", weight: 2};
            case 6: return {color: "#becc23", weight: 2};
            case 7: return {color: "#4694b1", weight: 2};
            case 8: return {color: "#a32ab2", weight: 2};
            case 9: return {color: "#974c4c", weight: 2};
            case 10: return {color: "#69a86d", weight: 2};
            case 11: return {color: "#7251a7", weight: 2};
            case 12: return {color: "#cd9649", weight: 2};
            case 13: return {color: "#7cad44", weight: 2};
            case 14: return {color: "#0c00ac", weight: 2};
            case 15: return {color: "#8a0000", weight: 2};
            case 16: return {color: "#36291e", weight: 2};
            case 17: return {color: "#de6c04", weight: 2};
            case 18: return {color: "#d0129a", weight: 2};
            case 19: return {color: "#a9cc16", weight: 2};
            case 20: return {color: "#592057", weight: 2};
            case 21: return {color: "#f16f3b", weight: 2};
            case 22: return {color: "#4b4947", weight: 2};
            case 23: return {color: "#42f4f8", weight: 2};
            case 24: return {color: "#3b6ec9", weight: 2};
            case 25: return {color: "black", weight: 2};
        }
      },
      fillOpacity: "0",
      weight: 2.5,
      /*onEachFeature: function (features, layer) {
        layer.bindPopup('<h6><b>Monitoramento</b></h6>'+'<b>Código da Área do Imóvel: </b>'+features.properties.fk_ati+'<br><b>Código da Área do Projeto: </b> '+features.properties.fk_ap+'<br><b>Nº do Processo: </b>'+features.properties.n_processo+'<br><b>Classificação: </b> '+features.properties.fk_corte_fora_proj+'<br><b>Área Monitorada:</b> '+features.properties.area+' ha.<br><b>Nº da Autorização: </b> '+features.properties.n_autoriza+'<br><b>Início da Vigência: </b> '+features.properties.vig_inicia+'<br><b>Fim da Vigênica:</b> '+features.properties.vig_fim+'<br><b>Intervalo da Vigência: </b>'+features.properties.vig_interv+'<br><b>Operador: </b> '+features.properties.fk_usuario+'<br><b>Data do Registro: </b> '+features.properties.data_reg+'<br><br><button type="button" onclick="test2()" id="mom" value="'+features.id+'" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Detalhes</button>');
      }*/
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
      clickMap();
    }
  
  
  
  
  
  
  
  
  
    function onClick(e) { 
      lat = e.latlng.lat;
      lon = e.latlng.lng;
      ProcessClick(lat,lon)
    }
  
  
  
  
  
  
    function clickMap (){
  
      var check1 = document.getElementById('1').checked;
      var check2 = document.getElementById('2').checked;
      var check3 = document.getElementById('36').checked;
      var check4 = document.getElementById('20').checked;

  
      if((check1 === true) || (check2 === true) || (check3 === true) || (check4 === true)){

        map.on('click', onClick);
  
        legMostra();
  
        
    
      }else{
    
        map.off('click', onClick);
  
        legMostra();
  
      }
    
     }
  
  
  
     var theMarker;
     var selPoly = [];
   
     function ProcessClick(lat,lon){
     selPoly = [];
     
     if (theMarker != undefined) {
           map.removeLayer(theMarker);
       };
   
       a = 'No Data'; 
       b = 'No Data'; 
       c = 'No Data';
       d = 'No Data';
       
     theMarker = L.marker([lat,lon]);
     
     areaUos.eachLayer(function (layer) {
       
       isInside =turf.booleanPointInPolygon(theMarker.toGeoJSON(), layer.toGeoJSON());
   
       //isInside =turf.inside(theMarker.toGeoJSON(), layer.toGeoJSON());
     
       if (isInside){
           //selPoly.push(layer.feature);
           a = '<b>Tipo do Solo: </b>'+layer.feature.properties.fk_tipo+'<br><b>Área:</b> '+layer.feature.properties.area.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.';
       }
     });
     
     
     monitor.eachLayer(function (layer) {


      if(layer.feature.properties.fk_tip_mon == 1){
        var MonitSit = '<img src="imagens/quadrado-verde3.png" style="max-width:20px;max-height:20px;"> CSSA - Corte seletivo executado sem autorização';
      }else if(layer.feature.properties.fk_tip_mon == 2){
        var MonitSit = '<img src="imagens/quadrado-verde.png" style="max-width:20px;max-height:20px;"> CRSA - Corte Raso Executado sem Autorização';
      }else if(layer.feature.properties.fk_tip_mon == 3){
        var MonitSit = '<img src="imagens/quadrado-marrom.png" style="max-width:20px;max-height:20px;"> SVSA - Supressão Vegetal Executada sem Autorização';
      }else if(layer.feature.properties.fk_tip_mon == 4){
        var MonitSit = '<img src="imagens/quadrado-roxo.png" style="max-width:20px;max-height:20px;"> CSAUV - Corte Seletivo Executado na Área de Uso Alternativo do Solo na Vingência da Autorização';
      }else if(layer.feature.properties.fk_tip_mon == 5){
        var MonitSit = '<img src="imagens/quadrado-amarelo1.png" style="max-width:20px;max-height:20px;"> CSAUFV - Corte seletivo executado na área de uso alternativo do solo fora da vigência da autorização';
      }else if(layer.feature.properties.fk_tip_mon == 6){
        var MonitSit = '<img src="imagens/quadrado-amarelo.png" style="max-width:20px;max-height:20px;"> CSFAUV - Corte Seletivo Executado Fora da Área de Uso Alternativo do Solo na Vingência da Autorização';
      }else if(layer.feature.properties.fk_tip_mon == 7){
        var MonitSit = '<img src="imagens/quadrado-azul.png" style="max-width:20px;max-height:20px;"> CSFAUFV - Corte Seletivo Executado Fora da Área de Uso Alternativo do Solo Fora da Vingência da Autorização';
      }else if(layer.feature.properties.fk_tip_mon == 8){
        var MonitSit = '<img src="imagens/quadrado-roxo1.png" style="max-width:20px;max-height:20px;"> CRAUV - Corte Raso Executado na Área de Uso Alternativo do Solo na Vingência da Autorização';
      }else if(layer.feature.properties.fk_tip_mon == 9){
        var MonitSit = '<img src="imagens/quadrado-roxo2.png" style="max-width:20px;max-height:20px;"> CRAUFV - Corte Raso Executado na Área de Uso Alternativo do Solo Fora da Vingência da Autorização';
      }else if(layer.feature.properties.fk_tip_mon == 10){
        var MonitSit = '<img src="imagens/quadrado-verde1.png" style="max-width:20px;max-height:20px;"> CRFAUV - Corte Raso Executado Fora da Área de Uso Alternativo do Solo na Vingência da Autorização';
      }else if(layer.feature.properties.fk_tip_mon == 11){
        var MonitSit = '<img src="imagens/quadrado-roxo3.png" style="max-width:20px;max-height:20px;"> CRFAUFV - Corte Raso Executado Fora da Área de Uso Alternativo do Solo Fora da Vingência da Autorização';
      }else if(layer.feature.properties.fk_tip_mon == 12){
        var MonitSit = '<img src="imagens/quadrado-laranja.png" style="max-width:20px;max-height:20px;"> CSPMV - Corte Seletivo Executado na Área do Plano de Manejo Florestal Sustentável na Vingência da Autorização';
      }else if(layer.feature.properties.fk_tip_mon == 13){
        var MonitSit = '<img src="imagens/quadrado-verde2.png" style="max-width:20px;max-height:20px;"> CSPMFV - Corte Seletivo Executado na Área do Plano de Manejo Florestal Sustentável Fora da Vingência da Autorização';
      }else if(layer.feature.properties.fk_tip_mon == 14){
        var MonitSit = '<img src="imagens/quadrado-azul2.png" style="max-width:20px;max-height:20px;"> CSFPMV - Corte seletivo executado fora da área do plano de manejo florestal sustentável na vigência da autorização';
      }else if(layer.feature.properties.fk_tip_mon == 15){
        var MonitSit = '<img src="imagens/quadrado-vermelho1.png" style="max-width:20px;max-height:20px;"> CSFPMFV - Corte seletivo executado fora da área do plano de manejo florestal sustentável fora da vigência da autorização';
      }else if(layer.feature.properties.fk_tip_mon == 16){
        var MonitSit = '<img src="imagens/quadrado-marrom1.png" style="max-width:20px;max-height:20px;"> CRPMV - Corte raso executado na área do plano de manejo florestal sustentável na vigência da autorização';
      }else if(layer.feature.properties.fk_tip_mon == 17){
        var MonitSit = '<img src="imagens/quadrado-laranja1.png" style="max-width:20px;max-height:20px;"> CRPMFV - Corte raso executado na área do plano de manejo florestal sustentável fora da vigência da autorização';
      }else if(layer.feature.properties.fk_tip_mon == 18){
        var MonitSit = '<img src="imagens/quadrado-rosa.png" style="max-width:20px;max-height:20px;"> CRFPMV - Corte raso executado fora da área do plano de manejo florestal sustentável na vigência da autorização';
      }else if(layer.feature.properties.fk_tip_mon == 19){
        var MonitSit = '<img src="imagens/quadrado-amarelo2.png" style="max-width:20px;max-height:20px;"> CRFPM - Corte raso executado fora da área do plano de manejo florestal sustentável fora da vigência da autorização';
      }else if(layer.feature.properties.fk_tip_mon == 20){
        var MonitSit = '<img src="imagens/quadrado-roxo4.png" style="max-width:20px;max-height:20px;"> SVAUV - Supressão Vegetal Executada na Área de Uso Alternativo do Solo na Vingência da Autorização';
      }else if(layer.feature.properties.fk_tip_mon == 21){
        var MonitSit = '<img src="imagens/quadrado-laranja2.png" style="max-width:20px;max-height:20px;"> SVAUFV - Supressão vegetal executado na área de uso alternativo do solo fora da vigência da autorização';
      }else if(layer.feature.properties.fk_tip_mon == 22){
        var MonitSit = '<img src="imagens/quadrado-cinza.png" style="max-width:20px;max-height:20px;"> SVFAUFV - Supressão vegetal executado fora da área de uso alternativo do solo fora da vigência da autorização';
      }else if(layer.feature.properties.fk_tip_mon == 23){
        var MonitSit = '<img src="imagens/quadrado-azul3.png" style="max-width:20px;max-height:20px;"> SVFAUV - Supressão vegetal executado fora da área de uso alternativo do solo na vigência da autorização';
      }else if(layer.feature.properties.fk_tip_mon == 24){
        var MonitSit = '<img src="imagens/quadrado-azul1.png" style="max-width:20px;max-height:20px;"> CRNE - Corte Raso Não Executável';
      }else if(layer.feature.properties.fk_tip_mon == 25){
        var MonitSit = '<img src="imagens/quadrado-preto.png" style="max-width:20px;max-height:20px;"> POANE - Plano operacional anual não executado';
      }else{
        var MonitSit = layer.feature.properties.fk_tip_mon;
      }

      
      if(layer.feature.properties.fk_tip_aut == 1){
        var LicenAutor = 'ASV - Autorização de Supressão Vegetal';
      }else if(layer.feature.properties.fk_tip_aut == 2){
        var LicenAutor = 'AUAS - Autorização de Uso Alternativo do Solo';
      }else if(layer.feature.properties.fk_tip_aut == 3){
        var LicenAutor = 'PMFS - Plano de Manejo Florestal Sustentável';
      }else if(layer.feature.properties.fk_tip_aut == 4){
        var LicenAutor = 'CRRA - Certificado Roraimense de Regularidade Ambiental';
      }else if(layer.feature.properties.fk_tip_aut == 5){
        var LicenAutor = 'DRA - Declaração de Regularização Ambiental';
      }else if(layer.feature.properties.fk_tip_aut == 6){
        var LicenAutor = 'PRAD - Plano de Recuperação de Área Degradada';
      }else if(layer.feature.properties.fk_tip_aut == 7){
        var LicenAutor = 'POA - PLANO OPERACIONAL ANUAL';
      }else{
        var LicenAutor = layer.feature.properties.fk_tip_aut;

      }


       isInside =turf.booleanPointInPolygon(theMarker.toGeoJSON(), layer.toGeoJSON());
       //isInside =turf.inside(theMarker.toGeoJSON(), layer.toGeoJSON());
     
       if (isInside){
           //selPoly.push(layer.feature);
           b = '<b>Código da Área do Imóvel: </b>'+layer.feature.properties.fk_ati+'<br><b>Código da Área do Projeto: </b> '+layer.feature.properties.fk_ap+'<br><b>Nº do Processo: </b>'+layer.feature.properties.n_processo+'<br><b>Classificação: </b> '+layer.feature.properties.fk_corte_fora_proj+'<br><b>Área Monitorada:</b> '+layer.feature.properties.area+' ha.<br><b>Nº da Autorização: </b> '+layer.feature.properties.n_autoriza+'<br><b>Início da Vigência: </b> '+layer.feature.properties.vig_inicia+'<br><b>Fim da Vigênica:</b> '+layer.feature.properties.vig_fim+'<br><b>Intervalo da Vigência: </b>'+layer.feature.properties.vig_interv+'<br><b>Operador: </b> '+layer.feature.properties.fk_usuario+'<br><b>Data do Registro: </b> '+layer.feature.properties.data_reg+'<br><b>Situação do Monitoramento: </b> '+MonitSit+'<br><b>Licença de Autorização: </b> '+LicenAutor;
       }
     });
  
  
     areaProjeto.eachLayer(function (layer) {
  
  
      if(layer.feature.properties.fk_tipo_projeto == 1){
        var tipoProjeto = 'CRRA - Certificado Roraimense de Regularidade Ambiental';
      }else if(layer.feature.properties.fk_tipo_projeto == 2){
        var tipoProjeto = 'DRA - Declaração de Regularização Ambiental';
      }else if(layer.feature.properties.fk_tipo_projeto == 3){
        var tipoProjeto = 'AUAS - Autorização de Uso Alternativo do Solo';
      }else if(layer.feature.properties.fk_tipo_projeto == 4){
        var tipoProjeto = 'ASV - Autorização de Supressão Vegetal';
      }else if(layer.feature.properties.fk_tipo_projeto == 5){
        var tipoProjeto = 'PMFS - Plano de Manejo Florestal Sustentável';
      }else if(layer.feature.properties.fk_tipo_projeto == 6){
        var tipoProjeto = 'POA - Plano Operacional Anual';
      }else if(layer.feature.properties.fk_tipo_projeto == 7){
        var tipoProjeto = 'PRAD - Plano de Recuperação de Área Degradada';
      }else{
          var tipoProjeto = layer.feature.properties.fk_tipo_projeto;
      }
  
      if(layer.feature.properties.fk_cod_femarh == 1){
        var codFemarh = 'G-01-01 - ATIVIDADES AGRÍCOLAS - Olericultura (floricultura, cultivo de hortaliças, legumes, especiarias hortícolas e curcubitáceas)';
      }else if(layer.feature.properties.fk_cod_femarh == 2){
        var codFemarh = 'G-01-02 - ATIVIDADES AGRÍCOLAS - Horticultura Orgânica, tenha certificação reconhecida pela FEMARH/SEAPA/ADERR/MAPA';
      }else if(layer.feature.properties.fk_cod_femarh == 3){
        var codFemarh = 'G-01-03 - ATIVIDADES AGRÍCOLAS - Culturas anuais, excluindo a olericultura';
      }else if(layer.feature.properties.fk_cod_femarh == 4){
        var codFemarh = 'G-01-04 - ATIVIDADES AGRÍCOLAS - Cultivo orgânico, tenha certificação reconhecida pela FEMARH/SEAPA/ADER/MAPA';
      }else if(layer.feature.properties.fk_cod_femarh == 5){
        var codFemarh = 'G-01-05 - ATIVIDADES AGRÍCOLAS - Culturas perenes e cultivos classificados no programa de manejo integrado de pragas, conforme normas do Ministério da Agricultura, exceto cafeicultura e citricultura';
      }else if(layer.feature.properties.fk_cod_femarh == 6){
        var codFemarh = 'G-01-06 - ATIVIDADES AGRÍCOLAS - Cafeicultura e citricultura';
      }else if(layer.feature.properties.fk_cod_femarh == 7){
        var codFemarh = 'G-01-07 - ATIVIDADES AGRÍCOLAS - Cultura de cana-de-açúcar com queima';
      }else if(layer.feature.properties.fk_cod_femarh == 8){
        var codFemarh = 'G-01-08 - ATIVIDADES AGRÍCOLAS - Cultura de cana-de-açúcar sem queima';
      }else if(layer.feature.properties.fk_cod_femarh == 9){
        var codFemarh = 'G-01-09 - ATIVIDADES AGRÍCOLAS - Viveiro de produção de mudas de espécies agrícolas, florestais e ornamentais';
      }else if(layer.feature.properties.fk_cod_femarh == 10){
        var codFemarh = 'G-01-10 - ATIVIDADES AGRÍCOLAS - Cultivos agroflorestais com espécies florestais nativas diversificada';
      }else if(layer.feature.properties.fk_cod_femarh == 11){
        var codFemarh = 'G-01-11 - ATIVIDADES AGRÍCOLAS - Cultivos agroflorestais com espécies florestais exóticas';
      }else if(layer.feature.properties.fk_cod_femarh == 12){
        var codFemarh = 'G-01-12 - ATIVIDADES AGRÍCOLAS - Área de pesquisa agrícola';
      }else if(layer.feature.properties.fk_cod_femarh == 13){
        var codFemarh = 'G-01-13 - ATIVIDADES AGRÍCOLAS - Área de pesquisa agrícola com cultivares transgênicos';
      }else if(layer.feature.properties.fk_cod_femarh == 14){
        var codFemarh = 'G-02-01 - ATIVIDADES PECUÁRIAS - Avicultura de corte e reprodução';
      }else if(layer.feature.properties.fk_cod_femarh == 15){
        var codFemarh = 'G-02-02 - ATIVIDADES PECUÁRIAS - Avicultura de postura';
      }else if(layer.feature.properties.fk_cod_femarh == 16){
        var codFemarh = 'G-02-03 - ATIVIDADES PECUÁRIAS - Incubatório';
      }else if(layer.feature.properties.fk_cod_femarh == 17){
        var codFemarh = 'G-02-04 - ATIVIDADES PECUÁRIAS - Suinocultura (ciclo completo)';
      }else if(layer.feature.properties.fk_cod_femarh == 18){
        var codFemarh = 'G-02-05 - ATIVIDADES PECUÁRIAS - Suinocultura (crescimento e terminação)';
      }else if(layer.feature.properties.fk_cod_femarh == 19){
        var codFemarh = 'G-02-06 - ATIVIDADES PECUÁRIAS - Suinocultura (unidade de produção de leitões)';
      }else if(layer.feature.properties.fk_cod_femarh == 20){
        var codFemarh = 'G-02-07 - ATIVIDADES PECUÁRIAS - Bovinocultura de leite, bubalinocultura de leite e caprinocultura de leite';
      }else if(layer.feature.properties.fk_cod_femarh == 21){
        var codFemarh = 'G-02-08 - ATIVIDADES PECUÁRIAS - Criação de eqüinos, muares, ovinos, caprinos, bovinos de corte e búfalos de corte (confinados)';
      }else if(layer.feature.properties.fk_cod_femarh == 22){
        var codFemarh = 'G-02-09 - ATIVIDADES PECUÁRIAS - Criação de ovinos, caprinos, bovinos de corte e búfalos de corte (extensivo)';
      }else if(layer.feature.properties.fk_cod_femarh == 23){
        var codFemarh = 'G-02-10 - ATIVIDADES PECUÁRIAS - Piscicultura convencional com sistemas extensivo e semi-intensivo com cultivo de espécie nativa não carnívora';
      }else if(layer.feature.properties.fk_cod_femarh == 24){
        var codFemarh = 'G-02-11 - ATIVIDADES PECUÁRIAS - Piscicultura em tanque-rede com cultivo de espécie nativa não carnívora';
      }else if(layer.feature.properties.fk_cod_femarh == 25){
        var codFemarh = 'G-02-12 - ATIVIDADES PECUÁRIAS - Carcinicultura de água doce com cultivo de espécie nativa com densidade de até 20 pós-larvas/m²';
      }else if(layer.feature.properties.fk_cod_femarh == 26){
        var codFemarh = 'G-02-13 - ATIVIDADES PECUÁRIAS - Beneficiamento do Pescado associada à pesca ou à criação.';
      }else if(layer.feature.properties.fk_cod_femarh == 27){
        var codFemarh = 'G-02-14 - ATIVIDADES PECUÁRIAS - Resfriamento e distribuição do leite associados à atividade rural de produção de leite';
      }else if(layer.feature.properties.fk_cod_femarh == 28){
        var codFemarh = 'G-03-01 - ATIVIDADES FLORESTAIS E PROCESSAMENTO DE MADEIRA - Manejo Sustentável de Florestas Nativas';
      }else if(layer.feature.properties.fk_cod_femarh == 29){
        var codFemarh = 'G-03-02 - ATIVIDADES FLORESTAIS E PROCESSAMENTO DE MADEIRA - Silvicultura G-03-03 Produção de carvão vegetal oriunda de floresta plantada';
      }else if(layer.feature.properties.fk_cod_femarh == 30){
        var codFemarh = 'G-03-04 - ATIVIDADES FLORESTAIS E PROCESSAMENTO DE MADEIRA - Produção de carvão vegetal de origem nativa/aproveitamento do rendimento lenhoso';
      }else if(layer.feature.properties.fk_cod_femarh == 31){
        var codFemarh = 'G-03-05 - ATIVIDADES FLORESTAIS E PROCESSAMENTO DE MADEIRA - Desdobramento da madeira';
      }else if(layer.feature.properties.fk_cod_femarh == 32){
        var codFemarh = 'G-03-06 - ATIVIDADES FLORESTAIS E PROCESSAMENTO DE MADEIRA - Fabricação de madeira laminada ou chapas de madeira aglomerada, prensada ou compensada, revestida ou não revestida';
      }else if(layer.feature.properties.fk_cod_femarh == 33){
        var codFemarh = 'G-03-07 - ATIVIDADES FLORESTAIS E PROCESSAMENTO DE MADEIRA - Tratamento químico para preservação de madeira';
      }else if(layer.feature.properties.fk_cod_femarh == 34){
        var codFemarh = 'G-03-08 - ATIVIDADES FLORESTAIS E PROCESSAMENTO DE MADEIRA - Corte raso em área de floresta para implantação de outra atividade agropecuária';
      }else if(layer.feature.properties.fk_cod_femarh == 35){
        var codFemarh = 'G-03-09 - ATIVIDADES FLORESTAIS E PROCESSAMENTO DE MADEIRA - Corte em floresta plantada';
      }else if(layer.feature.properties.fk_cod_femarh == 36){
        var codFemarh = 'G-04-01 - ATIVIDADES DE BENEFICIAMENTO E ARMAZENAMENTO - Beneficiamento primário de produtos agrícolas: limpeza, lavagem, secagem, descascamento ou classificação';
      }else if(layer.feature.properties.fk_cod_femarh == 37){
        var codFemarh = 'G-04-02 - ATIVIDADES DE BENEFICIAMENTO E ARMAZENAMENTO - Beneficiamento de sementes';
      }else if(layer.feature.properties.fk_cod_femarh == 38){
        var codFemarh = 'G-04-03 - ATIVIDADES DE BENEFICIAMENTO E ARMAZENAMENTO - Armazenagem de grãos ou sementes não-associada a outras atividades listadas';
      }else if(layer.feature.properties.fk_cod_femarh == 39){
        var codFemarh = 'G-05-01 - PROJETOS DE IRRIGAÇÃO E DE ASSENTAMENTO - Projeto agropecuário irrigado, público ou privado, com infra-estrutura coletiva.';
      }else if(layer.feature.properties.fk_cod_femarh == 40){
        var codFemarh = 'G-05-02 - PROJETOS DE IRRIGAÇÃO E DE ASSENTAMENTO - Barragem de irrigação ou de perenização para agricultura sem deslocamento de população atingida';
      }else if(layer.feature.properties.fk_cod_femarh == 41){
        var codFemarh = 'G-05-03 - PROJETOS DE IRRIGAÇÃO E DE ASSENTAMENTO - Barragem de irrigação ou de perenização para agricultura com deslocamento população atingida';
      }else if(layer.feature.properties.fk_cod_femarh == 42){
        var codFemarh = 'G-05-04 - PROJETOS DE IRRIGAÇÃO E DE ASSENTAMENTO - Projeto de assentamento para fins de reforma agrária.';
      }else if(layer.feature.properties.fk_cod_femarh == 43){
        var codFemarh = 'G-06-01 - OUTRAS ATIVIDADES - Centrais e postos de recolhimento de embalagens de agrotóxicos e seus componentes';
      }else if(layer.feature.properties.fk_cod_femarh == 44){
        var codFemarh = 'G-06-02 - OUTRAS ATIVIDADES - Comércio e/ou armazenamento de produtos agrotóxicos, veterinários e a fins';
      }else if(layer.feature.properties.fk_cod_femarh == 45){
        var codFemarh = 'G-06-03 - OUTRAS ATIVIDADES - Prestadora de serviço na aplicação terrestre de agrotóxicos e afins';
      }else if(layer.feature.properties.fk_cod_femarh == 46){
        var codFemarh = 'G-06-04 - OUTRAS ATIVIDADES - Prestadora de serviço na aplicação aérea de agrotóxicos e afins';
      }else{
          var codFemarh = layer.feature.properties.fk_cod_femarh;
      }
  
      isInside =turf.booleanPointInPolygon(theMarker.toGeoJSON(), layer.toGeoJSON());
      //isInside =turf.inside(theMarker.toGeoJSON(), layer.toGeoJSON());
    
      if (isInside){
          //selPoly.push(layer.feature);
          d = '<b>GID: </b>'+layer.feature.id+'<br><b>Processo:</b> '+layer.feature.properties.n_processo+'<br><b>Código da Atividade: </b>'+codFemarh+'<br><b>Descrição: </b> '+layer.feature.properties.descr_ativ+'<br><b>Área: </b> '+layer.feature.properties.area+'<br><b>Código Imóvel: </b> '+layer.feature.properties.fk_ati+'<br><b>Tipo do Projeto: </b> '+tipoProjeto+'<br><br><button type="button" onclick="test()" id="aProj" value="'+layer.feature.id+'" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Detalhes</button>';
      }
    });
     
     
     
       
    areaImov.eachLayer(function (layer) {
       isInside =turf.booleanPointInPolygon(theMarker.toGeoJSON(), layer.toGeoJSON());
       //isInside =turf.inside(theMarker.toGeoJSON(), layer.toGeoJSON());
       
       if (isInside){
         c = '<b>Imóvel:</b> '+layer.feature.properties.nome_imov+'<br><b>Município:</b> '+layer.feature.properties.municip+'<br><b>Gleba:</b> '+layer.feature.properties.gleba+'<br><b>CAR:</b> '+layer.feature.properties.car+'<br><b>SIGEF:</b> '+layer.feature.properties.sigef+'<br><b>Área:</b> '+layer.feature.properties.area+' ha.</p>';
       }
       
     })
   
       popupModal(a, b, c, d); 
     
     
   }
  
   
   
   
   
   
   
   
   function popupModal(a,b,c,d){
  
    let alvo1 = document.getElementById("fieldA");
    alvo1.innerText = "";
  
    let alvo2 = document.getElementById("fieldB");
    alvo2.innerText = "";
  
    let alvo3 = document.getElementById("fieldC");
    alvo3.innerText = "";
  
    let alvo4 = document.getElementById("fieldD");
    alvo4.innerText = "";
  
    var facModal = $('#myModal');

    let alvoA = document.querySelector(".field1");
    if(document.getElementById('36').checked === true){
      alvoA.innerHTML += a;
    }else{
      alvoA.innerHTML += 'No Data'
    }


    let alvoB = document.querySelector(".field2");
    if(document.getElementById('20').checked === true){
      alvoB.innerHTML += b;
    }else{
      alvoB.innerHTML += 'No Data'
    }


    let alvoC = document.querySelector(".field3");
    if(document.getElementById('2').checked === true){
      alvoC.innerHTML += c;
    }else{
      alvoC.innerHTML += 'No Data'
    }

  
    let alvoD = document.querySelector(".field4");
    if(document.getElementById('1').checked === true){
      alvoD.innerHTML += d;
    }else{
      alvoD.innerHTML += 'No Data'
    }
    
   
    facModal.appendTo("body").modal('show');
      facModal.draggable({handle: ".modal-header"	});
      //passedValue=b;  //passing the value passed to the bootstrap span tag
    
   };