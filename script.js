const hourEl = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");

//create function to update and check the current time
function updateDate() {
  const currentDate = new Date();
  //setTimeout(updateDate, 1000);

  //get the current time:  hour, minute and second
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const second = currentDate.getSeconds();

  //make clock analog
  const hourDeg = (hour / 12) * 360;
  hourEl.style.transform = `rotate(${hourDeg}deg)`;

  const minutesDeg = (minute / 60) * 360;
  minutesEl.style.transform = `rotate(${minutesDeg}deg)`;

  const secondDeg = (second / 60) * 360;
  secondsEl.style.transform = `rotate(${secondDeg}deg)`;
}

// call function here
updateDate();

setInterval(updateDate, 1000);
