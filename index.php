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



    <!--<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script> 
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>-->
    <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
    <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
    <script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
    <script src="https://npmcdn.com/@turf/turf/turf.min.js"></script>
      <!-- Load Esri Leaflet from CDN -->
    <script src="https://unpkg.com/esri-leaflet@2.2.1/dist/esri-leaflet.js"
      integrity="sha512-6BBVttv13OVrrUSoGmy9/aIVHateyIEGFaQxqnzCgXT9LNCAQ1Cxxj43R6Eq0ynydS7a7bLLfmEWwXFiO6lW2g=="
      crossorigin=""></script>

    <link rel="stylesheet" href="./mapas/CAR/pesquisaCar.css" />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.js"></script>

    <script>
      var queiFeat;
    </script>

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
    <script src="mapas/areasLicenciadas/areaUos.geojson"></script>
    <script src="mapas/areasLicenciadas/areaImovel1.geojson"></script>

    <!--- Áreas Licenciadas 4mf -->

    <script src="mapas/Monitoramento_4mf1/areaImovel_4mf.geojson"></script>
    <script src="mapas/Monitoramento_4mf1/areaProjeto_4mf.geojson"></script>
    <script src="mapas/Monitoramento_4mf1/areaProjetoHist_4mf.geojson"></script>
    <script src="mapas/Monitoramento_4mf1/monitoramento_4mf.geojson"></script>
    <script src="mapas/Monitoramento_4mf1/areaUos_4mf.geojson"></script>

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

    <script src="mapas/IBAMA/Ibama_embargo.json"></script>

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

    <script src="./leaflet/proj4-compressed.js"></script>
    <script src="./leaflet/proj4leaflet.js"></script>

    <script src="leaflet/L.KML.js"></script>

    <script type="text/javascript" src="./FileSaver.min.js"></script>

    <!--- CAR -->

    <script src="mapas/CAR/car1.geojson"></script>

    <script src="mapas/funcoes/pesquisaCar.js"></script>

    <!-- GeoRaster -->


    <script src="https://unpkg.com/browse/whatwg-fetch@3.2.0/dist/fetch.umd.js"></script>
    <script src="https://unpkg.com/georaster"></script>
    <script src="https://unpkg.com/georaster-layer-for-leaflet"></script>

    <!-- ShapeFile -->

    <script src="leaflet/leaflet.shpfile.js"></script>
    <script src="leaflet/shp.js"></script>

    <!--- PRINT -->

    <script src="leaflet/bundle.js"></script>

    <!--- Botão -->

    <link rel="stylesheet" href="leaflet/easy-button.css">
    <script src="leaflet/easy-button.js"></script>

    <!--- Leaflet Omnivore -->

    <script src='//api.tiles.mapbox.com/mapbox.js/plugins/leaflet-omnivore/v0.3.1/leaflet-omnivore.min.js'></script>

    
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
                      <b>MAPAS</b>  
                    </a>
                    <ul class="dropdown-menu dropdown-menu">
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
                      <li><a id="coord">ESRI National Geographic <input type="RADIO" name="op" onclick="nGeo()" id="coor"></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord">OSM Standard <input type="RADIO" name="op" onclick="basm()" id="coor"></a></li>
                    </ul>
                </li>
               <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <b>IMAGENS</b>  
                    </a>
                    <ul class="dropdown-menu dropdown-menu" style="border: none; padding-left: 10px; margin-top: -10px;">
                      <li>
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Landsat 2008
                        </a>
                        <ul class="dropdown-menu dropdown-menu">
                          <li><a id="coord">231-057_07/09/2008 <input type="checkbox" class="coor" value="l" onclick="raste6()" id="55"></a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                          <li><a id="coord">231-058_07/09/2008 <input type="checkbox" class="coor" value="l" onclick="raste5()" id="56"></a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                          <li><a id="coord">231-059_27/01/2008 <input type="checkbox" class="coor" value="l" onclick="raste7()" id="57"></a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                          <li><a id="coord">231-059_21/07/2008 <input type="checkbox" class="coor" value="l" onclick="raste1()" id="58"></a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                          <li><a id="coord">231-059_06/08/2008 <input type="checkbox" class="coor" value="l" onclick="raste8()" id="59"></a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                          <li><a id="coord">231-060_21/07/2008 <input type="checkbox" class="coor" value="l" onclick="raste3()" id="60"></a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                          <li><a id="coord">231-060_06/08/2008 <input type="checkbox" class="coor" value="l" onclick="raste9()" id="61"></a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                          <li><a id="coord">232-057_09/05/2008 <input type="checkbox" class="coor" value="l" onclick="raste10()" id="62"></a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                          <li><a id="coord">232-058_07/04/2008 <input type="checkbox" class="coor" value="l" onclick="raste()" id="63"></a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                          <li><a id="coord">232-059_07/04/2008 <input type="checkbox" class="coor" value="l" onclick="raste2()" id="64"></a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                          <li><a id="coord">232-060_07/04/2008 <input type="checkbox" class="coor" value="l" onclick="raste4()" id="65"></a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                          <li><a id="coord">233-057_21/09/2008 <input type="checkbox" class="coor" value="l" onclick="raste12()" id="66"></a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                          <li><a id="coord">233-058_23/10/2008 <input type="checkbox" class="coor" value="l" onclick="raste13()" id="67"></a></li>
                        </ul>
                      </li>
                      <li>
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Satélites
                        </a>
                        <ul class="dropdown-menu dropdown-menu">

                          <li><a id="coord">Google Satélite <input type="RADIO" name="op" onclick=" gSat()" id="coor"></a></li>
                          <li>
                              <hr class="dropdown-divider">
                          </li>
                          <li><a id="coord">ESRI Satellite <input type="RADIO" name="op" onclick="sat()" id="coor"></a></li>
                          <li>
                              <hr class="dropdown-divider">
                          </li>
                          <li>
                            <a style="">
                            
                            <div style="margin-top: 0; padding-left: 10px;">
                            <p style="float: left; padding-right: 10px;">Mosaico Planet: </p> 
                            <p id="resultado1">2024_01</p></div>

                            
                            <input type="RADIO" class="MosPlan" name="op" onclick=" mudaNum('1')" id="coor5">
                            <br><br>
                            <p style="padding-left: 10px;">
                              Fonte: Planet <br>
                              Selecione o período abaixo:
                            </p>

                            
                            <div class="slider">

                              <input type="range" id="fader"  min="1" max="96" value="96" list="volsettings" oninput = "mudaNum('2')">
                              <datalist id="volsettings">
                                <option>1</option>
                                <option>13</option>
                                <option>24</option>
                                <option>36</option>
                                <option>48</option>
                                <option>60</option>
                                <option>72</option>
                                <option>84</option>
                                <option>96</option>
                              </datalist>
                              
                            </div>
                            </a>
                          </li>

                        </ul>
                      </li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <b>GRADES</b>  
                    </a>
                    <ul class="dropdown-menu dropdown-menu">
                      <li><a id="coord"><img src="imagens/retangulo-arredondado-808080.png" style="max-width:20px;max-height:20px;"> IBGE CARTA 1:100.000 <a href="Download/ibge_carta_100mil.zip" download="ibge_carta_100mil" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="ibgeCart('teste33')" id="27"></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" ><img src="imagens/retangulo-arredondado-808080.png" style="max-width:20px;max-height:20px;"> CBERS 4A - MUX <a href="Download/cbers4a_mux.zip" download="cbers4a_mux" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="cbers4aMu('teste34')" id="28"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord"><img src="imagens/retangulo-arredondado-808080.png" style="max-width:20px;max-height:20px;"> CBERS 4A - WFI <a href="Download/cbers4a_wfi.zip" download="cbers4a_wfi" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="cbers4aWif('teste35')" id="29"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord"><img src="imagens/retangulo-arredondado-808080.png" style="max-width:20px;max-height:20px;"> CBERS - Cenas <a href="Download/cbers_cenas.zip" download="cbers_cenas" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="cbersCena('teste36')" id="30"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord"><img src="imagens/retangulo-arredondado-808080.png" style="max-width:20px;max-height:20px;"> CBERS <a href="Download/cbers_grade.zip" download="cbers_grade" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="cbersGr('teste37')" id="31"></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" ><img src="imagens/retangulo-arredondado-808080.png" style="max-width:20px;max-height:20px;"> Landsat <a href="Download/landsat.zip" download="landsat" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="landsa('teste38')" id="32"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord"><img src="imagens/retangulo-arredondado-808080.png" style="max-width:20px;max-height:20px;"> Liss 3 <a href="Download/liss_3.zip" download="liss_3" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="liss('teste39')" id="33"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord"><img src="imagens/retangulo-arredondado-808080.png" style="max-width:20px;max-height:20px;"> Rapideye <a href="Download/rapideye.zip" download="rapideye" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="rapidey('teste40')" id="34"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord"><img src="imagens/retangulo-arredondado-808080.png" style="max-width:20px;max-height:20px;"> Sentinel 2 <a href="Download/sentinel_2.zip" download="sentinel_2" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="sentinel('teste41')" id="35"></a></li>
                    </ul>
                </li>
                
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <b>ÁREAS LICENCIADAS</b>  
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
                      <li><a id="coord"><img src="imagens/retangulo-arredondado-325f5f.png" style="max-width:20px;max-height:20px;"> Área de Uso e Ocupação do Solo<a href="Download/auos.zip" download="Area_UOS" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="arUos('teste42')" id="36"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord"><img src="imagens/retangulo-arredondado.png" style="max-width:20px;max-height:20px;"> Monitoramento<a href="Download/monitoramento.zip" download="Monitoramento" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="monit('teste26')" id="20"></a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <b>ÁREAS LICENCIADAS ATÉ 4 MÓDULOS FISCAIS</b>  
                    </a>
                    <ul class="dropdown-menu dropdown-menu">
                      <li><a id="coord"><img src="imagens/retangulo-arredondado.png" style="max-width:20px;max-height:20px;"> Área do Projeto <a href="Download/ap_4mf.zip" download="ap_4mf" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="areaProj_4mf('teste30')" id="24"></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" ><img src="imagens/retangulo-arredondado-blue.png" style="max-width:20px;max-height:20px;"> Área do Imóvel <a href="Download/ati_4mf.zip" download="ati_4mf" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="arImov_4mf('teste31')" id="25"></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord"><img src="imagens/retangulo-arredondado-325f5f.png" style="max-width:20px;max-height:20px;"> Área de Uso e Ocupação do Solo<a href="Download/auos_4mf.zip" download="auos_4mf" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="arUos_4mf('teste43')" id="37"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord"><img src="imagens/retangulo-arredondado.png" style="max-width:20px;max-height:20px;"> Monitoramento<a href="Download/monitoramento_4mf.zip" download="monitoramento_4mf" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="monit_4mf('teste32')" id="26"></a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <b>ÁREAS INSTITUCIONAIS</b>  
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
                      <b>BASE CARTOGRÁFICA</b>  
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
                      <li><a id="coord" ><img src="imagens/retangulo-arredondado.png" style="max-width:20px;max-height:20px;"> Limites do Estado <a href="Download/estado_limites.zip" download="estado_limites" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" value="l" class="coor" onclick="estadosLimites1('lim1')" id="coor4" checked></a></li>
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
                    <b>CAR</b>  
                  </a>
                  <ul class="dropdown-menu dropdown-menu">
                    <li><a id="coord"><img src="imagens/zee/retangulo-arredondado-e600a9.png" style="max-width:20px;max-height:20px;"> CAR-RR <a href="Download/car_rr.zip" download="CAR-RR" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="car1('teste60')" id="54"></a></li>
                  </ul>
                </li>
                <!--
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    EMBARGOS E AUTUAÇÕES FEMARH
                  </a>
                  <ul class="dropdown-menu dropdown-menu">
                    <li><a id="coord"><img src="leaflet/images/pin-de-localizacao-azul.png" style="max-width:20px;max-height:20px;"> Embargos e Autuações FEMARH <a href="Download/femarh_embargos.zip" download="femarh_embargos" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="femarhEmbargos1('teste44')" id="38"></a></li>
                  </ul>
                </li>
    -->
                
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <b>AUTORIZAÇÃO DE USO CONTROLADO DO FOGO</b>  
                  </a>
                  <ul class="dropdown-menu dropdown-menu">
                    <li><a id="coord"><img src="leaflet/images/symbole-de-feu-rouge.png" style="width:20px;max-height:20px;"> 2023 <a href="Download/controle_queimadas_2023.zip" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="controleQueimadas('teste59')" id="53"></a></li>
                    <li>
                          <hr class="dropdown-divider">
                    </li>
                    <li><a id="coord"><img src="leaflet/images/symbole-de-feu-rouge.png" style="width:20px;max-height:20px;"> 2024 <a href="Download/controle_queimadas_2024.zip" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="controleQueimadas2('teste63')" id="70"></a></li>
                  </ul>
                </li>

                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <b>ITERAIMA</b>  
                    </a>
                    <ul class="dropdown-menu dropdown-menu">
                      <li><a id="coord" ><img src="imagens/zee/retangulo-arredondado-835acb.png" style="max-width:20px;max-height:20px;"> Sigef Certificados <a href="" ><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="sigefCert('teste57')" id="51"></a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" ><img src="imagens/zee/retangulo-arredondado-e1b053.png" style="max-width:20px;max-height:20px;"> Iteraima - Títulos Definitivos <a href="" ><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="iterTd('teste58')" id="52"></a></li>
                    </ul>
                </li>
<!--
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      PROPOSTAS DE AMPLIAÇÃO ICMBIO
                    </a>
                    <ul class="dropdown-menu dropdown-menu">
                      <li><a id="coord" ><img src="imagens/zee/retangulo-arredondado-f57a7a.png" style="max-width:20px;max-height:20px;"> Cadastro Digital de Propriedades <a href="" ><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="cadDigProp('teste62')" id="56"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" ><img src="imagens/zee/retangulo-arredondado-ffffbe.png" style="max-width:20px;max-height:20px;"> ESEC Maracá - Proposta Ampliação <a href="" ><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="icmbioEsec('teste63')" id="57"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" ><img src="imagens/zee/retangulo-arredondado-a80000.png" style="max-width:20px;max-height:20px;"> FLONA Parima - Proposta <a href="" ><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="icmbioFlona('teste61')" id="55"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" ><img src="imagens/zee/retangulo-arredondado-73ffdf.png" style="max-width:20px;max-height:20px;"> PARNA Viruá - Proposta Ampliação <a href="" ><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="icmbioParna('teste62')" id="56"></a></li>
                    </ul>
                </li>
    -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <b>ZEE</b>  
                    </a>
                    <ul class="dropdown-menu dropdown-menu" style="border: none; padding-left: 10px; margin-top: -10px;">
                      <li>
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          APTIDÃO AGRÍCOLA
                        </a>
                        <ul class="dropdown-menu dropdown-menu">

                          <li><a id="coord" ><img src="imagens/retangulo-arredondado.png" style="max-width:20px;max-height:20px;"> Aptidão Agrícola <a href="Download/aptidao_agricola.zip" download="aptidao_agricola" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="aptAgr1('teste44')" id="38"></a></li>
                        
                        </ul>
                      </li>

                      <li>
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          BIODIVERSIDADE
                        </a>
                        <ul class="dropdown-menu dropdown-menu">

                          <li><a id="coord" ><img src="imagens/retangulo-arredondado.png" style="max-width:20px;max-height:20px;"> Sistemas <a href="Download/biodivers_sistemas.zip" download="biodivers_sistemas" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="bioDivSist1('teste45')" id="39"></a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                          <li><a id="coord" ><img src="imagens/zee/retangulo-arredondado-b35a2b.png" style="max-width:20px;max-height:20px;"> Vegetação (Campos/Dunas) <a href="Download/biodivers_veg_campos_dunas.zip" download="biodivers_veg_campos_dunas" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="bioDivVegCampDunas1('teste46')" id="40"></a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                          <li><a id="coord" ><img src="imagens/zee/retangulo-arredondado-42963f.png" style="max-width:20px;max-height:20px;"> Vegetação (Floresta) <a href="Download/biodivers_veg_floresta.zip" download="biodivers_veg_floresta" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="bioDivVegFlor1('teste47')" id="41"></a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                          <li><a id="coord" ><img src="imagens/zee/retangulo-arredondado-66e661.png" style="max-width:20px;max-height:20px;"> Vegetação (Lavrado) <a href="Download/biodivers_veg_lavrado.zip" download="biodivers_veg_lavrado" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="bioDivVegLavr1('teste48')" id="42"></a></li>
                          <li>
                              <hr class="dropdown-divider">
                          </li>
                          <li><a id="coord" ><img src="imagens/zee/retangulo-arredondado-48a9f2.png" style="max-width:20px;max-height:20px;"> Vegetação (Sistemas Lacustres) <a href="Download/biodivers_veg_sistemas_lacustres.zip" download="biodivers_veg_sistemas_lacustres" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="bioDivVegSistLacust1('teste49')" id="43"></a></li>

                        </ul>
                      </li>

                      <li>
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          GEOLOGIA
                        </a>
                        <ul class="dropdown-menu dropdown-menu">

                          <li><a id="coord" ><img src="imagens/retangulo-arredondado.png" style="max-width:20px;max-height:20px;"> Domínios Morfológicos <a href="Download/geologia_dominios_morfo.zip" download="geologia_dominios_morfo" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="geoDomMorfo1('teste50')" id="44"></a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                          <li><a id="coord" ><img src="imagens/retangulo-arredondado.png" style="max-width:20px;max-height:20px;"> Erosão <a href="Download/geologia_erosao.zip" download="geologia_erosao" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="gepErosao1('teste51')" id="45"></a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                          <li><a id="coord" ><img src="imagens/retangulo-arredondado.png" style="max-width:20px;max-height:20px;"> Geológico <a href="Download/geologia_geologico.zip" download="geologia_geologico" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="geoGeolog1('teste54')" id="48"></a></li>
                       <!--   <li>
                              <hr class="dropdown-divider">
                          </li>
                          <li><a id="coord" > Potencial Mineral <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="geoPotMineral1('teste53')" id="47"></a></li>
    -->
                        </ul>
                      </li>

                      <li>
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          GEOMORFOLOGIA
                        </a>
                        <ul class="dropdown-menu dropdown-menu">

                          <li><a id="coord" ><img src="imagens/retangulo-arredondado.png" style="max-width:20px;max-height:20px;"> Geomorfológia <a href="Download/geomorfologia_unidades_geomorfo.zip" download="geomorfologia_unidades_geomorfo" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="geoUndGeomorfo1('teste52')" id="46"></a></li>
                        
                        </ul>
                      </li>

                      <li>
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          HIDROGRAFIA
                        </a>
                        <ul class="dropdown-menu dropdown-menu">

                          <li><a id="coord" ><img src="imagens/zee/retangulo-arredondado-01aaff.png" style="max-width:20px;max-height:20px;"> Drenagem <a href="Download/hidrografia_drenagem.zip" download="hidrografia_drenagem" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="hidDrenagem1('teste55')" id="49"></a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                          <li><a id="coord" ><img src="imagens/retangulo-arredondado.png" style="max-width:20px;max-height:20px;"> Ottobacias <a href="Download/hidrografia_ottobacias.zip" download="hidrografia_ottobacias" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="hidOttobacias1('teste56')" id="50"></a></li>

                        </ul>
                      </li>
<!--
                      <li>
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          POTENCIAL SOCIAL
                        </a>
                        <ul class="dropdown-menu dropdown-menu">

                          <li><a id="coord" > Potencial Social Ambiental <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="potSocAmbiental1('teste57')" id="51"></a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                          <li><a id="coord" > Potencial Social Humano <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="potSocHumano1('teste58')" id="52"></a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                          <li><a id="coord" > Potencial Social Institucional <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="potSocInstitucional1('teste59')" id="53"></a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                          <li><a id="coord" > Potencial Social Produtivo <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="potSocProdutivo1('teste60')" id="54"></a></li>
                          <li>
                              <hr class="dropdown-divider">
                          </li>
                          <li><a id="coord" > Potencial Social <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="potSocial1('teste61')" id="55"></a></li>

                        </ul>
                      </li>
    -->
                      <li>
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          SOLOS
                        </a>
                        <ul class="dropdown-menu dropdown-menu">

                          <li><a id="coord" ><img src="imagens/retangulo-arredondado.png" style="max-width:20px;max-height:20px;"> Solos <a href="Download/solos.zip" download="solos" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="solos1('teste53')" id="47"></a></li>

                        </ul>
                      </li>
<!--
                      <li>
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          VEGETAÇÃO
                        </a>
                        <ul class="dropdown-menu dropdown-menu">

                        <li><a id="coord" > Vegetação <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="vegetacao1('teste63')" id="57"></a></li>

                        </ul>
                      </li>

                      <li>
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          VULNERABILIDADE SOCIAL
                        </a>
                        <ul class="dropdown-menu dropdown-menu">

                          <li><a id="coord" > Perda Solo (2018) <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="vulNatPerdaSolo1('teste64')" id="58"></a></li>
                          <li>
                              <hr class="dropdown-divider">
                          </li>
                          <li><a id="coord" > Perda Solo - Geologia (2018) <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="vulNatPerdaSoloGeologia1('teste65')" id="59"></a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                          <li><a id="coord" > Perda Solo - Geomorfologia (2018) <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="vulNatPerdSoloGeomorfologia1('teste66')" id="60"></a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                          <li><a id="coord" > Perda Solo - Vegetação (2018) <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="vulNatPerdSoloVegetacao1('teste67')" id="61"></a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                          <li><a id="coord" > Perda Solo - Zona Climática (2018) <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="vulNatPerdSoloZonaclima1('teste68')" id="62"></a></li>

                        </ul>
                      </li>

                      <li>
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          ZONAS CLIMÁTICAS
                        </a>
                        <ul class="dropdown-menu dropdown-menu">

                          <li><a id="coord" > Clima (2018) <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="zonaClimaClimaZee1('teste69')" id="63"></a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                          <li><a id="coord" > Concentração de Chuvas <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="zonaClimaConcChuvas1('teste70')" id="64"></a></li>
                          <li>
                              <hr class="dropdown-divider">
                          </li>
                          <li><a id="coord" > Isolinhas Chuvas <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="zonaClimaIsolChuvas1('teste71')" id="65"></a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                          <li><a id="coord" > Kroppen <a><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="zonaClimaKoppen1('teste72')" id="66"></a></li>

                        </ul>
                      </li>

                      <li>
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          ZONAS
                        </a>
                        <ul class="dropdown-menu dropdown-menu">

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
                    </ul>
                </li>
    
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <b>AGÊNCIA NACIONAL DE MINERAÇÃO</b>  
                    </a>
                    <ul class="dropdown-menu dropdown-menu">
                      <li><a id="coord"><img src="imagens/retangulo-arredondado-blue.png" style="max-width:20px;max-height:20px;"> Minerarios Ativos <a href="Download/anm_minerarios_ativos.zip" download="Minerarios_Ativos" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="minAtivos('teste16')" id="15"></a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <b>IPHAN</b>  
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
                      <b>IBAMA</b>  
                    </a>
                    <ul class="dropdown-menu dropdown-menu">
                      <li><a id="coord"><img src="imagens/retangulo-arredondado-red.png" style="max-width:20px;max-height:20px;"> Embargos <a href="Download/ibama_embargos.zip" download="Ibama_Embargos" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="emb('teste10')" id="19"></a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <b>OUTORGA DE RECURSOS HÍDRICOS</b>  
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
                      <b>DGPH/DRHI</b>  
                    </a>
                    <ul class="dropdown-menu dropdown-menu">
                      <li><a id="coord" ><img src="leaflet/images/pin-de-localizacao-azul.png" style="max-width:20px;max-height:20px;"> Qualidade da Água <a href="Download/qa.zip" download="Qualidade_agua" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="qa1('teste61')" id="68"></a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a id="coord" ><img src="leaflet/images/pin-de-localizacao-vermelho.png" style="max-width:20px;max-height:20px"> Estação Telemétrica <a href="Download/estacao_met.zip" download="Estacao_tel" target="_blank"><img src="imagens/downloadnuvem.png" id="coor1"></a><input type="checkbox" class="coor" value="l" onclick="Estacao_met1('teste62')" id="69"></a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <b>INPE</b>  
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
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="true" aria-controls="multiCollapseExample1" id="leg">Legenda</a>
              </p>

              <input class="btn btn-primary" type="button" onclick="removeAllLayer('1', 'coor3', 'coor4', 'op', 'teste', 'lim', 'lim1')"  value="Remover Temas" id="remLay">

              <img src="imagens/SIGARR3.png" class="d-none d-lg-block d-print-block" href="https://femarh.rr.gov.br/" id="fem1">

              <p>
                <a class="btn btn-primary" href="https://femarh.com/FemarhIntranet/SiggarrIntranet" role="button" id="leg1">LOGIN</a>
              </p>

            </div>

            <!--- Código - Aba Consultas -->

            <div class="offcanvas-body" id="dropd1">





            <div class="accordion" id="accordionExample">



                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                     <b>Consulte por Arquivo (Json/GeoJson - GEO)</b> 
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">

                    <div>
                       <a href="https://ogre.adc4gis.com/" style="float:left; margin-left:5px" target="_blank"><abbr title="Transforme seu arquivo shape em Json"><i class="bi bi-info-square"></abbr></i></a>
                    </div>
                    <input type="file" id="arquivo" class="form-control">
                    <input class="btn btn-primary" type="button" onclick="removerLayJson()"  value="Limpar" id="remLay"> 

                    </div>
                  </div>
                </div>





                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                     <b>Consulte por Arquivo (Json/GeoJson - UTM)</b>   
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">


                    <div>
                      <a href="https://ogre.adc4gis.com/" style="float:left; margin-left:5px" target="_blank"><abbr title="Transforme seu arquivo shape em Json"><i class="bi bi-info-square"></abbr></i></a>
                    </div>
                  
                  <input type="file" id="arquivo1" class="form-control">
                  <input class="btn btn-primary" type="button" onclick="removerLayJson1()"  value="Limpar" id="remLay"> 


                  </div>
                  </div>
                </div>




                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                     <b>Consulte por ShapeFile (.zip)</b> 
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">

                    <input type="file" id="shap" class="form-control">
                    <input class="btn btn-primary" type="button" onclick="removerLayShap()"  value="Limpar" id="remLay">


                    </div>
                  </div>
                </div>





                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading8">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                     <b>Consulte por KML</b> 
                    </button>
                  </h2>
                  <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#accordionExample">
                    <div class="accordion-body">

                    <input type="file" id="fileInput" accept=".kml" class="form-control">
                    <input class="btn btn-primary" type="button" onclick="removerLayKml()"  value="Limpar" id="remLay">


                    </div>
                  </div>
                </div>




                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading4">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                     <b>Consulte por Coordenada (Decimal)</b> 
                    </button>
                  </h2>
                  <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionExample">
                    <div class="accordion-body">


                    <label for="latitude"><h5>Latitude</h5></label><br>
                    <input type="text" class="form-control" id="latitude" name="latitude" placeholder="ex. 0.0000000000000000">

                    <label for="longitude"><h5>Longitude</h5></label><br>
                    <input type="text" class="form-control" id="longitude" name="longitude" placeholder="ex. -0.0000000000000000"><br>

                    <input type="submit" class="btn btn-primary" onclick="addMarcador()" value="Enviar" id="remLay">
                    <input class="btn btn-primary" type="button" onclick="removerTema()"  value="Remover Marcador" id="remLay">




                    </div>
                  </div>
                </div>



                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading5">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                      <b>Consulte por Coordenada (DMS)</b>  
                    </button>
                  </h2>
                  <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample">
                    <div class="accordion-body">


                    <label for="latitude"><h5>Latitude:</h5></label><br>


                    <label for="inputText" class="col-sm-2 col-form-label">Graus</label>
                    <div>
                      <input type="text" class="form-control" id="graus" placeholder="Digite Somente o Número">
                    </div>
                    <label for="inputText" class="col-sm-2 col-form-label">Min</label>
                    <div>
                      <input type="text" class="form-control" id="minutos" placeholder="Digite Somente o Número">
                    </div>
                    <label for="inputText" class="col-sm-2 col-form-label">Sec</label>
                    <div>
                      <input type="text" class="form-control" id="secundos" placeholder="Digite Somente o Número">
                    </div><br>
                    <div>
                      <select name="coord" id="coord123" class="form-control">
                      <option value="Norte">Norte</option>
                      <option value="Sul">Sul</option>
                      </select>
                    </div><br>

                    <label for="latitude"><h5>Longitude:</h5></label><br>


                    <label for="inputText" class="col-sm-2 col-form-label">Graus</label>
                    <div>
                      <input type="text" class="form-control" id="graus1" placeholder="Digite Somente o Número">
                    </div>
                    <label for="inputText" class="col-sm-2 col-form-label">Min</label>
                    <div>
                      <input type="text" class="form-control" id="minutos1" placeholder="Digite Somente o Número">
                    </div>
                    <label for="inputText" class="col-sm-2 col-form-label">Sec</label>
                    <div>
                      <input type="text" class="form-control" id="secundos1" placeholder="Digite Somente o Número">
                    </div><br>
                    <div>
                      <select name="coord" id="coord124" class="form-control">
                      <option value="Oeste">Oeste</option>
                      <option value="Leste">Leste</option>
                      </select>
                    </div><br>

                    <input type="submit" class="btn btn-primary" onclick="convertCoord()" value="Enviar" id="remLay">
                    <input class="btn btn-primary" type="button" onclick="removerTemaDms()"  value="Remover Marcador" id="remLay">




                    </div>
                  </div>
                </div>



                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading6">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                        <b>Consulte por CPF/CNPJ</b>  
                      </button>
                    </h2>
                    <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionExample">
                      <div class="accordion-body">


                      <label for="cpf">CPF/CNPJ</label>
                      <input type="text" class="form-control" id="cpf" name="cpf" placeholder="ex. xxxxxxxxxxx / xxxxxxxx/xxxx-xx">

                      <input type="button" class="btn btn-primary" onclick="cpf2(areaImovel1, areaImovel_4mf)" value="Enviar" id="remLay">
                      <input class="btn btn-primary" type="button" onclick="removeCpf()"  value="Limpar" id="remLay">




                      </div>
                    </div>
                  </div>



                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading7">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                        <b>Consulte CAR</b>  
                      </button>
                    </h2>
                    <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
                      <div class="accordion-body">


                        <label for="car">CAR</label>
                        <input type="text" class="form-control" id="car" name="car" placeholder="Digite os Últimos Dígitos">

                        <input type="button" class="btn btn-primary" onclick="car2()" value="Enviar" id="remLay">
                        <input class="btn btn-primary" type="button" onclick="removeCar()"  value="Remover tema" id="remLay">


                      </div>
                    </div>
                  </div>




                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading9">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                        <b>Consulte por CPF/CNPJ - Outorga</b>  
                      </button>
                    </h2>
                    <div id="collapse9" class="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#accordionExample">
                      <div class="accordion-body">


                      <label for="cpf_out">CPF/CNPJ</label>
                      <input type="text" class="form-control" id="cpf_out" name="cpf_out" placeholder="ex. xxxxxxxxxxx / xxxxxxxx/xxxx-xx">

                      <input type="button" class="btn btn-primary" onclick="cpfOut()" value="Enviar" id="remLay">
                      <input class="btn btn-primary" type="button" onclick="removeCpfOut()"  value="Limpar" id="remLay">




                      </div>
                    </div>
                  </div>



                </div>


              
              <img src="imagens/SIGARR3.png" class="d-none d-lg-block d-print-block" href="https://femarh.rr.gov.br/" id="fem1">

            </div>


            <!--- Código - Aba Informações -->

            <div class="offcanvas-body" id="dropd2">
              <p>O banco de dados que gera o sistema em questão ainda não possui todos os imóveis licenciados pela FEMARH, o mesmo tem atualização diária com a inserção de novos imóveis.</p>

             <hr>



             <div>

                <p><h6 id="inf_dev">Desenvolvido pela Fundação Estadual do Meio Ambiente e Recursos Hídricos – FEMARH-RR</h6></p>
                <hr>
                <p>
                  <h5 id="inf_dev">Antonio Oliverio Garcia de Almeida</h6>
                  <h6 id="inf_dev">Governador do Estado de Roraima</h6>
                </p>
                <hr>
                <p>
                  <h5 id="inf_dev">Edilson Damião Lima</h6>
                  <h6 id="inf_dev">Vice-Governador do Estado de Roraima</h6>
                </p>
                <hr>
                <p>
                  <h5 id="inf_dev">Glicério Marcos Fernandes Pereira</h6>
                  <h6 id="inf_dev">Presidente da Fundação do Meio Ambiente e Recursos Hídricos</h6>
                </p>
                <div class="container">
                  <div class="linha-horizontal"></div>
                  <h6 class="texto"><b>DESENVOLVEDORES</b></h6>
                  <div class="linha-horizontal"></div>
                </div>
                <p>
                  <h5 id="inf_dev">Luana Tabaldi</h6>
                  <h6 id="inf_dev">Diretoria de Pesquisa e Tecnologia e Gestão territorial</h6>
                </p>
                <hr>
                <p>
                  <h5 id="inf_dev">Anderson Rodrigues Almeida</h6>
                  <h6 id="inf_dev">Assessor Especial</h6>
                </p>
                <hr>
                <p>
                  <h5 id="inf_dev">Kemeson Alves Naveca</h6>
                  <h6 id="inf_dev">Assessor Técnico</h6>
                </p>
                <hr>
                <p>
                  <h5 id="inf_dev">Ronnald Dannyel da Silva Cunha</h6>
                  <h6 id="inf_dev">Assessor Especial</h6>
                </p>
                <div class="container">
                  <div class="linha-horizontal"></div>
                  <h6 class="texto"><b>MODERADORES DO BANCO DE DADOS</b></h6>
                  <div class="linha-horizontal"></div>
                </div>
                <p>
                  <h5 id="inf_dev">Divisão de Monitoramento e Controle Ambiental</h6>
                </p>
                <hr>


              </div>



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

      <!---   BT4  -->
      <div class="bt">
       <!---
       <button onclick="salvar()" id="bt4"><abbr title="Salvar (Json)"><i class="bi bi-save"></i></abbr></button>
      
       <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight4" aria-controls="offcanvasRight" id="bt4">
       <i class="bi bi-arrow-left"></i>
       </button>

       <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight4" aria-labelledby="offcanvasRightLabel">
         <div class="offcanvas-header" id="canv4">
           <h5 class="offcanvas-title" id="offcanvasRightLabel">JSON</h5>
           <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
           
         </div>
         <div class="offcanvas-body">
           <div id="jsonTeste"></div>
           <div>
             
           </div>          
         </div>
       </div>
      -->
     </div>


      <!--- Código - Legenda das camadas -->

      <div class="row" id="mostra">
        <div class="col">
          <div class="show multi-collapse" id="multiCollapseExample1">
            <div class="card card-body" >
              
              <h5 style="text-align:center;">LEGENDAS</h5>


              <div id="sobrepCar" style="display: none; padding: 5px; border: 2px;">
                
                CAR - Sobreposição

                <div class="form-check form-switch" style="float: right;margin-left: 20px;">
                  <input type="checkbox" class="form-check-input" role="switch" value="l" onclick="sobreposicaoCar()" id="sCar">
                </div>

                <div style="margin-top: 8px;">
                  <img src="imagens/retangulo-arredondado-32CD32.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Unidade de Conservação Estadual
                </div>
                <div style="margin-top: 8px;">
                  <img src="imagens/retangulo-arredondado-006400.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Unidade de Conservação Federal
                </div>
                <div style="margin-top: 8px;">
                  <img src="imagens/retangulo-arredondado-FF8C00.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Áreas Militares
                </div>
                <div style="margin-top: 8px;">
                  <img src="imagens/zee/retangulo-arredondado-cdaa66.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Terras Indígenas
                </div>
                <div style="margin-top: 8px;">
                  <img src="imagens/retangulo-arredondado-808080.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Áreas Inalienáveis
                </div>
                <div style="margin-top: 8px;">
                  <img src="imagens/zee/retangulo-arredondado-835acb.png" style="max-width:20px;max-height:20px;margin-left:15px;"> IBAMA - Embargos
                </div>
                <div style="margin-top: 8px;">
                  <img src="imagens/retangulo-arredondado.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Área do Projeto
                </div>
                <div style="margin-top: 8px;">
                  <img src="imagens/retangulo-arredondado-blue.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Área do Projeto 4mf
                </div>
                <div style="margin-top: 8px;">
                  <img src="imagens/retangulo-arredondado-FFD700.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Projetos de Assentamento
                </div>
                <div style="margin-top: 8px;">
                  <img src="imagens/zee/retangulo-arredondado-e600a9.png" style="max-width:20px;max-height:20px;margin-left:15px;"> CAR
                </div>
                <div style="margin-top: 8px;">
                  <img src="imagens/retangulo-arredondado-8B0000.png" style="max-width:20px;max-height:20px;margin-left:15px;"> IPHAN - Sítios Arqueológicos (Polígonos)
                </div>
                <div style="margin-top: 8px;">
                  <img src="leaflet/images/pin-de-localizacao-vermelho.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Sítios Arqueológicos (Ponto)
                </div>
                <div style="margin-top: 8px;">
                  <img src="leaflet/images/pin-de-localizacao-azul3.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Outorgas Superficiais
                </div>
                <div style="margin-top: 8px;">
                  <img src="leaflet/images/pin-de-localizacao-marrom.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Outorgas Subterrâneas
                </div>
                

              </div>


              <div id="teste33"></div>

              <div id="teste34"></div>

              <div id="teste35"></div>

              <div id="teste36"></div>

              <div id="teste37"></div>

              <div id="teste38"></div>

              <div id="teste39"></div>

              <div id="teste40"></div>

              <div id="teste41"></div>
              
              <div id="teste5"></div>

              <div id="teste1"></div>

              <div id="teste42"></div>

              <div id="teste26">
                <div id="monit"></div>                
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
                <img src="imagens/quadrado-FF0000.png" style="max-width:20px;max-height:20px;"> CR-A2008 - Corte Raso Anterior a 22/07/2008 <br>
                <img src="imagens/quadrado-0000FF.png" style="max-width:20px;max-height:20px;"> SAUVLAU - Supressão na área de uso alternativo do solo na virgência da Licença Ambiental Única <br>
                <img src="imagens/quadrado-FF1493.png" style="max-width:20px;max-height:20px;"> SAUFVLAU - Supressão na área de uso alternativo do solo fora da virgência da Licença Ambiental Única <br>
                </div>
              </div>

              <div id="teste30"></div>

              <div id="teste31"></div>

              <div id="teste43"></div>

              <div id="teste32">
                <div id="monit4mf"></div> 
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

              <div id="teste2"></div>

              <div id="teste3"></div>

              <div id="teste4"></div>

              <div id="teste6"></div>

              <div id="teste7"></div>

              <div id="teste8">
                <div id="sMun"></div>
                <div style="margin-top: 8px;">
                  <img src="leaflet/images/pin-de-localizacao-vermelho.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Capital
                </div>
                <div style="margin-top: 8px;">
                  <img src="leaflet/images/pin-de-localizacao-azul.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Cidade
                </div>
              </div>

              <div id="teste9"></div>

              <div id="lim"></div>

              <div id="lim1"></div>

              <div id="teste11">
                <div id="rod"></div>
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

              <div id="teste12"></div>

              <div id="teste13"></div>

              <div id="teste14"></div>

              <div id="teste15"></div>

              <div id="teste60"></div>

              <div id="teste59"></div>

              <div id="teste63"></div>


              <div id="teste57"></div>

              <div id="teste58"></div>

              




              <div id="teste44">
                <div id="aptAgri"></div> 
                <div style="margin-left:15px;">
                <img src="imagens/zee/retangulo-arredondado-a9a800.png" style="max-width:20px;max-height:20px;"> 1ABC <br>
                <img src="imagens/zee/retangulo-arredondado-e1b053.png" style="max-width:20px;max-height:20px;"> 2(a)bc <br>
                <img src="imagens/zee/retangulo-arredondado-a48f79.png" style="max-width:20px;max-height:20px;"> 2abc <br>
                <img src="imagens/zee/retangulo-arredondado-e2b051.png" style="max-width:20px;max-height:20px;"> 2bc <br>
                <img src="imagens/zee/retangulo-arredondado-fdd07d.png" style="max-width:20px;max-height:20px;"> 3(bc) <br>
                <img src="imagens/zee/retangulo-arredondado-cac6ac.png" style="max-width:20px;max-height:20px;"> 6
                </div>
              </div>

              <div id="teste45">
                <div id="bioDivSis"></div> 
                <div style="margin-left:15px;">
                <img src="imagens/zee/retangulo-arredondado-33ebae.png" style="max-width:20px;max-height:20px;"> Agradacional(DF) <br>
                <img src="imagens/zee/retangulo-arredondado-ed29bf.png" style="max-width:20px;max-height:20px;"> Agradacional(DM) <br>
                <img src="imagens/zee/retangulo-arredondado-ece786.png" style="max-width:20px;max-height:20px;"> Denudacional(DF-FCE) <br>
                <img src="imagens/zee/retangulo-arredondado-835acb.png" style="max-width:20px;max-height:20px;"> Denudacional(DF) <br>
                <img src="imagens/zee/retangulo-arredondado-44ef19.png" style="max-width:20px;max-height:20px;"> Denudacional(DM-CE) <br>
                <img src="imagens/zee/retangulo-arredondado-eb3c2c.png" style="max-width:20px;max-height:20px;"> Denudacional(DM)
                </div>
              </div>

              <div id="teste46"></div>

              <div id="teste47"></div>

              <div id="teste48"></div>

              <div id="teste49"></div>

              <div id="teste50">
                <div id="geoDomMor"></div> 
                <div style="margin-left:15px;">
                <img src="imagens/zee/retangulo-arredondado-cdaa66.png" style="max-width:20px;max-height:20px;"> Bacias e Coberturas Sedimentares Fanerozóicas <br>
                <img src="imagens/zee/retangulo-arredondado-f57a7a.png" style="max-width:20px;max-height:20px;"> Crátons Neoproterozóicos <br>
                <img src="imagens/zee/retangulo-arredondado-ffff73.png" style="max-width:20px;max-height:20px;"> Depósitos Sedimentares Quaternários <br>
                <img src="imagens/zee/retangulo-arredondado-969696.png" style="max-width:20px;max-height:20px;"> Não Disponível
                </div>
              </div>

              <div id="teste51">
                <div id="geoEros"></div> 
                <div style="margin-left:15px;">
                <img src="imagens/zee/retangulo-arredondado-75ace3.png" style="max-width:20px;max-height:20px;"> Baixo <br>
                <img src="imagens/zee/retangulo-arredondado-86eba2.png" style="max-width:20px;max-height:20px;"> Moderado <br>
                <img src="imagens/zee/retangulo-arredondado-fbbec6.png" style="max-width:20px;max-height:20px;"> Alto
                </div>
              </div>

              <div id="teste54">
                <div id="geoGeo"></div> 
                <div style="margin-left:15px;">
                <img src="imagens/zee/retangulo-arredondado-ffff00.png" style="max-width:20px;max-height:20px;"> Q12ab <br>
                <img src="imagens/zee/retangulo-arredondado-e6e600.png" style="max-width:20px;max-height:20px;"> Q12aa <br>
                <img src="imagens/zee/retangulo-arredondado-ffffff.png" style="max-width:20px;max-height:20px;"> Q2a <br>
                <img src="imagens/zee/retangulo-arredondado-ffd37f.png" style="max-width:20px;max-height:20px;"> Q1i <br>
                <img src="imagens/zee/retangulo-arredondado-f5f57a.png" style="max-width:20px;max-height:20px;"> Nbv <br>
                <img src="imagens/zee/retangulo-arredondado-0084a8.png" style="max-width:20px;max-height:20px;"> K1api <br>
                <img src="imagens/zee/retangulo-arredondado-89cd66.png" style="max-width:20px;max-height:20px;"> K2st <br>
                <img src="imagens/zee/retangulo-arredondado-a3ff73.png" style="max-width:20px;max-height:20px;"> K2ta <br>
                <img src="imagens/zee/retangulo-arredondado-00734c.png" style="max-width:20px;max-height:20px;"> J3K1ap <br>
                <img src="imagens/zee/retangulo-arredondado-73ffdf.png" style="max-width:20px;max-height:20px;"> MP12ss <br>
                <img src="imagens/zee/retangulo-arredondado-cd6666.png" style="max-width:20px;max-height:20px;"> MP1su <br>
                <img src="imagens/zee/retangulo-arredondado-aaff00.png" style="max-width:20px;max-height:20px;"> MP1r <br>
                <img src="imagens/zee/retangulo-arredondado-894444.png" style="max-width:20px;max-height:20px;"> MP1au <br>
                <img src="imagens/zee/retangulo-arredondado-ff7f7f-2.png" style="max-width:20px;max-height:20px;"> MP1mu <br>
                <img src="imagens/zee/retangulo-arredondado-a80000-2.png" style="max-width:20px;max-height:20px;"> MP1to <br>
                <img src="imagens/zee/retangulo-arredondado-00204d.png" style="max-width:20px;max-height:20px;"> PP4av <br>
                <img src="imagens/zee/retangulo-arredondado-4c7300.png" style="max-width:20px;max-height:20px;"> PP34se <br>
                <img src="imagens/zee/retangulo-arredondado-4cc100.png" style="max-width:20px;max-height:20px;"> MP4mi <br>
                <img src="imagens/zee/retangulo-arredondado-e60000-2.png" style="max-width:20px;max-height:20px;"> PP34ma <br>
                <img src="imagens/zee/retangulo-arredondado-ffaa00.png" style="max-width:20px;max-height:20px;"> PP3ir <br>
                <img src="imagens/zee/retangulo-arredondado-d7b09e.png" style="max-width:20px;max-height:20px;"> PP3ja <br>
                <img src="imagens/zee/retangulo-arredondado-b4d79e.png" style="max-width:20px;max-height:20px;"> PP34rr <br>
                <img src="imagens/zee/retangulo-arredondado-aa66cd.png" style="max-width:20px;max-height:20px;"> PP3ia <br>
                <img src="imagens/zee/retangulo-arredondado-ff0000.png" style="max-width:20px;max-height:20px;"> PP3sa <br>
                <img src="imagens/zee/retangulo-arredondado-894465.png" style="max-width:20px;max-height:20px;"> PP3sp <br>
                <img src="imagens/zee/retangulo-arredondado-cd6699.png" style="max-width:20px;max-height:20px;"> PP3ab <br>
                <img src="imagens/zee/retangulo-arredondado-897044.png" style="max-width:20px;max-height:20px;"> PP3pa <br>
                <img src="imagens/zee/retangulo-arredondado-e64c00.png" style="max-width:20px;max-height:20px;"> PP3ar <br>
                <img src="imagens/zee/retangulo-arredondado-e69800.png" style="max-width:20px;max-height:20px;"> PP3su <br>
                <img src="imagens/zee/retangulo-arredondado-ffff73-2.png" style="max-width:20px;max-height:20px;"> PP3ci <br>
                <img src="imagens/zee/retangulo-arredondado-d69dbc.png" style="max-width:20px;max-height:20px;"> PP3ru1 <br>
                <img src="imagens/zee/retangulo-arredondado-df73ff.png" style="max-width:20px;max-height:20px;"> PP3ru2e <br>
                <img src="imagens/zee/retangulo-arredondado-f57a7a-2.png" style="max-width:20px;max-height:20px;"> PP3er <br>
                <img src="imagens/zee/retangulo-arredondado-e600a9.png" style="max-width:20px;max-height:20px;"> PP3pp <br>
                <img src="imagens/zee/retangulo-arredondado-cdaa66-2.png" style="max-width:20px;max-height:20px;"> PP3cx <br>
                <img src="imagens/zee/retangulo-arredondado-a80084.png" style="max-width:20px;max-height:20px;"> PP3mp <br>
                <img src="imagens/zee/retangulo-arredondado-895a44.png" style="max-width:20px;max-height:20px;"> PP3ca <br>
                <img src="imagens/zee/retangulo-arredondado-996238.png" style="max-width:20px;max-height:20px;"> PP3mu <br>
                <img src="imagens/zee/retangulo-arredondado-9c9c9c.png" style="max-width:20px;max-height:20px;"> PP3uu <br>
                <img src="imagens/zee/retangulo-arredondado-ffbee8-2.png" style="max-width:20px;max-height:20px;"> PP23ur <br>
                <img src="imagens/zee/retangulo-arredondado-a83800.png" style="max-width:20px;max-height:20px;"> PP23tr <br>
                <img src="imagens/zee/retangulo-arredondado-e8beff.png" style="max-width:20px;max-height:20px;"> PP3an <br>
                <img src="imagens/zee/retangulo-arredondado-e0e0e0.png" style="max-width:20px;max-height:20px;"> rps 
                </div>
              </div>

              <div id="teste84">
                <div id="geoPotMin"></div> 
                <!--
                <div style="margin-left:15px;">
                <img src="imagens/zee/retangulo-arredondado-75ace3.png" style="max-width:20px;max-height:20px;"> Baixo <br>
                <img src="imagens/zee/retangulo-arredondado-86eba2.png" style="max-width:20px;max-height:20px;"> Moderado <br>
                <img src="imagens/zee/retangulo-arredondado-fbbec6.png" style="max-width:20px;max-height:20px;"> Alto
                </div>
            -->
              </div>

              <div id="teste52">
                <div id="geomor"></div> 
                <div style="margin-left:15px;">
                  <img src="imagens/zee/retangulo-arredondado-d1ff73.png" style="max-width:20px;max-height:20px;"> Depressão Boa Vista - DBV <br>
                  <img src="imagens/zee/retangulo-arredondado-dd1e2e.png" style="max-width:20px;max-height:20px;"> Depressão Interplanáltica do Trombetas - DiT <br>
                  <img src="imagens/zee/retangulo-arredondado-e9ffbe.png" style="max-width:20px;max-height:20px;"> Depressão Rio Branco-Rio Negro - DrBN <br>
                  <img src="imagens/zee/retangulo-arredondado-e8beff.png" style="max-width:20px;max-height:20px;"> Patamar do Médio Uraricoera - PmU <br>
                  <img src="imagens/zee/retangulo-arredondado-c29ed7.png" style="max-width:20px;max-height:20px;"> Patamar do Norte de Roraima - PnR <br>
                  <img src="imagens/zee/retangulo-arredondado-ffbee8.png" style="max-width:20px;max-height:20px;"> Patamar do Sul de Roraima - PsR <br>
                  <img src="imagens/zee/retangulo-arredondado-267300.png" style="max-width:20px;max-height:20px;"> Patamares Dissecados do Tacutu - PdT <br>
                  <img src="imagens/zee/retangulo-arredondado-70a800.png" style="max-width:20px;max-height:20px;"> Pediplano Rio Branco-Rio Negro - PrBN <br>
                  <img src="imagens/zee/retangulo-arredondado-7534e7.png" style="max-width:20px;max-height:20px;"> Planaltos Dissecados Sul de Roraima - PdsR <br>
                  <img src="imagens/zee/retangulo-arredondado-732600.png" style="max-width:20px;max-height:20px;"> Planaltos Tabulares de Roraima - PltR <br>
                  <img src="imagens/zee/retangulo-arredondado-ffffbe.png" style="max-width:20px;max-height:20px;"> Planícies e Terraços Fluviais - PTf <br>
                  <img src="imagens/zee/retangulo-arredondado-a900e6.png" style="max-width:20px;max-height:20px;"> Relevos Residuais - Rr <br>
                  <img src="imagens/zee/retangulo-arredondado-ffbc03.png" style="max-width:20px;max-height:20px;"> Relevos Residuais Anauá - RrA <br>
                  <img src="imagens/zee/retangulo-arredondado-fff567.png" style="max-width:20px;max-height:20px;"> Relevos Residuais Mucajai - RrM <br>
                  <img src="imagens/zee/retangulo-arredondado-ff7f7f.png" style="max-width:20px;max-height:20px;"> Serra do Tepequém - RrM <br>
                  <img src="imagens/zee/retangulo-arredondado-e60000.png" style="max-width:20px;max-height:20px;"> Serranias Residuais - Sr <br>
                  <img src="imagens/zee/retangulo-arredondado-a80000.png" style="max-width:20px;max-height:20px;"> Serras do Interflúvio - Sit <br>
                  <img src="imagens/zee/retangulo-arredondado-969696.png" style="max-width:20px;max-height:20px;"> Não Disponível
                </div>
              </div>

              <div id="teste55"></div>

              <div id="teste56">
                <div id="hidOtt"></div> 
                <div style="margin-left:15px;">
                <img src="imagens/zee/retangulo-arredondado-ff7f00.png" style="max-width:20px;max-height:20px;"> RIO ANAUÁ <br>
                <img src="imagens/zee/retangulo-arredondado-eed350.png" style="max-width:20px;max-height:20px;"> RIO BRANCO <br>
                <img src="imagens/zee/retangulo-arredondado-d77782.png" style="max-width:20px;max-height:20px;"> RIO CATRIMANI <br>
                <img src="imagens/zee/retangulo-arredondado-33a02c.png" style="max-width:20px;max-height:20px;"> RIO JATAPU <br>
                <img src="imagens/zee/retangulo-arredondado-fb9a99.png" style="max-width:20px;max-height:20px;"> RIO JAUAPERI <br>
                <img src="imagens/zee/retangulo-arredondado-66f067.png" style="max-width:20px;max-height:20px;"> RIO JUFARI <br>
                <img src="imagens/zee/retangulo-arredondado-fdbf6f.png" style="max-width:20px;max-height:20px;"> RIO MAPUERA <br>
                <img src="imagens/zee/retangulo-arredondado-e4b42e.png" style="max-width:20px;max-height:20px;"> RIO MUCAJAÍ <br>
                <img src="imagens/zee/retangulo-arredondado-92e853.png" style="max-width:20px;max-height:20px;"> RIO TACUTU <br>
                <img src="imagens/zee/retangulo-arredondado-d3a3e9.png" style="max-width:20px;max-height:20px;"> RIO URARIQUERA
                </div>
              </div>

              <div id="teste79">
                <div id="potSocAmb"></div> 
                <!--
                <div style="margin-left:15px;">
                <img src="imagens/zee/retangulo-arredondado-75ace3.png" style="max-width:20px;max-height:20px;"> Baixo <br>
                <img src="imagens/zee/retangulo-arredondado-86eba2.png" style="max-width:20px;max-height:20px;"> Moderado <br>
                <img src="imagens/zee/retangulo-arredondado-fbbec6.png" style="max-width:20px;max-height:20px;"> Alto
                </div>
            -->
              </div>

              <div id="teste80">
                <div id="potSocHum"></div> 
                <!--
                <div style="margin-left:15px;">
                <img src="imagens/zee/retangulo-arredondado-75ace3.png" style="max-width:20px;max-height:20px;"> Baixo <br>
                <img src="imagens/zee/retangulo-arredondado-86eba2.png" style="max-width:20px;max-height:20px;"> Moderado <br>
                <img src="imagens/zee/retangulo-arredondado-fbbec6.png" style="max-width:20px;max-height:20px;"> Alto
                </div>
            -->
              </div>

              <div id="teste81">
                <div id="potSocInst"></div> 
                <!--
                <div style="margin-left:15px;">
                <img src="imagens/zee/retangulo-arredondado-75ace3.png" style="max-width:20px;max-height:20px;"> Baixo <br>
                <img src="imagens/zee/retangulo-arredondado-86eba2.png" style="max-width:20px;max-height:20px;"> Moderado <br>
                <img src="imagens/zee/retangulo-arredondado-fbbec6.png" style="max-width:20px;max-height:20px;"> Alto
                </div>
            -->
              </div>

              <div id="teste82">
                <div id="potSocProd"></div> 
                <!--
                <div style="margin-left:15px;">
                <img src="imagens/zee/retangulo-arredondado-75ace3.png" style="max-width:20px;max-height:20px;"> Baixo <br>
                <img src="imagens/zee/retangulo-arredondado-86eba2.png" style="max-width:20px;max-height:20px;"> Moderado <br>
                <img src="imagens/zee/retangulo-arredondado-fbbec6.png" style="max-width:20px;max-height:20px;"> Alto
                </div>
            -->
              </div>

              <div id="teste83">
                <div id="potSoc"></div> 
                <!--
                <div style="margin-left:15px;">
                <img src="imagens/zee/retangulo-arredondado-75ace3.png" style="max-width:20px;max-height:20px;"> Baixo <br>
                <img src="imagens/zee/retangulo-arredondado-86eba2.png" style="max-width:20px;max-height:20px;"> Moderado <br>
                <img src="imagens/zee/retangulo-arredondado-fbbec6.png" style="max-width:20px;max-height:20px;"> Alto
                </div>
            -->
              </div>

              <div id="teste53">
                <div id="solo"></div>
                <div style="margin-left:15px;">
                  <img src="imagens/zee/retangulo-arredondado-fdf1f0.png" style="max-width:20px;max-height:20px;"> ARGISSOLO AMARELO <br>
                  <img src="imagens/zee/retangulo-arredondado-f0a59d.png" style="max-width:20px;max-height:20px;"> ARGISSOLO VERMELHO <br>
                  <img src="imagens/zee/retangulo-arredondado-f9d2cd.png" style="max-width:20px;max-height:20px;"> ARGISSOLO VERMELHO-AMARELO <br>
                  <img src="imagens/zee/retangulo-arredondado-d7c5a5.png" style="max-width:20px;max-height:20px;"> CAMBISSOLO HÁPLICO <br>
                  <img src="imagens/zee/retangulo-arredondado-b6bec5.png" style="max-width:20px;max-height:20px;"> ESPODOSSOLO <br>
                  <img src="imagens/zee/retangulo-arredondado-9aacbc.png" style="max-width:20px;max-height:20px;"> ESPODOSSOLO FERRI-HUMILÚVICO <br>
                  <img src="imagens/zee/retangulo-arredondado-9aacba.png" style="max-width:20px;max-height:20px;"> ESPODOSSOLO HUMILÚVICO <br>
                  <img src="imagens/zee/retangulo-arredondado-6ca3cd.png" style="max-width:20px;max-height:20px;"> GLEISSOLO <br>
                  <img src="imagens/zee/retangulo-arredondado-b6d8ee.png" style="max-width:20px;max-height:20px;"> GLEISSOLO HÁPLICO <br>
                  <img src="imagens/zee/retangulo-arredondado-fef3af.png" style="max-width:20px;max-height:20px;"> LATOSSOLO AMARELO <br>
                  <img src="imagens/zee/retangulo-arredondado-f4b980.png" style="max-width:20px;max-height:20px;"> LATOSSOLO VERMELHO <br>
                  <img src="imagens/zee/retangulo-arredondado-f7d1a6.png" style="max-width:20px;max-height:20px;"> LATOSSOLO VERMELHO-AMARELO <br>
                  <img src="imagens/zee/retangulo-arredondado-969595.png" style="max-width:20px;max-height:20px;"> NEOSSOLO LITÓLICO <br>
                  <img src="imagens/zee/retangulo-arredondado-fffee3.png" style="max-width:20px;max-height:20px;"> NEOSSOLO QUARTZARÊNICO <br>
                  <img src="imagens/zee/retangulo-arredondado-d8ab92.png" style="max-width:20px;max-height:20px;"> NITOSSOLO VERMELHO <br>
                  <img src="imagens/zee/retangulo-arredondado-b5d6ae.png" style="max-width:20px;max-height:20px;"> PLANOSSOLO HÁPLICO <br>
                  <img src="imagens/zee/retangulo-arredondado-89cac7.png" style="max-width:20px;max-height:20px;"> PLANOSSOLO NÁTRICO <br>
                  <img src="imagens/zee/retangulo-arredondado-d6bac9.png" style="max-width:20px;max-height:20px;"> PLINTOSSOLO HÁPLICO <br>
                  <img src="imagens/zee/retangulo-arredondado-ecaccb.png" style="max-width:20px;max-height:20px;"> PLINTOSSOLO PÉTRICO <br>
                  <img src="imagens/zee/retangulo-arredondado-9eaa85.png" style="max-width:20px;max-height:20px;"> VERTISSOLO HIDROMÓRFICO
                </div>
              </div>
              
              <div>
                <div id="veg"></div> 
                <!--
                <div style="margin-left:15px;">
                <img src="imagens/zee/retangulo-arredondado-75ace3.png" style="max-width:20px;max-height:20px;"> Baixo <br>
                <img src="imagens/zee/retangulo-arredondado-86eba2.png" style="max-width:20px;max-height:20px;"> Moderado <br>
                <img src="imagens/zee/retangulo-arredondado-fbbec6.png" style="max-width:20px;max-height:20px;"> Alto
                </div>
            -->
              </div>

              <div id="teste64">
                <div id="vulNatPerSolo"></div> 
                <!--
                <div style="margin-left:15px;">
                <img src="imagens/zee/retangulo-arredondado-75ace3.png" style="max-width:20px;max-height:20px;"> Baixo <br>
                <img src="imagens/zee/retangulo-arredondado-86eba2.png" style="max-width:20px;max-height:20px;"> Moderado <br>
                <img src="imagens/zee/retangulo-arredondado-fbbec6.png" style="max-width:20px;max-height:20px;"> Alto
                </div>
            -->
              </div>

              <div id="teste65">
                <div id="vulNatPerSoloGeo"></div> 
                <!--
                <div style="margin-left:15px;">
                <img src="imagens/zee/retangulo-arredondado-75ace3.png" style="max-width:20px;max-height:20px;"> Baixo <br>
                <img src="imagens/zee/retangulo-arredondado-86eba2.png" style="max-width:20px;max-height:20px;"> Moderado <br>
                <img src="imagens/zee/retangulo-arredondado-fbbec6.png" style="max-width:20px;max-height:20px;"> Alto
                </div>
            -->
              </div>

              <div id="teste66">
                <div id="vulNatPerSoloGeom"></div> 
                <!--
                <div style="margin-left:15px;">
                <img src="imagens/zee/retangulo-arredondado-75ace3.png" style="max-width:20px;max-height:20px;"> Baixo <br>
                <img src="imagens/zee/retangulo-arredondado-86eba2.png" style="max-width:20px;max-height:20px;"> Moderado <br>
                <img src="imagens/zee/retangulo-arredondado-fbbec6.png" style="max-width:20px;max-height:20px;"> Alto
                </div>
            -->
              </div>

              <div id="teste67">
                <div id="vulNatPerSoloVeg"></div> 
                <!--
                <div style="margin-left:15px;">
                <img src="imagens/zee/retangulo-arredondado-75ace3.png" style="max-width:20px;max-height:20px;"> Baixo <br>
                <img src="imagens/zee/retangulo-arredondado-86eba2.png" style="max-width:20px;max-height:20px;"> Moderado <br>
                <img src="imagens/zee/retangulo-arredondado-fbbec6.png" style="max-width:20px;max-height:20px;"> Alto
                </div>
            -->
              </div>

              <div id="teste68">
                <div id="vulNatPerSoloZona"></div> 
                <!--
                <div style="margin-left:15px;">
                <img src="imagens/zee/retangulo-arredondado-75ace3.png" style="max-width:20px;max-height:20px;"> Baixo <br>
                <img src="imagens/zee/retangulo-arredondado-86eba2.png" style="max-width:20px;max-height:20px;"> Moderado <br>
                <img src="imagens/zee/retangulo-arredondado-fbbec6.png" style="max-width:20px;max-height:20px;"> Alto
                </div>
            -->
              </div>

              <div id="teste69">
                <div id="zonaClimClimZee"></div> 
                <!--
                <div style="margin-left:15px;">
                <img src="imagens/zee/retangulo-arredondado-75ace3.png" style="max-width:20px;max-height:20px;"> Baixo <br>
                <img src="imagens/zee/retangulo-arredondado-86eba2.png" style="max-width:20px;max-height:20px;"> Moderado <br>
                <img src="imagens/zee/retangulo-arredondado-fbbec6.png" style="max-width:20px;max-height:20px;"> Alto
                </div>
            -->
              </div>

              <div id="teste70">
                <div id="zonaClimConcChuva"></div> 
                <!--
                <div style="margin-left:15px;">
                <img src="imagens/zee/retangulo-arredondado-75ace3.png" style="max-width:20px;max-height:20px;"> Baixo <br>
                <img src="imagens/zee/retangulo-arredondado-86eba2.png" style="max-width:20px;max-height:20px;"> Moderado <br>
                <img src="imagens/zee/retangulo-arredondado-fbbec6.png" style="max-width:20px;max-height:20px;"> Alto
                </div>
            -->
              </div>

              <div id="teste71">
                <div id="zonaClimIsolChuva"></div> 
                <!--
                <div style="margin-left:15px;">
                <img src="imagens/zee/retangulo-arredondado-75ace3.png" style="max-width:20px;max-height:20px;"> Baixo <br>
                <img src="imagens/zee/retangulo-arredondado-86eba2.png" style="max-width:20px;max-height:20px;"> Moderado <br>
                <img src="imagens/zee/retangulo-arredondado-fbbec6.png" style="max-width:20px;max-height:20px;"> Alto
                </div>
            -->
              </div>

              <div id="teste72">
                <div id="zonaClimKop"></div> 
                <!--
                <div style="margin-left:15px;">
                <img src="imagens/zee/retangulo-arredondado-75ace3.png" style="max-width:20px;max-height:20px;"> Baixo <br>
                <img src="imagens/zee/retangulo-arredondado-86eba2.png" style="max-width:20px;max-height:20px;"> Moderado <br>
                <img src="imagens/zee/retangulo-arredondado-fbbec6.png" style="max-width:20px;max-height:20px;"> Alto
                </div>
            -->
              </div>

              <div id="teste73">
                <div id="zonaSubZup"></div> 
                <!--
                <div style="margin-left:15px;">
                <img src="imagens/zee/retangulo-arredondado-75ace3.png" style="max-width:20px;max-height:20px;"> Baixo <br>
                <img src="imagens/zee/retangulo-arredondado-86eba2.png" style="max-width:20px;max-height:20px;"> Moderado <br>
                <img src="imagens/zee/retangulo-arredondado-fbbec6.png" style="max-width:20px;max-height:20px;"> Alto
                </div>
            -->
              </div>

              <div id="teste74">
                <div id="zonaSubZue"></div> 
                <!--
                <div style="margin-left:15px;">
                <img src="imagens/zee/retangulo-arredondado-75ace3.png" style="max-width:20px;max-height:20px;"> Baixo <br>
                <img src="imagens/zee/retangulo-arredondado-86eba2.png" style="max-width:20px;max-height:20px;"> Moderado <br>
                <img src="imagens/zee/retangulo-arredondado-fbbec6.png" style="max-width:20px;max-height:20px;"> Alto
                </div>
            -->
              </div>

              <div id="teste75">
                <div id="zonaZonaZup"></div> 
                <!--
                <div style="margin-left:15px;">
                <img src="imagens/zee/retangulo-arredondado-75ace3.png" style="max-width:20px;max-height:20px;"> Baixo <br>
                <img src="imagens/zee/retangulo-arredondado-86eba2.png" style="max-width:20px;max-height:20px;"> Moderado <br>
                <img src="imagens/zee/retangulo-arredondado-fbbec6.png" style="max-width:20px;max-height:20px;"> Alto
                </div>
            -->
              </div>

              <div id="teste76">
                <div id="zonaZonaZue"></div> 
                <!--
                <div style="margin-left:15px;">
                <img src="imagens/zee/retangulo-arredondado-75ace3.png" style="max-width:20px;max-height:20px;"> Baixo <br>
                <img src="imagens/zee/retangulo-arredondado-86eba2.png" style="max-width:20px;max-height:20px;"> Moderado <br>
                <img src="imagens/zee/retangulo-arredondado-fbbec6.png" style="max-width:20px;max-height:20px;"> Alto
                </div>
            -->
              </div>

              <div id="teste77">
                <div id="zonaZonaZu"></div> 
                <!--
                <div style="margin-left:15px;">
                <img src="imagens/zee/retangulo-arredondado-75ace3.png" style="max-width:20px;max-height:20px;"> Baixo <br>
                <img src="imagens/zee/retangulo-arredondado-86eba2.png" style="max-width:20px;max-height:20px;"> Moderado <br>
                <img src="imagens/zee/retangulo-arredondado-fbbec6.png" style="max-width:20px;max-height:20px;"> Alto
                </div>
            -->
              </div>




              

              <div id="teste78">
                <div id="embAut1"></div>
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

              <div id="teste16"></div>

              <div id="teste24"></div>

              <div id="teste23"></div>

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

              <div id="teste10"></div>

              <div id="teste27"></div>

              <div id="teste28">
                <div id="out_sup"></div>

                <div style="margin-top: 8px;">
                  <img src="./imagens/outorga/pin-de-localizacao-ffff73.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Abastecimento Público e Esgotamento Sanitário
                </div>

                <div style="margin-top: 8px;">
                  <img src="./imagens/outorga/pin-de-localizacao-bee8ff.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Aproveitamento do Potencial Hidrelétrico
                </div>

                <div style="margin-top: 8px;">
                  <img src="./imagens/outorga/pin-de-localizacao-00c5ff.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Aquicultura em Tanque Escavado
                </div>

                <div style="margin-top: 8px;">
                  <img src="./imagens/outorga/pin-de-localizacao-002673.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Aquicultura em Tanque Rede
                </div>

                <div style="margin-top: 8px;">
                  <img src="./imagens/outorga/pin-de-localizacao-f0566b.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Consumo Humano
                </div>

                <div style="margin-top: 8px;">
                  <img src="./imagens/outorga/pin-de-localizacao-38a800.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Criação Animal
                </div>

                <div style="margin-top: 8px;">
                  <img src="./imagens/outorga/pin-de-localizacao-e60000.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Indústria
                </div>

                <div style="margin-top: 8px;">
                  <img src="./imagens/outorga/pin-de-localizacao-f57ab6.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Irrigação
                </div>

                <div style="margin-top: 8px;">
                  <img src="./imagens/outorga/pin-de-localizacao-a83800.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Mineração - Extração de AreiaCascalho em Leito de Rio
                </div>

                <div style="margin-top: 8px;">
                  <img src="./imagens/outorga/pin-de-localizacao-a83800.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Mineração - Outros Processos Extrativos
                </div>

                <div style="margin-top: 8px;">
                  <img src="./imagens/outorga/pin-de-localizacao-005ce6.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Obras Hidráulicas
                </div>

                <div style="margin-top: 8px;">
                  <img src="./imagens/outorga/pin-de-localizacao-59f0c0.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Outras
                </div>

                <div style="margin-top: 8px;">
                  <img src="./imagens/outorga/pin-de-localizacao-59f769.png" style="max-width:20px;max-height:20px;margin-left:15px;"> ReservatórioBarramentoRegularização de Vazões para Usos Múltiplos
                </div>

                <div style="margin-top: 8px;">
                  <img src="./imagens/outorga/pin-de-localizacao-8f6b42.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Sem Finalidade
                </div>

                <div style="margin-top: 8px;">
                  <img src="./imagens/outorga/pin-de-localizacao-8c3849.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Serviços
                </div>

                <div style="margin-top: 8px;">
                  <img src="./imagens/outorga/pin-de-localizacao-e69800.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Termoelétrica
                </div>


                <div style="margin-top: 8px;">
                  <img src="./imagens/outorga/pin-de-localizacao-308a3f.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Transposição
                </div>

                <div style="margin-top: 8px;">
                  <img src="./leaflet/images/pin-de-localizacao-cinza.png" style="max-width:20px;max-height:20px;margin-left:15px;"> NULL
                </div>
              </div>

              <div id="teste29">
              <div id="out_sub"></div>

              <div style="margin-top: 8px;">
                <img src="./imagens/outorga/pin-de-localizacao-ffff73.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Abastecimento Público e Esgotamento Sanitário
              </div>

              <div style="margin-top: 8px;">
                <img src="./imagens/outorga/pin-de-localizacao-bee8ff.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Aproveitamento do Potencial Hidrelétrico
              </div>

              <div style="margin-top: 8px;">
                <img src="./imagens/outorga/pin-de-localizacao-00c5ff.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Aquicultura em Tanque Escavado
              </div>

              <div style="margin-top: 8px;">
                <img src="./imagens/outorga/pin-de-localizacao-002673.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Aquicultura em Tanque Rede
              </div>

              <div style="margin-top: 8px;">
                <img src="./imagens/outorga/pin-de-localizacao-f0566b.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Consumo Humano
              </div>

              <div style="margin-top: 8px;">
                <img src="./imagens/outorga/pin-de-localizacao-38a800.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Criação Animal
              </div>

              <div style="margin-top: 8px;">
                <img src="./imagens/outorga/pin-de-localizacao-e60000.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Indústria
              </div>

              <div style="margin-top: 8px;">
                <img src="./imagens/outorga/pin-de-localizacao-f57ab6.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Irrigação
              </div>

              <div style="margin-top: 8px;">
                <img src="./imagens/outorga/pin-de-localizacao-a83800.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Mineração - Extração de AreiaCascalho em Leito de Rio
              </div>

              <div style="margin-top: 8px;">
                <img src="./imagens/outorga/pin-de-localizacao-a83800.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Mineração - Outros Processos Extrativos
              </div>

              <div style="margin-top: 8px;">
                <img src="./imagens/outorga/pin-de-localizacao-005ce6.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Obras Hidráulicas
              </div>

              <div style="margin-top: 8px;">
                <img src="./imagens/outorga/pin-de-localizacao-59f0c0.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Outras
              </div>

              <div style="margin-top: 8px;">
                <img src="./imagens/outorga/pin-de-localizacao-59f769.png" style="max-width:20px;max-height:20px;margin-left:15px;"> ReservatórioBarramentoRegularização de Vazões para Usos Múltiplos
              </div>

              <div style="margin-top: 8px;">
                <img src="./imagens/outorga/pin-de-localizacao-8f6b42.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Sem Finalidade
              </div>

              <div style="margin-top: 8px;">
                <img src="./imagens/outorga/pin-de-localizacao-8c3849.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Serviços
              </div>

              <div style="margin-top: 8px;">
                <img src="./imagens/outorga/pin-de-localizacao-e69800.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Termoelétrica
              </div>


              <div style="margin-top: 8px;">
                <img src="./imagens/outorga/pin-de-localizacao-308a3f.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Transposição
              </div>

              <div style="margin-top: 8px;">
                <img src="./leaflet/images/pin-de-localizacao-cinza.png" style="max-width:20px;max-height:20px;margin-left:15px;"> NULL
              </div>
              </div>

              <div id="teste61"></div>

              <div id="teste62"></div>

              <div id="teste25"></div>


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
      var UrlFemarh = "http://extranet.femarh.com";
      //var UrlFemarh = "http://localhost/";
    </script>

    <script>
      function legMostra(){
        var elems = document.getElementsByClassName("coor");
        var status = 0;
        for (var i = 0; i < elems.length; i++) {
        if (elems[i].checked === true) {
          status = 1;
          break;
        }
        }

        if(status === 1){
          document.getElementById('mostra').style.display = 'block';
        }else{
          document.getElementById('mostra').style.display = 'none';
        }
      }

      legMostra();
    </script>

    <!--- Código - Mostrar Área do Projeto Hist. -->

    <script src="mapas/funcoes/mostrarAreaProjHist.js"></script>

    <!--- Código - Mostrar Situação do Monitoramento e Licença de Autorização -->
    
    <script src="mapas/funcoes/mostrarSitMon.js"></script>

    <!--- ICON -->

    <script src="./iconOut.js"></script>

    <!-- Códigos dos mapas -->

    <script src="mapas/mapasCod.js"></script>

    <!-- Códigos para criar mapa -->

    <script src="mapa.js"></script>

    <!-- Códigos para mudar período dos mosaicos da Planet -->

    <script src="mapas/funcoes/mosaicoPlanet.js"></script>

    <!-- Códigos para ler arquivos geojson externo -->
              
    <script src="mapas/funcoes/file.js"></script>

    <!-- Códigos para ler arquivos geojson externo - UTM -->
          
    <script src="mapas/funcoes/GeojsonUtm.js"></script>

    <!-- Códigos para ler arquivos ShapeFile externo -->

    <script src="mapas/funcoes/consultaShap.js"></script>

    <!-- Códigos para ler arquivos KML externo -->

    <script src="mapas/funcoes/consultaKml.js"></script>

    <!-- Códigos - Áreas Licenciadas -->

    <script src="mapas/areasLicenciadas/js/areasLicenciadas1.js"></script>

    <!-- Códigos - Áreas Licenciadas até 4 Módulos Fiscais -->

    <script src="mapas/Monitoramento_4mf1/js/Mon_4mf.js"></script>

    <!-- Códigos - Áreas Institucionais -->

    <script src="mapas/areasInstitucionais/js/areasInstitucionais.js"></script>

    <!-- Códigos - Base Cartográfica -->

    <script src="mapas/baseCartografica/js/baseCartografica.js"></script>

    <!-- Códigos - femarhEmbargos -->

    <script src="mapas/femarhEmbargos/js/femarhEmbargos.js"></script>

    <!-- Códigos - controleQueimadas -->

    <script src="mapas/controleQueimadas/js/controle_queimadas.js"></script>

    <!-- Códigos - femarh_cad_dig_propriedades -->

    <script src="mapas/propostasAmpliacao/js/femarh_cad_dig_propriedades.js"></script>

    <!-- Códigos - iteraima_td -->

    <script src="mapas/propostasAmpliacao/js/iteraima_td.js"></script>

    <!-- Códigos - sigef_certificados -->

    <script src="mapas/propostasAmpliacao/js/sigef_certificados.js"></script>

    <!-- Códigos - icmbio_esec_maraca_ proposta_ampliacao -->

    <script src="mapas/propostasAmpliacao/js/icmbio_esec_maraca_ proposta_ampliacao.js"></script>

    <!-- Códigos - icmbio_flona_parima_ proposta -->

    <script src="mapas/propostasAmpliacao/js/icmbio_flona_parima_ proposta.js"></script>

    <!-- Códigos - icmbio_parna_virua_proposta_ampliacao -->

    <script src="mapas/propostasAmpliacao/js/icmbio_parna_virua_proposta_ampliacao.js"></script>


    <!-- Códigos - CAR -->

    <script src="mapas/CAR/js/car.js"></script>

    <script src="mapas/funcoes/relatorioCar.js"></script>

    <script src="mapas/funcoes/legendaSobrepCar.js"></script>


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

    <!-- Códigos - Consultar CAR -->

    <script src="mapas/funcoes/consultaCar.js"></script>

    <!-- Códigos - Agência Nacional de Mineração -->

    <script src="mapas/agenciaNacMiner/js/agenciaNacMiner.js"></script>

    <!-- Códigos - IPHAN -->

    <script src="mapas/IPHAN/js/IPHAN.js"></script>

    <!-- Códigos - IBAMA -->

    <script src="mapas/IBAMA/js/IBAMA.js"></script>

    <!-- Códigos - Outorga de Recursos Hídricos -->

    <script src="mapas/ANA/js/ANA.js"></script>

    <!-- Códigos - Dgph -->

    <script src="mapas/Dgph/js/Dgph.js"></script>

    <!-- Códigos - INPE -->

    <script src="mapas/INPE/js/INPE.js"></script>

    <!-- Códigos - Remover Temas -->

    <script src="mapas/funcoes/removerTemas.js"></script>

    <!-- Códigos - Sub Menu (NavBar) -->

    <script src="mapas/funcoes/legendaMenu.js"></script>

    <!-- Códigos - Consultar Imóvel por CPF -->

    <script src="mapas/funcoes/consultaCpf.js"></script>

    <!-- Códigos - Consultar Outorga por CPF -->

    <script src="mapas/funcoes/outorgaCons.js"></script>

    <!-- Códigos - Consultar Marcador por Coordenada Decimal -->
    
    <script src="mapas/funcoes/consultaMarc.js"></script>

    <!-- Códigos - Consultar Marcador por Coordenada DMS -->

    <script src="mapas/funcoes/consultaMarcDms.js"></script>

    <!-- Códigos - Grades -->
    
    <script src="mapas/grade/js/grade.js"></script>

    <!-- Códigos - Mapas Raster -->

    <script src="mapas/raster/js/30m_232058_20080407_20161101_543.js"></script>

    <script src="mapas/raster/js/231-059_2008-07-21.js"></script>

    <script src="mapas/raster/js/232-059_2008-04-07.js"></script>

    <script src="mapas/raster/js/231-060_2008-07-21.js"></script>

    <script src="mapas/raster/js/232-060_2008-04-07.js"></script>

    <script src="mapas/raster/js/231_058-2008_09_07.js"></script>

    <script src="mapas/raster/js/231-057_2008-09-07.js"></script>

    <script src="mapas/raster/js/231-059_2008-01-27.js"></script>

    <script src="mapas/raster/js/231-059_2008-08-06.js"></script>

    <script src="mapas/raster/js/231-060_2008-08-06.js"></script>

    <script src="mapas/raster/js/232-057_2008-05-09.js"></script>

    <script src="mapas/raster/js/233-057_2008-09-21.js"></script>

    <script src="mapas/raster/js/233-058_2008-10-23.js"></script>










    <!-- Legenda - Layers -->

    <script src="mapas/funcoes/legenda.js"></script>

    <!-- Códigos - Salvar Json -->

    <script src="mapas/funcoes/salvarJson.js"></script>


    <!-- Modal para mostrar informações do popup das camadas das Áreas Licenciadas -->


    <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content" style="min-width: 550px;">
          <div class="modal-header">
            <h5 class="modal-title" id="myModalLabel">Áreas Licenciadas</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            

              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Área do Imóvel</button>
                  <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Área do Projeto</button>
                  <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">AUOS</button>
                  <button class="nav-link" id="nav-projet-tab" data-bs-toggle="tab" data-bs-target="#nav-projet" type="button" role="tab" aria-controls="nav-projet" aria-selected="false">Monitoramento</button>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><span class="field3" id="fieldC"></span></div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><span class="field4" id="fieldD"></span></div>
                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"><span class="field1" id="fieldA"></span></div>
                <div class="tab-pane fade" id="nav-projet" role="tabpanel" aria-labelledby="nav-projet-tab"><span  class="field2" id="fieldB"></span></div>
              </div>



          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>






          <!-- Formulário oculto para enviar o conteúdo da div para gerar_pdf.php -->
          <form id="formEnviarParaPDF" action="./gerar_pdf.php" method="post" style="display: none;" target="_blank">
              <input type="hidden" id="car1" name="car1">
              <input type="hidden" id="uce" name="uce">
              <input type="hidden" id="ucf" name="ucf">
              <input type="hidden" id="am" name="am">
              <input type="hidden" id="ti" name="ti">
              <input type="hidden" id="ai" name="ai">
              <input type="hidden" id="emb" name="emb">
              <input type="hidden" id="ap" name="ap">
              <input type="hidden" id="ap4mf" name="ap4mf">
              <input type="hidden" id="assent" name="assent">
              <input type="hidden" id="saPol" name="saPol">
              <input type="hidden" id="saPon" name="saPon">
              <input type="hidden" id="os" name="os">
              <input type="hidden" id="osb" name="osb">
              <input type="hidden" id="car2" name="car2">
              <input type="hidden" id="mun" name="mun">
          </form>






    
    <script src="bootstrap/js/bootstrap.bundle.js"></script>
</html>


