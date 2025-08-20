// Cargar Google Charts
// Cargar librería de Google Charts
google.charts.load('current', { packages: ['corechart'] });


// desayunos--------------
document.addEventListener('DOMContentLoaded', () => {
    google.charts.setOnLoadCallback(() => {
        const modal = document.getElementById('modalGrafico');
        if (!modal) {
            console.error("No se encontró el modal con ID 'modalGrafico'");
            return;
        }

        modal.addEventListener('shown.bs.modal', function () {
            console.log("Modal abierto, cargando gráfico...");
            drawChart();
        });

        window.addEventListener('resize', () => {
            if (modal.classList.contains('show')) {
                drawChart();
            }
        });
    });
});


function drawChart() {
    const data = google.visualization.arrayToDataTable([
        ['Tipo de desayuno', 'Preferencias'],
        ['Gallo Pinto', 445],
        ['Panqueques', 226],
        ['Tostadas Francesas', 312],
        ['Otros', 100]
    ]);

    const options = {
        title: 'Preferencias de Desayunos',
        pieHole: 0.4,
         colors: ['#f4a261', '#e76f51', '#2a9d8f', '#264653', '#e9c46a'],
        chartArea: { width: '90%', height: '80%' }
    };

    const chartDiv = document.getElementById('grafico_div');
    if (!chartDiv) {
        console.error("No se encontró el div 'grafico_div' para dibujar el gráfico.");
        return;
    }

    const chart = new google.visualization.PieChart(chartDiv);
    chart.draw(data, options);
}




//bocadillos---------------------
document.addEventListener('DOMContentLoaded', () => {
    google.charts.setOnLoadCallback(() => {
        const modal1 = document.getElementById('modalBocadillos');
        if (!modal1) {
            console.error("No se encontró el modal con ID 'modalGrafico'");
            return;
        }

        modal1.addEventListener('shown.bs.modal', function () {
            console.log("Modal abierto, cargando gráfico...");
           drawChartbocadillos();
        });

        window.addEventListener('resize', () => {
            if (modal1.classList.contains('show')) {
                drawChartbocadillos();
            }
        });
    });
});



function drawChartbocadillos() {
    const data = google.visualization.arrayToDataTable([
        ['Tipo de Bocadillos', 'Preferencias'],
        ['Empanadas', 445],
        ['Sandwich Clasico', 226],
        ['Arepas', 312],
        ['Otros', 100]
    ]);

    const options = {
        title: 'Preferencias de Bocadillos',
        pieHole: 0.4,
         colors: ['#f4a261', '#e76f51', '#2a9d8f', '#264653', '#e9c46a'],
        chartArea: { width: '90%', height: '80%' }
    };

    const chartDiv = document.getElementById('grafico_div1');
    if (!chartDiv) {
        console.error("No se encontró el div 'grafico_div1' para dibujar el gráfico.");
        return;
    }

    const chart = new google.visualization.ColumnChart(chartDiv);
    chart.draw(data, options);
}



// Bebidas Frias -----------------------

document.addEventListener('DOMContentLoaded', () => {
    google.charts.setOnLoadCallback(() => {
        const modal2 = document.getElementById('modalBebidasFrias');
        if (!modal2) {
            console.error("No se encontró el modal con ID 'modalGrafico'");
            return;
        }

        modal2.addEventListener('shown.bs.modal', function () {
            console.log("Modal abierto, cargando gráfico...");
           drawChartbebidas();
        });

        window.addEventListener('resize', () => {
            if (modal2.classList.contains('show')) {
                drawChartbebidas();
            }
        });
    });
});



function drawChartbebidas() {
    const data = google.visualization.arrayToDataTable([
        ['Tipo de Bebidas', 'Preferencias'],
        ['Batido Fresa', 445],
        ['Jugo Naranja', 226],
        ['Te Frio', 312],
        ['Otros', 100]
    ]);

    const options = {
        title: 'Preferencias de Bebidas',
        pieHole: 0.4,
         colors: ['#f4a261', '#e76f51', '#2a9d8f', '#264653', '#e9c46a'],
        chartArea: { width: '90%', height: '80%' }
    };

    const chartDiv = document.getElementById('grafico_div2');
    if (!chartDiv) {
        console.error("No se encontró el div 'grafico_div2' para dibujar el gráfico.");
        return;
    }

    const chart = new google.visualization.BarChart(chartDiv);
    chart.draw(data, options);
}


// Bebidas Calientes -----------------------

document.addEventListener('DOMContentLoaded', () => {
    google.charts.setOnLoadCallback(() => {
        const modal3 = document.getElementById('modalBebidasCalientes');
        if (!modal3) {
            console.error("No se encontró el modal con ID 'modalGrafico'");
            return;
        }

        modal3.addEventListener('shown.bs.modal', function () {
            console.log("Modal abierto, cargando gráfico...");
           drawChartbebidasC();
        });

        window.addEventListener('resize', () => {
            if (modal3.classList.contains('show')) {
                drawChartbebidasC();
            }
        });
    });
});



function drawChartbebidasC() {
    const data = google.visualization.arrayToDataTable([
        ['Tipo de Bebidas', 'Preferencias'],
        ['Cafe Negro', 445],
        ['Capuccino', 226],
        ['Chocolate Caliente', 312],
        ['Otros', 100]
    ]);

    const options = {
        title: 'Preferencias de Bebidas',
        pieHole: 0.4,
        is3D: true,
         colors: ['#f4a261', '#e76f51', '#2a9d8f', '#264653', '#e9c46a'],
        chartArea: { width: '90%', height: '80%' }
    };

    const chartDiv = document.getElementById('grafico_div3');
    if (!chartDiv) {
        console.error("No se encontró el div 'grafico_div3' para dibujar el gráfico.");
        return;
    }

    const chart = new google.visualization.PieChart(chartDiv);
    chart.draw(data, options);
}


//Postres----------

document.addEventListener('DOMContentLoaded', () => {
    google.charts.setOnLoadCallback(() => {
        const modal4 = document.getElementById('modalPostres');
        if (!modal4) {
            console.error("No se encontró el modal con ID 'modalGrafico'");
            return;
        }

        modal4.addEventListener('shown.bs.modal', function () {
            console.log("Modal abierto, cargando gráfico...");
           drawChartPostres();
        });

        window.addEventListener('resize', () => {
            if (modal4.classList.contains('show')) {
                drawChartPostres();
            }
        });
    });
});



function drawChartPostres() {
    const data = google.visualization.arrayToDataTable([
        ['Tipo de Postres', 'Preferencias'],
        ['Cafe Negro', 445],
        ['Capuccino', 226],
        ['Chocolate Caliente', 312],
        ['Otros', 100]
    ]);

    const options = {
        title: 'Preferencias de Postres',
        pieHole: 0.4,
        is3D: true,
         colors: ['#f4a261', '#e76f51', '#2a9d8f', '#264653', '#e9c46a'],
        chartArea: { width: '90%', height: '80%' }
    };

    const chartDiv = document.getElementById('grafico_div4');
    if (!chartDiv) {
        console.error("No se encontró el div 'grafico_div4' para dibujar el gráfico.");
        return;
    }

    const chart = new google.visualization.AreaChart(chartDiv);
    chart.draw(data, options);
}


//PlatosFuertes----------

document.addEventListener('DOMContentLoaded', () => {
    google.charts.setOnLoadCallback(() => {
        const modal5 = document.getElementById('modalPlatosFuertes');
        if (!modal5) {
            console.error("No se encontró el modal con ID 'modalGrafico'");
            return;
        }

        modal5.addEventListener('shown.bs.modal', function () {
            console.log("Modal abierto, cargando gráfico...");
           drawChartPlatos();
        });

        window.addEventListener('resize', () => {
            if (modal5.classList.contains('show')) {
                drawChartPlatos();
            }
        });
    });
});



function drawChartPlatos() {
    const data = google.visualization.arrayToDataTable([
        ['Tipo de Platillos', 'Preferencias'],
        ['Casado', 445],
        ['Lasania', 226],
        ['Pollo Asado', 312],
        ['Otros', 100]
    ]);

    const options = {
        title: 'Preferencias de Platos Fuertes',
        pieHole: 0.4,
        is3D: true,
         colors: ['#f4a261', '#e76f51', '#2a9d8f', '#264653', '#e9c46a'],
        chartArea: { width: '90%', height: '80%' }
    };

    const chartDiv = document.getElementById('grafico_div5');
    if (!chartDiv) {
        console.error("No se encontró el div 'grafico_div5' para dibujar el gráfico.");
        return;
    }

    const chart = new google.visualization.ColumnChart(chartDiv);
    chart.draw(data, options);
}