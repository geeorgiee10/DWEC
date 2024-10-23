class car {
    constructor(model,milesPerGallon){
        this.model = model;
        this.milesPerGallon = milesPerGallon;
        this.tank = 0;
        this.odometer = 0;
    }

    fill(gallons){
        this.tank += gallons;
    }
    drive(distance){
        let maxDistanciaPosible = this.tank * this.milesPerGallon;
        if(distance < maxDistanciaPosible){
            this.odometer += distance;
            this.tank -= (distance/this.milesPerGallon);
        }
        else{
            this.odometer += maxDistanciaPosible;
            this.tank = 0;
            return `I ran out of fuel at ${this.odometer} miles!`;
        }
        
    }

}



