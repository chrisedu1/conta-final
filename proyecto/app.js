function calcularPuntoEquilibrio() {
    const precioVenta = parseFloat(document.getElementById("precioVenta").value);
    const costosVariables = parseFloat(document.getElementById("costosVariables").value);
    const costosFijos = parseFloat(document.getElementById("costosFijos").value);

    const puntoEquilibrio = costosFijos / (precioVenta - costosVariables);
    const puntoEquilibrioQuetzales = puntoEquilibrio * precioVenta;

    document.getElementById("puntoEquilibrio").textContent = `El punto de equilibrio es: ${puntoEquilibrio.toFixed(2)} unidades (${puntoEquilibrioQuetzales.toFixed(2)} quetzales).`;

    // Crear la gráfica
    const unidades = Array.from({ length: Math.ceil(puntoEquilibrio) * 2 + 1 }, (_, i) => i);
    const ingresos = unidades.map(u => u * precioVenta);
    const costosTotales = unidades.map(u => costosFijos + costosVariables * u);

    const data = [
        {
            x: unidades,
            y: ingresos,
            mode: 'lines',
            type: 'scatter',
            name: 'Ingresos',
        },
        {
            x: unidades,
            y: costosTotales,
            mode: 'lines',
            type: 'scatter',
            name: 'Costos Totales',
        }
    ];

    const layout = {
        xaxis: {
            title: 'Unidades Vendidas'
        },
        yaxis: {
            title: 'Valor en Quetzales'
        },
        title: 'Punto de Equilibrio'
    };

    Plotly.newPlot('grafico', data, layout);
}