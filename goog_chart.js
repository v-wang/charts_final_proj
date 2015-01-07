// DO NOT USE $(document).ready() - IT WILL PREVENT HTML FROM SHOWING

   //Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);


	$("#refresh").click(function(){
		var data = new google.visualization.DataTable();

		data.addColumn($('select[name=dataType_col_a]').val(), 
					   $('input[name=col_a_label]').val());
		data.addColumn($('select[name=dataType_col_b]').val(), 
					   $('input[name=col_b_label]').val());



	// IF ELSE statements for data-type selection

	if ($('select[name=dataType_col_a]').val() == "number" && 
	   $('select[name=dataType_col_b]').val() == "string") {
		data.addRows([
			[parseInt($('input[name=cell_1a]').val()), 
					 ($('input[name=cell_1b]').val())],
			[parseInt($('input[name=cell_2a]').val()), 
					 ($('input[name=cell_2b]').val())],
			[parseInt($('input[name=cell_3a]').val()), 
					 ($('input[name=cell_3b]').val())],
			[parseInt($('input[name=cell_4a]').val()), 
					 ($('input[name=cell_4b]').val())],
	    ]);
	} else if ($('select[name=dataType_col_a]').val() == "string" && 
		$('select[name=dataType_col_b]').val() == "number") {
		data.addRows([
			[($('input[name=cell_1a]').val()), 
					parseInt($('input[name=cell_1b]').val())],
			[($('input[name=cell_2a]').val()), 
					parseInt($('input[name=cell_2b]').val())],
			[($('input[name=cell_3a]').val()), 
					parseInt($('input[name=cell_3b]').val())],
			[($('input[name=cell_4a]').val()), 
					parseInt($('input[name=cell_4b]').val())],
	    ]);
	} else if ($('select[name=dataType_col_a]').val() == "number" && 
		$('select[name=dataType_col_b]').val() == "number") {

			$('#chart_type_wrapper').append('<nobr><td><input type="radio" name="chart_type" value="scatter">scatter chart</td></nobr>');


		data.addRows([
			[parseInt($('input[name=cell_1b]').val()), 
					parseInt($('input[name=cell_1a]').val())],
			[parseInt($('input[name=cell_2b]').val()), 
					parseInt($('input[name=cell_2a]').val())],
			[parseInt($('input[name=cell_3b]').val()), 
					parseInt($('input[name=cell_3a]').val())],
			[parseInt($('input[name=cell_4b]').val()), 
					parseInt($('input[name=cell_4a]').val())],
		]);
	} else {
		alert("please correct data type," +
			"at least one column must be NUMBER type");
	}


	// automate the choice by looking for NaN 

	// is there a way to refactor using variables?

// to show error in HTML
// http://stackoverflow.com/questions/14702190/to-show-error-message-without-alert-box-in-java-script

	//current data.addRows will only work with col a as STRING and b as VALUE
	    // data.addRows([
	    //   [($('input[name=cell_1a]').val()), parseInt(($('input[name=cell_1b]').val()))],
	    //   [($('input[name=cell_2a]').val()), parseInt(($('input[name=cell_2b]').val()))],
	    //   [($('input[name=cell_3a]').val()), parseInt(($('input[name=cell_3b]').val()))],
	    //   [($('input[name=cell_4a]').val()), parseInt(($('input[name=cell_4b]').val()))],
	    // ]);

var options = {
				'title': ($('input[name=chart_title]').val()),
	    vAxis: {title: ($('input[name=col_a_label]').val())},
	    hAxis: {title: ($('input[name=col_b_label]').val())},
              	'width':500,
              	'height':400
              };

    var areachart = new google.visualization.AreaChart(document.getElementById('chart_div0'));

    var barchart = new google.visualization.BarChart(document.getElementById('chart_div0'));

    var stepchart = new google.visualization.SteppedAreaChart(document.getElementById('chart_div0'));

    var columnchart = new google.visualization.ColumnChart(document.getElementById('chart_div0'));

    var linechart = new google.visualization.LineChart(document.getElementById('chart_div0'));

    var histogram = new google.visualization.Histogram(document.getElementById('chart_div0'));

    var piechart = new google.visualization.PieChart(document.getElementById('chart_div0'));

    var scatterchart = new google.visualization.ScatterChart(document.getElementById('chart_div0'));



var col_a_array = [ parseInt($('input[name=cell_1a]').val()), parseInt($('input[name=cell_2a]').val()), parseInt($('input[name=cell_3a]').val()), parseInt($('input[name=cell_4a]').val())];
var col_b_array = [ parseInt($('input[name=cell_1b]').val()), parseInt($('input[name=cell_2b]').val()), parseInt($('input[name=cell_3b]').val()), parseInt($('input[name=cell_4b]').val())];
var max_a = Math.max.apply(Math,col_a_array);
var min_a = Math.min.apply(Math,col_a_array);
var max_b = Math.max.apply(Math,col_b_array);
var min_b = Math.min.apply(Math,col_b_array);



if($('input[name=chart_type]:radio:checked').val() == "area") {
	 areachart.draw(data, options);
} else if($('input[name=chart_type]:radio:checked').val() == "bar") {
	 barchart.draw(data, options);
} else if($('input[name=chart_type]:radio:checked').val() == "step") {
 	stepchart.draw(data, options);
} else if($('input[name=chart_type]:radio:checked').val() == "column") {
 	columnchart.draw(data, options);
} else if($('input[name=chart_type]:radio:checked').val() == "line") {
 	linechart.draw(data, options);
} else if($('input[name=chart_type]:radio:checked').val() == "histo") {
 	histogram.draw(data, options);
} else if($('input[name=chart_type]:radio:checked').val() == "pie") {
 	piechart.draw(data, options);
} else if($('input[name=chart_type]:radio:checked').val() == "scatter"){

	var options = {
				'title': ($('input[name=chart_title]').val()),
	    vAxis: {title: ($('input[name=col_a_label]').val()), minValue: min_a, maxValue: max_a},
	    hAxis: {title: ($('input[name=col_b_label]').val()), minValue: min_b, maxValue: max_b},
		};
	     scatterchart.draw(data, options);   // str/val ONLY

} else if($('input[name=chart_type]:radio:checked').val() == "trend_lin"){

	var options = {
				'title': ($('input[name=chart_title]').val()),
	    vAxis: {title: ($('input[name=col_a_label]').val()), minValue: min_a, maxValue: max_a},
	    hAxis: {title: ($('input[name=col_b_label]').val()), minValue: min_b, maxValue: max_b},
	    trendlines: {
	      0: {
	         type: 'linear',
	        //type: 'exponential',
	        //type: 'polynomial',
	        // degree: 3, // degree is used with polynomial
	        // visibleInLegend: true,
	      }
		}
		};
	     scatterchart.draw(data, options);   // str/val ONLY
} else if($('input[name=chart_type]:radio:checked').val() == "trend_exp"){

	var options = {
				'title': ($('input[name=chart_title]').val()),
	    vAxis: {title: ($('input[name=col_a_label]').val()), minValue: min_a, maxValue: max_a},
	    hAxis: {title: ($('input[name=col_b_label]').val()), minValue: min_b, maxValue: max_b},
	    trendlines: {
	      0: {
	        // type: 'linear',
	        type: 'exponential',

	        // degree: 3, // degree is used with polynomial
	        // visibleInLegend: true,
	      }
		}
		};
	     scatterchart.draw(data, options);   // str/val ONLY
} else if($('input[name=chart_type]:radio:checked').val() == "trend_poly"){

	var options = {
				'title': ($('input[name=chart_title]').val()),
	    vAxis: {title: ($('input[name=col_a_label]').val()), minValue: min_a, maxValue: max_a},
	    hAxis: {title: ($('input[name=col_b_label]').val()), minValue: min_b, maxValue: max_b},
	    trendlines: {
	      0: {
	        // type: 'linear',
	        //type: 'exponential',
	        type: 'polynomial',
	        degree: 3, // degree is used with polynomial
	        // visibleInLegend: true,
	      }
		}
		};
	     scatterchart.draw(data, options);   // str/val ONLY

} else {
	alert("please select a chart");
} 

});


 function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();

    data.addColumn('number', 'Topping');
    data.addColumn('number', 'Slices');

    data.addRows([
      [ 2001, 300],
      [ 2140, 190],
      [ 1970, 150],
      [ 1950, 120],
      [ 1840, 250]
    ]);

  var options = {'title':'How Much Pizza I Ate Last Night',
	    hAxis: {title: 'Time of Day', minValue: 1800, maxValue: 2100},
	    vAxis: {title: 'Slices', minValue: 100, maxValue: 300},
	    trendlines: {
	      0: {
	        // type: 'linear',
	        //type: 'exponential',
	        type: 'polynomial',
	        degree: 3, // degree is used with polynomial
	        visibleInLegend: true,
	      }
		}
		};

    var areachart = new google.visualization.ScatterChart(document.getElementById('chart_div0'));

    // var barchart = new google.visualization.BarChart(document.getElementById('chart_div1'));

    // var stepchart = new google.visualization.SteppedAreaChart(document.getElementById('chart_div2'));

    // var columnchart = new google.visualization.ColumnChart(document.getElementById('chart_div3'));

    // var linechart = new google.visualization.LineChart(document.getElementById('chart_div4'));

    // var histogram = new google.visualization.Histogram(document.getElementById('chart_div5'));

    // var piechart = new google.visualization.PieChart(document.getElementById('chart_div6'));



     areachart.draw(data, options);   // str/val ONLY
    // barchart.draw(data, options);  // str/val ONLY
    // stepchart.draw(data, options);  // str/val ONLY
    // columnchart.draw(data, options);  // val/val and str/val
    // linechart.draw(data, options);  // val/val and str/val
    // histogram.draw(data, options);  // val/val and str/val
    // piechart.draw(data, options);  // str/val ONLY
    // scatterchart.draw(data, options);  // ** val/val ONLY

    };


// function handleQueryResponse(response) {
//   if (response.isError()) {
//     alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
//     return;
//   }

//   var data = response.getDataTable();

// }
