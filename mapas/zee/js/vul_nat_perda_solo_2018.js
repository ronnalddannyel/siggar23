
// vul_nat_perda_solo_2018


var groupLay_vulNatPerdaSolo = L.layerGroup([]);

function vulNatPerdaSolo1(el){

    groupLay_vulNatPerdaSolo.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/vul_nat_perda_solo_2018.geojson", function(data) {  
        var vulNatPerdaSolo = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>vul_nat_perda_solo_2018</b></h6><p><b>sigla:</b> '+geom.properties.sigla+'<br><b>nome:</b> '+geom.properties.nome+'<br><b>classifica:</b> '+geom.properties.classifica+'<br><b>reclass:</b> '+geom.properties.reclass+'<br><b>area_km2:</b> '+geom.properties.area_km2+'<br><b>pixel:</b> '+geom.properties.pixel+'</p>');
            }
        });

        groupLay_vulNatPerdaSolo.addLayer(vulNatPerdaSolo);
    })

    if(map.hasLayer(groupLay_vulNatPerdaSolo)){
        map.removeLayer(groupLay_vulNatPerdaSolo);
    }
    else {
        map.addLayer(groupLay_vulNatPerdaSolo);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}