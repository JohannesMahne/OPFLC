/*
Johannes Mahne - johannesmahne@conor.co.za
for Conor Information Technologies
*/
$(function() {
	var charttlm;
	var chartacm;
	var chartlmv;
	var chartadg;
	var chartfcr;
	var chartcog;
	
	var ANIMATION_DURATION = 12000;
	
	var YTITLE_WEIGHT = 'Kilogram (kg)';
	var YTITLE_RAND_WEIGHT = 'Rand per Kilogram (R/kg)';
	var YTITLE_WEIGHT_DAY = 'Kilogram per Day (kg/day)';
	var YTITLE_RAND = 'Rand (R)';
	var YTITLE_EMPTY = '';
	
	var YLABLE_WEIGHT = ' kg';
	var YLABLE_RAND = 'R ';
	var YLABLE_PERWEIGHT = ' / kg';
	var YLABLE_WEIGHT_DAY = ' kg / day';
	
	var COLOUR_GROUP1 = '#3366cc'; // blue
	var COLOUR_GROUP2 = '#dc3912'; // red
	var COLOUR_GROUP3 = '#ff9900'; // orange
	var COLOUR_GROUP4 = '#109618'; // green
	var COLOUR_GROUP5 = '#990099'; // purple
	var COLOUR_BREAK_EVEN = 'black';
	var COLOUR_BREAK_EVEN_56 = 'red';
	
	$(document).ready(function() {

	$('#redraw').click(function() {

		Highcharts.setOptions({
			chart: {
				type: 'line',
				zoomType: 'xy',
				borderWidth: 1
			},
			credits: {
				enabled: false
			},
			title: {
				style: {
					fontWeight: 'bold',
					fontSize: '26px'
				}
			},
			xAxis: {
				categories: ['Auction', 'Processing', 'Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12'],
				labels: {
					rotation: 90
				}
			},
			tooltip: {
				shared: true,
				crosshairs: true,
				useHTML: true,
				valueDecimals: 0,
				headerFormat: '<small>{point.key}</small><table>',
				pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' + '<td style="text-align: right"><b>{point.y}' + YLABLE_WEIGHT + '</b></td></tr>',
				footerFormat: '</table>'
			},
			plotOptions: {
				series: {
					lineWidth: 5,
					allowPointSelect: true,
					marker: {
						enabled: false 
					},
					animation: {
						duration: ANIMATION_DURATION
					}
				}
			},
			yAxis: {
				title: {
					text: YTITLE_WEIGHT
				},
				labels: {
					formatter: function () {
						return this.value + YLABLE_WEIGHT;
					}
				}
			},
			colors: [COLOUR_GROUP1, COLOUR_GROUP2, COLOUR_GROUP3, COLOUR_GROUP4, COLOUR_GROUP5, COLOUR_BREAK_EVEN, COLOUR_BREAK_EVEN_56],
			animation: true,
			legend: {
				align: 'right',
				verticalAlign: 'middle',
				layout: 'vertical'
			},
			lang: {
				exportButtonTitle: 'Download the chart'
			}
		});
		/* End of setOptions */

		/* Average Calf Mass */
		chartacm = new Highcharts.Chart({
			chart: { renderTo: 'container-acm' },
			title: { text: 'Average Calf Mass' },
			series: [
				{ name: 'Group 1', data: [219,246,253,256,267,272,284,299,311,324,338,353,null,null] },
				{ name: 'Group 2', data: [242,264,277,278,285,299,306,323,335,349,369,385,null,null] },
				{ name: 'Group 3', data: [245,269,291,286,299,307,323,334,345,355,375,380,null,null] },
				{ name: 'Group 4', data: [249,278,292,293,305,311,328,339,354,369,389,397,null,null] },
				{ name: 'Group 5', data: [234,253,271,284,280,294,314,321,329,344,357,379,null,null] }
			]
		});

		/* Total Live Mass */
		charttlm = new Highcharts.Chart({
			chart: { renderTo: 'container-tlm' },
			title: { text: 'Total Live Mass' },
			series: [
			   { name: 'Group 1', data: [1093,1230,1263,1279,1333,1362,1420,1493,1555,1621,1689,1766,null,null] }, 
			   { name: 'Group 2', data: [1451,1582,1663,1666,1708,1791,1833,1940,2011,2093,2214,2310,null,null] }, 
			   { name: 'Group 3', data: [1713,1880,2039,2001,2096,2148,2258,2337,2414,2487,2624,2663,null,null] }, 
			   { name: 'Group 4', data: [1494,1669,1749,1759,1828,1864,1969,2032,2123,2212,2333,2379,null,null] }, 
			   { name: 'Group 5', data: [1170,1263,1353,1418,1401,1471,1570,1604,1647,1719,1783,1896,null,null] }
			] 				
		});
		
		/* Average Daily Gain */
		chartadg = new Highcharts.Chart({
			chart: { renderTo: 'container-adg' },
			title: { text: 'Average Daily Gain since Auction' },
			xAxis: { categories: ['Back-grounding','Week 1','Week 2','Week 3','Week 4','Week 5','Week 6','Week 7','Week 8','Week 9','Week 10','Week 11','Week 12']},
			yAxis: {
					title: { text: YTITLE_WEIGHT_DAY },
					labels: { formatter: function() { return this.value + YLABLE_WEIGHT_DAY; } }
			},
			tooltip: { 
				pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' + 
							 '<td style="text-align: right"><b>{point.y}' + YLABLE_WEIGHT_DAY + '</b></td></tr>',
				valueDecimals: 2
			},
			series: [
				{ name: 'Group 1', data: [1.83,1.55,1.28,1.33,1.25,1.31,1.40,1.44,1.49,1.53,1.58,null,null] },
				{ name: 'Group 2', data: [1.46,1.61,1.24,1.19,1.32,1.27,1.43,1.46,1.51,1.63,1.68,null,null] },
				{ name: 'Group 3', data: [1.59,2.12,1.42,1.52,1.45,1.56,1.56,1.56,1.56,1.67,1.60,null,null] },
				{ name: 'Group 4', data: [1.94,1.93,1.52,1.55,1.43,1.58,1.57,1.64,1.69,1.79,1.74,null,null] },
				{ name: 'Group 5', data: [1.24,1.66,1.71,1.28,1.40,1.60,1.52,1.49,1.55,1.57,1.71,null,null] }
			] 
		});



/* use 'marker: {enabled: true}' just before each 'name' component if only one entry of data is plotted */

		/* Feed Conversion Ratio */
		chartfcr = new Highcharts.Chart({
			chart: { renderTo: 'container-fcr' },
			title: { text: 'Feed Conversion Ratio' },
			xAxis: { categories: ['Week 1','Week 2','Week 3','Week 4','Week 5','Week 6','Week 7','Week 8','Week 9','Week 10','Week 11','Week 12']},
			yAxis: {
					title: { text: YTITLE_EMPTY },
					labels: { formatter: function() { return this.value; } }
			},
			tooltip: { 
				pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' + 
					 		 '<td style="text-align: right"><b>{point.y}</b></td></tr>',
				valueDecimals: 1
			},
			series: [
				{ name: 'Group 1', data: [6.8,10.3,7.9,8.4,7.4,6.6,6.5,6.4,6.5,6.4,null,null] },
				{ name: 'Group 2', data: [3.5,7.10,7.4,6.2,6.7,5.8,6.0,5.8,5.5,5.4,null,null] },
				{ name: 'Group 3', data: [2.1,5.80,5.1,5.8,5.3,5.5,5.6,5.8,5.4,5.9,null,null] },
				{ name: 'Group 4', data: [4.0,7.10,6.2,6.5,6.0,5.9,5.7,5.5,5.2,5.5,null,null] },
				{ name: 'Group 5', data: [2.9,3.10,5.2,5.1,5.0,5.3,5.6,5.6,5.7,5.4,null,null] }
			]
		});
		 		
		/* Cost of Gain */
		chartcog = new Highcharts.Chart({
			chart: { renderTo: 'container-cog' },
			title: { text: 'Cost of Gain' },
			xAxis: { categories: ['Week 1','Week 2','Week 3','Week 4','Week 5','Week 6','Week 7','Week 8','Week 9','Week 10','Week 11','Week 12']},
			yAxis: {
					title: { text: YTITLE_RAND },
					labels: { formatter: function() { return YLABLE_RAND + this.value; } }
			},
			tooltip: { 
				pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' + 
							 '<td style="text-align: right"><b>' + YLABLE_RAND + '{point.y}</b></td></tr>',
				valueDecimals: 2
			},
			series: [
				  { name: 'Group 1', data: [17.80,26.73,20.41,21.72,19.12,17.19,16.93,16.70,16.94,16.52,null,null] },
				  { name: 'Group 2', data: [9.370,19.13,19.98,16.74,18.12,15.78,16.15,15.82,14.79,14.63,null,null] },
				  { name: 'Group 3', data: [5.190,14.06,12.41,13.98,12.92,13.42,13.53,14.04,13.19,14.30,null,null] },
				  { name: 'Group 4', data: [10.76,19.20,16.72,17.62,16.14,15.84,15.26,14.85,13.89,14.89,null,null] },
				  { name: 'Group 5', data: [7.080,7.570,12.82,12.47,12.34,13.13,13.78,13.67,14.06,13.37,null,null] },
{ name: 'Break-even @ 53% dressing', data: [15.11,15.37,15.11,15.11,15.37,14.58,14.31,14.68,14.73,14.73,null,null], dashStyle: 'ShortDashDotDot'},
{ name: 'Break-even @ 56% dressing', data:          [null,null,null,null,null,null,null,null,null,15.57,null,null], dashStyle: 'ShortDashDotDot', marker: { enabled: true }} /* marker: { enabled: true }} on the same level as dashStyle */
			]
		});

		
		/* Live Mass Value */
		chartlmv = new Highcharts.Chart({
			chart: { renderTo: 'container-lmv' },
			title: { text: 'Live Mass Value' },
			xAxis: { categories: ['Auction','Preconditioning','Processing','Week 1','Week 2','Week 3','Week 4','Week 5','Week 6','Week 7','Week 8','Week 9','Week 10','Week 11','Week 12']},
			yAxis: {
					title: { text: YTITLE_RAND_WEIGHT },
					labels: { formatter: function() { return YLABLE_RAND + this.value + YLABLE_PERWEIGHT; } }
			},
			tooltip: { 
				pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' + 
							 '<td style="text-align: right"><b>' + YLABLE_RAND + 
							 '{point.y}' + YLABLE_PERWEIGHT + '</b></td></tr>',
				valueDecimals: 2
			},
			series: [ 
				  { name: 'Group 1', data: [16.29,17.75,16.55,16.58,16.94,16.85,17.20,17.04,16.80,16.76,16.71,16.78,16.66,null,null] }, 
				  { name: 'Group 2', data: [17.88,18.49,17.51,17.11,17.59,17.69,17.84,18.00,17.58,17.59,17.46,17.07,16.93,null,null] }, 
				  { name: 'Group 3', data: [17.16,17.67,16.64,15.75,16.48,16.20,16.31,16.02,16.01,15.95,16.01,15.66,15.95,null,null] }, 
				  { name: 'Group 4', data: [18.11,18.73,17.29,16.99,17.39,17.24,17.33,17.12,17.04,16.87,16.70,16.33,16.58,null,null] }, 
				  { name: 'Group 5', data: [16.37,17.60,16.87,16.22,15.88,16.50,16.43,16.15,16.24,16.31,16.18,16.20,15.84,null,null] }, 
{ name: 'Break-even @ 53% dressing', data: [16.17,16.17,15.11,15.11,15.37,15.11,15.11,15.37,14.58,14.31,14.68,14.73,14.73,null,null], dashStyle: 'ShortDashDotDot' },
			{ name: 'Break-even @ 56% dressing', data: [null,null,null,null,null,null,null,null,null,null,null,null,15.57,null,null], dashStyle: 'ShortDashDotDot', marker: { enabled: true }}
			]
		});


		/* End of individual Charts */
	});
	/* End of document ready */
	});
});
