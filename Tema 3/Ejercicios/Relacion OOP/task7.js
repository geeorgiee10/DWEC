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

    adjustGrade(student) {
        const change = Math.floor(Math.random() * 21) - 10;
        student.grade += change;
        if (student.grade > 100) student.grade = 100;
        if (student.grade < 0) student.grade = 0;
        return `${this.name} adjusted ${student.name}'s grade by ${change}. New grade: ${student.grade}`;
    }
}

class ProjectManager extends Instructor{
    constructor(obj){
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }

    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

class Student extends Lambdasian{
    constructor(obj){
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
        this.grade = obj.grade;
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

    graduarse(){
        if(this.grade>70){
            return `${this.name} has graduated with a grade of ${this.grade}! Congratulations!`;
        }
        else{
            return `${this.name} needs more points to graduate. Current grade: ${this.grade}. Keep working!`;
        }
    }

}
