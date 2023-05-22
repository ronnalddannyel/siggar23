
// Aptidão Agrícola

var aptAgr = L.geoJSON(aptAgr, {
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>Aptidão Agrícola</b></h6><p><b>sigla:</b> '+geom.properties.sigla+'<br><b>nome:</b> '+geom.properties.nome+'<br><b>classifica:</b> '+geom.properties.classifica+'<br><b>ha:</b> '+geom.properties.ha+'<br><b>class_apt:</b> '+geom.properties.class_apt+'<br><b>desc_:</b> '+geom.properties.desc_+'<br><b>desc_cont:</b> '+geom.properties.desc_cont+'<br><b>subl:</b> '+geom.properties.subl+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>biodivers_sistemas</b></h6><p><b>sistema:</b> '+geom.properties.sistema+'<br><b>padrão:</b> '+geom.properties.padrão+'<br><b>associação:</b> '+geom.properties.associação+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>biodivers_veg_campos_dunas</b></h6><p><b>area:</b> '+geom.properties.area+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>biodivers_veg_floresta</b></h6><p><b>nomeabrev:</b> '+geom.properties.nomeabrev+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>biodivers_veg_lavrado</b></h6><p><b>nomeabrev:</b> '+geom.properties.nomeabrev+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>biodivers_veg_sistemas_lacustres</b></h6><p><b>padrão:</b> '+geom.properties.padrão+'<br><b>associação:</b> '+geom.properties.associação+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>geologia_dominios_morfo</b></h6><p><b>domínios:</b> '+geom.properties.domínios+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>geologia_erosao</b></h6><p><b>litologia:</b> '+geom.properties.litologia+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>geologia_geologico</b></h6><p><b>rotulo:</b> '+geom.properties.rotulo+'<br><b>nomeext:</b> '+geom.properties.nomeext+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>geologia_potencial_mineral</b></h6><p><b>rm3:</b> '+geom.properties.rm3+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>geomorfologia_unidades_geomorfo</b></h6><p><b>uni_geomor:</b> '+geom.properties.uni_geomor+'<br><b>sigla:</b> '+geom.properties.sigla+'<br><b>legenda:</b> '+geom.properties.legenda+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>hidrografia_drenagem</b></h6><p><b>nome:</b> '+geom.properties.nome+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>hidrografia_ottobacias</b></h6><p><b>regiao48:</b> '+geom.properties.regiao48+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>potencial_social_ambiental</b></h6><p><b>nome:</b> '+geom.properties.nome+'<br><b>natural:</b> '+geom.properties.natural+'<br><b>objectid_1:</b> '+geom.properties.objectid_1+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>potencial_social_humano</b></h6><p><b>cd_geocodi:</b> '+geom.properties.cd_geocodi+'<br><b>tipo:</b> '+geom.properties.tipo+'<br><b>nm_municip:</b> '+geom.properties.nm_municip+'<br><b>nm_micro:</b> '+geom.properties.nm_micro+'<br><b>nm_meso:</b> '+geom.properties.nm_meso+'<br><b>indice_med:</b> '+geom.properties.indice_med+'<br><b>atendiment:</b> '+geom.properties.atendiment+'<br><b>densidade_:</b> '+geom.properties.densidade_+'<br><b>esgoto_san:</b> '+geom.properties.esgoto_san+'<br><b>ideb_rr_mu:</b> '+geom.properties.ideb_rr_mu+'<br><b>nivel_de_u:</b> '+geom.properties.nivel_de_u+'<br><b>oferta_de_:</b> '+geom.properties.oferta_de_+'<br><b>pessoas_al:</b> '+geom.properties.pessoas_al+'<br><b>renda_domi:</b> '+geom.properties.renda_domi+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>potencial_social_institucional</b></h6><p><b>cd_geocodi:</b> '+geom.properties.cd_geocodi+'<br><b>tipo:</b> '+geom.properties.tipo+'<br><b>cd_geocods:</b> '+geom.properties.cd_geocods+'<br><b>cd_geocodd:</b> '+geom.properties.cd_geocodd+'<br><b>nm_distrit:</b> '+geom.properties.nm_distrit+'<br><b>cd_geocodm:</b> '+geom.properties.cd_geocodm+'<br><b>nm_municip:</b> '+geom.properties.nm_municip+'<br><b>nm_micro:</b> '+geom.properties.nm_micro+'<br><b>nm_meso:</b> '+geom.properties.nm_meso+'<br><b>par_pol_el:</b> '+geom.properties.par_pol_el+'<br><b>au_pol_adm:</b> '+geom.properties.au_pol_adm+'<br><b>n_con_soci:</b> '+geom.properties.n_con_soci+'<br><b>dissolvido:</b> '+geom.properties.dissolvido+'<br><b>dissolvi_1:</b> '+geom.properties.dissolvi_1+'<br><b>indice_are:</b> '+geom.properties.indice_are+'<br><b>potencial_:</b> '+geom.properties.potencial_+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>potencial_social_produtivo</b></h6><p><b>cd_geocodi:</b> '+geom.properties.cd_geocodi+'<br><b>tipo:</b> '+geom.properties.tipo+'<br><b>cd_geocods:</b> '+geom.properties.cd_geocods+'<br><b>cd_geocodd:</b> '+geom.properties.cd_geocodd+'<br><b>nm_distrit:</b> '+geom.properties.nm_distrit+'<br><b>cd_geocodm:</b> '+geom.properties.cd_geocodm+'<br><b>nm_municip:</b> '+geom.properties.nm_municip+'<br><b>nm_micro:</b> '+geom.properties.nm_micro+'<br><b>nm_meso:</b> '+geom.properties.nm_meso+'<br><b>produt1:</b> '+geom.properties.produt1+'<br><b>produt2:</b> '+geom.properties.produt2+'<br><b>prod_graos:</b> '+geom.properties.prod_graos+'<br><b>pib_perc_m:</b> '+geom.properties.pib_perc_m+'<br><b>pib_munici:</b> '+geom.properties.pib_munici+'<br><b>consumo_en:</b> '+geom.properties.consumo_en+'<br><b>ener_rural:</b> '+geom.properties.ener_rural+'<br><b>ap_mineral:</b> '+geom.properties.ap_mineral+'<br><b>a_pecuaria:</b> '+geom.properties.a_pecuaria+'<br><b>din_indus:</b> '+geom.properties.din_indus+'<br><b>fi_atv_agr:</b> '+geom.properties.fi_atv_agr+'<br><b>est_vic_pa:</b> '+geom.properties.est_vic_pa+'<br><b>indice_med:</b> '+geom.properties.indice_med+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>potencial_social</b></h6><p><b>gridcode:</b> '+geom.properties.gridcode+'<br><b>pot_social:</b> '+geom.properties.pot_social+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>solos</b></h6><p><b>sigla:</b> '+geom.properties.sigla+'<br><b>nome:</b> '+geom.properties.nome+'<br><b>classifica:</b> '+geom.properties.classifica+'<br><b>ha:</b> '+geom.properties.ha+'<br><b>siglan1:</b> '+geom.properties.siglan1+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>vegetacao</b></h6><p><b>cod_class:</b> '+geom.properties.cod_class+'<br><b>auxiliary_:</b> '+geom.properties.auxiliary_+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>vul_nat_perda_solo_2018</b></h6><p><b>sigla:</b> '+geom.properties.sigla+'<br><b>nome:</b> '+geom.properties.nome+'<br><b>classifica:</b> '+geom.properties.classifica+'<br><b>reclass:</b> '+geom.properties.reclass+'<br><b>area_km2:</b> '+geom.properties.area_km2+'<br><b>pixel:</b> '+geom.properties.pixel+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>vul_nat_perda_solo_geologia_2018</b></h6><p><b>rotulo:</b> '+geom.properties.rotulo+'<br><b>reclas:</b> '+geom.properties.reclas+'<br><b>area_km:</b> '+geom.properties.area_km+'<br><b>pixel:</b> '+geom.properties.pixel+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>vul_nat_perda_solo_geomorfologia_2018</b></h6><p><b>domínios:</b> '+geom.properties.domínios+'<br><b>reg_geomor:</b> '+geom.properties.reg_geomor+'<br><b>uni_geomor:</b> '+geom.properties.uni_geomor+'<br><b>modelados:</b> '+geom.properties.modelados+'<br><b>sigla:</b> '+geom.properties.sigla+'<br><b>siglaugeom:</b> '+geom.properties.siglaugeom+'<br><b>reclass:</b> '+geom.properties.reclass+'<br><b>area_km:</b> '+geom.properties.area_km+'<br><b>pixel:</b> '+geom.properties.pixel+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>vul_nat_perda_solo_vegetacao_2018</b></h6><p><b>classe:</b> '+geom.properties.classe+'<br><b>tipo:</b> '+geom.properties.tipo+'<br><b>reclass:</b> '+geom.properties.reclass+'<br><b>area_km2:</b> '+geom.properties.area_km2+'<br><b>pixel:</b> '+geom.properties.pixel+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>vul_nat_perda_solo_zonaclima_2018</b></h6><p><b>zievel:</b> '+geom.properties.zievel+'<br><b>zc:</b> '+geom.properties.zc+'<br><b>zclima:</b> '+geom.properties.zclima+'<br><b>tipos:</b> '+geom.properties.tipos+'<br><b>resumo:</b> '+geom.properties.resumo+'<br><b>reclass:</b> '+geom.properties.reclass+'<br><b>area_km:</b> '+geom.properties.area_km+'<br><b>pixel:</b> '+geom.properties.pixel+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>zona_clima_clima_zee_2018</b></h6><p><b>zlevel:</b> '+geom.properties.zlevel+'<br><b>zc:</b> '+geom.properties.zc+'<br><b>zclima:</b> '+geom.properties.zclima+'<br><b>tipos:</b> '+geom.properties.tipos+'<br><b>resumo:</b> '+geom.properties.resumo+'<br><b>reclass:</b> '+geom.properties.reclass+'<br><b>area_km:</b> '+geom.properties.area_km+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>zona_clima_concentracao_chuvas</b></h6><p><b>zlevel:</b> '+geom.properties.zlevel+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>zona_clima_isolinhas_chuvas</b></h6><p><b>zlevel:</b> '+geom.properties.zlevel+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>zona_clima_koppen</b></h6><p><b>zc_kopper:</b> '+geom.properties.zc_kopper+'<br><b>tipos:</b> '+geom.properties.tipos+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>zonas_subzona1_zup</b></h6><p><b>objectid:</b> '+geom.properties.objectid+'<br><b>subzona:</b> '+geom.properties.subzona+'<br><b>recom:</b> '+geom.properties.recom+'<br><b>macrozona:</b> '+geom.properties.macrozona+'<br><b>obs:</b> '+geom.properties.obs+'<br><b>obs2:</b> '+geom.properties.obs2+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>zonas_subzona2_zue</b></h6><p><b>layer:</b> '+geom.properties.layer+'<br><b>nome:</b> '+geom.properties.nome+'<br><b>area:</b> '+geom.properties.area+'<br><b>perimeter:</b> '+geom.properties.perimeter+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>zonas_zona1_zup</b></h6><p><b>nome:</b> '+geom.properties.nome+'<br><b>area:</b> '+geom.properties.area+'<br><b>perimeter:</b> '+geom.properties.perimeter+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>zonas_zona2_zue</b></h6><p><b>area:</b> '+geom.properties.area+'<br><b>perimeter:</b> '+geom.properties.perimeter+'</p>');
    }
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
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>zonas_zona3_zu</b></h6><p><b>municipio:</b> '+geom.properties.municipio+'<br><b>parcela:</b> '+geom.properties.parcela+'<br><b>fonte:</b> '+geom.properties.fonte+'<br><b>obs:</b> '+geom.properties.obs+'<br><b>nome_unico:</b> '+geom.properties.nome_unico+'<br><b>area:</b> '+geom.properties.area+'<br><b>perimeter:</b> '+geom.properties.perimeter+'</p>');
    }
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