

// vul_nat_perda_solo_zonaclima_2018

var groupLay_vulNatPerdSoloZonaclima = L.layerGroup([]);

function aptAgr1(el){

    groupLay_vulNatPerdSoloZonaclima.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/vul_nat_perda_solo_zonaclima_2018.geojson", function(data) {  
        var vulNatPerdSoloZonaclima = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>vul_nat_perda_solo_zonaclima_2018</b></h6><p><b>zievel:</b> '+geom.properties.zievel+'<br><b>zc:</b> '+geom.properties.zc+'<br><b>zclima:</b> '+geom.properties.zclima+'<br><b>tipos:</b> '+geom.properties.tipos+'<br><b>resumo:</b> '+geom.properties.resumo+'<br><b>reclass:</b> '+geom.properties.reclass+'<br><b>area_km:</b> '+geom.properties.area_km+'<br><b>pixel:</b> '+geom.properties.pixel+'</p>');
            }
        });

        groupLay_vulNatPerdSoloZonaclima.addLayer(vulNatPerdSoloZonaclima);
    })



    if(map.hasLayer(groupLay_vulNatPerdSoloZonaclima)){
        map.removeLayer(groupLay_vulNatPerdSoloZonaclima);
    }
    else {
        map.addLayer(groupLay_vulNatPerdSoloZonaclima);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}
