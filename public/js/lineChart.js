// DEPRECATED
window.randomScalingFactor = function() {
    let valor = Math.round(Samples.utils.rand(0, 10));
    return valor
};

// Formato de la fecha.
var timeFormat = 'MM/DD/YYYY';

// Configuraciones para las gráficas del tipo LineChart.
var color = Chart.helpers.color;
var config = {
    type: 'line',
    data: {
        labels: fechas,
        datasets: [{
            label: 'Indice Calculado',
            backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
            borderColor: window.chartColors.red,
            fill: false,
            lineTension: 0,
            data: valores,
        }, {
            label: 'Indice Real',
            fill: false,
            backgroundColor: "rgba(78, 115, 223, 0.05)",
            borderColor: "rgba(78, 115, 223, 1)",
            pointRadius: 3,
            pointBackgroundColor: "rgba(78, 115, 223, 1)",
            pointBorderColor: "rgba(78, 115, 223, 1)",
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
            pointHoverBorderColor: "rgba(78, 115, 223, 1)",
            pointHitRadius: 10,
            pointBorderWidth: 2,
            lineTension: 0,
            data: indiceReal,
        }]
    },
    options: {
        maintainAspectRatio: false,
        layout: {
            padding: {
            left: 10,
            right: 25,
            top: 25,
            bottom: 0
            }
        },
        title: {
            text: 'Chart.js Time Scale'
        },
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    unit: 'day',
                    parser: timeFormat,
                    round: 'day',
                    tooltipFormat: 'll'
                }
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 20
                },
                scaleLabel: {
                    display: true,
                    labelString: 'gr/m2'
                },
                gridLines: {
                    color: "rgb(234, 236, 244)",
                    zeroLineColor: "rgb(234, 236, 244)",
                    drawBorder: false,
                    borderDash: [2],
                    zeroLineBorderDash: [2]
                }
            }]
        },
        tooltips: {
          titleMarginBottom: 10,
          titleFontColor: '#6e707e',
          titleFontSize: 14,
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          borderColor: '#dddfeb',
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          caretPadding: 10
        }
    }
};
var areaChartConfig = {
    type: 'line',
    data: {
        labels: fechas,
        datasets: [{
            label: 'Área',
            backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
            borderColor: window.chartColors.red,
            fill: true,
            lineTension: 0,
            data: area,
        }]
    },
    options: {
        maintainAspectRatio: false,
        layout: {
            padding: {
            left: 10,
            right: 25,
            top: 25,
            bottom: 0
            }
        },
        title: {
            text: 'Chart.js Time Scale'
        },
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    unit: 'day',
                    parser: timeFormat,
                    round: 'day',
                    tooltipFormat: 'll'
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Metros cuadrados'
                },
                gridLines: {
                    color: "rgb(234, 236, 244)",
                    zeroLineColor: "rgb(234, 236, 244)",
                    drawBorder: false,
                    borderDash: [2],
                    zeroLineBorderDash: [2]
                }
            }]
        },
        tooltips: {
          titleMarginBottom: 10,
          titleFontColor: '#6e707e',
          titleFontSize: 14,
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          borderColor: '#dddfeb',
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          caretPadding: 10
        }
    }
};

// Se inicializan los nombres de los meses en blanco.
// Una ves que se seleccionan los meses de comparar, se sobreescriben.
var mes1Label = "Indice Real";
var mes2Label = "Indice Calculado";
var configIndicesRealesChart = {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: mes1Label,
            backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
            borderColor: window.chartColors.red,
            fill: false,
            lineTension: 0,
            data: [],
        }, {
            label: mes2Label,
            fill: false,
            backgroundColor: "rgba(78, 115, 223, 0.05)",
            borderColor: "rgba(78, 115, 223, 1)",
            pointRadius: 3,
            pointBackgroundColor: "rgba(78, 115, 223, 1)",
            pointBorderColor: "rgba(78, 115, 223, 1)",
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
            pointHoverBorderColor: "rgba(78, 115, 223, 1)",
            pointHitRadius: 10,
            pointBorderWidth: 2,
            lineTension: 0,
            data: [],
        }]
    },
    options: {
        maintainAspectRatio: false,
        layout: {
            padding: {
            left: 10,
            right: 25,
            top: 25,
            bottom: 0
            }
        },
        title: {
            text: 'Chart.js Time Scale'
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 20
                },
                scaleLabel: {
                    display: true,
                    labelString: 'gr/m2'
                },
                gridLines: {
                    color: "rgb(234, 236, 244)",
                    zeroLineColor: "rgb(234, 236, 244)",
                    drawBorder: false,
                    borderDash: [2],
                    zeroLineBorderDash: [2]
                }
            }]
        },
        tooltips: {
          titleMarginBottom: 10,
          titleFontColor: '#6e707e',
          titleFontSize: 14,
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          borderColor: '#dddfeb',
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          caretPadding: 10
        }
    }
};

// Inicializa las graficas de rendimiento
window.onload = function() {
    var ctx = document.getElementById('indicesChart').getContext('2d');
    var areaChart = document.getElementById('areaChartRendimiento');
    window.indicesChart = new Chart(ctx, config);
    window.areaChart = new Chart(areaChart, areaChartConfig);
    console.log(window.indicesChart);
};
var ctxIndices = document.getElementById('indicesRealesChart').getContext('2d');
var indicesRealesChart = new Chart(ctxIndices, configIndicesRealesChart);
