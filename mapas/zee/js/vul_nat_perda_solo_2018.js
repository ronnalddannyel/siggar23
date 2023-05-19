
// vul_nat_perda_solo_2018

var vulNatPerdaSolo = L.geoJSON(vulNatPerdaSolo, {
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>vul_nat_perda_solo_2018</b></h6><p><b>sigla:</b> '+geom.properties.sigla+'<br><b>nome:</b> '+geom.properties.nome+'<br><b>classifica:</b> '+geom.properties.classifica+'<br><b>reclass:</b> '+geom.properties.reclass+'<br><b>area_km2:</b> '+geom.properties.area_km2+'<br><b>pixel:</b> '+geom.properties.pixel+'</p>');
    }
});

$.ajax({
    dataType: "json",
    url: UrlFemarh+"siggarr1/siggar23/mapas/zee/vul_nat_perda_solo_2018.geojson",
    success: function(data) {
        $(data.features).each(function(key, data) {
            vulNatPerdaSolo.addData(data);
        });
    }
    }).error(function() {});

function vulNatPerdaSolo1(el){
    if(map.hasLayer(vulNatPerdaSolo)){
        map.removeLayer(vulNatPerdaSolo);
    }
    else {
        map.addLayer(vulNatPerdaSolo);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}