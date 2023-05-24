
// vul_nat_perda_solo_vegetacao_2018

var groupLay_vulNatPerdSoloVegetacao = L.layerGroup([]);

function vulNatPerdSoloVegetacao1(el){

    groupLay_vulNatPerdSoloVegetacao.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/vul_nat_perda_solo_vegetacao_2018.geojson", function(data) {  
        var vulNatPerdSoloVegetacao = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>vul_nat_perda_solo_vegetacao_2018</b></h6><p><b>classe:</b> '+geom.properties.classe+'<br><b>tipo:</b> '+geom.properties.tipo+'<br><b>reclass:</b> '+geom.properties.reclass+'<br><b>area_km2:</b> '+geom.properties.area_km2+'<br><b>pixel:</b> '+geom.properties.pixel+'</p>');
            }
        });

        groupLay_vulNatPerdSoloVegetacao.addLayer(vulNatPerdSoloVegetacao);
    })



    if(map.hasLayer(groupLay_vulNatPerdSoloVegetacao)){
        map.removeLayer(groupLay_vulNatPerdSoloVegetacao);
    }
    else {
        map.addLayer(groupLay_vulNatPerdSoloVegetacao);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}