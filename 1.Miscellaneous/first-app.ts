let username: string ;
username = "Max"
let userAge = 34
let isValid = true

// Union Types
let userId: string | number = 'abc1';
userId = 1234

// Object Types
let user1: object;
user1 = {
    name: "Max",
    age: 34,
    isValid: true,
    id: 'abc' //123
}

let user2 : {
    name: string;
    age: number;
    isValid: boolean;
    id: string | number
}
user2 = {
    name: "Max",
    age: 34,
    isValid: true,
    id: 'abc' //123
}

//Array Types
//let hobbies: Array<string>;
let hobbies: string[];

hobbies = ['sports', 'cooking', 'reading']

//Functions
function add(a:number, b:number): void {
    const result = a + b;
    console.log(result)

}

function add2(a:number, b:number): number {
    const result = a + b;
    console.log(result)
    
    return result 
}

//Function Types
function calculate( 
    a:number, 
    b:number, 
    calcFn:AddFn 
) {
    calcFn(a,b);
}

calculate(2, 5, add2 ) 

//Aliases
type AddFn = (a: number, b:number) => number;

type StringOrNum = string | number;
let userId2: StringOrNum = 'abc1'

type User = {
    name: string;
    age: number;
    isAdmin: boolean;
    id: string | number;
}
let user3: User 
user3 = {
    name: "Max",
    age: 34,
    isAdmin: true,
    id: 'abc' //123
}

//Interfaces
interface Credentials {
    password: string;
    email: string
}

let creds: Credentials

creds = {
    password: 'abc',
    email: 'test@example.com'
}

// Credentials benefits 
class AuthCredentials implements Credentials {
    password: string;
    email: string;
    userName: string
}

function login(credentials :Credentials){

}

login(creds)

login(new AuthCredentials)

// Merging Types

type Admin = {
    permissions: string[];
}

type AppUser = {
    userName: string;
}

type AppAdmin = Admin & AppUser;

let admin1 : AppAdmin;
admin1 ={
    permissions: ['login'],
    userName: 'Max'
}

// Literal types
let role: 'admin' | 'user' | 'editor';
role = 'admin'
role = 'user'
role = 'editor'
