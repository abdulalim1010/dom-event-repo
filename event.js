console.log('external fille')
 function clickMe() {
      document.body.style.backgroundColor = 'red'
    }
    function makeBluu() {
      document.body.style.backgroundColor = 'blue';
    }
    function makeOrange() {
      document.body.style.backgroundColor = 'orange';
}
    const yellowColor = document.getElementById('yellow-color');
    yellowColor.onclick = function yellowColor() {
      document.body.style.backgroundColor = 'yellow'
    }
    const blackColor = document.getElementById('black-color');
    blackColor.onclick = function blackColor() {
      document.body.style.backgroundColor = 'black'
    }
    const btnMakePurple = document.getElementById('btn-make-purple');
    btnMakePurple.onclick = function btnMakePurple() {
      document.body.style.backgroundColor = 'purple'
    }
