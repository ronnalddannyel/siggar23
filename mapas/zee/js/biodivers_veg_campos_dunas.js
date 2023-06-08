
// biodivers_veg_campos_dunas

var groupLay_bioDivVegCampDunas = L.layerGroup([]);

function bioDivVegCampDunas1(el){

    groupLay_bioDivVegCampDunas.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/biodivers_veg_campos_dunas.geojson", function(data) {  
        var bioDivVegCampDunas = new L.geoJson(data, {
            color: '#b35a2b',
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Vegetação (Campos/Dunas)</b></h6><p><b>Área:</b> '+geom.properties.area.toLocaleString('pt-BR', {minimumFractionDigits: 2,maximumFractionDigits: 2})+' Km²</p>');
            }
        });

        groupLay_bioDivVegCampDunas.addLayer(bioDivVegCampDunas);


        // Vegetação (Campos/Dunas)

        var vegCampDunas12 = document.getElementById("teste46");
        if(vegCampDunas12.style.display === "block"){
            vegCampDunasHtml = '<img src="imagens/zee/retangulo-arredondado-b35a2b.png" style="max-width:20px;max-height:20px;"> Vegetação (Campos/Dunas) ('+data.totalFeatures+')';
            vegCampDunas12.innerHTML += vegCampDunasHtml;
        }else{
            vegCampDunas12.innerHTML = "";
        }
    })


    

    if(map.hasLayer(groupLay_bioDivVegCampDunas)){
        map.removeLayer(groupLay_bioDivVegCampDunas);
    }
    else {
        map.addLayer(groupLay_bioDivVegCampDunas);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}