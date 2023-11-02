// DIN UPPGIFT: Utför fråga 1-3 med kodexempel i Typescript / 3 poäng


// 1. Ge ett exempel på en funktion med en generiskt typ.
type MyArray<T> = Array<T>;
type AddNewProperty<T> = {
  [K in keyof T]: T[K];
} & { newProperty: string };
interface MyObject {
  id: number;
  pet: string;
}
const myArray: MyArray<MyObject> = [
  { id: 1, pet: "dog" },
  { id: 2, pet: "cat" },
];
const newPropertyAddition: MyArray<AddNewProperty<MyObject>> = myArray.map((obj) => ({
  ...obj,
  newProperty: "New value",
}));
console.log(newPropertyAddition);


// 2. Ge ett exempel på en funktion med två generiska typer.
function removeRandomAndMultiply<T = string, Y = number>(arr: Array<T>, multiply: Y): [T[], Y] {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const multipliedVal = arr.splice(randomIndex, 1);
    return [multipliedVal, multiply];
   }
   console.log(removeRandomAndMultiply([45345, 3453, 356753, 3562345, 3567235], 608));


// 3. Ge ett exempel på ett interface med en generisk typ.

interface Greet<T> {
    fullName: "Ben Barks";
    skills: T
    messageGreet: string
   }
   
   const messageGreetings = (obj: Greet<string>): Greet<string> => {
    return {
      ...obj,
      messageGreet: `${obj.fullName} welcome to the app`,
    skills: 'sd'
    };
   };
