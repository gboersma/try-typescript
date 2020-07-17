// A student is both a person and a user, by virtue of the fact that it has the attributes
// defined for those interfaces.
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName, public loginName, public email) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

interface User {
    loginName: string;
    email: string;
}

function greetPerson(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

function greetUser(user: User) {
    return "Hey there, user " + user.loginName + " at " + user.email;
}

var user = new Student("Jane", "M.", "User", "juser", "juser@test.nodomain");
document.body.innerHTML = greetPerson(user);
//document.body.innerHTML = greetUser(user);