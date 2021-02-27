module.exports = {
    name: 'stop',
    discription: '',
    async execute(msg, args){
        const connection = await msg.member.voice.channel.join();
        const dispatcher = await connection.play('./hl1_sounds/donthurtem.wav', {volume: 0.75})
        dispatcher.on('finish', ()=>{
            setTimeout(()=>{
                connection.disconnect();
                dispatcher.destroy();
            })
        }, 0)
    }
}