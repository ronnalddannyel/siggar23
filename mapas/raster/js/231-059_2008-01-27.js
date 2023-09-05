var groupLayRaster7 = L.layerGroup([]);
cont7 = 0;
function raste7(){    

  if(cont7 === 0){

  fetch(UrlFemarh+'/siggarr/Arquivos/231-059_2008-01-27.tif')
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
      groupLayRaster7.addLayer(layer);
      cont7++;
    });
  });

  }
    // Focos de Queimadas

    if(map.hasLayer(groupLayRaster7)){
      map.removeLayer(groupLayRaster7);
    }
    else {
      map.addLayer(groupLayRaster7);
    }
    
    
  }