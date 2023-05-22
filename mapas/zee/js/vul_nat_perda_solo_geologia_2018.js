
// vul_nat_perda_solo_geologia_2018


var groupLay_vulNatPerdaSoloGeologia = L.layerGroup([]);

function vulNatPerdaSoloGeologia1(el){

    groupLay_vulNatPerdaSoloGeologia.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/vul_nat_perda_solo_geologia_2018.geojson", function(data) {  
        var vulNatPerdaSoloGeologia = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>vul_nat_perda_solo_geologia_2018</b></h6><p><b>rotulo:</b> '+geom.properties.rotulo+'<br><b>reclas:</b> '+geom.properties.reclas+'<br><b>area_km:</b> '+geom.properties.area_km+'<br><b>pixel:</b> '+geom.properties.pixel+'</p>');
            }
        });

        groupLay_vulNatPerdaSoloGeologia.addLayer(vulNatPerdaSoloGeologia);
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