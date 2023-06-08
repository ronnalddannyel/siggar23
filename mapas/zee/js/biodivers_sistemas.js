// biodivers_sistemas

var groupLay_bioDivSist = L.layerGroup([]);

function bioDivSist1(el){
    groupLay_bioDivSist.clearLayers();

    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/biodivers_sistemas.geojson", function(data) {  
        var bioDivSist = new L.geoJson(data, {
            style: function(geom) {
                switch (geom.properties.sistema) {
                    case 'Agradacional(DF)': return {color: "#33ebae"};
                    case 'Agradacional(DM)': return {color: "#ed29bf"};
                    case 'Denudacional(DF-FCE)': return {color: "#ece786"};
                    case 'Denudacional(DF)': return {color: "#835acb"};
                    case 'Denudacional(DM-CE)': return {color: "#44ef19"};
                    case 'Denudacional(DM)': return {color: "#eb3c2c"};
                }
            },
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Sistemas</b></h6><p><b>Sistemas:</b> '+geom.properties.sistema+'<br><b>Padrão:</b> '+geom.properties.padrão+'</p>');
            }
        });

        groupLay_bioDivSist.addLayer(bioDivSist);


        // Sistemas

        var bioDivSis112 = document.getElementById("teste45");
        var bioDivSis12 = document.getElementById("bioDivSis");
        if(bioDivSis112.style.display === "block"){
            bioDivSisHtml = 'Aptidão Agrícola ('+data.totalFeatures+')';
            bioDivSis12.innerHTML += bioDivSisHtml;
        }else{
            bioDivSis12.innerHTML = "";
        }
    })

    if(map.hasLayer(groupLay_bioDivSist)){
        map.removeLayer(groupLay_bioDivSist);
    }
    else {
        map.addLayer(groupLay_bioDivSist);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}