#Josh Muszka
#PROJECT START DATE: June 15, 2023
#LAST UPDATED: June 15, 2023
#GOAL: to make an Emulation hub for Nintendo games. Simply choose a game and play

from emulator import *
from game import *

#Generate JSON file for emulator
def make_emulator(name, command, system=""):
    emu_dict = {"system":system, "command":command}

    with open(f'json/{name}.json', "w") as json_file:
        json.dump(emu_dict, json_file)

    return f'json/{name}.json'

#Generate JSON file for game
def make_game(file, directory, name="", release=""):
    game_dict = {"name":name, "release":release, "directory":directory}
    
    with open(f'json/{file}.json', "w") as json_file:
        json.dump(game_dict, json_file)

    return f'json/{file}.json'

#Set up games
mario1 = make_game("supermariobros", "/home/jmuszka/Downloads/supermariobros.nes", "Super Mario Bros.", "1985")
mario2 = make_game("lostlevels", "/home/jmuszka/Downloads/lostlevels.nes", "Super Mario Bros. The Lost Levels", "1986")
tetris = make_game("tetris", "/home/jmuszka/Downloads/tetris.nes", "Tetris", "1984")

mario1 = Game(mario1)
mario2 = Game(mario2)
tetris = Game(tetris)


#Set up emulator
nes = make_emulator("nes", "fceux", "Nintendo Entertainment System")
nes = Emulator(nes)

#Play!
nes.play(mario2)