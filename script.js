function extractAndDisplay() {
    // Get text input
    const textInput = document.getElementById("textInput").value;

    // Define a regular expression pattern for matching emails
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;

    // Use the pattern to find all occurrences of emails in the text
    const extractedEmails = textInput.match(emailPattern);

    // Display the result
    displayResult(extractedEmails);
}

function displayResult(emails) {
    const resultContainer = document.getElementById("resultContainer");

    if (emails && emails.length > 0) {
        // Build a list of emails
        const emailList = emails.map(email => `<li>${email}</li>`).join("");

        // Display the list
        resultContainer.innerHTML = `<ul>${emailList}</ul>`;
    } else {
        // Display a message if no emails are found
        resultContainer.innerHTML = "<p>No emails found.</p>";
    }
}
