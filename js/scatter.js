
  d3.csv("pedestrian.csv").then(function(data) {

    //variables for height, width, and padding
    var w = 700;
    var	h = 500;
    var p = 30;

    //create svg
    	var svg = d3.select("#scatterchart")
    	            .append("svg")
    	            .attr("width",w + p)
    	            .attr("height",h + p);


    //draw circles & bind to data

    							var circles = svg.selectAll("circle")
    							            .data(data)
    							            .enter()
    							            .append("circle");

    //maps the max value for yards with the width of the svg with padding
    	var xScale = d3.scaleLinear()
    								 .domain([0, 11])
    								 .range([p, w - p]);

    //maps the max value for touchdowns with the height of the svg with padding
    	var yScale = d3.scaleLinear()
    								 .domain([0, 95])
    							 	.range([ h - p , p ]);

    		// first value plots on xasis represents yards
    		// second value plots on y axix represents touch downs
    		// radius is the number of fumbles
    							circles.attr("cx", function(d) {return xScale(d.num311issues) })
    									  	.attr("cy",function(d) {return yScale(d.walkscore) })
    											.attr("r", 4)

    						 circles.attr("fill","#374452")
    				          .style("opacity", .7)


    	var xAxis = d3.axisBottom()
    						 .scale(xScale);
    						 //.ticks(8);
    						 //not sure why this wasn't working
    				   	svg.append("g")
    							 .attr("class", "x-axis")
    							 .attr("transform", "translate(0," + (h - p) + ")")
    						  .call(xAxis);
    							// svg.append("text")
    							// .attr("text-anchor", "end")
    							// .attr ("x", p)
    							//  .attr("y", (h+p)/2)
    							//  .text("y axis");

    	var yAxis = d3.axisLeft()
    								.scale(yScale);
    							//	.ticks(6 );
    							svg.append("g")
    							 .attr("class", "y-axis")
    							.attr("transform", "translate(" + p + ",0)")
    								.call(yAxis);
    							// svg.append("text")
    							// .attr("text-anchor", "end")
    							// .attr ("x", (w+p)/2)
    							//  .attr("y", h + 5)
    							//  .text("x axis");


    	 });
