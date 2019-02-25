function solve(worker) {

    class Worker {
        constructor(weight, experience, bloodAlcoholLevel, handsShaking) {
            this.weight = weight;
            this.experience = experience;
            this.bloodAlcoholLevel = bloodAlcoholLevel;
            this.handsShaking = handsShaking;
        }

        intake() {
            let howMuchAlcoholLevelIsIncrease = (Number(this.weight) * Number(this.experience)) / 10;
            this.bloodAlcoholLevel += howMuchAlcoholLevelIsIncrease;
            this.handsShaking = false;
        }
    }

    let workerE = new Worker(worker.weight, worker.experience, worker.bloodAlcoholLevel, worker.handsShaking);

    if (workerE.handsShaking === false) {
        return workerE;
    } else {
        workerE.intake();

        return workerE;
    }
}

console.log(solve({ weight: 95,
    experience: 3,
    bloodAlcoholLevel: 0,
    handsShaking: false }
));