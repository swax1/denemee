const Discord = require('discord.js');
const client = new Discord.Client();

// Botun tokenı
const token = 'MTIxMDMxMDE0ODIxNjU4NjI1MA.GDIiY2.FUFTsdREyf_spwqa6bVd4SGrCWsYAJMTohq200';

// Bot hazır olduğunda yapılan işlemler
client.once('ready', () => {
    console.log('GİRDİ');
    // Zamanlayıcı başlat
    startTimer();
});

// Zamanlayıcı başlatma fonksiyonu
function startTimer() {
    setInterval(() => {
        const now = new Date();
        // İstediğiniz zamanı burada ayarlayın (şu anda saat 08:00 olarak ayarlanmıştır)
        if (now.getHours() === 13 && now.getMinutes() === 55) {
            const channel = client.channels.cache.get('1210869447729094696'); // Kanal ID'sini buraya girin
            if (channel) {
                channel.send("14:00 Crystal Fortress War Etkinliği Yaklaşıyor! @everyone ");
            } else {
                console.log('Belirtilen kanal bulunamadı.');
            }
        }
    }, 60000); // Her dakika kontrol et (60000 milisaniye = 1 dakika)

    setInterval(() => {
        const now = new Date();
        // İstediğiniz zamanı burada ayarlayın (şu anda saat 08:00 olarak ayarlanmıştır)
        if (now.getHours() === 19 && now.getMinutes() === 55) {
            const channel = client.channels.cache.get('1210869447729094696'); // Kanal ID'sini buraya girin
            if (channel) {
                channel.send("20:00 Crystal Fortress War Etkinliği Yaklaşıyor! @everyone ");
            } else {
                console.log('Belirtilen kanal bulunamadı.');
            }
        }
    }, 60000); // Her dakika kontrol et (60000 milisaniye = 1 dakika)

    setInterval(() => {
        const now = new Date();
        // İstediğiniz zamanı burada ayarlayın (şu anda saat 08:00 olarak ayarlanmıştır)
        if (now.getHours() === 1 && now.getMinutes() === 55) {
            const channel = client.channels.cache.get('1210869447729094696'); // Kanal ID'sini buraya girin
            if (channel) {
                channel.send("02:00 Crystal Fortress War Etkinliği Yaklaşıyor! @everyone ");
            } else {
                console.log('Belirtilen kanal bulunamadı.');
            }
        }
    }, 60000); // Her dakika kontrol et (60000 milisaniye = 1 dakika)

    setInterval(() => {
        const now = new Date();
        // İstediğiniz zamanı burada ayarlayın (şu anda saat 08:00 olarak ayarlanmıştır)
        if (now.getHours() === 14 && now.getMinutes() === 55) {
            const channel = client.channels.cache.get('1210869447729094696'); // Kanal ID'sini buraya girin
            if (channel) {
                channel.send("15:00 Mount Race Etkinliği Yaklaşıyor! @everyone ");
            } else {
                console.log('Belirtilen kanal bulunamadı.');
            }
        }
    }, 60000); // Her dakika kontrol et (60000 milisaniye = 1 dakika)

    setInterval(() => {
        const now = new Date();
        // İstediğiniz zamanı burada ayarlayın (şu anda saat 08:00 olarak ayarlanmıştır)
        if (now.getHours() === 17 && now.getMinutes() === 55) {
            const channel = client.channels.cache.get('1210869447729094696'); // Kanal ID'sini buraya girin
            if (channel) {
                channel.send("18:00 Mount Race Etkinliği Yaklaşıyor! @everyone ");
            } else {
                console.log('Belirtilen kanal bulunamadı.');
            }
        }
    }, 60000); // Her dakika kontrol et (60000 milisaniye = 1 dakika)

    setInterval(() => {
        const now = new Date();
        // İstediğiniz zamanı burada ayarlayın (şu anda saat 08:00 olarak ayarlanmıştır)
        if (now.getHours() === 9 && now.getMinutes() === 55) {
            const channel = client.channels.cache.get('1210869447729094696'); // Kanal ID'sini buraya girin
            if (channel) {
                channel.send("10:00 Mount Race Etkinliği Yaklaşıyor! @everyone ");
            } else {
                console.log('Belirtilen kanal bulunamadı.');
            }
        }
    }, 60000); // Her dakika kontrol et (60000 milisaniye = 1 dakika)

    setInterval(() => {
        const now = new Date();
        // İstediğiniz zamanı burada ayarlayın (şu anda saat 08:00 olarak ayarlanmıştır)
        if (now.getHours() === 2 && now.getMinutes() === 55) {
            const channel = client.channels.cache.get('1210869447729094696'); // Kanal ID'sini buraya girin
            if (channel) {
                channel.send("03:00 Mount Race Etkinliği Yaklaşıyor! @everyone ");
            } else {
                console.log('Belirtilen kanal bulunamadı.');
            }
        }
    }, 60000); // Her dakika kontrol et (60000 milisaniye = 1 dakika)
}



// Botun tokenıyla giriş yapma
client.login(token);
