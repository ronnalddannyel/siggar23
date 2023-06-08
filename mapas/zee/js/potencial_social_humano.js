
// potencial_social_humano

var groupLay_potSocHumano = L.layerGroup([]);

function potSocHumano1(el){

    groupLay_potSocHumano.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/potencial_social_humano.geojson", function(data) {  
        var potSocHumano = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Potencial Social Humano</b></h6><p><b>Geocódigo:</b> '+geom.properties.cd_geocodi+'<br><b>Tipo:</b> '+geom.properties.tipo+'<br><b>Município:</b> '+geom.properties.nm_municip+'<br><b>Microrregião:</b> '+geom.properties.nm_micro+'<br><b>Mesorregião:</b> '+geom.properties.nm_meso+'<br><b>Índice Médio:</b> '+geom.properties.indice_med+'<br><b>Atendimento:</b> '+geom.properties.atendiment+'<br><b>Densidade:</b> '+geom.properties.densidade_+'<br><b>Esgoto Sanitário:</b> '+geom.properties.esgoto_san+'<br><b>IDEB:</b> '+geom.properties.ideb_rr_mu+'<br><b>nivel_de_u:</b> '+geom.properties.nivel_de_u+'<br><b>oferta_de_:</b> '+geom.properties.oferta_de_+'<br><b>pessoas_al:</b> '+geom.properties.pessoas_al+'<br><b>Renda Domiciliar:</b> '+geom.properties.renda_domi+'</p>');
            }
        });

        groupLay_potSocHumano.addLayer(potSocHumano);


        // Potencial Social Humano

        var potSocHum112 = document.getElementById("teste58");
        var potSocHum12 = document.getElementById("potSocHum");
        if(potSocHum112.style.display === "block"){
            potSocHumHtml = 'Potencial Social Humano ('+data.totalFeatures+')';
            potSocHum12.innerHTML += potSocHumHtml;
        }else{
            potSocHum12.innerHTML = "";
        }
    })

    if(map.hasLayer(groupLay_potSocHumano)){
        map.removeLayer(groupLay_potSocHumano);
    }
    else {
        map.addLayer(groupLay_potSocHumano);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}