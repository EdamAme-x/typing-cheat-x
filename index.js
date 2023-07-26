function tyTex(text) {
  let typeTarget = text.split("");

  typeTarget.forEach((character) => {
    if (character === "n") {
      let customKeyEvent = new KeyboardEvent('keydown', {
        key: character,
        code: "KeyN",
        location: 0,
        ctrlKey: false,
        shiftKey: false,
        altKey: false,
        metaKey: false,
        repeat: false,
        isComposing: false,
        charCode: 0,
        keyCode: 78,
        which: 78,
      });

      document.dispatchEvent(customKeyEvent);

      customKeyEvent = new KeyboardEvent('keyup', {
        key: character,
        code: "KeyN",
        location: 0,
        ctrlKey: false,
        shiftKey: false,
        altKey: false,
        metaKey: false,
        repeat: false,
        isComposing: false,
        charCode: 0,
        keyCode: 78,
        which: 78,
      });

      document.dispatchEvent(customKeyEvent);
    } else {
      let keyEvent = new KeyboardEvent('keydown', {
        key: character,
        code: `Key${character.toUpperCase()}`
      });

      document.dispatchEvent(keyEvent);

      let keyUpEvent = new KeyboardEvent('keyup', {
        key: character,
        code: `Key${character.toUpperCase()}`
      });

      document.dispatchEvent(keyUpEvent);
    }
  });
}


function handMond() {
  let textContent = document.getElementById("mondaifield").textContent;
  tyTex(textContent);
}

setInterval(handMond, 100); 
