
// vul_nat_perda_solo_geologia_2018


var groupLay_vulNatPerdaSoloGeologia = L.layerGroup([]);

function vulNatPerdaSoloGeologia1(el){

    groupLay_vulNatPerdaSoloGeologia.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/vul_nat_perda_solo_geologia_2018.geojson", function(data) {  
        var vulNatPerdaSoloGeologia = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Perda Solo - Geologia (2018)</b></h6><p><b>Sigla:</b> '+geom.properties.rotulo+'<br><b>reclas:</b> '+geom.properties.reclas+'<br><b>Área:</b> '+geom.properties.area_km.toLocaleString('pt-BR', {minimumFractionDigits: 2,maximumFractionDigits: 2})+' Km²<br><b>pixel:</b> '+geom.properties.pixel+'</p>');
            }
        });

        groupLay_vulNatPerdaSoloGeologia.addLayer(vulNatPerdaSoloGeologia);


        // Perda Solo - Geologia "2018"

        var vulNatPerSoloGeo112 = document.getElementById("teste65");
        var vulNatPerSoloGeo12 = document.getElementById("vulNatPerSoloGeo");
        if(vulNatPerSoloGeo112.style.display === "block"){
            vulNatPerSoloGeoHtml = 'Perda Solo - Geologia "2018" ('+data.totalFeatures+')';
            vulNatPerSoloGeo12.innerHTML += vulNatPerSoloGeoHtml;
        }else{
            vulNatPerSoloGeo12.innerHTML = "";
        }
    })

    if(map.hasLayer(groupLay_vulNatPerdaSoloGeologia)){
        map.removeLayer(groupLay_vulNatPerdaSoloGeologia);
    }
    else {
        map.addLayer(groupLay_vulNatPerdaSoloGeologia);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}