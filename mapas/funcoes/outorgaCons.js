
// Função - Adicionar Polígono (Imóvel)


//var groupLay = L.layerGroup([]);
        
function cpfOut(){
    //groupLay.clearLayers();
    
    var cpf = document.getElementById('cpf_out').value;
    var cpf2 = cpf.replace('.', '');
    var cpf2 = cpf2.replace('.', '');
    var cpf2 = cpf2.replace('-', '');
    var cpf2 = cpf2.replace('/', '');

    $.getJSON(UrlFemarh+"/siggarr/mapas/ANA/outorgas.geojson", function(data) { 

        var outSub = L.geoJSON(data, {
            filter: function (features) {
                if(features.properties.EMP_NU_CPF !== null){
                    var cpf1 = features.properties.EMP_NU_CPF;
                    var cpf3 = cpf1.toString();
                }
                if (cpf3 === cpf2) {
                  return true;
              }
            },
            pointToLayer: function (geom, latlng) {
                return L.marker(latlng, {icon: Icon_002673});
            },
            onEachFeature: function (features, layer) {
              layer.bindPopup('<h6><b>Outorgas Subterrâneas</b></h6><p><b>Tipo de Interferência: </b>'+features.properties.INT_TIN_DS+'<br><b>Subtipo de Interferência: </b>'+features.properties.INT_TSU_DS+'<br><b>Tipo de Corpo Hídrico:</b> '+features.properties.INT_TCH_DS+'<br><b>Situação da Interferência:</b> '+features.properties.INT_TSI_DS+'<br><b>Domínio:</b> '+features.properties.INT_TDM_DS+'<br><b>Latitude:</b> '+features.properties.INT_NU_LAT+'<br><b>Longitude: </b>'+features.properties.INT_NU_LON+'<br><b>Município:</b> '+features.properties.ING_NM_MUN+'<br><b>Nome do Corpo Hídrico:</b> '+features.properties.INT_NM_COR+'<br><b>Nome do Corpo Hídrico Alterado:</b> '+features.properties.INT_NM_C_1+'<br><b>Nome do Empreendimento:</b> '+features.properties.EMP_NM_EMP+'<br><b>Situação da Outorga:</b> '+features.properties.OUT_TP_SIT+'<br><b>Data de Vencimento:</b> '+features.properties.OUT_DT_OUT+'<br><b>Data de Início:</b> '+features.properties.OUT_DT_O_1+'<br><b>Número do Processo: </b>'+features.properties.OUT_NU_PRO+'<br><b>Tipo do Ato:</b> '+features.properties.OUT_TP_ATO+'<br><b>Número do Ato:</b> '+features.properties.OUT_NU_ATO+'<br><b>Vazão Máxima:</b> '+features.properties.INT_QT_VAZ+'<br><b>Vazão Média:</b> '+features.properties.INT_QT_V_1+'<br><b>Volume Anual:</b> '+features.properties.INT_QT_VOL+'<br><b>Finalidade:</b> '+features.properties.FIN_TFN_DS+'</p>');        
            }
          });
      
    
          map.fitBounds(outSub.getBounds());
          map.addLayer(outSub);
          layerControl.addOverlay(outSub, cpf);

    })

  }


  // Função - Remover Polígono (Imóvel)

  function removeCpfOut(){
    //map.removeLayer(groupLay);
    document.getElementById('cpf_out').value = '';
    //map.setView([latit, long], zm);
  } 