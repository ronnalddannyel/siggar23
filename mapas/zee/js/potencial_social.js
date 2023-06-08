
// potencial_social

var groupLay_potSocial = L.layerGroup([]);

function potSocial1(el){

    groupLay_potSocial.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/potencial_social.geojson", function(data) {  
        var potSocial = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Potencial Social</b></h6><p><b>Grid Code:</b> '+geom.properties.gridcode+'<br><b>Potencial:</b> '+geom.properties.pot_social+'</p>');
            }
        });

        groupLay_potSocial.addLayer(potSocial);


        // Potencial Social

        var potSoc112 = document.getElementById("teste61");
        var potSoc12 = document.getElementById("potSoc");
        if(potSoc112.style.display === "block"){
            potSocHtml = 'Potencial Social ('+data.totalFeatures+')';
            potSoc12.innerHTML += potSocHtml;
        }else{
            potSoc12.innerHTML = "";
        }
    })

    if(map.hasLayer(groupLay_potSocial)){
        map.removeLayer(groupLay_potSocial);
    }
    else {
        map.addLayer(groupLay_potSocial);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}