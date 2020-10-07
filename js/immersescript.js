//README put points and images on layers called "pointA" "pointB" etc

// let suffixes = ['A', 'B', 'C', 'D', 'E'];
let suffixes = ['A'];
var mySVG = document.getElementById("svgObject1");
mySVG.addEventListener("load",function() {
     var svgDoc = mySVG.contentDocument;

//closures: inner function should still have access to suffixes and svgDoc in outer function
  suffixes.forEach(suffix => {
    var string1 = 'point';
    var svgPoint = svgDoc.getElementById(string1.concat('_', suffix));

    var string2 = 'pic';
    var svgPic = svgDoc.getElementById(string2.concat('_', suffix));

    svgPoint.addEventListener("mouseover", function(event) {
      svgPic.setAttribute("class", "show");
    })

    svgPoint.addEventListener("mouseout", function(event) {
      svgPic.setAttribute("class", "hide");
    })
   })
})

let suffixes2 = ['B'];
var mySVG2 = document.getElementById("svgObject2");
mySVG2.addEventListener("load",function() {
     var svgDoc2 = mySVG2.contentDocument;

//closures: inner function should still have access to suffixes and svgDoc in outer function
  suffixes2.forEach(suffix => {
    var string1 = 'point';
    var svgPoint2 = svgDoc2.getElementById(string1.concat('_', suffix));

    var string2 = 'pic';
    var svgPic2 = svgDoc2.getElementById(string2.concat('_', suffix));

    svgPoint2.addEventListener("mouseover", function(event) {
      svgPic2.setAttribute("class", "show");
    })

    svgPoint2.addEventListener("mouseout", function(event) {
      svgPic2.setAttribute("class", "hide");
    })
   })
})
