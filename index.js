//Grade Generator

//You have to get a function and also request user enter the students marks here.

function scoreEvaluator() {

    const points = ("Enter the student's marks (0 - 100):");
  
    const score = (points);
  
    //So here you have to give the range of the marks entered by the user not to exceed 100 and not to go below 0
  
    if (score < 0 || score > 100 || (!score)) {//The second or is for Not a number.
  
        console.log("Invalid input. Please enter a number between 0 and 100.");//If the s
console.log("Invalid input. Please enter a number between 0 and 100.");//If the score is <0 or is >100,it notifies the user that the data entered is invalid and suggests that they enter valid data.
  
      } else if (score > 79) {//If the score is > than 79, it displays the grade "A"
  
        console.log("Grade: A");
  
      } else if (score >= 60) {//If the score is >=60, it displays the grade "B"
  
        console.log("Grade: B");
  
      } else if (score >= 49) {// If the score is >=49,t displays the grade "C"
  
        console.log("Grade: C");
  
      } else if (score >= 40) {// If the score is >=40, it displays the grade "D"
  
        console.log("Grade: D");
  
      } else {
  
        console.log("Grade: E");//If the score is 39 and below, it displays the grade "E"
  
      }
  
  }
  scoreEvaluator(50)


  //Speed Detector

  function radarDevice(speed) { //This function is called radar device.
    const velocityLimit = 70; //The legal velocitylimit is 70.
    const distancePerPoint = 5; // The distance travelled per every point is 5km.
  
    if (speed <= velocityLimit) {//This a conditional statement. it checks if the speed is <= the velocitylimit
        console.log("Ok"); //If true it will display the string "ok".
    } else if (speed > velocityLimit) {
        // If the speed is greater than the velocitylimit,velocitylimit is being called.

    }
}  
    radarDevice(80); 

radarDevice(280); 
radarDevice(60);


//Net Salary

function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;

  // PAYE Calculations
  let paye;
  if (grossSalary <= 24000) {
      paye = grossSalary * 0.1;
  } else if (grossSalary <= 32333) {
      paye = grossSalary * 0.25;
  } else if (grossSalary <= 500000) {
      paye = grossSalary * 0.3;
  } else if (grossSalary <= 800000) {
      paye = grossSalary * 0.325;
  } else {
      paye = grossSalary * 0.35;
  }

  // NHIF Deductions
  let nhif;
  if (grossSalary <= 5999) {
      nhif = 150;
  } else if (grossSalary <= 7999) {
      nhif = 300;
  } else if (grossSalary <= 11999) {
      nhif = 400;
  } else if (grossSalary <= 14999) {
      nhif = 500;
  } else if (grossSalary <= 19999) {
      nhif = 600;
  } else if (grossSalary <= 24999) {
      nhif = 750;
  } else if (grossSalary <= 29999) {
      nhif = 850;
  } else if (grossSalary <= 34999) {
      nhif = 900;
  } else if (grossSalary <= 39999) {
      nhif = 950;
  } else if (grossSalary <= 44999) {
      nhif = 1000;
  } else if (grossSalary <= 49999) {
      nhif = 1100;
  } else if (grossSalary <= 59999) {
      nhif = 1200;
  } else if (grossSalary <= 69999) {
      nhif = 1300;
  } else if (grossSalary <= 79999) {
      nhif = 1400;
  } else if (grossSalary <= 89999) {
      nhif = 1500;
  } else if (grossSalary <= 99999) {
      nhif = 1600;
  } else {
      nhif = 1700;
  }

  // NSSF Deductions
  let nssf;
  let tier1Limit = 7000;
  let tier2Limit = 36000;
  let tier1Contribution = 0;
  let tier2Contribution = 0;

  // THIS IS THE Tier 1 Contribution
  if (grossSalary <= tier1Limit) {
      tier1Contribution = grossSalary * 0.06;
  } else {
      tier1Contribution = tier1Limit * 0.06;
  }

  // THIS IS THE Tier 2 Contribution
  if (grossSalary > tier1Limit) {
      if (grossSalary <= tier2Limit) {
          tier2Contribution = (grossSalary - tier1Limit) * 0.06;
      } else {
          tier2Contribution = (tier2Limit - tier1Limit) * 0.06;
      }
  }

  // Total NSSF Contribution
  nssf = tier1Contribution + tier2Contribution;

  // Total Deductions
  const totalDeductions = paye + nhif + nssf;

  // THIS IS THE AMOUNT OF MONEY AFTER DEDUCTIONS (net pay)
  const netSalary = grossSalary - totalDeductions;

  console.log(`Gross Salary: Ksh ${grossSalary.toFixed(2)}`);
  console.log(`PAYE Deduction: Ksh ${paye.toFixed(2)}`);
  console.log(`NHIF Deduction: Ksh ${nhif}`);
  console.log(`NSSF Deduction: Ksh ${nssf.toFixed(2)}`);
  console.log(`Total Deductions: Ksh ${totalDeductions.toFixed(2)}`);
  console.log(`Net Salary: Ksh ${netSalary.toFixed(2)}`);
}

// THIS IS AN Example
calculateNetSalary(80000, 30000);