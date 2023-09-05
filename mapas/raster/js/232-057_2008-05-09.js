var groupLayRaster10 = L.layerGroup([]);
cont10 = 0;
function raste10(){    

  if(cont10 === 0){

  fetch(UrlFemarh+'/siggarr/Arquivos/232-057_2008-05-09.tif')
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
      groupLayRaster10.addLayer(layer);
      cont10++;
    });
  });

  }
    // Focos de Queimadas

    if(map.hasLayer(groupLayRaster10)){
      map.removeLayer(groupLayRaster10);
    }
    else {
      map.addLayer(groupLayRaster10);
    }
    
    
  }