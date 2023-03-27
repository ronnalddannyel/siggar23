const input = document.querySelector('#arquivo');
var groupLay2 = L.layerGroup([]);


input.addEventListener('change', function(){
    const arquivo = this.files[0];
    const leitor = new FileReader();
    
    leitor.addEventListener('load', function (){
        groupLay2.clearLayers();
        var testando = leitor.result;
        var terf = JSON.parse(testando);
        var district_boundary = new L.geoJSON(terf, {
            color: "black",
            weight: "2",
          });
          groupLay2.addLayer(district_boundary);
          map.addLayer(groupLay2);
    });

    if(arquivo){
        leitor.readAsText(arquivo);
    }
});

function removerLayJson(){
    map.removeLayer(groupLay2);
    document.getElementById('arquivo').value = '';
  }




