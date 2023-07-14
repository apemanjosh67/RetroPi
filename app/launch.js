function addGamesOnLaunch() {


    //Load the json files
    const nesGames = require('./json/nesgames.json')
    const snesGames = require('./json/snesgames.json')
    const n64Games = require('./json/n64games.json')
    const gamecubeGames = require('./json/gamecubegames.json')
    const wiiGames = require('./json/wiigames.json')

    //Get each game panel
    let nesPanel = document.getElementById('nes')
    let snesPanel = document.getElementById('snes')
    let n64Panel = document.getElementById('n64')
    let gamecubePanel = document.getElementById('gamecube')
    let wiiPanel = document.getElementById('wii')

    //reset each panel
    nesPanel.replaceChildren();
    snesPanel.replaceChildren();
    n64Panel.replaceChildren();
    gamecubePanel.replaceChildren();
    wiiPanel.replaceChildren();


    //Add NES games to NES panel
    for (let game in nesGames) {
        let img = document.createElement('img')
        img.src = `./img/${nesGames[game]["icon"]}`

        let div = document.createElement('div')
        div.className = 'gbutton'
        div.id = game
        div.addEventListener('click', () => { play(game) })

        let text = document.createTextNode(nesGames[game]["title"])
        div.appendChild(img)
        div.appendChild(text)

        nesPanel.appendChild(div)
    }

    //Add SNES games to SNES panel
    for (let game in snesGames) {
        let img = document.createElement('img')
        img.src = `./img/${snesGames[game]["icon"]}`

        let div = document.createElement('div')
        div.className = 'gbutton'
        div.id = game
        div.addEventListener('click', () => { play(game) })

        let text = document.createTextNode(snesGames[game]["title"])
        div.appendChild(img)
        div.appendChild(text)


        snesPanel.appendChild(div)
    }

    //Add N64 games to N64 panel
    for (let game in n64Games) {
        let img = document.createElement('img')
        img.src = `./img/${n64Games[game]["icon"]}`

        let div = document.createElement('div')
        div.className = 'gbutton'
        div.id = game
        div.addEventListener('click', () => { play(game) })

        let text = document.createTextNode(n64Games[game]["title"])
        div.appendChild(img)
        div.appendChild(text)


        n64Panel.appendChild(div)
    }

    //Add GameCube games to GameCube panel
    for (let game in gamecubeGames) {
        let img = document.createElement('img')
        img.src = `./img/${gamecubeGames[game]["icon"]}`

        let div = document.createElement('div')
        div.className = 'gbutton'
        div.id = game
        div.addEventListener('click', () => { play(game) })

        let text = document.createTextNode(gamecubeGames[game]["title"])
        div.appendChild(img)
        div.appendChild(text)


        gamecubePanel.appendChild(div)
    }

    //Add Wii games to Wii panel
    for (let game in wiiGames) {
        let img = document.createElement('img')
        img.src = `./img/${wiiGames[game]["icon"]}`

        let div = document.createElement('div')
        div.className = 'gbutton'
        div.id = game
        div.addEventListener('click', () => { play(game) })

        let text = document.createTextNode(wiiGames[game]["title"])
        div.appendChild(img)
        div.appendChild(text)


        wiiPanel.appendChild(div)
    }



}

function initializeAddGameMenu() {
    let yearSelector = document.getElementById('year')

    for (let i = new Date().getFullYear(); i >= 1983; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.appendChild( document.createTextNode(i) )

        yearSelector.appendChild(option)
    }
}

addGamesOnLaunch();
initializeAddGameMenu();