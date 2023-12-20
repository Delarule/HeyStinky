let Ev1 = document.querySelector('#Ev1');
Ev1.addEventListener('click',() => {
    alert('Вы НАЖАЛИ!!!')
})

let Ev2 = document.querySelector('#Ev2');
Ev2.addEventListener('dblclick',(event) => {});
    ondblclick = (event) => {console.log('ВЫ НАЖАЛИ ДВАААЖДЫЫ!!!')};

 class Menu {
    handleEvent(event) {
      switch(event.type) {
        case 'mousedown':
          Ev3.innerHTML = "АЙ";
          break;
        case 'mouseup':
          Ev3.innerHTML += "-УЙ";
          break;
      }
    }
  }

  let menu = new Menu();
  Ev3.addEventListener('mousedown', menu);
  Ev3.addEventListener('mouseup', menu);
