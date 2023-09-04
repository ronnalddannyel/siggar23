/*var groupLayRaster = L.layerGroup([]);

function raste(){
  groupLayRaster.clearLayers();
      // Load kml file

  fetch('../raster1.kml')
  .then(res => res.text())
  .then(kmltext => {
      // Create new kml overlay
      const parser = new DOMParser();
      const kml = parser.parseFromString(kmltext, 'text/xml');
      const track = new L.KML(kml);
      groupLayRaster.addLayer(track);
      

      if(map.hasLayer(groupLayRaster)){
        map.removeLayer(groupLayRaster);
      }
      else {
        map.addLayer(groupLayRaster);
      }
  });
}

  var center = [3.823725, -59.809569];

    var imageUrl = UrlFemarh+'/siggarr/mapas/raster/raster3.png',
    imageBounds = [center, [1.94562, -61.944544]];

    var efef = L.imageOverlay(imageUrl, imageBounds);

*/

var groupLayRaster = L.layerGroup([]);
var cont = 0;

function raste(){    


if(cont === 0){
  console.log("errado");
  fetch(UrlFemarh+'/siggarr/Arquivos/232-058_2008-04-07.tif')
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
      groupLayRaster.addLayer(layer);
      cont++;
    });
  });
}

    // Focos de Queimadas

    if(map.hasLayer(groupLayRaster)){
      map.removeLayer(groupLayRaster);
    }
    else {
      map.addLayer(groupLayRaster);
    }
    
    
  }