
// geomorfologia_unidades_geomorfo

var groupLay_geoUndGeomorfo = L.layerGroup([]);

function geoUndGeomorfo1(el){

    groupLay_geoUndGeomorfo.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/geomorfologia_unidades_geomorfo.geojson", function(data) {  
        var geoUndGeomorfo = L.geoJSON(data, {
            style: function(geom) {
                switch (geom.properties.legenda) {
                    case 'Depressão Boa Vista - DBV': return {color: "#d1ff73"};
                    case 'Depressão Interplanáltica do Trombetas - DiT': return {color: "#dd1e2e"};
                    case 'Depressão Rio Branco-Rio Negro - DrBN': return {color: "#e9ffbe"};
                    case 'Patamar do Médio Uraricoera - PmU': return {color: "#e8beff"};
                    case 'Patamar do Norte de Roraima - PnR': return {color: "#c29ed7"};
                    case 'Patamar do Sul de Roraima - PsR': return {color: "#ffbee8"};
                    case 'Patamares Dissecados do Tacutu - PdT': return {color: "#267300"};
                    case 'Pediplano Rio Branco-Rio Negro - PrBN': return {color: "#70a800"};
                    case 'Planaltos Dissecados Sul de Roraima - PdsR': return {color: "#7534e7"};
                    case 'Planaltos Tabulares de Roraima - PltR': return {color: "#732600"};
                    case 'Planícies e Terraços Fluviais - PTf': return {color: "#ffffbe"};
                    case 'Relevos Residuais - Rr': return {color: "#a900e6"};
                    case 'Relevos Residuais Anauá - RrA': return {color: "#ffbc03"};
                    case 'Relevos Residuais Mucajai - RrM': return {color: "#fff567"};
                    case 'Serra do Tepequém - RrM': return {color: "#ff7f7f"};
                    case 'Serranias Residuais - Sr': return {color: "#e60000"};
                    case 'Serras do Interflúvio - Sit': return {color: "#a80000"};
                    case 'null': return {color: "#969696"};
                }
              },
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Geomorfológia</b></h6><p><b>Unidade Geomorfológica:</b> '+geom.properties.uni_geomor+'<br><b>Sigla:</b> '+geom.properties.sigla+'</p>');
            }
        });

        groupLay_geoUndGeomorfo.addLayer(geoUndGeomorfo);
    })

    if(map.hasLayer(groupLay_geoUndGeomorfo)){
        map.removeLayer(groupLay_geoUndGeomorfo);
    }
    else {
        map.addLayer(groupLay_geoUndGeomorfo);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}