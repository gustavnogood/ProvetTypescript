### DIN UPPGIFT: Besvara följande fråga i denna md-fil / 3 poäng

Beskriv vad generics är i TypeScript och varför de är användbara.
Hur skiljer sig generics från att använda "any" i TypeScript?
Generics är ett sätt att göra återanvändbara funktioner eller komponenter med flera typer i Typescript. Detta innebär att vi dynamiskt kan definiera vilken typ av parameter eller funktion som kommer att deklareras i förväg. Detta är väldigt praktiskt när vi behöver använda viss logik i vår applikation; med dessa återanvändbara delar av logik kan vi skapa funktioner som tar in och ger ut sina egna typer.
Om vi kollar på detta kodexempel där vi använder generics:

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

Här betecknade vi en typ som heter <T>, vilket gör att den fungerar mer generisk. Detta kommer att hålla den typ av data som tas emot av funktionen själv. Detta innebär att typen av funktion nu parametriseras i termer av en typparameter <T>.

Vi definierar först en generisk typ som representerar en array av objekt och skapar en annan typ, AddNewProperty, som lägger till en ny egenskap till varje objekt i arrayen.

Varför använder vi inte bara Any då kanske du frågar. Det kan man såklart göra men det blir inte lika tydligt vad Any gör och den kommer inte heller vara lika bra på att hitta fel om det skulle uppstå något.