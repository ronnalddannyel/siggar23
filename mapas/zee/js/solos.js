
// solos

var groupLay_solos = L.layerGroup([]);

function solos1(el){

    groupLay_solos.clearLayers();
    $.getJSON(UrlFemarh+"/siggarr/mapas/zee/solos.geojson", function(data) {  
        var solos = L.geoJSON(data, {
            style: function(geom) {
                switch (geom.properties.nome) {
                    case 'ARGISSOLO AMARELO': return {color: "#fdf1f0"};
                    case 'ARGISSOLO VERMELHO': return {color: "#f0a59d"};
                    case 'ARGISSOLO VERMELHO-AMARELO': return {color: "#f9d2cd"};
                    case 'CAMBISSOLO HÁPLICO': return {color: "#d7c5a5"};
                    case 'ESPODOSSOLO': return {color: "#b6bec5"};
                    case 'ESPODOSSOLO FERRI-HUMILÚVICO': return {color: "#9aacbc"};
                    case 'ESPODOSSOLO HUMILÚVICO': return {color: "#9aacba"};
                    case 'GLEISSOLO': return {color: "#6ca3cd"};
                    case 'GLEISSOLO HÁPLICO': return {color: "#b6d8ee"};
                    case 'LATOSSOLO AMARELO': return {color: "#fef3af"};
                    case 'LATOSSOLO VERMELHO': return {color: "#f4b980"};
                    case 'LATOSSOLO VERMELHO-AMARELO': return {color: "#f7d1a6"};
                    case 'NEOSSOLO LITÓLICO': return {color: "#969595"};
                    case 'NEOSSOLO QUARTZARÊNICO': return {color: "#fffee3"};
                    case 'NITOSSOLO VERMELHO': return {color: "#d8ab92"};
                    case 'PLANOSSOLO HÁPLICO': return {color: "#b5d6ae"};
                    case 'PLANOSSOLO NÁTRICO': return {color: "#89cac7"};
                    case 'PLINTOSSOLO HÁPLICO': return {color: "#d6bac9"};
                    case 'PLINTOSSOLO PÉTRICO': return {color: "#ecaccb"};
                    case 'VERTISSOLO HIDROMÓRFICO': return {color: "#9eaa85"};
                }
            },
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Solos</b></h6><p><b>Sigla:</b> '+geom.properties.sigla+'<br><b>Nome:</b> '+geom.properties.nome+'<br><b>Classificação:</b> '+geom.properties.classifica+'<br><b>Área:</b> '+geom.properties.ha.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.<br><b>siglan1:</b> '+geom.properties.siglan1+'</p>');
            }
        });

        groupLay_solos.addLayer(solos);


        // Solos

        var solo112 = document.getElementById("teste53");
        var solo12 = document.getElementById("solo");
        if(solo112.style.display === "block"){
            soloHtml = 'Solos ('+data.totalFeatures+')';
            solo12.innerHTML += soloHtml;
        }else{
            solo12.innerHTML = "";
        }
    })

    if(map.hasLayer(groupLay_solos)){
        map.removeLayer(groupLay_solos);
    }
    else {
        map.addLayer(groupLay_solos);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}