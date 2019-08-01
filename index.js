const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;
  const body = document.body
  body.addEventListener('keydown', onKeyDownHandler)
 
// This is the function that would be invoked by the event listener.
  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);
  
    if (key === code[index]) {
      //alert('right key')
      index++;
  
      if (index === code.length) {
        alert("Hurray!");
  
        index = 0;
      }
    } else {
      //alert('wrong key')
      index = 0;
    }
  }


}

init()