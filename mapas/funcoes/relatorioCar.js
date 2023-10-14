function carRelatorio(ucsArray, uceArray, militArray, indigArray, inalienArray, projArray, projArray_4mf, assentArray, embarArray, sitArray, contOutSuper, contOutSub, contSitPon, carArray){
    let alvo = document.getElementById("aaa");
    alvo.innerText = "";

    let alvo1 = document.getElementById("text1");
    alvo1.innerText = "";

    var element1 = document.querySelector(".text");
    var newHtml1 = '<h1 class="modal-title fs-5" id="staticBackdropLabel">CAR - Sobreposição</h1>';
    element1.innerHTML += newHtml1;


        var element = document.querySelector(".modal-body");

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
        for(i=0; i<carArray.length-1; i= i+2){
            if(carArray.length == 1){
                text10 += "<b>Área de Sobreposição: </b>"+ carArray[i]+"<br><br>";
            }else{
                text10 += "<b>Código Imovel: </b>"+ carArray[i]+"<br>";
                text10 += "<b>Área de Sobreposição: </b>"+ carArray[i+1]+"<br><br>";
            }
        }

        text10 += '<b>Quantidade de CAR Sobrepostos:</b> '+carArray[i]+"<br><br>";



        

        var newHtml = text+"<hr>"+text1+"<hr>"+text2+"<hr>"+text3+"<hr>"+text4+"<hr>"+text5+"<hr>"+text6+"<hr>"+text7+"<hr>"+text8+"<hr>"+text9+"<hr>"+text10+
        '<hr><b>Quantidade de Sítios Arqueológicos (Ponto) Sobrepostos:</b> '+contSitPon+
        '<br><hr><b>Quantidade de Outorgas Superficiais Sobrepostos:</b> '+contOutSuper+
        '<br><hr><b>Quantidade de Outorgas Subterrâneas Sobrepostos:</b> '+contOutSub+'<br>';
        element.innerHTML += newHtml;

  }

