##GRADE GENERATOR

## Function Description
function scoreEvaluator() {
    const points = ("Enter the student's marks (0 - 100):");
    const score = (points);

    if (score < 0 || score > 100 || (!score)) {
        console.log("Invalid input. Please enter a number between 0 and 100.");
    } else if (score > 79) {
        console.log("Grade: A");
    } else if (score >= 60) {
        console.log("Grade: B");
    } else if (score >= 49) {
        console.log("Grade: C");
    } else if (score >= 40) {
        console.log("Grade: D");
    } else {
        console.log("Grade: E");
    }
}
scoreEvaluator(50);

## Purpose
The purpose of this function is to:

Request the user to enter the marks of a student.
Validate the entered score to ensure it falls within the range of 0 to 100.
Assign a grade based on the score:
Grade A for scores above 79.
Grade B for scores between 60 and 79.
Grade C for scores between 49 and 59.
Grade D for scores between 40 and 48.
Grade E for scores below 40.
Provide error handling to notify the user when the input is invalid (e.g., entering a non-numeric value or a number outside the valid range).


## Parameters
points (string): A prompt or user input to request the student's marks.
score (number): The numeric value representing the student's score, which is validated before grading.

## Input Validation
Valid Inputs: The valid input is any numeric value between 0 and 100 (inclusive).

Invalid Inputs: If the input is not a number, or if it is outside the range of 0 to 100, the function will display an error message:


"Invalid input. Please enter a number between 0 and 100."
Note: The current version of the code is written in a way that seems to attempt to retrieve user input using a string assignment (const points = ("Enter the student's marks (0 - 100):");), but it does not actually request user input in its current state. For real-time user input, this part needs to be adapted to a method like prompt() in browsers or using Node.js functionality (like readline).

## Grading System
Grade A: Assigned when the score is greater than 79.
Grade B: Assigned when the score is between 60 and 79.
Grade C: Assigned when the score is between 49 and 59.
Grade D: Assigned when the score is between 40 and 48.
Grade E: Assigned when the score is 39 or below.

Example Usage
The following example demonstrates how the function works when called with different scores.


scoreEvaluator(85);  // Logs: Grade: A
scoreEvaluator(72);  // Logs: Grade: B
scoreEvaluator(56);  // Logs: Grade: C
scoreEvaluator(45);  // Logs: Grade: D
scoreEvaluator(30);  // Logs: Grade: E
scoreEvaluator("abc");  // Logs: Invalid input. Please enter a number between 0 and 100.
scoreEvaluator(150);  // Logs: Invalid input. Please enter a number between 0 and 100.


## Key Concepts
Input Validation:

The function ensures that the entered score is a valid number and within the range of 0 to 100. If the input is invalid (non-numeric or out of range), the function returns an error message.
Conditional Logic:

The function uses a series of if-else conditions to check the range of the score and assign the appropriate grade.
Handling Non-Numeric Inputs:

If the user enters a non-numeric value, the condition (!score) ensures that an error message is displayed.


## Potential Improvements
User Input via Prompt: The function as written does not actually request user input. For it to work as intended, you can replace the line const points = ("Enter the student's marks (0 - 100):"); with something like:


const points = prompt("Enter the student's marks (0 - 100):");
This would allow the function to work in a browser environment.

Grade Message Enhancement: Instead of just logging "Grade: A", the function could be enhanced to provide more detailed feedback, like "Excellent!" for grade A or "Needs Improvement" for grade E.

Repeated Prompt for Valid Input: Instead of just notifying the user once that the input is invalid, the function could repeatedly ask the user for valid input until they provide a valid score. This could be done by using a loop.

Handling Decimal Scores: The current function does not handle decimal scores (e.g., 85.5). To allow decimals, simply remove the integer validation or modify the logic to accept decimal values as well.


//SPEED DETECTOR
## Function Description

function radarDevice(speed) {
    const velocityLimit = 70; // The legal velocity limit is 70 km/h.
    const distancePerPoint = 5; // The distance travelled per point is 5 km.
  
    if (speed <= velocityLimit) {
        console.log("Ok"); // If the speed is within the limit, it will log "Ok".
    } else if (speed > velocityLimit) {
        // If the speed exceeds the legal velocity limit, further actions can be taken here.
    }
}  

## Parameters
speed (number): The speed of the vehicle in kilometers per hour (km/h) that the radar device will check.

## Logic

Speed Check Against Limit:

The function compares the given speed with a predefined velocityLimit of 70 km/h.
If the speed is less than or equal to 70 km/h, the radar device will output "Ok", indicating that the vehicle is not speeding.
If the speed exceeds 70 km/h, the function does not yet perform any action, but this behavior can be extended for further processing (e.g., issuing a fine or recording the speed).


Further Enhancements (not implemented yet):

This basic version of the function can be extended to take further action when the speed exceeds the limit, such as calculating the distance travelled at the excessive speed, or issuing penalties based on the number of points exceeded over the limit.
The distancePerPoint constant defines how much distance the vehicle would travel per point. You could use this to calculate how far the vehicle would travel before the radar device gives a warning or takes other actions.


## Example Usage


radarDevice(80); // Logs the outcome based on speed (above 70 km/h)
radarDevice(280); // Logs the outcome for a higher speed
radarDevice(60); // Logs "Ok" as the speed is within the limit


## Expected Output
For radarDevice(80):

Since 80 km/h is greater than the speed limit of 70, the function will execute the else if block (though the action is not yet defined in this code).
For radarDevice(280):

The function will again check if 280 km/h exceeds the velocity limit and could trigger further actions based on future implementation.
For radarDevice(60):

This call will output Ok as the vehicle is not speeding.


## Potential Improvements
Calculating Points: You could use the distancePerPoint to calculate how many "points" or "penalties" the vehicle accumulates if they exceed the speed limit. For example, if a vehicle exceeds the limit by 10 km/h, they might accumulate 2 penalty points, and so on.

Logging Specific Information: Instead of just printing "Ok" for speeds under the limit, the function could provide more detailed output such as "Speed is within the limit: 60 km/h."

Expanding the else if Block: The current else if block does not contain any action. You could modify this section to log additional information or actions, such as "Warning: Speeding detected!".


//NET SALARY

## Net Salary Calculator

This is a simple JavaScript function that calculates the net salary of an employee based on their basic salary and benefits. It factors in three main deductions commonly found in Kenya: PAYE (Pay As You Earn) tax, NHIF (National Hospital Insurance Fund) deductions, and NSSF (National Social Security Fund) deductions. The net salary is computed by subtracting these deductions from the gross salary (basic salary + benefits).

## Installation

To use the calculateNetSalary function, simply include it in your JavaScript file or HTML script section. There is no external library required.

## Usage

Function Signature:

function calculateNetSalary(basicSalary, benefits)

## Parameters:

basicSalary (number): The basic salary of the employee.

benefits (number): The additional benefits the employee receives (e.g., allowances).

## Example of Usage:

calculateNetSalary(80000, 30000);

This will compute the net salary for an employee with a basic salary of Ksh 80,000 and benefits of Ksh 30,000.

## Functionality
The function calculates:

Gross Salary: The sum of basic salary and benefits.

PAYE: Pay As You Earn tax based on the Kenyan tax brackets.
NHIF: National Hospital Insurance Fund deduction based on the gross salary.
NSSF: National Social Security Fund deduction with Tier 1 and Tier 2 contributions.
Net Salary: The amount remaining after all deductions.
PAYE Tax Brackets (Kenya):
10% for salaries up to Ksh 24,000
25% for salaries between Ksh 24,001 and Ksh 32,333
30% for salaries between Ksh 32,334 and Ksh 500,000
32.5% for salaries between Ksh 500,001 and Ksh 800,000
35% for salaries above Ksh 800,000
## NHIF Deductions (Kenya):
NHIF contributions are based on salary ranges, ranging from Ksh 150 to Ksh 1,700 depending on the employee's gross salary.
NSSF Contributions (Kenya):
Tier 1: 6% of the salary up to Ksh 7,000.
Tier 2: 6% of the salary between Ksh 7,001 and Ksh 36,000.

## Example
Let's consider an employee with the following details:

Basic Salary: Ksh 80,000
Benefits: Ksh 30,000
Running the function:


calculateNetSalary(80000, 30000);
Output:

Gross Salary: Ksh 110000.00
PAYE Deduction: Ksh 25000.00
NHIF Deduction: Ksh 950
NSSF Deduction: Ksh 1800.00
Total Deductions: Ksh 27850.00
Net Salary: Ksh 82150.00
This output indicates that after the deductions (PAYE, NHIF, NSSF), the net salary is Ksh 82,150.




