module.exports = {
    name: 'rockandstone',
    discription: '',
    async execute(msg, args){
        const randNum = Math.floor(Math.random() * (10) + 1 );
        const connection = await msg.member.voice.channel.join();
        const volume = 0.75;
        console.log(randNum);
        switch (randNum) {
            case 1:  dispatcher = await connection.play('./deeprock_sounds/RockAndStoneSalute_02.ogg', {volume: volume});
                break;
            case 2:  dispatcher = await connection.play('./deeprock_sounds/RockAndStoneSalute_07.ogg', {volume: volume});
                break;
            case 3:  dispatcher = await connection.play('./deeprock_sounds/RockAndStoneSalute_10.ogg', {volume: volume});
                break;
            case 4:  dispatcher = await connection.play('./deeprock_sounds/Saluting2_2.ogg', {volume: volume});
                break;
            case 5:  dispatcher = await connection.play('./deeprock_sounds/Saluting2_4.ogg', {volume: volume});
                break;
            case 6:  dispatcher = await connection.play('./deeprock_sounds/Saluting2_6.ogg', {volume: volume});
                break;
            case 7:  dispatcher = await connection.play('./deeprock_sounds/Saluting2_7.ogg', {volume: volume});
                break;
            case 8:  dispatcher = await connection.play('./deeprock_sounds/Saluting2_11.ogg', {volume: volume});
                break;
            case 9:  dispatcher = await connection.play('./deeprock_sounds/Saluting2_12.ogg', {volume: volume});
                break;
            case 10:  dispatcher = await connection.play('./deeprock_sounds/Saluting2_15.ogg', {volume: volume});
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