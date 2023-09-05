var groupLayRaster9 = L.layerGroup([]);
cont9 = 0;
function raste9(){    

  if(cont9 === 0){

  fetch(UrlFemarh+'/siggarr/Arquivos/231-060_2008-08-06.tif')
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
      groupLayRaster9.addLayer(layer);
      cont9++;
    });
  });

  }
    // Focos de Queimadas

    if(map.hasLayer(groupLayRaster9)){
      map.removeLayer(groupLayRaster9);
    }
    else {
      map.addLayer(groupLayRaster9);
    }
    
    
  }