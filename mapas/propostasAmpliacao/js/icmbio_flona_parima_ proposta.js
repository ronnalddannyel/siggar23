
// icmbio_flona_parima_ proposta

var groupLay_icmbioFlona = L.layerGroup([]);

function icmbioFlona(el){

    groupLay_icmbioFlona.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/propostasAmpliacao/icmbio_flona_parima_ proposta.geojson", function(data) {  
        var icmbioFlona1 = new L.geoJson(data, {
            color: "black",
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Aptidão Agrícola</b></h6><p><b>Categoria:</b> '+geom.properties.categoria+'<br><b>Nome:</b> '+geom.properties.nome_1+'<br><b>Processo:</b> '+geom.properties.processo+'<br><b>Área (ha):</b> '+geom.properties.hectares.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+'</p>');
            }
        });

        groupLay_icmbioFlona.addLayer(icmbioFlona1);

        // icmbio_flona_parima_ proposta

        var icmbioFlona112 = document.getElementById("teste61");
        if(icmbioFlona112.style.display === "block"){
            icmbioFlonaHtml = 'icmbio_flona_parima_ proposta ('+data.totalFeatures+')';
            icmbioFlona112.innerHTML += icmbioFlonaHtml;
        }else{
            icmbioFlona112.innerHTML = "";
        }
    })



    if(map.hasLayer(groupLay_icmbioFlona)){
        map.removeLayer(groupLay_icmbioFlona);
    }
    else {
        map.addLayer(groupLay_icmbioFlona);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}