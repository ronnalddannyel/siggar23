
// zonas_subzona1_zup

var groupLay_zonasSubzonaZup = L.layerGroup([]);

function zonasSubzonaZup1(el){

    groupLay_zonasSubzonaZup.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/zonas_subzona1_zup.geojson", function(data) {  
        var zonasSubzonaZup = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>zonas_subzona1_zup</b></h6><p><b>Subzona:</b> '+geom.properties.subzona+'<br><b>Descrição:</b> '+geom.properties.recom+'<br><b>Macrozona:</b> '+geom.properties.macrozona+'<br><b>Observação 1:</b> '+geom.properties.obs+'<br><b>Observação 2:</b> '+geom.properties.obs2+'</p>');
            }
        });

        groupLay_zonasSubzonaZup.addLayer(zonasSubzonaZup);


        // zonas_subzona1_zup

        var zonaSubZup112 = document.getElementById("teste73");
        var zonaSubZup12 = document.getElementById("zonaSubZup");
        if(zonaSubZup112.style.display === "block"){
            zonaSubZupHtml = 'zonas_subzona1_zup ('+data.totalFeatures+')';
            zonaSubZup12.innerHTML += zonaSubZupHtml;
        }else{
            zonaSubZup12.innerHTML = "";
        }
    })



    if(map.hasLayer(groupLay_zonasSubzonaZup)){
        map.removeLayer(groupLay_zonasSubzonaZup);
    }
    else {
        map.addLayer(groupLay_zonasSubzonaZup);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}