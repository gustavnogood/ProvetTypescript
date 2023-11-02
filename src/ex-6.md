###  DIN UPPGIFT: Besvara följande fråga i denna md-fil / 3 poäng

I Typescript kan både type och interfaces användas för att skapa egna sammansatta typer. I många fall kan man använda antingen type eller interfaces, men det finns också skillnader. Redogör för dem och visa med kodexempel. 

Interface och Type är väldigt lika men dom skiljer sig ändå från varandra, häng med så ska jag förklara, vi börjar med Interface:
Interface anger syntaxen som varje enhet måste följa.

Interface definierar medlemmarna i ett Interface, vilket är dess egenskaper, metoder och händelser.
Endast medlemmarnas deklarationer ingår i Interface. Den härledda klassen är ansvarig för att definiera medlemmarna.TypeScript-kompilatorn använder Interface för typkontroll, och den hjälper ofta till att upprätta en standardstruktur som de härledda klasserna följer.

nedan följer ett exempel:
interface Person {
  name: string;
  age: number;
}

const john: Person = {
  name: "John",
  age: 26,
}

vi går vidare till Type och kollar på det:
I TypeScript definieras en datatyp av dess typ. Det finns många grundläggande typer, inklusive sträng, boolean och nummer. Dessutom har TypeScript avancerade typer som inkluderar en funktion som kallas typalias. Typalias tillåter oss att ändra namnet på en typ utan att egentligen definiera en ny typ. Därför använder vi nyckelordet typ för att skapa ett nytt typalias. 
Här är ett exempel hur en Type kan användas:

type Person = {
  name: string;
  age: number;
}

const john: Person = {
  name: "John",
  age: 26,
}

Vad är det då som skiljer dessa åt, jo det är när man fortsätter skriva koden. Ett interface kan du bygga vidare på längre ned i koden utan att behöva gå tillbaka för att ändra men om du gör samma sak med en Type kommer Typescript ge dig ett error.
Här ser du ett exempel
Interface:
interface Person {
  name: string
}

interface Person {
  age: number
}

const john: Person = {
  name: "John",
  age: 26,
}
Dett går hur bra som helst men kolla vad som änder nu när vi gör samma sak med en Type:

type Person = {
  name: string
}
// Det här kommer Typescript inte gilla och den kommer säga att 'Person' redan är declared
type Person = {
  age: number
}