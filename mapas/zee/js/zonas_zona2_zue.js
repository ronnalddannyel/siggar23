// zonas_zona2_zue

var groupLay_zonasZonaZue = L.layerGroup([]);

function zonasZonaZue1(el){

    groupLay_zonasZonaZue.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/zonas_zona2_zue.geojson", function(data) {  
        var zonasZonaZue = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>zonas_zona2_zue</b></h6><p><b>area:</b> '+geom.properties.area+'<br><b>perimeter:</b> '+geom.properties.perimeter+'</p>');
            }
        });

        groupLay_zonasZonaZue.addLayer(zonasZonaZue);


        // zonas_zona2_zue

        var zonaZonaZue112 = document.getElementById("teste76");
        var zonaZonaZue12 = document.getElementById("zonaZonaZue");
        if(zonaZonaZue112.style.display === "block"){
            zonaZonaZueHtml = 'zonas_zona2_zue ('+data.totalFeatures+')';
            zonaZonaZue12.innerHTML += zonaZonaZueHtml;
        }else{
            zonaZonaZue12.innerHTML = "";
        }
    })



    if(map.hasLayer(groupLay_zonasZonaZue)){
        map.removeLayer(groupLay_zonasZonaZue);
    }
    else {
        map.addLayer(groupLay_zonasZonaZue);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}