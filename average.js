const grades = [50,60,80,90];

function calculateAvg(gradesArray){
    let sum=0;
    for(grade of grades){
         sum += grade;
    }
    const avg= sum/gradesArray.length;
    return avg;
}
avgGrade = calculateAvg(grades);

if(avgGrade>=90){
    console.log("You got A");
}else if(avgGrade>=80 && avgGrade<=89){
    console.log("You got B");
}
else if(avgGrade>=70 && avgGrade<=79){
    console.log("You got C");
}
else if(avgGrade>=60 && avgGrade<=69){
    console.log("You got D");
} else {
    console.log("You got F");
}
