
// Embargos

var embarg = L.geoJSON(embarg1, {
    color: "red",
    weight: "2",
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Embargos</b></h6><p><b>Nome: </b> '+geom.properties.nom_pessoa+'<br><b>CPF/CNPJ: </b> '+geom.properties.cpf_cnpj_i+'<br><b>Municípios/UF: </b> '+geom.properties.nom_mun_uf+'<br><b>Endereço: </b> '+geom.properties.end_pessoa+'<br><b>Bairro: </b> '+geom.properties.des_bairro+'<br><b>CEP: </b> '+geom.properties.num_cep+'<br><b>Telefone:</b> '+geom.properties.num_fone+'<br><b>N° TAD: </b> '+geom.properties.seq_tad+'<br><b>N° Auto de Infração: </b> '+geom.properties.seq_auto_i+'<br><b>Código TAD:</b> '+geom.properties.numero_tad+'<br><b>Série TAD: </b> '+geom.properties.serie_tad+'<br><b>Termo: </b> '+geom.properties.tipo_termo+'<br><b>Data TAD: </b> '+geom.properties.data_tad+'<br><b>Data Alterada TAD: </b> '+geom.properties.dat_altera+'<br><b>Valor TAD: </b> '+geom.properties.valor_tad_+'<br><b>Área: </b> '+geom.properties.qtd_area_e+'<br><b>Latitude Decimal: </b> '+geom.properties.num_latitu+'<br><b>Longitude Decimal: </b> '+geom.properties.num_longit+'<br><b>Nome Propriedade: </b> '+geom.properties.nom_propri+'<br><b>Situação Embargo: </b> '+geom.properties.sit_embarg+'<br><b>ID Determinação: </b> '+geom.properties.id_deter_o+'<br><b>ID poligono: </b> '+geom.properties.id_poligon+'<br><b>Latitude: </b> '+geom.properties.num_lati_1+'<br><b>Longitude: </b> '+geom.properties.num_long_1+'<br><b>Processo: </b> '+geom.properties.processo_t+'<br><b>Prot Andam: </b> '+geom.properties.prot_andam+'<br><b>Prot Tempo:</b> '+geom.properties.prot_tempo+'<br><b>Nome Autuante: </b> '+geom.properties.nom_autuan+'<br><b>Código Autuante: </b> '+geom.properties.num_pessoa+'<br><b>UF: </b> '+geom.properties.sig_uf+'<br><b>Município:</b> '+geom.properties.nom_munici+'<br><b>N° Auto de Infração: </b> '+geom.properties.num_auto_i+'<br><b>Série Auto de Infração: </b> '+geom.properties.ser_auto_i+'<br><b>Código Município: </b> '+geom.properties.cod_munici+'<br><b>Código UF: </b> '+geom.properties.cod_uf+'<br><b>Estado: </b> '+geom.properties.nom_uf+'<br><b>Código Região: </b> '+geom.properties.cod_regiao+'<br><b>Região: </b> '+geom.properties.nom_regiao+'<br><b>Status TAD: </b> '+geom.properties.status_tad+'<br><b>Tipo de Infração: </b> '+geom.properties.tipo_infra+'<br><b>Área: </b> '+geom.properties.qtd_area_d+'<br><b>Sequencia Operacional: </b> '+geom.properties.seq_operac+'<br><b>Nome Operacional: </b> '+geom.properties.nom_operac+'<br><b>Tad: </b> '+geom.properties.des_tad+'<br><b>Localicalidade: </b> '+geom.properties.des_locali+'<br><b>Local: </b> '+geom.properties.des_local_+'<br><b>Auto de Infração: </b> '+geom.properties.des_auto_i+'<br><b>Código Infração: </b> '+geom.properties.cod_infrac+'<br><b>Infração: </b> '+geom.properties.des_infrac+'<br><b>Código Receita: </b> '+geom.properties.cod_receit+'<br><b>Desmatamento: </b> '+geom.properties.log_desmat+'<br><b>Tipo Desmatamento:</b> '+geom.properties.des_tipo_d+'<br><b>Legislação: </b> '+geom.properties.legislacao+'<br><b>Artigo Legislação: </b> '+geom.properties.artigo_leg+'<br><b>Artigo: </b> '+geom.properties.artigo+'<br><b>Data Julgamento:</b> '+geom.properties.julgamento+'<br><b>Status Atual: </b> '+geom.properties.status_atu+'<br><b>Código Status: </b> '+geom.properties.cod_status+'<br><b>Data Cadastro: </b> '+geom.properties.data_cadas+'<br><b>Imagem: </b> '+geom.properties.imagem_val+'<br><b>Resp: </b> '+geom.properties.respeita_e+'<br><b>Órgão: </b> '+geom.properties.orgao+'<br><b>Data Geometria: </b> '+geom.properties.data_geom+'<br><b>Data Carga: </b> '+geom.properties.dt_carga+' <br><b>Área ha: </b> '+geom.properties.area_ha+'<br><b>URL: </b> '+geom.properties.url+'</p>');
    },
  });

    function emb(el){
        if(map.hasLayer(embarg)){
        map.removeLayer(embarg);
        }
        else {
        map.addLayer(embarg);
        }
        var display = document.getElementById(el).style.display;
        if(display == "block"){
          document.getElementById(el).style.display = 'none';
        }else{
          document.getElementById(el).style.display = 'block';
        } 
        legMostra();
      }