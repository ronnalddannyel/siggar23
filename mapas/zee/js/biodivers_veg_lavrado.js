
// biodivers_veg_lavrado

var groupLay_bioDivVegLavr = L.layerGroup([]);

function bioDivVegLavr1(el){

    groupLay_bioDivVegLavr.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/biodivers_veg_lavrado.geojson", function(data) {  
        var bioDivVegLavr = L.geoJSON(data, {
            color: '#66e661',
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Vegetação (Lavrado)</b></h6><p><b>Nome:</b> '+geom.properties.nomeabrev+'</p>');
            }
        });

        groupLay_bioDivVegLavr.addLayer(bioDivVegLavr);


        // Vegetação (Lavrado)

        var bioDiv12 = document.getElementById("teste48");
        if(bioDiv12.style.display === "block"){
            bioDivHtml = '<img src="imagens/zee/retangulo-arredondado-66e661.png" style="max-width:20px;max-height:20px;"> Vegetação "Lavrado" ('+data.totalFeatures+')';
            bioDiv12.innerHTML += bioDivHtml;
        }else{
            bioDiv12.innerHTML = "";
        }
    })


    if(map.hasLayer(groupLay_bioDivVegLavr)){
        map.removeLayer(groupLay_bioDivVegLavr);
    }
    else {
        map.addLayer(groupLay_bioDivVegLavr);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}