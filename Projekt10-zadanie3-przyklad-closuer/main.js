const user = (name = "mieszkoooo", age) => {
 let userName = name;
 let userAge = age;

 function showName() {
     console.log(`Cześć ${userName}, ${userAge >= 18 ? 'Możesz kupić piwko' : 'Nie możesz kupić piwka'}`);
 }
 return showName;
}
const mieszko = user("Mieszko", 20);
const inna = user("Daga", 17);
mieszko();
inna();
