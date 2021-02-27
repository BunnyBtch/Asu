module.exports = {
    name: 'stahp',
    discription: '',
    async execute(msg, args){
        const randNum = Math.floor(Math.random() * (3) + 1 );
        const connection = await msg.member.voice.channel.join();
        switch(randNum){
            case 1: dispatcher = await connection.play('./hl1_sounds/sci_stahp.wav', {volume: 0.75})
                break;
            case 2: dispatcher = await connection.play('./hl1_sounds/scream11.wav', {volume: 0.75});
                break;
            case 3: dispatcher = await connection.play('./hl1_sounds/scream12.wav', {volume: 0.75});
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