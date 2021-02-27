module.exports = {
    name: 'shutup',
    discription: '',
    async execute(msg, args){
        const randNum = Math.floor(Math.random() * (2) + 1 );
        const connection = await msg.member.voice.channel.join();
        const volume = 0.75;
        switch (randNum) {
            case 1: dispatcher = await connection.play('./hl1_sounds/shutup.wav', {volume: volume});
                break;
            case 2: dispatcher = await connection.play('./hl1_sounds/shutup2.wav', {volume: volume});
                break;
        }
        dispatcher.on('finish', ()=>{
            setTimeout(()=>{
                connection.disconnect();
                dispatcher.destroy();
            }, 0)
        })
    }
}