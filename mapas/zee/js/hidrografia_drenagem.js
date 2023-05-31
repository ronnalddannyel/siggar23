
// hidrografia_drenagem

var groupLay_hidDrenagem = L.layerGroup([]);


function hidDrenagem1(el){

    groupLay_hidDrenagem.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/hidrografia_drenagem.geojson", function(data) {  
        var hidDrenagem = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Drenagem</b></h6><p><b>Nome:</b> '+geom.properties.nome+'</p>');
            }
        });

        groupLay_hidDrenagem.addLayer(hidDrenagem);
    })

    if(map.hasLayer(groupLay_hidDrenagem)){
        map.removeLayer(groupLay_hidDrenagem);
    }
    else {
        map.addLayer(groupLay_hidDrenagem);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}