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
}*/

var groupLayRaster = L.layerGroup([]);

function raste(){
  groupLayRaster.clearLayers();

  var center = [3.823725, -59.809569];

    var imageUrl = UrlFemarh+'/siggarr/mapas/raster/raster3.png',
    imageBounds = [center, [1.94562, -61.944544]];

    var efef = L.imageOverlay(imageUrl, imageBounds);

    groupLayRaster.addLayer(efef);

    // Focos de Queimadas

    if(map.hasLayer(groupLayRaster)){
      map.removeLayer(groupLayRaster);
    }
    else {
      map.addLayer(groupLayRaster);
    }
    
    
  }