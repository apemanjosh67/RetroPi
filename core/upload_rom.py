import os
import sys

rom_to_find = sys.argv[1]
console = sys.argv[2]

print("CONSOLE:", console)

#Get the absolute path of the ROM file from the filename
for root, dirs, files in os.walk("/home"):
    for name in files:
        if name == rom_to_find:
            absolute_path = os.path.abspath(os.path.join(root, name))

new_name = "".join(rom_to_find.split())

#Move the file to the rom directory
from shutil import copy
copy(absolute_path, f'core/{ "".join(console.split()) }/{new_name}')
