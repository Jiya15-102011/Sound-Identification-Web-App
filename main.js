function n(){
    x=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/56C3CW-un/model.json',ready);
}
function ready(){
    x.classify(answer);
}
function answer(error,results){
if(error){
console.log(error);
}
else{
    console.log(results);
    r=Math.floor(Math.random()*255)+1;
    g=Math.floor(Math.random()*255)+1;
    b=Math.floor(Math.random()*255)+1;

    document.getElementById("m").innerHTML="I can hear -"+results[0].label;
    document.getElementById("a").innerHTML="Accuracy -"+ Math.floor(results[0].confidence*100)+"%";
    document.getElementById("m").style.color="rgb("+r+","+g+","+b+")";
    document.getElementById("a").style.color="rgb("+r+","+g+","+b+")";
    
    y=document.getElementById("j");
    u=document.getElementById("b");
    k=document.getElementById("t");
    g=document.getElementById("s");

    if(results[0].label == "Clap"){
    y.src="aliens-01.gif";
    u.src="aliens-02.png";
    k.src="aliens-03.png";
    g.src="aliens-04.png";
    }

    else if(results[0].label == "Tap"){
        y.src="aliens-01.png";
        u.src="aliens-02.gif";
        k.src="aliens-03.png";
        g.src="aliens-04.png";
        }

    else if(results[0].label == "Snap"){
        y.src="aliens-01.png";
        u.src="aliens-02.png";
        k.src="aliens-03.gif";
        g.src="aliens-04.png";
        }

    else{
        y.src="aliens-01.png";
        u.src="aliens-02.png";
        k.src="aliens-03.png";
        g.src="aliens-04.gif";
        }
}
}
