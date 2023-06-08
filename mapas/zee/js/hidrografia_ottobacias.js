
// hidrografia_ottobacias

var groupLay_hidOttobacias = L.layerGroup([]);

function hidOttobacias1(el){

    groupLay_hidOttobacias.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/hidrografia_ottobacias.geojson", function(data) {  
        var hidOttobacias = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Ottobacias</b></h6><p><b>Região:</b> '+geom.properties.regiao48+'</p>');
            }
        });

        groupLay_hidOttobacias.addLayer(hidOttobacias);


        // Ottobacias

        var hidOtt112 = document.getElementById("teste56");
        var hidOtt12 = document.getElementById("hidOtt");
        if(hidOtt112.style.display === "block"){
            hidOttHtml = 'Ottobacias ('+data.totalFeatures+')';
            hidOtt12.innerHTML += hidOttHtml;
        }else{
            hidOtt12.innerHTML = "";
        }
    })

    if(map.hasLayer(groupLay_hidOttobacias)){
        map.removeLayer(groupLay_hidOttobacias);
    }
    else {
        map.addLayer(groupLay_hidOttobacias);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}