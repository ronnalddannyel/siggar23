var groupLayRaster8 = L.layerGroup([]);
cont8 = 0;
function raste8(){    

  if(cont8 === 0){

  fetch(UrlFemarh+'/siggarr/Arquivos/231-059_2008-08-06.tif')
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
      groupLayRaster8.addLayer(layer);
      cont8++;
    });
  });

  }
    // Focos de Queimadas

    if(map.hasLayer(groupLayRaster8)){
      map.removeLayer(groupLayRaster8);
    }
    else {
      map.addLayer(groupLayRaster8);
    }
    
    
  }