const readline = require('readline'); // Import the readline module

// Create an interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to get student grade
function getStudentGrade() {
    rl.question("Please enter student marks (0-100): ", (input) => {
        let marks = Number(input);

        // Validate the input
        if (isNaN(marks) || marks < 0 || marks > 100) {
            console.log("Invalid input. Please enter a number between 0 and 100.");
            rl.close(); // Close the readline interface
            return; 
        }

        // Determine the grade based on the marks
        let grade;
        if (marks > 79) {
            grade = 'A';
        } else if (marks >= 60) {
            grade = 'B';
        } else if (marks >= 50) {
            grade = 'C';
        } else if (marks >= 40) {
            grade = 'D';
        } else {
            grade = 'E';
        }

        // Output the corresponding grade
        console.log(`The grade for marks ${marks} is: ${grade}`);
        rl.close(); // Close the readline interface after use
    });
}

// Callling  the function to execute
getStudentGrade();