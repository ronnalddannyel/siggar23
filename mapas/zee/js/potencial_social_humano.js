
// potencial_social_humano

var potSocHumano = L.geoJSON(potSocHumano, {
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>potencial_social_humano</b></h6><p><b>cd_geocodi:</b> '+geom.properties.cd_geocodi+'<br><b>tipo:</b> '+geom.properties.tipo+'<br><b>nm_municip:</b> '+geom.properties.nm_municip+'<br><b>nm_micro:</b> '+geom.properties.nm_micro+'<br><b>nm_meso:</b> '+geom.properties.nm_meso+'<br><b>indice_med:</b> '+geom.properties.indice_med+'<br><b>atendiment:</b> '+geom.properties.atendiment+'<br><b>densidade_:</b> '+geom.properties.densidade_+'<br><b>esgoto_san:</b> '+geom.properties.esgoto_san+'<br><b>ideb_rr_mu:</b> '+geom.properties.ideb_rr_mu+'<br><b>nivel_de_u:</b> '+geom.properties.nivel_de_u+'<br><b>oferta_de_:</b> '+geom.properties.oferta_de_+'<br><b>pessoas_al:</b> '+geom.properties.pessoas_al+'<br><b>renda_domi:</b> '+geom.properties.renda_domi+'</p>');
    }
});

$.ajax({
    dataType: "json",
    url: UrlFemarh+"siggarr1/siggar23/mapas/zee/potencial_social_humano.geojson",
    success: function(data) {
        $(data.features).each(function(key, data) {
            potSocHumano.addData(data);
        });
    }
    }).error(function() {});

function potSocHumano1(el){
    if(map.hasLayer(potSocHumano)){
        map.removeLayer(potSocHumano);
    }
    else {
        map.addLayer(potSocHumano);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}