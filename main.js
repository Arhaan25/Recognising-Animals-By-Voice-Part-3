function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Bj1VjPzkp/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);

        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + "5";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        img = document.getElementById('dog_poke');
        img1 = document.getElementById('cat_poke');
        img2 = document.getElementById('cow_poke');
        img3 = document.getElementById('rabbit_poke');
        img4 = document.getElementById('backnoise');
    }

    if (results[0].label == "Barking") {
        img.src = 'Rockruff.gif';
        img1.src = 'Shinx.png';
        img2.src = 'Miltank.avif';
        img3.src = 'Azumarill.png';
        img4.src = 'Backround Noise.jpg';
    }
    else if (results[0].label == "Meowing") {
        img.src = 'Rockruff.jfif';
        img1.src = 'Shinx.gif';
        img2.src = 'Miltank.avif';
        img3.src = 'Azumarill.png';
        img4.src = 'Backround Noise.jpg';
    }
    else if (results[0].label == "Mooing") {
        img.src = 'Rockruff.jfif';
        img1.src = 'Shinx.png';
        img2.src = 'Miltank.gif';
        img3.src = 'Azumarill.png';
        img4.src = 'Backround Noise.jpg';
    }
    else if (results[0].label == "Squeaking") {
        img.src = 'Rockruff.jfif';
        img1.src = 'Shinx.png';
        img2.src = 'Miltank.avif';
        img3.src = 'Azumarill.gif';
        img4.src = 'Backround Noise.jpg';
    }
    else {
        img.src = 'Rockruff.jfif';
        img1.src = 'Shinx.png';
        img2.src = 'Miltank.avif';
        img3.src = 'Azumarill.png';
        img4.src = 'Backround Noise.gif';
    }
}