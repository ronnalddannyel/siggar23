
function test2(){
    let alvo = document.getElementById("aaa");
    alvo.innerText = "";

    let alvo1 = document.getElementById("text1");
    alvo1.innerText = "";

    var element1 = document.querySelector(".text");
    var newHtml1 = '<h1 class="modal-title fs-5" id="staticBackdropLabel">Monitoramento</h1>';
    element1.innerHTML += newHtml1;

    cont = 1000;
    var i = 0;
    var monitoram = document.getElementById('mom').value;
    console.log(monitoram);
    while(cont != i){
      var teste2 = monitoramento.features[i].id;
      console.log(teste2);

      if(monitoram == teste2){
        if(monitoramento.features[i].properties.fk_tip_mon == 1){
          var MonitSit = '<img src="imagens/quadrado-verde3.png" style="max-width:20px;max-height:20px;"> CSSA - Corte seletivo executado sem autorização';
        }else if(monitoramento.features[i].properties.fk_tip_mon == 2){
          var MonitSit = '<img src="imagens/quadrado-verde.png" style="max-width:20px;max-height:20px;"> CRSA - Corte Raso Executado sem Autorização';
        }else if(monitoramento.features[i].properties.fk_tip_mon == 3){
          var MonitSit = '<img src="imagens/quadrado-marrom.png" style="max-width:20px;max-height:20px;"> SVSA - Supressão Vegetal Executada sem Autorização';
        }else if(monitoramento.features[i].properties.fk_tip_mon == 4){
          var MonitSit = '<img src="imagens/quadrado-roxo.png" style="max-width:20px;max-height:20px;"> CSAUV - Corte Seletivo Executado na Área de Uso Alternativo do Solo na Vingência da Autorização';
        }else if(monitoramento.features[i].properties.fk_tip_mon == 5){
          var MonitSit = '<img src="imagens/quadrado-amarelo1.png" style="max-width:20px;max-height:20px;"> CSAUFV - Corte seletivo executado na área de uso alternativo do solo fora da vigência da autorização';
        }else if(monitoramento.features[i].properties.fk_tip_mon == 6){
          var MonitSit = '<img src="imagens/quadrado-amarelo.png" style="max-width:20px;max-height:20px;"> CSFAUV - Corte Seletivo Executado Fora da Área de Uso Alternativo do Solo na Vingência da Autorização';
        }else if(monitoramento.features[i].properties.fk_tip_mon == 7){
          var MonitSit = '<img src="imagens/quadrado-azul.png" style="max-width:20px;max-height:20px;"> CSFAUFV - Corte Seletivo Executado Fora da Área de Uso Alternativo do Solo Fora da Vingência da Autorização';
        }else if(monitoramento.features[i].properties.fk_tip_mon == 8){
          var MonitSit = '<img src="imagens/quadrado-roxo1.png" style="max-width:20px;max-height:20px;"> CRAUV - Corte Raso Executado na Área de Uso Alternativo do Solo na Vingência da Autorização';
        }else if(monitoramento.features[i].properties.fk_tip_mon == 9){
          var MonitSit = '<img src="imagens/quadrado-roxo2.png" style="max-width:20px;max-height:20px;"> CRAUFV - Corte Raso Executado na Área de Uso Alternativo do Solo Fora da Vingência da Autorização';
        }else if(monitoramento.features[i].properties.fk_tip_mon == 10){
          var MonitSit = '<img src="imagens/quadrado-verde1.png" style="max-width:20px;max-height:20px;"> CRFAUV - Corte Raso Executado Fora da Área de Uso Alternativo do Solo na Vingência da Autorização';
        }else if(monitoramento.features[i].properties.fk_tip_mon == 11){
          var MonitSit = '<img src="imagens/quadrado-roxo3.png" style="max-width:20px;max-height:20px;"> CRFAUFV - Corte Raso Executado Fora da Área de Uso Alternativo do Solo Fora da Vingência da Autorização';
        }else if(monitoramento.features[i].properties.fk_tip_mon == 12){
          var MonitSit = '<img src="imagens/quadrado-laranja.png" style="max-width:20px;max-height:20px;"> CSPMV - Corte Seletivo Executado na Área do Plano de Manejo Florestal Sustentável na Vingência da Autorização';
        }else if(monitoramento.features[i].properties.fk_tip_mon == 13){
          var MonitSit = '<img src="imagens/quadrado-verde2.png" style="max-width:20px;max-height:20px;"> CSPMFV - Corte Seletivo Executado na Área do Plano de Manejo Florestal Sustentável Fora da Vingência da Autorização';
        }else if(monitoramento.features[i].properties.fk_tip_mon == 14){
          var MonitSit = '<img src="imagens/quadrado-azul2.png" style="max-width:20px;max-height:20px;"> CSFPMV - Corte seletivo executado fora da área do plano de manejo florestal sustentável na vigência da autorização';
        }else if(monitoramento.features[i].properties.fk_tip_mon == 15){
          var MonitSit = '<img src="imagens/quadrado-vermelho1.png" style="max-width:20px;max-height:20px;"> CSFPMFV - Corte seletivo executado fora da área do plano de manejo florestal sustentável fora da vigência da autorização';
        }else if(monitoramento.features[i].properties.fk_tip_mon == 16){
          var MonitSit = '<img src="imagens/quadrado-marrom1.png" style="max-width:20px;max-height:20px;"> CRPMV - Corte raso executado na área do plano de manejo florestal sustentável na vigência da autorização';
        }else if(monitoramento.features[i].properties.fk_tip_mon == 17){
          var MonitSit = '<img src="imagens/quadrado-laranja1.png" style="max-width:20px;max-height:20px;"> CRPMFV - Corte raso executado na área do plano de manejo florestal sustentável fora da vigência da autorização';
        }else if(monitoramento.features[i].properties.fk_tip_mon == 18){
          var MonitSit = '<img src="imagens/quadrado-rosa.png" style="max-width:20px;max-height:20px;"> CRFPMV - Corte raso executado fora da área do plano de manejo florestal sustentável na vigência da autorização';
        }else if(monitoramento.features[i].properties.fk_tip_mon == 19){
          var MonitSit = '<img src="imagens/quadrado-amarelo2.png" style="max-width:20px;max-height:20px;"> CRFPM - Corte raso executado fora da área do plano de manejo florestal sustentável fora da vigência da autorização';
        }else if(monitoramento.features[i].properties.fk_tip_mon == 20){
          var MonitSit = '<img src="imagens/quadrado-roxo4.png" style="max-width:20px;max-height:20px;"> SVAUV - Supressão Vegetal Executada na Área de Uso Alternativo do Solo na Vingência da Autorização';
        }else if(monitoramento.features[i].properties.fk_tip_mon == 21){
          var MonitSit = '<img src="imagens/quadrado-laranja2.png" style="max-width:20px;max-height:20px;"> SVAUFV - Supressão vegetal executado na área de uso alternativo do solo fora da vigência da autorização';
        }else if(monitoramento.features[i].properties.fk_tip_mon == 22){
          var MonitSit = '<img src="imagens/quadrado-cinza.png" style="max-width:20px;max-height:20px;"> SVFAUFV - Supressão vegetal executado fora da área de uso alternativo do solo fora da vigência da autorização';
        }else if(monitoramento.features[i].properties.fk_tip_mon == 23){
          var MonitSit = '<img src="imagens/quadrado-azul3.png" style="max-width:20px;max-height:20px;"> SVFAUV - Supressão vegetal executado fora da área de uso alternativo do solo na vigência da autorização';
        }else if(monitoramento.features[i].properties.fk_tip_mon == 24){
          var MonitSit = '<img src="imagens/quadrado-azul1.png" style="max-width:20px;max-height:20px;"> CRNE - Corte Raso Não Executável';
        }else if(monitoramento.features[i].properties.fk_tip_mon == 25){
          var MonitSit = '<img src="imagens/quadrado-preto.png" style="max-width:20px;max-height:20px;"> POANE - Plano operacional anual não executado';
        }else{
          var MonitSit = monitoramento.features[i].properties.fk_tip_mon;
        }

        
        if(monitoramento.features[i].properties.fk_tip_aut == 1){
          var LicenAutor = 'ASV - Autorização de Supressão Vegetal';
        }else if(monitoramento.features[i].properties.fk_tip_aut == 2){
          var LicenAutor = 'AUAS - Autorização de Uso Alternativo do Solo';
        }else if(monitoramento.features[i].properties.fk_tip_aut == 3){
          var LicenAutor = 'PMFS - Plano de Manejo Florestal Sustentável';
        }else if(monitoramento.features[i].properties.fk_tip_aut == 4){
          var LicenAutor = 'CRRA - Certificado Roraimense de Regularidade Ambiental';
        }else if(monitoramento.features[i].properties.fk_tip_aut == 5){
          var LicenAutor = 'DRA - Declaração de Regularização Ambiental';
        }else if(monitoramento.features[i].properties.fk_tip_aut == 6){
          var LicenAutor = 'PRAD - Plano de Recuperação de Área Degradada';
        }else if(monitoramento.features[i].properties.fk_tip_aut == 7){
          var LicenAutor = 'POA - PLANO OPERACIONAL ANUAL';
        }else{
          var LicenAutor = monitoramento.features[i].properties.fk_tip_aut;

        }

        var element = document.querySelector(".modal-body");
        var newHtml = '<b>Situação do Monitoramento:</b> '+MonitSit+
        '<br> <b>Licença de Autorização:</b> '+LicenAutor+'<br><hr>';
        element.innerHTML += newHtml;
      }
      i++;
    }
  }