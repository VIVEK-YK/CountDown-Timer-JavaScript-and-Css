

// 1sec = 1000ms
// 1 min = 60 sec
// 1 hr = 60 min
// 1 day = 24 hr

let x = setInterval(() => {
  let releaseDate = new Date("sept 1 2023 11:19:15").getTime();
  let today = new Date().getTime();
  let remTime = releaseDate - today;
  if(releaseDate<today){
    document.querySelector('.countDown').textContent = "Session Expired";
  }
  let myDay = Math.floor(remTime / (24 * 60 * 60 * 1000));
  let myhour = Math.floor((remTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  let myMIn = Math.floor(
    ((remTime % (24 * 60 * 60 * 1000)) % (60 * 60 * 1000)) / (60 * 1000)
  );
  let mySec = Math.floor(
    (((remTime % (24 * 60 * 60 * 1000)) % (60 * 60 * 1000)) % (60 * 1000)) /
      1000
  );

  let days = document.querySelector(".days");
  days.textContent = myDay;
  let hours = document.querySelector(".hours");
  hours.textContent = myhour;
 let mintues = document.querySelector(".minutes");
 mintues.textContent = myMIn;
  let seconds = document.querySelector(".seconds");
  seconds.textContent = mySec;
//   console.log(mintues.textContent)
//   console.log(parseInt(mintues.textContent));

  
 



  if(parseInt(days.textContent) < 10){
    days.innerHTML = "0" +  days.textContent;
  }
  if(parseInt(hours.textContent) < 10){
    hours.innerHTML = "0" + hours.textContent; 
  }
  if(parseInt(mintues.textContent) < 10){
    mintues.innerHTML = "0" + mintues.textContent
  }
  if(parseInt(seconds.textContent) < 10){
    seconds.innerHTML = "0" + seconds.textContent
  }


  console.log(seconds.textContent)
  if((seconds.textContent) <= 0 && parseInt(mintues.textContent) <= 0 && parseInt(hours.textContent) <= 0 && parseInt(days.textContent) <= 0){
    // document.querySelector('.countDown').textContent = "Session Expired";
    clearInterval(x)
  }
}, 1000);

// console.log(myDay);
// console.log(myhour);
// console.log(myMIn);
// console.log(mySec);
