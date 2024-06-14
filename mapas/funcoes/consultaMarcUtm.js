var groupLayUtm = L.layerGroup([]);

function addUTMToMap() {
  // Obter valores dos inputs
  const utmX = parseFloat(document.getElementById('utmX').value);
  const utmY = parseFloat(document.getElementById('utmY').value);
  const zone = document.getElementById('zone').value.trim().toUpperCase();

  // Verificar se os valores são válidos
  if (isNaN(utmX) || isNaN(utmY) || !['20N', '21N', '20S'].includes(zone)) {
      alert('Entrada inválida');
      return;
  }

  // Definir as projeções
  proj4.defs([
      ['EPSG:4326', '+proj=longlat +datum=WGS84 +no_defs'], // Coordenadas geográficas
      ['EPSG:32620', '+proj=utm +zone=20 +datum=WGS84 +units=m +no_defs +north'], // UTM zona 20N
      ['EPSG:32621', '+proj=utm +zone=21 +datum=WGS84 +units=m +no_defs +north'], // UTM zona 21N
      ['EPSG:32720', '+proj=utm +zone=20 +datum=WGS84 +units=m +no_defs +south']  // UTM zona 20S
  ]);

  // Determinar a zona UTM baseada na entrada
  const utmZone = `EPSG:32${zone === '20S' ? 7 : 6}${zone.slice(0, -1)}`;

  // Converter coordenadas UTM para lat/long
  const latLong = proj4(utmZone, 'EPSG:4326', [utmX, utmY]);

  // Adicionar um marcador no mapa
  var marker = L.marker([latLong[1], latLong[0]])
      .bindPopup(`Coordenadas: ${latLong[1].toFixed(6)}, ${latLong[0].toFixed(6)}`)
      .openPopup();

  groupLayUtm.addLayer(marker);
  map.addLayer(groupLayUtm);

  // Centralizar o mapa nas coordenadas convertidas
  map.setView([latLong[1], latLong[0]], 12);
}

function removerTemaUtm(){
groupLayUtm.clearLayers();


map.removeLayer(groupLayUtm);
document.getElementById('utmX').value = '';
document.getElementById('utmY').value = '';
}