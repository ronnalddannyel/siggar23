
// iteraima_td

var groupLay_iterTd = L.layerGroup([]);

function iterTd(el){

    groupLay_iterTd.clearLayers();
    $.getJSON(UrlFemarh+"/siggarr/mapas/propostasAmpliacao/iteraima_td.geojson", function(data) {  
        var iterTd1 = new L.geoJson(data, {
            color: "#e1b053",
            weight: 2,
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Iteraima - Títulos Definitivos</b></h6><p><b>Propriedade:</b> '+geom.properties.propriedad+'<br><b>Número Título Definitivo:</b> '+geom.properties.titulo+'<br><b>Status:</b> '+geom.properties.status+'<br><b>Área (ha):</b> '+geom.properties.area_ha.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.<br><b>Gleba:</b> '+geom.properties.gleba+'<br><b>Observação:</b> '+geom.properties.obs+'<br><b>Certificado:</b> '+geom.properties.certificad+'<br><b>Convênio:</b> '+geom.properties.conv+'</p>');
            }
        });

        groupLay_iterTd.addLayer(iterTd1);

        // iteraima_td

        var iterTd112 = document.getElementById("teste58");
        if(iterTd112.style.display === "block"){
            iterTdHtml = '<img src="imagens/zee/retangulo-arredondado-e1b053.png" style="max-width:20px;max-height:20px;"> Iteraima - Títulos Definitivos ('+data.totalFeatures+')';
            iterTd112.innerHTML += iterTdHtml;
        }else{
            iterTd112.innerHTML = "";
        }
    })



    if(map.hasLayer(groupLay_iterTd)){
        map.removeLayer(groupLay_iterTd);
    }
    else {
        map.addLayer(groupLay_iterTd);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
    legMostra();
}