        var basemap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {});

        function basm(){
          if(!map.hasLayer(basemap)){
            map.addLayer(basemap);
            map.removeLayer(satelite);
            map.removeLayer(NatGeo);
            map.removeLayer(googleSat);
            map.removeLayer(googleStreets);
            map.removeLayer(googleHybrid);
            map.removeLayer(googleTerrain);
            map.removeLayer(groupLayPlanet);
          }
        }

        var satelite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {});

        function sat(){
          if(!map.hasLayer(satelite)){
            map.addLayer(satelite);
            map.removeLayer(basemap);
            map.removeLayer(NatGeo);
            map.removeLayer(googleSat);
            map.removeLayer(googleStreets);
            map.removeLayer(googleHybrid);
            map.removeLayer(googleTerrain);
            map.removeLayer(groupLayPlanet);
          }
        }

        var NatGeo = L.tileLayer('http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {});

        function nGeo(){
          if(!map.hasLayer(NatGeo)){
            map.addLayer(NatGeo);
            map.removeLayer(basemap);
            map.removeLayer(satelite);
            map.removeLayer(googleSat);
            map.removeLayer(googleStreets);
            map.removeLayer(googleHybrid);
            map.removeLayer(googleTerrain);
            map.removeLayer(groupLayPlanet);
          }
        }

        var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
          subdomains:['mt0','mt1','mt2','mt3']
        });

        function gSat(){
          if(!map.hasLayer(googleSat)){
            map.addLayer(googleSat);
            map.removeLayer(basemap);
            map.removeLayer(satelite);
            map.removeLayer(NatGeo);
            map.removeLayer(googleStreets);
            map.removeLayer(googleHybrid);
            map.removeLayer(googleTerrain);
            map.removeLayer(groupLayPlanet);
          }
        }

        var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
            subdomains:['mt0','mt1','mt2','mt3']
        });

        function gStr(){
          if(!map.hasLayer(googleStreets)){
            map.addLayer(googleStreets);
            map.removeLayer(basemap);
            map.removeLayer(satelite);
            map.removeLayer(NatGeo);
            map.removeLayer(googleSat);
            map.removeLayer(googleHybrid);
            map.removeLayer(googleTerrain);
            map.removeLayer(groupLayPlanet);
          }
        }        

        var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
            subdomains:['mt0','mt1','mt2','mt3']
        });

        function gHyb(){
          if(!map.hasLayer(googleHybrid)){
            map.addLayer(googleHybrid);
            map.removeLayer(basemap);
            map.removeLayer(satelite);
            map.removeLayer(NatGeo);
            map.removeLayer(googleSat);
            map.removeLayer(googleStreets);
            map.removeLayer(googleTerrain);
            map.removeLayer(groupLayPlanet);
          }
        }        

        var googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
            subdomains:['mt0','mt1','mt2','mt3']
        });

        function gTerr(){
          if(!map.hasLayer(googleTerrain)){
            map.addLayer(googleTerrain);
            map.removeLayer(basemap);
            map.removeLayer(satelite);
            map.removeLayer(NatGeo);
            map.removeLayer(googleSat);
            map.removeLayer(googleStreets);
            map.removeLayer(googleHybrid);
            map.removeLayer(groupLayPlanet);
          }
        }
        
        var groupLayPlanet = L.layerGroup([]);
        
        function plan(ano){
          groupLayPlanet.clearLayers();
          
          var planet = L.tileLayer(
            'https://tiles.planet.com/basemaps/v1/planet-tiles/global_monthly_'+ano+'_mosaic/gmap/{z}/{x}/{y}.png?api_key=PLAKece4ee1e3a0b4cd196b3c31596fea257',
            {
              id: 'global_monthly',
            });

            groupLayPlanet.addLayer(planet);

          if(!map.hasLayer(groupLayPlanet)){
            map.addLayer(groupLayPlanet);
            map.removeLayer(basemap);
            map.removeLayer(satelite);
            map.removeLayer(NatGeo);
            map.removeLayer(googleSat);
            map.removeLayer(googleStreets);
            map.removeLayer(googleHybrid);
            map.removeLayer(googleTerrain);
          }
        }
        