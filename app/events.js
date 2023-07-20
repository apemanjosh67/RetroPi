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

    //update status
    var currentGameStatus = require(`./json/status.json`);
    currentGameStatus["currentGame"] = game;
    var str = JSON.stringify(currentGameStatus);
    var fs = require('fs');
    fs.writeFileSync(`app/json/status.json`, str);

    //launch the game
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


function closeAddGameMenu(wasCancelled) {

    //Fields
    let title = document.getElementById('title').value;
    let year = document.getElementById('year').value;
    let system = document.getElementById('system').value;
    let rom = document.getElementById('rom').value;
    let image = document.getElementById('game-image').value;

    //Reset the form values
    document.getElementById('title').value = "";
    document.getElementById('year').value = "";
    document.getElementById('system').value = "";
    document.getElementById('rom').value = "";
    document.getElementById('game-image').value = "";

    //Hide the Add Game menu
    document.body.classList.remove('stop-scrolling') //enable scrolling
    document.getElementById('apanel').style.display = "none"; //hide the panel
    document.getElementById('screen-cover').style.display = "none"; //un-dim the screen

    if (wasCancelled) return;

    let correctRomName = rom.split(" ").join("")

    //Generate JSON files
    let coreJSON = {"title" : title,
            "filename" : correctRomName.split('\\')[2],
            "system" : require('../core/vals/consoles.json')[system],
            "release" : year};

    let appJSONPiece = {"title" : title,
                "release" : year,
                "icon" : image.split('\\')[2]};


    //Save coreJSON file
    var str = JSON.stringify(coreJSON);
    var fs = require('fs');
    fs.appendFileSync(`core/json/${title}.json`, str);

    //Save appJSONPiece
    var gamesJSON = require(`./json/${system}games.json`);
    gamesJSON[title] = appJSONPiece
    fs.writeFileSync(`app/json/${system}games.json`, JSON.stringify(gamesJSON));

    //Move the ROM and image files into their respective directories
    saveROM( rom.split('\\')[2],  coreJSON["system"])
    saveImage( appJSONPiece["icon"] )

    //Update game panels
    //location.reload();
    addGamesOnLaunch();

}


function saveROM(file, system) {
    var spawn = require("child_process").spawn;
    var process = spawn('python3', ["core/upload_rom.py", file, system]);

    process.stdout.on('data', (data) => {
        console.log(`py3: ${data}`)
    })
}


function saveImage(file) {
    var spawn = require("child_process").spawn;
    var process = spawn('python3', ["core/upload_image.py", file]);

    process.stdout.on('data', (data) => {
        console.log(`py3: ${data}`)
    })
}


function showDeleteMenu(game) {
    document.body.classList.add('stop-scrolling') //disable scrolling

    //change header
    document.getElementById("dheader").innerHTML = `Are you sure you want to delete ${game}?`

    //dim screen
    document.getElementById('screen-cover').style.display = 'block'

    //show menu
    document.getElementById('dpanel').style.display = 'block'
}


function closeDeleteMenu() {
    //un dim screen
    document.getElementById('screen-cover').style.display = 'none'

    //enable scrolling
    document.body.classList.remove('stop-scrolling')

    //hide menu
    document.getElementById('dpanel').style.display = 'none'
}