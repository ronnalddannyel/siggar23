function test7(teste){
    let alvo = document.getElementById("ccc");
    alvo.innerText = "";

    const selectElement = document.getElementById('yearSelect');
    selectElement.value = '';
  
  
    //var teste = document.getElementById('qaHist').value;
  
    //console.log(teste);
    var rty;
  
    // Use $.when() para esperar o carregamento de todas as requisições AJAX
    $.when(
        $.getJSON(UrlFemarh+"/siggarr/mapas/Dgph/quali_agua_historico.geojson", function(data) {
            rty = data.features;
        })
    
    
    ).then(function() {
  
      //console.log(rty);
  
      var element = document.querySelector(".qualidadeAgua");
  
  
      var newHtml = '';
                
  
      for(i=0; i<rty.length; i++){
  
        if(rty[i].properties.fk_cod_est == teste){
  
          newHtml += '<tr>';
          newHtml += '<td>'+rty[i].properties.fk_cod_est+'</td>';
          newHtml += '<td style="white-space: nowrap;">'+rty[i].properties.data_amost+'</td>';
          newHtml += '<td>'+rty[i].properties.obs+'</td>';
          newHtml += '<td>'+rty[i].properties.ph+'</td>';
          newHtml += '<td>'+rty[i].properties.ph_status+'</td>';
          newHtml += '<td>'+rty[i].properties.od_mgl+'</td>';
          newHtml += '<td>'+rty[i].properties.od_status+'</td>';
          newHtml += '<td>'+rty[i].properties.cf_nmp_100+'</td>';
          newHtml += '<td>'+rty[i].properties.cf_status+'</td>';
          newHtml += '<td>'+rty[i].properties.dbo_mgl+'</td>';
          newHtml += '<td>'+rty[i].properties.dbo_status+'</td>';
          newHtml += '<td>'+rty[i].properties.turb_ntu+'</td>';
          newHtml += '<td>'+rty[i].properties.turb_stat+'</td>';
          newHtml += '<td>'+rty[i].properties.sol_t_mgl+'</td>';
          newHtml += '<td>'+rty[i].properties.sol_t_stat+'</td>';
          newHtml += '<td>'+rty[i].properties.ecoli_nmp+'</td>';
          newHtml += '<td>'+rty[i].properties.ecoli_stat+'</td>';
          newHtml += '<td>'+rty[i].properties.temp_ar+'</td>';
          newHtml += '<td>'+rty[i].properties.cee_25+'</td>';
          newHtml += '<td>'+rty[i].properties.temp_agua+'</td>';
          newHtml += '</tr>';
  
        }
  
    }
  
    element.innerHTML += newHtml;
  
    
  })
  }
  
  function anoQualidade(selectedYear) {
    // Selecionar todas as linhas da tabela
    var rows = document.querySelectorAll("#ccc tr");
  
    // Iterar sobre cada linha da tabela
    rows.forEach(function(row) {
      // Obter a célula da data de coleta
      var dateCell = row.cells[1];
      var coletaData = dateCell.textContent;
  
      // Obter o ano da data de coleta
      var coletaAno = new Date(coletaData).getFullYear().toString();
  
      // Mostrar ou ocultar a linha com base no ano selecionado
      if (selectedYear === "" || coletaAno === selectedYear) {
        row.style.display = ""; // Mostrar a linha
      } else {
        row.style.display = "none"; // Ocultar a linha
      }
    });
  }