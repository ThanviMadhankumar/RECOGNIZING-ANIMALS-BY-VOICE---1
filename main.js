function startClassification()
{
navigator.mediaDevices.getUserMedia({audio:true})
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/isqMeT2Yh/model.json',modelReady);

}

function modelReady(){
   classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error){
        console.error(error);
    }else{
        console.log(results);
        r = Math.floor(Math.random()*255);
        g = Math.floor(Math.random()*255);
        b = Math.floor(Math.random()*255);

        document.getElementById("result_label").innerHTML='i can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML='accuracy - ' + (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+r+"," + g +"," + b +")";
        document.getElementById("result_confidence").style.color = "rgb("+r+"," + g +"," + b +")";

        img1 = document.getElementById('cat');
        img2= document.getElementById('dog');
        img3= document.getElementById('cow');
        img4 = document.getElementById('lion');

        if(results[0].label == "cat"){
            img1.src = 'aliens-01.gif';
            img2.src = 'aliens-02.png';
            img3.src = 'aliens-03.png';
            img4.src = 'aliens-04.png';


        }

        else if(results[0].label == "dog"){
            img1.src = 'aliens-01.png';
            img2.src = 'aliens-02.gif';
            img3.src = 'aliens-03.png';
            img4.src = 'aliens-04.png';

            
        }

        else if(results[0].label == "cow"){
            img1.src = 'aliens-01.png';
            img2.src = 'aliens-02.png';
            img3.src = 'aliens-03.gif';
            img4.src = 'aliens-04.png';

            
        }
        else (results[0].label == "lion")
            img1.src = 'aliens-01.png';
            img2.src = 'aliens-02.png';
            img3.src = 'aliens-03.gif';
            img4.src = 'aliens-04.png';

           
        }



    }

