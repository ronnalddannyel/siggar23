
// Função - Adicionar Polígono (Imóvel)


//var groupLay = L.layerGroup([]);
        
function OutFinMun(){
    var markerFinMun = L.markerClusterGroup();
    
    var municipio = document.getElementById('municipio').value;
    console.log(municipio);
    var finalidade = document.getElementById('finalidade').value;
    console.log(finalidade);
    var cont = 1;
    var nome = '';

    $.getJSON(UrlFemarh+"/siggarr/mapas/ANA/outorgas.geojson", function(data) { 

        var outSub = L.geoJSON(data, {
            filter: function (features) {
                if(features.properties.ING_NM_MUN == municipio && features.properties.FIN_TFN_DS == finalidade){
                    nome = municipio+'/'+finalidade+' - '+cont;
                    cont++;
                    return true;
                }else if(features.properties.ING_NM_MUN == municipio && finalidade == 'não selecionado'){
                    nome = municipio+' - '+cont;
                    cont++;
                    return true;
                }else if(municipio == 'não selecionado' && features.properties.FIN_TFN_DS == finalidade){
                    nome = finalidade+' - '+cont;
                    cont++;
                    return true;
                }
            },
            pointToLayer: function (geom, latlng) {
                return L.marker(latlng, {icon: Icon_002673});
            },
            onEachFeature: function (features, layer) {
                layer.bindPopup('<h6><b>Outorgas</b></h6><p><b>Tipo de Interferência: </b>'+features.properties.INT_TIN_DS+'<br><b>Subtipo de Interferência: </b>'+features.properties.INT_TSU_DS+'<br><b>Tipo de Corpo Hídrico:</b> '+features.properties.INT_TCH_DS+'<br><b>Situação da Interferência:</b> '+features.properties.INT_TSI_DS+'<br><b>Domínio:</b> '+features.properties.INT_TDM_DS+'<br><b>Latitude:</b> '+features.properties.INT_NU_LAT+'<br><b>Longitude: </b>'+features.properties.INT_NU_LON+'<br><b>Município:</b> '+features.properties.ING_NM_MUN+'<br><b>Nome do Corpo Hídrico:</b> '+features.properties.INT_NM_COR+'<br><b>Nome do Corpo Hídrico Alterado:</b> '+features.properties.INT_NM_C_1+'<br><b>Nome do Empreendimento:</b> '+features.properties.EMP_NM_EMP+'<br><b>Situação da Outorga:</b> '+features.properties.OUT_TP_SIT+'<br><b>Data de Vencimento:</b> '+features.properties.OUT_DT_OUT+'<br><b>Data de Início:</b> '+features.properties.OUT_DT_O_1+'<br><b>Número do Processo: </b>'+features.properties.OUT_NU_PRO+'<br><b>Tipo do Ato:</b> '+features.properties.OUT_TP_ATO+'<br><b>Número do Ato:</b> '+features.properties.OUT_NU_ATO+'<br><b>Vazão Máxima:</b> '+features.properties.INT_QT_VAZ+'<br><b>Vazão Média:</b> '+features.properties.INT_QT_V_1+'<br><b>Volume Anual:</b> '+features.properties.INT_QT_VOL+'<br><b>Finalidade:</b> '+features.properties.FIN_TFN_DS+'</p>');  
            }
          });
      
    
          map.fitBounds(outSub.getBounds());
          markerFinMun.addLayer(outSub);
          map.addLayer(markerFinMun);
          layerControl.addOverlay(markerFinMun, nome);

    })

  }
