
// hidrografia_drenagem

var groupLay_hidDrenagem = L.layerGroup([]);


function hidDrenagem1(el){

    groupLay_hidDrenagem.clearLayers();
    $.getJSON(UrlFemarh+"/siggarr/mapas/zee/hidrografia_drenagem.geojson", function(data) {  
        var hidDrenagem = L.geoJSON(data, {
            color: '#01aaff',
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Drenagem</b></h6><p><b>Nome:</b> '+geom.properties.nome+'</p>');
            }
        });

        groupLay_hidDrenagem.addLayer(hidDrenagem);


        // Drenagem

        var hidDren112 = document.getElementById("teste55");
        if(hidDren112.style.display === "block"){
            hidDrenHtml = '<img src="imagens/zee/retangulo-arredondado-01aaff.png" style="max-width:20px;max-height:20px;"> Drenagem ('+data.totalFeatures+')';
            hidDren112.innerHTML += hidDrenHtml;
        }else{
            hidDren112.innerHTML = "";
        }
    })

    if(map.hasLayer(groupLay_hidDrenagem)){
        map.removeLayer(groupLay_hidDrenagem);
    }
    else {
        map.addLayer(groupLay_hidDrenagem);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}