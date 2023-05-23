
// zona_clima_isolinhas_chuvas

var groupLay_zonaClimaIsolChuvas = L.layerGroup([]);

function zonaClimaIsolChuvas1(el){

    groupLay_zonaClimaIsolChuvas.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/zona_clima_isolinhas_chuvas.geojson", function(data) {  
        var zonaClimaIsolChuvas = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>zona_clima_isolinhas_chuvas</b></h6><p><b>zlevel:</b> '+geom.properties.zlevel+'</p>');
            }
        });

        groupLay_zonaClimaIsolChuvas.addLayer(zonaClimaIsolChuvas);
    })



    if(map.hasLayer(groupLay_zonaClimaIsolChuvas)){
        map.removeLayer(groupLay_zonaClimaIsolChuvas);
    }
    else {
        map.addLayer(groupLay_zonaClimaIsolChuvas);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}