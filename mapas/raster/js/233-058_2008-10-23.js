var groupLayRaster13 = L.layerGroup([]);
cont13 = 0;
function raste13(){    

  if(cont13 === 0){

  fetch(UrlFemarh+'/siggarr/Arquivos/233-058_2008-10-23.tif')
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
      groupLayRaster13.addLayer(layer);
      cont13++;
    });
  });

  }
    // Focos de Queimadas

    if(map.hasLayer(groupLayRaster13)){
      map.removeLayer(groupLayRaster13);
    }
    else {
      map.addLayer(groupLayRaster13);
    }
    
    
  }