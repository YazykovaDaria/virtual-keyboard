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

const addKeyCode = (keys) => {
    const keyCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
    const buttons = keys.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i += 1) {
        buttons[i].setAttribute('id', `${keyCode[i]}`);
    }
    // console.log(keys)
    return keys;
};

function createKeys(keyLayout) {
    // console.log(keyLayout)
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
    // keyboard.addEventListener('keydown', (e) => {
    //     //console.log(keyboard.querySelector(`#${e.code}`));
    //     console.log('hi');
    // keyboard.querySelector(`${e.code}`)
    //     .classList.add('active');
    //})
    //console.log(keyboard);
    return keyboard;
}

const switchLanguage = (language) => {
    const keysEn = [
        '~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
        'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'del', 'caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter',
        'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr;', 'Shift', 'ctrl', 'alt', 'space', 'alt', 'ctrl', '&larr;', '&darr;', '&rarr;'];
    const keysRu = [
        '~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
        'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'del', 'caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter',
        'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&uarr;', 'Shift', 'ctrl', 'alt', 'space', 'alt', 'ctrl', '&larr;', '&darr;', '&rarr;'];
    const res = language === 'en' ? createKeys(keysEn) : createKeys(keysRu);
    return res;
};

// class Keys {
//     static languages = {
//         en: ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
//             'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter',
//             'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr;', 'Shift', 'ctrl', 'win', 'alt', 'space', 'alt', 'ctrl', '&larr;', '&darr;', '&rarr;'],
//         ru: ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
//             'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter',
//             'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&uarr;', 'Shift', 'ctrl', 'win', 'alt', 'space', 'alt', 'ctrl', '&larr;', '&darr;', '&rarr;'],
//     };

//     constructor(language) {
//         this.language = language;
//         console.log(this.language)
//     }

//     createKeyboard() {
//         const keyboard = document.createElement('div');
//         keyboard.classList.add('keyboard');
//         // const keys = this.language !== 'en' ? createKeys(this.languages.en) : createKeys(this.languages.ru);
//         const keys = createKeys(this.languages.en);
//         return keyboard.append(keys);
//     }
// };

window.addEventListener('DOMContentLoaded', () => {
    // const y = new Keys('en');
    // document.querySelector('body').append(y.createKeyboard());
    const y = switchLanguage('t');
    //console.log(y)
    // y.addEventListener('keydown', (e) =>
    //     console.log(e.code))
    document.querySelector('body').append(y);
});

document.addEventListener('keydown', (e) => {
    const el = document.body.querySelector(`#${e.code}`)
    if (e.code === 'Tab') {
        e.preventDefault()
    }
    setTimeout(el.classList.add('active'), 400);

})

document.addEventListener('keyup', (e) => {
    const el = document.body.querySelector(`#${e.code}`)
    setTimeout(el.classList.remove('active'), 400);

})
