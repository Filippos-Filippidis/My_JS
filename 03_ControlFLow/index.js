// Control Flow

// If ..else

let hour = 20;

if (hour >= 6 && hour < 12) {
  console.log("Good Morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon");
} else console.log("Good Evening");

// Switch & case

let role = "guest";

switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  default:
    console.log("Unknown User");
}

// For

for (let i = 0; i <= 5; i++) {
  console.log("Hello World", i);
}

for (let i = 0; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i);
}

for (let i = 5; i >= 0; i--) {
  if (i % 2 !== 0) console.log(i);
}

// While

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

// Do while - Are always executed at least once..
let j = 9;
do {
  if (j % 2 !== 0) console.log(j);
  j++;
} while (j <= 5);

// For...in

// For...of

// Break and continue..
