
// zona_clima_concentracao_chuvas

var groupLay_zonaClimaConcChuvas = L.layerGroup([]);

function zonaClimaConcChuvas1(el){

    groupLay_zonaClimaConcChuvas.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/zona_clima_concentracao_chuvas.geojson", function(data) {  
        var zonaClimaConcChuvas = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>zona_clima_concentracao_chuvas</b></h6><p><b>zlevel:</b> '+geom.properties.zlevel+'</p>');
            }
        });

        groupLay_zonaClimaConcChuvas.addLayer(zonaClimaConcChuvas);
    })



    if(map.hasLayer(groupLay_zonaClimaConcChuvas)){
        map.removeLayer(groupLay_zonaClimaConcChuvas);
    }
    else {
        map.addLayer(groupLay_zonaClimaConcChuvas);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}