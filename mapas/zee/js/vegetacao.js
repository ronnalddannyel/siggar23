
// vegetacao

var vegetacao = L.geoJSON(vegetacao, {
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>vegetacao</b></h6><p><b>cod_class:</b> '+geom.properties.cod_class+'<br><b>auxiliary_:</b> '+geom.properties.auxiliary_+'</p>');
    }
});

$.ajax({
    dataType: "json",
    url: UrlFemarh+"siggarr1/siggar23/mapas/zee/vegetacao.geojson",
    success: function(data) {
        $(data.features).each(function(key, data) {
            vegetacao.addData(data);
        });
    }
    }).error(function() {});

function vegetacao1(el){
    if(map.hasLayer(vegetacao)){
        map.removeLayer(vegetacao);
    }
    else {
        map.addLayer(vegetacao);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}