function timer() {
   let startBtn = document.getElementById('start-timer');
   let stopBtn = document.getElementById('stop-timer');
   let testBool = false;
   let counter = 1;

   let timerSecure = false;

   let seconds = document.getElementById('seconds');
   let minutes = document.getElementById('minutes');
   let hours = document.getElementById('hours');

   function myTimer() {
      if (timerSecure) {
         seconds.textContent = counter;
         if (counter <= 9) {
            seconds.textContent = `0${counter}`;
         } else if (counter === 60) {
            counter = 0;
            seconds.textContent = '00';
            minutes.textContent = Number(minutes.textContent) + 1;
            if (Number(minutes.textContent) <= 9) {
               minutes.textContent = `0${minutes.textContent}`;
            } else if (Number(minutes.textContent) === 60) {
               minutes.textContent = '00';
               hours.textContent = Number(hours.textContent) + 1;
               if (Number(hours.textContent) <= 9) {
                  hours.textContent = `0${hours.textContent}`;
               }
            }
         }
         (counter++);
      } else {
      }
   }

   startBtn.addEventListener('click', function () {
      if (!timerSecure) {
         timerSecure = true;
         timer = setInterval(myTimer, 1000);
      } else {
         console.log('xa!!');
         timerSecure = false;
         clearInterval(timer);
      }

      if (!testBool) {
         document.getElementById('start-timer').textContent = 'Pause';
         testBool = true;
      } else {
         document.getElementById('start-timer').textContent = 'Start';
         testBool = false;
      }
   });

   stopBtn.addEventListener('click', function () {
      timerSecure = false;
      seconds.textContent = '00';
      minutes.textContent = '00';
      hours.textContent = '00';
      counter = 1;
      console.log('stop!');
   });
}