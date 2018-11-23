var options = {
  chart: {
    height: 200,
    type: 'radialBar'
  },

  series: [50],
  colors: ['#e76c90'],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: '70%'
      },

      dataLabels: {
        showOn: 'always',
        name: {
          offsetY: -10,
          show: true,
          color: '#888',
          fontSize: '13px'
        },
        value: {
          color: '#111',
          fontSize: '30px',
          show: true
        }
      }
    }
  },

  stroke: {
    lineCap: 'round'
  },
  labels: ['']
};

var chart = new ApexCharts(document.querySelector('#chart1'), options);

chart.render();
// ....................
var options = {
  chart: {
    height: 200,
    type: 'radialBar'
  },

  series: [50],
  colors: ['#fff'],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: '70%'
      },

      dataLabels: {
        showOn: 'always',
        name: {
          offsetY: -10,
          show: true,
          color: '#888',
          fontSize: '13px'
        },
        value: {
          color: '#111',
          fontSize: '30px',
          show: true
        }
      }
    }
  },

  stroke: {
    lineCap: 'round'
  },
  labels: ['']
};

var chart = new ApexCharts(document.querySelector('#chart2'), options);

chart.render();
// ...............

var options = {
  chart: {
    type: 'heatmap',
    background: '#red',
    foreColor: '#red',
    height: 400
  },
  series: [
    {
      name: 'sales',
      data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
    }
  ],
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
  }
};

var chart = new ApexCharts(document.querySelector('#chart3'), options);

chart.render();
// ...
