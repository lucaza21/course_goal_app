var username;
username = "Max";
var userAge = 34;
var isValid = true;
// Union Types
var userId = 'abc1';
userId = 1234;
// Object Types
var user1;
user1 = {
    name: "Max",
    age: 34,
    isValid: true,
    id: 'abc' //123
};
var user2;
user2 = {
    name: "Max",
    age: 34,
    isValid: true,
    id: 'abc' //123
};
//Array Types
//let hobbies: Array<string>;
var hobbies;
hobbies = ['sports', 'cooking', 'reading'];
//Functions
function add(a, b) {
    var result = a + b;
    console.log(result);
}
function add2(a, b) {
    var result = a + b;
    console.log(result);
    return result;
}
//Function Types
function calculate(a, b, calcFn) {
    calcFn(a, b);
}
calculate(2, 5, add2);
var userId2 = 'abc1';
var user3;
user3 = {
    name: "Max",
    age: 34,
    isAdmin: true,
    id: 'abc' //123
};
var creds;
creds = {
    password: 'abc',
    email: 'test@example.com'
};
// Credentials benefits 
var AuthCredentials = /** @class */ (function () {
    function AuthCredentials() {
    }
    return AuthCredentials;
}());
function login(credentials) {
}
login(creds);
login(new AuthCredentials);
var admin1;
admin1 = {
    permissions: ['login'],
    userName: 'Max'
};
// Literal types
var role;
role = 'admin';
role = 'user';
role = 'editor';
