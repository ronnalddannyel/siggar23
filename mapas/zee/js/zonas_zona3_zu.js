
// zonas_zona3_zu

var groupLay_zonasZonaZu = L.layerGroup([]);

function zonasZonaZu1(el){

    groupLay_zonasZonaZu.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/zonas_zona3_zu.geojson", function(data) {  
        var zonasZonaZu = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>zonas_zona3_zu</b></h6><p><b>Município:</b> '+geom.properties.municipio+'<br><b>Parcela:</b> '+geom.properties.parcela+'<br><b>Fonte:</b> '+geom.properties.fonte+'<br><b>Observação:</b> '+geom.properties.obs+'<br><b>Nome:</b> '+geom.properties.nome_unico+'</p>');
            }
        });

        groupLay_zonasZonaZu.addLayer(zonasZonaZu);


        // zonas_zona3_zu

        var zonaZonaZu112 = document.getElementById("teste77");
        var zonaZonaZu12 = document.getElementById("zonaZonaZu");
        if(zonaZonaZu112.style.display === "block"){
            zonaZonaZuHtml = 'zonas_zona3_zu ('+data.totalFeatures+')';
            zonaZonaZu12.innerHTML += zonaZonaZuHtml;
        }else{
            zonaZonaZu12.innerHTML = "";
        }
    })



    if(map.hasLayer(groupLay_zonasZonaZu)){
        map.removeLayer(groupLay_zonasZonaZu);
    }
    else {
        map.addLayer(groupLay_zonasZonaZu);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}