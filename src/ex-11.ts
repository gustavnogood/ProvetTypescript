// DIN UPPGIFT: Skapa en ny typ från den befintliga typen Student. Använd olika Utility Types för att lösa uppgifterna. / 3 poäng

type Student = {
    id: number;
    firstName: string;
    lastName: string;
    age?: number;
    email: string;
    address?: string;
}

//1. Skapa en typ PartialStudent som representerar ett objekt där alla fält i Student är valfria.


function updateStudent(student: Student, fieldsToUpdate: Partial<Student>) {
    return { ...student, ...fieldsToUpdate };
  }
   
  const student1 = {
    id: 34,
    firstName: 'ulf',
    lastName: 'Bengtsson',
    age: 140,
    email: 'korv@korv.se',
    address: 'korvgatan3'


  };
   
  const todo2 = updateStudent(student1, {
    id: 34,
    firstName: 'katt',
  });
    
 

  
//2. Skapa en typ RequiredStudent där alla fält i Student ska vara obligatoriska.

//3. Skapa en typ StudentWithoutAddress som är lik Student, men utan address-fältet.

//4. Skapa en typ StudentName som enbart inkluderar fälten firstName och lastName från Student.

// Obs! Om du hellre vill använda interface istället för type går det bra att byta.