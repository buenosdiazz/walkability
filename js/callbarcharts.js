var w = 800;
var h = 200;


//walkscore
  d3.csv("pedestrian.csv").then(function(data) {

    //console.log(data);


  var svg = d3.select("#callchart").append("svg")
              .attr("width", w)
              .attr("height", h);

  var rectangles = svg.selectAll("rect")
                      .data(data)
                      .enter()
                      .append("rect")
                      .attr("x", function(d, i) { return (i * 60) + 255;
                      })
                      .attr("y", function(d) {
             return (h - (10 *d.num311issues));
           })
                      .attr("width", 40)
                      .attr("height", function(d) {return (d.num311issues * 10)}
                    )

                      rectangles.attr("fill","green")
                           .style("opacity", .5)

  var walkscorelabels = svg.selectAll("text.walkscore")
                  .data(data)
                  .enter()
                  .append("text")
                  .attr("class", "walkscore")
                  .text(function(d) {return d.num311issues })
                  .style("font-size", "13px");
                  walkscorelabels.attr("x", function(d, i) {
                              return (i * 60) + 265 ;
                            })
                            .attr("y", function(d) {
                              return (h - 10* d.num311issues) + 12 ;
                                });


  var zipcodelabels = svg.selectAll("text.zipcode")
                      .data(data)
                      .enter()
                      .append("text")
                      .attr("class", "zipcode")
                      .text(function(d) { return d.zipcode })
                      .style("font-size", "12px");
        zipcodelabels.attr("x", function(d, i) {
                          return (i * 60) + 260;
                            })
                        .attr("y", function(d) {
                        return (h - 10 * d.num311issues) - 5 ;
                          });


  });
