import json

class Game:
    _name = ""
    _directory = ""

    def __init__ (self, filename):
        
        file = open(filename, "r")
        data = json.load(file)
        file.close()
        self._name = data["name"]
        self._directory = data["directory"]

    def get_name(self):
        return self._name

    def get_directory(self):
        return self._directory