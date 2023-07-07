
// icmbio_esec_maraca_ proposta_ampliacao

var groupLay_icmbioEsec = L.layerGroup([]);

function icmbioEsec(el){

    groupLay_icmbioEsec.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/propostasAmpliacao/icmbio_esec_maraca_ proposta_ampliacao.geojson", function(data) {  
        var icmbioEsec1 = new L.geoJson(data, {
            color: "black",
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>ESEC Maracá - Proposta Ampliação</b></h6><p><b>Código Unidade de Conservação:</b> '+geom.properties.cod_uc+'<br><b>Categoria:</b> '+geom.properties.categoria+'<br><b>Nome:</b> '+geom.properties.nome_1+'<br><b>Bioma:</b> '+geom.properties.bioma_1+'<br><b>UF:</b> '+geom.properties.uf_1+'<br><b>Área (ha):</b> '+geom.properties.hectares.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.<br><b>Processo:</b> '+geom.properties.processo+'<br><b>Território:</b> '+geom.properties.territorio+'<br><b>Etapa:</b> '+geom.properties.etapa+'</p>');
            }
        });

        groupLay_icmbioEsec.addLayer(icmbioEsec1);

        // icmbio_esec_maraca_ proposta_ampliacao

        var icmbioEsec112 = document.getElementById("teste60");
        if(icmbioEsec112.style.display === "block"){
            icmbioEsecHtml = 'ESEC Maracá - Proposta Ampliação ('+data.totalFeatures+')';
            icmbioEsec112.innerHTML += icmbioEsecHtml;
        }else{
            icmbioEsec112.innerHTML = "";
        }
    })



    if(map.hasLayer(groupLay_icmbioEsec)){
        map.removeLayer(groupLay_icmbioEsec);
    }
    else {
        map.addLayer(groupLay_icmbioEsec);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}