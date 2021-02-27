module.exports = {
    name: 'ass',
    discription: '',
    async execute(msg, args){
        const connection = await msg.member.voice.channel.join();
        const dispatcher = await connection.play('./hl1_sounds/ass.wav', {volume: 0.75})
        dispatcher.on('finish', ()=>{
            timer = 0;
            setTimeout(()=>{
                connection.disconnect();
                dispatcher.destroy();
            }, timer)
        })
    }
}