const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway=document.querySelector(".giveaway");
const deadline=document.querySelectorAll(".deadline-format h4")
const deadline1 = document.querySelector('.deadline');
const timing=new Date(2025,4,5,11,10);
const hour=timing.getHours();
const min=timing.getMinutes();
const sec=timing.getSeconds();

const date=timing.getDate();
const year=timing.getFullYear();
const month=months[timing.getMonth()];
const day=weekdays[timing.getDay()];

giveaway.textContent=`give away ends on ${day}, ${date} ${month} ${year} ${hour}:${min}AM`

const furthertime=timing.getTime();

function getRemaindingTime(){
const currentTime=new Date().getTime();

const t=furthertime - currentTime;

/* day=24 hour=60min min=60sec sec=1000ms */
const day=Math.floor(t/(24*60*60*1000));
const hours=(t%(24*60*60*1000))/(60*60*1000);
const hour=Math.floor(hours);
const minute=((t%(24*60*60*1000))%(60*60*1000))/(60*1000)
const min=Math.floor(minute);
const second=((t%(24*60*60*1000))%(60*60*1000))%(60*1000)/1000
const sec=Math.floor(second);
const values=[day,hour,min,sec]

function format(item){
  if(item<10){
return item=`0${item}`;
  }
  return item;
}
deadline.forEach(function (item,index){
  item.innerHTML=format(values[index]);
})

if(t<0){
   clearInterval(countdown);
deadline1.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
}

}
let countdown = setInterval(getRemaindingTime, 1000);

 
