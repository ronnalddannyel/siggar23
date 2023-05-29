<?php
session_start();
?>
<!DOCTYPE html>

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
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <link href="bootstrap/css/bootstrap.css" rel="stylesheet">
    <title>SIGGARR</title>

    <link rel="stylesheet" href="leaflet/leaflet.css" />  
    <script src="leaflet/leaflet.js"></script>
    <script src="https://unpkg.com/@ngageoint/leaflet-geopackage@2.0.5/dist/leaflet-geopackage.min.js"></script>
     
    <script src="src/L.Control.Layers.Tree.js"></script>
    <script src="https://rawgithub.com/ismyrnow/Leaflet.groupedlayercontrol/master/src/leaflet.groupedlayercontrol.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script type="text/javascript" src="leaflet.ajax.js"></script>

    <!--- Grades -->

    <script src="mapas/grade/cbers_cenas.geojson"></script>
    <script src="mapas/grade/cbers_grade.geojson"></script>
    <script src="mapas/grade/cbers4a_mux.geojson"></script>
    <script src="mapas/grade/cbers4a_wfi.geojson"></script>
    <script src="mapas/grade/landsat.geojson"></script>
    <script src="mapas/grade/liss_3.geojson"></script>
    <script src="mapas/grade/rapideye.geojson"></script>
    <script src="mapas/grade/sentinel_2.geojson"></script>
    <script src="mapas/grade/ibge_carta_100mil.geojson"></script>

    <!--- Áreas Licenciadas -->

    <script src="mapas/areasLicenciadas/areaImovel.geojson"></script>
    <script src="mapas/areasLicenciadas/areaProjeto.geojson"></script>
    <script src="mapas/areasLicenciadas/areaProjeto1.geojson"></script>
    <script src="mapas/areasLicenciadas/areaProjetoHist.geojson"></script>
    <script src="mapas/areasLicenciadas/monitoramento.geojson"></script>

    <script src="mapas/areasLicenciadas/areaImovel1.geojson"></script>

    <!--- Áreas Licenciadas 4mf -->

    <script src="mapas/Monitoramento_4mf1/areaImovel_4mf.geojson"></script>
    <script src="mapas/Monitoramento_4mf1/areaProjeto_4mf.geojson"></script>
    <script src="mapas/Monitoramento_4mf1/areaProjetoHist_4mf.geojson"></script>
    <script src="mapas/Monitoramento_4mf1/monitoramento_4mf.geojson"></script>

    <!--- Áreas Institucionais -->

    <script src="mapas/areasInstitucionais/areaInalienaveis.geojson"></script>
    <script src="mapas/areasInstitucionais/arMil.geojson"></script>
    <script src="mapas/areasInstitucionais/limiteTerraIndigena.geojson"></script>
    <script src="mapas/areasInstitucionais/ucs_estaduais.geojson"></script>
    <script src="mapas/areasInstitucionais/undConserFed.geojson"></script>

    <!--- Base Cartográfica -->

    <script src="mapas/baseCartografica/sedesMunicipais.geojson"></script>
    <script src="mapas/baseCartografica/localidades.geojson"></script>
    <script src="mapas/baseCartografica/limitesMunicipais.geojson"></script>
    <script src="mapas/baseCartografica/estadosLimites.geojson"></script>
    <script src="mapas/baseCartografica/rodovias.geojson"></script>
    <script src="mapas/baseCartografica/hidrografia2.geojson"></script>
    <script src="mapas/baseCartografica/hidroMassaDagua.geojson"></script>
    <script src="mapas/baseCartografica/projAssent.geojson"></script>
    <script src="mapas/baseCartografica/glebas.geojson"></script>

    <!--- Embargos e Autuação FEMARH -->

    <script src="mapas/femarhEmbargos/femarhEmbargos.geojson"></script>

    <!--- Agência Nacional de Mineração -->

    <script src="mapas/agenciaNacMiner/minerariosAtivos.geojson"></script>

    <!--- IBAMA -->

    <script src="mapas/IBAMA/embargos.geojson"></script>

    <!--- Outorgas de Recursos Hídricos -->

    <script src="mapas/ANA/ANA.geojson"></script>
    <script src="mapas/ANA/outorgas_superficiais.geojson"></script>
    <script src="mapas/ANA/outorgas_subterraneas.geojson"></script>

    <!--- IPHAN -->

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
                          
          <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel" >
            <div class="offcanvas-header" style="background-color: rgb(28, 132, 83);" id="menu">
              <img src="imagens/logo-femarh1.png"> 
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel" style="color:white">MENU</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <!--- Código - Abas -->

            <p style="padding: 0; margin: 0;">
              <input type="button" onclick="men124('dropd','dropd1','dropd2')" value="Mapas e Temas" style="min-width:33.87%;margin:  0 -4px 0 0;" id="remLay1">
              <input type="button" onclick="men123('dropd','dropd1','dropd2')" value="Consultas" style="min-width:33.87%; margin:  0 -4px  0 -4px;" id="remLay1">
              <input type="button" onclick="men125('dropd','dropd1','dropd2')" value="Informações" style="min-width:33.87%; margin:  0 0 0 -4px; " id="remLay1">
            </p>

            <!--- Código - Aba Mapas e Temas -->

            <div class="offcanvas-body" id="dropd">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
               <!-- <li><a class="home" href="teste.php" style="text-decoration: none;">HOME</a></li> -->
               <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      MAPAS
                    </a>
                    <ul class="dropdown-menu dropdown-menu">
                      <li><a id="coord">Mosaico Planet 04/2023 <input type="RADIO" name="op" onclick=" plan()" id="coor"></a></li>
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
                      GRADES
                    </a>
                    <ul class="dropdown-menu dropdown-menu">
                      <li><a id="coord"><img src="imagens/retangulo-arredondado-808080.png" style="max-width:20px;max-height:20px;"> IBGE CARTA 1:100.000 <a href=""><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="ibgeCart('teste33')" id="27"></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" ><img src="imagens/retangulo-arredondado-808080.png" style="max-width:20px;max-height:20px;"> CBERS 4A - MUX <a href=""><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="cbers4aMu('teste34')" id="28"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord"><img src="imagens/retangulo-arredondado-808080.png" style="max-width:20px;max-height:20px;"> CBERS 4A - WFI <a href=""><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="cbers4aWif('teste35')" id="29"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord"><img src="imagens/retangulo-arredondado-808080.png" style="max-width:20px;max-height:20px;"> CBERS - Cenas <a href=""><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="cbersCena('teste36')" id="30"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord"><img src="imagens/retangulo-arredondado-808080.png" style="max-width:20px;max-height:20px;"> CBERS <a href=""><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="cbersGr('teste37')" id="31"></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" ><img src="imagens/retangulo-arredondado-808080.png" style="max-width:20px;max-height:20px;"> Landsat <a href=""><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="landsa('teste38')" id="32"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord"><img src="imagens/retangulo-arredondado-808080.png" style="max-width:20px;max-height:20px;"> Liss 3 <a href=""><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="liss('teste39')" id="33"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord"><img src="imagens/retangulo-arredondado-808080.png" style="max-width:20px;max-height:20px;"> Rapideye <a href=""><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="rapidey('teste40')" id="34"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord"><img src="imagens/retangulo-arredondado-808080.png" style="max-width:20px;max-height:20px;"> Sentinel 2 <a href=""><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="sentinel('teste41')" id="35"></a></li>
                    </ul>
                </li>
                
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                      <li><a id="coord"><img src="imagens/retangulo-arredondado.png" style="max-width:20px;max-height:20px;"> Monitoramento<a href="Download/monitoramento.zip" download="Monitoramento" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="monit('teste26')" id="20"></a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      ÁREAS LICENCIADAS ATÉ 4 MÓDULOS FISCAIS
                    </a>
                    <ul class="dropdown-menu dropdown-menu">
                      <li><a id="coord"><img src="imagens/retangulo-arredondado.png" style="max-width:20px;max-height:20px;"> Área do Projeto <a href=""><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="areaProj_4mf('teste30')" id="24"></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" ><img src="imagens/retangulo-arredondado-blue.png" style="max-width:20px;max-height:20px;"> Área do Imóvel <a href=""><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="arImov_4mf('teste31')" id="25"></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord"><img src="imagens/retangulo-arredondado.png" style="max-width:20px;max-height:20px;"> Monitoramento<a href=""><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="monit_4mf('teste32')" id="26"></a></li>
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
               <!-- <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    MONITORAMENTO
                  </a>
                  <ul class="dropdown-menu dropdown-menu">
                    <li><a class="dropdown-item" href="#">CRSA</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">CSAVV</a></li>
                  </ul>
                </li> -->
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
                      <li><a id="coord" ><img src="imagens/retangulo-arredondado.png" style="max-width:20px;max-height:20px;"> Limites do Estado <a href=""><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" value="l" class="coor" onclick="estadosLimites1('lim1')" id="coor4" checked></a></li>
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
                    EMBARGOS E AUTUAÇÕES FEMARH
                  </a>
                  <ul class="dropdown-menu dropdown-menu">
                    <li><a id="coord"><img src="leaflet/images/pin-de-localizacao-azul.png" style="max-width:20px;max-height:20px;"> Embargos e Autuações FEMARH <a href=""><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="femarhEmbargos1('teste42')" id="36"></a></li>
                  </ul>
                </li>
    
                <!--
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      ZEE
                    </a>
                    <ul class="dropdown-menu dropdown-menu">
                      <li>
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Veg
                        </a>
                        <ul class="dropdown-menu dropdown-menu">

                        </ul>
                      </li>
                      <li><a id="coord" > Aptidão Agrícola <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="aptAgr1('teste44')" id="38"></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > biodivers_sistemas <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="bioDivSist1('teste45')" id="39"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > biodivers_veg_campos_dunas <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="bioDivVegCampDunas1('teste46')" id="40"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > biodivers_veg_floresta <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="bioDivVegFlor1('teste47')" id="41"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > biodivers_veg_lavrado <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="bioDivVegLavr1('teste48')" id="42"></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > biodivers_veg_sistemas_lacustres <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="bioDivVegSistLacust1('teste49')" id="43"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > geologia_dominios_morfo <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="geoDomMorfo1('teste50')" id="44"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > geologia_erosao <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="gepErosao1('teste51')" id="45"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > geologia_geologico <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="geoGeolog1('teste52')" id="46"></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > geologia_potencial_mineral <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="geoPotMineral1('teste53')" id="47"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > geomorfologia_unidades_geomorfo <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="geoUndGeomorfo1('teste54')" id="48"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > hidrografia_drenagem <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="hidDrenagem1('teste55')" id="49"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > hidrografia_ottobacias <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="hidOttobacias1('teste56')" id="50"></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > potencial_social_ambiental <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="potSocAmbiental1('teste57')" id="51"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > potencial_social_humano <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="potSocHumano1('teste58')" id="52"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > potencial_social_institucional <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="potSocInstitucional1('teste59')" id="53"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > potencial_social_produtivo <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="potSocProdutivo1('teste60')" id="54"></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > potencial_social <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="potSocial1('teste61')" id="55"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > solos <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="solos1('teste62')" id="56"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > vegetacao <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="vegetacao1('teste63')" id="57"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > vul_nat_perda_solo_2018 <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="vulNatPerdaSolo1('teste64')" id="58"></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > vul_nat_perda_solo_geologia_2018 <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="vulNatPerdaSoloGeologia1('teste65')" id="59"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > vul_nat_perda_solo_geomorfologia_2018 <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="vulNatPerdSoloGeomorfologia1('teste66')" id="60"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > vul_nat_perda_solo_vegetacao_2018 <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="vulNatPerdSoloVegetacao1('teste67')" id="61"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > vul_nat_perda_solo_zonaclima_2018 <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="vulNatPerdSoloZonaclima1('teste68')" id="62"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > zona_clima_clima_zee_2018 <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="zonaClimaClimaZee1('teste69')" id="63"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > zona_clima_concentracao_chuvas <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="zonaClimaConcChuvas1('teste70')" id="64"></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > zona_clima_isolinhas_chuvas <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="zonaClimaIsolChuvas1('teste71')" id="65"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > zona_clima_koppen <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="zonaClimaKoppen1('teste72')" id="66"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > zonas_subzona1_zup <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="zonasSubzonaZup1('teste73')" id="67"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > zonas_subzona2_zue <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="zonasSubzonaZue1('teste74')" id="68"></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > zonas_zona1_zup <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="zonasZonaZup1('teste75')" id="69"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > zonas_zona2_zue <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="zonasZonaZue1('teste76')" id="70"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" > zonas_zona3_zu <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="zonasZonaZu1('teste77')" id="71"></a></li>
                    </ul>
                </li>
    -->
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
                      <li><a id="coord"><img src="leaflet/images/pin-de-localizacao-azul1.png" style="max-width:20px;max-height:20px"> Outorgas Emitidas pela ANA <a href="Download/ana_user_corpo_hidrico_uniao.zip" download="Outorgas_emit_ANA" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="ana1('teste27')" id="21"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" ><img src="leaflet/images/pin-de-localizacao-azul3.png" style="max-width:20px;max-height:20px;"> Outorgas Superficiais <a href="Download/ana_user_corpo_hidrico_outorgas_superf.zip" download="Outorgas_Superficiais" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="outSuper1('teste28')" id="22"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" ><img src="leaflet/images/pin-de-localizacao-marrom.png" style="max-width:20px;max-height:20px;"> Outorgas Subterrâneas <a href="Download/ana_user_corpo_hidrico_outorgas_subter.zip" download="Outorgas_Subterraneas" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="outSub1('teste29')" id="23"></a></li>
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

              <!--- Código - Remover temas e camadas -->

              <p data-bs-dismiss="offcanvas" aria-label="Close">
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1" id="leg">Legenda</a>
              </p>

              <input class="btn btn-primary" type="button" onclick="removeAllLayer('1', 'coor3', 'coor4', 'op', 'teste', 'lim', 'lim1')"  value="Remover Temas" id="remLay">

              <img src="imagens/SIGARR3.png" class="d-none d-lg-block d-print-block" href="https://femarh.rr.gov.br/" id="fem1">

              <p>
                <a class="btn btn-primary" href="https://femarh.com/FemarhIntranet/SiggarrIntranet" role="button" id="leg1">LOGIN</a>
              </p>

            </div>

            <!--- Código - Aba Consultas -->

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

            <br><hr>

            <h5>Consulte por Coordenada</h5>

              <label for="latitude">Latitude</label>
              <input type="text" class="form-control" id="latitude" name="latitude" placeholder="ex. 0.0000000000000000">

              <label for="longitude">Longitude</label>
              <input type="text" class="form-control" id="longitude" name="longitude" placeholder="ex. -0.0000000000000000">

              <input type="submit" class="btn btn-primary" onclick="addMarcador()" value="Enviar" id="remLay">
              <input class="btn btn-primary" type="button" onclick="removerTema()"  value="Remover Marcador" id="remLay">



            <br><hr>
            

            <h5>Consulte por CPF/CNPJ</h5>

              <label for="cpf">CPF/CNPJ</label>
              <input type="text" class="form-control" id="cpf" name="cpf" placeholder="ex. xxxxxxxxxxx / xxxxxxxx/xxxx-xx">

              <input type="button" class="btn btn-primary" onclick="cpf2(areaImovel1)" value="Enviar" id="remLay">
              <input class="btn btn-primary" type="button" onclick="removeCpf()"  value="Remover tema" id="remLay">
              
              <img src="imagens/SIGARR3.png" class="d-none d-lg-block d-print-block" href="https://femarh.rr.gov.br/" id="fem1">

            </div>


            <!--- Código - Aba Informações -->

            <div class="offcanvas-body" id="dropd2">
              <p>O banco de dados que gera o sistema em questão ainda não possui todos os imóveis licenciados pela FEMARH, o mesmo tem atualização diária com a inserção de novos imóveis.</p>

             <hr>

              <h5>Avalie o SIGGARR</h5>
              <?php
              if(isset($_SESSION['msg'])){
                echo $_SESSION['msg']."<br><br>";
                unset($_SESSION['msg']);
              }
              ?>
              <form method="POST" action="processa.php" enctype="multipart/form-data">
                <div class="estrelas">
                  <input type="radio" id="vazio" name="estrela" value="" checked>
                  
                  <label for="estrela_um"><i class="fa"></i></label>
                  <input type="radio" id="estrela_um" name="estrela" value="1">
                  
                  <label for="estrela_dois"><i class="fa"></i></label>
                  <input type="radio" id="estrela_dois" name="estrela" value="2">
                  
                  <label for="estrela_tres"><i class="fa"></i></label>
                  <input type="radio" id="estrela_tres" name="estrela" value="3">
                  
                  <label for="estrela_quatro"><i class="fa"></i></label>
                  <input type="radio" id="estrela_quatro" name="estrela" value="4">
                  
                  <label for="estrela_cinco"><i class="fa"></i></label>
                  <input type="radio" id="estrela_cinco" name="estrela" value="5"><br><br>
                  
                  <input class="btn btn-primary" type="submit" value="Enviar" id="remLay1">
                  
                </div>
              </form>

              <img src="imagens/SIGARR3.png" class="d-none d-lg-block d-print-block" href="https://femarh.rr.gov.br/" id="fem1">


            </div>
            
          </div>
        </div>
        
      </nav>


      <!--- Código - Mapa -->
 
      <div id="map"></div>


      <!--- Código - Legenda das camadas -->

      <div class="row">
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample1">
            <div class="card card-body" >
              
              <h5 style="text-align:center;">LEGENDAS</h5>

              <div id="teste33">
                <img src="imagens/retangulo-arredondado-808080.png" style="max-width:20px;max-height:20px;"> IBGE CARTA 1:100.000
              </div>

              <div id="teste34">
                <img src="imagens/retangulo-arredondado-808080.png" style="max-width:20px;max-height:20px;"> CBERS 4A - MUX
              </div>

              <div id="teste35">
                <img src="imagens/retangulo-arredondado-808080.png" style="max-width:20px;max-height:20px;"> CBERS 4A - WFI
              </div>

              <div id="teste36">
                <img src="imagens/retangulo-arredondado-808080.png" style="max-width:20px;max-height:20px;"> CBERS - Cenas
              </div>

              <div id="teste37">
                <img src="imagens/retangulo-arredondado-808080.png" style="max-width:20px;max-height:20px;"> CBERS
              </div>

              <div id="teste38">
                <img src="imagens/retangulo-arredondado-808080.png" style="max-width:20px;max-height:20px;"> Landsat
              </div>

              <div id="teste39">
                <img src="imagens/retangulo-arredondado-808080.png" style="max-width:20px;max-height:20px;"> Liss 3
              </div>

              <div id="teste40">
                <img src="imagens/retangulo-arredondado-808080.png" style="max-width:20px;max-height:20px;"> Rapideye
              </div>

              <div id="teste41">
                <img src="imagens/retangulo-arredondado-808080.png" style="max-width:20px;max-height:20px;"> Sentinel 2
              </div>
              
              <div id="teste5">
                <img src="imagens/retangulo-arredondado.png" style="max-width:20px;max-height:20px;"> Área do Projeto
              </div>

              <div id="teste1">
                <img src="imagens/retangulo-arredondado-blue.png" style="max-width:20px;max-height:20px;"> Área do Imóvel
              </div>

              <div id="teste26">
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

              <div id="teste30">
                <img src="imagens/retangulo-arredondado.png" style="max-width:20px;max-height:20px;"> Área do Projeto (Até 4 Módulos Fiscais)
              </div>

              <div id="teste31">
                <img src="imagens/retangulo-arredondado-blue.png" style="max-width:20px;max-height:20px;"> Área do Imóvel (Até 4 Módulos Fiscais)
              </div>

              <div id="teste32">
                Monitoramento (Até 4 Módulos Fiscais) <br>
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

              <div id="lim1">
                <img src="imagens/retangulo-arredondado.png" style="max-width:20px;max-height:20px;"> Limites do Estado
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

              <div id="teste42">
                Embargos e Autuações FEMARH <br>
                <div style="margin-top: 8px;">
                  <img src="leaflet/images/pin-de-localizacao-amarelo.png" style="max-width:20px;max-height:20px;margin-left:15px;"> 2016
                </div>
                <div style="margin-top: 8px;">
                  <img src="leaflet/images/pin-de-localizacao-amarelo1.png" style="max-width:20px;max-height:20px;margin-left:15px;"> 2017
                </div>
                <div style="margin-top: 8px;">
                  <img src="leaflet/images/pin-de-localizacao-cinza.png" style="max-width:20px;max-height:20px;margin-left:15px;"> 2018
                </div>
                <div style="margin-top: 8px;">
                  <img src="leaflet/images/pin-de-localizacao-marrom1.png" style="max-width:20px;max-height:20px;margin-left:15px;"> 2019
                </div>
                <div style="margin-top: 8px;">
                  <img src="leaflet/images/pin-de-localizacao-roxo.png" style="max-width:20px;max-height:20px;margin-left:15px;"> 2020
                </div>
                <div style="margin-top: 8px;">
                  <img src="leaflet/images/pin-de-localizacao-verde.png" style="max-width:20px;max-height:20px;margin-left:15px;"> 2021
                </div>
                <div style="margin-top: 8px;">
                  <img src="leaflet/images/pin-de-localizacao-vermelho1.png" style="max-width:20px;max-height:20px;margin-left:15px;"> 2022
                </div>
                <div style="margin-top: 8px;">
                  <img src="leaflet/images/pin-de-localizacao-vermelho.png" style="max-width:20px;max-height:20px;margin-left:15px;"> 2023
                </div>
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

              <div id="teste27">
                <img src="leaflet/images/pin-de-localizacao-azul1.png" style="max-width:20px;max-height:20px"> Outorgas Emitidas pela ANA 
              </div>

              <div id="teste28">
                <img src="leaflet/images/pin-de-localizacao-azul3.png" style="max-width:20px;max-height:20px"> Outorgas Superficiais 
              </div>

              <div id="teste29">
                <img src="leaflet/images/pin-de-localizacao-marrom.png" style="max-width:20px;max-height:20px"> Outorgas Subterrâneas
              </div>

              <div id="teste25">
                <img src="leaflet/images/fogo.png" style="max-width:20px;max-height:20px"> Focos de Queimadas
              </div>


            </div>
          </div>
        </div>
      </div>

    </div>

    <!--- Código - Modal para mostrar detalhes da área do projeto e monitoramento -->

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


    <script>
      var UrlFemarh = "http://localhost/";
    </script>

    <!--- Código - Mostrar Área do Projeto Hist. -->

    <script src="mapas/funcoes/mostrarAreaProjHist.js"></script>

    <!--- Código - Mostrar Situação do Monitoramento e Licença de Autorização -->
    
    <script src="mapas/funcoes/mostrarSitMon.js"></script>

    <!-- Códigos dos mapas -->

    <script src="mapas/mapasCod.js"></script>

    <!-- Códigos para criar mapa -->

    <script src="mapa.js"></script>

    <!-- Códigos para ler arquivos geojson externo -->
              
    <script src="mapas/funcoes/file.js"></script>

    <!-- Códigos - Áreas Licenciadas -->

    <script src="mapas/areasLicenciadas/js/areasLicenciadas.js"></script>

    <!-- Códigos - Áreas Licenciadas até 4 Módulos Fiscais -->

    <script src="mapas/Monitoramento_4mf1/js/Mon_4mf.js"></script>

    <!-- Códigos - Áreas Institucionais -->

    <script src="mapas/areasInstitucionais/js/areasInstitucionais.js"></script>

    <!-- Códigos - Base Cartográfica -->

    <script src="mapas/baseCartografica/js/baseCartografica.js"></script>

    <!-- Códigos - femarhEmbargos -->

    <script src="mapas/femarhEmbargos/js/femarhEmbargos.js"></script>




    <!-- Códigos - biodivers_veg_sistemas_lacustres -->

    <script src="mapas/zee/js/biodivers_veg_sistemas_lacustres.js"></script>

    <!-- Códigos - geologia_dominios_morfo -->

    <script src="mapas/zee/js/geologia_dominios_morfo.js"></script>





    <!-- Códigos - aptidao_agricola -->

    <script src="mapas/zee/js/aptidao_agricola.js"></script>

    <!-- Códigos - biodivers_sistemas -->

    <script src="mapas/zee/js/biodivers_sistemas.js"></script>

    <!-- Códigos - biodivers_veg_campos_dunas -->

    <script src="mapas/zee/js/biodivers_veg_campos_dunas.js"></script>

    <!-- Códigos - biodivers_veg_floresta -->

    <script src="mapas/zee/js/biodivers_veg_floresta.js"></script>

    <!-- Códigos - biodivers_veg_lavrado -->

    <script src="mapas/zee/js/biodivers_veg_lavrado.js"></script>

    <!-- Códigos - geologia_erosao -->

    <script src="mapas/zee/js/geologia_erosao.js"></script>

    <!-- Códigos - geologia_geologico -->

    <script src="mapas/zee/js/geologia_geologico.js"></script>

    <!-- Códigos - geologia_potencial_mineral -->

    <script src="mapas/zee/js/geologia_potencial_mineral.js"></script>

    <!-- Códigos - geomorfologia_unidades_geomorfo -->

    <script src="mapas/zee/js/geomorfologia_unidades_geomorfo.js"></script>

    <!-- Códigos - hidrografia_drenagem -->

    <script src="mapas/zee/js/hidrografia_drenagem.js"></script>

    <!-- Códigos - hidrografia_ottobacias -->

    <script src="mapas/zee/js/hidrografia_ottobacias.js"></script>

    <!-- Códigos - potencial_social_ambiental -->

    <script src="mapas/zee/js/potencial_social_ambiental.js"></script>

    <!-- Códigos - potencial_social_humano -->

    <script src="mapas/zee/js/potencial_social_humano.js"></script>

    <!-- Códigos - potencial_social_institucional -->

    <script src="mapas/zee/js/potencial_social_institucional.js"></script>

    <!-- Códigos - potencial_social_produtivo -->

    <script src="mapas/zee/js/potencial_social_produtivo.js"></script>

    <!-- Códigos - potencial_social -->

    <script src="mapas/zee/js/potencial_social.js"></script>

    <!-- Códigos - solos -->

    <script src="mapas/zee/js/solos.js"></script>

    <!-- Códigos - vegetacao -->

    <script src="mapas/zee/js/vegetacao.js"></script>

    <!-- Códigos - vul_nat_perda_solo_2018 -->

    <script src="mapas/zee/js/vul_nat_perda_solo_2018.js"></script>

    <!-- Códigos - vul_nat_perda_solo_geologia_2018 -->

    <script src="mapas/zee/js/vul_nat_perda_solo_geologia_2018.js"></script>

    <!-- Códigos - vul_nat_perda_solo_geomorfologia_2018 -->

    <script src="mapas/zee/js/vul_nat_perda_solo_geomorfologia_2018.js"></script>

    <!-- Códigos - vul_nat_perda_solo_vegetacao_2018 -->

    <script src="mapas/zee/js/vul_nat_perda_solo_vegetacao_2018.js"></script>

    <!-- Códigos - vul_nat_perda_solo_zonaclima_2018 -->

    <script src="mapas/zee/js/vul_nat_perda_solo_zonaclima_2018.js"></script>

    <!-- Códigos - zona_clima_clima_zee_2018 -->

    <script src="mapas/zee/js/zona_clima_clima_zee_2018.js"></script>

    <!-- Códigos - zona_clima_concentracao_chuvas -->

    <script src="mapas/zee/js/zona_clima_concentracao_chuvas.js"></script>

    <!-- Códigos - zona_clima_isolinhas_chuvas -->

    <script src="mapas/zee/js/zona_clima_isolinhas_chuvas.js"></script>

    <!-- Códigos - zona_clima_koppen -->

    <script src="mapas/zee/js/zona_clima_koppen.js"></script>

    <!-- Códigos - zonas_subzona1_zup -->

    <script src="mapas/zee/js/zonas_subzona1_zup.js"></script>

    <!-- Códigos - zonas_subzona2_zue -->

    <script src="mapas/zee/js/zonas_subzona2_zue.js"></script>

    <!-- Códigos - zonas_zona1_zup -->

    <script src="mapas/zee/js/zonas_zona1_zup.js"></script>

    <!-- Códigos - zonas_zona2_zue -->

    <script src="mapas/zee/js/zonas_zona2_zue.js"></script>

    <!-- Códigos - zonas_zona3_zu -->

    <script src="mapas/zee/js/zonas_zona3_zu.js"></script>






    <!-- Códigos - Consultar Imóvel por CPF na URL -->

    <script src="mapas/funcoes/urlImovel.js"></script>

    <!-- Códigos - Agência Nacional de Mineração -->

    <script src="mapas/agenciaNacMiner/js/agenciaNacMiner.js"></script>

    <!-- Códigos - IPHAN -->

    <script src="mapas/IPHAN/js/IPHAN.js"></script>

    <!-- Códigos - IBAMA -->

    <script src="mapas/IBAMA/js/IBAMA.js"></script>

    <!-- Códigos - Outorga de Recursos Hídricos -->

    <script src="mapas/ANA/js/ANA.js"></script>

    <!-- Códigos - INPE -->

    <script src="mapas/INPE/js/INPE.js"></script>

    <!-- Códigos - Remover Temas -->

    <script src="mapas/funcoes/removerTemas.js"></script>

    <!-- Códigos - Sub Menu (NavBar) -->

    <script src="mapas/funcoes/legendaMenu.js"></script>

    <!-- Códigos - Consultar Imóvel por CPF -->

    <script src="mapas/funcoes/consultaCpf.js"></script>

    <!-- Códigos - Consultar Marcador por Coordenada -->
    
    <script src="mapas/funcoes/consultaMarc.js"></script>

    <!-- Códigos - Grades -->
    
    <script src="mapas/grade/js/grade.js"></script>








    
    <script src="bootstrap/js/bootstrap.bundle.js"></script>
</html>


