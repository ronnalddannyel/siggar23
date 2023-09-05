var groupLayRaster12 = L.layerGroup([]);
cont12 = 0;
function raste12(){    

  if(cont12 === 0){

  fetch(UrlFemarh+'/siggarr/Arquivos/233-057_2008-09-21.tif')
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
      groupLayRaster12.addLayer(layer);
      cont12++;
    });
  });

  }
    // Focos de Queimadas

    if(map.hasLayer(groupLayRaster12)){
      map.removeLayer(groupLayRaster12);
    }
    else {
      map.addLayer(groupLayRaster12);
    }
    
    
  }