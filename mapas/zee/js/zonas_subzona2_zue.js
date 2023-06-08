
// zonas_subzona2_zue

var groupLay_zonasSubzonaZue = L.layerGroup([]);

function zonasSubzonaZue1(el){

    groupLay_zonasSubzonaZue.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/zonas_subzona2_zue.geojson", function(data) {  
        var zonasSubzonaZue = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>zonas_subzona2_zue</b></h6><p><b>Subzona:</b> '+geom.properties.layer+'<br><b>Nome:</b> '+geom.properties.nome+'</p>');
            }
        });

        groupLay_zonasSubzonaZue.addLayer(zonasSubzonaZue);


        // zonas_subzona2_zue

        var zonaSubZue112 = document.getElementById("teste74");
        var zonaSubZue12 = document.getElementById("zonaSubZue");
        if(zonaSubZue112.style.display === "block"){
            zonaSubZueHtml = 'zonas_subzona2_zue ('+data.totalFeatures+')';
            zonaSubZue12.innerHTML += zonaSubZueHtml;
        }else{
            zonaSubZue12.innerHTML = "";
        }
    })



    if(map.hasLayer(groupLay_zonasSubzonaZue)){
        map.removeLayer(groupLay_zonasSubzonaZue);
    }
    else {
        map.addLayer(groupLay_zonasSubzonaZue);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}