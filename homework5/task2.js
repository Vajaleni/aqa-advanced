let grade=67
let averageGrade

switch(true) {
    case grade < 60:
    averageGrade = 'Незадовільно';
    console.log(averageGrade);
    break;

    case grade <= 70:
    averageGrade = 'Задовільно';
    console.log(averageGrade);
    break;

    case grade <= 80 :
    averageGrade = 'Добре';
    console.log(averageGrade);
    break;

    case grade <= 90:
    averageGrade = 'Дуже добре';
    console.log(averageGrade);
    break;

    case grade <= 100:
    averageGrade = 'Відмінно';
    console.log(averageGrade);
    break;
    default:
       console.log('Оценіть будь ласка від 0 до 100');
        
    }
    

