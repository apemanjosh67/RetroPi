#EXAMPLE CODE FOR HOW TO USE THE EMULATOR AND GAME CLASSES TO PLAY GAMES
#Game object is created from its respective "Game json"
#Emulator object is created from its respective "Console json"
#Emulator object has a play method which takes a Game object as an argument

#GLOBAL CONSOLE VARIABLES
with open("core/vals/consoles.json", "r") as j: consoles = load(j)
NES = consoles["nes"]
SNES = consoles["snes"]
N64 = consoles["n64"]


#Set up games
mario_bros_JSON = Game.make_json("supermariobros.nes", "/home/jmuszka/Downloads/supermariobros.nes", NES, title="Super Mario Bros.", release="1985")
lost_levels_JSON = Game.make_json("lostlevels.nes", "/home/jmuszka/Downloads/lostlevels.nes", NES, title="Super Mario Bros. The Lost Levels", release="1986")
tetris_JSON = Game.make_json("tetris.nes", "/home/jmuszka/Downloads/tetris.nes", NES, title="Tetris", release="1984")
mario_world_JSON = Game.make_json("supermarioworld.smc", "/home/jmuszka/Downloads/supermarioworld.smc", SNES, title="Super Mario World", release="1990")
mario_64_JSON = Game.make_json("supermario64.z64", "/home/jmuszka/Downloads/supermario64.z64", N64, title="Super Mario 64", release="1996")

mario1 = Game(mario_bros_JSON)
mario2 = Game(lost_levels_JSON)
tetris = Game(tetris_JSON)
marioworld = Game(mario_world_JSON)
mario64 = Game(mario_64_JSON)


#Set up emulator
nes_json = Emulator.make_json(NES, "fceux", NES)
nes = Emulator(nes_json)

snes_json = Emulator.make_json(SNES, "flatpak run com.snes9x.Snes9x", SNES)
snes = Emulator(snes_json)

n64_json = Emulator.make_json(N64, "mupen64plus", N64)
n64 = Emulator(n64_json)

#Play!
nes.play(mario1)