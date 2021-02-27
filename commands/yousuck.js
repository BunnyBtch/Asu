module.exports = {
    name: 'yousuck',
    discription: '',
    async execute(msg, args){
        const connection = await msg.member.voice.channel.join();
        const dispatcher = await connection.play('./tf2_sounds/scout_jeers07.wav', {volume: 0.75})
        dispatcher.on('finish', ()=>{
            setTimeout(() => {
                connection.disconnect();
                dispatcher.destroy();
            }, 0);
        })
    }
}