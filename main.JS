function setup(){
    canvas = createCanvas(500, 500)
    canvas.position(500, 150)
    video = createCapture(VIDEO)
    video.size(500, 500)
    posenet = ml5.poseNet(video, modalloaded)
    posenet.on('pose', gotresults)
}
function draw(){
    background('#99e8e1')
}
function modalloaded(){
    console.log("posenet yay horray")
}
function gotresults(results){
    if(results.length > 0){
        console.log(results)
    }
}