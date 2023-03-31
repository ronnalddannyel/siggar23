<!DOCTYPE html>
<?php
session_start();
include('verifica_login.php')
?>
<html lang="pt-br">
<head>

    <style>

      .leaflet-popup-content-wrapper {
        max-height: 400px;
        overflow:auto;
      }

      .leaflet-popup-content-wrapper .leaflet-popup-content {
      }

      .leaflet-popup-tip-container {
      }

    </style>

    <link rel="stylesheet" href="mapa.css"/>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="bootstrap/css/bootstrap.css" rel="stylesheet">
    <title>SIGGARR</title>


    <link rel="stylesheet" href="leaflet/leaflet.css" />  
    <script src="leaflet/leaflet.js"></script>
    <script src="https://unpkg.com/@ngageoint/leaflet-geopackage@2.0.5/dist/leaflet-geopackage.min.js"></script>
     
    <script src="src/L.Control.Layers.Tree.js"></script>
    <script src="https://rawgithub.com/ismyrnow/Leaflet.groupedlayercontrol/master/src/leaflet.groupedlayercontrol.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>

    <script src="mapas/areasInstitucionais/areaImovel.geojson"></script>
    <script src="mapas/areasInstitucionais/areaProjeto.geojson"></script>
    <script src="mapas/areasInstitucionais/areaUos.geojson"></script>
    <script src="mapas/areasInstitucionais/minAreaReq.geojson"></script>
    <script src="mapas/areasInstitucionais/monitoramento.geojson"></script>
    <script src="mapas/areasInstitucionais/areaProjeto1.geojson"></script>
    <script src="mapas/areasInstitucionais/areaProjetoHist.geojson"></script>

    <script src="mapas/areasLicenciadas/areaInalienaveis.geojson"></script>
    <script src="mapas/areasLicenciadas/arMil.geojson"></script>
    <script src="mapas/areasLicenciadas/limiteTerraIndigena.geojson"></script>
    <script src="mapas/areasLicenciadas/ucs_estaduais.geojson"></script>
    <script src="mapas/areasLicenciadas/undConserFed.geojson"></script>

    <script src="mapas/baseCartografica/sedesMunicipais.geojson"></script>
    <script src="mapas/baseCartografica/localidades.geojson"></script>
    <script src="mapas/baseCartografica/limitesMunicipais.geojson"></script>
    <script src="mapas/baseCartografica/rodovias.geojson"></script>
    <script src="mapas/baseCartografica/hidrografia2.geojson"></script>
    <script src="mapas/baseCartografica/hidroMassaDagua.geojson"></script>
    <script src="mapas/baseCartografica/projAssent.geojson"></script>
    <script src="mapas/baseCartografica/glebas.geojson"></script>

    <script src="mapas/agenciaNacMiner/minerariosAtivos.geojson"></script>

    <script src="mapas/ANA/ANA.geojson"></script>
    <script src="mapas/ANA/outorgas_superficiais.geojson"></script>
    <script src="mapas/ANA/outorgas_subterraneas.geojson"></script>

    <script src="mapas/mapsBioma/alertas.geojson"></script>

    <script src="mapas/IBAMA/embargos.geojson"></script>

    <script src="mapas/IPHAN/sitiosArqPol.geojson"></script>
    <script src="mapas/IPHAN/sitiosArqPon.geojson"></script>

    <link rel="stylesheet" type="text/css" href="leaflet/L.Control.ZoomBar.css"/>
    <script type="text/javascript" src="leaflet/L.Control.ZoomBar.js"></script>

    <link rel="stylesheet" href="leaflet/Leaflet.GraphicScale.min.css" />
    <script src="leaflet/Leaflet.GraphicScale.min.js"></script>

    <link rel="stylesheet" href="leaflet/MarkerCluster.css" />
    <link rel="stylesheet" href="leaflet/MarkerCluster.Default.css" />
    <script src="leaflet/leaflet.markercluster.js"></script>
    
</head>
<body>

  <!-- Barra no topo com nome do sistema e logo Femarh e chamada do mapa-->

  <div class="mn">
    <nav class="navbar navbar-dark bg-success fixed-top">
        <div class="container-fluid">
           <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
           <span class="navbar-toggler-icon"></span>
          </button>
          
          <div id="log">
          <img src="imagens/SIGARR3.png" class="d-none d-lg-block d-print-block" href="https://femarh.rr.gov.br/" id="fem4">
          <a class="navbar-brand d-none d-lg-block d-print-block" href="#" id="men"><b>SIGGARR</b> - SISTEMA DE INFORMAÇÃO GEOGRÁFICA E GESTÃO AMBIENTAL DE RORAIMA </a>
          <a class="navbar-brand d-lg-none" href="#" id="men"><b>SIGGARR</b> </a>
          </div>
          <img src="imagens/FEMARH-LOGO.png" class="d-none d-lg-block d-print-block" href="https://femarh.rr.gov.br/" id="fem">
                          
          <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header" style="background-color: rgb(28, 132, 83);" id="menu">
              <img src="imagens/logo-femarh1.png"> 
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel" style="color:white">MENU</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <p style="padding: 0; margin: 0;">
              <input type="button" onclick="men124('dropd','dropd1','dropd2')" value="Mapas e Temas" style="min-width:33.87%;margin:  0 -4px 0 0;" id="remLay1">
              <input type="button" onclick="men123('dropd','dropd1','dropd2')" value="Consultas" style="min-width:33.87%; margin:  0 -4px  0 -4px;" id="remLay1">
              <input type="button" onclick="men125('dropd','dropd1','dropd2')" value="Informações" style="min-width:33.87%; margin:  0 0 0 -4px; " id="remLay1">
            </p>

            <div class="offcanvas-body" id="dropd">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
               <!-- <li><a class="home" href="teste.php" style="text-decoration: none;">HOME</a></li> -->
               <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      MAPAS
                    </a>
                    <ul class="dropdown-menu dropdown-menu">
                      <li><a id="coord">Mosaico Planet 02/2023 <input type="RADIO" name="op" onclick=" plan()" id="coor"></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord">Google Satélite <input type="RADIO" name="op" onclick=" gSat()" id="coor"></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" >Google Streets <input type="RADIO" name="op" onclick="gStr()" id="coor"></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord">Google Hybrid <input type="RADIO" name="op" onclick="gHyb()" id="coor"></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord">Google Terrain <input type="RADIO" name="op" onclick="gTerr()" id="coor2" CHECKED></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord">ESRI Satellite <input type="RADIO" name="op" onclick="sat()" id="coor"></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord">ESRI National Geographic <input type="RADIO" name="op" onclick="nGeo()" id="coor"></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord">OSM Standard <input type="RADIO" name="op" onclick="basm()" id="coor"></a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      ÁREAS LICENCIADAS
                    </a>
                    <ul class="dropdown-menu dropdown-menu">
                      <li><a id="coord"><img src="imagens/retangulo-arredondado.png" style="max-width:20px;max-height:20px;"> Área do Projeto <a href="Download/ap.zip" download="Area_Projeto" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="areaProj('teste5')" id="1"></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" ><img src="imagens/retangulo-arredondado-blue.png" style="max-width:20px;max-height:20px;"> Área do Imóvel <a href="Download/view_ati.zip" download="Area_Total_Imovel" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="arImov('teste1')" id="2"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord"><img src="imagens/retangulo-arredondado-325f5f.png" style="max-width:20px;max-height:20px;"> Área de Uso e Ocupação do Solo<a href="Download/auos.zip" download="Area_UOS" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="arUos('teste26')" id="20"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord"><img src="imagens/retangulo-arredondado-1a0f5d.png" style="max-width:20px;max-height:20px;"> Área Requerida de Mineração <a href="Download/mineracao_area_req.zip" download="Mineracao_Area_Req" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="arReq('teste27')" id="21"></a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      MONITORAMENTO
                    </a>
                    <ul class="dropdown-menu dropdown-menu">
                      <li><a id="coord"><img src="imagens/retangulo-arredondado.png" style="max-width:20px;max-height:20px;"> Monitoramento<a href="Download/monitoramento.zip" download="Monitoramento" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="monit('teste28')" id="22"></a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      ÁREAS INSTITUCIONAIS
                    </a>
                    <ul class="dropdown-menu dropdown-menu">
                      <li><a id="coord" ><img src="imagens/retangulo-arredondado-808080.png" style="max-width:20px;max-height:20px;"> Áreas Inalienáveis <a href="Download/areas_inalienaveis_spu.zip" download="Areas_Inalienaveis" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="areaIna('teste2')" id="3"></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" ><img src="imagens/retangulo-arredondado-FF8C00.png" style="max-width:20px;max-height:20px;"> Áreas Militares <a href="Download/areas_militares.zip" download="Areas_Militares" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="areaMil('teste3')" id="4"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" ><img src="imagens/retangulo-arredondado-red.png" style="max-width:20px;max-height:20px;"> Terras Indígenas <a href="Download/terras_indigenas.zip" download="Terras_Indigenas" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="TerraInd('teste4')" id="5"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" ><img src="imagens/retangulo-arredondado-32CD32.png" style="max-width:20px;max-height:20px;"> Unidade de Conservação Estadual <a href="Download/ucs_estaduais.zip" download="UCS_Estaduais" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="undConEst('teste6')" id="6"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" ><img src="imagens/retangulo-arredondado-006400.png" style="max-width:20px;max-height:20px;"> Unidade de Conservação Federal <a href="Download/ucs_federais.zip" download="UCS_Federais" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="undConFed('teste7')" id="7"></a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      BASE CARTOGRÁFICA
                    </a>
                    <ul class="dropdown-menu dropdown-menu">
                      <li><a id="coord"><img src="leaflet/images/pin-de-localizacao-azul.png" style="max-width:20px;max-height:20px;"> Sedes Municipais <a href="Download/municipios_sedes.zip" download="Sedes_Municipais" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="sedMunic('teste8')" id="8"></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord"><img src="leaflet/images/pin-de-localizacao.png" style="max-width:20px;max-height:20px;"> Localidades <a href="Download/localidades.zip" download="Localidades" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" value="l" class="coor" onclick="loc('teste9')" id="9"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" ><img src="imagens/retangulo-arredondado.png" style="max-width:20px;max-height:20px;"> Limites Municipais <a href="Download/municipios_limites.zip" download="Limites_Municipais" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" value="l" class="coor" onclick="limMunic('lim')" id="coor3" checked></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" ><img src="imagens/linha-horizontal.png" style="max-width:20px;max-height:20px;"> Rodovias <a href="Download/rodovias.zip" download="Rodovias" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="rod('teste11')" id="10"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" ><img src="imagens/linha-horizontal-00BFFF.png" style="max-width:20px;max-height:20px;"> Trecho de Drenagem (1:100.000) <a href="Download/hidrografia.zip" download="Trecho_Drenagem" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="hidrog('teste12')" id="11"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" ><img src='imagens/retangulo-arredondado-00BFFF.png' style='max-width:20px;max-height:20px;'> Trecho de Massa D'Água <a href="Download/hidro_massadagua.zip" download="Trecho_Massa_DAgua" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="hidMasDagua('teste13')" id="12"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" ><img src="imagens/retangulo-arredondado-FFD700.png" style="max-width:20px;max-height:20px;"> Projetos de Assentamento <a href="Download/projetos_assentamentos.zip" download="Projetos_Assentamentos" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="projAs('teste14')" id="13"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" ><img src="imagens/retangulo-arredondado-blue.png" style="max-width:20px;max-height:20px;"> Glebas <a href="Download/glebas.zip" download="Glebas" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="gleb('teste15')" id="14"></a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      AGÊNCIA NACIONAL DE MINERAÇÃO
                    </a>
                    <ul class="dropdown-menu dropdown-menu">
                      <li><a id="coord"><img src="imagens/retangulo-arredondado-blue.png" style="max-width:20px;max-height:20px;"> Minerarios Ativos <a href="Download/anm_minerarios_ativos.zip" download="Minerarios_Ativos" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="minAtivos('teste16')" id="15"></a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      IPHAN
                    </a>
                    <ul class="dropdown-menu dropdown-menu">
                      <li><a id="coord"><img src="leaflet/images/pin-de-localizacao-vermelho.png" style="max-width:20px;max-height:20px"> Sítios Arqueológicos (Pontos) <a href="Download/iphan_sitios_arqueol_pto.zip" download="Iphan_Sitios_Arqueol_pto" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="ipSitArqPto('teste24')" id="16"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" ><img src="imagens/retangulo-arredondado-8B0000.png" style="max-width:20px;max-height:20px;"> Sítios Arqueológicos (Polígonos) <a href="Download/iphan_sitios_arqueol_pol.zip" download="Iphan_Sitios_Arqueol_pol" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="ipSitArq('teste23')" id="17"></a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      IBAMA
                    </a>
                    <ul class="dropdown-menu dropdown-menu">
                      <li><a id="coord"><img src="imagens/retangulo-arredondado-red.png" style="max-width:20px;max-height:20px;"> Embargos <a href="Download/ibama_embargos.zip" download="Ibama_Embargos" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="emb('teste10')" id="19"></a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      OUTORGA DE RECURSOS HÍDRICOS
                    </a>
                    <ul class="dropdown-menu dropdown-menu">
                      <li><a id="coord"><img src="leaflet/images/pin-de-localizacao-azul1.png" style="max-width:20px;max-height:20px"> Outorgas Emitidas pela ANA <a href="Download/ana_user_corpo_hidrico_uniao.zip" download="Outorgas_emit_ANA" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="ana1('teste29')" id="23"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" ><img src="leaflet/images/pin-de-localizacao-azul3.png" style="max-width:20px;max-height:20px;"> Outorgas Superficiais <a href="Download/ana_user_corpo_hidrico_outorgas_superf.zip" download="outorgas_superficiais" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="outSuper1('teste30')" id="24"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" ><img src="leaflet/images/pin-de-localizacao-marrom.png" style="max-width:20px;max-height:20px;"> Outorgas Subterrâneas <a href="Download/ana_user_corpo_hidrico_outorgas_subter.zip" download="outorgas_subterraneas" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="outSub1('teste31')" id="25"></a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      MAPBIOMAS
                    </a>
                    <ul class="dropdown-menu dropdown-menu">
                      <li><a id="coord"><img src="imagens/retangulo-arredondado-orange.png" style="max-width:20px;max-height:20px"> Alertas <a href="Download/mapbiomas_alertas.zip" download="mapbiomas_alertas" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="alertas1('teste32')" id="26"></a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      INPE
                    </a>
                    <ul class="dropdown-menu dropdown-menu">
                      <li><a id="coord"><img src="leaflet/images/fogo.png" style="max-width:20px;max-height:20px"> Focos de Queimadas <a href="https://queimadas.dgi.inpe.br/home/download?id=focos_brasil_rr&time=48h&outputFormat=json&utm_source=landing-page&utm_medium=landing-page&utm_campaign=dados-abertos&utm_content=focos_brasil_rr_48h" download="Focos_Queimadas_rr.json" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="queimadas('teste25')" id="18"></a></li>
                    </ul>
                </li>
                <!--
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      FUNDAÇÃO BRASILEIRA DE DESENVOLVIMENTO SUSTENTÁVEL
                    </a>
                    <ul class="dropdown-menu dropdown-menu">
                      <li><a id="coord">fbds App <input type="checkbox" onclick="fApp('teste17')" id="coor"></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord">fbds Massa Dagua <input type="checkbox" onclick="fMasDag('teste18')" id="coor"></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord">fbds Nascentes <input type="checkbox" onclick="fNasc('teste19')" id="coor"></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord">fbds Rios Duplos <input type="checkbox" onclick="fRiDup('teste20')" id="coor"></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord">fbds Rios Simples <input type="checkbox" onclick="fRiSim('teste21')" id="coor"></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord">fbds Uso <input type="checkbox" onclick="fUso('teste22')" id="coor"></a></li>
                    </ul>
                </li> -->
              </ul>

              <p data-bs-dismiss="offcanvas" aria-label="Close">
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1" id="leg">Legenda</a>
                

                <a class="btn btn-primary" id="leg" href="https://intranet.femarh.com/siggarr/" ><strong>Logout</strong></a>
                <a class="btn btn-primary" id="leg" href="#" role="button" ><strong><?php echo $_SESSION['usuario'];?></strong></a>
              
      
              </p>

              <img src="imagens/SIGARR3.png" class="d-none d-lg-block d-print-block" href="https://femarh.rr.gov.br/" id="fem1">

              <input class="btn btn-primary" type="button" onclick="removeAllLayer('1', 'coor3', 'op', 'teste', 'lim')"  value="Remover Temas" id="remLay">

            </div>

            <div class="offcanvas-body" id="dropd1">
              
            <div>
              <div>
                <h5 style="float:left;">Consulte por Arquivo (Json/GeoJson)</h5>
              </div>
              <div>
                <a href="https://www.statsilk.com/maps/convert-esri-shapefile-map-geojson-format" style="float:left; margin-left:5px" target="_blank"><abbr title="Transforme seu arquivo shape em Json"><i class="bi bi-info-square"></abbr></i></a>
              </div>
            </div>
            <input type="file" id="arquivo" class="form-control">
            <input class="btn btn-primary" type="button" onclick="removerLayJson()"  value="Remover Tema" id="remLay">

            
            

            <br><br>
    
            <h5>Consulte por Coordenada</h5>

              <label for="latitude">Latitude</label>
              <input type="text" class="form-control" id="latitude" name="latitude" placeholder="ex. 0.0000000000000000">

              <label for="longitude">Longitude</label>
              <input type="text" class="form-control" id="longitude" name="longitude" placeholder="ex. -0.0000000000000000">

              <input type="submit" class="btn btn-primary" onclick="addMarcador()" value="Enviar" id="remLay">
              <input class="btn btn-primary" type="button" onclick="removerTema()"  value="Remover Marcador" id="remLay">
              
              <br><br>

              <h5>Consulte por CPF/CNPJ</h5>

                <label for="cpf">CPF/CNPJ</label>
                <input type="text" class="form-control" id="cpf" name="cpf" placeholder="ex. xxxxxxxxxxx / xxxxxxxx/xxxx-xx">

                <input type="button" class="btn btn-primary" onclick="cpf2(areaImovel)" value="Enviar" id="remLay">
                <input class="btn btn-primary" type="button" onclick="removeCpf()"  value="Remover tema" id="remLay">
                
                <img src="imagens/SIGARR3.png" class="d-none d-lg-block d-print-block" href="https://femarh.rr.gov.br/" id="fem1">

            </div>

            <div class="offcanvas-body" id="dropd2">
              <p>O banco de dados que gera o sistema em questão ainda não possui todos os imóveis licenciados pela FEMARH, o mesmo tem atualização diária com a inserção de novos imóveis.</p>

              <img src="imagens/SIGARR3.png" class="d-none d-lg-block d-print-block" href="https://femarh.rr.gov.br/" id="fem1">
              
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" id="avaliacao">
                Lista de Avaliação
              </button>


            </div>
            
          </div>
        </div>
        
      </nav>
 
      <div id="map">


      </div>

      <div class="row">
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample1">
            <div class="card card-body">
              
              <h5 style="text-align:center;">LEGENDAS</h5>
              
              <div id="teste5">
                <img src="imagens/retangulo-arredondado.png" style="max-width:20px;max-height:20px;"> Área do Projeto
              </div>

              <div id="teste1">
                <img src="imagens/retangulo-arredondado-blue.png" style="max-width:20px;max-height:20px;"> Área do Imóvel
              </div>

              <div id="teste26">
                <img src="imagens/retangulo-arredondado-325f5f.png" style="max-width:20px;max-height:20px;"> Área de Uso e Ocupação do Solo
              </div>

              <div id="teste27">
                <img src="imagens/retangulo-arredondado-1a0f5d.png" style="max-width:20px;max-height:20px;"> Área Requerida de Mineração 
              </div>

              <div id="teste28">
                Monitoramento <br>
                <div style="margin-left:15px;">
                <img src="imagens/quadrado-verde3.png" style="max-width:20px;max-height:20px;"> CSSA - Corte seletivo executado sem autorização <br>
                <img src="imagens/quadrado-verde.png" style="max-width:20px;max-height:20px;"> CRSA - Corte Raso Executado sem Autorização <br>
                <img src="imagens/quadrado-marrom.png" style="max-width:20px;max-height:20px;"> SVSA - Supressão Vegetal Executada sem Autorização' <br>
                <img src="imagens/quadrado-roxo.png" style="max-width:20px;max-height:20px;"> CSAUV - Corte Seletivo Executado na Área de Uso Alternativo do Solo na Vingência da Autorização <br>
                <img src="imagens/quadrado-amarelo1.png" style="max-width:20px;max-height:20px;"> CSAUFV - Corte seletivo executado na área de uso alternativo do solo fora da vigência da autorização <br>
                <img src="imagens/quadrado-amarelo.png" style="max-width:20px;max-height:20px;"> CSFAUV - Corte Seletivo Executado Fora da Área de Uso Alternativo do Solo na Vingência da Autorização <br>
                <img src="imagens/quadrado-azul.png" style="max-width:20px;max-height:20px;"> CSFAUFV - Corte Seletivo Executado Fora da Área de Uso Alternativo do Solo Fora da Vingência da Autorização <br>
                <img src="imagens/quadrado-roxo1.png" style="max-width:20px;max-height:20px;"> CRAUV - Corte Raso Executado na Área de Uso Alternativo do Solo na Vingência da Autorização <br>
                <img src="imagens/quadrado-roxo2.png" style="max-width:20px;max-height:20px;"> CRAUFV - Corte Raso Executado na Área de Uso Alternativo do Solo Fora da Vingência da Autorização <br>
                <img src="imagens/quadrado-verde1.png" style="max-width:20px;max-height:20px;"> CRFAUV - Corte Raso Executado Fora da Área de Uso Alternativo do Solo na Vingência da Autorização <br>
                <img src="imagens/quadrado-roxo3.png" style="max-width:20px;max-height:20px;"> CRFAUFV - Corte Raso Executado Fora da Área de Uso Alternativo do Solo Fora da Vingência da Autorização <br>
                <img src="imagens/quadrado-laranja.png" style="max-width:20px;max-height:20px;"> CSPMV - Corte Seletivo Executado na Área do Plano de Manejo Florestal Sustentável na Vingência da Autorização <br>
                <img src="imagens/quadrado-verde2.png" style="max-width:20px;max-height:20px;"> CSPMFV - Corte Seletivo Executado na Área do Plano de Manejo Florestal Sustentável Fora da Vingência da Autorização <br>
                <img src="imagens/quadrado-azul2.png" style="max-width:20px;max-height:20px;"> CSFPMV - Corte seletivo executado fora da área do plano de manejo florestal sustentável na vigência da autorização <br>
                <img src="imagens/quadrado-vermelho1.png" style="max-width:20px;max-height:20px;"> CSFPMFV - Corte seletivo executado fora da área do plano de manejo florestal sustentável fora da vigência da autorização <br>
                <img src="imagens/quadrado-marrom1.png" style="max-width:20px;max-height:20px;"> CRPMV - Corte raso executado na área do plano de manejo florestal sustentável na vigência da autorização <br>
                <img src="imagens/quadrado-laranja1.png" style="max-width:20px;max-height:20px;"> CRPMFV - Corte raso executado na área do plano de manejo florestal sustentável fora da vigência da autorização <br>
                <img src="imagens/quadrado-rosa.png" style="max-width:20px;max-height:20px;"> CRFPMV - Corte raso executado fora da área do plano de manejo florestal sustentável na vigência da autorização <br>
                <img src="imagens/quadrado-amarelo2.png" style="max-width:20px;max-height:20px;"> CRFPM - Corte raso executado fora da área do plano de manejo florestal sustentável fora da vigência da autorização <br>
                <img src="imagens/quadrado-roxo4.png" style="max-width:20px;max-height:20px;"> SVAUV - Supressão Vegetal Executada na Área de Uso Alternativo do Solo na Vingência da Autorização <br>
                <img src="imagens/quadrado-laranja2.png" style="max-width:20px;max-height:20px;"> SVAUFV - Supressão vegetal executado na área de uso alternativo do solo fora da vigência da autorização <br>
                <img src="imagens/quadrado-cinza.png" style="max-width:20px;max-height:20px;"> SVFAUFV - Supressão vegetal executado fora da área de uso alternativo do solo fora da vigência da autorização <br>
                <img src="imagens/quadrado-azul3.png" style="max-width:20px;max-height:20px;"> SVFAUV - Supressão vegetal executado fora da área de uso alternativo do solo na vigência da autorização <br>
                <img src="imagens/quadrado-azul1.png" style="max-width:20px;max-height:20px;"> CRNE - Corte Raso Não Executável <br>
                <img src="imagens/quadrado-preto.png" style="max-width:20px;max-height:20px;"> POANE - Plano operacional anual não executado <br>
                </div>
              </div>

              <div id="teste2">
                <img src="imagens/retangulo-arredondado-808080.png" style="max-width:20px;max-height:20px;"> Áreas Inalienáveis
              </div>

              <div id="teste3">
                <img src="imagens/retangulo-arredondado-FF8C00.png" style="max-width:20px;max-height:20px;"> Áreas Militares
              </div>

              <div id="teste4">
                <img src="imagens/retangulo-arredondado-red.png" style="max-width:20px;max-height:20px;"> Terras Indígenas
              </div>

              <div id="teste6">
                <img src="imagens/retangulo-arredondado-32CD32.png" style="max-width:20px;max-height:20px;"> Unidade de Conservação Estadual
              </div>

              <div id="teste7">
                <img src="imagens/retangulo-arredondado-006400.png" style="max-width:20px;max-height:20px;"> Unidade de Conservação Federal
              </div>

              <div id="teste8">
                Sedes Municipais <br>
                <div style="margin-top: 8px;">
                  <img src="leaflet/images/pin-de-localizacao-vermelho.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Capital
                </div>
                <div style="margin-top: 8px;">
                  <img src="leaflet/images/pin-de-localizacao-azul.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Cidade
                </div>
              </div>

              <div id="teste9">
                <img src="leaflet/images/pin-de-localizacao.png" style="max-width:20px;max-height:20px;"> Localidades
              </div>

              <div id="lim">
                <img src="imagens/retangulo-arredondado.png" style="max-width:20px;max-height:20px;"> Limites Municipais
              </div>

              <div id="teste11">
                Rodovias <br>
                <div style="margin-top: 8px;">
                  <img src="imagens/linha-horizontal-red.png" style="max-width:20px;max-height:20px; margin-left:7px;margin-left:15px"> Federal
                </div>
                <div style="margin-top: 8px;">
                  <img src="imagens/linha-horizontal-32CD32.png" style="max-width:20px;max-height:20px;margin-left:7px;margin-left:15px;"> Estadual
                </div>
                <div style="margin-top: 8px;">
                  <img src="imagens/linha-tracejada.png" style="max-width:20px;max-height:20px;margin-left:15px"> Municipal
                </div>
              </div>

              <div id="teste12">
                <img src="imagens/linha-horizontal-00BFFF.png" style="max-width:20px;max-height:20px;"> Trecho de Drenagem (1:100.000)
              </div>

              <div id="teste13">
              <img src='imagens/retangulo-arredondado-00BFFF.png' style='max-width:20px;max-height:20px;'> Trecho de Massa D'Água
              </div>

              <div id="teste14">
              <img src="imagens/retangulo-arredondado-FFD700.png" style="max-width:20px;max-height:20px;"> Projetos de Assentamento
              </div>

              <div id="teste15">
                <img src="imagens/retangulo-arredondado-blue.png" style="max-width:20px;max-height:20px;"> Glebas
              </div>

              <div id="teste16">
                <img src="imagens/retangulo-arredondado-blue.png" style="max-width:20px;max-height:20px;"> Minerarios Ativos
              </div>

              <div id="teste24">
                <img src="leaflet/images/pin-de-localizacao-vermelho.png" style="max-width:20px;max-height:20px"> Iphan - Sítios Arqueológicos (Pontos)
              </div>

              <div id="teste23">
                <img src="imagens/retangulo-arredondado-8B0000.png" style="max-width:20px;max-height:20px;"> Iphan - Sítios Arqueológicos (Polígonos)
              </div>

              <div id="teste17">
                fbds App
              </div>

              <div id="teste18">
                fbds Massa Dágua
              </div>

              <div id="teste19">
                fbds Nascentes
              </div>

              <div id="teste20">
                fbds Rios Duplos
              </div>

              <div id="teste21">
                fbds Rios Simples
              </div>

              <div id="teste22">
                fbds Uso
              </div>

              <div id="teste10">
                <img src="imagens/retangulo-arredondado-red.png" style="max-width:20px;max-height:20px;"> Embargos
              </div>

              <div id="teste29">
                <img src="leaflet/images/pin-de-localizacao-azul1.png" style="max-width:20px;max-height:20px"> Outorgas Emitidas pela ANA 
              </div>

              <div id="teste30">
                <img src="leaflet/images/pin-de-localizacao-azul3.png" style="max-width:20px;max-height:20px"> Outorgas Superficiais 
              </div>

              <div id="teste31">
                <img src="leaflet/images/pin-de-localizacao-marrom.png" style="max-width:20px;max-height:20px"> Outorgas Subterrâneas
              </div>

              <div id="teste32">
                <img src="imagens/retangulo-arredondado-orange.png" style="max-width:20px;max-height:20px"> Alertas
              </div>

              <div id="teste25">
                <img src="leaflet/images/fogo.png" style="max-width:20px;max-height:20px"> Focos de Queimadas
              </div>


            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <div class="text" id="text1"></div>
        <div><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>
      </div>
      <div class="modal-body" id="aaa" >
        
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Lista de Avaliação</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style="overflow:auto;max-height:600px; display: inline-block;">
      <div style="float:left;">
              <?php
                require_once('db.php');
                $i = 1;
                $soma = 0;
                $cinco = 0;
                $quatro = 0;
                $tres = 0;
                $dois = 0;
                $um = 0;
                $sql = "SELECT * FROM avaliacos";
                $result = mysqli_query($conn, $sql);
                echo "<table id='comBordaSimples' border='1'>";
                echo "<tr>";
                echo "<td id='linha1'>Número de Avaliação</td>";
                echo "<td id='linha1'>Quantidade de Estrela</td>";
                echo "<td id='linha1'>Data/Hora</td>";
                echo "</tr>";
                while($row = mysqli_fetch_assoc($result)){
                  echo "<tr>";
                  echo "<td>".$i."</td>";
                  echo "<td>".$row['qnt_estrela']."</td>";
                  echo "<td>".$row['created']."</td>";
                  echo "</tr>";
                  $soma = $soma + $row['qnt_estrela'];  
                  $i++;
                  if($row['qnt_estrela'] == 5){
                    $cinco++;
                  }else if($row['qnt_estrela'] == 4){
                    $quatro++;
                  }else if($row['qnt_estrela'] == 3){
                    $tres++;
                  }else if($row['qnt_estrela'] == 2){
                    $dois++;
                  }else{
                    $um++;
                  }
                }
                echo "</table>";
                 $media = $soma / ($i - 1);
                 $mediacinco = ($cinco / ($i - 1))*100;
                 $mediaquatro = ($quatro / ($i - 1))*100;
                 $mediatres = ($tres / ($i - 1))*100;
                 $mediadois = ($dois / ($i - 1))*100;
                 $mediaum = ($um / ($i - 1))*100;
              ?>
              </div>


              <!--
              <div style="margin: 20px;">

                <div style="font-size: 50px;">
                  <?php
                     $media;
                  ?>
                  <img src="imagens/estrela.png" style="max-width:40px;max-height:40px; margin: 0 15px 15px 0;">
                </div>

                <div style="display: inline-block;min-width: 40%;">

                <div style="display: inline-block; min-width: 100%;">
                  <div style="float:left;margin-right:1%;"><h5>5</h5></div>
                  
                  <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="margin: 1%;">
                    <div class="progress-bar" style="width: <?php  $mediacinco ?>%"></div>
                  </div>
                </div>

                <div style="display: inline-block; min-width: 100%;">

                  <div style="float:left;margin-right:1%;"><h5>4</h5></div>

                  <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="margin: 1%;">
                    <div class="progress-bar" style="width: <?php  $mediaquatro ?>%"></div>
                  </div>
                </div>
                  
                <div style="display: inline-block; min-width: 100%;">
                  <div style="float:left;margin-right:1%;"><h5>3</h5></div>

                  <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="margin: 1%;">
                    <div class="progress-bar" style="width: <?php  $mediatres ?>%"></div>
                  </div>
                </div>
                  
                <div style="display: inline-block; min-width: 100%;">
                  <div style="float:left;margin-right:1%;"><h5>2</h5></div>

                  <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="margin: 1%;">
                    <div class="progress-bar" style="width: <?php  $mediadois ?>%"></div>
                  </div>
                  </div>

                  <div style="display: inline-block; min-width: 100%;">
                  <div style="float:left;margin-right:1.5%;"><h5>1</h5></div>

                  <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="margin: 1%;">
                    <div class="progress-bar" style="width: <?php  $mediaum ?>%"></div>
                  </div>
                  </div>
                </div>
              </div>
              -->
      </div>
    </div>
  </div>
</div>

    <script>
  function test(){
    let alvo = document.getElementById("aaa");
    alvo.innerText = "";

    let alvo1 = document.getElementById("text1");
    alvo1.innerText = "";

    var element1 = document.querySelector(".text");
    var newHtml1 = '<h1 class="modal-title fs-5" id="staticBackdropLabel">Área do Projeto</h1>';
    element1.innerHTML += newHtml1;

    var teste = document.getElementById('aProj').value;
    cont = 1000;
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
</script>


<!-- Códigos do mapa contidos no mapa.js -->

    <script>

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
        'https://tiles.planet.com/basemaps/v1/planet-tiles/global_monthly_2023_02_mosaic/gmap/{z}/{x}/{y}.png?api_key=PLAK647ba0a2c0ee450a967d3f8fdce806bd',
        {
          id: 'global_monthly',
        });

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
    </script>

    <script src="mapa.js"></script>
    <script src="file.js"></script>

    <script>
      var areaImov = L.geoJSON(areaImovel, {
        color: "blue",
        fill: false,
        weight: "3",
        onEachFeature: function (features, layer) {
          layer.bindPopup('<h6><b>Área do Imóvel</b></h6><p><b>GID:</b> '+features.properties.gid+'<br><b>Imóvel:</b> '+features.properties.nome_imov+'<br><b>Município:</b> '+features.properties.municip+'<br><b>Gleba:</b> '+features.properties.gleba+'<br><b>CAR:</b> '+features.properties.car+'<br><b>SIGEF:</b> '+features.properties.sigef+'<br><b>Área:</b> '+features.properties.area+' ha.<br><b>Nome do Empreendedor:</b> '+features.properties.nome_emp+'<br><b>CPF/CNPJ:</b> '+features.properties.cpf_cnpj+'<br><b>Usuário:</b> '+features.properties.usuario+'</p>');
        }
      });

      function arImov(el){
        if(map.hasLayer(areaImov)){
        map.removeLayer(areaImov);
        }
        else {
        map.addLayer(areaImov);
        }
        var display = document.getElementById(el).style.display;
        if(display == "block"){
          document.getElementById(el).style.display = 'none';
        }else{
          document.getElementById(el).style.display = 'block';
        }
      }

      var areaProjeto = L.geoJSON(areaProjeto, {
        color: "black",
        weight: "2",
        onEachFeature: function (features, layer) {
          if(features.properties.fk_tipo_projeto == 1){
              var tipoProjeto = 'CRRA - Certificado Roraimense de Regularidade Ambiental';
            }else if(features.properties.fk_tipo_projeto == 2){
              var tipoProjeto = 'DRA - Declaração de Regularização Ambiental';
            }else if(features.properties.fk_tipo_projeto == 3){
              var tipoProjeto = 'AUAS - Autorização de Uso Alternativo do Solo';
            }else{
            var tipoProjeto = features.properties.fk_tipo_projeto;
          }
          layer.bindPopup('<h6><b>Área do Projeto</b></h6><b>GID: </b>'+features.id+'<br><b>Processo:</b> '+features.properties.n_processo+'<br><b>Código: </b>'+features.properties.fk_cod_femarh+'<br><b>Descrição: </b> '+features.properties.descr_ativ+'<br><b>Área: </b> '+features.properties.area+'<br><b>Código Imóvel: </b> '+features.properties.fk_ati+'<br><b>Tipo do Projeto: </b> '+tipoProjeto+'<br><br><button type="button" onclick="test()" id="aProj" value="'+features.id+'" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Detalhes</button>');
        }
      });

      function areaProj(el){
        if(map.hasLayer(areaProjeto)){
        map.removeLayer(areaProjeto);
        }
        else {
        map.addLayer(areaProjeto);
        }
        var display = document.getElementById(el).style.display;
        if(display == "block"){
          document.getElementById(el).style.display = 'none';
        }else{
          document.getElementById(el).style.display = 'block';
        } 
          }

      var areaUos = L.geoJSON(areaUos, {
        color: "#325f5f",
        weight: "2",
        onEachFeature: function (geom, layer) {
          layer.bindPopup('<h6><b>Área de Uso e Ocupação do Solo</b></h6><b>Tipo do Solo: </b>'+geom.properties.fk_tipo+'<br><b>Área:</b> '+geom.properties.area.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.');
        }
      });

      function arUos(el){
        if(map.hasLayer(areaUos)){
        map.removeLayer(areaUos);
        }
        else {
        map.addLayer(areaUos);
        }
        var display = document.getElementById(el).style.display;
        if(display == "block"){
          document.getElementById(el).style.display = 'none';
        }else{
          document.getElementById(el).style.display = 'block';
        } 
      }
      
      var areaReq = L.geoJSON(areaReq, {
        color: "#1a0f5d",
        weight: "2",
        onEachFeature: function (geom, layer) {
          layer.bindPopup('<h6><b>Área Requerida de Mineração</b></h6><b>Nº do Processo ANM: </b>'+geom.properties.nproc_anm+'<br><b>Nome do Empreendedor:</b> '+geom.properties.nome_emp+'<br><b>CPF/CNPJ: </b>'+geom.properties.cpf_cnpj+'<br><b>Município: </b> '+geom.properties.fk_municip+'<br><b>Área:</b> '+geom.properties.area.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.<br><b>Cadastrante: </b> '+geom.properties.fk_usuario);
        }
      });

      function arReq(el){
        if(map.hasLayer(areaReq)){
        map.removeLayer(areaReq);
        }
        else {
        map.addLayer(areaReq);
        }
        var display = document.getElementById(el).style.display;
        if(display == "block"){
          document.getElementById(el).style.display = 'none';
        }else{
          document.getElementById(el).style.display = 'block';
        } 
      }

      var monitor = L.geoJSON(monitoramento, {
        style: function(geom) {
          switch (geom.properties.fk_tip_mon) {
              case 1: return {color: "#33fd38", weight: "2"};
              case 2: return {color: "#30ca9a", weight: "2"};
              case 3: return {color: "#ab9960", weight: "2"};
              case 4: return {color: "#a72266", weight: "2"};
              case 5: return {color: "#fffa36", weight: "2"};
              case 6: return {color: "#becc23", weight: "2"};
              case 7: return {color: "#4694b1", weight: "2"};
              case 8: return {color: "#a32ab2", weight: "2"};
              case 9: return {color: "#974c4c", weight: "2"};
              case 10: return {color: "#69a86d", weight: "2"};
              case 11: return {color: "#7251a7", weight: "2"};
              case 12: return {color: "#cd9649", weight: "2"};
              case 13: return {color: "#7cad44", weight: "2"};
              case 14: return {color: "#0c00ac", weight: "2"};
              case 15: return {color: "#8a0000", weight: "2"};
              case 16: return {color: "#36291e", weight: "2"};
              case 17: return {color: "#de6c04", weight: "2"};
              case 18: return {color: "#d0129a", weight: "2"};
              case 19: return {color: "#a9cc16", weight: "2"};
              case 20: return {color: "#592057", weight: "2"};
              case 21: return {color: "#f16f3b", weight: "2"};
              case 22: return {color: "#4b4947", weight: "2"};
              case 23: return {color: "#42f4f8", weight: "2"};
              case 24: return {color: "#3b6ec9", weight: "2"};
              case 25: return {color: "black", weight: "2"};
          }
        },
        onEachFeature: function (features, layer) {
          layer.bindPopup('<h6><b>Monitoramento</b></h6>'+'<b>Código da Área do Imóvel: </b>'+features.properties.fk_ati+'<br><b>Código da Área do Projeto: </b> '+features.properties.fk_ap+'<br><b>Nº do Processo: </b>'+features.properties.n_processo+'<br><b>Classificação: </b> '+features.properties.fk_corte_fora_proj+'<br><b>Área Monitorada:</b> '+features.properties.area+' ha.<br><b>Nº da Autorização: </b> '+features.properties.n_autoriza+'<br><b>Início da Vigência: </b> '+features.properties.vig_inicia+'<br><b>Fim da Vigênica:</b> '+features.properties.vig_fim+'<br><b>Intervalo da Vigência: </b>'+features.properties.vig_interv+'<br><b>Operador: </b> '+features.properties.fk_usuario+'<br><b>Data do Registro: </b> '+features.properties.data_reg+'<br><br><button type="button" onclick="test2()" id="mom" value="'+features.id+'" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Detalhes</button>');
        }
      });

      function monit(el){
        if(map.hasLayer(monitor)){
        map.removeLayer(monitor);
        }
        else {
        map.addLayer(monitor);
        }
        var display = document.getElementById(el).style.display;
        if(display == "block"){
          document.getElementById(el).style.display = 'none';
        }else{
          document.getElementById(el).style.display = 'block';
        } 
      }


    </script>

    <script>
      var areaInalienaveis = L.geoJSON(areaInalienaveis, {
        color: "#808080",
        weight: "1",
        onEachFeature: function (features, layer) {
          layer.bindPopup('<h6><b>Áreas Inalienáveis</b></h6><p><b>Nome:</b> Área Inalienável<br><b>Tipo: </b>'+features.properties.tipo_inter+'<br><b>Órgão: </b> '+features.properties.orgao_inte+'<br><b>Confirmação: </b> '+features.properties.confirmado+'<br><b>Nome da Área: </b>'+features.properties.nome_area+'<br><b>Submissão: </b> '+features.properties.submissao+'<br><b>Data Cadastro: </b> '+features.properties.data_cadas+'<br><b>Área:</b> '+features.properties.area_ha.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.</p>');
        }
      });

      function areaIna(el){
          if(map.hasLayer(areaInalienaveis)){
          map.removeLayer(areaInalienaveis);
          }
          else {
          map.addLayer(areaInalienaveis);
          }
          var display = document.getElementById(el).style.display;
          if(display == "block"){
            document.getElementById(el).style.display = 'none';
          }else{
            document.getElementById(el).style.display = 'block';
          } 
          }

      var areaMilit = L.geoJSON(arMilit, {
        color: "#FF8C00",
        weight: "2",
        onEachFeature: function (geom, layer) {
          layer.bindPopup('<h6><b>Áreas Militares</b></h6><p><b>Nome:</b> Área Militar<br><b>Geometria: </b> '+geom.properties.geometriaa+'<br><b>Sirgas 20 ha.: </b> '+geom.properties.sirgas20ha+'<br><b>Sirgas 20 km.: </b>'+geom.properties.sirgas20km+'<br><b>Município: </b> '+geom.properties.municipio+'<br><b>ID: </b> '+geom.properties.id+'<br><b>Área:</b> '+geom.properties.area_ha.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.</p>');
        } 
      });

      function areaMil(el){
        if(map.hasLayer(areaMilit)){
        map.removeLayer(areaMilit);
        }
        else {
        map.addLayer(areaMilit);
        }
        var display = document.getElementById(el).style.display;
        if(display == "block"){
          document.getElementById(el).style.display = 'none';
        }else{
          document.getElementById(el).style.display = 'block';
        } 
      }

      var limiteTerraIndigena = L.geoJSON(limiteTerraIndigena, {
        color: "red",
        weight: "2",
        onEachFeature: function (geom, layer) {
          layer.bindPopup('<h6><b>Terras Indígenas</b></h6><p><b>Nome: </b> '+geom.properties.nomeabrev+'<br><b>Etnia: </b> '+geom.properties.etnia_nome+'<br><b>Municípios: </b> '+geom.properties.municipio_+'<br><b>Estados: </b> '+geom.properties.uf_sigla+'<br><b>Fase: </b> '+geom.properties.fase_ti+'<br><b>Modalidade: </b> '+geom.properties.modalidade+'<br><b>Unidade Administrativa: </b> '+geom.properties.undadm_nom+'<br><b>Sigla Unid. Administrativa: </b> '+geom.properties.undadm_sig+'<br><b>Unid. Administrativa Código: </b> '+geom.properties.undadm_cod+'<br><b>Faixa de Fronteira: </b> '+geom.properties.faixa_fron+'<br><b>Área:</b> '+geom.properties.area_ha.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.<br><b>Data Atualização: </b> '+geom.properties.data_atual+'<br><b>Código: </b> '+geom.properties.terrai_cod+'<br><b>Área: </b> '+geom.properties.area.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+'<br><b>Nome da Terra: </b> '+geom.properties.terrai_nom+'<br><b>Superfície: </b> '+geom.properties.superficie+'<br><b>Resstudo: </b> '+geom.properties.reestudo_t+'<br><b>CR: </b> '+geom.properties.cr+'<br><b>Domínio: </b> '+geom.properties.dominio_un+'<br><b>Data Atual: </b> '+geom.properties.data_atual+'<br><b>EPSG: </b> '+geom.properties.epsg+'</p>');
        }
      });

      function TerraInd(el){
        if(map.hasLayer(limiteTerraIndigena)){
        map.removeLayer(limiteTerraIndigena);
        }
        else {
        map.addLayer(limiteTerraIndigena);
        }
        var display = document.getElementById(el).style.display;
        if(display == "block"){
          document.getElementById(el).style.display = 'none';
        }else{
          document.getElementById(el).style.display = 'block';
        } 
      }

      var undConserEst = L.geoJSON(ucsEst, {
          color: "#32CD32",
          weight: "2",
          onEachFeature: function (geom, layer) {
            layer.bindPopup('<h6><b>Unidade de Conservação Estadual</b></h6><p><b>Nome:</b> '+geom.properties.nomeabrev+'<br><b>Sigla:</b> '+geom.properties.sigla+'<br><b>Administração:</b> '+geom.properties.administra+'<br><b>Situação:</b> '+geom.properties.situacao+'<br><b>Decreto:</b> '+geom.properties.decreto+'<br><b>Ano:</b> '+geom.properties.ano+'<br><b>Lei:</b> '+geom.properties.lei+'<br><b>Área:</b> '+geom.properties.area_ha.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.<br><b>ID:</b> '+geom.properties.id+'</p>');
          }
        });
        
        function undConEst(el){
          if(map.hasLayer(undConserEst)){
          map.removeLayer(undConserEst);
          }
          else {
          map.addLayer(undConserEst);
          }
          var display = document.getElementById(el).style.display;
          if(display == "block"){
            document.getElementById(el).style.display = 'none';
          }else{
            document.getElementById(el).style.display = 'block';
          } 
        }

        var undConserFed = L.geoJSON(undConserFed, {
          color: "#006400",
          weight: "2",
          onEachFeature: function (geom, layer) {
            layer.bindPopup('<h6><b>Unidade de Conservação Federal</b></h6><p><b>Nome:</b> '+geom.properties.nome_area+'<br><b>Tipo:</b> '+geom.properties.natureza+'<br><b>Detentor:</b> '+geom.properties.detentor_n+'<br><b>Situação:</b> '+geom.properties.situacao_i+'<br><b>ID:</b> '+geom.properties.id+'<br><b>Parcela:</b> '+geom.properties.parcela_co+'<br><b>RT:</b> '+geom.properties.rt+'<br><b>ART:</b> '+geom.properties.art+'<br><b>Transcrição:</b> '+geom.properties.transcrica+'<br><b>Código IMO:</b> '+geom.properties.codigo_imo+'<br><b>ID Envio:</b> '+geom.properties.id_envio+'<br><b>Tipo de Envio:</b> '+geom.properties.tipo_envio+'<br><b>Órgão:</b> '+geom.properties.orgao+'<br><b>Data de Submissão:</b> '+geom.properties.data_submi+'<br><b>Data de Aprovação:</b> '+geom.properties.data_aprov+'<br><b>Status:</b> '+geom.properties.status+'<br><b>Área Hectares:</b> '+geom.properties.area_hecta.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+'<br><b>Detentor C:</b> '+geom.properties.detentor_c+'<br><b>Detentor 1:</b> '+geom.properties.detentor_1+'<br><b>Registro C:</b> '+geom.properties.registro_c+'<br><b>Registro M:</b> '+geom.properties.registro_m+'<br><b>Registro D:</b> '+geom.properties.registro_d+'<br><b>Titular No:</b> '+geom.properties.titular_no+'<br><b>Titular Cp:</b> '+geom.properties.titular_cp+'<br><b>Titular Cn:</b> '+geom.properties.titular_cn+'<br><b>Município:</b> '+geom.properties.municipio_+'<br><b>UF ID:</b> '+geom.properties.uf_id+'<br><b>Incra Código:</b> '+geom.properties.incra_cod_+'</p>');
          }
        });

        function undConFed(el){
          if(map.hasLayer(undConserFed)){
          map.removeLayer(undConserFed);
          }
          else {
          map.addLayer(undConserFed);
          }
          var display = document.getElementById(el).style.display;
          if(display == "block"){
            document.getElementById(el).style.display = 'none';
          }else{
            document.getElementById(el).style.display = 'block';
          } 
        }
    </script>

    <script>
      var sedesMunic = L.geoJSON(sedesMunic, {
        pointToLayer: function (geom, latlng) {
          if (geom.properties.nome == 'Boa Vista') {
            return L.marker(latlng, {icon: redIcon});
          }
          else {
            return L.marker(latlng, {icon: blueIcon});
          }
        },
        onEachFeature: function (geom, layer) {
          layer.bindPopup('<h6><b>Sedes Municipais</b></h6><p><b>Geocódigo:</b> '+geom.properties.geocodigo+'<br><b>Nome:</b> '+geom.properties.nome+'<br><b>Tipo:</b> '+geom.properties.tipocidade+'<br><b>ID:</b> '+geom.properties.id+'<br><b>Geometria:</b> '+geom.properties.geometriaa+'<br><b>Nome Abreviado:</b> '+geom.properties.nomeabrev+'<br><b>Sede:</b> '+geom.properties.sede+'</p>');
        }
      });

      function sedMunic(el){
        if(map.hasLayer(sedesMunic)){
        map.removeLayer(sedesMunic);
        }
        else {
        map.addLayer(sedesMunic);
        }
        var display = document.getElementById(el).style.display;
        if(display == "block"){
          document.getElementById(el).style.display = 'none';
        }else{
          document.getElementById(el).style.display = 'block';
        } 
      }

      var markers1 = L.markerClusterGroup();

      var localidade = L.geoJSON(localidade, {
        pointToLayer: function (geom, latlng) {
            return L.marker(latlng, {icon: whiteIcon});
        },
        onEachFeature: function (geom, layer) {
          layer.bindPopup('<h6><b>Localidades</b></h6><p><b>Nome:</b> '+geom.properties.nome+'<br><b>Município:</b> '+geom.properties.municipio+'<br><b>Fonte:</b> '+geom.properties.fonte+'<br><b>Latitude:</b> '+geom.properties.lat+'<br><b>Longitude:</b> '+geom.properties.longit+'<br><b>Pop Aproximado:</b> '+geom.properties.pop_aprox+'<br><b>Este:</b> '+geom.properties.este+'<br><b>Norte:</b> '+geom.properties.norte+'</p>');
        }
      });

      markers1.addLayer(localidade);

      function loc(el){
        if(map.hasLayer(markers1)){
        map.removeLayer(markers1);
        }
        else {
        map.addLayer(markers1);
        }
        var display = document.getElementById(el).style.display;
        if(display == "block"){
          document.getElementById(el).style.display = 'none';
        }else{
          document.getElementById(el).style.display = 'block';
        } 
      }

      var limitesMunic = L.geoJSON(limitesMunic, {
        color: "black",
        opacity: "1.0",
        fillOpacity: "0",
        weight: "1",
        onEachFeature: function (geom, layer) {
          layer.bindPopup('<h6><b>Limites Municipais</b></h6><p><b>Geocódigo:</b> '+geom.properties.geocodigo+'<br><b>Nome:</b> '+geom.properties.nome+'<br><b>ID:</b> '+geom.properties.id+'<br><b>Geometria:</b> '+geom.properties.geometriaa+'<br><b>Ano derefer:</b> '+geom.properties.anoderefer+'<br><b>Nome Abreviado:</b> '+geom.properties.nomeabrev+'<br><b>Área km²:</b> '+geom.properties.area_km2+'<br><b>Área:</b> '+geom.properties.area_ha.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.</p>');
        }
      });

      function limMunic(el){
        if(map.hasLayer(limitesMunic)){
        map.removeLayer(limitesMunic);
        }
        else {
        map.addLayer(limitesMunic);
        }
        var display = document.getElementById(el).style.display;
        if(display == "none"){
          document.getElementById(el).style.display = 'block';
        }else{
          document.getElementById(el).style.display = 'none';
        } 
      }
      map.addLayer(limitesMunic);

      var rodovia = L.geoJSON(rodovia, {
        style: function(feature) {
          switch (feature.properties.administra) {
              case 'Federal': return {color: "red", weight: "2"};
              case 'Estadual': return {color: "#32CD32", weight: "2"};
              case 'Municipal': return {color: "black", weight: "1.2", dashArray: "6 4 6"};
          }
        },
        onEachFeature: function (geom, layer) {
          layer.bindPopup('<h6><b>Rodovias</b></h6><p><b>Nome:</b> '+geom.properties.codtrechor+'<br><b>Jurisdição:</b> '+geom.properties.jurisdicao+'<br><b>Administração:</b> '+geom.properties.administra+'<br><b>Revestimento:</b> '+geom.properties.revestimen+'<br><b>Operacional:</b> '+geom.properties.operaciona+'<br><b>Situação:</b> '+geom.properties.situacaofi+'<br><b>Tráfego:</b> '+geom.properties.trafego+'<br><b>ID:</b> '+geom.properties.id+'<br><b>ID rod:</b> '+geom.properties.id_rod+'<br><b>Geometria:</b> '+geom.properties.geometriaa+'<br><b>Tipo do Trecho:</b> '+geom.properties.tipotrecho+'<br><b>Concessão:</b> '+geom.properties.concession+'<br><b>Nr Pistas:</b> '+geom.properties.nrpistas+'<br><b>Nr Faixas:</b> '+geom.properties.nrfaixas+'<br><b>Canteiro:</b> '+geom.properties.canteirodi+'</p>');
        }
      });

      function rod(el){
        if(map.hasLayer(rodovia)){
        map.removeLayer(rodovia);
        }
        else {
        map.addLayer(rodovia);
        }
        var display = document.getElementById(el).style.display;
        if(display == "block"){
          document.getElementById(el).style.display = 'none';
        }else{
          document.getElementById(el).style.display = 'block';
        } 
      }

      var hidrografia = L.geoJSON(hidrografia, {
        color: "#00BFFF",
        weight: "1",
        onEachFeature: function (geom, layer) {
          layer.bindPopup('<h6><b>Trecho de Drenagem (1:100.000)</b></h6><p><b>Nome:</b> '+geom.properties.nome+'<br><b>Nome Abreviado:</b> '+geom.properties.nomeabrev+'<br><b>Navegabilidade:</b> '+geom.properties.navegabili+'<br><b>ID:</b> '+geom.properties.id+'<br><b>Geometria:</b> '+geom.properties.geometriaa+'<br><b>Coincide:</b> '+geom.properties.coincideco+'<br><b>Dentro de:</b> '+geom.properties.dentrodepo+'<br><b>Compartilha:</b> '+geom.properties.compartilh+'<br><b>Caladomax:</b> '+geom.properties.caladomax+'<br><b>Regime:</b> '+geom.properties.regime+'<br><b>Largura Média:</b> '+geom.properties.larguramed+'<br><b>Velocidade:</b> '+geom.properties.velocidade+'<br><b>Profundidade:</b> '+geom.properties.profundida+'<br><b>Eixo Principal:</b> '+geom.properties.eixoprinci+'</p>');
        }
      });

      function hidrog(el){
        if(map.hasLayer(hidrografia)){
        map.removeLayer(hidrografia);
        }
        else {
        map.addLayer(hidrografia);
        }
        var display = document.getElementById(el).style.display;
        if(display == "block"){
          document.getElementById(el).style.display = 'none';
        }else{
          document.getElementById(el).style.display = 'block';
        } 
      }

      var hidroMasDagua = L.geoJSON(hidroMasDagua, {
        color: "#00BFFF",
        weight: "2",
        onEachFeature: function (geom, layer) {
          layer.bindPopup("<h6><b>Trecho de Massa D'Água</b></h6><p><b>Nome:</b> "+geom.properties.nome+'<br><b>Nome Abreviado:</b> '+geom.properties.nomeabrev+'<br><b>Tipo:</b> '+geom.properties.tipotrecho+'<br><b>Salinidade:</b> '+geom.properties.salinidade+'<br><b>ID:</b> '+geom.properties.id+'<br><b>Geometria:</b> '+geom.properties.geometriaa+'<br><b>Regime:</b> '+geom.properties.regime+'</p>');
        }
      });

      function hidMasDagua(el){
        if(map.hasLayer(hidroMasDagua)){
        map.removeLayer(hidroMasDagua);
        }
        else {
        map.addLayer(hidroMasDagua);
        }
        var display = document.getElementById(el).style.display;
        if(display == "block"){
          document.getElementById(el).style.display = 'none';
        }else{
          document.getElementById(el).style.display = 'block';
        } 
      }

      var projAssent = L.geoJSON(projAssent, {
        color: "#FFD700",
        weight: "2",
        onEachFeature: function (geom, layer) {
          layer.bindPopup('<h6><b>Projetos de Assentamento</b></h6><p><b>Nome:</b> '+geom.properties.nome_area+'<br><b>Detentor:</b> '+geom.properties.detentor_n+'<br><b>Tipo:</b> '+geom.properties.natureza+'<br><b>Status:</b> '+geom.properties.status+'<br><b>ID:</b> '+geom.properties.id+'<br><b>Parcela:</b> '+geom.properties.parcela_co+'<br><b>RT:</b> '+geom.properties.rt+'<br><b>ART:</b> '+geom.properties.art+'<br><b>Situação:</b> '+geom.properties.situacao_i+'<br><b>Código:</b> '+geom.properties.codigo_imo+'<br><b>Data de Submissão:</b> '+geom.properties.data_submi+'<br><b>Data de Aprovação:</b> '+geom.properties.data_aprov+'<br><b>Registro C:</b> '+geom.properties.registro_c+'<br><b>Registro M:</b> '+geom.properties.registro_m+'<br><b>Registro D:</b> '+geom.properties.registro_d+'<br><b>Registro N:</b> '+geom.properties.registro_n+'<br><b>Município:</b> '+geom.properties.municipio_+'<br><b>UF ID:</b> '+geom.properties.uf_id+'<br><b>Área Hectares:</b> '+geom.properties.area_hecta.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.<br><b>Área:</b> '+geom.properties.area_ha.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.</p>');
        }
      });

      function projAs(el){
        if(map.hasLayer(projAssent)){
        map.removeLayer(projAssent);
        }
        else {
        map.addLayer(projAssent);
        }
        var display = document.getElementById(el).style.display;
        if(display == "block"){
          document.getElementById(el).style.display = 'none';
        }else{
          document.getElementById(el).style.display = 'block';
        } 
      }

      var glebas = L.geoJSON(glebas, {
        color: "blue",
        onEachFeature: function (geom, layer) {
          layer.bindPopup('<h6><b>Glebas</b></h6><p><b>Nome:</b> '+geom.properties.text+'<br><b>Situação:</b> '+geom.properties.situacao+'<br><b>FID:</b> '+geom.properties.fid_+'<br><b>Entity:</b> '+geom.properties.entity+'<br><b>Área:</b> '+geom.properties.area.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.<br><b>Perimeter:</b> '+geom.properties.perimeter+'<br><b>Teste:</b> '+geom.properties.teste+'<br><b>GLB Abreviado:</b> '+geom.properties.glb_abrev+'<br><b>Área Hectares:</b> '+geom.properties.hectares.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.</p>');
        }
      });

      function gleb(el){
        if(map.hasLayer(glebas)){
        map.removeLayer(glebas);
        }
        else {
        map.addLayer(glebas);
        }
        var display = document.getElementById(el).style.display;
        if(display == "block"){
          document.getElementById(el).style.display = 'none';
        }else{
          document.getElementById(el).style.display = 'block';
        } 
      }

    </script>

    <script>
      var minerAtivos = L.geoJSON(mineAtivos, {
        color: "blue",
        onEachFeature: function (geom, layer) {
          layer.bindPopup('<h6><b>Minerários Ativos</b></h6><p><b>Processo: </b>'+geom.properties.processo+'<br><b>Fase:</b> '+geom.properties.fase+'<br><b>Substância:</b> '+geom.properties.subs+'<br><b>Uso:</b> '+geom.properties.uso+'<br><b>Evento:</b> '+geom.properties.ult_evento+'<br><b>Número:</b> '+geom.properties.numero+'<br><b>Ano:</b> '+geom.properties.ano+'<br><b>ID:</b> '+geom.properties.id+'<br><b>Nome:</b> '+geom.properties.nome+'<br><b>UF:</b> '+geom.properties.uf+'<br><b>DS Processo:</b> '+geom.properties.dsprocesso+'<br><b>Área:</b> '+geom.properties.area_ha.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.</p>');
        }
      });

      function minAtivos(el){
        if(map.hasLayer(minerAtivos)){
        map.removeLayer(minerAtivos);
        }
        else {
        map.addLayer(minerAtivos);
        }
        var display = document.getElementById(el).style.display;
        if(display == "block"){
          document.getElementById(el).style.display = 'none';
        }else{
          document.getElementById(el).style.display = 'block';
        } 
      }
    </script>

    <script>
      var iphanSitArq = L.geoJSON(sitArPol, {
        color: "#8B0000",
        weight: "2",
        onEachFeature: function (geom, layer) {
          layer.bindPopup('<h6><b>IPHAN - Sítios Arqueológicos (Poligonos)</b></h6><p><b>Código Nacional:</b> '+geom.properties.co_iphan+'<br><b>Identificação:</b> '+geom.properties.identificacao_bem+'<br><b>Natureza:</b> '+geom.properties.ds_natureza+'<br><b>Código Natureza:</b> '+geom.properties.codigo_iphan+'<br><b>Classificação:</b> '+geom.properties.ds_classificacao+'<br><b>Tipo:</b> '+geom.properties.ds_tipo_bem+'<br><b>Sigla (Tipo):</b> '+geom.properties.sg_tipo_bem+'<br><b>Sintese:</b> '+geom.properties.sintese_bem+'<br><b>Logradouro:</b> '+geom.properties.no_logradouro+'<br><b>Número (Logradouro):</b> '+geom.properties.nu_logradouro+'<br><b>Data (Cadastro):</b> '+geom.properties.dt_cadastro+'<br><b>ID (Bem):</b> '+geom.properties.id_bem+'<br><b>ID (Natureza):</b> '+geom.properties.id_natureza+'<br><b>ID (Classificação):</b> '+geom.properties.id_classificacao+'<br><b>ID (Tipo do Bem):</b> '+geom.properties.id_tipo_bem+'</p>');
        }
      });

      function ipSitArq(el){
        if(map.hasLayer(iphanSitArq)){
        map.removeLayer(iphanSitArq);
        }
        else {
        map.addLayer(iphanSitArq);
        }
        var display = document.getElementById(el).style.display;
        if(display == "block"){
          document.getElementById(el).style.display = 'none';
        }else{
          document.getElementById(el).style.display = 'block';
        } 
      }

      var markers = L.markerClusterGroup();

      var iphanSitArqPto = L.geoJSON(sitArPon, {
        pointToLayer: function (geom, latlng) {
            return L.marker(latlng, {icon: redIcon})
        },
        onEachFeature: function (geom, layer) {
          layer.bindPopup('<h6><b>IPHAN - Sítios Arqueológicos (Pontos)</b></h6><p><b>Código Nacional:</b> '+geom.properties.co_iphan+'<br><b>Identificação:</b> '+geom.properties.identificacao_bem+'<br><b>Natureza:</b> '+geom.properties.ds_natureza+'<br><b>Código Natureza:</b> '+geom.properties.codigo_iphan+'<br><b>Classificação:</b> '+geom.properties.ds_classificacao+'<br><b>Tipo:</b> '+geom.properties.ds_tipo_bem+'<br><b>Sigla (Tipo):</b> '+geom.properties.sg_tipo_bem+'<br><b>Sintese:</b> '+geom.properties.sintese_bem+'<br><b>Logradouro:</b> '+geom.properties.no_logradouro+'<br><b>Número (Logradouro):</b> '+geom.properties.nu_logradouro+'<br><b>Data (Cadastro):</b> '+geom.properties.dt_cadastro+'<br><b>ID (Bem):</b> '+geom.properties.id_bem+'<br><b>ID (Natureza):</b> '+geom.properties.id_natureza+'<br><b>ID (Classificação):</b> '+geom.properties.id_classificacao+'<br><b>ID (Tipo do Bem):</b> '+geom.properties.id_tipo_bem+'</p>');
        },
      });

      markers.addLayer(iphanSitArqPto);

      function ipSitArqPto(el){
        if(map.hasLayer(markers)){
        map.removeLayer(markers);
        }
        else {
        map.addLayer(markers);
        }
        var display = document.getElementById(el).style.display;
        if(display == "block"){
          document.getElementById(el).style.display = 'none';
        }else{
          document.getElementById(el).style.display = 'block';
        } 
      }
    </script>

<script>

  //queimada
  /*
  var queimada = L.geoJSON(queim, 
  {
    pointToLayer: function (geom, latlng) {
            return L.marker(latlng, {icon: fogo})
        },
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Focos de Queimadas</b></h6><p><b>Longitude:</b> '+geom.properties.longitude+'<br><b>Latitude:</b> '+geom.properties.latitude+'<br><b>Município:</b> '+geom.properties.municipio+'<br><b>Dias sem Chuva:</b> '+geom.properties.numero_dias_sem_chuva+'<br><b>Precipitação:</b> '+geom.properties.precipitacao+'<br><b>Risco de Fogo:</b> '+geom.properties.risco_fogo+'<br><b>Bioma:</b> '+geom.properties.bioma+'</p>');
    },
  });
*/
      var groupLayQueimada = L.layerGroup([]);

      function queimadas(el){
        groupLayQueimada.clearLayers();
        $.getJSON("https://queimadas.dgi.inpe.br/home/download?id=focos_brasil_rr&time=48h&outputFormat=json&utm_source=landing-page&utm_medium=landing-page&utm_campaign=dados-abertos&utm_content=focos_brasil_rr_48h", function(data) {  
        var queimada = L.geoJson(data, {
          pointToLayer: function (geom, latlng) {
            return L.marker(latlng, {icon: fogo})
          },
          onEachFeature: function (geom, layer) {
            layer.bindPopup('<h6><b>Focos de Queimadas</b></h6><p><b>Longitude:</b> '+geom.properties.longitude+'<br><b>Latitude:</b> '+geom.properties.latitude+'<br><b>Município:</b> '+geom.properties.municipio+'<br><b>Dias sem Chuva:</b> '+geom.properties.numero_dias_sem_chuva+'<br><b>Precipitação:</b> '+geom.properties.precipitacao+'<br><b>Risco de Fogo:</b> '+geom.properties.risco_fogo+'<br><b>Bioma:</b> '+geom.properties.bioma+'</p>');
          },
          });

          groupLayQueimada.addLayer(queimada);
        })

        if(map.hasLayer(groupLayQueimada)){
          map.removeLayer(groupLayQueimada);
          }
          else {
          map.addLayer(groupLayQueimada);
          }
          var display = document.getElementById(el).style.display;
          if(display == "block"){
            document.getElementById(el).style.display = 'none';
          }else{
            document.getElementById(el).style.display = 'block';
          } 
        }

    </script>

  <script>

  var embarg = L.geoJSON(embarg, {
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
      }
  </script>

<script>
      var markers3 = L.markerClusterGroup();

      var ana = L.geoJSON(ana, {
        pointToLayer: function (geom, latlng) {
            return L.marker(latlng, {icon: blueIcon1});
        },
        onEachFeature: function (features, layer) {
          layer.bindPopup('<h6><b>Outorgas Emitidas pela ANA</b></h6><p><b>Domínio: </b>'+features.properties.tdm_ds+'<br><b>Latitude:</b> '+features.properties.int_nu_lat+'<br><b>Longitude:</b> '+features.properties.int_nu_lon+'<br><b>Município:</b> '+features.properties.ing_nm_mun+'<br><b>Tipo da Finalidade:</b> '+features.properties.tfn_ds+'</p>');
        }
      });
      markers3.addLayer(ana);

      function ana1(el){
        if(map.hasLayer(markers3)){
        map.removeLayer(markers3);
        }
        else {
        map.addLayer(markers3);
        }
        var display = document.getElementById(el).style.display;
        if(display == "block"){
          document.getElementById(el).style.display = 'none';
        }else{
          document.getElementById(el).style.display = 'block';
        } 
      }



      var markers4 = L.markerClusterGroup();

      var outSuper = L.geoJSON(outSuper, {
        pointToLayer: function (geom, latlng) {
            return L.marker(latlng, {icon: blueIcon2});
        },
        onEachFeature: function (features, layer) {
          layer.bindPopup('<h6><b>Outorgas Superficiais</b></h6><p><b>Situação: </b>'+features.properties.tsp_ds+'<br><b>Domínio:</b> '+features.properties.tdm_ds+'<br><b>Latitude:</b> '+features.properties.int_nu_lat+'<br><b>Longitude:</b> '+features.properties.int_nu_lon+'<br><b>Município:</b> '+features.properties.ing_nm_mun+'<br><b>Tipo da Finalidade:</b> '+features.properties.tfn_ds+'</p>');
        }
      });
      markers4.addLayer(outSuper);
      
      function outSuper1(el){
        if(map.hasLayer(markers4)){
        map.removeLayer(markers4);
        }
        else {
        map.addLayer(markers4);
        }
        var display = document.getElementById(el).style.display;
        if(display == "block"){
          document.getElementById(el).style.display = 'none';
        }else{
          document.getElementById(el).style.display = 'block';
        } 
      }


      var markers5 = L.markerClusterGroup();

      var outSub = L.geoJSON(outSub, {
        pointToLayer: function (geom, latlng) {
            return L.marker(latlng, {icon: MarromIcon});
        },
        onEachFeature: function (features, layer) {
          layer.bindPopup('<h6><b>Outorgas Subterrâneas</b></h6><p><b>Situação: </b>'+features.properties.tsp_ds+'<br><b>Domínio:</b> Estadual'+'<br><b>Latitude:</b> '+features.properties.int_nu_lat+'<br><b>Longitude:</b> '+features.properties.int_nu_lon+'<br><b>Município:</b> '+features.properties.ing_nm_mun+'<br><b>Tipo da Finalidade:</b> '+features.properties.tfn_ds+'</p>');
        }
      });
      markers5.addLayer(outSub);

      function outSub1(el){
        if(map.hasLayer(markers5)){
        map.removeLayer(markers5);
        }
        else {
        map.addLayer(markers5);
        }
        var display = document.getElementById(el).style.display;
        if(display == "block"){
          document.getElementById(el).style.display = 'none';
        }else{
          document.getElementById(el).style.display = 'block';
        } 
      }

    </script>

    <script>
      var alertas = L.geoJSON(mapBiomas, {
        color: "orange",
        onEachFeature: function (features, layer) {
          layer.bindPopup('<h6><b>MapBiomas - Alertas</b></h6><p><b>Código Alerta: </b>'+features.properties.codealerta+'<br><b>Fonte:</b> '+features.properties.fonte+'<br><b>Bioma:</b> '+features.properties.bioma+'<br><b>UF:</b> '+features.properties.estado+'<br><b>Município:</b> '+features.properties.municipio+'<br><b>Área:</b> '+features.properties.areaha.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.<br><b>Ano (Detecção):</b> '+features.properties.anodetec+'<br><b>Data (Detecção):</b> '+features.properties.datadetec+'<br><b>Data da Imagem Anterior:</b> '+features.properties.datimgant+'<br><b>Data da Imagem Posterior:</b> '+features.properties.dtimgdep+'<br><b>Publicação da Imagem:</b> '+features.properties.publimg+'<br><b>Vetor de Pressão:</b> '+features.properties.vpressao+'</p>');
        }
      });


      function alertas1(el){
        if(map.hasLayer(alertas)){
        map.removeLayer(alertas);
        }
        else {
        map.addLayer(alertas);
        }
        var display = document.getElementById(el).style.display;
        if(display == "block"){
          document.getElementById(el).style.display = 'none';
        }else{
          document.getElementById(el).style.display = 'block';
        } 
      }
    </script>

    <script>
          function removeAllLayer(id, id2, id3, el, li){
            map.removeLayer(areaImov);
            map.removeLayer(areaProjeto);
            map.removeLayer(areaUos);
            map.removeLayer(areaReq);
            map.removeLayer(monitor);
            map.removeLayer(areaInalienaveis);
            map.removeLayer(areaMilit);
            map.removeLayer(limiteTerraIndigena);
            map.removeLayer(undConserEst);
            map.removeLayer(undConserFed);
            map.removeLayer(sedesMunic);
            map.removeLayer(markers1);
            map.removeLayer(rodovia);
            map.removeLayer(hidrografia);
            map.removeLayer(hidroMasDagua);
            map.removeLayer(projAssent);
            map.removeLayer(glebas);
            map.removeLayer(minerAtivos);
            map.removeLayer(iphanSitArq);
            map.removeLayer(markers);
            map.removeLayer(groupLayQueimada);
            map.removeLayer(embarg);
            map.removeLayer(markers3);
            map.removeLayer(markers4);
            map.removeLayer(markers5);
            map.removeLayer(alertas);
            map.removeLayer(basemap);
            map.removeLayer(satelite);
            map.removeLayer(NatGeo);
            map.removeLayer(googleSat);
            map.removeLayer(googleStreets);
            map.removeLayer(googleHybrid);
            map.removeLayer(planet);
            map.addLayer(googleTerrain);
            map.addLayer(limitesMunic);

            while (id<27){
            var status = document.getElementById(id);
              if (status.checked) {
                status.checked = false;
              }
              id++;
              console.log(id);
            }
            var status1 = document.getElementById(id2);
            if (status1.checked) {
              status.checked = false;
            } else {
              status1.checked = true;
            }

            var status2 = document.getElementsByName(id3);
            for (var i = 0; i < status2.length; i++) {
            if (status2[i].id === "coor2") {
              status2[i].checked = true;
            }
            }
            console.log(li);
            
            var teste = document.getElementById(li).style.display;
            if(teste == "none"){
              document.getElementById(li).style.display = 'block';
            }

            var cont = 1;

            while(cont<33) {
            
              var res = el + cont;
              console.log(res);
              var display = document.getElementById(res).style.display;
              if(display == "block"){
                document.getElementById(res).style.display = 'none';
              }
              cont++;
            }

          }
    </script>

      <script>
      function men123(el, el1, el2){
          document.getElementById(el).style.display = 'none';
          document.getElementById(el1).style.display = 'block';
          document.getElementById(el2).style.display = 'none';
      }

      function men124(el, el1, el2){
          document.getElementById(el1).style.display = 'none';
          document.getElementById(el).style.display = 'block';
          document.getElementById(el2).style.display = 'none';
      }

      function men125(el, el1, el2){
          document.getElementById(el2).style.display = 'block';
          document.getElementById(el).style.display = 'none';
          document.getElementById(el1).style.display = 'none';
      }

      var groupLay1 = L.layerGroup([]);
      

      function addMarcador(){
        groupLay1.clearLayers();

        var latitude = document.getElementById('latitude').value;
        var longitude = document.getElementById('longitude').value;
        var vet = L.marker([latitude, longitude]);
        groupLay1.addLayer(vet);
        map.addLayer(groupLay1);
      }

      function removerTema(){
        map.removeLayer(groupLay1);
        document.getElementById('latitude').value = '';
        document.getElementById('longitude').value = '';
      }

      var groupLay = L.layerGroup([]);
        
        function cpf2(areaImovel1){
          groupLay.clearLayers();
        
        var cpf = document.getElementById('cpf').value;
        var cpf2 = cpf.replace('.', '');
        var cpf2 = cpf2.replace('.', '');
        var cpf2 = cpf2.replace('-', '');
        var cpf2 = cpf2.replace('/', '');

        var areaImo = L.geoJSON(areaImovel, {
          color: "red",
          fill: false,
          weight: "3",
          filter: function (features) {
              if(features.properties.cpf_cnpj !== null){
                  var cpf1 = features.properties.cpf_cnpj;
                  var cpf3 = cpf1.replace('.', '');
                  var cpf3 = cpf3.replace('.', '');
                  var cpf3 = cpf3.replace('-', '');
                  var cpf3 = cpf3.replace('/', '');
              }
              if (cpf3 === cpf2) return true
          },
          onEachFeature: function (geom, layer) {
            layer.bindPopup('<h6><b>Área do Imóvel</b></h6><p><b>Imóvel:</b> '+geom.properties.nome_imov+'<br><b>Município:</b> '+geom.properties.municip+'<br><b>Gleba:</b> '+geom.properties.gleba+'<br><b>CAR:</b> '+geom.properties.car+'<br><b>SIGEF:</b> '+geom.properties.sigef+'<br><b>Área:</b> '+geom.properties.area+' ha.</p>');
          }
        });

        map.fitBounds(areaImo.getBounds());  
        groupLay.addLayer(areaImo);
        map.addLayer(groupLay);

      }

      function removeCpf(){
        map.removeLayer(groupLay);
        document.getElementById('cpf').value = '';
        map.setView([latit, long], zm);
      }

      function removerTema1(){
        window. location. href = "https://intranet.femarh.com/siggarr/map.php";
      }

    </script>
    
    
    <script src="bootstrap/js/bootstrap.bundle.js"></script>
</html>


