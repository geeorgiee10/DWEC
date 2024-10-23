a=new Object()
a.name = "jorge";
a.age = 19;
a.location = "Granada";

class Lambdasian {
    constructor(obj){
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;

    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

