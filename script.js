//README put points and images on layers called "pointA" "pointB" etc

let suffixes = ['A', 'B', 'C', 'D', 'E'];

var mySVG = document.getElementById("svgObject");
mySVG.addEventListener("load",function() {
     var svgDoc = mySVG.contentDocument;

//closures: inner function should still have access to suffixes and svgDoc in outer function
  suffixes.forEach(suffix => {
    var string1 = 'point';
    var svgPoint = svgDoc.getElementById(string1.concat('', suffix));

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
