const daysElements = document.querySelector(".days");
const hoursElements = document.querySelector(".hours");
const minutesElements = document.querySelector(".minutes");
const secondsElements = document.querySelector(".seconds");
const heading  = document.querySelector(".heading");
const countertimer = document.querySelector(".countertimer");


const seconds = 1000, minute = 60 * seconds, hour = 60 * minute, day = 60 * hour;

const timerfunction = () =>
{

   let now = new Date(),
    dd = String(now.getDate()).padStart(2,"0"),
    mm =String(now.getMonth()+1).padStart(2,"0"),
    yyyy = now.getFullYear();
       
  const enteredDay = prompt("Enter Day").padStart(2,"0");
  const enteredMonth = prompt("Enter Month").padStart(2,"0");
  

  now =`${mm}/${dd}/${yyyy}`;

  let targetdate = `${enteredMonth}/${enteredDay}/${yyyy}`;

//   console.log(targetdate);

  if(targetdate<now)
  {
    targetdate = `${enteredMonth}/${enteredDay}/${yyyy+ 1}`;
    // console.log(targetdate);
  } 
  


const intervalId = setInterval( ()=>
{   
  
    const timer = new Date(targetdate).getTime();
    const today = new Date().getTime();

    const difference = timer - today;


    const leftDay = Math.floor(difference / day);
    const leftHours =Math.floor((difference % day)/hour);
    const leftMinutes =Math.floor((difference % hour)/minute);
    const leftSecond = Math.floor((difference % minute)/seconds);

    daysElements.innerText = leftDay;
    hoursElements.innerText = leftHours;
    minutesElements.innerText = leftMinutes;
    secondsElements.innerText = leftSecond;

    

    if(difference<0)
    {
        countertimer.style.display = "none";
        heading.innerText = "Time's Up";
        clearInterval(intervalId);
    }



    // console.log( `${leftDay}:${leftHours}:${leftMinutes}:${leftSecond}`);


},0);
}

timerfunction();