function salvar() {
    let texto = `${JSON.stringify(drawnItems.toGeoJSON())}`;
    let titulo = "layer";
    let blob = new Blob([texto], { type: "text/plain;charset=utf-8" });
    saveAs(blob, titulo + ".json");
}