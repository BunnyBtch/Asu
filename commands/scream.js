module.exports = {
    name: 'scream',
    discription: '',
    async execute(msg, args){
        const randNum = Math.floor(Math.random() * (28) + 1 );
        const connection = await msg.member.voice.channel.join();
        const volume = 0.75;
        console.log(randNum);
        switch (randNum) {
            case 1:  dispatcher = await connection.play('./hl1_sounds/scream01.wav', {volume: volume});
                break;
            case 2:  dispatcher = await connection.play('./hl1_sounds/scream1.wav', {volume: volume});
                break;
            case 3:  dispatcher = await connection.play('./hl1_sounds/scream02.wav', {volume: volume});
                break;
            case 4:  dispatcher = await connection.play('./hl1_sounds/scream2.wav', {volume: volume});
                break;
            case 5:  dispatcher = await connection.play('./hl1_sounds/scream03.wav', {volume: volume});
                break;
            case 6:  dispatcher = await connection.play('./hl1_sounds/scream3.wav', {volume: volume});
                break;
            case 7:  dispatcher = await connection.play('./hl1_sounds/scream04.wav', {volume: volume});
                break;
            case 8:  dispatcher = await connection.play('./hl1_sounds/scream4.wav', {volume: volume});
                break;
            case 9:  dispatcher = await connection.play('./hl1_sounds/scream05.wav', {volume: volume});
                break;
            case 10:  dispatcher = await connection.play('./hl1_sounds/scream5.wav', {volume: volume});
                break;
            case 11:  dispatcher = await connection.play('./hl1_sounds/scream06.wav', {volume: volume});
                break;
            case 12:  dispatcher = await connection.play('./hl1_sounds/scream6.wav', {volume: volume});
                break;
            case 13:  dispatcher = await connection.play('./hl1_sounds/scream07.wav', {volume: volume});
                break;
            case 14:  dispatcher = await connection.play('./hl1_sounds/scream7.wav', {volume: volume});
                break;
            case 15:  dispatcher = await connection.play('./hl1_sounds/scream08.wav', {volume: volume});
                break;
            case 16:  dispatcher = await connection.play('./hl1_sounds/scream09.wav', {volume: volume});
                break;
            case 17:  dispatcher = await connection.play('./hl1_sounds/scream14.wav', {volume: volume});
                break;
            case 18:  dispatcher = await connection.play('./hl1_sounds/scream15.wav', {volume: volume});
                break;
            case 19:  dispatcher = await connection.play('./hl1_sounds/scream16.wav', {volume: volume});
                break;
            case 20:  dispatcher = await connection.play('./hl1_sounds/scream17.wav', {volume: volume});
                break;
            case 21:  dispatcher = await connection.play('./hl1_sounds/scream18.wav', {volume: volume});
                break;
            case 22:  dispatcher = await connection.play('./hl1_sounds/scream19.wav', {volume: volume});
                break;
            case 23:  dispatcher = await connection.play('./hl1_sounds/scream20.wav', {volume: volume});
                break;
            case 24:  dispatcher = await connection.play('./hl1_sounds/scream21.wav', {volume: volume});
                break;
            case 25:  dispatcher = await connection.play('./hl1_sounds/scream22.wav', {volume: volume});
                break;
            case 26:  dispatcher = await connection.play('./hl1_sounds/scream23.wav', {volume: volume});
                break;
            case 27:  dispatcher = await connection.play('./hl1_sounds/scream24.wav', {volume: volume});
                break;
            case 28:  dispatcher = await connection.play('./hl1_sounds/scream25.wav', {volume: volume});
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