console.log("....EmpWageComputation....")
const Is_PartTime = 0;
const Is_FullTime = 1;
const FullTimeWorkingHrs = 8;
const PartTimeWorkingHrs = 4;
const WagePerHrs = 20;
empHrs =0;
let EmpCheck = (Math.floor(Math.random()*10 % 3))
switch(EmpCheck)
{
    case Is_FullTime:
         empHrs = FullTimeWorkingHrs ;
         break;
    case Is_PartTime:
        empHrs = PartTimeWorkingHrs ;
         break;
     default:
        empHrs = 0;
}
let DailyEmpWage = empHrs * WagePerHrs;
console.log("Daily Emp Wage is " + DailyEmpWage);