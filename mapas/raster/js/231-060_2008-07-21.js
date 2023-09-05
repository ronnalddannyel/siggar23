var groupLayRaster3 = L.layerGroup([]);
cont2 = 0;
function raste3(){    


  if(cont2 === 0){

    fetch(UrlFemarh+'/siggarr/Arquivos/231-060_2008-07-21.tif')
    .then(function (response) {
      return response.arrayBuffer();
    })
    .then(function (arrayBuffer) {
      parseGeoraster(arrayBuffer).then(function (georaster) {
        var layer = new GeoRasterLayer({
          georaster: georaster,
          resolution: 200,
          pixelValuesToColorFn: values => values[0] === 0 ? null : `rgba(${values[0]},${values[1]},${values[2]})`
        });
        groupLayRaster3.addLayer(layer);
        cont2++
      });
    });

  }

    // Focos de Queimadas

    if(map.hasLayer(groupLayRaster3)){
      map.removeLayer(groupLayRaster3);
    }
    else {
      map.addLayer(groupLayRaster3);
    }
    
    
  }