class person {
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.stomach = [];
    }

    eat(string){
        if(this.stomach.length < 10){
            this.stomach.push(string);
        }
        else{
            console.log("El estomago esta lleno");
        }
    }
    poop (){
        this.stomach = [];
    }
    toString(){
        console.log(this.name + ", " + this.age);
    }

}



