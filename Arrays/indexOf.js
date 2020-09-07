// determine if user response matches my favorite bands in the array
favBands = ["Band 1", "Band 2", "Band 3", "Band 4"];
var userBand = prompt("what is your fav band?");
var a = favBands.indexOf(userBand);

if (a > -1){
    alert("Yeah, I love them");
} else {
    alert("Nah, they are lame");
}

