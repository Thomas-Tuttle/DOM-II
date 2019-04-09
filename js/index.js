// Your code goes here

// BUTTONS

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');


btn1.addEventListener('click', event => {
  btn1.style.background = "white";
  btn1.style.color = "black";
  btn1.style.transform = "rotate(0deg)";
  btn1.style.border = "2px solid black";
});

btn1.addEventListener('mouseover', event => {
  btn1.style.background = "red";
  btn1.style.color = "black"; 
  btn1.style.transform = "rotate(-15deg)";
  btn1.style.border = "2px solid black";
})

btn2.addEventListener('click', event => {
  btn2.style.background = "darkgrey";
  btn2.style.color = "white";
  btn2.style.transform = "rotate(0deg)";
  btn2.style.border = "2px solid black"; 
});

btn2.addEventListener('mouseover', event => {
  btn2.style.background = "green";
  btn2.style.color = "black";
  btn2.style.transform = "rotate(-15deg)"; 
  btn2.style.border = "2px solid black";
})

btn3.addEventListener('click', event => {
  btn3.style.background = "black";
  btn3.style.color = "darkgrey";
  btn3.style.border = "2px solid darkgrey";
  btn3.style.transform = "rotate(0deg)";
});

btn3.addEventListener('mouseover', event => {
  btn3.style.background = "blue";
  btn3.style.color = "black"; 
  btn3.style.transform = "rotate(-15deg)";
  btn3.style.border = "2px solid black";
})

// IMAGES
const funBus = document.querySelector('.funBus');
const busImg = document.querySelector(".busImg");
const mapImg = document.querySelector('.mapImg');
const cityBoatImg = document.querySelector('.cityBoatImg');
const islandBoatImg = document.querySelector('.islandBoatImg');

funBus.addEventListener('mouseover', event => {
    alert("Click The Images For A Better Look!");
    
  });

busImg.addEventListener('click', event => {
    busImg.style.marginTop = "30px";
    busImg.style.borderRadius = "15px";
    busImg.style.border = "2px solid black";
    busImg.style.boxShadow = "0px 0px 25px 3px black";
});

mapImg.addEventListener('click', event => {
    mapImg.style.borderRadius = "15px";
    mapImg.style.border = "2px solid black";
    mapImg.style.boxShadow = "0px 0px 25px 3px black";
});

cityBoatImg.addEventListener('click', event => {
    cityBoatImg.style.borderRadius = "15px";
    cityBoatImg.style.border = "2px solid black";
    cityBoatImg.style.boxShadow = "0px 0px 25px 3px black";
});

islandBoatImg.addEventListener('click', event => {
    islandBoatImg.style.borderRadius = "15px";
    islandBoatImg.style.border = "2px solid black";
    islandBoatImg.style.boxShadow = "0px 0px 25px 3px black";
});



document.addEventListener('keydown', event => {
    switch (event.keyCode) {
        //F
        case 70:
          setBackgroundColor('red');
          break;
        //U  
        case 85:
          setBackgroundColor('green');
          break;
        //N  
        case 78:
          setBackgroundColor('blue');
          break;
        //SPACE  
        case 32:
          setBackgroundColor('yellow');
          break;
        //B  
        case 66:
          setBackgroundColor('teal');
          break;
        //S
        case 83:
          setBackgroundColor('purple');
          break;
        //!
        case 49:
          setBackgroundColor('white');
    }
  });
        
  function setBackgroundColor(color) {
      document.querySelector('body').style.backgroundColor = color;
  }
