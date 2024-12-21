const grades = [50,60,80,90];
let sum=0;
function calculateAvg(gradesArray){
    for(grade of grades){
         sum += grade;
    }
    const avg= sum/grades.length;
    return avg;
}
console.log(calculateAvg(grades));
