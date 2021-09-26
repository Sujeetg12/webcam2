var capture;

function setup() {
  createCanvas(displayWidth, displayHeight);
  var constraints = {
    audio: false,
    video: {
      facingMode: {
        exact: "environment"
      }
    }  
  };
  capture = createCapture(constraints);
  
  capture.hide();
}


function draw() {
 image(capture, 0, 0); 
}
