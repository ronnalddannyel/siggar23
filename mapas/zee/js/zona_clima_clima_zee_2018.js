
// zona_clima_clima_zee_2018

var groupLay_zonaClimaClimaZee = L.layerGroup([]);

function zonaClimaClimaZee1(el){

    groupLay_zonaClimaClimaZee.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/zona_clima_clima_zee_2018.geojson", function(data) {  
        var zonaClimaClimaZee = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>zona_clima_clima_zee_2018</b></h6><p><b>zlevel:</b> '+geom.properties.zlevel+'<br><b>zc:</b> '+geom.properties.zc+'<br><b>zclima:</b> '+geom.properties.zclima+'<br><b>tipos:</b> '+geom.properties.tipos+'<br><b>resumo:</b> '+geom.properties.resumo+'<br><b>reclass:</b> '+geom.properties.reclass+'<br><b>area_km:</b> '+geom.properties.area_km+'</p>');
            }
        });

        groupLay_zonaClimaClimaZee.addLayer(zonaClimaClimaZee);
    })



    if(map.hasLayer(groupLay_zonaClimaClimaZee)){
        map.removeLayer(groupLay_zonaClimaClimaZee);
    }
    else {
        map.addLayer(groupLay_zonaClimaClimaZee);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}