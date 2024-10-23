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

class Student extends Lambdasian{
    constructor(obj){
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
    }
    listSubjects(){
        return `Loving ${this.favSubjects.join(", ")}`;
    }

    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }

}

