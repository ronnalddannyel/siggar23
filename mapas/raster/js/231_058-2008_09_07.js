var groupLayRaster5 = L.layerGroup([]);
cont1 = 0;
function raste5(){    

  if(cont1 === 0){

  fetch(UrlFemarh+'/siggarr/Arquivos/231_058-2008_09_07.tif')
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
      groupLayRaster5.addLayer(layer);
      cont1++;
    });
  });

  }
    // Focos de Queimadas

    if(map.hasLayer(groupLayRaster5)){
      map.removeLayer(groupLayRaster5);
    }
    else {
      map.addLayer(groupLayRaster5);
    }
    
    
  }