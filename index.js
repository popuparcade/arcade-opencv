var cv = require('opencv')
var raspivid = require('raspivid');
var fs = require('fs');


module.exports = {

  getFaces: function () {
    var file = fs.createWriteStream(__dirname + '/video.h264');

    var video = raspivid({
      'preview': "100,100", // enables pop-up window with video feed, args: x,y,w,h
      'timeout': 0
    });
    var buffer = null

    // USING ORIGINAL PIPE (alternative working version):
    // Data event is emitted many times per second, as a buffer. Buffer = frame?
    video.on('data', function (data) {
      buffer = data
      // console.log("data received")
    })

    // // ALTERNATE IMPLEMENTATION USING THE TO2 PIPE (suggested by substack):
    // var to = require('to2')

    // video.pipe(to(function (buf, enc, next) {
    //   // console.log("to2 buffer")
    //   buffer = buf
    //   next()
    // }))

    // NOW LET'S PROCESS OUR FRAME EVERY 5 SECONDS. YAY!
    setInterval(function () {
      console.log("processing frame:", buffer)
      // TODO: this is not owrking
      // processFrameForFaceDetection(buffer)
    }, 5000)


  }
}

var processFrameForFaceDetection = function(buffer) {
  // cv.readImage("./photos/family-6.jpe", function(err, im){
  cv.readImage(buffer, function(err, im){
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
}
