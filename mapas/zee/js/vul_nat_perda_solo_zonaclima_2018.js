

// vul_nat_perda_solo_zonaclima_2018

var groupLay_vulNatPerdSoloZonaclima = L.layerGroup([]);

function vulNatPerdSoloZonaclima1(el){

    groupLay_vulNatPerdSoloZonaclima.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/vul_nat_perda_solo_zonaclima_2018.geojson", function(data) {  
        var vulNatPerdSoloZonaclima = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Perda Solo - Zona Climática (2018)</b></h6><p><b>Zona:</b> '+geom.properties.zlevel+'<br><b>Índice:</b> '+geom.properties.zc+'<br><b>Zona Climática:</b> '+geom.properties.zclima+'<br><b>Tipo:</b> '+geom.properties.tipos+'<br><b>Descrição:</b> '+geom.properties.resumo+'<br><b>reclass:</b> '+geom.properties.reclass+'<br><b>Área:</b> '+geom.properties.area_km.toLocaleString('pt-BR', {minimumFractionDigits: 2,maximumFractionDigits: 2})+' Km²<br><b>pixel:</b> '+geom.properties.pixel+'</p>');
            }
        });

        groupLay_vulNatPerdSoloZonaclima.addLayer(vulNatPerdSoloZonaclima);


        // Perda Solo - Zona Climática "2018"

        var vulNatPerSoloZona112 = document.getElementById("teste68");
        var vulNatPerSoloZona12 = document.getElementById("vulNatPerSoloZona");
        if(vulNatPerSoloZona112.style.display === "block"){
            vulNatPerSoloZonaHtml = 'Perda Solo - Zona Climática "2018" ('+data.totalFeatures+')';
            vulNatPerSoloZona12.innerHTML += vulNatPerSoloZonaHtml;
        }else{
            vulNatPerSoloZona12.innerHTML = "";
        }
    })



    if(map.hasLayer(groupLay_vulNatPerdSoloZonaclima)){
        map.removeLayer(groupLay_vulNatPerdSoloZonaclima);
    }
    else {
        map.addLayer(groupLay_vulNatPerdSoloZonaclima);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}
