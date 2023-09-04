var groupLayRaster1 = L.layerGroup([]);
cont1 = 0;
function raste1(){    

  if(cont1 === 0){

  fetch(UrlFemarh+'/siggarr/Arquivos/231-059_2008-07-21.tif')
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
      groupLayRaster1.addLayer(layer);
      cont1++;
    });
  });

  }
    // Focos de Queimadas

    if(map.hasLayer(groupLayRaster1)){
      map.removeLayer(groupLayRaster1);
    }
    else {
      map.addLayer(groupLayRaster1);
    }
    
    
  }