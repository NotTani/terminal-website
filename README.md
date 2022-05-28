# Terminal Emulator
A minimal terminal-like thing written vanilla
JS, CSS, and HTML (with TailwindCSS) that 
might eventually become my portfolio site.

### Todo
 - [ ] Implement Option/Alt+Left and Right 
   in the terminal
 - [ ] Develop a more solid way to manage
   commands
 - [ ] Add commands relevant to my website
 - [ ] ~~Vim keybindings~~
### Building
To build the app, run the following commands 
in the project root:
```
npm install
npx tailwindcss -i src/assets/styles.base.css -o src/assets/styles.css --watch
```