//= My FYI
// ! Alert()
// Alert box with line-breaks:
// alert("Hello\nHow are you?");

// Alert the hostname of the current URL:
// alert(location.hostname);

// ! Prompt()
// let person = prompt("Please enter your name", "Harry Potter");

// if (person != null) {
//   document.getElementById("demo").innerHTML =
//   "Hello " + person + "! How are you today?";
// }

// let text;
// let favDrink = prompt("What's your favorite cocktail drink?");
// switch(favDrink) {
//   case "Coca-Cola":
//     text = "Excellent choice! Coca-Cola is good for your soul.";
//     break;
//   case "Pepsi":
//     text = "Pepsi is my favorite too!";
//     break;
//   case "Sprite":
//     text = "Really? Are you sure the Sprite is your favorite?";
//     break;
//   default:
//     text = "I have never heard of that one!";
// }

// ! Confirm()
//& Linebreak
// confirm("Press a button!\nEither OK or Cancel.");

// let text;
// if (confirm("Press a button!") == true) {
//   text = "You pressed OK!";
// } else {
//   text = "You canceled!";
// }

// = Aufgaben
// window.alert("Hallo Welt");
// window.prompt("Bitte geben Sie Ihren Namen ein.");
// window.confirm("Stimmen Sie meiner Meinung zu?");
let alter = window.prompt("Gib mir bitte dein Alter:");
console.log(alter);

let mann = "Robert Wadlow ist der größte Mann der Welt : ";
let grosse = "2,72m";
window.confirm(mann + grosse);