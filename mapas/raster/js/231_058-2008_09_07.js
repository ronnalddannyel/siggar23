var groupLayRaster5 = L.layerGroup([]);
cont5 = 0;
function raste5(){    

  if(cont5 === 0){

  fetch(UrlFemarh+'/siggarr/Arquivos/231-058_2008-09-07.tif')
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
      cont5++;
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