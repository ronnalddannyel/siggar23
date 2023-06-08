
// geologia_potencial_mineral

var groupLay_geoPotMineral = L.layerGroup([]);

function geoPotMineral1(el){


    groupLay_geoPotMineral.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/geologia_potencial_mineral.geojson", function(data) {  
        var geoPotMineral = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Potencial Mineral</b></h6><p><b>RM3:</b> '+geom.properties.rm3+'</p>');
            }
        });

        groupLay_geoPotMineral.addLayer(geoPotMineral);


        // Potencial Mineral

        var geoPotMin112 = document.getElementById("teste53");
        var geoPotMin12 = document.getElementById("geoPotMin");
        if(geoPotMin112.style.display === "block"){
            geoPotMinHtml = 'Potencial Mineral ('+data.totalFeatures+')';
            geoPotMin12.innerHTML += geoPotMinHtml;
        }else{
            geoPotMin12.innerHTML = "";
        }
    })


    if(map.hasLayer(groupLay_geoPotMineral)){
        map.removeLayer(groupLay_geoPotMineral);
    }
    else {
        map.addLayer(groupLay_geoPotMineral);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}