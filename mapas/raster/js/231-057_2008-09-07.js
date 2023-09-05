var groupLayRaster6 = L.layerGroup([]);
cont6 = 0;
function raste6(){    

  if(cont6 === 0){

  fetch(UrlFemarh+'/siggarr/Arquivos/231-057_2008-09-07.tif')
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
      groupLayRaster6.addLayer(layer);
      cont6++;
    });
  });

  }
    // Focos de Queimadas

    if(map.hasLayer(groupLayRaster6)){
      map.removeLayer(groupLayRaster6);
    }
    else {
      map.addLayer(groupLayRaster6);
    }
    
    
  }