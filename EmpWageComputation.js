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
let totalempwage =0;
let empDailyWageArray = new Array();
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
 function calculateDailyWage(empHrs)
 {
    return empHrs * WagePerHrs;
 }
while (totalemphrs <= MaxWorkingHrs && totalworkingdays < workingDayspermnth)
{
    totalworkingdays++;
   let EmpCheck = (Math.floor(Math.random()*10 % 3))
   let empHrs = gettingWorkingHours(EmpCheck);
   totalemphrs += empHrs;
   empDailyWageArray.push(calculateDailyWage(empHrs))
}
let DailyEmpWage = calculateDailyWage(totalemphrs);
console.log("Total Number of hrs is  " + totalemphrs + " Total Number of days is " + totalworkingdays + " Daily Emp Wage is " + DailyEmpWage);
console.log(empDailyWageArray)

// UC 7A--Calculate total wage using foreach
function sum(DailyEmpWage)
{
    totalempwage += DailyEmpWage;
}
empDailyWageArray.forEach(sum)
console.log("UC7A--Total Number of hrs is  " + totalemphrs + " Total Number of days is " + totalworkingdays + " Daily Emp Wage is " + DailyEmpWage);
//UC7A--Using Reduce
function totalwages(totalwage,DailyEmpWage)
{
    return totalwage + DailyEmpWage
}
console.log("UC7A--Emp wage with reduce: " + empDailyWageArray.reduce(totalwages,0))

//UC 7B--Show the day along with daily wage using Array Map helper
let DayCount = 0;
function mapDayWithWage(DailyEmpWage)
{
    DayCount++;
    return DayCount + " = " +DailyEmpWage;
}
let mapDayWithWageArray = empDailyWageArray.map(mapDayWithWage);
console.log("UC7B--Daily Wage Map");
console.log(mapDayWithWageArray);

//UC 7C--Show Days when full time wage of 160 earned
function fulltimewage(DailyEmpWage)
{
    return DailyEmpWage.includes("160");
}
let fullDayWageArray = mapDayWithWageArray.filter(fulltimewage);
console.log("UC7C--Daily wage filter when full time wage Earned");
console.log(fullDayWageArray);

//UC 7D--Find the first first occurance when full time wage was earned  using find function
function findFulltimewage(DailyEmpWage)
{
    return DailyEmpWage.includes("160");
}
console.log("UC7D--First time full time wage was earned on Day using find : " + mapDayWithWageArray.find(findFulltimewage));

//UC 7E--Check if every element of full time wage is truely holding full time wage
function isAllFulltimewage(DailyEmpWage)
{
    return DailyEmpWage.includes("160");
}
console.log("UC7E--checking All Element have full time Wage using every: " + fullDayWageArray.every(isAllFulltimewage));

//UC 7F--Check if there is any part time wage
function IsAnyPartTimeWage(DailyEmpWage)
{
    return DailyEmpWage.includes("80");
}
console.log("UC7F--Check any part time wage using some: " + mapDayWithWageArray.some(IsAnyPartTimeWage));

//UC 7G--Find the number of days the Employee worked
function totalDaysWorked(numofDays,DailyEmpWage)
{
    if (DailyEmpWage > 0)
    return numofDays+1;
    return numofDays;
}
console.log("UC7G--Number of Days Emp Worked: " + empDailyWageArray.reduce(totalDaysWorked,0));