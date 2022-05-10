// let keyCode = [];

// document.onkeypress = function (e) {
//     console.log(e, e.code);
//     // keyCode.push(e.code);
//     // console.log(keyCode);
// }
// let k = [];
// document.addEventListener('keydown', (e) => {
//     //k.push(e.code)
//     console.log(e.code)
// })

// function init() {
//     let out = '';
//     for (let i = 0; i < keys.switchLanguageth; i += 1) {
//         out += `<button class="keyboard__key" data="${keys[i]}">${String.fromCharCode(keys[i])}</button>`;
//     }
//     document.querySelector('.keyboard').innerHTML = out;
// }

// init();
// document.onkeypress = function (e) {
//     // console.log(e.keyCode);
//     document.querySelectorAll('.keyboard .keyboard__key')
//         .forEach((el) => el.classList.remove('active'));
//     document.querySelector(`div .keyboard__key[data="${e.keyCode}"]`).classList.add('active');
// };

// document.querySelectorAll('.keyboard .keyboard__key')
//     .forEach((el) => {
//         el.onclick = function (e) {
//             document.querySelectorAll('.keyboard .keyboard__key').forEach((element) => element.classList.remove('active'));
//             const code = this.getAttribute('data');
//             this.classList.add('active');
//         };
//     });
let language = 'en';

const startBody = `<div class="container">
    <h1> Virtual keyboard</h1>
<span>created in linux</span>
<span>switch language: left ctrl+alt</span>
<textarea class="use-keyboard-input" autofocus></textarea>
</div>`;

const addKeyCode = (keys) => {
    const keyCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
    const buttons = keys.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i += 1) {
        buttons[i].setAttribute('id', `${keyCode[i]}`);
    }
    // console.log(keys)
    return keys;
};

const addEventsOnBody = (body) => {
    // const keyboard = body.querySelector('.keyboard');
    // console.log(keyboard);
    body.addEventListener('keydown', (e) => {
        const el = document.body.querySelector(`#${e.code}`);
        if (e.code === 'Tab') {
            e.preventDefault();
        } else if (e.code === 'ControlLeft') {
            body.addEventListener('keydown', (event) => {
                if (event.code === 'AltLeft') {
                    language === 'en' ? language = 'ru' : language = 'en';
                    switchLanguage(language);
                }
            });
        }

        el.classList.add('active');
    });

    body.addEventListener('keyup', (e) => {
        const el = document.body.querySelector(`#${e.code}`);
        setTimeout(el.classList.remove('active'), 400);
    });
};

function createKeys(keyLayout) {
    // console.log(keyLayout)
    const body = document.querySelector('body');
    body.innerHTML = startBody;
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    keyLayout.forEach((key) => {
        const keyElement = document.createElement('button');
        const insertLineBreak = ['backspace', 'Shift', 'enter', 'del'].indexOf(key) !== -1;

        // Add attributes/classes
        keyElement.setAttribute('type', 'button');
        keyElement.classList.add('keyboard__key');
        keyElement.textContent = key.toLowerCase();
        keyboard.append(keyElement);
        if (insertLineBreak) {
            keyboard.append(document.createElement('br'));
        }
    });

    addKeyCode(keyboard);
    body.append(keyboard);
    addEventsOnBody(body);
    return body;
}

const switchLanguage = (language) => {
    const keysEn = [
        '~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
        'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'del', 'caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter',
        'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr;', 'Shift', 'ctrl', 'alt', 'space', 'alt', 'ctrl', '&larr;', '&darr;', '&rarr;'];
    const keysRu = [
        '~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
        'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter',
        'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&uarr;', 'Shift', 'ctrl', 'alt', 'space', 'alt', 'ctrl', '&larr;', '&darr;', '&rarr;'];
    const res = language === 'en' ? createKeys(keysEn) : createKeys(keysRu);
    return res;
};

// class Keys {

//     constructor(language) {
//         this.language = language;
//         console.log(this.language)
//     }

//     createKeyboard() {
//         const keyboard = document.createElement('div');
//         keyboard.classList.add('keyboard');
//
//         const keys = createKeys(this.languages.en);
//         return keyboard.append(keys);
//     }
// };

window.addEventListener('DOMContentLoaded', () => {
    // const y = new Keys('en');
    // document.querySelector('body').append(y.createKeyboard());
    switchLanguage(language);
    // console.log(y)
    // y.addEventListener('keydown', (e) =>
    //     console.log(e.code))
    // document.querySelector('body').append(y);
});
console.log(language);
// document.addEventListener('keydown', (e) => {
//     const el = document.body.querySelector(`#${e.code}`);
//     if (e.code === 'Tab') {
//         e.preventDefault();
//     }
//     el.classList.add('active');
// });

// document.addEventListener('keyup', (e) => {
//     const el = document.body.querySelector(`#${e.code}`);
//     setTimeout(el.classList.remove('active'), 400);
// });
