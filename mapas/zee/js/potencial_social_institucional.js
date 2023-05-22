
// potencial_social_institucional

var potSocInstitucional = L.geoJSON(potSocInstitucional, {
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>potencial_social_institucional</b></h6><p><b>cd_geocodi:</b> '+geom.properties.cd_geocodi+'<br><b>tipo:</b> '+geom.properties.tipo+'<br><b>cd_geocods:</b> '+geom.properties.cd_geocods+'<br><b>cd_geocodd:</b> '+geom.properties.cd_geocodd+'<br><b>nm_distrit:</b> '+geom.properties.nm_distrit+'<br><b>cd_geocodm:</b> '+geom.properties.cd_geocodm+'<br><b>nm_municip:</b> '+geom.properties.nm_municip+'<br><b>nm_micro:</b> '+geom.properties.nm_micro+'<br><b>nm_meso:</b> '+geom.properties.nm_meso+'<br><b>par_pol_el:</b> '+geom.properties.par_pol_el+'<br><b>au_pol_adm:</b> '+geom.properties.au_pol_adm+'<br><b>n_con_soci:</b> '+geom.properties.n_con_soci+'<br><b>dissolvido:</b> '+geom.properties.dissolvido+'<br><b>dissolvi_1:</b> '+geom.properties.dissolvi_1+'<br><b>indice_are:</b> '+geom.properties.indice_are+'<br><b>potencial_:</b> '+geom.properties.potencial_+'</p>');
    }
});

$.ajax({
    dataType: "json",
    url: UrlFemarh+"siggarr1/siggar23/mapas/zee/potencial_social_institucional.geojson",
    success: function(data) {
        $(data.features).each(function(key, data) {
            potSocInstitucional.addData(data);
        });
    }
    }).error(function() {});

function potSocInstitucional1(el){
    if(map.hasLayer(potSocInstitucional)){
        map.removeLayer(potSocInstitucional);
    }
    else {
        map.addLayer(potSocInstitucional);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}