var player = require('play-sound')(opts = {})

function playMusic() {
    player.play('./sound/vineboom.mp3', function(err){ if(err) { console.log(err) ;} })
}

function stopMusic() {
    // access the node child_process in case you need to kill it on demand
    var audio = player.play('foo.mp3', function(err){
        if (err && !err.killed) throw err
    })
    audio.kill()
}

playMusic();