const console_lines = document.getElementById('console-lines');
const input = document.getElementById('command_input');

const help_string = `
<b>ls</b>: lists the contents of the directory
<b>clear/cls</b>: clear the screen
<b>cat [width] [height]</b>: display an image of a cat with given width and height
<b>echo [string ...]</b>: print arguments to the console
<b>help</b>: display this message
`.trim()

const fake_dir_listing = `
<span>about.txt</span>
<span style="color: lightgreen;">info</span>
`.trim();

let cursorState = 0;

input.addEventListener("blur", removeCursorBlink);
input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();

        let command = input.innerText.split(' ');
        let output = "";

        switch (command[0]) {
            case 'help':
                output = help_string;
                break;
            case 'cls':
            case 'clear':
                clearScreen();
                input.innerText = '';
                return;
            case 'ls':
                output = fake_dir_listing;
                break;
            case 'echo':
                output = command.slice(1).join(' ');
                break;
            case 'cat':
                if (command.length === 3) {
                    output = `<img alt='a cat' src='https://placekitten.com/${command[1]}/${command[2]}' />`;
                } else {
                    output = "<img alt='a cat' src='https://placekitten.com/500/500' />";
                }
                break;
            default:
                if (input.innerText !== "")
                    output = "Unrecognized command " + command[0];
        }

        let line = document.createElement("p");
        line.innerHTML = "$ " + input.innerHTML;

        if (output !== "") {
            line.innerHTML += "<br>" + output.replaceAll("\n","<br>");
        }

        console_lines.appendChild(line);
        line.scrollIntoView();

        input.innerText = "";
    } else if (e.key === "ArrowLeft" && e.altKey) {
        e.preventDefault();
    } else if (e.key === "ArrowLeft" && cursorState > - 10 * input.innerText.length) {
        cursorState -= 10;
        cursor.style.left = cursorState.toString() + "px";
    } else if (e.key === "ArrowRight" && cursorState < 0) {
        cursorState += 10;
        cursor.style.left = cursorState.toString() + "px";
    }
    }
)

const cursor = document.getElementById('cursor');

function enableCursorBlink() {
    cursor.classList.add('animate-blink');
}

function removeCursorBlink() {
    cursor.classList.remove('animate-blink');
}

function focusInput() {
    enableCursorBlink();
    input.focus();
}

function clearScreen() {
    while (console_lines.firstChild) {
        console_lines.removeChild(console_lines.firstChild);
    }
}

document.addEventListener('keydown', function (e) {
    if (e.key === "l" && e.ctrlKey) {
        e.preventDefault();
        clearScreen();
    }
});

document.addEventListener("click", focusInput);