function toggleMenu(visible) {
    document.querySelector('.sidebar').classList.toggle('visible', visible)
}

document.querySelector('.hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu()
});



function legendClickCallback(event) {
    event = event || window.event;
      
    var target = event.target || event.srcElement;
    while (target.nodeName !== 'LI') {
        target = target.parentElement;
    }
    var parent = target.parentElement;
    var chartId = parseInt(parent.classList[0].split("-")[0], 10);
    var chart = Chart.instances[chartId];
    var index = Array.prototype.slice.call(parent.children).indexOf(target);
    var meta = chart.getDatasetMeta(index);
      
    if (meta.hidden === null) {
        meta.hidden = !chart.data.datasets[index].hidden;
        target.classList.add('hidden');
    } else {
        target.classList.remove('hidden');
        meta.hidden = null;
    }
    chart.update();
}
      
    var ctx = document.getElementById("myChart");
    Chart.defaults.global.defaultFontColor = '#9c9c9c';
    Chart.defaults.global.defaultFontFamily = '"Montserrat", sans-serif';
    var myLegendContainer = document.getElementById("myChartLegend");
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        datasets: [
        {
            label: "Signups",
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ]
        },
        {
            label: "FTD",
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ]
        },
        {
            label: "Earned",
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ]
        },
      ]
    },
    options: {
        legend: {
        display: false
        },
        scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
            }
        }]
      }
    }
  });
      
    myLegendContainer.innerHTML = myChart.generateLegend();
  var legendItems = myLegendContainer.getElementsByTagName('li');
    for (var i = 0; i < legendItems.length; i += 1) {
    legendItems[i].addEventListener("click", legendClickCallback, false);
    }
            