function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const sluchChislo = getRandomInt(5);
console.log(sluchChislo);

function changeImage() {
    const myImg = document.getElementById('myImg');
    if (sluchChislo == 4) {
        myImg.src = 'yellow.jpg';
        }
    if (sluchChislo == 3) {
        myImg.src = 'grey.jpg';
        }
    if (sluchChislo == 2) {
        myImg.src = 'blue.jpg';
        }
    if (sluchChislo == 1) {
        myImg.src = 'red.jpg';
        }
    if (sluchChislo == 0) {
        myImg.src = 'green.jpg';
        }
        setTimeout(function(){
            location.reload();
        }, 2500);
}

const myClock = `
  <div class="hourglassBackground">
    <div class="hourglassContainer">
    <div class="hourglassCurves"></div>
    <div class="hourglassCapTop"></div>
    <div class="hourglassGlassTop"></div>
    <div class="hourglassSand"></div>
    <div class="hourglassSandStream"></div>
    <div class="hourglassCapBottom"></div>
    <div class="hourglassGlass"></div>
  </div>
  `

const clock = () => {
    document.querySelector('#forClock').insertAdjacentHTML('beforeend', myClock)
    document.querySelector('#forClock').removeEventListener('click',clock)
}
document.querySelector('#forClock').addEventListener('click', clock)

const clock2 = () => {
    document.querySelector('#forClock2').insertAdjacentHTML('beforeend', myClock)
    document.querySelector('#forClock2').removeEventListener('click',clock2)  
}
document.querySelector('#forClock2').addEventListener('click', clock2)

document.getElementById('hider').onclick = function() {
    document.getElementById('text').hidden = true;
  }

  document.getElementById('hider2').onclick = function() {
    document.getElementById('text2').hidden = true;
  }
   

  