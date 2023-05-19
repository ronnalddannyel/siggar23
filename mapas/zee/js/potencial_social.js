
// potencial_social

var potSocial = L.geoJSON(potSocial, {
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>potencial_social</b></h6><p><b>gridcode:</b> '+geom.properties.gridcode+'<br><b>pot_social:</b> '+geom.properties.pot_social+'</p>');
    }
});

$.ajax({
    dataType: "json",
    url: UrlFemarh+"siggarr1/siggar23/mapas/zee/potencial_social.geojson",
    success: function(data) {
        $(data.features).each(function(key, data) {
            potSocial.addData(data);
        });
    }
    }).error(function() {});

function potSocial1(el){
    if(map.hasLayer(potSocial)){
        map.removeLayer(potSocial);
    }
    else {
        map.addLayer(potSocial);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}