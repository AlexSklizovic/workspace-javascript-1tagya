// Send a customized message back based on time

// Log
console.log("I'm in the hello.js file");

// Get date and time
let today = new Date();
let hoursNow = today.getHours();

// Display greeting message
let greetingMsg = "";
if (hoursNow < 12){
  greetingMsg = "Good morning!";
} else {
  greetingMsg = "Good evening!"
}

// Write to the document
document.write(greetingMsg);