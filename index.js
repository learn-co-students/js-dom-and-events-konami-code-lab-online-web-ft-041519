const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  // Write your JavaScript code inside the init() function

  let index = 0;
  document.body.addEventListener("keydown", handleKeyEvent);

  function handleKeyEvent(e) {
    let input = parseInt(e.which);
    console.log(input);
    if (input === code[index]) {
      index++;
      console.log("good so far");
      if (index === code.length) {
        alert("Hurray!");

        index = 0;
      }
    } else {
      console.log("this was a bad one");
      index = 0;
    }
  }
}
