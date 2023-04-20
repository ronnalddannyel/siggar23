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
            map.removeLayer(planet);
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
            map.removeLayer(planet);
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
            map.removeLayer(planet);
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
            map.removeLayer(planet);
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
            map.removeLayer(planet);
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
            map.removeLayer(planet);
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
            map.removeLayer(planet);
          }
        }
        
        var planet = L.tileLayer(
        'https://tileserver-pf.sccon.com.br/sccon/basemaps/tiles/1.0.0/nome_mosaico/planet/{z}/{x}/{y}.png?token=07846b28-de18-11ed-a82e-f766f6d45dcf',
        {});

        function plan(){
          if(!map.hasLayer(planet)){
            map.addLayer(planet);
            map.removeLayer(basemap);
            map.removeLayer(satelite);
            map.removeLayer(NatGeo);
            map.removeLayer(googleSat);
            map.removeLayer(googleStreets);
            map.removeLayer(googleHybrid);
            map.removeLayer(googleTerrain);
          }
        }
        