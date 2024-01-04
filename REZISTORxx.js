margin = 30;
height  = 300;
width  =  950;

function clickpoint2(d){
    s="nom:"+d.nom+",sbl:"+d.sbl
    s=s+' tip:'+d.tip
    s=s+' '+d.namecolor
    s=s+' '+d.rasmin
    pfon=dat1[0]
    rasfon=cosine_similarity2(d.r,d.g,d.b,pfon.r,pfon.g,pfon.b)
    s=s+' '+rasfon+' -фон'
    s=s+' '
    info2.innerHTML=s
    }


function DrawRect(minx,maxx,maxy){
svg1.remove()
svg = d3.select("body").append("svg")
   .attr("id", "svg1")
   .attr("class", "axis")
   .attr("width", width)
   .attr("height", height);
var xAxisLength = width   - 2 * margin; 
var yAxisLength = height  - 2 * margin; 
scaleX =d3.time.scale()
    .domain([minx,maxx])
    .range([0, xAxisLength]);

var xAxis = d3.svg.axis()
     .scale(scaleX)
     .orient("bottom")
     .ticks(10)
     .innerTickSize(-height+margin+margin)
     .tickFormat(d3.format('.0f'))
;
svg.append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate(" + margin + "," + (height - margin) + ")")
       .call(xAxis);

scaleY1 =d3.time.scale()
    //.domain([0,maxy])
    .domain([0,maxy])
    .range([yAxisLength,0]);

var yAxis1 = d3.svg.axis()
      .scale(scaleY1)
      .orient("left")
      .tickFormat(d3.format('.0f'))
      .innerTickSize(-width+margin+margin)
      .ticks(20);
svg.append("g")
      .attr("class", "y1-axis")
      .attr("transform", "translate(" + margin + "," + margin + ")")
      .style("stroke", "blue")
      .call(yAxis1);
}

function DrawDat2(dat){
svg.selectAll(".dot3")
    .data(dat)
    .enter().append("circle")
    .on("mousemove",function(d){ clickpoint2(d);})

    .style("stroke",'green')
    .attr("class", "dot3")
    .attr("r", 3.0)
    .attr("cx", function(d) { return scaleX(d.nom)+margin; })
    .attr("cy", function(d) { return scaleY1(d.sbl)+margin;  });

}


function DrawTrace(dat){
c=dat.length
//var Y=scaleY1(p.sbl+margin;
//var Y=scaleY1(p.sbl);
//var color="rgb("+p.r+","+p.g+","+p.b+")"
//console.log("p.H ",p.H,"p.H ",p.H,"color ",color,"color ",p.namecolor)
//console.log("Y ",Y)
//console.log("color ",color)
for (let i=0;i<c;i++){

  d=dat[i]
  x1=scaleX(d.nom)+margin
  color='red'
  color="rgb("+d.r+","+d.g+","+d.b+")"
  //width-margin
  svg.append("line")
      .attr("x1",x1 )
      .attr("y1",5 )
      .attr("x2",x1 )
      .attr("y2",margin-5 )
      .style("stroke", color)
      .style("stroke-width", 1)
   ;
 }
}



function GrafMaint(dat1){
    c=dat1.length
    maxnom=0
    imax=0
    for (let i=0;i<c;i++){
        p=dat1[i]
        if(maxnom<dat1[i].nom){maxnom=dat1[i].nom;imax=i}
        }
    DrawRect(1,dat1[imax].nom,30)
    DrawDat2(dat1)
    DrawTrace(dat1)

}
