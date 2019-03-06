function Grade(examPoint, homeWorkCompleted, totalHomeWorks) {
    let totalPoints = 0;
    let grade = 0;
    if (examPoint >= 400){
        console.log('6.00')
    }else {
        totalPoints = ((((examPoint/100) * 100)*90)/4)/100;
        if (homeWorkCompleted === totalHomeWorks){
            totalPoints += 10;
        }else{
            let homeWorkPoints = (totalHomeWorks/100) * homeWorkCompleted;
            totalPoints += homeWorkPoints*10;
        }
        grade =(totalPoints - 20);
        grade = grade/50;
        grade = grade* 2;
        grade= grade + 3;//
        if (grade <= 3){
            grade = 2.00;
        }
        if (grade >= 6){
            grade = 6;
        }
        console.log(grade.toFixed(2));
    }
}