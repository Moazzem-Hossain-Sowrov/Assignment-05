
// Heart-Count

document.querySelectorAll('.fa-heart').forEach(heart => {
   heart.addEventListener('click', function () {
      let heartCount = document.getElementById("heart-count");
      heartCount.innerText = parseInt(heartCount.innerText)+1;
   })
});


// Call Button 

const callButton = document.querySelectorAll(".call-Button");

let setCoin =document.getElementById('total-coins');
let coins = parseInt(setCoin.innerText);

let history = document.getElementById("history")

for (let i = 0; i < callButton.length; i++) {
   callButton[i].addEventListener('click', function () {
      let serviceName = this.getAttribute('data-name');
      let serviceNumber = this.getAttribute('data-number');

      if (coins < 20) {
         alert("You don't have enough coins to make this call");
         return;
      }

      coins = coins -20;
      setCoin.innerText = coins;

      alert(" Calling " + serviceName + " " + serviceNumber+"...");

      let time = new Date().toLocaleTimeString();

      let historyBox = document.createElement("div");
      historyBox.classList.add("flex", "justify-between", "bg-gray-100", "p-2", "rounded", "mb-2");

      // New div append

      let newDiv = document.createElement("div");

      let h2 = document.createElement("h2");
      h2.classList.add("font-bold");
      h2.innerText = serviceName;

      let h3 = document.createElement("h3");
      h3.innerText = serviceNumber;

      newDiv.appendChild(h2);
      newDiv.appendChild(h3);

      let p = document.createElement("p");
      p.innerText= time;

      historyBox.appendChild(newDiv);
      historyBox.appendChild(p);
      history.appendChild(historyBox);

   });  
};


// Copy Button

const copyButton = document.querySelectorAll(".btn-soft");

let copyElement = document.getElementById("copy");
let copyCount = parseInt(copyElement.innerText);

copyButton.forEach(function (Button) {
   Button.addEventListener("click",function () {
      let serviceNumber = this.getAttribute('data-number');
      console.log(serviceNumber);

      
      navigator.clipboard.writeText(serviceNumber).then(() => {
         copyCount++;
         copyElement.innerText= copyCount;
         alert("Number Copied: " + serviceNumber)
      })
      .catch((err) => {
         console.error("Failed to copy", err);
      });
      
   });
});





// History Button

document.getElementById("call-History").addEventListener('click', function () {
   document.getElementById('history').innerHTML = "";
})

