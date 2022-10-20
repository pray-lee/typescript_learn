// function greeter(person: string) {
//     return 'hello' + person
// }
// let user = 'lee'
// greeter(user)
//
//
// interface Person {
//     firstName: string
//     lastName: string
// }
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + lastName;
    }
    return User;
}());
var user1 = new User('lee', 'xiaoyong');
