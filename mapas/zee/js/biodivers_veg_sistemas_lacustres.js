
// biodivers_veg_sistemas_lacustres

var groupLay_bioDivVegSistLacust = L.layerGroup([]);

function bioDivVegSistLacust1(el){

    groupLay_bioDivVegSistLacust.clearLayers();
    $.getJSON(UrlFemarh+"/siggarr/mapas/zee/biodivers_veg_sistemas_lacustres.geojson", function(data) {  
        var bioDivVegSistLacust = L.geoJSON(data, {
            color: '#48a9f2',
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Vegetação (Sistemas Lacustres)</b></h6><p></p>');
            }
        });

        groupLay_bioDivVegSistLacust.addLayer(bioDivVegSistLacust);


        // Vegetação (Sistemas Lacustres)

        var bioDiv12 = document.getElementById("teste49");
        if(bioDiv12.style.display === "block"){
            bioDivHtml = '<img src="imagens/zee/retangulo-arredondado-48a9f2.png" style="max-width:20px;max-height:20px;"> Vegetação "Sistemas Lacustres" ('+data.totalFeatures+')';
            bioDiv12.innerHTML += bioDivHtml;
        }else{
            bioDiv12.innerHTML = "";
        }
    })


    if(map.hasLayer(groupLay_bioDivVegSistLacust)){
        map.removeLayer(groupLay_bioDivVegSistLacust);
    }
    else {
        map.addLayer(groupLay_bioDivVegSistLacust);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}