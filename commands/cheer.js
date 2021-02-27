module.exports = {
    name: 'cheer',
    discription: '',
    async execute(msg, args){
        const randNum = Math.floor(Math.random() * (2) + 1 );
        const connection = await msg.member.voice.channel.join();
        const volume = 0.75;
        console.log(randNum);
        switch (randNum){
            case 1: dispatcher = await connection.play('./tf2_sounds/engineer_cheers01.wav', {volume: volume});
                break;
            case 2: dispatcher = await connection.play('./tf2_sounds/engineer_cheers02.wav', {volume: volume});
                break;
        }
        dispatcher.on('finish', ()=>{
            timer = 0;
            setTimeout(()=>{
                connection.disconnect();
                dispatcher.destroy();
            }, timer)
        })
    }
}