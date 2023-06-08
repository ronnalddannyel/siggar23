
// geologia_geologico

var groupLay_geoGeolog = L.layerGroup([]);

function geoGeolog1(el){

    
    groupLay_geoGeolog.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/geologia_geologico.geojson", function(data) {  

        var geoGeolog = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Geológico</b></h6><p><b>Sigla:</b> '+geom.properties.rotulo+'<br><b>Nome:</b> '+geom.properties.nomeext+'</p>');
            }
        });

        groupLay_geoGeolog.addLayer(geoGeolog);


        // Geológico

        var geoGeo112 = document.getElementById("teste52");
        var geoGeo12 = document.getElementById("geoGeo");
        if(geoGeo112.style.display === "block"){
            geoGeoHtml = 'Geológico ('+data.totalFeatures+')';
            geoGeo12.innerHTML += geoGeoHtml;
        }else{
            geoGeo12.innerHTML = "";
        }
    })

    if(map.hasLayer(groupLay_geoGeolog)){
        map.removeLayer(groupLay_geoGeolog);
    }
    else {
        map.addLayer(groupLay_geoGeolog);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}