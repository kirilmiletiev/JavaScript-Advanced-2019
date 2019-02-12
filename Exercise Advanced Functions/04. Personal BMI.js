function bmi(name, age, weight, height) {
    let bmi = Math.round(weight / Math.pow(height / 100, 2));

    let obj = {
        'name': name,
        'personalInfo': {
            'age': age,
            'weight': weight,
            'height': height
        },
        'BMI': bmi,
        'status': ''
    };

    if (bmi < 18.5) {
        obj.status = 'underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        obj.status = 'normal';
    } else if (bmi >= 25 && bmi < 30) {
        obj.status = 'overweight';
    } else {
        obj.status = 'obese';
        obj['recommendation'] = 'admission required';
    }

    return obj;
}

bmi('Honey Boo Boo', 9, 57, 137);