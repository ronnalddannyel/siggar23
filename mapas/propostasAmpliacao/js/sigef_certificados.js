
// sigef_certificados

var groupLay_sigefCert = L.layerGroup([]);

function sigefCert(el){

    groupLay_sigefCert.clearLayers();
    $.getJSON(UrlFemarh+"/siggarr/mapas/propostasAmpliacao/sigef_certificados.geojson", function(data) {  
        var sigefCert1 = new L.geoJson(data, {
            color: "#835acb",
            weight: "2",
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Sigef Certificados</b></h6><p><b>Código Parcela:</b> '+geom.properties.parcela_co+'<br><b>Código RT:</b> '+geom.properties.rt+'<br><b>ART:</b> '+geom.properties.art+'<br><b>Situação:</b> '+geom.properties.situacao_i+'<br><b>Código Imóvel:</b> '+geom.properties.codigo_imo+'<br><b>Data de Submissão:</b> '+geom.properties.data_submi+'<br><b>Data de Aprovação:</b> '+geom.properties.data_aprov+'<br><b>Status:</b> '+geom.properties.status+'<br><b>Área (ha):</b> '+geom.properties.area_hecta.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.<br><b>Nome da Área:</b> '+geom.properties.nome_area+'<br><b>Detentor:</b> '+geom.properties.detentor_n+'<br><b>Natureza:</b> '+geom.properties.natureza+'<br><b>Código Registro:</b> '+geom.properties.registro_c+'<br><b>Matrícula Registro:</b> '+geom.properties.registro_m+'<br><b>Data do Registro:</b> '+geom.properties.registro_d+'<br><b>Nome do Registro:</b> '+geom.properties.registro_n+'<br><b>Código Município:</b> '+geom.properties.municipio_+'<br><b>Código UF:</b> '+geom.properties.uf_id+'</p>');
            }
        });

        groupLay_sigefCert.addLayer(sigefCert1);

        // sigef_certificados

        var sigefCert112 = document.getElementById("teste57");
        if(sigefCert112.style.display === "block"){
            sigefCertHtml = '<img src="imagens/zee/retangulo-arredondado-835acb.png" style="max-width:20px;max-height:20px;"> Sigef Certificados ('+data.totalFeatures+')';
            sigefCert112.innerHTML += sigefCertHtml;
        }else{
            sigefCert112.innerHTML = "";
        }
    })



    if(map.hasLayer(groupLay_sigefCert)){
        map.removeLayer(groupLay_sigefCert);
    }
    else {
        map.addLayer(groupLay_sigefCert);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
    legMostra();
}