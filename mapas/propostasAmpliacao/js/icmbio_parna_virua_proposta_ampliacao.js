
// icmbio_parna_virua_proposta_ampliacao

var groupLay_icmbioParna = L.layerGroup([]);

function icmbioParna(el){

    groupLay_icmbioParna.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/propostasAmpliacao/icmbio_parna_virua_proposta_ampliacao.geojson", function(data) {  
        var icmbioParna1 = new L.geoJson(data, {
            color: "black",
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>PARNA Viruá - Proposta Ampliação</b></h6><p><b>Nome:</b> '+geom.properties.nome+'<br><b>Ano de Criação:</b> '+geom.properties.anocriacao+'<br><b>Sigla:</b> '+geom.properties.sigla+'<br><b>Área (ha):</b> '+geom.properties.areaha.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.<br><b>Ato Legal:</b> '+geom.properties.atolegal+'<br><b>Administração:</b> '+geom.properties.administra+'<br><b>UF:</b> '+geom.properties.uf+'<br><b>Município:</b> '+geom.properties.municipios+'<br><b>Bioma:</b> '+geom.properties.biomaibge+'</p>');
            }
        });

        groupLay_icmbioParna.addLayer(icmbioParna1);

        // icmbio_parna_virua_proposta_ampliacao

        var icmbioParna112 = document.getElementById("teste62");
        if(icmbioParna112.style.display === "block"){
            icmbioParnaHtml = 'PARNA Viruá - Proposta Ampliação ('+data.totalFeatures+')';
            icmbioParna112.innerHTML += icmbioParnaHtml;
        }else{
            icmbioParna112.innerHTML = "";
        }
    })



    if(map.hasLayer(groupLay_icmbioParna)){
        map.removeLayer(groupLay_icmbioParna);
    }
    else {
        map.addLayer(groupLay_icmbioParna);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}