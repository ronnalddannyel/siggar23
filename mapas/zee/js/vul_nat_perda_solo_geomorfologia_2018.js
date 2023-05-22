
// vul_nat_perda_solo_geomorfologia_2018

function vulNatPerdSoloGeomorfologia1(el){

    var vulNatPerdSoloGeomorfologia = L.geoJSON(vulNatPerdSoloGeomorfologia, {
        onEachFeature: function (geom, layer) {
            layer.bindPopup('<h6><b>vul_nat_perda_solo_geomorfologia_2018</b></h6><p><b>domínios:</b> '+geom.properties.domínios+'<br><b>reg_geomor:</b> '+geom.properties.reg_geomor+'<br><b>uni_geomor:</b> '+geom.properties.uni_geomor+'<br><b>modelados:</b> '+geom.properties.modelados+'<br><b>sigla:</b> '+geom.properties.sigla+'<br><b>siglaugeom:</b> '+geom.properties.siglaugeom+'<br><b>reclass:</b> '+geom.properties.reclass+'<br><b>area_km:</b> '+geom.properties.area_km+'<br><b>pixel:</b> '+geom.properties.pixel+'</p>');
        }
    });
    
    $.ajax({
        dataType: "json",
        url: UrlFemarh+"siggarr1/siggar23/mapas/zee/vul_nat_perda_solo_geomorfologia_2018.geojson",
        success: function(data) {
            $(data.features).each(function(key, data) {
                vulNatPerdSoloGeomorfologia.addData(data);
            });
        }
        }).error(function() {});

    if(map.hasLayer(vulNatPerdSoloGeomorfologia)){
        map.removeLayer(vulNatPerdSoloGeomorfologia);
    }
    else {
        map.addLayer(vulNatPerdSoloGeomorfologia);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}