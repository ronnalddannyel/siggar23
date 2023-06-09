
// geologia_dominios_morfo

var groupLay_geoDomMorfo = L.layerGroup([]);

function geoDomMorfo1(el){


    groupLay_geoDomMorfo.clearLayers();
    $.getJSON(UrlFemarh+"/siggarr/mapas/zee/geologia_dominios_morfo.geojson", function(data) {  
        var geoDomMorfo = L.geoJSON(data, {
            style: function(geom) {
                switch (geom.properties.domínios) {
                    case 'Bacias e Coberturas Sedimentares Fanerozóicas': return {color: "#cdaa66"};
                    case 'Crátons Neoproterozóicos': return {color: "#f57a7a"};
                    case 'Depósitos Sedimentares Quaternários': return {color: "#ffff73"};
                    default: return {color: "#969696"};
                }
              },
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Domínios Morfológicos</b></h6><p><b>Domínios:</b> '+geom.properties.domínios+'</p>');
            }
        });

        groupLay_geoDomMorfo.addLayer(geoDomMorfo);


        // Domínios Morfológicos

        var geoDomMor112 = document.getElementById("teste50");
        var geoDomMor12 = document.getElementById("geoDomMor");
        if(geoDomMor112.style.display === "block"){
            geoDomMorHtml = 'Domínios Morfológicos ('+data.totalFeatures+')';
            geoDomMor12.innerHTML += geoDomMorHtml;
        }else{
            geoDomMor12.innerHTML = "";
        }
    })

    if(map.hasLayer(groupLay_geoDomMorfo)){
        map.removeLayer(groupLay_geoDomMorfo);
    }
    else {
        map.addLayer(groupLay_geoDomMorfo);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}