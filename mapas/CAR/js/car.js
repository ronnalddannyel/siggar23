
// CAR RR
var groupLay_car = L.layerGroup([]);

function car1(el){
    
    groupLay_car.clearLayers();
    $.getJSON(UrlFemarh+"/siggarr/mapas/CAR/car.geojson", function(data) {  
        var car = new L.geoJson(data, {
            color: '#e600a9',
            weight: "1",
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>CAR-RR</b></h6><p><b>Código Imovel:</b> '+geom.properties.cod_imovel+'<br><b>Status:</b> '+geom.properties.status_imo+'<br><b>Data de Criação:</b> '+geom.properties.dat_criaca+'<br><b>Área:</b> '+geom.properties.area.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.<br><b>Condição:</b> '+geom.properties.condicao+'<br><b>UF:</b> '+geom.properties.uf+'<br><b>Município:</b> '+geom.properties.municipio+'<br><b>Código Município:</b> '+geom.properties.cod_municipio_ibge+'<br><b>Módulo Fiscal:</b> '+geom.properties.m_fiscal+'<br><b>Tipo Imóvel:</b> '+geom.properties.tipo_imove+'</p>');
            }
        });

        groupLay_car.addLayer(car);

        // CAR-RR

        var car112 = document.getElementById("teste63");
        if(car112.style.display === "block"){
            carHtml = '<img src="imagens/zee/retangulo-arredondado-e600a9.png" style="max-width:20px;max-height:20px;"> CAR-RR ('+data.totalFeatures+')';
            car112.innerHTML += carHtml;
        }else{
            car112.innerHTML = "";
        }
    })



    if(map.hasLayer(groupLay_car)){
        map.removeLayer(groupLay_car);
    }
    else {
        map.addLayer(groupLay_car);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}