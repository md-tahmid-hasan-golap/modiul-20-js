// object diclaration niyom
const persone = {
    name : "Golap",
    age : 20,
    wight : 55,
    isWebDeveloper : true,
    language : "javaScript",
    marrid : false,
    "my jurnay" : ["rajshahi","dhaka"]
}
persone.isWebDeveloper = false;
persone["isWebDeveloper"] = true
console.log(persone);
console.log(persone.age)
console.log(persone["isWebDeveloper"])
console.log(Object.keys(persone));
console.log(Object.values(persone))