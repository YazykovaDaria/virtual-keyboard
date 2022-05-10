//let language = false;
const createIconHTML = (iconName) => `<i class="material-icons">${iconName}</i>`;

const addKeyCode = (keys, keyLanguage) => {
  const keyCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
  const buttons = keys.querySelectorAll('button');
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].classList.add(`${keyCode[i]}`, keyLanguage);
  }
  return keys;
};

const addEventOnBody = (body) => {
  let flagDown = false;
  //let flagUp = true;
  body.addEventListener('keydown', (e) => {
    document.body.querySelectorAll(`.${e.code}`).forEach((el) => {
      if (e.code === 'ControlLeft') flagDown = true;
      if (e.code === 'AltLeft' && flagDown) {
        document.querySelector('.keyboard_en').classList.toggle('hidden');
        // flagUp = false;

        // document.querySelector('.keyboard_en').classList.remove('hidden');
        // flagUp = true;
        // // language = true;
        // console.log(flagUp);
        // document.querySelector('.keyboard_en')
        //   .classList.toggle('hidden');
        document.querySelector('.keyboard_ru')
          .classList.add('hidden');
      }
      el.classList.add('active');
    });
  });

  body.addEventListener('keyup', (e) => {
    document.body.querySelectorAll(`.${e.code}`)
      .forEach((el) => {
        // if (e.code === 'ControlLeft') flagUp = true;
        // if (e.code === 'AltLeft' && flagUp) {
        //   document.querySelector('.keyboard_en').classList.remove('hidden');
        // }
        el.classList.remove('active')
      });
    //setTimeout(el.classList.remove('active'), 400);
  });
  return body;
};

class Keyboard {
  constructor(keyLayout, body, className) {
    this.keyLayout = keyLayout;
    this.body = body;
    this.className = className;
    this.elements = {
      main: null,
      keysContainer: null,
      keys: [],
    };
    this.eventHandlers = {
      oninput: null,
      onclose: null,
    };
    this.properties = {
      value: '',
      capsLock: false,
    };
  }

  init() {
    // Create main elements
    this.elements.main = document.createElement('div');
    this.elements.keysContainer = document.createElement('div');

    // Setup main elements
    this.elements.main.classList.add(this.className);
    this.elements.keysContainer.classList.add('keyboard__keys');
    this.elements.keysContainer.append(this.createKeys());

    this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard__key');

    // Add to DOM
    this.elements.main.append(this.elements.keysContainer);
    // const body = document.querySelector('body');
    // body.innerHTML = this.elements.body;
    this.body.append(this.elements.main);

    // Automatically use keyboard for elements with .use-keyboard-input

    //BAG KAPS!!!

    // const caps = document.querySelector('.CapsLock')
    // caps.addEventListener('ckick', () => {
    //   this.toggleCapsLock();
    //   caps.classList.toggle('keyboard__key--active', this.properties.capsLock);
    // });

    document.querySelectorAll('.use-keyboard-input').forEach((element) => {
      element.addEventListener('focus', () => {
        this.open(element.value, (currentValue) => {
          element.value = currentValue;
        });
      });
    });
  }

  createKeys() {
    const fragment = document.createDocumentFragment();

    // Creates HTML for an icon
    this.keyLayout.forEach((key) => {
      const keyElement = document.createElement('button');
      const insertLineBreak = ['backspace', 'Shift', 'enter', '\\'].indexOf(key) !== -1;

      // Add attributes/classes
      keyElement.setAttribute('type', 'button');
      keyElement.classList.add('keyboard__key');

      switch (key) {
        case '&uarr;': keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = createIconHTML('keyboard_arrow_up');
          keyElement.addEventListener('click', () => {
            this.properties.value += 'ᐃ';
            this.triggerEvent('oninput');
          });

          break;
        case '&larr;': keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = createIconHTML('keyboard_arrow_left');
          keyElement.addEventListener('click', () => {
            this.properties.value += 'ᐊ';
            this.triggerEvent('oninput');
          });
          break;
        case '&darr;': keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = createIconHTML('keyboard_arrow_down');
          keyElement.addEventListener('click', () => {
            this.properties.value += 'ᐁ';
            this.triggerEvent('oninput');
          });
          break;

        case '&rarr;': keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = createIconHTML('keyboard_arrow_right');
          keyElement.addEventListener('click', () => {
            this.properties.value += 'ᐅ';
            this.triggerEvent('oninput');
          });
          break;
        case 'alt': keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = key.toLowerCase();
          keyElement.addEventListener('click', () => {
            this.properties.value += '';
            this.triggerEvent('oninput');
          });
          break;
        case 'ctrl': keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = key.toLowerCase();
          keyElement.addEventListener('click', () => {
            this.properties.value += '';
            this.triggerEvent('oninput');
          });
          break;
        case 'shift': keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = key.toLowerCase();
          keyElement.addEventListener('click', () => {
            this.properties.value += '';
            this.triggerEvent('oninput');
          });
          break;

        case 'Shift': keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = key.toLowerCase();
          keyElement.addEventListener('click', () => {
            this.properties.value += '';
            this.triggerEvent('oninput');
          });
          break;
        case 'tab': keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = createIconHTML('keyboard_tab');
          keyElement.addEventListener('click', () => {
            this.properties.value += '     ';
            this.triggerEvent('oninput');
          });
          break;

        case 'backspace':
          keyElement.classList.add('keyboard__key--wide');
          keyElement.innerHTML = createIconHTML('backspace');

          keyElement.addEventListener('click', () => {
            this.properties.value.substring(0, this.properties.value.switchLanguageth - 1);
            this.triggerEvent('oninput');
          });

          break;

        case 'caps':
          keyElement.classList.add('keyboard__key--wide', 'keyboard__key--activatable');
          keyElement.innerHTML = createIconHTML('keyboard_capslock');

          keyElement.addEventListener('click', () => {
            this.toggleCapsLock();
            keyElement.classList.toggle('keyboard__key--active', this.properties.capsLock);
          });

          break;

        case 'enter':
          keyElement.classList.add('keyboard__key--wide');
          keyElement.innerHTML = createIconHTML('keyboard_return');

          keyElement.addEventListener('click', () => {
            this.properties.value += '\n';
            this.triggerEvent('oninput');
          });

          break;

        case 'space':
          keyElement.classList.add('keyboard__key--extra-wide');
          keyElement.innerHTML = createIconHTML('space_bar');

          keyElement.addEventListener('click', () => {
            this.properties.value += ' ';
            this.triggerEvent('oninput');
          });

          break;

        default:
          keyElement.textContent = key.toLowerCase();

          keyElement.addEventListener('click', () => {
            this.properties.value += this.properties.capsLock ? key.toUpperCase()
              : key.toLowerCase();
            this.triggerEvent('oninput');
          });

          break;
      }

      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement('br'));
      }
    });
    addKeyCode(fragment);
    return fragment;
  }

  triggerEvent(handlerName) {
    if (typeof this.eventHandlers[handlerName] === 'function') {
      this.eventHandlers[handlerName](this.properties.value);
    }
  }

  toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;

    for (const key of this.elements.keys) {
      if (key.childElementCount === 0) {
        key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
      }
    }
  }

  open(initialValue, oninput, onclose) {
    this.properties.value = initialValue || '';
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
    this.elements.main.classList.remove('keyboard--hidden');
  }
}
const generateKeyboard = () => {
  const keysEn = ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
    'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter',
    'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr;', 'Shift', 'ctrl', 'alt', 'space', 'alt', 'ctrl', '&larr;', '&darr;', '&rarr;'];

  const keysRu = ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
    'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter',
    'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&uarr;', 'Shift', 'ctrl', 'alt', 'space', 'alt', 'ctrl', '&larr;', '&darr;', '&rarr;'];
  const body = document.querySelector('body');
  body.innerHTML = `<div class="container">
    <h1> Virtual keyboard</h1>
<span>created in linux</span>
<span>switch language: left ctrl+alt</span>
<textarea class="use-keyboard-input" autofocus></textarea>
</div>`;
  const container = document.querySelector('.container');
  // const containerRu = document.querySelector('.container_ru');
  new Keyboard(keysRu, container, 'keyboard_ru').init();
  new Keyboard(keysEn, container, 'keyboard_en').init();
  addEventOnBody(body);
  //document.querySelector('.keyboard_ru').classList.add('hidden');
};

window.addEventListener('DOMContentLoaded', () => {
  generateKeyboard();
  // const y = new Keyboard(keysRu);
  // y.init();
  //Keyboard.init();
});

// const switchLanguage = () => {
//   const el = document.querySelector('.keyboard_en');
//   if (language) {
//     el.classList.add('hidden');
//     console.log('ne')
//     language = false;
//   }


// }
// switchLanguage();
// if (language) {
//   console.log('he');
//   language = false;
//   // document.querySelector('.keyboard_en').classList.toggle('hidden');
// }
