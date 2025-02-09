// problems number 1
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
console.log(colors["golden rod"])


// problems number 2

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    "passenger capacity" : 5,
};
console.log(car)


// problems number 3

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student.physics)

// problems number 4

let students = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
console.log(students)

// problems number 5

let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
    };
    let keys = Object.keys(myObject);
    console.log(keys.join())
    for(let key of keys){
        console.log(key)
    }

    // console.log(myObject)

    // for(let my in myObject){
    //     console.log(my);
    //     console.log(myObject[my])
    // }