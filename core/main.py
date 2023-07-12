#Josh Muszka
#PROJECT START DATE: June 15, 2023
#LAST UPDATED: July 12, 2023
#GOAL: to make an Emulation hub for Nintendo games. Simply choose a game and play

from json import load
import sys

from emulator import *
from game import *


#PROGRAM'S COMMAND-LINE ARGUMENT: filename of the game's ROM name (without the extension)

#Need to obtain:
#   -game's json file
#   -name of the console the game runs on
#   -console's json file

#So we can make:
#   -Game object
#   -Emulator object

dir = f'core/json/{sys.argv[1]}.json'
with open(dir, "r") as j: game_info = load(j)

console_name = game_info["system"]

game = Game(dir) #make game object
console = Emulator(f'core/json/{console_name}.json') #make emulator object


#Launch the game
console.play(game)










