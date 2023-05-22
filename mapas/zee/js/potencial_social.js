
// potencial_social

var groupLay_potSocial = L.layerGroup([]);

function potSocial1(el){

    groupLay_potSocial.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/potencial_social.geojson", function(data) {  
        var potSocial = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>potencial_social</b></h6><p><b>gridcode:</b> '+geom.properties.gridcode+'<br><b>pot_social:</b> '+geom.properties.pot_social+'</p>');
            }
        });

        groupLay_potSocial.addLayer(potSocial);
    })

    if(map.hasLayer(groupLay_potSocial)){
        map.removeLayer(groupLay_potSocial);
    }
    else {
        map.addLayer(groupLay_potSocial);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}