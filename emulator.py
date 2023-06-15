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