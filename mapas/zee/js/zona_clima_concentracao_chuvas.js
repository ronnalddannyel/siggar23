
// zona_clima_concentracao_chuvas

var groupLay_zonaClimaConcChuvas = L.layerGroup([]);

function zonaClimaConcChuvas1(el){

    groupLay_zonaClimaConcChuvas.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/zona_clima_concentracao_chuvas.geojson", function(data) {  
        var zonaClimaConcChuvas = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Concentração de Chuvas</b></h6><p><b>Zona:</b> '+geom.properties.zlevel+'</p>');
            }
        });

        groupLay_zonaClimaConcChuvas.addLayer(zonaClimaConcChuvas);


        // Concentração de Chuvas

        var zonaClimConcChuva112 = document.getElementById("teste70");
        var zonaClimConcChuva12 = document.getElementById("zonaClimConcChuva");
        if(zonaClimConcChuva112.style.display === "block"){
            zonaClimConcChuvaHtml = 'Concentração de Chuvas ('+data.totalFeatures+')';
            zonaClimConcChuva12.innerHTML += zonaClimConcChuvaHtml;
        }else{
            zonaClimConcChuva12.innerHTML = "";
        }
    })



    if(map.hasLayer(groupLay_zonaClimaConcChuvas)){
        map.removeLayer(groupLay_zonaClimaConcChuvas);
    }
    else {
        map.addLayer(groupLay_zonaClimaConcChuvas);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}