  // Adicionar camadas de sobreposição

  function sobreposicaoCar(){
    if(map.hasLayer(groupLayCar2)){
        map.removeLayer(groupLayCar2);
    }
    else {
        map.addLayer(groupLayCar2);
    }
  }