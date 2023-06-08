
// potencial_social_produtivo

var groupLay_potSocProdutivo = L.layerGroup([]);

function potSocProdutivo1(el){

    groupLay_potSocProdutivo.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/potencial_social_produtivo.geojson", function(data) {  
        var potSocProdutivo = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Potencial Social Produtivo</b></h6><p><b>Geocódigo:</b> '+geom.properties.cd_geocodi+'<br><b>Tipo:</b> '+geom.properties.tipo+'<br><b>Distrito:</b> '+geom.properties.nm_distrit+'<br><b>Município:</b> '+geom.properties.nm_municip+'<br><b>Microrregião:</b> '+geom.properties.nm_micro+'<br><b>Mesorregião:</b> '+geom.properties.nm_meso+'<br><b>Produto 1:</b> '+geom.properties.produt1+'<br><b>Produto 2:</b> '+geom.properties.produt2+'<br><b>Produção de Grãos:</b> '+geom.properties.prod_graos+'<br><b>PIB Per Capita:</b> '+geom.properties.pib_perc_m+'<br><b>PIB Municipal:</b> '+geom.properties.pib_munici+'<br><b>Consumo de energia:</b> '+geom.properties.consumo_en+'<br><b>Energia Rural:</b> '+geom.properties.ener_rural+'<br><b>Aptidão Agrícola:</b> '+geom.properties.ap_mineral+'<br><b>Aptidão Pecuária:</b> '+geom.properties.a_pecuaria+'<br><b>din_indus:</b> '+geom.properties.din_indus+'<br><b>fi_atv_agr:</b> '+geom.properties.fi_atv_agr+'<br><b>est_vic_pa:</b> '+geom.properties.est_vic_pa+'<br><b>Índice Médio:</b> '+geom.properties.indice_med+'</p>');
            }
        });

        groupLay_potSocProdutivo.addLayer(potSocProdutivo);


        // Potencial Social Produtivo

        var potSocProd112 = document.getElementById("teste60");
        var potSocProd12 = document.getElementById("potSocProd");
        if(potSocProd112.style.display === "block"){
            potSocProdHtml = 'Potencial Social Produtivo ('+data.totalFeatures+')';
            potSocProd12.innerHTML += potSocProdHtml;
        }else{
            potSocProd12.innerHTML = "";
        }
    })

    if(map.hasLayer(groupLay_potSocProdutivo)){
        map.removeLayer(groupLay_potSocProdutivo);
    }
    else {
        map.addLayer(groupLay_potSocProdutivo);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}