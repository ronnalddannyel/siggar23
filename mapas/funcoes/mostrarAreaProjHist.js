
function test(){
    let alvo = document.getElementById("aaa");
    alvo.innerText = "";

    let alvo1 = document.getElementById("text1");
    alvo1.innerText = "";

    var element1 = document.querySelector(".text");
    var newHtml1 = '<h1 class="modal-title fs-5" id="staticBackdropLabel">Área do Projeto</h1>';
    element1.innerHTML += newHtml1;

    var teste = document.getElementById('aProj').value;
    cont = 3000;
    var i = 0;
    while(cont != i){
      var teste1 = 'ap.'+arProjHis.features[i].properties.fk_ap;
      if(teste == teste1){
        if(arProjHis.features[i].properties.fk_licenca == 1){
          var licenca = 'LP - Licença Prévia';
        }else if(arProjHis.features[i].properties.fk_licenca == 2){
          var licenca = 'LI - Licença de Instalação';
        }else if(arProjHis.features[i].properties.fk_licenca == 3){
          var licenca = 'LO - Licença de Operação';
        }else if(arProjHis.features[i].properties.fk_licenca == 4){
          var licenca = 'CRRA - Certificado Roraimense de Regularidade Ambiental';
        }else if(arProjHis.features[i].properties.fk_licenca == 5){
          var licenca = 'DRA - Declaração de Regularização Ambiental';
        }else if(arProjHis.features[i].properties.fk_licenca == 6){
          var licenca = 'LAS - Licença Ambiental Simplificada';
        }else if(arProjHis.features[i].properties.fk_licenca == 7){
          var licenca = 'PMFS - Plano de Manejo Florestal Sustentável';
        }else if(arProjHis.features[i].properties.fk_licenca == 8){
          var licenca = 'Autorização Prévia da Análise Técnica para o Plano de Manejo';
        }else if(arProjHis.features[i].properties.fk_licenca == 9){
          var licenca = 'AUAS - Autorização de Uso Alternativo do Solo';
        }else if(arProjHis.features[i].properties.fk_licenca == 10){
          var licenca = 'ASV - Autorização de Supressão Vegetal';
        }else if(arProjHis.features[i].properties.fk_licenca == 11){
          var licenca = 'LAC - Licença Ambiental Corretiva';
        }else if(arProjHis.features[i].properties.fk_licenca == 12){
          var licenca = 'LAA - Licença Ambiental de Ampliação';
        }else if(arProjHis.features[i].properties.fk_licenca == 13){
          var licenca = 'LA - Licença de Ampliação';
        }else if(arProjHis.features[i].properties.fk_licenca == 14){
          var licenca = 'AUMFP - Autorização de Uso de Materia Prima Florestal';
        }else if(arProjHis.features[i].properties.fk_licenca == 15){
          var licenca = 'POA - Plano Operacional Anual';
        }else{
          var licenca = arProjHis.features[i].properties.fk_licenca;
        }

        var element = document.querySelector(".modal-body");
        var newHtml = '<b>Tipo de Licença:</b> '+licenca+
        '<br> <b>N° Licença:</b> '+arProjHis.features[i].properties.n_licenca+
        '<br> <b>Vigência Inicial:</b> '+arProjHis.features[i].properties.vig_inicia+
        '<br> <b>Vigência Final:</b> '+arProjHis.features[i].properties.vig_fim+
        '<br> <b>Responsável Técnico:</b> '+arProjHis.features[i].properties.resp_tec+
        '<br> <b>N° ART:</b> '+arProjHis.features[i].properties.art+'<br><hr>';
        element.innerHTML += newHtml;

      }
      i++;
    }
  }