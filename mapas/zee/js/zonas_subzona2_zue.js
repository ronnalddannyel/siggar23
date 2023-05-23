
// zonas_subzona2_zue

var groupLay_zonasSubzonaZue = L.layerGroup([]);

function zonasSubzonaZue1(el){

    groupLay_zonasSubzonaZue.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/zonas_subzona2_zue.geojson", function(data) {  
        var zonasSubzonaZue = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>zonas_subzona2_zue</b></h6><p><b>layer:</b> '+geom.properties.layer+'<br><b>nome:</b> '+geom.properties.nome+'<br><b>area:</b> '+geom.properties.area+'<br><b>perimeter:</b> '+geom.properties.perimeter+'</p>');
            }
        });

        groupLay_zonasSubzonaZue.addLayer(zonasSubzonaZue);
    })



    if(map.hasLayer(groupLay_zonasSubzonaZue)){
        map.removeLayer(groupLay_zonasSubzonaZue);
    }
    else {
        map.addLayer(groupLay_zonasSubzonaZue);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}