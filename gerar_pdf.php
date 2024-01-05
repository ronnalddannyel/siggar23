<!DOCTYPE html>
<html lang="en">
<head>

<?php
include('../../../db.php');
?>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="bootstrap/css/bootstrap.css" rel="stylesheet">
    <script src="bootstrap/js/bootstrap.bundle.js"></script>

</head>
<body>



<?php

require_once __DIR__ . '/vendor/autoload.php';

$mpdf = new \Mpdf\Mpdf();


// Receber conteúdo da div definido dinamicamente enviado via POST
if (isset($_POST['car1'])) {
    $car = json_decode($_POST['car1'], true);
    $uce = json_decode($_POST['uce'], true);
    $ucf = json_decode($_POST['ucf'], true);
    $am = json_decode($_POST['am'], true);
    $ti = json_decode($_POST['ti'], true);
    $ai = json_decode($_POST['ai'], true);
    $emb = json_decode($_POST['emb'], true);
    $ap = json_decode($_POST['ap'], true);
    $ap4mf = json_decode($_POST['ap4mf'], true);
    $assent = json_decode($_POST['assent'], true);
    $saPol = json_decode($_POST['saPol'], true);
    $saPon = $_POST['saPon'];
    $os = $_POST['os'];
    $osb = $_POST['osb'];
    $car2 = $_POST['car2'];
    $mun = $_POST['mun'];
    $Siggarr = 'Externo';

    $sql = "INSERT INTO LaudoCar (Car, Siggarr, Municipio) VALUES ('".$car2."', '".$Siggarr."', '".$mun."')";
    
        // Execute a consulta
        $result = mysqli_query($conn, $sql);
    
        if ($result) {
            echo "Inserção bem-sucedida.";
            $last_id = mysqli_insert_id($conn);

            // Recuperar o valor da coluna 'nome' usando o ID do último registro inserido
            $sql_select = "SELECT NuLaudo FROM LaudoCar WHERE id = $last_id";
            $result1 = mysqli_query($conn, $sql_select);

            if (mysqli_num_rows($result1) > 0) {
                $row = mysqli_fetch_assoc($result1);
                $NumLaudo = $row['NuLaudo'];
            }

        } else {
            echo "Erro na inserção: " . pg_last_error($conn);
        }

    date_default_timezone_set('America/Boa_Vista');
    $dataHoraAtual = date('d-m-Y H:i');

    $anoAtual = date("Y");

    $mpdf->SetMargins(15, 15, 40, 15); // Margens: Esquerda, Direita, Superior, Inferior$mpdf->SetMargins(15, 15, 15, 15); // Margens: Esquerda, Direita, Superior, Inferior
    $mpdf->SetAutoPageBreak(TRUE, 30);

    // Configurar o rodapé
    $footer = '<div style="text-align: center;">';
    $footer .= '<img src="imagens/FEMARH-LOGO1.png" style="max-width:300px; max-height:400px; width: 300px; height: auto; margin: 0 auto;">';
    $footer .= '</div>';
    $footer .= '{PAGENO}/{nbpg}';
    $mpdf->SetFooter($footer);


    $cabecalho = '<div style="display: inline-block;">';

    $cabecalho .= '<div style="float: left; width: 49%;">';
    $cabecalho .= '<img src="imagens/SIGARR3.png" style="max-width:80px; max-height:40px; margin-top: -10px; float: left;">';
    $cabecalho .= '<h4 style="float: left; text-align: left;">SIGGARR</h4>';
    $cabecalho .= '</div>';

    $cabecalho .= '<div style="float: left; width: 49%; text-align: right;">';
    $cabecalho .= '<h4>LAUDO '.$NumLaudo.'</h4>';
    $cabecalho .= '</div>';
    $cabecalho .= '</div>';
    $cabecalho .= '<hr style="margin-top: -8px;">';
    $cabecalho .= '<p style="font-size: 13px; text-align:left; font-weight: normal;"><b>Código do Resgistro CAR Consultado:</b> '.$car2.'</p>';

    $mpdf->SetHeader($cabecalho);

    // CAR
    $html = '<h4>CAR</h4>';
    $html .= '<table style="width: 100%; border-collapse: collapse;">';
    $html .= '<thead>';
    $html .= '<tr style="background-color: rgb(28, 132, 83);">';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">N°</th>';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">Código Imóvel</th>';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">Status</th>';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">Área de Sobreposição (Relativo)</th>';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">Área de Sobreposição (Absoluto)</th>';
    $html .= '</tr>';
    $html .= '</thead><tbody>';
    $cont = 1;
    // Corpo da tabela
    for ($i = 0; $i < count($car); $i += 4) {
        if (count($car) == 1) {
            $html .= '<tr>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '</tr>';
        } else {
            if($i > count($car) - 2){
                break;
            }else{
                $html .= '<tr>';
                $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $cont . '</td>';
                $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $car[$i] . '</td>';
                $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $car[$i + 1] . '</td>';
                $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $car[$i + 2] . '</td>';
                $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $car[$i + 3] . '</td>';
                $html .= '</tr>';
                $cont++;
            }
        }
    }

    $html .= '</tbody></table><br>';


    // UCE
    $html .= '<h4>Unidade de Conservação Estadual</h4>';
    $html .= '<table style="width: 100%; border-collapse: collapse;">';
    $html .= '<thead>';
    $html .= '<tr style="background-color: rgb(28, 132, 83);">';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">N°</th>';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">Nome</th>';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">Área de Sobreposição</th>';
    $html .= '</tr>';
    $html .= '</thead><tbody>';
    $cont = 1;
    // Corpo da tabela
    for ($i = 0; $i < count($uce); $i += 2) {
        if (count($uce) == 1) {
            $html .= '<tr>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '</tr>';
        } else {
            $html .= '<tr>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $cont . '</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $uce[$i] . '</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $uce[$i + 1] . '</td>';
            $html .= '</tr>';
            $cont++;
        }
    }

    $html .= '</tbody></table><br>';


    // UCF
    $html .= '<h4>Unidade de Conservação Federal</h4>';
    $html .= '<table style="width: 100%; border-collapse: collapse;">';
    $html .= '<thead>';
    $html .= '<tr style="background-color: rgb(28, 132, 83);">';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">N°</th>';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">Nome</th>';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">Área de Sobreposição</th>';
    $html .= '</tr>';
    $html .= '</thead><tbody>';
    $cont = 1;
    // Corpo da tabela
    for ($i = 0; $i < count($ucf); $i += 2) {
        if (count($ucf) == 1) {
            $html .= '<tr>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '</tr>';
        } else {
            $html .= '<tr>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $cont . '</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $ucf[$i] . '</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $ucf[$i + 1] . '</td>';
            $html .= '</tr>';
            $cont++;
        }
    }

    $html .= '</tbody></table><br>';



    // Áreas Militares
    $html .= '<h4>Áreas Militares</h4>';
    $html .= '<table style="width: 100%; border-collapse: collapse;">';
    $html .= '<thead>';
    $html .= '<tr style="background-color: rgb(28, 132, 83);">';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">N°</th>';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">Área de Sobreposição</th>';
    $html .= '</tr>';
    $html .= '</thead><tbody>';
    $cont = 1;
    // Corpo da tabela
    for ($i = 0; $i < count($am); $i++) {

        if($am[$i] == '0 ha.'){
            $html .= '<tr>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '</tr>';
        }else{
            $html .= '<tr>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $cont . '</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $am[$i] . '</td>';
            $html .= '</tr>';
            $cont++;
        }
    }

    $html .= '</tbody></table><br>';



    // Terras Indígenas
    $html .= '<h4>Terras Indígenas</h4>';
    $html .= '<table style="width: 100%; border-collapse: collapse;">';
    $html .= '<thead>';
    $html .= '<tr style="background-color: rgb(28, 132, 83);">';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">N°</th>';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">Nome</th>';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">Área de Sobreposição</th>';
    $html .= '</tr>';
    $html .= '</thead><tbody>';
    $cont = 1;
    // Corpo da tabela
    for ($i = 0; $i < count($ti); $i += 2) {
        if (count($ti) == 1) {
            $html .= '<tr>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '</tr>';
        } else {
            $html .= '<tr>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $cont . '</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $ti[$i] . '</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $ti[$i + 1] . '</td>';
            $html .= '</tr>';
            $cont++;
        }
    }

    $html .= '</tbody></table><br>';



    // Áreas Inalienáveis
    $html .= '<h4>Áreas Inalienáveis</h4>';
    $html .= '<table style="width: 100%; border-collapse: collapse;">';
    $html .= '<thead>';
    $html .= '<tr style="background-color: rgb(28, 132, 83);">';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">N°</th>';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">Área de Sobreposição</th>';
    $html .= '</tr>';
    $html .= '</thead><tbody>';
    $cont = 1;
    // Corpo da tabela
    for ($i = 0; $i < count($ai); $i++) {

        if($ai[$i] == '0 ha.'){
            $html .= '<tr>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '</tr>';
        }else{
            $html .= '<tr>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $cont . '</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $ai[$i] . '</td>';
            $html .= '</tr>';
            $cont++;
        }

    }

    $html .= '</tbody></table><br>';



    // Ibama - Embargos
    $html .= '<h4>IBAMA - Embargos</h4>';
    $html .= '<table style="width: 100%; border-collapse: collapse;">';
    $html .= '<thead>';
    $html .= '<tr style="background-color: rgb(28, 132, 83);">';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">N°</th>';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">Área Total do Embargo</th>';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">Área de Sobreposição</th>';
    $html .= '</tr>';
    $html .= '</thead><tbody>';
    $cont = 1;
    // Corpo da tabela
    for ($i = 0; $i < count($emb); $i += 2) {
        if (count($emb) == 1) {
            $html .= '<tr>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '</tr>';
        } else {
            if($i > count($emb) - 2){
                break;
            }else{
                $html .= '<tr>';
                $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $cont . '</td>';
                $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $emb[$i] . '</td>';
                $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $emb[$i + 1] . '</td>';
                $html .= '</tr>';
                $cont++;
            }
        }
    }

    $html .= '</tbody></table><br><br>';

    $html .= '<b>Área Total do Embargo: </b> Informação obtida do atributo "Área" do Banco de Dados do IBAMA.<br>';
    $html .= '<b>Área de Sobreposição: </b> Área calculada pelo SIGGARR.<br><br>';




    // Área do Projeto
    $html .= '<h4>Área do Projeto</h4>';
    $html .= '<table style="width: 100%; border-collapse: collapse;">';
    $html .= '<thead>';
    $html .= '<tr style="background-color: rgb(28, 132, 83);">';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">N°</th>';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">Tipo do Projeto</th>';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">Área de Sobreposição</th>';
    $html .= '</tr>';
    $html .= '</thead><tbody>';
    $cont = 1;
    // Corpo da tabela
    for ($i = 0; $i < count($ap); $i += 2) {
        if (count($ap) == 1) {
            $html .= '<tr>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '</tr>';
        } else {
            $html .= '<tr>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $cont . '</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $ap[$i] . '</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $ap[$i + 1] . '</td>';
            $html .= '</tr>';
            $cont++;
        }
    }

    $html .= '</tbody></table><br>';



    // Área do Projeto 4mf
    $html .= '<h4>Área do Projeto 4mf</h4>';
    $html .= '<table style="width: 100%; border-collapse: collapse;">';
    $html .= '<thead>';
    $html .= '<tr style="background-color: rgb(28, 132, 83);">';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">N°</th>';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">Tipo do Projeto</th>';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">Área de Sobreposição</th>';
    $html .= '</tr>';
    $html .= '</thead><tbody>';
    $cont = 1;
    // Corpo da tabela
    for ($i = 0; $i < count($ap4mf); $i += 2) {
        if (count($ap4mf) == 1) {
            $html .= '<tr>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '</tr>';
        } else {
            $html .= '<tr>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $cont . '</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $ap4mf[$i] . '</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $ap4mf[$i + 1] . '</td>';
            $html .= '</tr>';
            $cont++;
        }
    }

    $html .= '</tbody></table><br>';



    // Projetos de Assentamento
    $html .= '<h4>Projetos de Assentamento</h4>';
    $html .= '<table style="width: 100%; border-collapse: collapse;">';
    $html .= '<thead>';
    $html .= '<tr style="background-color: rgb(28, 132, 83);">';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">N°</th>';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">Nome</th>';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">Área de Sobreposição</th>';
    $html .= '</tr>';
    $html .= '</thead><tbody>';
    $cont = 1;
    // Corpo da tabela
    for ($i = 0; $i < count($assent); $i += 2) {
        if (count($assent) == 1) {
            $html .= '<tr>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '</tr>';
        } else {
            $html .= '<tr>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $cont . '</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $assent[$i] . '</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $assent[$i + 1] . '</td>';
            $html .= '</tr>';
            $cont++;
        }
    }

    $html .= '</tbody></table><br>';




    // IPHAN - Sítios Arqueológicos (Polígonos)
    $html .= '<h4>Sítios Arqueológicos (Polígonos)</h4>';
    $html .= '<table style="width: 100%; border-collapse: collapse;">';
    $html .= '<thead>';
    $html .= '<tr style="background-color: rgb(28, 132, 83);">';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">N°</th>';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">Identificação</th>';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">Área de Sobreposição</th>';
    $html .= '</tr>';
    $html .= '</thead><tbody>';
    $cont = 1;
    // Corpo da tabela
    for ($i = 0; $i < count($saPol); $i += 2) {
        if (count($saPol) == 1) {
            $html .= '<tr>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; text-align: center;">-</td>';
            $html .= '</tr>';
        } else {
            if($i > count($saPol) - 2){
                break;
            }else{
                $html .= '<tr>';
                $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $cont . '</td>';
                $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $saPol[$i] . '</td>';
                $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $saPol[$i + 1] . '</td>';
                $html .= '</tr>';
                $cont++;
            }
        }
    }

    $html .= '</tbody></table><br>';




    // IPHAN - Sítios Arqueológicos (Pontos)
    $html .= '<h4>Sítios Arqueológicos (Pontos)</h4>';
    $html .= '<table style="width: 100%; border-collapse: collapse;">';
    $html .= '<thead>';
    $html .= '<tr style="background-color: rgb(28, 132, 83);">';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">N°</th>';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">Quantidade de Sítios Arqueológicos (Ponto) Sobrepostos</th>';
    $html .= '</tr>';
    $html .= '</thead><tbody>';
    if ($saPon == 0) {
        $html .= '<tr>';
        $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">-</td>';
        $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">-</td>';
        $html .= '</tr>';
    }else{
        $html .= '<tr>';
        $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">1</td>';
        $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $saPon . '</td>';
        $html .= '</tr>';
    }
    $html .= '</tbody></table><br>';



    // Outorgas Superficiais
    $html .= '<h4>Outorgas Superficiais</h4>';
    $html .= '<table style="width: 100%; border-collapse: collapse;">';
    $html .= '<thead>';
    $html .= '<tr style="background-color: rgb(28, 132, 83);">';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">N°</th>';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">Quantidade de Outorgas Superficiais Sobrepostos</th>';
    $html .= '</tr>';
    $html .= '</thead><tbody>';
    if ($os == 0) {
        $html .= '<tr>';
        $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">-</td>';
        $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">-</td>';
        $html .= '</tr>';
    }else{
        $html .= '<tr>';
        $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">1</td>';
        $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $os . '</td>';
        $html .= '</tr>';
    }
    $html .= '</tbody></table><br>';



    // Outorgas Subterrâneas
    $html .= '<h4>Outorgas Subterrâneas</h4>';
    $html .= '<table style="width: 100%; border-collapse: collapse;">';
    $html .= '<thead>';
    $html .= '<tr style="background-color: rgb(28, 132, 83);">';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">N°</th>';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">Quantidade de Outorgas Subterrâneas Sobrepostos</th>';
    $html .= '</tr>';
    $html .= '</thead><tbody>';
    if ($osb == 0) {
        $html .= '<tr>';
        $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">-</td>';
        $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">-</td>';
        $html .= '</tr>';
    }else{
        $html .= '<tr>';
        $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">1</td>';
        $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">' . $osb . '</td>';
        $html .= '</tr>';
    }
    $html .= '</tbody></table><br>';

    

    // Fonte dos dados
    $html .= '<h4>FONTE DOS DADOS</h4>';
    $html .= '<table style="width: 100%; border-collapse: collapse;">';
    $html .= '<thead>';
    $html .= '<tr style="background-color: rgb(28, 132, 83);">';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">Nome</th>';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">Fonte</th>';
    $html .= '<th style="border: 1px solid #dee2e6; padding: 8px; color: white; font-size: 12px;">Atualização</th>';
    $html .= '</tr>';
    $html .= '</thead><tbody>';
    $html .= '<tr>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">CAR</td>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">SICAR</td>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">Diária - até as 9:00</td>';
    $html .= '</tr>';
    $html .= '<tr>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">Unidade de Conservação Estadual</td>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">FEMARH</td>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">Semanal - até as 9:00</td>';
    $html .= '</tr>';
    $html .= '<tr>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">Unidade de Conservação Federal</td>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">MMA</td>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">Semanal - até as 9:00</td>';
    $html .= '</tr>';
    $html .= '<tr>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">Áreas Militares</td>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">IBGE</td>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">Semanal - até as 9:00</td>';
    $html .= '</tr>';
    $html .= '<tr>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">Terras Indígenas</td>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">FUNAI</td>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">Semanal - até as 9:00</td>';
    $html .= '</tr>';
    $html .= '<tr>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">Áreas Inalienáveis</td>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">SPU</td>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">Semanal - até as 9:00</td>';
    $html .= '</tr>';
    $html .= '<tr>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">IBAMA - Embargos</td>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">IBAMA</td>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">Diária - até as 9:00</td>';
    $html .= '</tr>';
    $html .= '<tr>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">Área do Projeto</td>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">FEMARH</td>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">Diária - até as 9:00</td>';
    $html .= '</tr>';
    $html .= '<tr>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">Área do Projeto 4mf</td>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">FEMARH</td>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">Diária - até as 9:00</td>';
    $html .= '</tr>';
    $html .= '<tr>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">Projetos de Assentamento</td>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">INCRA</td>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">Semanal - até as 9:00</td>';
    $html .= '</tr>';
    $html .= '<tr>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">Sítios Arqueológicos (Polígonos)</td>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">IPHAN</td>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">Semanal - até as 9:00</td>';
    $html .= '</tr>';
    $html .= '<tr>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">Sítios Arqueológicos (Pontos)</td>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">IPHAN</td>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">Semanal - até as 9:00</td>';
    $html .= '</tr>';
    $html .= '<tr>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">Outorgas Superficiais</td>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">ANA</td>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">Semanal - até as 9:00</td>';
    $html .= '</tr>';
    $html .= '<tr>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">Outorgas Subterrâneas</td>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">ANA</td>';
    $html .= '<td style="border: 1px solid #dee2e6; padding: 8px; font-size: 12px;">Semanal - até as 9:00</td>';
    $html .= '</tr>';
    $html .= '</tbody></table><br>';



    $html .= '<div style="position: fixed; bottom: 0;"> <b>Data Laudo:</b> '.$dataHoraAtual.'</div>';
    


    // Adicionar o conteúdo capturado ao mPDF
    $mpdf->WriteHTML($html);
    
    // Definir o nome do arquivo PDF e saída para o navegador
    $filename = 'Laudo_Car.pdf';
    $mpdf->Output($filename, \Mpdf\Output\Destination::INLINE);
    exit; // Termina o script após gerar o PDF
} else {
    echo "Conteúdo não recebido.";
}
?>



    
</body>
</html>
