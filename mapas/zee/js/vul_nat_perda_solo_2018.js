
// vul_nat_perda_solo_2018


var groupLay_vulNatPerdaSolo = L.layerGroup([]);

function vulNatPerdaSolo1(el){

    groupLay_vulNatPerdaSolo.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/vul_nat_perda_solo_2018.geojson", function(data) {  
        var vulNatPerdaSolo = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Perda Solo (2018)</b></h6><p><b>Sigla:</b> '+geom.properties.sigla+'<br><b>Nome:</b> '+geom.properties.nome+'<br><b>Classificação:</b> '+geom.properties.classifica+'<br><b>reclass:</b> '+geom.properties.reclass+'<br><b>Área:</b> '+geom.properties.area_km2.toLocaleString('pt-BR', {minimumFractionDigits: 2,maximumFractionDigits: 2})+' Km²<br><b>pixel:</b> '+geom.properties.pixel+'</p>');
            }
        });

        groupLay_vulNatPerdaSolo.addLayer(vulNatPerdaSolo);


        // Perda Solo "2018"

        var vulNatPerSolo112 = document.getElementById("teste64");
        var vulNatPerSolo12 = document.getElementById("vulNatPerSolo");
        if(vulNatPerSolo112.style.display === "block"){
            vulNatPerSoloHtml = 'Perda Solo "2018" ('+data.totalFeatures+')';
            vulNatPerSolo12.innerHTML += vulNatPerSoloHtml;
        }else{
            vulNatPerSolo12.innerHTML = "";
        }
    })

    if(map.hasLayer(groupLay_vulNatPerdaSolo)){
        map.removeLayer(groupLay_vulNatPerdaSolo);
    }
    else {
        map.addLayer(groupLay_vulNatPerdaSolo);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}