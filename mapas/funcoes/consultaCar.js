
// Função - Adicionar Polígono (CAR)


var groupLayCar = L.layerGroup([]);
        
        function car2(){

        groupLayCar.clearLayers();

        var car2 = document.getElementById('car').value;
        $.getJSON(UrlFemarh+"/siggarr/mapas/CAR/car.geojson", function(data) { 
            console.log(data); 
            var car = new L.geoJson(data, {
                color: "red",
                fill: false,
                weight: "3",
                filter: function (features) {
                    if(features.properties.cod_imovel !== null){
                        var car1 = features.properties.cod_imovel;
                    }
                    if (car1 === car2) {
                      return true
                  }
                },
                onEachFeature: function (geom, layer) {
                    layer.bindPopup('<h6><b>CAR-RR</b></h6><p><b>Código Imovel:</b> '+geom.properties.cod_imovel+'<br><b>Status:</b> '+geom.properties.status_imo+'<br><b>Data de Criação:</b> '+geom.properties.dat_criaca+'<br><b>Área:</b> '+geom.properties.area.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.<br><b>Condição:</b> '+geom.properties.condicao+'<br><b>UF:</b> '+geom.properties.uf+'<br><b>Município:</b> '+geom.properties.municipio+'<br><b>Código Município:</b> '+geom.properties.cod_munici+'<br><b>Módulo Fiscal:</b> '+geom.properties.m_fiscal+'<br><b>Tipo Imóvel:</b> '+geom.properties.tipo_imove+'</p>');
                }
            });


            map.fitBounds(car.getBounds());
            groupLayCar.addLayer(car);
            map.addLayer(groupLayCar);
    
        })


      }


      // Função - Remover Polígono (Imóvel)

      function removeCar(){
        map.removeLayer(groupLayCar);
        document.getElementById('car').value = '';
        map.setView([latit, long], zm);
      } 