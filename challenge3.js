
function calculateNetSalary(){
    //PAYE deductions
    const PAYE_Band= [
        { limit: 24000, rate:0.1},
        { limit:32333, rate:0.25},
        { limit:500000, rate:0.3},
        { limit:800000 , rate:0.325},
        {limit: Infinity, rate:0.35}
    ];
    const NHIF_Rates=[
        { limit: 5999, deduction: 150 },
        { limit: 7999, deduction: 300 },
        { limit: 11999, deduction: 400 },
        { limit: 14999, deduction: 500 },
        { limit: 19999, deduction: 600 },
        { limit: 24999, deduction: 750 },
        { limit: 29999, deduction: 850 },
        { limit: 34999, deduction: 900 }, 
        { limit: 39999, deduction:  950 },
        { limit: 44999,  deduction: 1000 },
        { limit: 49999,  deduction: 1100},
        {  limit: 59999, deduction: 1200 },
        {  limit: 69999, deduction:1300 },
        {  limit: 79999, deduction: 1400 },
        {  limit: 89999, deduction:  1500},
        {  limit: 99999, deduction: 1600 },
        { limit: Infinity, deduction:1700 }
    ];
 let basicSalary= parseFloat(prompt("Enter your basic salary (KES): "));
 let benefits = parseFloat(prompt("Enter your benefits (KES): "));

 //Gross Salary
 let grossSalary = basicSalary + benefits;

 // Calculating PAYE
 let paye = calculatePAYE(grossSalary, PAYE_Band);

 // Calculate NSSF
 let nssf = calculateNSSF(grossSalary);

 //Calculate the net salary
 let totalDeductions = paye + nhif + nssf;
    let netSalary = grossSalary - totalDeductions;

    //Print results
    console.log(`Gross Salary: KES ${grossSalary.toFixed(2)}`);
    console.log(`PAYE (Tax): KES ${paye.toFixed(2)}`);
    console.log(`NHIF Deduction: KES ${nhif.toFixed(2)}`);
    console.log(`NSSF Deduction: KES ${nssf.toFixed(2)}`);
    console.log(`Total Deductions: KES ${totalDeductions.toFixed(2)}`);
    console.log(`Net Salary: KES ${netSalary.toFixed(2)}`);
}
function calculatePAYE(grossSalary, bands) {
    let tax = 0;
    let previousLimit = 0;

    for (let band of bands) {
        if (grossSalary > previousLimit) {
            let taxableIncome = Math.min(band.limit - previousLimit, grossSalary - previousLimit);
            tax += taxableIncome * band.rate;
            previousLimit = band.limit;
        }
        if (previousLimit >= grossSalary) break;
    }
    return tax;
}

function calculateNHIF(grossSalary, rates) {
    for (let rate of rates) {
        if (grossSalary <= rate.limit) {
            return rate.deduction;
        }
    }
}

