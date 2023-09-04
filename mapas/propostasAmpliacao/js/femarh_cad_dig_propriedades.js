
// femarh_cad_dig_propriedades

var groupLay_cadDigProp = L.layerGroup([]);

function cadDigProp(el){

    groupLay_cadDigProp.clearLayers();
    $.getJSON(UrlFemarh+"/siggarr/mapas/propostasAmpliacao/femarh_cad_dig_propriedades.geojson", function(data) {  
        var cadDigProp1 = new L.geoJson(data, {
            color: "#f57a7a",
            weight: 2,
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Cadastro Digital de Propriedades</b></h6><p><b>Proprietário:</b> '+geom.properties.proprietar+'<br><b>Processo:</b> '+geom.properties.processo+'<br><b>Município:</b> '+geom.properties.municipio+'<br><b>Gleba:</b> '+geom.properties.gleba+'<br><b>Imóvel:</b> '+geom.properties.imovel+'<br><b>Assunto:</b> '+geom.properties.assunto+'<br><b>Situação:</b> '+geom.properties.situacao+'</p>');
            }
        });

        groupLay_cadDigProp.addLayer(cadDigProp1);

        // femarh_cad_dig_propriedades

        var cadDigProp112 = document.getElementById("teste62");
        if(cadDigProp112.style.display === "block"){
            cadDigPropHtml = '<img src="imagens/zee/retangulo-arredondado-f57a7a.png" style="max-width:20px;max-height:20px;"> Cadastro Digital de Propriedades ('+data.totalFeatures+')';
            cadDigProp112.innerHTML += cadDigPropHtml;
        }else{
            cadDigProp112.innerHTML = "";
        }
    })



    if(map.hasLayer(groupLay_cadDigProp)){
        map.removeLayer(groupLay_cadDigProp);
    }
    else {
        map.addLayer(groupLay_cadDigProp);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
    legMostra();
}