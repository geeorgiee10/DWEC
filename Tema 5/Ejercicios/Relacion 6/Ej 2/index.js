window.onload = function(){
    google.charts.load('current', {
        'packages':['geochart'],
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
            ['Country', 'Visitors (millions)'],
            ['France', 90],
            ['United States', 80],
            ['Spain', 78],
            ['China', 65],
            ['Italy', 64],
            ['Turkey', 51],
            ['Mexico', 45],
            ['Germany', 39],
            ['Thailand', 39],
            ['United Kingdom', 38]
          ]);
  
          var options = {
            title: 'Ránking mundial de países más turísticos (por número de visitantes)',
            colorAxis: { colors: ['#e0f3db', '#0868ac'] }, 
            legend: { textStyle: { color: '#333', fontSize: 12 } },
            backgroundColor: '#f9f9f9',
            datalessRegionColor: '#f2f2f2', 
          };
  

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }
}