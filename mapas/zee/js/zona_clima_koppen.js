
// zona_clima_koppen

var groupLay_zonaClimaKoppen = L.layerGroup([]);

function zonaClimaKoppen1(el){

    groupLay_zonaClimaKoppen.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/zona_clima_koppen.geojson", function(data) {  
        var zonaClimaKoppen = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>zona_clima_koppen</b></h6><p><b>zc_kopper:</b> '+geom.properties.zc_kopper+'<br><b>tipos:</b> '+geom.properties.tipos+'</p>');
            }
        });

        groupLay_zonaClimaKoppen.addLayer(zonaClimaKoppen);
    })



    if(map.hasLayer(groupLay_zonaClimaKoppen)){
        map.removeLayer(groupLay_zonaClimaKoppen);
    }
    else {
        map.addLayer(groupLay_zonaClimaKoppen);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}