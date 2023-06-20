
// biodivers_veg_floresta

var groupLay_bioDivVegFlor = L.layerGroup([]);

function bioDivVegFlor1(el){

    groupLay_bioDivVegFlor.clearLayers();
    $.getJSON(UrlFemarh+"/siggarr/mapas/zee/biodivers_veg_floresta.geojson", function(data) { 
        console.log(data.totalFeatures); 
        var bioDivVegFlor = new L.geoJson(data, {
            color: '#42963f',
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Vegetação (Floresta)</b></h6><p><b>Nome:</b> '+geom.properties.nomeabrev+'</p>');
            }
        });

        groupLay_bioDivVegFlor.addLayer(bioDivVegFlor);


        // Vegetação (Floresta)

        var bioDiv12 = document.getElementById("teste47");
        if(bioDiv12.style.display === "block"){
            bioDivHtml = '<img src="imagens/zee/retangulo-arredondado-42963f.png" style="max-width:20px;max-height:20px;"> Vegetação "Floresta" ('+data.totalFeatures+')';
            bioDiv12.innerHTML += bioDivHtml;
        }else{
            bioDiv12.innerHTML = "";
        }
    })


    

    if(map.hasLayer(groupLay_bioDivVegFlor)){
        map.removeLayer(groupLay_bioDivVegFlor);
    }
    else {
        map.addLayer(groupLay_bioDivVegFlor);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}