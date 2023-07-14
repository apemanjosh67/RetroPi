import os
import sys

image_to_find = sys.argv[1]

#Get the absolute path of the ROM file from the filename
for root, dirs, files in os.walk("/home"):
    for name in files:
        if name == image_to_find:
            absolute_path = os.path.abspath(os.path.join(root, name))


#Move the file to the rom directory
from shutil import copy
copy(absolute_path, "app/img")
