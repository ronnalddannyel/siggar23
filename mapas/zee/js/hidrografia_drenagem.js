
// hidrografia_drenagem

var hidDrenagem = L.geoJSON(hidDrenagem, {
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>hidrografia_drenagem</b></h6><p><b>nome:</b> '+geom.properties.nome+'</p>');
    }
});

$.ajax({
    dataType: "json",
    url: UrlFemarh+"siggarr1/siggar23/mapas/zee/hidrografia_drenagem.geojson",
    success: function(data) {
        $(data.features).each(function(key, data) {
            hidDrenagem.addData(data);
        });
    }
    }).error(function() {});

function hidDrenagem1(el){
    if(map.hasLayer(hidDrenagem)){
        map.removeLayer(hidDrenagem);
    }
    else {
        map.addLayer(hidDrenagem);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}