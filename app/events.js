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


function play() {

    var spawn = require("child_process").spawn;
    var process = spawn('python3', ["core/main.py"]);

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


