// determine if user response matches my favorite bands in the array
favBands = ["Band 1", "Band 2", "Band 3", "Band 4"];
var userBand = prompt("what is your fav band?");
var a = favBands.indexOf(userBand);

if (a > -1){
    alert("Yeah, I love them");
} else {
    alert("Nah, they are lame");
}

// Additional example of indexOf method
const avlIceCream = ["Chocolate", "Strawberry", "Cookie Dough"].map(v => v.toLowerCase().replace(/\s+/g, ""))
const userFav = (iceCream) => {
    flavor = iceCream.toLowerCase().replace(/\s+/g, "")
    if (avlIceCream.indexOf(flavor) > -1) {
        console.log(`We have ${iceCream} ice cream!`)
    } else {
        console.log(`I'm sorry. ${iceCream} is not available at this time.`)
    }
}
userFav("Vanilla Bean")
userFav("chocolate")