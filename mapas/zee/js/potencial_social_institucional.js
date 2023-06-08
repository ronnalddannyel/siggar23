
// potencial_social_institucional

var groupLay_potSocInstitucional = L.layerGroup([]);

function potSocInstitucional1(el){

    groupLay_potSocInstitucional.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/potencial_social_institucional.geojson", function(data) {  
        var potSocInstitucional = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Potencial Social Institucional</b></h6><p><b>Geocódigo:</b> '+geom.properties.cd_geocodi+'<br><b>Tipo:</b> '+geom.properties.tipo+'<br><b>Distrito:</b> '+geom.properties.nm_distrit+'<br><b>Município:</b> '+geom.properties.nm_municip+'<br><b>Microrregião:</b> '+geom.properties.nm_micro+'<br><b>Mesorregião:</b> '+geom.properties.nm_meso+'<br><b>par_pol_el:</b> '+geom.properties.par_pol_el+'<br><b>au_pol_adm:</b> '+geom.properties.au_pol_adm+'<br><b>n_con_soci:</b> '+geom.properties.n_con_soci+'<br><b>dissolvido:</b> '+geom.properties.dissolvido+'<br><b>dissolvi_1:</b> '+geom.properties.dissolvi_1+'<br><b>Índice:</b> '+geom.properties.indice_are+'<br><b>Potencial:</b> '+geom.properties.potencial_+'</p>');
            }
        });

        groupLay_potSocInstitucional.addLayer(potSocInstitucional);


        // Potencial Social Institucional

        var potSocInst112 = document.getElementById("teste59");
        var potSocInst12 = document.getElementById("potSocInst");
        if(potSocInst112.style.display === "block"){
            potSocInstHtml = 'Potencial Social Institucional ('+data.totalFeatures+')';
            potSocInst12.innerHTML += potSocInstHtml;
        }else{
            potSocInst12.innerHTML = "";
        }
    })

    if(map.hasLayer(groupLay_potSocInstitucional)){
        map.removeLayer(groupLay_potSocInstitucional);
    }
    else {
        map.addLayer(groupLay_potSocInstitucional);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}