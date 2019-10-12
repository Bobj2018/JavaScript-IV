// CODE here for your Lambda Classes
class Person {
	constructor(obj) {
		this.name = obj.name;
		this.age = obj.age;
		this.location = obj.location;
	}
	speak() {
        console.log(`Hello, my name ${this.name} and I am from ${this.location}.`); 
	}
}

class Instructor extends Person {
	constructor(obj) {
		super(obj);
		this.specialty = obj.specialty;
		this.favLanguage = obj.favLanguage;
		this.catchPhrase = obj.catchPhrase;
	}
	demo(subject) {
        console.log(`Today we are learning about ${subject}`); 
	}
	grade(student, subject) {
        console.log(`${student} received a perfect score on ${subject}`); 
    }
    gradeProject(student) {

        student.grade = student.grade +- (Math.floor(Math.random() * Math.floor(100 + 1))); //0 - 5
    }
}

class Student extends Person {
	constructor(obj) {
		super(obj);
		this.previousBackground = obj.previousBackground;
		this.className = obj.className;
        this.favSubjects = obj.favSubjects;
        this.grade = obj.grade;
	}
	listsSubjects() {
        this.favSubjects.forEach(subject => {
            console.log(`${subject}`);
        });
    }
	PRAssignment(subject) {
		console.log(`${this.name} has submitted a pull request for ${subject}`);  
	}
	sprintChallenge(subject) {
        console.log(`${this.name} has begun the sprint challenge for ${subject}`);  
    }
    graduation() {
        if (this.grade >= 70) {
            
            console.log("Congrats! You Pass.");
        } else {
           
            console.log("Don't worry! You got this.");
        }
    }
}

class TeamLead extends Instructor{
    constructor(obj){
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }
    standUp(){
        console.log(`${this.name} announces to ${gradClassName}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const pace = new Instructor({
    name: "Pace Ellsworth",
    age: 25,
    location: "Arizona",
    specialty: "Web Fundamentals",
    favLanguage: "Javascript",
    catchPhrase: "Let's react to that."
})

const joshua = new Student({
    name: "Joshua Rieth",
    age: 19,
    location: "Kentucky, US",
    previousBackground: "Upholstery",
    className: "WEBPT11",
    favSubjects: [
        "LESS",
        "Javascript (ES6)"
    ],
    grade: 75
})

const samir = new TeamLead({
    name: "Samir Lilienfeld",
    age: 27,
    location: null,
    gradClassName: `webpart11_samir`,
    favInstructor: "Pace"
})

console.log(joshua.grade);
samir.gradeProject(joshua);
console.log(joshua.grade);
joshua.graduation();