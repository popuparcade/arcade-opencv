var cv = require('opencv')

cv.readImage("./photos/family-6.jpe", function(err, im){
  console.log("reading cv image")
  im.detectObject(cv.FACE_CASCADE, {}, function(err, faces){
    console.log("detecting faces...")
    console.log("number of faces:", faces.length)
    for (var i=0;i<faces.length; i++){
      var x = faces[i]
      im.ellipse(x.x + x.width/2, x.y + x.height/2, x.width/2, x.height/2)
    }
    im.save('./out.jpg')
  });
})

