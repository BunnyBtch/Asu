module.exports = {
    name: 'government',
    discription: '',
    async execute(msg, args){
        const connection = await msg.member.voice.channel.join();
        const dispatcher = await connection.play('./clip_sounds/government.wav', {volume: 1})
        dispatcher.on('finish', ()=>{
            setTimeout(() => {
                connection.disconnect();
                dispatcher.destroy();
            }, 0);
        })
    }
}