
// Aptidão Agrícola

var groupLay_aptAgr = L.layerGroup([]);

function aptAgr1(el){

    groupLay_aptAgr.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/aptidao_agricola.geojson", function(data) {  
        var aptAgr = new L.geoJson(data, {
            style: function(geom) {
                switch (geom.properties.class_apt) {
                    case '1ABC': return {color: "#a9a800"};
                    case '2(a)bc': return {color: "#e1b053"};
                    case '2abc': return {color: "#a48f79"};
                    case '2bc': return {color: "#e2b051"};
                    case '3(bc)': return {color: "#fdd07d"};
                    case '6': return {color: "#cac6ac"};
                }
              },
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Aptidão Agrícola</b></h6><p><b>Sigla:</b> '+geom.properties.sigla+'<br><b>Nome:</b> '+geom.properties.nome+'<br><b>Classificação:</b> '+geom.properties.classifica+'<br><b>Área:</b> '+geom.properties.ha.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.<br><b>Classe:</b> '+geom.properties.class_apt+'<br><b>Descrição:</b> '+geom.properties.desc_+'<br><b>Descrição (continuação):</b> '+geom.properties.desc_cont+'</p>');
            }
        });

        groupLay_aptAgr.addLayer(aptAgr);

        // Aptidão Agrícola

        var aptAgr112 = document.getElementById("teste44");
        var aptAgr12 = document.getElementById("aptAgri");
        if(aptAgr112.style.display === "block"){
            aptAgrHtml = 'Aptidão Agrícola ('+data.totalFeatures+')';
            aptAgr12.innerHTML += aptAgrHtml;
        }else{
            aptAgr12.innerHTML = "";
        }
    })



    if(map.hasLayer(groupLay_aptAgr)){
        map.removeLayer(groupLay_aptAgr);
    }
    else {
        map.addLayer(groupLay_aptAgr);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}



/*
    var aptAgr = new L.geoJson(aptAgr, {
        onEachFeature: function (geom, layer) {
            layer.bindPopup('<h6><b>Aptidão Agrícola</b></h6><p><b>sigla:</b> '+geom.properties.sigla+'<br><b>nome:</b> '+geom.properties.nome+'<br><b>classifica:</b> '+geom.properties.classifica+'<br><b>ha:</b> '+geom.properties.ha+'<br><b>class_apt:</b> '+geom.properties.class_apt+'<br><b>desc_:</b> '+geom.properties.desc_+'<br><b>desc_cont:</b> '+geom.properties.desc_cont+'<br><b>subl:</b> '+geom.properties.subl+'</p>');
        }
    });
    
    $.ajax({
        dataType: "json",
        url: UrlFemarh+"siggarr1/siggar23/mapas/zee/aptidao_agricola.geojson",
        success: function(data) {
            $(data.features).each(function(key, data) {
                aptAgr.addData(data);
            });
        }
        }).error(function() {});

*/
