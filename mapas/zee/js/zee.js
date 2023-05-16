
// Aptidão Agrícola

var aptAgr = L.geoJSON(aptAgr, {
});

function aptAgr1(el){
    if(map.hasLayer(aptAgr)){
        map.removeLayer(aptAgr);
    }
    else {
        map.addLayer(aptAgr);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// biodivers_sistemas

var bioDivSist = L.geoJSON(bioDivSist, {
});

function bioDivSist1(el){
    if(map.hasLayer(bioDivSist)){
        map.removeLayer(bioDivSist);
    }
    else {
        map.addLayer(bioDivSist);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// biodivers_veg_campos_dunas

var bioDivVegCampDunas = L.geoJSON(bioDivVegCampDunas, {
});

function bioDivVegCampDunas1(el){
    if(map.hasLayer(bioDivVegCampDunas)){
        map.removeLayer(bioDivVegCampDunas);
    }
    else {
        map.addLayer(bioDivVegCampDunas);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// biodivers_veg_floresta

var bioDivVegFlor = L.geoJSON(bioDivVegFlor, {
});

function bioDivVegFlor1(el){
    if(map.hasLayer(bioDivVegFlor)){
        map.removeLayer(bioDivVegFlor);
    }
    else {
        map.addLayer(bioDivVegFlor);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// biodivers_veg_lavrado

var bioDivVegLavr = L.geoJSON(bioDivVegLavr, {
});

function bioDivVegLavr1(el){
    if(map.hasLayer(bioDivVegLavr)){
        map.removeLayer(bioDivVegLavr);
    }
    else {
        map.addLayer(bioDivVegLavr);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// biodivers_veg_sistemas_lacustres

var bioDivVegSistLacust = L.geoJSON(bioDivVegSistLacust, {
});

function bioDivVegSistLacust1(el){
    if(map.hasLayer(bioDivVegSistLacust)){
        map.removeLayer(bioDivVegSistLacust);
    }
    else {
        map.addLayer(bioDivVegSistLacust);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// geologia_dominios_morfo

var geoDomMorfo = L.geoJSON(geoDomMorfo, {
});

function geoDomMorfo1(el){
    if(map.hasLayer(geoDomMorfo)){
        map.removeLayer(geoDomMorfo);
    }
    else {
        map.addLayer(geoDomMorfo);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// geologia_erosao

var gepErosao = L.geoJSON(gepErosao, {
});

function gepErosao1(el){
    if(map.hasLayer(gepErosao)){
        map.removeLayer(gepErosao);
    }
    else {
        map.addLayer(gepErosao);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// geologia_geologico

var geoGeolog = L.geoJSON(geoGeolog, {
});

function geoGeolog1(el){
    if(map.hasLayer(geoGeolog)){
        map.removeLayer(geoGeolog);
    }
    else {
        map.addLayer(geoGeolog);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// geologia_potencial_mineral

var geoPotMineral = L.geoJSON(geoPotMineral, {
});

function geoPotMineral1(el){
    if(map.hasLayer(geoPotMineral)){
        map.removeLayer(geoPotMineral);
    }
    else {
        map.addLayer(geoPotMineral);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// geomorfologia_unidades_geomorfo

var geoUndGeomorfo = L.geoJSON(geoUndGeomorfo, {
});

function geoUndGeomorfo1(el){
    if(map.hasLayer(geoUndGeomorfo)){
        map.removeLayer(geoUndGeomorfo);
    }
    else {
        map.addLayer(geoUndGeomorfo);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// hidrografia_drenagem

var hidDrenagem = L.geoJSON(hidDrenagem, {
});

function hidDrenagem1(el){
    if(map.hasLayer(hidDrenagem)){
        map.removeLayer(hidDrenagem);
    }
    else {
        map.addLayer(hidDrenagem);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// hidrografia_ottobacias

var hidOttobacias = L.geoJSON(hidOttobacias, {
});

function hidOttobacias1(el){
    if(map.hasLayer(hidOttobacias)){
        map.removeLayer(hidOttobacias);
    }
    else {
        map.addLayer(hidOttobacias);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// potencial_social_ambiental

var potSocAmbiental = L.geoJSON(potSocAmbiental, {
});

function potSocAmbiental1(el){
    if(map.hasLayer(potSocAmbiental)){
        map.removeLayer(potSocAmbiental);
    }
    else {
        map.addLayer(potSocAmbiental);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// potencial_social_humano

var potSocHumano = L.geoJSON(potSocHumano, {
});

function potSocHumano1(el){
    if(map.hasLayer(potSocHumano)){
        map.removeLayer(potSocHumano);
    }
    else {
        map.addLayer(potSocHumano);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// potencial_social_institucional

var potSocInstitucional = L.geoJSON(potSocInstitucional, {
});

function potSocInstitucional1(el){
    if(map.hasLayer(potSocInstitucional)){
        map.removeLayer(potSocInstitucional);
    }
    else {
        map.addLayer(potSocInstitucional);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// potencial_social_produtivo

var potSocProdutivo = L.geoJSON(potSocProdutivo, {
});

function potSocProdutivo1(el){
    if(map.hasLayer(potSocProdutivo)){
        map.removeLayer(potSocProdutivo);
    }
    else {
        map.addLayer(potSocProdutivo);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// potencial_social

var potSocial = L.geoJSON(potSocial, {
});

function potSocial1(el){
    if(map.hasLayer(potSocial)){
        map.removeLayer(potSocial);
    }
    else {
        map.addLayer(potSocial);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// solos

var solos = L.geoJSON(solos, {
});

function solos1(el){
    if(map.hasLayer(solos)){
        map.removeLayer(solos);
    }
    else {
        map.addLayer(solos);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// vegetacao

var vegetacao = L.geoJSON(vegetacao, {
});

function vegetacao1(el){
    if(map.hasLayer(vegetacao)){
        map.removeLayer(vegetacao);
    }
    else {
        map.addLayer(vegetacao);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// vul_nat_perda_solo_2018

var vulNatPerdaSolo = L.geoJSON(vulNatPerdaSolo, {
});

function vulNatPerdaSolo1(el){
    if(map.hasLayer(vulNatPerdaSolo)){
        map.removeLayer(vulNatPerdaSolo);
    }
    else {
        map.addLayer(vulNatPerdaSolo);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// vul_nat_perda_solo_geologia_2018

var vulNatPerdaSoloGeologia = L.geoJSON(vulNatPerdaSoloGeologia, {
});

function vulNatPerdaSoloGeologia1(el){
    if(map.hasLayer(vulNatPerdaSoloGeologia)){
        map.removeLayer(vulNatPerdaSoloGeologia);
    }
    else {
        map.addLayer(vulNatPerdaSoloGeologia);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// vul_nat_perda_solo_geomorfologia_2018

var vulNatPerdSoloGeomorfologia = L.geoJSON(vulNatPerdSoloGeomorfologia, {
});

function vulNatPerdSoloGeomorfologia1(el){
    if(map.hasLayer(vulNatPerdSoloGeomorfologia)){
        map.removeLayer(vulNatPerdSoloGeomorfologia);
    }
    else {
        map.addLayer(vulNatPerdSoloGeomorfologia);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// vul_nat_perda_solo_vegetacao_2018

var vulNatPerdSoloVegetacao = L.geoJSON(vulNatPerdSoloVegetacao, {
});

function vulNatPerdSoloVegetacao1(el){
    if(map.hasLayer(vulNatPerdSoloVegetacao)){
        map.removeLayer(vulNatPerdSoloVegetacao);
    }
    else {
        map.addLayer(vulNatPerdSoloVegetacao);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// vul_nat_perda_solo_zonaclima_2018

var vulNatPerdSoloZonaclima = L.geoJSON(vulNatPerdSoloZonaclima, {
});

function vulNatPerdSoloZonaclima1(el){
    if(map.hasLayer(vulNatPerdSoloZonaclima)){
        map.removeLayer(vulNatPerdSoloZonaclima);
    }
    else {
        map.addLayer(vulNatPerdSoloZonaclima);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// zona_clima_clima_zee_2018

var zonaClimaClimaZee = L.geoJSON(zonaClimaClimaZee, {
});

function zonaClimaClimaZee1(el){
    if(map.hasLayer(zonaClimaClimaZee)){
        map.removeLayer(zonaClimaClimaZee);
    }
    else {
        map.addLayer(zonaClimaClimaZee);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// zona_clima_concentracao_chuvas

var zonaClimaConcChuvas = L.geoJSON(zonaClimaConcChuvas, {
});

function zonaClimaConcChuvas1(el){
    if(map.hasLayer(zonaClimaConcChuvas)){
        map.removeLayer(zonaClimaConcChuvas);
    }
    else {
        map.addLayer(zonaClimaConcChuvas);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// zona_clima_isolinhas_chuvas

var zonaClimaIsolChuvas = L.geoJSON(zonaClimaIsolChuvas, {
});

function zonaClimaIsolChuvas1(el){
    if(map.hasLayer(zonaClimaIsolChuvas)){
        map.removeLayer(zonaClimaIsolChuvas);
    }
    else {
        map.addLayer(zonaClimaIsolChuvas);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// zona_clima_koppen

var zonaClimaKoppen = L.geoJSON(zonaClimaKoppen, {
});

function zonaClimaKoppen1(el){
    if(map.hasLayer(zonaClimaKoppen)){
        map.removeLayer(zonaClimaKoppen);
    }
    else {
        map.addLayer(zonaClimaKoppen);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// zonas_subzona1_zup

var zonasSubzonaZup = L.geoJSON(zonasSubzonaZup, {
});

function zonasSubzonaZup1(el){
    if(map.hasLayer(zonasSubzonaZup)){
        map.removeLayer(zonasSubzonaZup);
    }
    else {
        map.addLayer(zonasSubzonaZup);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// zonas_subzona1_zup

var zonasSubzonaZup = L.geoJSON(zonasSubzonaZup, {
});

function zonasSubzonaZup1(el){
    if(map.hasLayer(zonasSubzonaZup)){
        map.removeLayer(zonasSubzonaZup);
    }
    else {
        map.addLayer(zonasSubzonaZup);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// zonas_subzona2_zue

var zonasSubzonaZue = L.geoJSON(zonasSubzonaZue, {
});

function zonasSubzonaZue1(el){
    if(map.hasLayer(zonasSubzonaZue)){
        map.removeLayer(zonasSubzonaZue);
    }
    else {
        map.addLayer(zonasSubzonaZue);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// zonas_zona1_zup

var zonasZonaZup = L.geoJSON(zonasZonaZup, {
});

function zonasZonaZup1(el){
    if(map.hasLayer(zonasZonaZup)){
        map.removeLayer(zonasZonaZup);
    }
    else {
        map.addLayer(zonasZonaZup);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// zonas_zona2_zue

var zonasZonaZue = L.geoJSON(zonasZonaZue, {
});

function zonasZonaZue1(el){
    if(map.hasLayer(zonasZonaZue)){
        map.removeLayer(zonasZonaZue);
    }
    else {
        map.addLayer(zonasZonaZue);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}


// zonas_zona3_zu

var zonasZonaZu = L.geoJSON(zonasZonaZu, {
});

function zonasZonaZu1(el){
    if(map.hasLayer(zonasZonaZu)){
        map.removeLayer(zonasZonaZu);
    }
    else {
        map.addLayer(zonasZonaZu);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}