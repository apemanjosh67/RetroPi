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
    var proc = spawn('python3', ["core/main.py", game]);

    proc.stdout.on('data', (data) => {
        console.log(`py3: ${data}`)
    })

    //record the PID of the game
    let status = require('./json/status.json')

    status['pid'] = proc.pid
    str = JSON.stringify(status)
    var fs = require('fs')
    fs.writeFileSync('app/json/status.json', str)

    document.getElementById('screen-cover').style.display = "block" //dim the rest of the program
    document.body.classList.add('stop-scrolling') //disable scrolling
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

    //if fields were blank, abort
    if (title == '' || year == '' || system == '' || rom == '' || image == '') return

    //Generate JSON files
    let coreJSON = {"title" : title,
            "filename" : correctRomName.split('\\')[2],
            "system" : require('../core/vals/consoles.json')[system],
            "release" : year};

    let appJSONPiece = {"title" : title,
                "release" : year,
                "icon" : image.split('\\')[2],
                "console" : system};


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

    setTimeout(function() {
        addGamesOnLaunch();
      }, 1000);

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


function showDeleteMenu(game, title) {
    document.body.classList.add('stop-scrolling') //disable scrolling

    //change header
    document.getElementById("dheader").innerHTML = `Are you sure you want to delete ${title}?`

    //dim screen
    document.getElementById('screen-cover').style.display = 'block'

    //show menu
    document.getElementById('dpanel').style.display = 'block'


    //update status
    var gameToDelete = require(`./json/gametodelete.json`);
    gameToDelete["game"] = game;
    var str = JSON.stringify(gameToDelete);
    var fs = require('fs');
    fs.writeFileSync(`app/json/gametodelete.json`, str);
}


function closeDeleteMenu() {
    //un dim screen
    document.getElementById('screen-cover').style.display = 'none'

    //enable scrolling
    document.body.classList.remove('stop-scrolling')

    //hide menu
    document.getElementById('dpanel').style.display = 'none'


    //update status
    var gameToDelete = require(`./json/gametodelete.json`);
    gameToDelete["game"] = 'null';
    var str = JSON.stringify(gameToDelete);
    var fs = require('fs');
    fs.writeFileSync(`app/json/gametodelete.json`, str);

}

function getConsole(game) {
    //Load the json files
    const nesGames = require('./json/nesgames.json')
    const snesGames = require('./json/snesgames.json')
    const n64Games = require('./json/n64games.json')
    const gamecubeGames = require('./json/gamecubegames.json')
    const wiiGames = require('./json/wiigames.json')

    for (nesGame in nesGames) {
        console.log(`${nesGame}---${game}`)
        if (game == nesGame) {
            return 'nes';
        }
    }

    for (snesGame in snesGames) {
        if (game == snesGame) {
            return 'snes';
        }
    }

    for (n64Game in n64Games) {
        if (game == n64Game) {
            return 'n64';
        }
    }

    for (gamecubeGame in gamecubeGames) {
        if (game == gamecubeGame) {
            return 'gamecube';
        }
    }

    for (wiiGame in wiiGames) {
        if (game == wiiGame) {
            return 'wii';
        }
    }
}

function deleteGame() {
    var fs = require('fs')
    let gameToDelete = require('./json/gametodelete.json')['game']
    let system = getConsole(gameToDelete)
    let gamesList = require(`./json/${system}games.json`)
    let icon = gamesList[gameToDelete]['icon']



    //delete the DOM element
    let gameButton = document.getElementById(gameToDelete);
    gameButton.remove();

    //delete from app json file
    delete gamesList[gameToDelete]
    var str = JSON.stringify(gamesList);
    fs.writeFileSync(`app/json/${system}games.json`, str);

    //delete image
    var filePath = `app/img/${icon}`; 
    fs.unlinkSync(filePath);

    //delete rom file
    let gameJSON = require(`../core/json/${gameToDelete}`)
    var filePath = `core/${gameJSON['system'].split(' ').join('')}/${gameJSON['filename']}`; 
    fs.unlinkSync(filePath);

    //delete core json
    var filePath = `core/json/${gameToDelete}.json`
    fs.unlinkSync(filePath);

    closeDeleteMenu();
}

function killCurrentGameSession() {
    let status = require('./json/status.json')
    let pid = status['pid']

    if (pid == 'null') return

    //process.kill(pid)
    const kill = require('tree-kill');
    kill(pid, 'SIGKILL')

    status['pid'] = 'null'
    str = JSON.stringify(status)
    var fs = require('fs')
    fs.writeFileSync('app/json/status.json', str)

    document.getElementById('screen-cover').style.display = "none"; //un-dim the screen
    document.body.classList.remove('stop-scrolling') //enable scrolling
}