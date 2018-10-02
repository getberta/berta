module.exports = function commandBrain(command) {

    var commandSplited = command.split(' ');

    if(commandSplited[0] == 'berta') {
        console.log('berta core - Command accepted!');
        console.log(commandSplited);

        if(commandSplited[2] == messages.m_play) {
            var commandNotRep = command.replace('berta', ' ');
            var commandDone = commandNotRep.replace(messages.m_play, ' ');
            spotifyControl(commandDone);
        } 
    
    } else {
        console.log('berta core - Command not accepted!');
        console.log(commandSplited);
    }

};
