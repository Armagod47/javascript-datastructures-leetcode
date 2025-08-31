class Cookie{
    constructor(colour){
        this.colour = colour
    }
    
    getColour(){
        return this.colour;
    }
    
    setColour(colour){
        this.colour = colour;
    }
}

let cookieOne = new Cookie('green');
let cookieTwo = new Cookie('pink');
cookieOne.setColour('red');
console.log(cookieOne.getColour());