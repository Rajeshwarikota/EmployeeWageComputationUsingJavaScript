console.log("....EmpWageComputation....")
const Is_PartTime = 0;
const Is_FullTime = 1;
const FullTimeWorkingHrs = 8;
const PartTimeWorkingHrs = 4;
const WagePerHrs = 20;
empHrs =0;
function gettingWorkingHours(EmpCheck)
{
switch(EmpCheck)
{
    case Is_FullTime:
        return FullTimeWorkingHrs;
    case Is_PartTime:
        return PartTimeWorkingHrs;
     default:
        return 0;
}
}
EmpCheck = (Math.floor(Math.random()*10 % 3))
empHrs = gettingWorkingHours(EmpCheck)
let DailyEmpWage = empHrs * WagePerHrs;
console.log("Daily Emp Wage is " + DailyEmpWage);