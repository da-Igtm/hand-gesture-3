Webcam.set({
    width:380,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach(camera);

function snapshot(){
    Webcam.snap(function (data_uri){
        console.log("Rudra")
            document.getElementById("picture").innerHTML="<img id='img_capture' src="+data_uri+">"
    });
}

console.log("ml5.version="+ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/njPbVdJ3f/model.json',model_loaded);

function model_loaded(){
    console.log("model is ready");
}
function identify(){
    img=document.getElementById("img_capture");
    classifier.classify(img,gotResult);
    }
    function gotResult(error,results){
    if(error){
    console.error(error);
    }
    else{
        console.log(results);
        prediction=results[0].label;
     document.getElementById("result").innerHTML="Just check - "+prediction;
     speak();
     if(prediction=="thumbs up"){
    document.getElementById("result").innerHTML="&#128077"+" = All the best";
     }
     else if(prediction=="ok"){
         document.getElementById("result").innerHTML="&#128076"+" = That's amazing";
     }
     else{
         document.getElementById("result").innerHTML="&#9996"+" = Victory";
     }

    }   
}