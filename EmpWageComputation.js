console.log("....EmpWageComputation....")
const Is_PartTime = 0;
const Is_FullTime = 1;
const FullTimeWorkingHrs = 8;
const PartTimeWorkingHrs = 4;
const WagePerHrs = 20;
const workingDayspermnth =20;
const MaxWorkingHrs =160;
let totalemphrs =0;
let totalworkingdays =0;
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
while (totalemphrs <= MaxWorkingHrs && totalworkingdays < workingDayspermnth)
{
    totalworkingdays++;
   let EmpCheck = (Math.floor(Math.random()*10 % 3))
   totalemphrs += gettingWorkingHours(EmpCheck);
}
let DailyEmpWage = totalemphrs * WagePerHrs;
console.log("Total Number of hrs is  " + totalemphrs + " Total Number of days is " + totalworkingdays + " Daily Emp Wage is " + DailyEmpWage);
