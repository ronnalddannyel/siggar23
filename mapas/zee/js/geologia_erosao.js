
// geologia_erosao

function gepErosao1(el){

    var gepErosao = L.geoJSON(gepErosao, {
        onEachFeature: function (geom, layer) {
            layer.bindPopup('<h6><b>geologia_erosao</b></h6><p><b>litologia:</b> '+geom.properties.litologia+'</p>');
        }
    });
    
    $.ajax({
        dataType: "json",
        url: UrlFemarh+"siggarr1/siggar23/mapas/zee/geologia_erosao.geojson",
        success: function(data) {
            $(data.features).each(function(key, data) {
                gepErosao.addData(data);
            });
        }
        }).error(function() {});

    if(map.hasLayer(gepErosao)){
        map.removeLayer(gepErosao);
    }
    else {
        map.addLayer(gepErosao);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}