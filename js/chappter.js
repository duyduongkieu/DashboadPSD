var options = {
	chart: {
		height: 200,
		type: 'radialBar',
	},
	series: [50],
	colors: ['#e76c90'],
	plotOptions: {
		radialBar: {
			hollow: {
				margin: 15,
				size: '70%',
			},

			dataLabels: {
				showOn: 'always',
				name: {
					offsetY: -10,
					show: true,
					color: '#888',
					fontSize: '13px',
				},
				value: {
					color: '#111',
					fontSize: '30px',
					show: true,
				},
			},
		},
	},

	stroke: {
		lineCap: 'round',
	},
	labels: [''],
};

var chart = new ApexCharts(document.querySelector('#chart1'), options);

chart.render();
// ....................
var options = {
	chart: {
		height: 200,
		type: 'radialBar',
	},

	series: [50],
	colors: ['#fff'],
	plotOptions: {
		radialBar: {
			hollow: {
				margin: 15,
				size: '70%',
			},

			dataLabels: {
				showOn: 'always',
				name: {
					offsetY: -10,
					show: true,
					color: '#888',
					fontSize: '13px',
				},
				value: {
					color: '#fff',
					fontSize: '30px',
					show: true,
				},
			},
		},
	},

	stroke: {
		lineCap: 'round',
	},
	labels: [''],
};

var chart = new ApexCharts(document.querySelector('#chart2'), options);

chart.render();
// ...............

var options = {
	chart: {
		height: 480,
		type: 'bar',
	},
	plotOptions: {
		bar: {
			dataLabels: {
				position: 'top', // top, center, bottom
			},
		},
	},
	dataLabels: {
		enabled: false,
		formatter: function(val) {
			return val + '%';
		},
		offsetY: 0,
		style: {
			fontSize: '12px',
			colors: ['#0000'],
		},
	},
	series: [
		{
			name: 'Inflation',
			data: [75, 60, 60, 35, 75, 60, 60, 35, 75, 60, 60, 35],
		},
	],
	xaxis: {
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		position: 'bottom',
		labels: {
			offsetY: 0,
		},
		axisBorder: {
			show: false,
		},
		axisTicks: {
			show: false,
		},
		crosshairs: {
			fill: {
				type: 'gradient',
				gradient: {
					colorFrom: '#D8E3F0',
					colorTo: '#BED1E6',
					stops: [0, 100],
					opacityFrom: 0.4,
					opacityTo: 0.5,
				},
			},
		},
		tooltip: {
			enabled: true,
			offsetY: -35,
		},
	},
	fill: {
		gradient: {
			enabled: false,
			shade: 'light',
			type: 'horizontal',
			shadeIntensity: 0.25,
			gradientToColors: undefined,
			inverseColors: true,
			opacityFrom: 1,
			opacityTo: 1,
			stops: [50, 0, 100, 100],
		},
	},
	yaxis: {
		axisBorder: {
			show: false,
		},
		axisTicks: {
			show: false,
		},
		labels: {
			show: false,
			formatter: function(val) {
				return val + '%';
			},
		},
	},
	// title: {
	// 	text: '',
	// 	floating: true,
	// 	offsetY: 320,
	// 	align: 'center',
	// 	style: {
	// 		color: '#444',
	// 	},
	// },
};

var chart = new ApexCharts(document.querySelector('#chart3'), options);

chart.render();

// .....
var options = {
	chart: {
		height: 160,
		type: 'radialBar',
	},
	series: [65],
	colors: ['#06a0bd'],
	plotOptions: {
		radialBar: {
			hollow: {
				margin: 15,
				size: '70%',
			},

			dataLabels: {
				showOn: 'always',
				name: {
					offsetY: -10,
					show: true,
					color: '#888',
					fontSize: '13px',
				},
				value: {
					color: '#111',
					fontSize: '30px',
					show: true,
				},
			},
		},
	},

	stroke: {
		lineCap: 'round',
	},
	labels: [''],
};

var chart = new ApexCharts(document.querySelector('#chart4'), options);

chart.render();
// ......
