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

class Instructor extends Lambdasian{
    constructor(obj){
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student,subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

