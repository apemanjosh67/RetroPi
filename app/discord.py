from pypresence import Presence
import time
import sys
import os, json

#----- INITIALIZE -----#

client_id = '1046279865575407617'
RPC = Presence(client_id)
RPC.connect()

elapsed_time = 0
status = "Browsing games"
RPC.update(state="Time elapsed: 00:00:00s", details=status)
#----------------------#


#----- ACTIVITY -----#

def get_console(game):
    with open("app/json/nesgames.json", "r") as j: nes_games = json.load(j)
    with open("app/json/snesgames.json", "r") as j: snes_games = json.load(j)
    with open("app/json/n64games.json", "r") as j: n64_games = json.load(j)
    with open("app/json/gamecubegames.json", "r") as j: gamecube_games = json.load(j)
    with open("app/json/wiigames.json", "r") as j: wii_games = json.load(j)

    #Check NES games
    for g in nes_games:
        if g == game: return nes_games[g]["console"]

    #Check SNES games
    for g in snes_games:
        if g == game: return snes_games[g]["console"]

    #Check N64 games
    for g in n64_games:
        if g == game: return n64_games[g]["console"]

    #Check GameCube games
    for g in gamecube_games:
        if g == game: return gamecube_games[g]["console"]

    #Check Wii games
    for g in wii_games:
        if g == game: return wii_games[g]["console"]

def get_year(game):
    with open(f'core/json/{game}.json', "r") as j: game_JSON = json.load(j)
    return game_JSON["year"]

def get_game():
    with open("app/json/status.json", "r") as j: game = json.load(j)["currentGame"]
    
    if (game == "null"): return "Browsing games"

    console = get_console(game)
    with open(f'app/json/{console}games.json', "r") as j: status = json.load(j)[game]["title"]
    return status

def get_formatted_time(elapsed_time):
    secs = 0
    mins = 0
    hours = 0

    secs = elapsed_time % 60
    mins = ((elapsed_time-secs)/60) % 60
    hours = ((mins-(mins%60))/60)%60
    
    secs = str(secs)
    mins = str(int(mins))
    hours = str(int(hours))

    if len(secs) < 2: secs = "0"+secs
    if len(mins) < 2: mins = "0"+mins
    if len(hours) < 2: hours = "0"+hours

    formatted_time = "{}:{}:{}".format(hours,mins,secs)
    return formatted_time

#--------------------#

while 1:
    time.sleep(1)
    elapsed_time+=1

    if get_game() == "Browsing games": status = get_game()
    else: status = f'{get_game()} ({get_year( get_game() )})'

    RPC.update(
            state="{}s".format( get_formatted_time(elapsed_time) ), 
            details = status,
            large_image="superfamicom",
            #large_text="Coding in {}".format(get_language(file).capitalize()),
            #small_image="superfamicom",
            #small_text="Linux gang"
    )
    

