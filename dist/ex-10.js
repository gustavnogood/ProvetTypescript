"use strict";
// DIN UPPGIFT: Utför fråga 1-3 med kodexempel i Typescript / 3 poäng
const myArray = [
    { id: 1, pet: "dog" },
    { id: 2, pet: "cat" },
];
const newPropertyAddition = myArray.map((obj) => (Object.assign(Object.assign({}, obj), { newProperty: "New value" })));
console.log(newPropertyAddition);
// 2. Ge ett exempel på en funktion med två generiska typer.
function removeRandomAndMultiply(arr, multiply) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const multipliedVal = arr.splice(randomIndex, 1);
    return [multipliedVal, multiply];
}
console.log(removeRandomAndMultiply([45345, 3453, 356753, 3562345, 3567235], 608));
const messageGreetings = (obj) => {
    return Object.assign(Object.assign({}, obj), { messageGreet: `${obj.fullName} welcome to the app`, skills: 'sd' });
};
