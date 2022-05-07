// const keyCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'Space'];

// document.onkeypress = function (e) {
//     //console.log(e);
//     keyCode.push(e.code);
//     console.log(keyCode);
// }

// function init() {
//     let out = '';
//     for (let i = 0; i < keys.length; i += 1) {
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

// const language = 'en';

// const keysEn = [
//     '~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
//     'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter',
//     'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr;', 'Shift', 'ctrl', 'win', 'alt', 'space', 'alt', 'ctrl', '&larr;', '&darr;', '&rarr;'];

// const keysRu = [
//     '~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
//     'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter',
//     'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&uarr;', 'Shift', 'ctrl', 'win', 'alt', 'space', 'alt', 'ctrl', '&larr;', '&darr;', '&rarr;'];

function createKeys(keyLayout) {
    const fragment = document.createDocumentFragment();
    keyLayout.forEach((key) => {
        const keyElement = document.createElement('button');
        const insertLineBreak = ['backspace', '\\', 'enter', 'Shift'].indexOf(key) !== -1;

        // Add attributes/classes
        keyElement.setAttribute('type', 'button');
        keyElement.classList.add('keyboard__key');
        fragment.appendChild(keyElement);
        if (insertLineBreak) {
            fragment.appendChild(document.createElement('br'));
        }
    });
}

class Keys {
    static languages = {
        en: ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
            'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter',
            'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr;', 'Shift', 'ctrl', 'win', 'alt', 'space', 'alt', 'ctrl', '&larr;', '&darr;', '&rarr;'],
        ru: ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
            'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter',
            'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&uarr;', 'Shift', 'ctrl', 'win', 'alt', 'space', 'alt', 'ctrl', '&larr;', '&darr;', '&rarr;'],
    };

    constructor(language) {
        this.language = language;
        console.log(this.language)
    }

    createKeyboard() {
        const keyboard = document.createElement('div');
        keyboard.classList.add('keyboard');
        // const keys = this.language !== 'en' ? createKeys(this.languages.en) : createKeys(this.languages.ru);
        const keys = createKeys(this.languages.en);
        return keyboard.append(keys);
    }
};

window.addEventListener('DOMContentLoaded', () => {
    const y = new Keys('en');
    y.createKeyboard();
});

// function init(arr) {
//     let out = '';
//     // let arr = keysEn;
//     // if (language !== 'en') {
//     //     arr = keysRu;
//     // }
//     for (let i = 0; i < arr.length; i += 1) {
//         out += `<button class="keyboard__key" data="${keyCode[i]}">${arr[i]}</button>`;
//     }

//     document.querySelector('.keyboard').innerHTML = out;
// }
// init(keysEn);

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
