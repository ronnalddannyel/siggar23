
// geologia_erosao

var groupLay_gepErosao = L.layerGroup([]);

function gepErosao1(el){

    groupLay_gepErosao.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/geologia_erosao.geojson", function(data) {  
        var gepErosao = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>geologia_erosao</b></h6><p><b>litologia:</b> '+geom.properties.litologia+'</p>');
            }
        });

        groupLay_gepErosao.addLayer(gepErosao);
    })

    if(map.hasLayer(groupLay_gepErosao)){
        map.removeLayer(groupLay_gepErosao);
    }
    else {
        map.addLayer(groupLay_gepErosao);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}