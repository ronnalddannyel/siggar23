var groupLayRaster4 = L.layerGroup([]);
cont4 = 0;
function raste4(){    

  if(cont4 === 0){

    fetch(UrlFemarh+'/siggarr/Arquivos/232-060_2008-04-07.tif')
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
        groupLayRaster4.addLayer(layer);
        cont4++;
      });
    });
  
  }

    // Focos de Queimadas

    if(map.hasLayer(groupLayRaster4)){
      map.removeLayer(groupLayRaster4);
    }
    else {
      map.addLayer(groupLayRaster4);
    }
    
    
  }