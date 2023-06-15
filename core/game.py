from json import load
import json
import os
from shutil import copy

class Game:
    _name = ""
    _file = ""
    _system = ""

    def __init__ (self, filename):
        
        file = open(filename, "r")
        data = json.load(file)
        file.close()
        self._name = data["title"]
        self._file = data["filename"]
        self._system = data["system"]

    def get_name(self):
        return self._name

    def get_directory(self):
        return f'{os.getcwd()}/core/{"".join(self._system.split())}/{self._file}'

    def get_system(self):
        return self._system

    #Generate a json file for the game
    @staticmethod
    def make_json(file, directory, system, title="", release=""):

        with open("core/vals/consoles.json", "r") as j: consoles = load(j)
        NES = consoles["nes"]
        SNES = consoles["snes"]
        N64 = consoles["n64"]

        #Check if a valid game system was entered
        if (system != NES and system != SNES and system != N64):
            raise Exception(f'Invalid console: {system}')



        #Copy roms to respective folder
        new_dir = f'{os.getcwd()}/core/{"".join(system.split())}/{file}'
        copy(directory, new_dir)

        #make json file
        file_name = file.split(".")[0]
        game_dict = {"title":title, "filename":file,"system":system, "release":release, "directory":new_dir}
        with open(f'{os.getcwd()}/core/json/{file_name}.json', "w") as json_file:
            json.dump(game_dict, json_file)

        return f'core/json/{file_name}.json'