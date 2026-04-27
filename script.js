// Function to handle the Quote Request
function getQuote() {
    const service = prompt("What can we help you with? (e.g., Trailer Repair, Custom Gate)");
    
    if (service != null && service != "") {
        alert("Got it! Kirkpatrick Iron & Ag Repair will look into your request for: " + service + ". Give us a call at (810) 837-0528 to speed things up!");
    }
}

// Log to console to verify the script is connected
console.log("Kirkpatrick site script loaded successfully.");
