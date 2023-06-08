
// geologia_erosao

var groupLay_gepErosao = L.layerGroup([]);

function gepErosao1(el){

    groupLay_gepErosao.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/geologia_erosao.geojson", function(data) {  
        var gepErosao = L.geoJSON(data, {
            style: function(geom) {
                switch (geom.properties.litologia) {
                    case 1: return {color: "#75ace3"};
                    case 2: return {color: "#86eba2"};
                    case 3: return {color: "#fbbec6"};
                }
              },
            onEachFeature: function (geom, layer) {

                if(geom.properties.litologia == 1){
                    var lit = 'Baixo';
                  }else if(geom.properties.litologia == 2){
                    var lit = 'Moderado';
                  }else{
                      var lit = 'Alto';
                  }

                layer.bindPopup('<h6><b>Erosão</b></h6><p><b>Litogia:</b> '+lit+'</p>');
            }
        });

        groupLay_gepErosao.addLayer(gepErosao);


        // Erosão

        var geoEros112 = document.getElementById("teste51");
        var geoEros12 = document.getElementById("geoEros");
        if(geoEros112.style.display === "block"){
            geoErosHtml = 'Erosão ('+data.totalFeatures+')';
            geoEros12.innerHTML += geoErosHtml;
        }else{
            geoEros12.innerHTML = "";
        }
    })

    if(map.hasLayer(groupLay_gepErosao)){
        map.removeLayer(groupLay_gepErosao);
    }
    else {
        map.addLayer(groupLay_gepErosao);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}