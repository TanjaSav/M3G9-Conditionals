// Create a container for output
const container = document.createElement("div");
container.id = "person-container";
document.body.appendChild(container);

// Helper function to append text to container
function appendMessage(message: string): void {
  const p = document.createElement("p");
  p.textContent = message;
  container.appendChild(p);
}


// Define a type for a Person
type Person = {
  name: string;       // The person's full name
  dateOfBirth: Date;  // Their date of birth as a Date object
  children: number;   // Their number of children
  country: string;    // Country of origin or residence
  knowsHowToProgram: boolean; // Whether they know how to program (true/false)
};
// Create an array of Person objects with sample data
const people: Person[] = [
  { 
    name: 'Janith Penniall', 
    dateOfBirth: new Date("03-03-1996"), // note: MM-DD-YYYY format
    children: 0, 
    country: "China", 
    knowsHowToProgram: false
  },
  { 
    name: 'Reube Neads', 
    dateOfBirth: new Date("07-30-1990"),
    children: 3,
    country: "Morocco",
    knowsHowToProgram: true
  },
  {
    name: 'Estevan McReidy',
    dateOfBirth: new Date("01-26-1994"),
    children: 5,
    country: "Philippines",
    knowsHowToProgram: true
  },
  {
    name: 'Oralia Terran',
    dateOfBirth: new Date("04-17-1986"),
    children: 2,
    country: "Sweden",
    knowsHowToProgram: false
  },
  {
    name: 'Amos Gronowe',
    dateOfBirth: new Date("04-29-1990"),
    children: 5,
    country: "China",
    knowsHowToProgram: true
  },
];

// Check if the first person in the array is older than the last person

// Safely get the date of birth of the first person using optional chaining.
// If the value is missing, use an empty string to avoid creating an invalid Date.
const firstDOB = new Date(people[0]?.dateOfBirth ?? "");
// Safely get the date of birth of the last person in the array.
// Гse an empty string as a fallback to prevent runtime errors.
const lastDOB = new Date(people[people.length - 1]?.dateOfBirth ?? "");

// Compare the two dates.
if (firstDOB < lastDOB) {
  appendMessage("No, the first person is younger."); // If the first person's date is later, they are younger.
} else {
  appendMessage("Yes, the first person is older."); // Otherwise, they are older.
};


// Check if the 2nd and 3rd person have the same number of children
// Use optional chaining to safely access the 'children' property
const secondPersonChildren = people[1]?.children;
const thirdPersonChildren = people[2]?.children;

if (secondPersonChildren !== undefined && thirdPersonChildren !== undefined) {
  if (secondPersonChildren === thirdPersonChildren) {
    appendMessage("Yes, they have the same number of children.");
  } else {
    appendMessage("No, they have a different number of children.");
  }
} else {
  appendMessage("Unable to determine — one of the persons is missing.");
};


// Check if the 1st and 4th person in the 'people' array know how to program

// Get the value of 'knowsHowToProgram' from the first person
const firstPersonKnows = people[0]?.knowsHowToProgram;
// Get the value of 'knowsHowToProgram' from the fourth person
const fourthPersonKnows = people[3]?.knowsHowToProgram;

// If both values are true, it means both people know how to program
if (firstPersonKnows === true && fourthPersonKnows === true) {
  appendMessage("Yay! Both know how to program.");
// If at least one of them doesn't know how to program, show a different message
} else {
  appendMessage("LMGTFY — at least one doesn't know how to program."); 
};


// Greet the 2nd person based on nationality
//Use optional chaining to safely access the country of the second person in the array
switch (people[1]?.country) {
  case "Iceland":
    appendMessage("Hæ"); // If the country is Iceland, greet in Icelandic
    break;
  case "Spain":
    appendMessage("Hola"); // If the country is Spain, greet in Spanish
    break;
  case "Korea":
    appendMessage("여보세요"); // If the country is Korea, greet in Korean
    break;
  default:
    appendMessage("Hello"); // For any other country, greet in English
    break;
};


// Check if the 2nd person's name is longer than 5 characters using if-else
let nameLengthMessage = "";

if ((people[1]?.name.length ?? 0) > 5) {
  nameLengthMessage = "The name is longer than 5 characters.";
} else {
  nameLengthMessage = "The name is 5 characters or shorter.";
}

appendMessage(nameLengthMessage);