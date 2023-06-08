
// potencial_social_ambiental

var groupLay_potSocAmbiental = L.layerGroup([]);

function potSocAmbiental1(el){

    groupLay_potSocAmbiental.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/potencial_social_ambiental.geojson", function(data) {  
        var potSocAmbiental = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Potencial Social Ambiental</b></h6><p><b>Nome:</b> '+geom.properties.nome+'<br><b>Natural:</b> '+geom.properties.natural+'</p>');
            }
        });

        groupLay_potSocAmbiental.addLayer(potSocAmbiental);


        // Potencial Social Ambiental

        var potSocAmb112 = document.getElementById("teste57");
        var potSocAmb12 = document.getElementById("potSocAmb");
        if(potSocAmb112.style.display === "block"){
            potSocAmbHtml = 'Potencial Social Ambiental ('+data.totalFeatures+')';
            potSocAmb12.innerHTML += potSocAmbHtml;
        }else{
            potSocAmb12.innerHTML = "";
        }
    })

    if(map.hasLayer(groupLay_potSocAmbiental)){
        map.removeLayer(groupLay_potSocAmbiental);
    }
    else {
        map.addLayer(groupLay_potSocAmbiental);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}