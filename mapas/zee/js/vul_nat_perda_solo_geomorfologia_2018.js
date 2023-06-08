
// vul_nat_perda_solo_geomorfologia_2018

var groupLay_vulNatPerdSoloGeomorfologia = L.layerGroup([]);

function vulNatPerdSoloGeomorfologia1(el){

    groupLay_vulNatPerdSoloGeomorfologia.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/vul_nat_perda_solo_geomorfologia_2018.geojson", function(data) {  
        var vulNatPerdSoloGeomorfologia = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Perda Solo - Geomorfologia (2018)</b></h6><p><b>Domínio:</b> '+geom.properties.domínios+'<br><b>Regime:</b> '+geom.properties.reg_geomor+'<br><b>Unidade:</b> '+geom.properties.uni_geomor+'<br><b>Modelado:</b> '+geom.properties.modelados+'<br><b>Sigla:</b> '+geom.properties.sigla+'<br><b>siglaugeom:</b> '+geom.properties.siglaugeom+'<br><b>reclass:</b> '+geom.properties.reclass+'<br><b>Área:</b> '+geom.properties.area_km.toLocaleString('pt-BR', {minimumFractionDigits: 2,maximumFractionDigits: 2})+' Km²<br><b>pixel:</b> '+geom.properties.pixel+'</p>');
            }
        });

        groupLay_vulNatPerdSoloGeomorfologia.addLayer(vulNatPerdSoloGeomorfologia);


        // Perda Solo - Geomorfologia "2018"

        var vulNatPerSoloGeom112 = document.getElementById("teste66");
        var vulNatPerSoloGeom12 = document.getElementById("vulNatPerSoloGeom");
        if(vulNatPerSoloGeom112.style.display === "block"){
            vulNatPerSoloGeomHtml = 'Perda Solo - Geomorfologia "2018" ('+data.totalFeatures+')';
            vulNatPerSoloGeom12.innerHTML += vulNatPerSoloGeomHtml;
        }else{
            vulNatPerSoloGeom12.innerHTML = "";
        }
    })
    

    if(map.hasLayer(groupLay_vulNatPerdSoloGeomorfologia)){
        map.removeLayer(groupLay_vulNatPerdSoloGeomorfologia);
    }
    else {
        map.addLayer(groupLay_vulNatPerdSoloGeomorfologia);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}