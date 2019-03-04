class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string){
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person{
    firstName: string; 
    middleInitial: string; 
    lastName: string;
}

function greeter(person: Person){
    return "Hello, " + person.firstName + " " + person.middleInitial + " " + person.lastName;
}
//réutilise la class Student
let user = new Student ("Max", "The", "User");

document.body.innerHTML = greeter(user);