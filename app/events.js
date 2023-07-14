function showGames(system) {

    //list of all console panels
    let consoles = [document.getElementById('nes'),
    document.getElementById('snes'),
    document.getElementById('n64'),
    document.getElementById('gamecube'),
    document.getElementById('wii')]


    //hide all the console panels but show the one that is selected
    for (let i = 0; i < consoles.length; i++) {
        if (consoles[i].id != system)
            consoles[i].style.display = 'none'
        else
            consoles[i].style.display = 'block'

    }

}


function play(game) {

    var spawn = require("child_process").spawn;
    var process = spawn('python3', ["core/main.py", game]);

    process.stdout.on('data', (data) => {
        console.log(`py3: ${data}`)
    })

    // process.stderr.on('data', (data) => {
    //   console.error(`stderr: ${data}`)
    // })

    // process.on('close', (code) => {
    //   console.log(`child process exited with code ${code}`)
    // })
}

function showAddGameMenu() {
    document.body.classList.add('stop-scrolling') //disable scrolling

    let menu = document.getElementById('apanel');
    let screenCover = document.getElementById('screen-cover');

    menu.style.display = "block" //show the menu
    screenCover.style.display = "block" //dim the rest of the program
}

function closeAddGameMenu() {
    //TODO: create game json file

    document.body.classList.remove('stop-scrolling') //enable scrolling
    document.getElementById('apanel').style.display = "none"; //hide the panel
    document.getElementById('screen-cover').style.display = "none"; //un-dim the screen
}


