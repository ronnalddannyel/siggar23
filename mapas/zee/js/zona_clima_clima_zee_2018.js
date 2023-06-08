
// zona_clima_clima_zee_2018

var groupLay_zonaClimaClimaZee = L.layerGroup([]);

function zonaClimaClimaZee1(el){

    groupLay_zonaClimaClimaZee.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/zona_clima_clima_zee_2018.geojson", function(data) {  
        var zonaClimaClimaZee = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Clima (2018)</b></h6><p><b>Zona:</b> '+geom.properties.zlevel+'<br><b>Índice:</b> '+geom.properties.zc+'<br><b>Zona Climática:</b> '+geom.properties.zclima+'<br><b>Tipo:</b> '+geom.properties.tipos+'<br><b>Descrição:</b> '+geom.properties.resumo+'<br><b>reclass:</b> '+geom.properties.reclass+'<br><b>Área:</b> '+geom.properties.area_km.toLocaleString('pt-BR', {minimumFractionDigits: 2,maximumFractionDigits: 2})+' Km²</p>');
            }
        });

        groupLay_zonaClimaClimaZee.addLayer(zonaClimaClimaZee);


        // Clima "2018"

        var zonaClimClimZee112 = document.getElementById("teste69");
        var zonaClimClimZee12 = document.getElementById("zonaClimClimZee");
        if(zonaClimClimZee112.style.display === "block"){
            zonaClimClimZeeHtml = 'Clima "2018" ('+data.totalFeatures+')';
            zonaClimClimZee12.innerHTML += zonaClimClimZeeHtml;
        }else{
            zonaClimClimZee12.innerHTML = "";
        }
    })



    if(map.hasLayer(groupLay_zonaClimaClimaZee)){
        map.removeLayer(groupLay_zonaClimaClimaZee);
    }
    else {
        map.addLayer(groupLay_zonaClimaClimaZee);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}