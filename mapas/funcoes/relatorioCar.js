function carRelatorio(ucsArray, uceArray, militArray, indigArray, inalienArray, projArray, projArray_4mf, assentArray, embarArray, sitArray, contOutSuper, contOutSub, contSitPon, carArray, tituloArray, sigefArray){
    let alvo = document.getElementById("bbb");
    alvo.innerText = "";

    let alvo1 = document.getElementById("text3");
    alvo1.innerText = "";

    var element1 = document.querySelector(".text2");
    var newHtml1 = '<h1 class="modal-title fs-5" id="staticBackdropLabel">CAR - Sobreposição</h1>';
    element1.innerHTML += newHtml1;


        var element = document.querySelector(".car-sobreposicao");

        // UCE

        var text = "<h5>Unidade de Conservação Estadual</h5>";
        for(i=0; i<ucsArray.length; i= i+2){
            if(ucsArray.length == 1){
                text += "<b>Área de Sobreposição: </b>"+ ucsArray[i]+"<br><br>";
            }else{
                text += "<b>Nome: </b>"+ ucsArray[i]+"<br>";
                text += "<b>Área de Sobreposição: </b>"+ ucsArray[i+1]+"<br><br>";
            }
        }
        console.log(text);


        // UCF


        var text1 = "<h5>Unidade de Conservação Federal</h5>";
        for(i=0; i<uceArray.length; i= i+2){
            if(uceArray.length == 1){
                text1 += "<b>Área de Sobreposição: </b>"+ uceArray[i]+"<br><br>";
            }else{
                text1 += "<b>Nome: </b>"+ uceArray[i]+"<br>";
                text1 += "<b>Área de Sobreposição: </b>"+ uceArray[i+1]+"<br><br>";
            }
        }
        console.log(text1);


        // Áreas Militares


        var text2 = "<h5>Áreas Militares</h5>";

        for(i=0; i<militArray.length; i++){
            text2 += "<b>Área de Sobreposição: </b>"+ militArray[i]+"<br><br>";
        }
        console.log(text2);


        // Terras Indígenas

        var text3 = "<h5>Terras Indígenas</h5>";
        for(i=0; i<indigArray.length; i= i+2){
            if(indigArray.length == 1){
                text3 += "<b>Área de Sobreposição: </b>"+ indigArray[i]+"<br><br>";
            }else{
                text3 += "<b>Nome: </b>"+ indigArray[i]+"<br>";
                text3 += "<b>Área de Sobreposição: </b>"+ indigArray[i+1]+"<br><br>";
            }
        }
        console.log(text3);


        // Áreas Inalienáveis

        var text4 = "<h5>Áreas Inalienáveis</h5>";
        for(i=0; i<inalienArray.length; i++){
            text4 += "<b>Área de Sobreposição: </b>"+ inalienArray[i]+"<br><br>";
        }
        console.log(text4);


        // IBAMA - Embargos  

        var text5 = "<h5>IBAMA - Embargos</h5>";
        for(i=0; i<embarArray.length-1; i= i+2){
            if(embarArray.length == 1){
                text5 += "<b>Área de Sobreposição: </b>"+ embarArray[i]+"<br><br>";
            }else{
                text5 += "<b>Área Total do Embargo: </b>"+ embarArray[i]+"<br>";
                text5 += "<b>Área de Sobreposição: </b>"+ embarArray[i+1]+"<br><br>";
            }
        }
        text5 += '<b>Quantidade de Embargos Sobrepostos:</b> '+embarArray[i]+"<br><br>";


        // Área do Projeto  

        var text6 = "<h5>Área do Projeto</h5>";
        for(i=0; i<projArray.length; i= i+2){
            if(projArray.length == 1){
                text6 += "<b>Área de Sobreposição: </b>"+ projArray[i]+"<br><br>";
            }else{
                text6 += "<b>Tipo do Projeto: </b>"+ projArray[i]+"<br>";
                text6 += "<b>Área de Sobreposição: </b>"+ projArray[i+1]+"<br><br>";
            }
        }
        console.log(text6);


        // Área do Projeto 4mf  

        var text7 = "<h5>Área do Projeto 4mf</h5>";
        for(i=0; i<projArray_4mf.length; i= i+2){
            if(projArray_4mf.length == 1){
                text7 += "<b>Área de Sobreposição: </b>"+ projArray_4mf[i]+"<br><br>";
            }else{
                text7 += "<b>Tipo do Projeto: </b>"+ projArray_4mf[i]+"<br>";
                text7 += "<b>Área de Sobreposição: </b>"+ projArray_4mf[i+1]+"<br><br>";
            }
        }
        console.log(text7);


        // Projetos de Assentamento  

        var text8 = "<h5>Projetos de Assentamento</h5>";
        for(i=0; i<assentArray.length; i= i+2){
            if(assentArray.length == 1){
                text8 += "<b>Área de Sobreposição: </b>"+ assentArray[i]+"<br><br>";
            }else{
                text8 += "<b>Nome: </b>"+ assentArray[i]+"<br>";
                text8 += "<b>Área de Sobreposição: </b>"+ assentArray[i+1]+"<br><br>";
            }
        }
        console.log(text8);


        // IPHAN - Sítios Arqueológicos (Polígonos)  

        var text9 = "<h5>IPHAN - Sítios Arqueológicos (Polígonos)</h5>";
        for(i=0; i<sitArray.length-1; i= i+2){
            if(sitArray.length == 1){
                text9 += "<b>Área de Sobreposição: </b>"+ sitArray[i]+"<br><br>";
            }else{
                text9 += "<b>Identificação: </b>"+ sitArray[i]+"<br>";
                text9 += "<b>Área de Sobreposição: </b>"+ sitArray[i+1]+"<br><br>";
            }
        }

        text9 += '<b>Quantidade de Sítios Arqueológicos (Polígonos) Sobrepostos:</b> '+sitArray[i]+"<br><br>";


        // CAR  

        var text10 = "<h5>CAR</h5>";
        for(i=0; i<carArray.length-1; i= i+4){
            if(carArray.length == 1){
                text10 += "<b>Área de Sobreposição: </b>"+ carArray[i]+"<br><br>";
            }else{
                text10 += "<b>Código Imovel: </b>"+ carArray[i]+"<br>";
                text10 += "<b>Status: </b>"+ carArray[i+1]+"<br>";
                text10 += "<b>Área de Sobreposição (Relativo): </b>"+ carArray[i+2]+"<br>";
                text10 += "<b>Área de Sobreposição (Absoluto): </b>"+ carArray[i+3]+"<br><br>";
            }
        }

        text10 += '<b>Quantidade de CAR Sobrepostos:</b> '+carArray[i]+"<br><br>";


        // Sigef Certificados


        var text11 = "<h5>Sigef Certificados</h5>";
        for(i=0; i<sigefArray.length; i= i+3){
            if(sigefArray.length == 1){
                text11 += "<b>Área de Sobreposição: </b>"+ sigefArray[i]+"<br><br>";
            }else{
                text11 += "<b>Nome da Área: </b>"+ sigefArray[i]+"<br>";
                text11 += "<b>Código Parcela: </b>"+ sigefArray[i+1]+"<br>";
                text11 += "<b>Área de Sobreposição: </b>"+ sigefArray[i+2]+"<br><br>";
            }
        }



        // Títulos Definitivos


        var text12 = "<h5>Títulos Definitivos</h5>";
        for(i=0; i<tituloArray.length; i= i+3){
            if(tituloArray.length == 1){
                text12 += "<b>Área de Sobreposição: </b>"+ tituloArray[i]+"<br><br>";
            }else{
                text12 += "<b>Propriedade: </b>"+ tituloArray[i]+"<br>";
                text12 += "<b>Número Título Definitivo: </b>"+ tituloArray[i+1]+"<br>";
                text12 += "<b>Área de Sobreposição: </b>"+ tituloArray[i+2]+"<br><br>";
            }
        }



        

        var newHtml = text+"<hr>"+text1+"<hr>"+text2+"<hr>"+text3+"<hr>"+text4+"<hr>"+text5+"<hr>"+text6+"<hr>"+text7+"<hr>"+text8+"<hr>"+text9+"<hr>"+text10+"<hr>"+text11+"<hr>"+text12+
        '<hr><b>Quantidade de Sítios Arqueológicos (Ponto) Sobrepostos:</b> '+contSitPon+
        '<br><hr><b>Quantidade de Outorgas Superficiais Sobrepostos:</b> '+contOutSuper+
        '<br><hr><b>Quantidade de Outorgas Subterrâneas Sobrepostos:</b> '+contOutSub+'<br>';
        element.innerHTML += newHtml;


        // Atribuir valores dos arrays para o formulário de gerar PDF Laudo


        document.getElementById('car1').value = JSON.stringify(carArray);

        document.getElementById('uce').value = JSON.stringify(ucsArray);

        document.getElementById('ucf').value = JSON.stringify(uceArray);

        document.getElementById('am').value = JSON.stringify(militArray);

        document.getElementById('ti').value = JSON.stringify(indigArray);

        document.getElementById('ai').value = JSON.stringify(inalienArray);

        document.getElementById('emb').value = JSON.stringify(embarArray);

        document.getElementById('ap').value = JSON.stringify(projArray);

        document.getElementById('ap4mf').value = JSON.stringify(projArray_4mf);

        document.getElementById('assent').value = JSON.stringify(assentArray);

        document.getElementById('saPol').value = JSON.stringify(sitArray);

        document.getElementById('sig').value = JSON.stringify(sigefArray);

        document.getElementById('tit').value = JSON.stringify(tituloArray);

        document.getElementById('saPon').value = contSitPon;

        document.getElementById('os').value = contOutSuper;

        document.getElementById('osb').value = contOutSub;



  }


  // Função para acionar botão enviar do laudo CAR

  function pdfCar(){
    document.getElementById('formEnviarParaPDF').submit();
  }

