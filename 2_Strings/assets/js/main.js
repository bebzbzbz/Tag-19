let x = "Hello";
let y = "World";

z = x + y;
document.write(`<p>${z}</p>`);
console.log(z);

n = x + " " + y;
document.write("<p>" + z + "</p>");
console.log(n);

x += " World";
document.write(x);
console.log(x);

let meinString = "Ich bin Erste:r";
meinString += " - Ich komme auf Platz zwei.";
console.log(meinString);
document.write(`<p> ${meinString} </p>`)