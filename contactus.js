var name = 'yasmeen';
var age = 24;
var homeaddres = "amman";
var gender
var day = new Date();
var true1 = true;
console.log('the name', name);
console.log('the age', age);
console.log('home', homeaddres);
console.log('the gender', gender);
console.log('the day', day);
console.log('the status', true1);
var intersted = prompt('are you interested in handcrafts?')
if (intersted == 'yes') {
    alert('welcome to the website')
} else {
    alert('see the website and you will change your opinion')
}


var gender = function () { 
    var imgnum;
    var userinput = prompt('what is your gender?');
    while (userinput !== "female" && userinput !== "male") {
        console.log('gender', userinput)
        userinput = prompt('you have to choose female or male')
    }
    var input1 = prompt('how many item you would like to add');
    for (var i = 0; i < input1; i++) {
        if (userinput === "female") {
            imgnum = imgnum + "<img src='https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-824,/pub/media/catalog/product/r/s/rs_l_aztec_001_3.jpg?rnd=20200526195200'>"
        }
        else {
            imgnum = imgnum + "<img src='https://i.pinimg.com/originals/1c/3d/45/1c3d4567b06d94308206e4cce1d993de.jpg'>"
        }

    } // end of for 
    alert('done')
    return imgnum;
} // end of function 



