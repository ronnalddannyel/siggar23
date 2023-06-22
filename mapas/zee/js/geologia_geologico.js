
// geologia_geologico

var groupLay_geoGeolog = L.layerGroup([]);

function geoGeolog1(el){

    
    groupLay_geoGeolog.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/geologia_geologico.geojson", function(data) {  

        var geoGeolog = L.geoJSON(data, {
            style: function(geom) {
                switch (geom.properties.rotulo) {
                    case 'Q12ab': return {color: "#ffff00"};
                    case 'Q12aa': return {color: "#e6e600"};
                    case 'Q2a': return {color: "#ffffff"};
                    case 'Q1i': return {color: "#ffd37f"};
                    case 'Nbv': return {color: "#f5f57a"};
                    case 'K1api': return {color: "#0084a8"};
                    case 'K2st': return {color: "#89cd66"};
                    case 'K2ta': return {color: "#a3ff73"};
                    case 'J3K1ap': return {color: "#00734c"};
                    case 'MP12ss': return {color: "#73ffdf"};
                    case 'MP1su': return {color: "#cd6666"};
                    case 'MP1r': return {color: "#aaff00"};
                    case 'MP1au': return {color: "#894444"};
                    case 'MP1mu': return {color: "#ff7f7f"};
                    case 'MP1to': return {color: "#a80000"};
                    case 'PP4av': return {color: "#00204d"};
                    case 'PP34se': return {color: "#4c7300"};
                    case 'MP4mi': return {color: "#4cc100"};
                    case 'PP34ma': return {color: "#e60000"};
                    case 'PP3ir': return {color: "#ffaa00"};
                    case 'PP3ja': return {color: "#d7b09e"};
                    case 'PP34rr': return {color: "#b4d79e"};
                    case 'PP3ia': return {color: "#aa66cd"};
                    case 'PP3sa': return {color: "#ff0000"};
                    case 'PP3sp': return {color: "#894465"};
                    case 'PP3ab': return {color: "#cd6699"};
                    case 'PP3pa': return {color: "#897044"};
                    case 'PP3ar': return {color: "#e64c00"};
                    case 'PP3su': return {color: "#e69800"};
                    case 'PP3ci': return {color: "#ffff73"};
                    case 'PP3ru1': return {color: "#d69dbc"};
                    case 'PP3ru2e': return {color: "#df73ff"};
                    case 'PP3er': return {color: "#f57a7a"};
                    case 'PP3pp': return {color: "#e600a9"};
                    case 'PP3cx': return {color: "#cdaa66"};
                    case 'PP3mp': return {color: "#a80084"};
                    case 'PP3ca': return {color: "#895a44"};
                    case 'PP3mu': return {color: "#996238"};
                    case 'PP3uu': return {color: "#9c9c9c"};
                    case 'PP23ur': return {color: "#ffbee8"};
                    case 'PP23tr': return {color: "#a83800"};
                    case 'PP3an': return {color: "#e8beff"};
                    case 'rps': return {color: "#e0e0e0"};
                }
              },
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Geológico</b></h6><p><b>Sigla:</b> '+geom.properties.rotulo+'<br><b>Nome:</b> '+geom.properties.nomeext+'</p>');
            }
        });

        groupLay_geoGeolog.addLayer(geoGeolog);


        // Geológico

        var geoGeo112 = document.getElementById("teste54");
        var geoGeo12 = document.getElementById("geoGeo");
        if(geoGeo112.style.display === "block"){
            geoGeoHtml = 'Geológico ('+data.totalFeatures+')';
            geoGeo12.innerHTML += geoGeoHtml;
        }else{
            geoGeo12.innerHTML = "";
        }
    })

    if(map.hasLayer(groupLay_geoGeolog)){
        map.removeLayer(groupLay_geoGeolog);
    }
    else {
        map.addLayer(groupLay_geoGeolog);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}