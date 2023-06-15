from json import load
import json
import os

class Emulator:

    _system = ""
    _command = ""

    def __init__(self, filename):
        file = open(filename, "r")
        data = json.load(file)
        file.close()
        self._system = data["system"]
        self._command = data["command"]

    def get_system(self):
        return self._system

    def get_command(self):
        return self._command

    def play(self, game):
        os.system( self._command+" "+game.get_directory() )


    #Generate a json file for the emulator
    @staticmethod
    def make_json(name, command, system=""):

        with open("core/vals/consoles.json", "r") as j: consoles = load(j)
        NES = consoles["nes"]
        SNES = consoles["snes"]
        N64 = consoles["n64"]

        #check if a valid game system was entered
        if (system != NES and system != SNES and system != N64):
            raise Exception(f'Invalid console: {system}')



        emu_dict = {"system":system, "command":command}

        with open(f'{os.getcwd()}/core/json/{name}.json', "w") as json_file:
            json.dump(emu_dict, json_file)

        return f'core/json/{name}.json'