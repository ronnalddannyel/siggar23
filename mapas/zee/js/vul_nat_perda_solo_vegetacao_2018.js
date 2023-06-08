
// vul_nat_perda_solo_vegetacao_2018

var groupLay_vulNatPerdSoloVegetacao = L.layerGroup([]);

function vulNatPerdSoloVegetacao1(el){

    groupLay_vulNatPerdSoloVegetacao.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/vul_nat_perda_solo_vegetacao_2018.geojson", function(data) {  
        var vulNatPerdSoloVegetacao = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Perda Solo - Vegetação (2018)</b></h6><p><b>Classe:</b> '+geom.properties.classe+'<br><b>Tipo:</b> '+geom.properties.tipo+'<br><b>reclass:</b> '+geom.properties.reclass+'<br><b>Área:</b> '+geom.properties.area_km2.toLocaleString('pt-BR', {minimumFractionDigits: 2,maximumFractionDigits: 2})+' Km²<br><b>pixel:</b> '+geom.properties.pixel+'</p>');
            }
        });

        groupLay_vulNatPerdSoloVegetacao.addLayer(vulNatPerdSoloVegetacao);


        // Perda Solo - Vegetação "2018"

        var vulNatPerSoloVeg112 = document.getElementById("teste67");
        var vulNatPerSoloVeg12 = document.getElementById("vulNatPerSoloVeg");
        if(vulNatPerSoloVeg112.style.display === "block"){
            vulNatPerSoloVegHtml = 'Perda Solo - Vegetação "2018" ('+data.totalFeatures+')';
            vulNatPerSoloVeg12.innerHTML += vulNatPerSoloVegHtml;
        }else{
            vulNatPerSoloVeg12.innerHTML = "";
        }
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