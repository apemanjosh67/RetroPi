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

def get_game():
    with open("app/json/status.json", "r") as j: status = json.load(j)

    if (status["currentGame"] == "null"): return "Browsing games"
    return status["currentGame"]

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

    RPC.update(
            state="Time elapsed: {}s".format( get_formatted_time(elapsed_time) ), 
            details= get_game(),
            large_image="superfamicom",
            #large_text="Coding in {}".format(get_language(file).capitalize()),
            #small_image="superfamicom",
            #small_text="Linux gang"
    )
    

