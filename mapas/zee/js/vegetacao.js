
// vegetacao

var groupLay_vegetacao = L.layerGroup([]);

function vegetacao1(el){

    groupLay_vegetacao.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/vegetacao.geojson", function(data) {  
        var vegetacao = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Vegetação</b></h6><p><b>Classe:</b> '+geom.properties.cod_class+'</p>');
            }
        });

        groupLay_vegetacao.addLayer(vegetacao);


        // Vegetação

        var veg112 = document.getElementById("teste63");
        var veg12 = document.getElementById("veg");
        if(veg112.style.display === "block"){
            vegHtml = 'Vegetação ('+data.totalFeatures+')';
            veg12.innerHTML += vegHtml;
        }else{
            veg12.innerHTML = "";
        }
    })

    if(map.hasLayer(groupLay_vegetacao)){
        map.removeLayer(groupLay_vegetacao);
    }
    else {
        map.addLayer(groupLay_vegetacao);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}