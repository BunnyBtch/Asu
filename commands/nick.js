module.exports = {
    name: 'nick',
    discription: '',
    async execute(msg, args){
        const connection = await msg.member.voice.channel.join();
        const dispatcher = await connection.play('./l4d2_sounds/namenick12.wav', {volume: 0.75})
        dispatcher.on('finish', ()=>{
            setTimeout(() => {
                connection.disconnect();
                dispatcher.destroy();
            }, 0);
        })
    }
}