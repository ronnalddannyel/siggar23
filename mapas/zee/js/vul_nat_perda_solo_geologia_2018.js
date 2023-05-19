
// vul_nat_perda_solo_geologia_2018

var vulNatPerdaSoloGeologia = L.geoJSON(vulNatPerdaSoloGeologia, {
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>vul_nat_perda_solo_geologia_2018</b></h6><p><b>rotulo:</b> '+geom.properties.rotulo+'<br><b>reclas:</b> '+geom.properties.reclas+'<br><b>area_km:</b> '+geom.properties.area_km+'<br><b>pixel:</b> '+geom.properties.pixel+'</p>');
    }
});

$.ajax({
    dataType: "json",
    url: UrlFemarh+"siggarr1/siggar23/mapas/zee/vul_nat_perda_solo_geologia_2018.geojson",
    success: function(data) {
        $(data.features).each(function(key, data) {
            vulNatPerdaSoloGeologia.addData(data);
        });
    }
    }).error(function() {});

function vulNatPerdaSoloGeologia1(el){
    if(map.hasLayer(vulNatPerdaSoloGeologia)){
        map.removeLayer(vulNatPerdaSoloGeologia);
    }
    else {
        map.addLayer(vulNatPerdaSoloGeologia);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}