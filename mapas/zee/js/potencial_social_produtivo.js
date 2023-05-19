
// potencial_social_produtivo

var potSocProdutivo = L.geoJSON(potSocProdutivo, {
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>potencial_social_produtivo</b></h6><p><b>cd_geocodi:</b> '+geom.properties.cd_geocodi+'<br><b>tipo:</b> '+geom.properties.tipo+'<br><b>cd_geocods:</b> '+geom.properties.cd_geocods+'<br><b>cd_geocodd:</b> '+geom.properties.cd_geocodd+'<br><b>nm_distrit:</b> '+geom.properties.nm_distrit+'<br><b>cd_geocodm:</b> '+geom.properties.cd_geocodm+'<br><b>nm_municip:</b> '+geom.properties.nm_municip+'<br><b>nm_micro:</b> '+geom.properties.nm_micro+'<br><b>nm_meso:</b> '+geom.properties.nm_meso+'<br><b>produt1:</b> '+geom.properties.produt1+'<br><b>produt2:</b> '+geom.properties.produt2+'<br><b>prod_graos:</b> '+geom.properties.prod_graos+'<br><b>pib_perc_m:</b> '+geom.properties.pib_perc_m+'<br><b>pib_munici:</b> '+geom.properties.pib_munici+'<br><b>consumo_en:</b> '+geom.properties.consumo_en+'<br><b>ener_rural:</b> '+geom.properties.ener_rural+'<br><b>ap_mineral:</b> '+geom.properties.ap_mineral+'<br><b>a_pecuaria:</b> '+geom.properties.a_pecuaria+'<br><b>din_indus:</b> '+geom.properties.din_indus+'<br><b>fi_atv_agr:</b> '+geom.properties.fi_atv_agr+'<br><b>est_vic_pa:</b> '+geom.properties.est_vic_pa+'<br><b>indice_med:</b> '+geom.properties.indice_med+'</p>');
    }
});

$.ajax({
    dataType: "json",
    url: UrlFemarh+"siggarr1/siggar23/mapas/zee/potencial_social_produtivo.geojson",
    success: function(data) {
        $(data.features).each(function(key, data) {
            potSocProdutivo.addData(data);
        });
    }
    }).error(function() {});

function potSocProdutivo1(el){
    if(map.hasLayer(potSocProdutivo)){
        map.removeLayer(potSocProdutivo);
    }
    else {
        map.addLayer(potSocProdutivo);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}