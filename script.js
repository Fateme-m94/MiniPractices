// Digital clock program

function updateclock(){
   const now = new Date();
   let hour = now.getHours();
   const meridiem = hour >= 12 ? "pm" : "am";
   hour = hour % 12 || 12;
   hour = hour.toString().padStart(2,0);
   const minute = now.getMinutes().toString().padStart(2,0);
   const second = now.getSeconds().toString().padStart(2,0);
   const timestring = `${hour}:${minute}:${second} ${meridiem}`;
   document.getElementById("clock").textContent = timestring;
}
updateclock();
setInterval(updateclock,1000);
 
// temperature conversion program

 const text3=document.getElementById("text3");
 const tofahrenhait=document.getElementById("tofahrenhait");
 const tocelsius=document.getElementById("tocelsius");
 const btn1=document.getElementById("btn1");
 let temp;

 function convert(){
   if(tofahrenhait.checked){
      temp = Number(text3.value);
      temp = temp * 9 / 5 + 32;
      result.textContent = temp.toFixed(1) + "°F";
      //alt+0176
   }
   else if(tocelsius.checked){
      temp = Number(text3.value);
      temp = (temp - 32) * (5 / 9)
      result.textContent = temp.toFixed(1) + "°C";
   }
   else{
      result.textContent="Select a unit";
   }
 }

//Roll dice

function RollDice(){
   const numofdice = document.getElementById("input1").value;
   const diceresult = document.getElementById("diceresult");
   const diceimages = document.getElementById("diceimages");
   const values = [];
   const images = [];
   for(i = 0 ; i < numofdice ; i++){
      const value = Math.floor(Math.random() * 6) + 1;
      values.push(value);
      images.push(`<img src="diceimages/${value}.png" alt ="dice ${value}">`)
   }
   diceresult.textContent = `dice: ${values.join(",")}`; 
   diceimages.innerHTML = images.join(" ");
   console.log(values);
}

// StopWatch program

const display = document.getElementById("display");
let timer = null;
let starttime = 0;
let elapsedtime = 0;
let isrunning = false;

function startwatch(){
        if(!isrunning){
         starttime = Date.now() - elapsedtime;
         timer = setInterval(updatewatch, 10);
         isrunning = true;
        }        
}
function stopwatch(){
    if(isrunning){
      clearInterval(timer);
      elapsedtime = Date.now() - starttime;
      isrunning = false;
      }
}
function resetwatch(){
   clearInterval(timer);
   starttime = 0;
   elapsedtime = 0;
   isrunning = false;
   display.textContent = "00:00:00:00";
}
function updatewatch(){
   const currenttime = Date.now();
   elapsedtime = currenttime - starttime;

   let hours = Math.floor(elapsedtime / (1000*60*60));
   let minutes = Math.floor(elapsedtime / (1000*60) % 60);
   let seconds = Math.floor(elapsedtime / 1000 % 60);
   let miliseconds = Math.floor(elapsedtime % 1000 / 10);

   hours = String(hours).padStart(2, "0");
   minutes = String(minutes).padStart(2, "0");
   seconds = String(seconds).padStart(2, "0");
   miliseconds = String(miliseconds).padStart(2, "0");

   display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}

