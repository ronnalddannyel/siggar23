var groupLayRaster2 = L.layerGroup([]);
cont3 = 0;
function raste2(){    


  if(cont3 === 0){

    fetch(UrlFemarh+'/siggarr/Arquivos/232-059_2008-04-07.tif')
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
        groupLayRaster2.addLayer(layer);
        cont3++;
      });
    });
  
  }

    // Focos de Queimadas

    if(map.hasLayer(groupLayRaster2)){
      map.removeLayer(groupLayRaster2);
    }
    else {
      map.addLayer(groupLayRaster2);
    }
    
    
  }